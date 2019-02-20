<template>
    <div id="page" style="width:100%;height:100%">
        <div class="page" style="width:100%;height:100%">
            <div class="nav" style="width: 100%;height:100px;background: rgb(61, 55, 68);">
                <p style="font-size: 24px;color: #fff !important;font-weight: bold;line-height: 100px;margin-left: 10%">Always on the road</p>
            </div>
            <div class="" style="width:85%;margin:0px auto;">
                <div class="article-left" style="float: left;width:20%;height:100%;background: #f5f6f7">
                    <div class="article-user-img" style="height:85px;width: 100%;border-bottom: 1px solid #e3e3e3">
                        <div style="width: 90%;position:relative;top:10px;height:65px;margin: 0px auto;display: flex">
                            <img src="./../../images/banner4.jpg"/>
                            <div style="margin-top: 10px;"><a :href=" '#/user' " style="font-weight: 700;font-size: 12px;margin-left:10px;">莉莎的脑瓜疼呀脑瓜疼~</a></div>
                        </div>
                    </div>
                    <div class="article-user-leaderboard" style="width:100%;height:85px;margin: 0px auto;border-bottom: 1px solid #e3e3e3">
                        <div style="width:80%;height:100%;margin: 0px auto">
                            <div class="box">
                                <dl>
                                    <dt>等级：</dt>
                                    <dd><Icon type="md-star" /></dd>
                                </dl>
                                <dl>
                                    <dt>文章：</dt>
                                    <dd>10</dd>
                                </dl>
                                <dl>
                                    <dt>积分：</dt>
                                    <dd>486</dd>
                                </dl>
                                <dl>
                                    <dt>排名：</dt>
                                    <dd>13万+</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <!--<div class="article-user-content" style="width:100%;min-height:200px;margin: 0px auto;border-bottom: 1px solid #e3e3e3">-->
                        <!--<div class="line">-->
                            <!--<h3 class="title">个人分类</h3>-->
                        <!--</div>-->
                    <!--</div>-->
                    <div class="article-user-classification" style="width:100%;min-height:200px;margin: 0px auto;border-bottom: 1px solid #e3e3e3">
                        <div class="line">
                            <h3 class="title">个人分类</h3>
                            <ul style="margin-top: 20px;">
                                <li style="margin-top: 8px;color: #333;">
                                    <a>健身</a>
                                    <span>1篇</span>
                                </li>
                                <li style="margin-top: 8px;">
                                    <a>美食</a>
                                    <span>2篇</span>
                                </li>
                                <li style="margin-top: 8px;">
                                    <a>养生</a>
                                    <span>5篇</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="article-user-classification" style="width:100%;min-height:200px;margin: 0px auto;border-bottom: 1px solid #e3e3e3">
                        <div class="line">
                            <h3 class="title">归档</h3>
                            <ul style="margin-top: 20px;">
                                <li style="margin-top: 8px;color: #333;">
                                    <a>2019年2月</a>
                                    <span>1篇</span>
                                </li>
                                <li style="margin-top: 8px;">
                                    <a>2019年1月</a>
                                    <span>2篇</span>
                                </li>
                                <li style="margin-top: 8px;">
                                    <a>2018年12月</a>
                                    <span>3篇</span>
                                </li>
                                <li style="margin-top: 8px;">
                                    <a>2018年11月</a>
                                    <span>1篇</span>
                                </li>
                                <li style="margin-top: 8px;">
                                    <a>2018年9月</a>
                                    <span>2篇</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="article-user-content" style="width:100%;min-height:200px;margin: 0px auto;border-bottom: 1px solid #e3e3e3">
                        <div class="line">
                            <h3 class="title">热门文章</h3>
                            <ul>
                                <li style="padding: 10px;">
                                    <a style="font-size: 14px;">CSS实现鼠标不可点击，样式设置以及不可点击事件的行为</a>
                                    <p class="read" style="font-size: 12px;color: #858585;line-height: 20px;">阅读数 <span>5033</span></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="article-right" class="article-right" style="float: left;width:77%;height:100%;background: #f5f6f7;margin-left:15px;">
                    <transition>
                        <router-view></router-view>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'article',
        data() {
            return {

            }
        },
        mounted () {

        },
        components: {},
        created() {
        },
        methods: {

        },
        beforeDestroy:function(){

        },


    }

</script>

<style type="text/css">

    #page .article-user-img{
        /*line-height: 85px;*/
        /*margin-left: 15px;*/
        margin: 0px auto;
        text-align: center;
    }

    #page .article-user-img img{
        width:60px;
        height:60px;
        border-radius: 30px;
    }

    #page .article-user-img span{
        max-width: 150px;
        max-height: 66px;
        overflow: hidden;
        word-wrap: break-word;
    }

    #page dl{
        margin-top: 8px;
        float: left;
        width: 50%;
    }

    #page dl dt {
        display: inline;
        width: 42px;
        font-size: 14px;
        color: #333;
    }

    #page dl dd {
        display: inline;
        font-size: 13px;
    }

    #page .line .title{
        padding: 16px 16px 0;
        font-size: 14px;
        color: #333;
    }

    #page .line h3.title::before {
        display: inline-block;
        margin-right: 8px;
        content: '';
        width: 4px;
        height: 22px;
        vertical-align: -6px;
        background-color: rgb(61, 55, 68);
    }

    #page .article-right li{
        margin-top:20px;
    }

    #page .article-right li:hover{
        background: #fff;
        border-radius: 8px;
    }
    #page .article-right li a:hover{
        color:red;
    }

    #page a{
        color:#5a5a5a;
    }

    #page a:hover{
        color:red;
    }

    #page .article-user-classification .line li{
        width: 85%;
        margin-top: 8px;
        color: rgb(51, 51, 51);
        margin: 0px auto;
        font-size: 14px;
    }

    #page .article-user-classification .line li span{
        float: right;
        font-size: 12px;
        color: #858585;
    }

    #page .ivu-icon-md-star{
        color:red
    }

    #page .article-user-img a{
        color: #3d3d3d
    }

    #page .article-user-img a:hover{
        color:red;
    }

    #page .list-author Button{
        border: navajowhite;
        background: transparent;
    }

</style>