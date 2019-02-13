<template>
    <div id="index2">

        <div class="top-nav">
            <nav :class="fix1 == true ? 'top-bar fixed' : 'top-bar'">
                <div class="container">
                    <div>
                        <Button :class="fix2 == true ? 'login-btn fixed2' : 'login-btn' " style="background: transparent;border: navajowhite;" @click="login">登录</Button>
                        <Button class="login-btn" style="background: transparent;border: navajowhite;color: #0297ff;" @click="register">注册</Button>

                        <!--<a class="registe-btn" href="#"><span style="color: #0297ff;">注册</span></a>-->
                    </div>
                    <div class="nav-other" style="display: flex!important;position: fixed;right: 17%">
                        <Tabs value="name1" @on-click="tabchange" :class="fix1 == true ? 'ivu-tabs fixed2' : 'ivu-tabs'">
                            <TabPane :label="label_1" name="name1"></TabPane>
                            <TabPane :label="label_2" name="name2"></TabPane>
                            <TabPane :label="label_3" name="name3"></TabPane>
                            <TabPane :label="label_4" name="name4"></TabPane>
                            <TabPane :label="label_5" name="name5"></TabPane>
                            <TabPane :label="label_6" name="name6"></TabPane>
                            <TabPane :label="label_7" name="name7"></TabPane>
                        </Tabs>
                    </div>
                </div>
            </nav>
        </div>
        <!--第一部分-主页展示轮播图-->
        <div class="part-one" id="home">
            <div class="" style="height: 100vh;width: 100%;">
                <Carousel autoplay v-model="carousel"  loop :autoplay-speed="speed">
                    <CarouselItem>
                        <div class="demo-carousel">
                            <img class="carousel-slide" src="./../images/3.jpg"  style="background-size: cover!important;background-position: center center!important;"/>
                            <div class="carousel-content" style="">
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
                            <img class="carousel-slide" src="./../images/2.jpg" style="background-size: cover!important;background-position: center center!important;" />
                            <div class="carousel-content" style="">
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

        <!--第二部分-优点建议拼图-->
        <section class="part-two" id="part-2">
            <div class="container">
                <div class="row" style="margin: auto;width: 100%;">
                    <div class="row-item-1" style="margin: 0px auto;">
                        <div class="row-item-head" style="text-align: center;">
                            <h2><small>Benefits of Exercise</small>To enjoy the glow of good health, you must exercise</h2>
                        </div>
                    </div>
                    <div class="row-item-2" style="max-width: 80%;float: left">
                        <div class="row-item-list" style="margin-right: -15px;margin-left: -15px;">
                            <div class="row-item-list-1 msg">
                                <Icon type="md-add" />
                                <h3>Better Sleep</h3>
                                <p>Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe.</p>
                            </div>
                        </div>
                        <div class="row-item-list" style="margin-right: -15px;margin-left: -15px;">
                            <div class="row-item-list-1 msg">
                                <Icon type="md-bicycle" />
                                <h3>Better Sleep</h3>
                                <p>Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe.</p>
                            </div>
                        </div>
                        <div class="row-item-list" style="margin-right: -15px;margin-left: -15px;">
                            <div class="row-item-list-1 msg">
                                <Icon type="ios-body" />
                                <h3>Better Sleep</h3>
                                <p>Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe.</p>
                            </div>
                        </div>
                        <div class="row-item-list" style="margin-right: -15px;margin-left: -15px;">
                            <div class="row-item-list-1 msg">
                                <Icon type="ios-baseball" />
                                <h3>Better Sleep</h3>
                                <p>Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row-item-3" style="width:20%;max-width: 20%;float: left;margin-top: 60px;">
                        <img src="./../images/side-01.jpg" class="row-item-img" style="max-width: 100%;height: 450px;"/>
                    </div>
                </div>
            </div>
        </section>

        <!--第三部分-关于我们博客-->
        <section class="part-three" id="part-3">
            <div class="content" style="position: relative;width: 1140px;max-width: 100%;margin: auto;">
                <div class="row" style="display: flex">
                    <div class="row-item-3">
                        <h2><small>我们是谁</small>关于<br>我们的论坛</h2>
                    </div>
                    <div  class="row-item-4">
                        <p>To enjoy good health, to bring true happiness to one's family, to bring peace to all, one must first discipline and control one's own mind. If a man can control his mind he can find the way to Enlightenment, and all wisdom and virtue will naturally come to him.</p>
                        <p>Saving our planet, lifting people out of poverty, advancing economic growth... these are one and the same fight. We must connect the dots between climate change, water scarcity, energy shortages, global health, food security and women's empowerment. Solutions to one problem must be solutions for all.</p>
                    </div>
                    <div class="row-item-5">
                        <p>Our greatest happiness does not depend on the condition of life in which chance has placed us, but is always the result of a good conscience, good health, occupation, and freedom in all just pursuits.</p>
                        <p>Being in control of your life and having realistic expectations about your day-to-day challenges are the keys to stress management, which is perhaps the most important ingredient to living a happy, healthy and rewarding life.</p>
                        <p><a href="#" class="btn btn-more">Explore More</a></p>
                    </div>
                </div>
            </div>
        </section>

        <!--第四部分-我们的团队-->
        <section class="part-four" id="part-4">
            <div class="container">
                <div class="row" style="margin: auto;width: 100%;">
                    <div class="row-item-1">
                        <div class="row-item-head" style="text-align: center;">
                            <h2><small>了解我们</small>关于我们的团队</h2>
                        </div>
                        <div class="row" style="margin: 0px auto">
                            <figure class="partner-1" style="float: left;width: 30%;margin-right:18%;margin-left: 11%">
                                <img class="carousel-slide" src="./../images/blog-01.jpg" style="background-size: cover!important;background-position: center center!important;" />
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
                                <img class="carousel-slide" src="./../images/blog-02.jpg" style="background-size: cover!important;background-position: center center!important;" />
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

        <!--第五部分-观看视频-->
        <section class="part-five video-part" id="part-5">
            <div class="overbg"></div>
            <div class="container" style="position: relative;">
                <div class="row" style="margin: auto;">
                    <div class="row-item-6">
                        <h2 data-wow-delay="0.5s">观看视频
                            <small>没有健康生活不是生命; 它只是一种流浪和痛苦的状态 - 一种死亡的形象。</small>
                        </h2>
                        <a href="#">
                            <Icon type="logo-youtube" />
                        </a>
                        <small><em>视频: 健康小贴士</em></small>
                    </div>
                </div>
            </div>
        </section>

        <!--第六部分-心灵鸡汤-->
        <section id="part-6" class="part-six part-four" style="background: rgb(247,247,247);">
            <div class="container">
                <div class="row" style="margin: auto;width: 100%;">
                    <div class="row-item-2" style="max-width: 100%;float: left">
                        <div class="row" style="margin-right: -15px;margin-left: -15px;">
                            <div class="" style="text-align: center;margin-right: 6px;width: 55%;float: left;margin-top: 7%;">
                                <div class="tip-item" style="width: 635px;height: 435px;">
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
                            <div class="tip-img" style="">
                                <img class="carousel-slide" src="./../images/banner4.jpg" style="background-size: cover!important;background-position: center center!important;" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--第七部分-联系我们-->
        <section id="part-7" class="part-seven">
            <div class="container">
                <div class="row" style="margin: 0px auto;">
                    <div class="row-item-1">
                        <div class="row-item-head" style="text-align: center;">
                            <h2 style="color: #fff"><small style="color: #fff">联系</small>我们的工作是展示我们的能力.</h2>
                        </div>
                    </div>
                    <div class="row-item-7">
                        <div class="form-group">
                            <label for="exampleName">名称</label>
                            <input type="text" class="form-control" id="exampleName" aria-describedby="emailHelp">
                        </div>
                    </div>
                    <div class="row-item-7">
                        <div class="form-group">
                            <label for="examplePhone">电话号码</label>
                            <input type="text" class="form-control" id="examplePhone" aria-describedby="emailHelp">
                        </div>
                    </div>
                    <div class="row-item-7">
                        <div class="form-group">
                            <label for="exampleInputEmail1">电子邮件</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                            <small id="emailHelp" class="form-text text-muted">我们绝不会与其他任何人分享您的电子邮件.</small> </div>
                    </div>
                    <div class="row-item-8" style="display: inline-table;width: 100%;">
                        <label for="exampleTextarea">输入您的消息</label>
                        <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
                    </div>
                    <div class="row-item-8 text-xs-center action-block"> <a href="#" class="btn btn-capsul btn-aqua">提交</a> </div>
                </div>
            </div>
        </section>

        <!--第八部分-footer-->
        <div class="part-footer">
            <div class="container" style="">
                <div class="footer-top" style="margin: 8px auto;">
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


        <!--登录-->
        <Modal  v-model="login_modal" width="500px" :footer-hide='footer_hide'>

            <loginpage></loginpage>
            <!--<p slot="header" style="color:#f60;text-align:center">-->
                <!--<Icon type="ios-information-circle"></Icon>-->
                <!--<span>登录</span>-->
            <!--</p>-->

            <!--<div slot="footer">-->
                <!--<Button type="primary" size="large" @click="login_cancel">取消</Button>-->
                <!--<Button type="primary" size="large" :loading="modal_loading" @click="login_ok">登录</Button>-->
            <!--</div>-->

        </Modal>

    </div>
