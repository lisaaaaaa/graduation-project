<template>
    <div id="user">
        <div id="home-page" style="position: absolute">

            <div class="logo">
                <span><a :href=" '/#/' " style="color:#fff">健康中心</a></span>
                <!--<Button type="warning" style="background: transparent;color:#f90">健康中心</Button>-->
            </div>

            <div class="bg-img">
                <img  src="./../../images/user/bg1280x788.jpg" />
            </div>

            <div class="content">
                <div class="title">
                    <h2>HELLO·<span>David Smith</span></h2>
                    <!--<p>I'm <span class="sub-title"></span></p>-->
                </div>
            </div>
            <div class="more-msg">
                <p>View Profile</p>
                <Icon type="ios-arrow-down" @click.native="view_profile"/>
            </div>



            <Drawer :closable="false" v-model="drawer" width="966">

                <div id="user-msg">
                    <div class="user-main" style="">
                        <div class="person-msg">
                            <div class="title" style="width: 50%;float: left">
                                <h1>David Smith</h1>
                                <!--<span style="display: block">I'm a Web designer</span>-->
                                <hr>
                            </div>
                            <div class="more-operations" style="width: 50%;float: right;height: 104px;">

                                <div style="position: fixed;right: 40px;">


                                    <Dropdown placement="bottom-start" @on-click="changeMenu">
                                        <a href="javascript:void(0)">
                                            <Icon type="md-menu" />
                                        </a>
                                        <DropdownMenu slot="list">
                                            <DropdownItem name="peronal">
                                                <Icon type="ios-contact" />
                                                个人信息</DropdownItem>
                                            <DropdownItem name="focus">
                                                <Icon type="ios-heart" />
                                                我的关注</DropdownItem>
                                            <DropdownItem name="collection">
                                                <Icon type="ios-star" />
                                                我的收藏</DropdownItem>
                                            <DropdownItem name="foot">
                                                <Icon type="ios-paw" />
                                                我的足迹</DropdownItem>
                                            <DropdownItem name="fan">
                                                <!--<Icon type="ios-help-circle" />-->
                                                <Icon type="ios-people" />
                                                我的粉丝</DropdownItem>
                                            <DropdownItem name="exit">
                                                <Icon type="md-exit" />
                                                退出</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div class="person-signature" style="margin-top: 10px;">
                                <!--<h1>关于我</h1>-->
                            <span style="margin-top: 10px;">我是一颗小小小小草，怎么长也长也不高。我寻寻觅觅，寻寻觅觅，只为找到一颗太阳，那样就可以又长高。
                                啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</span>
                            </div>
                            <div class="health-index" style="margin-top: 40px;display:-webkit-inline-box;">
                                <div class="person-img" style="width:46%;margin-right: 4%">
                                    <img src="./../../images/user/avatar500x680.jpg" style="text-align: center;width: 100%;height: auto;"/>
                                </div>
                                <div class="person-health-indx" style="width: 55%;">
                                    <div class="index-process">
                                        <p style="font-size: 34px;">健康指数<span style="font-size: 12px">(近一周)</span></p>
                                        <div class="one" style="margin-top: 10px">
                                            <span style="display: block;font-size: 20px;">体重指标</span>
                                            <Progress style="color: #c7e7c8;" class="health-progress" :percent="25" :stroke-width="5" />
                                        </div>
                                        <div class="two" style="margin-top: 10px">
                                            <span style="display: block;font-size: 20px;">血糖指标</span>
                                            <Progress class="health-progress" :percent="25" :stroke-width="5" />
                                        </div>
                                        <div class="three" style="margin-top: 10px">
                                            <span style="display: block;font-size: 20px;">血压指标</span>
                                            <Progress class="health-progress" :percent="25" :stroke-width="5" />
                                        </div>
                                        <div class="four" style="margin-top: 10px">
                                            <span style="display: block;font-size: 20px;">血脂指标</span>
                                            <Progress class="health-progress" :percent="25" :stroke-width="5" />
                                        </div>
                                    </div>
                                    <div class="health_history">
                                        <a :href=" '/#/basic_info/health_Record' " style="font-size: 20px;font-weight: bold;" title="了解更多">......</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="health-img" style="display:-webkit-inline-box;margin-top:30px;width:100%;height:245px;background: radial-gradient(#648880, #293f50);color:#fff;">
                            <div class="bg" style="width:100%;margin: 65px auto;">
                                <div style="width:75%;margin:0px auto;">
                                    <div class="sports other " style="">
                                        <Icon type="md-bicycle" />
                                        <span class="time" style="font-family: sans-serif;color: #fff;">27</span>min
                                        <p>骑自行车</p>
                                    </div>

                                    <div class="sports other" style="">
                                        <Icon type="ios-baseball" />
                                        <span class="time">30</span>min
                                        <p>户外运动</p>
                                    </div>

                                    <div class="sports other walk" style="">
                                        <Icon type="ios-body" />
                                        <span class="time">500</span>min
                                        <p>散步</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div class="article" style="height:auto;">
                            <div style="padding:15px;">
                                <div class="article-name" style="height:auto">
                                    <h2>文章
                                        <a style="float:right;font-size: 13px;line-height: 38px;margin-right: 25px;">更多</a>
                                    </h2>

                                    <hr>
                                </div>
                                <div style="display: flex;width: 90%;margin: 0px auto;">

                                    <div class="article-msg" style="padding:15px;width:45%;margin-left:20px;">
                                        <div class="" style="text-align: center;">
                                            <div class="article-title">
                                                <h5>CLEAN CODE</h5>
                                            </div>
                                            <div class="article-content">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit libero ac accumsan lobortis.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="article-msg" style="padding:15px;width:45%;margin-left:20px;">
                                        <div class="" style="text-align: center;">
                                            <div class="article-title">
                                                <h5>CLEAN CODE</h5>
                                            </div>
                                            <div class="article-content">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit libero ac accumsan lobortis.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="article-msg" style="padding:15px;width:45%;margin-left:20px;">
                                        <div class="" style="text-align: center;">
                                            <div class="article-title">
                                                <h5>CLEAN CODE</h5>
                                            </div>
                                            <div class="article-content">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit libero ac accumsan lobortis.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>


                        </div>
                        <div class="album" style="height:auto">

                            <div style="padding:15px;">
                                <div style="height:auto">
                                    <h2>相册</h2>
                                    <hr>
                                </div>
                            </div>
                            <div style="display: flex;width: 90%;margin: 0px auto;">
                                <div class="photo">
                                    <img src='./../../images/project_3.jpg' />
                                </div>
                                <div class="photo">
                                    <img src='./../../images/project_3.jpg' />
                                </div>
                                <div class="photo">
                                    <img src='./../../images/project_3.jpg' />
                                </div>
                            </div>

                            <div class="photo-footer" style="margin-top:15px;">
                                <div class="viewer" style="width:50%;margin:0px auto;text-align: center;">
                                    <Button icon="ios-plane" size="small" type="success" @click="viewphoto">VIEW MORE</Button>
                                </div>
                            </div>



                        </div>
                        <div class="message-board" style="height:auto;margin-top: 20px;opacity: 1;background: #f3f3f3;">
                            <div style="padding: 15px;">
                                <div class="head-line">

                                    <h2>留言板
                                        <Badge :count="3" style="position: absolute;margin-top: -6px;margin-left: -4px;"></Badge>
                                    </h2>
                                    <hr>
                                </div>
                                <div>
                                    <div class="message">
                                        <div class="commenter" style="width: 30%;display: -webkit-inline-box;">
                                            <div class="icon" style="margin-top: 15px;">
                                                <Icon type="md-contact" />
                                            </div>
                                            <div class="info" style="margin-left: 10px;">
                                                <p>陈小草</p>
                                                <p style="margin-top: -15px;">2019.1.2</p>
                                            </div>
                                        </div>
                                        <div class="commenter-msg" style="width: 65%;">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                In hendrerit libero ac accumsan lobortis.
                                                Nam sem lacus, vulputate ut turpis vel, viverra porta ante
                                            </p>
                                            <hr>
                                        </div>
                                    </div>
                                    <div class="message">
                                        <div class="commenter" style="width: 30%;display: -webkit-inline-box;">
                                            <div class="icon" style="margin-top: 15px;">
                                                <Icon type="md-contact" />
                                            </div>
                                            <div class="info" style="margin-left: 10px;">
                                                <p>陈小草</p>
                                                <p style="margin-top: -15px;">2019.1.2</p>
                                            </div>
                                        </div>
                                        <div class="commenter-msg" style="width: 65%;">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                In hendrerit libero ac accumsan lobortis.
                                                Nam sem lacus, vulputate ut turpis vel, viverra porta ante
                                            </p>
                                            <hr>
                                        </div>
                                    </div>

                                    <div style="text-align: center;">
                                        <Button type="primary">我要留言</Button>
                                    </div>

                                </div>

                            </div>

                        </div>
                        <div class="footer" style="padding:30px;">
                            <div style="width:30%;margin:0px auto;">
                                <div class="footer-icon">
                                    <Icon style="cursor:pointer;" title="github" type="logo-github" />
                                </div>

                                <div class="footer-icon">
                                    <Icon style="cursor:pointer;" title="phone" type="md-phone-portrait" />
                                </div>

                                <div class="footer-icon">
                                    <Icon style="cursor:pointer;" title="twitter" type="logo-twitter" />
                                </div>

                                <div class="footer-icon">
                                    <Icon style="cursor:pointer;" title="Email" type="ios-mail" />
                                </div>

                                <div class="footer-icon">
                                    <Icon style="cursor:pointer;" title="contact" type="logo-octocat" />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>


            </Drawer>







        </div>

        <div class="modal">
            <Modal v-model="modal" fullscreen>
                <div style="width: 90%;margin: 50px auto;">
                            <div class="more-photo">
                                <img src='./../../images/project_3.jpg' />
                            </div>
                            <div class="more-photo">
                                <img src='./../../images/project_3.jpg' />
                            </div>
                            <div class="more-photo">
                                <img src='./../../images/project_3.jpg' />
                            </div>
                            <div class="more-photo">
                                <img src='./../../images/project_3.jpg' />
                            </div>
                            <div class="more-photo">
                                <img src='./../../images/project_3.jpg' />
                            </div>
                            <div class="more-photo">
                                <img src='./../../images/project_3.jpg' />
                            </div>
                            <div class="more-photo">
                                <img src='./../../images/project_3.jpg' />
                            </div>
                            <div class="more-photo">
                                <img src='./../../images/project_3.jpg' />
                            </div>
                </div>
                <div slot="footer" style="text-align: center;">
                    <Button type="success" size="small" @click="more_cancel">上传</Button>
                </div>
            </Modal>
            
        </div>

    </div>
