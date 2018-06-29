# Dione-tinymce
基于tinymce网络图片上传增加了本地图片上传和本地视频上传功能
自建编辑器 手机pc于一体的文章生成编辑器,编辑器实现纯原生


这两个功能的具体实现写在component文件夹里面
有两种实现方法  
    1: 选择图片文件或者视频文件后直上传然后得到网络url
    2: 用HTML5的 File API 的 FileReader 图片本地转成base64格式的url,然后将url赋值给一个img标签
两种方法的实现均在代码里面有实现


运行步骤
    --npm  install 
    --npm  run  dev
    因为用了eslint,所以代码编译的时候会有很多eslint的错误出来,不用担心 
    直接打开浏览器,访问8080端口即可


如果你觉得有用 记得给我点赞哦
    如有问题请联系 hongcaiyan@163.com

    