</template>
<script>

    import loginpage from './login.vue'

    export default {
        name: 'index',
        data() {
            return {
                footer_hide:true,
                carousel:0,
                value:0,
                radius_dot:false,
                speed:4000,
                value_speed:5000,
                fix1:false,
                fix2:false,
                label_1:(h) => {return h('a',{domProps:{href:'#home'},attrs:{class: (this.fix1 == true ? 'fixed2' : '') }},'主页')},
                label_2:(h) => {return h('a',{domProps:{href:'#part-2'},attrs:{class: (this.fix1 == true ? 'fixed2' : '') }},'建议')},
                label_3:(h) => {return h('a',{domProps:{href:'#part-3'},attrs:{class: (this.fix1 == true ? 'fixed2' : '') }},'论坛')},
                label_4:(h) => {return h('a',{domProps:{href:'#part-4'},attrs:{class: (this.fix1 == true ? 'fixed2' : '') }},'关于')},
                label_5:(h) => {return h('a',{domProps:{href:'#part-5'},attrs:{class: (this.fix1 == true ? 'fixed2' : '') }},'视频')},
                label_6:(h) => {return h('a',{domProps:{href:'#part-6'},attrs:{class: (this.fix1 == true ? 'fixed2' : '') }},'鸡汤')},
                label_7:(h) => {return h('a',{domProps:{href:'#part-7'},attrs:{class: (this.fix1 == true ? 'fixed2' : '') }},'联系')},
                login_modal:false,
                modal_loading:false,
            }
        },
        mounted () {
            window.addEventListener('scroll', this.handleScroll)
        },
        components: {loginpage},
        created() {
        },
        methods: {
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
            tabchange(value){
                console.log(this)
                var x = ""
                switch (value)
                {
                    case 'name1':
                        x="Today it's Sunday";
                        break;
                    case 'name2':
                        x="Today it's Monday";
                        break;
                    default:
                        x="sss"
                }
            },
            login(){
                this.login_modal = true;
            },
            login_cancel(){
                this.login_modal = false;
            },
            login_ok(){
                this.modal_loading = true;
                setTimeout(() => {
                    this.modal_loading = false;
                    this.login_modal = false;
                    this.$Message.success('登录成功！');
                }, 2000);
            },
            register(){}
        },

    }


