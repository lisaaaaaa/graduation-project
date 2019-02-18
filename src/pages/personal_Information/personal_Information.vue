<template>
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
                                <a :href=" '/#/user' "  style="float: right;font-size: 14px;color: #3399ea;padding-right: 9.3px;">个人主页></a>
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
                                    <span>邮箱：</span><span>lisa.wow@outlook.com</span>
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
</template>

<script>

    export default {
        name: 'personal_Information',
        data() {
            return {
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



</style>