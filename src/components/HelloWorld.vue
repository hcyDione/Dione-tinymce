<template>
    <div class="hello">
        <!--<ul>
            <li>
                <a
                  href="https://vuejs.org"
                  target="_blank"
                >
                  Core Docs
                </a>
            </li>
        </ul>-->
        <div class="tinymce">
        <!-- <editor v-model="content" api-key="API_KEY" :init="{plugins: 'wordcount'}" ></editor>-->
            <textarea :id="id" :value="content"></textarea>
        </div>
        <div class="mask" v-if="uploadimg == true">
            <div class="imgupload">
                <div class="header">
                   <span>上传本地图片</span>
                </div>
                <div class="body">
                    <div class="chooseImg">
                        <button class="imgbtn">选择图片</button>
                        <input type="file" class="inputfile" accept="image/*" @change="handleFileChange" ref="inputer"/>
                    </div> 
                </div>
                <div class="footer">
                    <button class="confirm"  v-on:click="confirm">确定</button>
                    <button class="cancel"  v-on:click="cancel">取消</button>
                </div>
            </div>
        </div>
        <div class="mask" v-if="uploadvideo == true">
            <div class="imgupload">
                <div class="header">
                   <span>上传本地视频</span>
                </div>
                <div class="body">
                    <div class="chooseImg">
                        <button class="imgbtn">选择视频</button>
                        <input type="file" class="inputfile" accept="video/*" @change="handleVideoChange" ref="videoer"/>
                    </div> 
                </div>
                <div class="footer">
                    <button class="confirm"  v-on:click="confirmvideo">确定</button>
                    <button class="cancel"  v-on:click="cancelvideo">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

//import Editor from "@tinymce/tinymce-vue";
import tinymce from 'tinymce/tinymce';
import 'tinymce/themes/modern/theme'; 
import 'tinymce/plugins/paste';
import 'tinymce/plugins/link';
import 'tinymce/plugins/image'
import 'tinymce/plugins/code'
import 'tinymce/plugins/table'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/contextmenu'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/colorpicker'
import 'tinymce/plugins/textcolor'
//import 'tinymce/langs/zh_CN';    

