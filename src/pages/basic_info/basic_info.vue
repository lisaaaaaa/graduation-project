<template>
    <div id="basic_info" style="min-width:1116px;">
        <div class="basic-msg" style="width:100%;height:100%;">
            <div class="basic-top" style="width:100%;height:60px;background-color: #3b4348;">
                <div class="top-nav">
                    <div class="content">
                        <div class="msg-left" style="">
                            <Button  type="success" size="small" @click="health_center">健康中心</Button>
                        </div>
                        <div class="msg-right" style="display: flex;flex-direction: row;margin-right: -100px;height:60px;">
                            <div class="nav-other" style="">
                                <Tabs value="name1" @on-click="" :class="">
                                    <TabPane :label="label_1" name="name1"></TabPane>
                                    <TabPane :label="label_2" name="name2"></TabPane>
                                    <TabPane :label="label_3" name="name3"></TabPane>
                                    <TabPane :label="label_4" name="name4"></TabPane>
                                    <TabPane :label="label_5" name="name5"></TabPane>
                                    <TabPane :label="label_6" name="name6"></TabPane>
                                    <TabPane :label="label_7" name="name7"></TabPane>
                                </Tabs>
                            </div>
                            <div class="forum-login">
                                <a class="exit" :href=" '/#/' " style="">【退出】</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="basic-content" style="width: 100%;min-height:500px;background: #f5f6f7;">
                <div style="width:70%;margin:0px auto;display: flex;text-align: center;padding: 15px;">
                    <div id="left-box" class="left-box" style="">
                        <Menu :theme="theme" active-name="1">
                            <MenuItem name="1">
                                    <Icon type="ios-contact" />
                                    个人资料
                                </MenuItem>
                            <MenuItem name="2">
                                <Icon type="md-trending-up" />
                                健康记录
                            </MenuItem>
                            <MenuItem name="3">
                                    <Icon type="ios-heart" />
                                    我的关注
                                </MenuItem>
                            <MenuItem name="4">
                                    <Icon type="ios-star" />
                                    我的收藏
                                </MenuItem>
                            <MenuItem name="5">
                                <Icon type="ios-people" />
                                我的粉丝
                            </MenuItem>
                            <MenuItem name="6">
                                    <Icon type="ios-paw" />
                                    我的足迹
                                </MenuItem>
                        </Menu>
                    </div>

                    <div class="right-box" style="width:80%;background-color: #fff;min-height:460px;box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);">
                        <div style="padding: 0 32px 30px;">
                            <div id="">
                                <div class="right-box-title" style="">
                                    <p class="right-box-name">个人资料</p>
                                </div>
                                <div class="right-box-content">
                                    <div class="avatar" style="float: left;text-align: center;margin-right: 16px;cursor: pointer;">
                                        <img src="./../../images/forum/man.png"/>
                                        <p><a>修改头像</a></p>
                                    </div>
                                    <div class="person-info" style="float: right;width:85%;text-align: left;">
                                        <div class="title" style="height:60px;border-bottom: 1px solid #e0e0e0;">
                                            <div style="font-size: 14px;color: #999;margin-top: 16px">
                                                <span>昵称：</span><span>莉莎</span>
                                                <a style="float: right;font-size: 14px;color: #3399ea;padding-right: 9.3px;">个人主页></a>
                                            </div>
                                            <div style="margin-top: 8px;margin-bottom: 16px; color: rgb(77, 77, 77);font-size: 14px;">
                                                <span>签名：</span><span>然而岁月漫长，总之值得等待</span>
                                            </div>
                                        </div>
                                        <div class="person-list" style="margin-top: 10px;">
                                            <ul style="color: rgb(77, 77, 77);font-size: 14px;">
                                                <li>
                                                    <span>性别：</span><span>女</span>
                                                    <a style="float: right;font-size: 14px;color: #3399ea;padding-right: 9.3px;">修改资料</a>
                                                </li>
                                                <li>
                                                    <span>生日：</span><span>1990/2/14</span>
                                                </li>
                                                <li>
                                                    <span>地区：</span><span>中国 四川 成都</span>
                                                </li>
                                                <li>
                                                    <span>爱好：</span><span>吃饭 睡觉</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div class="footer" style="width:100%;background: #fff;">
                <div>
                    <div class="footer-top" style="margin: 8px auto;width: 60%;text-align: center;">
                        <div class="footer-indicate">
                            <ul>
                                <li class="list"><Icon type="ios-call" /></li>
                                <li class="list"><p>(028) 333 333 3214/30</p></li>

                                <li class="list"><Icon type="ios-pin" /></li>
                                <li class="list"><p>中国, 成都</p></li>

                                <li class="list"><Icon type="ios-mail" /></li>
                                <li class="list"><a target="_blank" href="https://outlook.live.com/owa/" style="margin-left: -7px;color:#007bff !important">lisa.wow@outlook.com</a></li>
                            </ul>
                        </div>
                        <div class="footer-socialicons">
                            <a href="#"><i class="icon"> </i></a>
                            <a href="#"><i class="icon2"> </i></a>
                            <a href="#"><i class="icon3"> </i></a>
                            <a href="#"><i class="icon4"> </i></a>
                            <a href="#"><i class="icon5"> </i></a>
                            <a href="#"><i class="icon6"> </i></a>
                        </div>
                        <div class="footer-bottom">
                            <p>Copyright &copy; 2019.<a target="_blank" href="http://www.cduestc.cn/s.php/yjsj/item-view-id-16334.html" style="color:#007bff !important">电子科技大学成都学院-2015级云计算科学与技术系</a> - More Message 毕业设计</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'basic_info',
        data() {
            return {
                theme:'light',
                label_1:(h) => {return h('a',{domProps:{href:'#home'},},'首页')},
                label_2:(h) => {return h('a',{domProps:{href:'#part-2'},},'下载')},
                label_3:(h) => {return h('a',{domProps:{href:'#part-3'},},'问答')},
                label_4:(h) => {return h('a',{domProps:{href:'#part-4'},},'商城')},
                label_5:(h) => {return h('a',{domProps:{href:'#part-5'},},'活动')},
                label_6:(h) => {return h('a',{domProps:{href:'#part-6'},},'招聘')},
                label_7:(h) => {return h('a',{domProps:{href:'#part-7'},},'学院')},
            }
        },
        props:[],
        mounted() {

        },
        created() {

        },
        methods: {

        }
    }