</template>
<script>

    export default {
        name: 'user',
        data() {
            return {
                drawer:false,
                modal:false,
                scrollTop:'',
            }
        },
//        props: ['tariff', 'area', 'tariff_id', 'specification'],
        props:['name'],
        mounted() {
//            console.log(this.name)
            window.addEventListener('scroll', this.handleScroll)
        },
        created() {

        },
        methods: {
            viewphoto(){
                this.modal = true;
            },

            more_cancel(){
                this.modal = false;
            },

            view_profile(){
                this.drawer = true;
            },

            handleScroll () {
                this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
//                console.log(this.scrollTop)
                if(this.scrollTop == 0){
                    this.drawer = false;
                }else if(this.scrollTop == 100){
                    this.drawer = true;
                }
            },

            changeMenu(name){
//                console.log(name)
                if(name == 'peronal'){
                    this.$router.push({name:'personal_Information'})
                }else if(name == 'focus'){
                    this.$router.push({name:'my_Focus'})
                }else if(name == 'foot'){
                    this.$router.push({name:'my_Footprint'})
                }else if(name == 'collection'){
                    this.$router.push({name:'my_Collection'})
                }else if(name == 'fan'){
                    this.$router.push({name:'my_Fans'})
                }else if(name == 'exit'){
                    this.$router.push({name:'index'})
                }
            },

        },
        beforeDestroy:function(){
            window.removeEventListener('scroll', this.handleScroll)
            this.$Notice.destroy()
        },
    }


