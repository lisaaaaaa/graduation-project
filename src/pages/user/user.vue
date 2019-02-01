<template>
    <div id="user">
        <div id="home-page" style="position: absolute">

            <div class="logo">
                <span>健康中心</span>
            </div>

            <div class="bg-img">
                <img  src="./../../images/user/bg1280x788.jpg" />
            </div>

            <div class="content">
                <div class="title">
                    <h2>HELLO·<span>{{this.name}}</span></h2>
                    <p>I'm <span class="sub-title"></span></p>
                </div>
            </div>
            <div class="more-msg">
                <p>View Profile</p>
                <Icon type="ios-arrow-down" />
            </div>

            <div id="user-msg">
                <div class="user-main" style="">
                    <div class="person-msg">
                        <div class="title">
                            <h1>David Smith</h1>
                            <span style="display: block">I'm a Web designer</span>
                        </div>
                        <div class="person-signature" style="margin-top: 10px;">
                            <h1>ABOUT ME</h1>
                            <span style="margin-top: 10px;">我是一颗小小小小草，怎么长也长也不高。我寻寻觅觅，寻寻觅觅，只为找到一颗太阳，那样就可以又长高。
                                啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</span>
                        </div>
                        <div class="health-index" style="margin-top: 40px;display:-webkit-inline-box;">
                            <div class="person-img" style="width:46%;margin-right: 4%">
                                <img src="./../../images/user/avatar500x680.jpg" style="text-align: center;width: 100%;height: auto;"/>
                            </div>
                            <div class="person-health-indx" style="width: 55%;">
                                <div class="index-process">
                                    <p style="font-size: 34px;">健康指数</p>
                                    <div style="margin-top: 10px">
                                        <span style="display: block;font-size: 20px;">HTML/CSS</span>
                                        <Progress style="color: #c7e7c8;" class="health-progress" :percent="25" :stroke-width="5" />
                                    </div>
                                    <div style="margin-top: 10px">
                                        <span style="display: block;font-size: 20px;">Javascript</span>
                                        <Progress class="health-progress" :percent="25" :stroke-width="5" />
                                    </div>
                                    <div style="margin-top: 10px">
                                        <span style="display: block;font-size: 20px;">PHP</span>
                                        <Progress class="health-progress" :percent="25" :stroke-width="5" />
                                    </div>
                                    <div style="margin-top: 10px">
                                        <span style="display: block;font-size: 20px;">MYSQL</span>
                                        <Progress class="health-progress" :percent="25" :stroke-width="5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>

    export default {
        name: 'user',
        data() {
            return {

            }
        },
//        props: ['tariff', 'area', 'tariff_id', 'specification'],
        props:['name'],
        mounted() {
            console.log(this.name)
        },
        created() {

        },
        methods: {
        }
    }


</script>

<style type="text/css" >

    .logo{
        position: fixed;
        left: 0;
        padding: 20px 20px;
        z-index: 10000;
    }

    .logo > span{
        color: #fff;
        display: inline-block;
        float: left;
        border: 2px solid #fff;
        padding: 7px 10px 7px 12px;
    }

    #home-page{
        position: relative;
        margin: 0 auto;
        min-height: 560px;
        width: 100%;
        height: 100%;
    }

    #user #home-page .bg-img{
        position: fixed;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        /*background: url('./../../images/user/bg1280x788.jpg');*/
        /*background-size: cover;*/
    }

    .bg-img img {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        min-width: 100%;
        min-height: 100%;
    }

    #home-page .bg-img::before{
        width: 100%;
        height: 100%;
        /*background-color: rgba(79, 77, 77, 0.44);*/
        background-color: rgba(97, 62, 63, 0.4);
    }

    #home-page .bg-img::before, #home-page .bg-img::after {
        content: '';
        position: absolute;
        z-index: 100;
    }

    #home-page .content{
        margin: 0 auto;
        padding: 0 1.25em 10em 1.25em;
        width: 100%;
        text-align: center;
        position: fixed;
        top: 27%;
        /*left: 50%;*/
    }

    .title h2 {
        text-transform: uppercase;
        padding: 0 0 0.2em;
        color: #fff;
        font-weight: 800;
        font-size: 5em;
        margin: 0 auto;
    }

    .title h1 {
        font-family: 'Playfair Display', serif;
        font-weight: 900;
        font-size: 4em;
        line-height: 1.1;
        color: #444444;
    }


    .title p, .more-msg p {
        color: #fff;
        padding: 0 0 0.6em;
        font-weight: 400;
        font-size: 2.25em;
        margin: 0 auto;
    }

    .more-msg{
        position: fixed;
        margin: 0 auto;
        padding: 0 1.25em 10em 1.25em;
        width: 100%;
        text-align: center;
        top: 79%;
        bottom: 0%;
    }

    .ivu-icon-ios-arrow-down{
        font-size: 60px;
        font-weight: bold;
        color: #fff;
    }

    #user-msg .user-main{
        height: auto;
        min-height: 100%;
        width: 60%;
        position: absolute;
        right: 0px;
        top:0px;
        padding: 15px;
        background: #fff;
    }

    .person-msg{
        position: relative;
        min-height: 1px;
        /*padding: 30px;*/
        padding-left: 52px;
        padding-top: 10px;
    }

    #user-msg .title span{
        display: block;
        font-size: 24px;
        font-family: inherit;
        font-weight: 400;
        line-height: 1.1;
        color: #444444;
    }

</style>