</script>

<style type="text/css">

    #basic_info #left-box ul{
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
        width: 137px !important;
    }

    #basic_info .right-box-title{
        color: #3d3d3d;
        height: 90px;
        line-height: 90px;
        border-bottom: 1px solid #e0e0e0;
    }


    #basic_info .right-box-name{
        font-size: 20px;
        text-align: left;
        font-weight: bold;
    }

    #basic_info .right-box-content .avatar img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin: 0 auto;
        margin-top: 16px;
    }

    #basic_info .right-box-content .avatar p a{
        font-size: 14px;
        color: #3399ea;
        margin-top: 8px;
        cursor: pointer;
    }

    #basic_info .right-box-content .avatar p a:hover, #basic_info .person-info a:hover{
        color: #47779a !important;
    }

    #basic_info .person-list li{
        line-height: 30px;
    }

    #basic_info .top-nav .content {
        width: 70%;
        padding: 10px;
        text-align: center;
        margin: 0px auto;
    }

    #basic_info .msg-left {
        float: left;
        width: 15%;
        line-height: 40px;
    }

    #basic_info .msg-right {
        float: right;
        margin-right: 0px;
        /*margin-top: -10px;*/
        /*height: 60px;*/
    }

    .msg-left span {
        /* color: #818a90; */
        font-size: 12px;
        margin-left: 7px;
    }

    #basic_info .ivu-tabs-nav .ivu-tabs-tab{
        font-size:13px;
    }

    #basic_info .forum-login {
        font-size: 13px;
        line-height: 60px;
        margin-top: -12px;
    }

    #basic_info .msg-right a {
        font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 13px;
        color: #c1cad1 !important;
    }

    #basic_info .ivu-tabs-ink-bar {
        background-color: transparent;
    }

    #basic_info .ivu-tabs-tab-focused a {
        color: #fff !important;
    }



</style>