<template>
    <div>
        <div class="top-nav">
            <nav :class="fix1 == true ? 'navbar navbar-toggleable-md mb-4 top-bar navbar-static-top sps sps--abv fixed' : 'navbar navbar-toggleable-md mb-4 top-bar navbar-static-top sps sps--abv'">
                <div class="container" style="">
                    <div>
                        <a :class="fix2 == true ? 'navbar-brand fixed2' : 'navbar-brand' " href="#">登录</a>
                        <a class="navbar-brand" href="#"><span>注册</span></a>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarCollapse1" style="display: flex!important;position: fixed;right: 20%;">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active"> <a :class="fix2 == true ? 'nav-link fixed2' : 'nav-link'"  href="#myCarousel">主页</a> </li>
                            <li class="nav-item"> <a :class="fix2 == true ? 'nav-link fixed2' : 'nav-link'" href="#benefits">优点</a> </li>
                            <li class="nav-item"> <a :class="fix2 == true ? 'nav-link fixed2' : 'nav-link'" href="#about">关于</a> </li>
                            <li class="nav-item"> <a :class="fix2 == true ? 'nav-link fixed2' : 'nav-link'" href="#blog">论坛</a> </li>
                            <li class="nav-item"> <a :class="fix2 == true ? 'nav-link fixed2' : 'nav-link'" href="#gallery">图库</a> </li>
                            <li class="nav-item"> <a :class="fix2 == true ? 'nav-link fixed2' : 'nav-link'" href="#contact">联系</a> </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div class="part-one">
            <div class="main-slider" id="myCarousel">
                <Carousel autoplay v-model="carousel"  loop :autoplay-speed="speed">
                    <CarouselItem>
                        <div class="demo-carousel">
                            <img class="swiper-slide" src="./../images/3.jpg"  style="background-size: cover!important;background-position: center center!important;"/>
                            <div class="swiper-content" style="">
                                <h2>
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">幸福只不过是身体健康，记忆力差</font>
                                    </font>
                                </h2>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">
                            <img class="swiper-slide" src="./../images/2.jpg" style="background-size: cover!important;background-position: center center!important;" />
                            <div class="swiper-content" style="">
                                <h2>
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">健康是真正的财富，而不是黄金和白银</font>
                                    </font>
                                </h2>
                            </div>
                        </div>
                    </CarouselItem>
                </Carousel>
            </div>
        </div>

        <section class="service-sec" id="benefits">
                <div class="container">
                    <div class="row" style="margin: auto;width: 100%;">
                        <div class="col-md-1">
                            <div class="heading text-md-center text-xs-center" style="text-align: center;">
                                <h2><small>Benefits of Exercise</small>To enjoy the glow of good health, you must exercise</h2>
                            </div>
                        </div>
                        <div class="col-md-2" style="max-width: 66.666666%;float: left">
                            <div class="row" style="margin-right: -15px;margin-left: -15px;">
                                <div class="col-md-6 text-sm-center service-block">
                                    <Icon type="md-add" />
                                    <h3>Better Sleep</h3>
                                    <p>Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe.</p>
                                </div>
                                <div class="col-md-6 text-sm-center service-block">
                                    <Icon type="md-bicycle" />
                                    <h3>Reduces Weight</h3>
                                    <p>Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe.</p>
                                </div>
                                <div class="col-md-6 text-sm-center service-block">
                                    <Icon type="ios-body" />
                                    <h3>Reduces Weight</h3>
                                    <p>Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe.</p>
                                </div>
                                <div class="col-md-6 text-sm-center service-block">
                                    <Icon type="ios-baseball" />
                                    <h3>Reduces Weight</h3>
                                    <p>Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3" style="max-width: 33.333333%;float: left">
                            <img src="./../images/side-01.jpg" class="img-fluid" style="max-width: 100%;height: 450px;"/> </div>
                    </div>
                    <!-- /.row -->
                </div>
            </section>

        <section class="about-sec parallax-section" id="about">
            <div class="content" style="position: relative;width: 1140px;max-width: 100%;margin: auto;">
               <div class="row" style="display: flex">
                   <div class="col-md-3">
                       <h2><small>我们是谁</small>关于<br>我们的博客</h2>
                   </div>
                   <div class="col-md col-md-5">
                       <p>To enjoy good health, to bring true happiness to one's family, to bring peace to all, one must first discipline and control one's own mind. If a man can control his mind he can find the way to Enlightenment, and all wisdom and virtue will naturally come to him.</p>
                       <p>Saving our planet, lifting people out of poverty, advancing economic growth... these are one and the same fight. We must connect the dots between climate change, water scarcity, energy shortages, global health, food security and women's empowerment. Solutions to one problem must be solutions for all.</p>
                   </div>
                   <div class="col-md col-md-5">
                       <p>Our greatest happiness does not depend on the condition of life in which chance has placed us, but is always the result of a good conscience, good health, occupation, and freedom in all just pursuits.</p>
                       <p>Being in control of your life and having realistic expectations about your day-to-day challenges are the keys to stress management, which is perhaps the most important ingredient to living a happy, healthy and rewarding life.</p>
                       <p><a href="#" class="btn btn-transparent-white btn-capsul">Explore More</a></p>
                   </div>
               </div>
            </div>
        </section>

        <section class="blog-sec service-sec" id="blog">
            <div class="container">
                <div class="row" style="margin: auto;width: 100%;">
                    <div class="col-md-1">
                        <div class="heading text-md-center text-xs-center" style="text-align: center;">
                            <h2><small style="line-height: 7px;">了解这个大家庭</small>我们的团队</h2>
                        </div>
                        <div class="row" style="margin: 0px auto">
                            <figure class="partner-1" style="float: left;width: 30%;margin-right:18%;margin-left: 11%">
                                <img class="swiper-slide" src="./../images/blog-01.jpg" style="background-size: cover!important;background-position: center center!important;" />
                                <div class="discrip" style="line-height: 1.1;margin-top: 30px;text-align: center;">
                                    <div>
                                        <h3 class="blog-title">
                                            <small>
                                                <font style="vertical-align: inherit;">
                                                    <font style="vertical-align: inherit;">Lisa</font>
                                                </font>
                                            </small>
                                            </h3>
                                    </div>
                                    <p class="blog-content">
                                        <font style="vertical-align: inherit;">
                                            <font style="vertical-align: inherit;">我们最大的幸福并不取决于生活条件</font>
                                        </font>
                                    </p>
                                </div>
                            </figure>
                            <div class="partner-1" style="float: left;width: 30%;">
                                <img class="swiper-slide" src="./../images/blog-02.jpg" style="background-size: cover!important;background-position: center center!important;" />
                                <div class="discrip" style="line-height: 1.1;margin-top: 30px;text-align: center;">
                                    <div>
                                        <h3 class="blog-title">
                                            <small>
                                                <font style="vertical-align: inherit;">
                                                    <font style="vertical-align: inherit;">TanLin</font>
                                                </font>
                                            </small>
                                        </h3>
                                    </div>
                                    <p class="blog-content">
                                        <font style="vertical-align: inherit;">
                                            <font style="vertical-align: inherit;">我们最大的幸福并不取决于生活条件</font>
                                        </font>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="video-sec parallax-section">
            <div class="overlay"></div>
            <div class="container" style="position: relative;">
                <div class="row" style="margin: auto;">
                    <div class="col-md-12">
                        <h2 class="wow fadeInUp" data-wow-delay="0.5s">观看视频
                            <small>没有健康生活不是生命; 它只是一种流浪和痛苦的状态 - 一种死亡的形象。</small>
                        </h2>
                        <Icon type="logo-youtube" @click.native="videoClick" />
                        <small><em>视频: 健康小贴士</em></small>
                    </div>
                </div>
            </div>
        </section>

        <section class="service-sec" style="background: rgb(247,247,247);">
            <div class="container">
                <div class="row" style="margin: auto;width: 100%;">
                    <div class="col-md-2" style="max-width: 100%;float: left">
                        <div class="row" style="margin-right: -15px;margin-left: -15px;">
                            <div class="" style="text-align: center;margin-right: 6px;width: 55%;float: left;margin-top: 7%;">
                                <div class="nbs-flexisel-item" style="width: 635px;height: 435px;">
                                    <Carousel autoplay v-model="value" :autoplay-speed="value_speed" dots="none" :radius-dot="radius_dot" arrow="never">
                                        <CarouselItem>
                                            <div class="client-text">
                                                <h4>paulo seemann</h4>
                                                <h5>founder google.com</h5>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                                    ex ea commodo consequat.
                                                </p>
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div class="client-text">
                                                <h4>paulo seemann</h4>
                                                <h5>founder google.com</h5>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                                    ex ea commodo consequat.
                                                </p>
                                            </div>
                                        </CarouselItem>
                                    </Carousel>
                                </div>
                            </div>
                            <div class="tip-1" style="">
                                <img class="swiper-slide" src="./../images/banner4.jpg" style="background-size: cover!important;background-position: center center!important;" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="contact-sec service-sec" id="contact">
            <div class="container">
                <div class="row" style="margin: 0px auto;">
                    <div class="col-md-1">
                        <div class="heading text-md-center text-xs-center" style="text-align: center;">
                            <h2>联系<small>我们的工作是展示我们的能力.</small> </h2>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="exampleName">名称</label>
                            <input type="text" class="form-control" id="exampleName" aria-describedby="emailHelp">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="examplePhone">电话号码</label>
                            <input type="text" class="form-control" id="examplePhone" aria-describedby="emailHelp">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="exampleInputEmail1">电子邮件</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                            <small id="emailHelp" class="form-text text-muted">我们绝不会与其他任何人分享您的电子邮件.</small> </div>
                    </div>
                    <div class="col-md-12" style="display: inline-table;width: 100%;">
                        <label for="exampleTextarea">输入您的消息</label>
                        <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
                    </div>
                    <div class="col-md-12 text-xs-center action-block"> <a href="#" class="btn btn-capsul btn-aqua">提交</a> </div>
                </div>
            </div>
        </section>

        <div class="fotter-section">
            <div class="container" style="">
                <div class="footer-top" style="margin: 8px auto;">
                    <div class="footer-indicate">
                        <ul>
                            <li class="list"><Icon type="ios-call" /></li>
                            <li class="list"><p>(028) 333 333 3214/30</p></li>

                            <li class="list"><Icon type="ios-pin" /></li>
                            <li class="list"><p>中国, 成都</p></li>

                            <li class="list"><Icon type="ios-mail" /></li>
                            <li class="list"><a href="mailto:example@mail.com" style="margin-left: -7px">lisa.wow@outlook.com</a></li>
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
                        <p>Copyright &copy; 2019.<a target="_blank" href="">电子科技大学成都学院-2015级云计算科学与技术系</a> - More Message <a href="" target="_blank" title="毕业设计">毕业设计</a></p>
                    </div>
                </div>
            </div>
        </div>

        <!--视频播放-->

        <Modal v-model="video" width="360">
            <p slot="header" style="color:#f60;text-align:center">

            </p>
            <div style="">

                <video width="320" height="240" controls="controls" autoplay="autoplay">
                    <source src="./../../videos/full.mp4" type="video/ogg" />
                    <source src="./../../videos/full.mp4" type="video/mp4" />
                    <source src="./../../videos/full.mp4" type="video/webm" />
                    <object data="./../../videos/full.mp4" width="320" height="240">
                        <embed width="320" height="240" src="./../../videos/full.mp4" />
                    </object>
                </video>

            </div>
            <div slot="footer">

            </div>
        </Modal>

    </div>
