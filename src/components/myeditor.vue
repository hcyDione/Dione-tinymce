<style lang="less" scoped>
    .wrap{
    	width: 100%;
    	height: 100%;
        display: block;
        background-image: url(./../assets/bg.jpg);
        background-size:100% 100%;
    }
    .wrapContainer{
        width: 1024px;
        min-height: 512px;
        max-height: 869px;
        margin: 0 auto;
        padding: 10px 30px;
        padding-top:40px;/*之前无这句*/
        box-sizing:content-box;
    }
    .container{
        width: 964px;
        height: 0px;
    }
    .editor-left{
        width: 362px;
        height: 100%;
        border-radius: 12px;
        border: 1px solid rgba(0, 0, 0, .5);
        overflow: hidden;
        background: transparent;
        position: relative;
        .master{
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, .35);
            overflow: hidden;
        }
        .scrollLeft{
            padding-bottom:47px;/*需后期调整*/
            box-sizing: border-box;
        }
        .essay-header{
            width:100%;
            height:120px;
            position: relative;
            background-position:center;
            background-repeat: no-repeat;
            background-size:cover;
            border-bottom:1px solid rgba(0,0,0,.15);
            overflow:hidden;
            /*background-image: url(http://static2.ivwen.com/user/38952333/c809ed4269f0000135c41ace1f001166.jpg-cover2);*/
            h2{
                margin: 11px 8px 0 14px;
                font-size: 20px;
                color: #fff;
                text-shadow: 0px 1px 1px #333; 
                /*word-break: break-all;//允许在单词内换行
                word-wrap: break-word;//在长单词或url地址内部换行
                white-space: pre-wrap;//保留空白符换行
                text-align: start;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                height: 48px;*/
            }
            i{
                width: 83px;
                height: 22px;
                line-height: 22px;
                position: absolute;
                bottom: 10px;
                color: #3d3d3d;
                background: rgba(255,255,255,.7);
                text-align:center;
                padding:0 6px;
                border-radius: 5px;
                overflow:hidden;
                cursor: pointer;
            }
            .music{
                left: 14px;
            }
            .cover{
                right:11px;
            }
        }
        .section-container{
            min-height: 500px;/*700*/
            overflow-y: scroll;
            .cy-item{
                width: 325px;
                margin: 20px auto;
                box-sizing: border-box;
            }
            .section{
                height:110px;
                width:100%;
                border:1px solid rgba(0,0,0,.3);
                border-radius:11px;
                background:rgba(255,255,255,.8);
                position: relative;
                cursor:pointer;
            }
            .cy-item:hover .section:before{
                content: '';
                width:100%;
                height:100%;
                position:absolute;
                left:0;
                top:0;
                box-sizing: border-box;
                border: 2px solid #f9e87e;
                border-radius: 11px;
            }
            .content{
                box-sizing:border-box;
                padding:16px 10px 16px 22px;
                .left{
                    width:76px;
                    height:76px;
                }
                .isimg{
                    border:1px solid rgba(0,0,0,.3);
                }
                .video{
                    position:relative;
                    .videoicon{
                        width:40px;
                        height:40px;
                        position:absolute;
                        top:0;
                        left:0;
                        right:0;
                        bottom:0;
                        margin: auto;
                    }
                }
                img{
                    width:100%;
                    height:100%;
                }
                .right{
                    width:212px;
                    height:76px;
                    line-height: 19px;
                    border: 1px solid rgba(255, 255, 255, .0);
                    border-radius:5px;
                    overflow:hidden;
                    cursor: pointer;
                    box-sizing: border-box;
                }
                p{
                    width:100%;
                    max-height:100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: pre-wrap;
                    word-wrap: break-word;
                    display: -webkit-box;
                    -webkit-line-clamp: 4;
                    -webkit-box-orient: vertical;
                }
            }
            .dragLayer{
                position: absolute;
                top: 0;
                left: 0;
                width:18px;
                height:18px;
                .del{
                   color:#ff0000;
                   font-size:20px;
                   width:18px;
                   height:18px;
                   font-weight:400;    
                }
            }
            .add-section{
                height: 30px;
                width: 100%;
                ul{
                    margin:0 auto;
                    width: 150px;
                    height: 100%;
                    border-radius:15px;
                    border: 1px solid rgba(0,0,0,.1);
                    background: rgba(0,0,0,.3);
                    position: relative;
                }
                ul:before{
                    content: '';
                    width: 14px;
                    height: 14px;
                    position: absolute;
                    left: -24px;
                    top: 8px;
                    background: url(./../assets/add_section.png) no-repeat;
                    background-size: cover;
                }
                li {
                    width:45px;
                    height:30px;
                    float:left;
                    margin-right:5px;
                    border-radius:2px;
                }
                span{
                    display: block;
                    width: 100%;
                    height: 100%;
                    position: relative;
                    border-radius: 4px;
                    cursor: pointer;
                }
                b{
                    width: 24px;
                    height: 16px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    margin: auto;
                    background-repeat: no-repeat; 
                    background-size: contain;
                }
                i{
                    display:none;
                }
                #add-text b{
                    background: url(./../assets/text.png);
                }
                #add-img b{
                    background: url(./../assets/images.png);
                }
                #add-video b{
                    background: url(./../assets/video.png);
                }
                input{
                    width: 24px;
                    height: 16px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    opacity: 0;
                    z-index: 3;
                    cursor: pointer;
                }
            }
        }
        .cy-editor{
            position:absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding:7px 9px;
            height:46px;
            box-sizing:border-box;
            border-top: 1px solid rgba(0, 0, 0, .15);
            background:rgba(255,255,255,.75);
            .editor{
                position: relative;
            }
            .cy-pvw{
                height:32px;
                line-height:32px;
                width:100px;
                text-align:center;
                margin:0 auto;
                font-size:14px;
                color:#fff;
                border-radius: 5px;
                font-weight: 400;
                background-image:linear-gradient(#6eb4f7, #1262fb);
            }
            .moxie-shim{
                width: 100px;
                height: 32px;
                margin: 0 auto;
                overflow: hidden;
                input{
                    position: absolute;
                    top:0;
                    width:100%;
                    height:100%;
                    opacity:0;
                }
            }
        }
    }
    .editor-right{
        width: 572px;
        height: 100%;
        border-radius: 12px;
        border: 1px solid rgba(0, 0, 0, .5);
        background: transparent;
        
        position: relative;
        .web-page{
            width:100%;
            padding-bottom: 46px;
            box-sizing: border-box;
            padding-top: 11px;
            border-radius: 12px;
            background: #ffffff;
        }
        .cy-circle{
            width:100%;
            max-height: 609px;/*809*/
            overflow-y: scroll;  
        }
        .cover{
            margin-top: 9px;
            .well{
                padding:0 16px;
            }
            .title{
                font-size: 22px;
                line-height: 33px;
                color: #333333;   
                letter-spacing: 0;/*字符和字符之间的空间*/
            }
            .time-read{
                margin-top: 12px;
                font-size: 15px;
                color: #9B9B9B;
                letter-spacing: 0;
                line-height: 20px;
                word-break: break-all;
                span{
                    margin-right: 10px;
                }
                .nickname{
                    color: #6D9AD1;  
                }
                .read{
                    word-break: keep-all;
                }
            }
        }
        .cy-contentwrap{
            margin-top:10px;
            .section{
                margin:40px 0;
            }
            .section:first-child{
                margin-top: 0;
                margin-bottom: 40px;
            }
            .img-box{
                margin:15px 0;
                padding:0 16px;
                box-sizing: border-box;
                img{
                    width: 100%;
                    vertical-align: bottom;
                }
            }
            .text-box{
                margin:15px 0;
                padding:0 16px;
                line-height: 18px;
                word-wrap: break-word;
                font-weight: normal;
                white-space: pre-wrap;
                text-align: justify;
            }
            .video-box{
                padding:0 16px;
                video{
                    width:100%;
                    background:#000;
                    max-height:348px;
                    object-fit: cover;
                }
            }
        }
        .footer_root{
            .report{
                font-size: 16px;
                color: #9b9b9b;
                letter-spacing: 0;
                line-height: 24px;
                background-color:transparent;
                padding: 20px 0 28px;
                box-sizing: border-box;
                .well{
                    box-sizing: border-box;
                    padding:0 16px;
                    .against{
                        color: #2887F0;
                    }
                }
            }
            .comment{
                border-top: 8px solid #f5f6f9;
                background-color: transparent;
                .well{
                    padding:20px 0px 0px 0px;
                    box-sizing: border-box;
                }
                h3{
                    color: #333333;
                    font-size: 16px;
                    line-height: 16px;
                    margin-bottom: 20px;
                    padding-left: 16px;
                }
                .comment-item{
                    border-top:1px solid #f5f6f9;
                }
                .more{
                    padding:25px 16px 25px 25px;
                    font-size:16px;
                }
                textarea{
                    border-radius:5px;
                    background:#f5f6f9;
                    width:100%;
                    height:36px;
                    color: #333333;
                    margin-bottom: 25px;
                    overflow-y: scroll;
                    padding: 8px 12px;
                    word-wrap: break-word;
                    box-sizing: border-box;
                }
                .btn-block{
                    color: #fff;
                    width: 100%;
                    background-color:#2887F0;
                    border-radius:7px;
                    padding:15px 0;
                    font-size:16px;
                    text-align:center;
                }
            }
        }
        .foot-tools{
            position: absolute;
            bottom:0;
            left:0;
            width:100%;
            height: 46px;
            padding:7px 9px;
            box-sizing: border-box;
            border-top: 1px solid rgba(0,0,0,.15);
            border-radius:0 0 12px 12px;
            background: rgba(255, 255, 255, .8);
            .cy-tools{
                position:relative;
            }
            button{
                width: 32px;
                height: 32px;
                line-height: 32px;
                font-size: 20px;
                text-align: center;
            }
            .del{
                color:#e8444f;
                border:1px solid rgba(0,0,0,.3);
                border-radius:8px;
                background-color:rgba(255,255,255,.5);
                position:absolute;
                left:20px;
                top:0;
            }
            .look{
                color:#4d4d4d;
                border:1px solid rgba(0,0,0,.3);
                border-radius:8px;
                background-color:rgba(255,255,255,.5);
                position:absolute;
                left:70px;
                top:0;
            }
            .cen-btn{
                width:222px;
                height:100%;
                margin:0 auto;
            }
            .btn-long-blue{
                width:100px;
                height:32px;
                line-height:32px;
                text-align:center;
                border-radius:8px;
                color:#fff;
                font-size:14px;
                background-image:linear-gradient(#6eb4f7, #1262fb);
            }
        }
        .win-edite{
            width:100%;
            height:100%;
            padding: 15px 20px 20px;
            background:rgba(255,255,255,.75);
            border-radius: 12px;
            overflow: hidden;
            box-sizing: border-box;
            .cy-header{
                width:100%;
                height:30px;
                position:relative;
                h2{
                    position:absolute;
                    width:100%;
                    text-align:center;
                    line-height:30px;
                    font-size:22px;
                }
                span{
                    display:inline-block;
                    color: #525252;
                    text-align: center;
                    font-size: 14px;
                    border-radius: 8px;
                    padding: 8px 10px;
                    border: 1px solid rgba(0, 0, 0, .3);
                    background: transparent;
                }
                .moxie-shim{
                    height: 30px;
                    width: 82px;
                    position: absolute;
                    top:0;
                    left:0;
                    input{
                        height: 30px;
                        width: 82px;
                        opacity:0;
                    }
                }
            }
            #content-img{
                width: 100%;
                height: 225px;
                position: relative;
                margin: 15px 0px;
                padding: 0 15px;
                box-sizing: border-box;
                .pvw {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    margin: auto;
                    max-height: 100%;
                    max-width: 100%;
                    cursor: pointer;
                }
                i{
                    position: absolute;
                    bottom: 0;
                    right: 5px;
                    font-size: 20px;
                    color: red;
                }
            }
            .cy-content{
                border: 1px solid rgba(0, 0, 0, .25);
                border-radius: 10px;
                overflow: hidden;
                position: relative;
                .linkshow{
                    position: absolute;
                    height: 30px;
                    line-height: 30px;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    text-indent: 15px;
                    box-sizing: border-box;
                    font-size: 14px;
                    color: #167efb;
                    cursor: pointer;
                    background: rgba(0, 0, 0, .1);
                    font-weight: 400;
                }
                .tools{
                    height: 46px;
                    width: 100%;
                    border-bottom: 1px solid rgba(0, 0, 0, .25);
                    box-sizing: border-box;
                    position: relative;
                    .unre_do{
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 100%;
                        width: 110px;
                        li{
                            float:left;
                            height:17px;
                            width:17px;
                            margin:14px 0 0 14px;
                        }
                        a{
                            height: 100%;
                            width: 100%;
                            background-size: 100% 100%;
                            display: block;
                        }
                        a.undo{
                            background-image: url(./../assets/Undo-A.png)
                        }
                        a.redo{
                            background-image: url(./../assets/Redo-A.png)
                        }
                    } 
                    .text-edit{
                        width: 198px;
                        height: 100%;
                        margin: 0 auto;
                        .left{
                            width: 28px;
                            height: 28px;
                            margin-top: 8px;
                            margin-left: 14px;
                            background-size: contain;
                            background-position: center;
                            background-repeat: no-repeat;
                            position: relative;
                            div{
                                position:absolute;
                                z-index:1;
                                transition:all 0.5s linear; 
                            }
                        }
                        .left:first-child{
                            margin-left: 0;
                        }
                        a {
                            width: 100%;
                            height: 100%;
                            display: block;
                            background-size: cover; 
                        }
                        .bold{
                            font-weight: 600 !important;
                        }
                        a.bold{
                            background-image: url(./../assets/bold.png)
                        }
                        .bold-list ul{
                            width: 180px;
                            margin-left: -75px;
                            /*测试修改li*/
                            li{
                                float:left;
                                height:39px;
                            }
                            li.set-bold a{
                                background-image: url(./../assets/b.png);
                                width: 56px;
                            }
                            li.set-italic a{
                                background-image: url(./../assets/i.png);
                                width: 56px;
                            }
                            li.set-underline a{
                                background-image: url(./../assets/u.png);
                                width: 56px;
                            }
                            /*点击活跃*/
                            li.boldactive a{
                                background-image: url(./../assets/b-on.png) !important;
                            }
                            li.italicactive a{
                                background-image: url(./../assets/i-on.png) !important;
                            }
                            li.underlineactive a{
                                background-image: url(./../assets/u-on.png) !important;
                            }
                        }
                        a.size{
                            background-image: url(./../assets/size.png)
                        }
                        .size-list ul{
                            width: 180px;
                            margin-left: -75px;
                            li{
                                float:left;
                                height:39px;
                            }
                            li.set-sup a{
                                background-image: url(./../assets/sup.png);
                                width: 56px;
                            }
                            li.set-normal a{
                                background-image: url(./../assets/normal.png);
                                width: 56px;
                            }
                            li.set-big a{
                                background-image: url(./../assets/big.png);
                                width: 56px;
                            }
                            /*点击活跃*/
                            li.supactive a{
                                background-image: url(./../assets/sup-on.png) !important;
                            }
                            li.normalactive a{
                                background-image: url(./../assets/normal-on.png) !important;
                            }
                            li.bigactive a{
                                background-image: url(./../assets/big-on.png) !important;
                            }
                        }
                        a.center{
                            background-image: url(./../assets/center.png)
                        }
                        .center-list ul{
                            width: 180px;
                            margin-left: -75px;
                            li{
                                float:left;
                                height:39px;
                            }
                            li.set-left a{
                                background-image: url(./../assets/left.png);
                                width: 56px;
                            }
                            li.set-center a{
                                background-image: url(./../assets/center-a.png);
                                width: 56px;
                            }
                            li.set-right a{
                                background-image: url(./../assets/right.png);
                                width: 56px;
                            }
                            /*点击活跃*/
                            li.leftactive a{
                                background-image: url(./../assets/left-on.png) !important;
                            }
                            li.centeractive a{
                                background-image: url(./../assets/center-aon.png) !important;
                            }
                            li.rightactive a{
                                background-image: url(./../assets/right-on.png) !important;
                            }
                        }
                        .text-color{
                            margin-left: 14px;
                            position: relative;
                        }
                        a.color{
                            background-image: url(./../assets/color.png)
                        }
                        .color-list{
                            padding: 10px 25px;
                            box-sizing: border-box;
                            border-radius: 5px;
                            border: 1px solid #c1c1c1;
                            position: absolute;
                            left: 0px;
                            z-index: 9;
                            width: 337px;
                            background: #fff;
                            box-shadow: 0 1px 2px #ccc;
                            margin-left: -168px; 
                            li {
                                float: left;
                                width: 20px;
                                height: 20px;
                                margin-right: 24px; 
                            }
                            li:last-child{
                                margin-right: 0px; 
                            }
                            .c0{
                                background: #000000;
                            }
                            .c1{
                                background: #808080;
                            }
                            .c2{
                                background: #ed2308;
                            }
                            .c3{
                                background: #ff8a00;
                            }
                            .c4{
                                background: #39b54a;
                            }
                            .c5{
                                background: #167efb;
                            }
                            .c6{
                                background: #b06fbb;
                            }
                        }
                        a.icon-link{
                            width: 28px;
                            height: 28px;
                            font-size: 18px;
                            color: #454441;
                            line-height: 28px;
                            margin-top: 8px;
                            margin-left: 14px;
                            text-align: center;
                        }
                    }
                }
            }
            .textarea{
                display: block;
                width: 100%;
                height: 300px;
                padding: 15px 15px 0;
                box-sizing: border-box;
                /*min-height: calc(100% - 76px);*/
                background: rgba(0, 0, 0, .1);
                overflow-x: hidden;
                font-size: 16px;
                word-break: break-all;
                white-space: pre-wrap;
            }
        }
    }
    .mask{
        position:fixed;
        width:100%;
        height:100%;
        left:0;
        top:0;
        background-color:rgba(0,0,0,.3);
        .maskContainer{
            width:350px;
            height:205px;
            margin:0 auto;
            margin-top:20%;
            background-color:#fff;
            border-radius:15px;
            /*transform:translateY(-102.5px);*/
        }
        .masktitle{
            height:50px;
            line-height:50px;
            color:#333;
            font-size:16px;
            text-align:center;
        }
        .maskitem{
            height:37px;
            line-height:37px;
            margin:0 auto;
            span{
                margin:0px 10px 0px 25px;
                display:inline-block;
            }
            input{
                width:189px;
                height:35px;
                border:1px solid #ababab;
                border-radius:5px;
                padding:0 10px;
            }
        }
        .last{
            margin-top:15px;
            margin-bottom:25px;
        }
        .maskconfirm{
            height:40px;
            line-height:40px;
            width:100%;
            span{
                display:inline-block;
                width:50%;
                text-align:center;
                color:#167efc;
                box-sizing:border-box;
            }
            span:first-child{
                border-top:1px solid #ababab;
                border-right:1px solid #ababab;
            }
            span:last-child{
                border-top:1px solid #ababab;
            }
        }
    }