</script>

<style type="text/css">

    .logo{
        position: fixed;
        left: 0;
        padding: 20px 20px;
        z-index: 10000;
        cursor: pointer;
    }

    .logo > span{
        color: #fff;
        display: inline-block;
        float: left;
        border: 2px solid #fff;
        padding: 7px 10px 7px 12px;
    }

    .logo > span:hover{
        color: #fff;
        opacity: .8;
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
        cursor: pointer;
    }

    .ivu-icon-ios-arrow-down:hover{
        color: #e49ce4;
    }

    #user-msg .user-main{
        height: auto;
        min-height: 100%;
        /*width: 61%;*/
        width:100%;
        position: absolute;
        right: 0px;
        top:0px;
       /* padding: 15px;*/
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

    .health-img .first{
        margin-left:10%;
    }
    .health-img .sports{
        display: inline-block;
        width:30%;
        height:117px;
        margin: 0px auto;
        text-align: center;
    }

    .health-img .sports span p {
        font-family: sans-serif;
        color: #fff;
    }

    .health-img .other{
       
    }

    .health-img .time{
        font-size: 45px
    }

    .health-img .sports p {
        font-weight: 600;
        text-transform: uppercase;
        font-size: 20px;
    }

    .ivu-icon-md-bicycle, .ivu-icon-ios-baseball, .ivu-icon-ios-body, .ivu-icon-md-contact, .ivu-icon-logo-github,
    .ivu-icon-md-phone-portrait, .ivu-icon-logo-twitter, .ivu-icon-ios-mail, .ivu-icon-logo-octocat{
        font-size: 30px;
    }

    .footer-icon{
        display:-webkit-inline-box;
        margin-left:10px;
    }

    .person-health-indx .index-process .one .ivu-progress-bg{
        background-color:#e51c23;
    }

    .person-health-indx .index-process .two .ivu-progress-bg{
        background-color:#4caf50;
    }

    .person-health-indx .index-process .three .ivu-progress-bg{
        background-color:#ff9800;
    }

    .person-health-indx .index-process .four .ivu-progress-bg{
        background-color:#2196f3;
    }

    .article-msg{
        border: 4px solid transparent;
        border-radius: 4px; 
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);
        float: left;
        height:auto;
    }

    .article-msg:hover{
        box-shadow: 0 10px 10px -10px rgba(0,0,0,.5);
        -webkit-transform: scale(1.1);
    }