</template>
<script>




    export default {
        name: 'index',
        data() {
            return {
                video:false,
                carousel: 0,
                value: 0,
                radius_dot: false,
                speed: 4000000,
                value_speed: 5000,
                fix1: false,
                fix2: false,
            },
        },

        mounted () {
            window.addEventListener('scroll', this.handleScroll)
        },
        created() {
        },
        methods: {

            //视频播放
            videoClick(){
                console.log('点击')
                this.video = true;
            },

            handleScroll () {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                if(scrollTop>0){
                    this.fix1 = true;
                    this.fix2 = true;
                }else{
                    this.fix1 = false;
                    this.fix2 = false;
                }
            },
        },

    }

</script>

<style type="text/css">
    /*
    导航样式
    */

    .fixed{
        background: white;
    }

    .top-bar .nav-item.active .fixed2 {
        color: #0297ff !important;
        border-bottom: none;
    }


    .fixed2{
        color:black !important;
    }

    @media (min-width: 992px)
        .navbar-toggleable-md .navbar-collapse {
            display: -webkit-box!important;
            display: -webkit-flex!important;
            display: -ms-flexbox!important;
            display: flex!important;
            width: 100%;
        }

        .container{
            display: flex;
            width: 1140px;
            max-width: 100%;
            margin:auto;
            padding-top: 17px;
            /*padding-right: 15px;*/
            /*padding-left: 15px;*/
        }



        @media (min-width: 992px)
            .navbar-toggleable-md .navbar-nav {
                flex-direction:row;
            }

        .nav-item{
            float: left;
            margin-right: -20px !important;
        }
            .top-bar .nav-item.active .nav-link {
                color: #fff;
                border-bottom: 2px solid #fff;
                border-radius: 0;
            }

    /*
    首页样式
    */



    .ivu-carousel{
        height:100%;
        width:100%;
    }

    .main-slider{
        height:100vh;
        width:100%;
    }

    .swiper-slide{
        webkit-flex-shrink: 0;
        -ms-flex: 0 0 auto;
        flex-shrink: 0;
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
    }

    .ivu-carousel-list{
        height:100vh;
    }

    .swiper-content{
        position: absolute;
        width: 50%;
        top:25%;
        padding:100px;
    }
    .swiper-content h2 {
        text-align: center;
        color: #fff;
        font-size: 54px;
        line-height: 59px;
        padding: 0 19%;
        text-transform: uppercase;
    }

    .col-md-6{
        max-width: 42%;
        float: left;
    }
    .col-md-3{
        max-width: 16%;
        float: left;
        margin-right:5%;
    }
    .col-md-5{
         max-width: 33.333333%;
         float: left;
        margin-right: 5%;
    }

    .col-md-4{
        width: 30%;
        float: left;
        margin-right: 3%;
    }
            .form-group {
                margin-bottom: 1rem;
            }

            label {
                display: inline-block;
                margin-bottom: .5rem;
            }


            .contact-sec input[type="text"], .contact-sec input[type="email"] {
                border-radius: 0px;
            }

            .contact-sec .form-control {
                background: transparent;
                border-bottom: 1px solid #fff;
                border-top: none;
                border-left: none;
                border-right: none;
                color: #fff;
                padding-left: 0;
            }
            .form-control {
                display: block;
                width: 100%;
                padding: .5rem .75rem;
                font-size: 1rem;
                line-height: 1.25;
                color: #464a4c;
                background-color: #fff;
                background-image: none;
                -webkit-background-clip: padding-box;
                background-clip: padding-box;
                border: 1px solid rgba(0,0,0,.15);
                border-radius: .25rem;
            }


            .col-md-12{
                flex: 0 0 100%;
                max-width: 96%;
            }

            .contact-sec textarea {
                border-radius: 0;
                height: 50px;
            }

            .contact-sec .action-block {
                margin-top: 40px;
            }

            .contact-sec .action-block a.btn {
                padding-left: 35px;
                padding-right: 35px;
                text-transform: uppercase;
                font-weight: 600;
            }

            .btn-aqua {
                background: #0297FF;
                color: #fff;
            }
            .btn-capsul {
                border-radius: 30px;
            }

            .btn {
                display: inline-block;
                font-weight: 400;
                line-height: 1.25;
                text-align: center;
                white-space: nowrap;
                vertical-align: middle;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                border: 1px solid transparent;
                padding: .5rem 1rem;
                font-size: 1rem;
                border-radius: .25rem;
            }




        .ivu-icon-logo-youtube{
            position: relative;
            border: 2px solid #ffffff;
            border-radius: 100px;
            color: #ffffff;
            font-size: 28px;
            width: 80px;
            height: 80px;
            line-height: 80px;
            text-align: center;
            vertical-align: middle;
            margin-top: 22px;
        }

        .tip-1{
            max-width: 40%;
            float: left;
        }

    .nbs-flexisel-item {
        float: left;
        margin: 0px;
        padding: 0px;
        position: relative;
        cursor: pointer;
    }
     .nbs-flexisel-item {
                float: left;
                margin: 0px;
                padding: 0px;
                position: relative;
                cursor: pointer;
            }

     .client-text h4{
                color: #42413f;
                font-size: 3em;
                font-weight: 600;
            }

     .client-text h5{
                color: #9770dd;
                font-size: 1.5em;
                font-weight: 400;
                padding-bottom: 2.5em;
                text-transform: capitalize;
                background: url('./../images/line.png') no-repeat 47px 42px;
                display: block;
         }

    .list{
        display: inline-block;
        margin: 0 4px;
    }
            .footer-indicate p {
                font-size: 1.1em;
                margin-left: -7px;
            }

            .fotter-section {
                padding: 2em 0;
                text-align: center;
            }

            .footer-socialicons {
                margin-top: 4em;
            }

            .footer-bottom {
                margin-top: 1em;
            }

            .footer-socialicons i {
                width: 75px;
                height: 75px;
                background: url('./../images/img-sprite.png') no-repeat -90px 0px;
                display: inline-block;
                margin: 0 0.3em;
            }

            .footer-socialicons i.icon2 {
                background-position: -165px 0px;
            }

            .footer-socialicons i.icon3 {
                background-position: -240px 0px;
            }

            .footer-socialicons i.icon4 {
                background-position: -315px 0px;
            }

            .footer-socialicons i.icon5 {
                background-position: -392px 0px;
            }

            .footer-socialicons i.icon6 {
                background-position: 0px -75px;
            }


    .ivu-icon-ios-call{

    }

</style>