</style>

<template>
	<div class="wrap">
        <div class="wrapContainer clearfix">
            <!--<div class="container">
            </div>--> 
            <div class="editor-left left">
                <div class="user-name"></div>
                <div class="master">
                    <div class="scrollLeft">
                        <div class="essay-header" :style="styleObject">
                            <h2 class="edit-title" @click="setTitle">
                                {{texdetail.title}}
                            </h2>
                            <i class="music iconfont icon-musicnote">添加音乐</i>
                            <i class="cover" @click="replaceCover">
                                <em class="change iconfont icon-swap">更换封面</em>
                            </i>
                        </div>
                        <div class="section-container">
                            <div class="cy-section">
                                <div class="cy-item" v-for="(item, index) in videotexs"  :key="index" @click="opentext(item.type,index)">
                                    <div class="section">
                                        <div class="content clearfix">
                                            <div class="left video" v-if="item.isvideo">
                                                <!--<video :src="item.src" style="width:100%;height:100%;object-fit:fill;"/>-->
                                                <img src="./../assets/video-poster.png"/>
                                                <div class="videoicon"><img src="./../assets/icon-video.png"/></div>
                                            </div>
                                            <div class="left" :class="[item.ispic? 'isimg' : '']" v-else>
                                                <img :src="item.src"/>
                                            </div>
                                            <div class="right">
                                                <p v-html="item.text"></p>
                                            </div>
                                        </div>
                                        <div class="dragLayer">
                                            <i class="del iconfont icon-minus-circle" @click.stop="delItem(index)"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="add-section">
                                <ul class="clearfix">
                                    <li @click.stop="addText">
                                        <span id="add-text">
                                            <b></b>
                                            <i></i>
                                        </span>
                                    </li>
                                    <li @click.stop="addImg">
                                        <span id="add-img">
                                            <b></b>
                                            <i></i>
                                            <input type="file" accept="image/jpeg,.jpg,.jpeg,image/gif,.gif"/>
                                        </span>
                                    </li>
                                    <li @click.stop="addVideo">
                                        <span id="add-video">
                                            <b></b>
                                            <i></i>
                                            <input type="file" accept="image/jpeg,.jpg,.jpeg,image/gif,.gif"/>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                    <div class="cy-editor">
                        <div class="editor">
                            <div class="cy-pvw" @click="switchpre" v-if="ispre">
                                <i class="iconfont icon-bofang">&nbsp;预览</i>
                            </div>
                            <div class="cy-pvw" @click="newItem" v-if="!ispre">
                                <i class="iconfont icon-add">&nbsp;新建</i>
                            </div>
                            <div class="moxie-shim" v-if="!ispre">
                                <input type="file" accept="image/jpeg,.jpg,.jpeg,image/gif,.gif" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="editor-right right">
                <div class="web-page" v-show="!switchview">
                    <div class="cy-circle">
                        <div class="cover">
                            <div class="article-meta">
                                <div class="well">
                                    <h1 class="title">{{texdetail.title}}</h1>
                                    <p class="time-read">
                                        <span>{{texdetail.time}}</span>
                                        <span class="nickname">{{texdetail.name}}</span>
                                        <span class="read">阅读
                                            <span class="read-count">{{texdetail.readcount}}</span>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="content-foot">
                            <div class="cy-contentwrap">
                                <div class="content-container">
                                    <div class="section" v-for="(item, index) in texdetail.contents"  :key="index">
                                        <div class="text-box" v-if="item.istext">
                                            <h5><b v-html="item.text"></b></h5>
                                        </div>
                                        <div class="img-box" v-if="item.ispic">
                                            <img :src="item.src"/>
                                        </div>
                                        <div class="text-box" v-if="item.ispic">
                                            <h5><b v-html="item.text"></b></h5>
                                        </div>
                                        <div class="video-box" v-if="item.isvideo">
                                            <video :src="item.videosrc" controls="controls"></video>
                                        </div>
                                        <div class="text-box" v-if="item.isvideo">
                                            <h5><b v-html="item.text"></b></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="footer_root">
                                <div class="report">
                                    <div class="well clearfix">
                                        <span class="left">阅读
                                            <span class="read-count">{{texdetail.readcount}}</span>
                                        </span>
                                        <span class="against right">举报</span>
                                    </div>
                                </div>
                                <div class="comment">
                                    <div class="footer-section">
                                        <div class="well">
                                            <h3 class="title">
                                                热门评论 <span>(0)</span>
                                            </h3>
                                            <div class="comment-item">
                                                <div class="more">
                                                    <textarea maxlength="50" placeholder="写下你的感受">
                                                    
                                                    </textarea>
                                                    <button class="btn-block">一键制作</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="foot-tools" v-show="!switchview">
                    <div class="cy-tools">
                        <button class="del"><i class="iconfont icon-lajixiang"></i></button> 
                        <button class="look"><i class="iconfont icon-yulan"></i></button>   
                        <div class="cen-btn">
                            <button class="btn-long-blue"><i class="iconfont icon-fenxiang1"></i>&nbsp;分享</button> 
                            <button class="btn-long-blue"><i class="iconfont icon-wancheng"></i>&nbsp;编辑</button> 
                        </div>
                    </div>
                </div>
                <div id="work-img" class="win-edite" v-show="switchview">
                    <div class="cy-header clearfix">
                        <span class="beader-btn left" v-if="isshowpic">更换图片</span>
                        <span class="beader-btn left" v-if="isshowtext">添加图片</span>
                        <h2 v-if="isshowpic">图片配文</h2>
                        <h2 v-if="isshowtext">文字信息</h2>
                        <h2 v-if="isshowvideo">视频配文</h2>
                        <span class="finish right">完成</span>
                        <div class="moxie-shim">
                            <input type="file" accept="image/jpeg,.jpg,.jpeg,image/gif,.gif"/>
                        </div>
                    </div>
                    <div id="content-img">
                        <i class="iconfont icon-lajixiang" v-if="isshowpic"></i>
                        <img class="pvw" :src="currentsrc" v-if="isshowpic"/>
                        <video class="pvw" :src="currentsrc"  controls="controls" v-if="isshowvideo"/>  
                    </div>
                    <div class="cy-content">
                        <div class="linkshow" v-for="(item, index) in links"  :key="index">
                            <i class="iconfont icon-link" data-src="item.href"></i>
                            <span>{{item.desc}}</span>
                        </div>
                        <div class="tools">
                            <div class="unre_do">
                                <ul class="clearfix">
                                    <li @click.stop="setUndo">
                                        <a href="javascript:void(0);" class="undo"></a>
                                    </li>
                                    <li @click.stop="setRedo">
                                        <a href="javascript:void(0);" class="redo"></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="text-edit clearfix">
                                <div class="text-bold left">
                                    <a href="javascript:void(0);" class="bold" @click.stop="showbold"></a>
                                    <div class="bold-list" v-show="isshowbold">
                                        <ul class="clearfix">
                                            <li class="set-bold" :class="edit.boldactive" @click.stop="setBold">
                                                <a href="javascript:void(0);"></a>
                                            </li> 
                                            <li class="set-italic" :class="edit.italicactive" @click.stop="setItalic">
                                                <a href="javascript:void(0);"></a>
                                            </li>
                                            <li class="set-underline" :class="edit.underlineactive" @click.stop="setUnderline">
                                                <a href="javascript:void(0);"></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="text-size left">
                                    <a href="javascript:void(0);" class="size" @click.stop="showsize"></a>
                                    <div class="size-list" v-show="isshowsize">
                                        <ul class="clearfix">
                                            <li class="set-sup" :class="edit.supactive" @click.stop="setSup">
                                                <a href="javascript:void(0);"></a>
                                            </li>
                                            <li class="set-normal" :class="edit.normalactive" @click.stop="setNormal">
                                                <a href="javascript:void(0);"></a>
                                            </li>
                                            <li class="set-big" :class="edit.bigactive" @click.stop="setBig">
                                                <a href="javascript:void(0);"></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="text-center left">
                                   <a href="javascript:void(0);" class="center" @click.stop="showcenter"></a>
                                    <div class="center-list" v-show="isshowcenter">
                                        <ul class="clearfix">
                                            <li class="set-left" :class="edit.leftactive" @click.stop="setLeft">
                                                <a href="javascript:void(0);"></a>
                                            </li>
                                            <li class="set-center" :class="edit.centeractive" @click.stop="setCenter">
                                                <a href="javascript:void(0);"></a>
                                            </li>
                                            <li class="set-right" :class="edit.rightactive" @click.stop="setRight">
                                                <a href="javascript:void(0);"></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="text-color left">
                                   <a href="javascript:void(0);" class="color" @click.stop="showcolor"></a>
                                    <div class="color-list" v-show="isshowcolor">
                                        <ul class="clearfix">
                                            <li class="c0" data-color="rgb(1,1,1)" @click.stop="setColor($event)">
                                                <a href="javascript:void(0);"></a>
                                            </li>
                                            <li class="c1" data-color="#808080" @click.stop="setColor($event)">
                                                <a href="javascript:void(0);"></a>
                                            </li>
                                            <li class="c2" data-color="#ed2308" @click.stop="setColor($event)">
                                                <a href="javascript:void(0);"></a>
                                            </li>
                                            <li class="c3" data-color="#ff80aa" @click.stop="setColor($event)">
                                                <a href="javascript:void(0);"></a>
                                            </li>
                                            <li class="c4" data-color="#39b54a" @click.stop="setColor($event)">
                                                <a href="javascript:void(0);"></a>
                                            </li>
                                            <li class="c5" data-color="#167efb" @click.stop="setColor($event)">
                                                <a href="javascript:void(0);"></a>
                                            </li>
                                            <li class="c6" data-color="#b04fbb" @click.stop="setColor($event)">
                                                <a href="javascript:void(0);"></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <span @click.stop="setLink">
                                    <a href="javascript:void(0);" class="iconfont icon-link left"></a>
                                </span>
                            </div>
                        </div>
                        <div class="textarea" maxlength="5000" contenteditable="true" ref="currentDetail" v-html="currentDetail"  @input="getHtml">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mask" v-if="mask.isshow">
            <div class="maskContainer">
                <p class="masktitle">添加链接</p>
                <div class="maskitem">
                    <span>链接地址:</span>
                    <input type="text" placeholder="请输入需要跳转的网址" v-model="mask.href"/>
                </div>
                <div class="maskitem last">
                    <span>链接描述:</span>
                    <input type="text" placeholder="请输入超链接文字描述" v-model="mask.desc"/>
                </div>
                <div class="maskconfirm">
                    <span @click.stop="cancelmask">取消</span><span @click.stop="conformmask">添加</span>
                </div>
            </div>
        </div>
        <Loading v-if="isLoading"></Loading>
	</div>   