.photo{
    padding: 15px;
    width: 45%;
    margin-left: 20px;
    text-align: center;
    cursor: pointer;
}

.photo :hover{
    box-shadow: 0 10px 10px -10px rgba(0,0,0,.5);
    opacity: 0.5;
}

.photo:before{
    background: #3085a3;
}

.photo img{
    width:100%;
    height:100%;
    border-radius: 5px;
    /*box-shadow: 1px 0.5px 0.5px black;*/
    box-shadow: 0 4px 4px black;
}

.ivu-modal-content{
    /*background: rgba(25, 25, 25, .5);*/
    background: #d0d0d0ad;
}

.ivu-modal-close .ivu-icon-ios-close{
    color:#fff;
    font-size: 45px;
}

.more-photo{
    padding: 15px;
    width: 30%;
    margin-left: 3%;
    text-align: center;
    cursor: pointer;
    float:left;
}

.more-photo img{
    width:100%;
    height:100%;
}

.ivu-icon-logo-github:hover, .ivu-icon-md-phone-portrait:hover, .ivu-icon-logo-twitter:hover, .ivu-icon-ios-mail:hover, .ivu-icon-logo-octocat:hover{
        color:#ff9800;
    }


.ivu-icon-md-menu{
    font-size: 35px;
    cursor: pointer;
}

    .demo-badge{
        width: 42px;
        height: 42px;
        background: #eee;
        border-radius: 6px;
        display: inline-block;
    }

    .health_history a:hover, .article-name a:hover{
        color:#af6382 !important;
    }

</style>