</script>
<style type="text/css">

    .fixed{
        background: white;
    }

    .fixed2{
        color:black !important;
    }

    .row-item-1 .row-item-head {
        float: left;
        width: 100%;
        margin-bottom: 70px;
    }

    .row-item-1 h2 {
        display: block;
        text-transform: capitalize;
        font-weight: 600;
        color: #0297FF;
        font-size: 32px;
    }

    .row-item-1 h2 small {
        color: #222;
        display: block;
        font-size: 22px;
        margin-bottom: 18px;
    }

    .part-two .row-item-list-1 {
        margin-top: 30px;
        text-align: center;
    }

    .part-two i {
        border: 1px solid #0297FF;
        border-radius: 2px;
        font-size: 25px;
        padding: 12px 0;
        width: 52px;
        color: #0297FF;
        margin-bottom: 20px;
    }

    .part-two h3 {
        font-size: 23px;
        font-weight: 600;
    }

    .part-two p {
        line-height: 22px;
        margin-top: 13px;
        padding: 0 21px;
    }


    .msg{
        max-width: 42%;
        float: left;
    }

    .tip-item{
        float: left;
        margin: 0px;
        padding: 0px;
        position: relative;
        cursor: pointer;
    }

    .ivu-carousel {
        height: 100%;
        width: 100%;
    }

    .ivu-carousel-list {
        height: 100vh;
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


    .ivu-icon-logo-youtube {
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



</style>