</template>

<script>

import Loading from './loading.vue'

export default {
    name: 'myeditor',
    components:{
       Loading
    },
    data () {
        return {
            token:'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzExMjcwNTYsInVzZXJuYW1lIjoiMTgwMDIyNDI1NjU3MjI4MjAyNCJ9.3od2wH72tRR3cjPSXaj7YRzo8iSxRzSE7zuVb5PIrTc', //获取自己服务端的token值
            videosrc: 'https://images.yitushijie.com/717406480456767152',
            switchview: false,
            isshowbold: false,  //展示字体加粗下面的子按钮
            isshowsize: false,  //展示字体大小下面的子按钮
            isshowcenter: false, //展示字体居中下面的子按钮
            isshowcolor: false, //展示字体颜色下面的子按钮
            isshowpic: false,  //展示图文编辑
            isshowvideo: false, //展示视频编辑
            isshowtext: false, //展示文字编辑
            ispre: true, //是预览状态还是新建状态
            currentsrc: 'https://images.yitushijie.com/1374616231318671478', //展示当前编辑的图片或者视频地址
            currentindex: 0,
            currentDetail: '',
            styleObject: {
                backgroundImage: 'url(http://static2.ivwen.com/user/38952333/c809ed4269f0000135c41ace1f001166.jpg-cover2)'
            },
            edit:{
                boldactive: '',  
                italicactive: '',  
                underlineactive: '',  
                supactive: '',  
                normalactive: '',  
                bigactive: '', 
                leftactive: '',  
                centeractive: '',  
                rightactive: '',
            },
            links:[
                {
                    href: 'https://www.baidu.com',
                    desc: '百度',
                }
            ],
            mask: {
                href: '',
                desc: '',
                isshow: false,
            },
            videotexs: [
                {
                    isvideo: false,
                    ispic: false,
                    istext: true,
                    type: 'text', 
                    src:'https://images.yitushijie.com/2158343605889552850',
                    text: 'it is very you',
                },
                {
                    isvideo: false,
                    ispic: true,
                    istext: false,
                    type: 'pic',
                    src:'http://static2.ivwen.com/user/38952333/c809ed4269f0000135c41ace1f001166.jpg-cover2',
                    text: 'it is very me',
                },
                {
                    isvideo: true,
                    ispic: false,
                    istext: false,
                    type: 'video',
                    src:'https://images.yitushijie.com/16683460353643074608',
                    text: 'it is very her',
                },
            ],
            texdetail:{
                title: '我的大可爱',
                time: '2016.06.26',
                name: 'Dione',
                readcount: 0,
                contents:[
                    {
                        istext: true,
                        text: 'it is very you',
                    },
                    {
                        ispic: true,
                        src: 'http://static2.ivwen.com/user/38952333/c809ed4269f0000135c41ace1f001166.jpg-cover2',
                        text: '',
                    },
                    {
                        isvideo:true,
                        videosrc: 'https://images.yitushijie.com/16683460353643074608',
                        text: '',
                    }
                ]
            },
            isLoading:false
        }
    },
    methods:{
        addText () {
            this.videotexs.push({
                isvideo: false,
                ispic: false,
                istext: true,
                type: 'text', 
                src:'https://images.yitushijie.com/2158343605889552850',
                text: '',
            })
        },    
        addImg () {
            this.videotexs.push({
                isvideo: false,
                ispic: true,
                istext: false,
                type: 'pic',
                src:'http://static2.ivwen.com/user/38952333/c809ed4269f0000135c41ace1f001166.jpg-cover2',
                text: '',
            })
        },  
        addVideo () {
            this.videotexs.push({
                isvideo: true,
                ispic: false,
                istext: false,
                type: 'video',
                src:'https://images.yitushijie.com/16683460353643074608',
                text: '',
            })
        },
        delItem (index) {
            this.videotexs.splice(index,1);
        },
        getHtml (e) {
            let index = this.currentindex
            this.videotexs[index].text = e.target.innerHTML
        },
        showbold (){
            this.isshowbold = !this.isshowbold; 
        },  
        showsize (){ 
            this.isshowsize = !this.isshowsize;
        },  
        showcenter (){
            this.isshowcenter = !this.isshowcenter;
        },  
        showcolor (){
            this.isshowcolor = !this.isshowcolor;
        },
        switchpre () {
            this.switchview = false
            this.texdetail.contents = []
            for (let i=0; i<this.videotexs.length; i++){
                if (this.videotexs[i].istext == true){
                    this.texdetail.contents.push({
                        istext: true,
                        text: this.videotexs[i].text
                    })
                }
                if (this.videotexs[i].ispic == true){
                    this.texdetail.contents.push({
                        ispic: true,
                        src: 'http://static2.ivwen.com/user/38952333/c809ed4269f0000135c41ace1f001166.jpg-cover2',
                        text: this.videotexs[i].text
                    })
                }
                if (this.videotexs[i].isvideo == true){
                    this.texdetail.contents.push({
                        isvideo: true,
                        videosrc: 'https://images.yitushijie.com/16683460353643074608',
                        text: this.videotexs[i].text
                    })
                }
            }
        },
        opentext ( type, index) {
            this.switchview = true
            this.currentindex = index
            //清空的时候不能用this.currentDetail = ''
            this.$refs.currentDetail.innerHTML = ''
            //清空之后在给内部的html赋值
            this.currentDetail = this.videotexs[index].text
            if (type == 'text') {
                this.isshowtext = true
                this.isshowpic = false
                this.isshowvideo = false
            }
            if (type == 'pic') {
                this.isshowpic = true
                this.isshowtext = false
                this.isshowvideo = false
                this.currentsrc = this.videotexs[index].src
            }
            if (type == 'video') {
                this.isshowvideo = true
                this.isshowtext = false
                this.isshowpic = false
                this.currentsrc = this.videotexs[index].src
            }
        },
        replaceCover () {
            this.switchview = true
            this.isshowpic = true
            this.isshowtext = false
            this.isshowvideo = false
        },   
        setTitle () {
            this.switchview = true
            this.isshowpic = true
            this.isshowtext = false
            this.isshowvideo = false
        },   
        newItem () {

        },
        setUndo () {
            var fun = document.execCommand('undo', false);
        }, 
        setRedo () {
            var fun = document.execCommand('redo', false);
        },
        setItalic () {
            this.isshowbold = false 
            var fun = document.execCommand('italic', false, 'i');
        }, 
        setBold () {
            this.isshowbold = false
            var fun = document.execCommand('bold', false, 'b'); 
        }, 
        setUnderline () {
            this.isshowbold = false 
            var fun = document.execCommand('underline', false); 
        }, 
        setSup () {
            this.isshowsize = false
            var fun = document.execCommand('fontSize', false, 1);
        }, 
        setNormal () {
            this.isshowsize = false
            var fun = document.execCommand('fontSize', false, 3);
        }, 
        setBig () {
            this.isshowsize = false
            var fun = document.execCommand('fontSize', false, 5);
        },
        setLeft () {
            this.isshowcenter = false
            var fun = document.execCommand('justifyLeft', false);
        }, 
        setCenter () {
            this.isshowcenter = false
            var fun = document.execCommand('justifyCenter', false);
        }, 
        setRight () {
            this.isshowcenter = false
            var fun = document.execCommand('justifyRight', false);
        },
        setColor (e) {
            this.isshowcolor = false
            var node = e.target.parentNode
            var color = node.getAttribute("data-color")
            var fun = document.execCommand('foreColor', false, color)
        },
        setLink () {
            this.mask.isshow = true
        },
        conformmask () {
            this.links[0].href = this.mask.href
            this.links[0].desc = this.mask.desc
            this.mask.isshow = false
        },
        cancelmask () {
            this.mask.isshow = false
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
        let self = this
        this.$nextTick(function(){
            
        })
    },
    watch: {

    }
}
</script>