export default {
    name: 'HelloWorld',
    components:{
       
    },
    data () {
        return {
            id: 'editor',
            content: '',
            uploadimg: false,
            uploadvideo: false,
            tinymceEditor:null,
            filedata: '',
            token:'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzExMjcwNTYsInVzZXJuYW1lIjoiMTgwMDIyNDI1NjU3MjI4MjAyNCJ9.3od2wH72tRR3cjPSXaj7YRzo8iSxRzSE7zuVb5PIrTc' //获取自己服务端的token值
        }
    },
    methods:{
        confirm () {
            var img = "<p><img src='https://images.yitushijie.com/error.png'/></p>";
            this.tinymceEditor.insertContent(img);
            this.uploadimg = false
        },
        cancel (){
            this.uploadimg = false
        },
        confirmvideo () {
            var video = "<p><video src='https://images.yitushijie.com/4344072085498187963' controls></video></p>";
            this.tinymceEditor.insertContent(video);
            this.uploadvideo = false
        },
        cancelvideo (){
            this.uploadvideo = false
        },
        handleFileChange(e){
             let self = this
             let inputDom = this.$refs.inputer //拿到的是个Dom元素
             var file = inputDom.files[0]
             //将图片转成base64格式,以base64编码的格式展示出来
             /*
             var path = inputDom.value
             if (!window.FileReader){
                return 
             }
             var reader = new FileReader();
             reader.readAsDataURL(file)
             reader.onloadend = function () {
                 var dataUrl = this.result
             }
             */
             //转换成网络图片来展示出来
             var param = new FormData();
             param.append('Filedata',file)
             // 调用自己的服务端接口
             self.$http.post('https://api.lotusdata.com/ip/v1/file/standardupload', param, {
                headers: 
                    { 
                        'Authorization': self.token,
                        'Content-Type':'multipart/form-data' 
                    } 
                }).then( function (res){
                    if (res.data.code == "0"){
                        var imgUrl = res.data.data
                        var img = "<p><img src='"+imgUrl+"'/></p>";
                        self.tinymceEditor.insertContent(img);
                        self.uploadimg = false
                    }
                });
        },
        handleVideoChange (e) {
            let self = this
            let inputDom = this.$refs.videoer //拿到的是个Dom元素
            var file = inputDom.files[0];
            var param = new FormData();
            param.append('Filedata',file)
            // 调用自己的服务端接口
            self.$http.post('https://api.lotusdata.com/v1/file/videoupload', param, {
                headers: 
                    { 
                        'Authorization': self.token,
                        'Content-Type':'multipart/form-data' 
                    } 
                }).then( function (res){
                    if (res.data.code == "0"){
                        var videoUrl = res.data.data
                        var video = "<p><video src='"+videoUrl+"' controls></video></p>";
                        self.tinymceEditor.insertContent(video);
                        self.uploadvideo = false
                    }
                });
        }
    },
    mounted: function(){
        var self = this
        this.$nextTick(function(){
            tinymce.init({
                selector: '#editor',
                language_url: '/static/editor/zh_CN.js',
                language:"zh_CN",
                skin_url: '/static/editor/skins/lightgray',
                init_instance_callback:function(editor) {
                    console.log("editor is now initialized");       
                },  
                plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu', 
                toolbar:
                'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | undo redo | code uploadpic uploadvideo',
                setup: function (editor) {
                    self.tinymceEditor = editor
                    /*基于tinymce 自己添加的上传图片按钮,切记要在toolbar初始化时*/
                    editor.addButton('uploadpic', {
                        title: '上传图片',
                        image: 'https://images.yitushijie.com/10528614111920410800',
                        onclick: function () {
                            console.log('add image')
                            self.uploadimg = true
                        }
                    })
                    /*基于tinymce 自己添加的上传视频按钮*/
                    editor.addButton('uploadvideo', {
                        title: '上传视频',
                        image: 'https://images.yitushijie.com/4494133835768289360',
                        onclick: function () {
                            console.log('add video')
                            self.uploadvideo = true
                        }
                    })
                }
            })
        })
    }
}
</script>

<style scoped>
h1, h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
button{
    border:0px;background-color:transparent;
}
.hide{
    display:none;
}
.mask{
    background-color:rgba(255,255,255,0.3);
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    display: flex;
    align-items: center;
    justify-content: center;
}
.imgupload{
    width:380px;
    height:182px;
    border: 1px solid #c5c5c5;
    background-color: #fff;
}
.inputfile{
    position:absolute;
    width:100px;
    height:50px;
    opacity: 0;
    top:0;
    left:0;
}
.header{
    height:40px;
    line-height: 40px;
    font-size:20px;
    color:#595959;
    font-weight:bold;
    padding:0px 20px;
    text-align: left;
    border-bottom: 1px solid #c5c5c5;
}
.body{
    width:100%;
    height:50px;
    padding:20px 0px;
    border-bottom: 1px solid #c5c5c5;
}
.chooseImg{
    position:relative;
    width:100px;
    height:50px;
    margin:0px auto;
}
.imgbtn{
    width:98px;
    height:48px;  
    display:block;
    line-height:48px;
    border: 1px solid #c5c5c5; 
    font-size:16px;
    color: #595959;
}
.footer{
    height:30px;
    padding:10px 20px;
    text-align: right;
}
.confirm {
    width:48px;
    height:28px;
    line-height:28px; 
    font-size:14px;
    color: #fff;
    background-color: #2376d2;
    border: 1px solid #2376d2; 
}
.cancel{
    width:48px;
    height:28px;
    line-height:28px; 
    font-size:14px;
    color:#595959;
    border: 1px solid #c5c5c5;
}
</style>
