<template>
    <div id="backend">
        <div style="width:100%;height:100%" >

            <div id="nav-left" class="nav-left">
                <div style="height:70px;margin: 0px auto;text-align: center;">
                        <div style="">
                            <Icon type="md-boat" size="35"/>
                        </div>
                        <div style="margin-top: 5px;">
                            <span style="color:#fff;font-size: 13px;">健康中心系统</span>
                        </div>


                </div>
                <Menu :theme="theme" active-name="1" :open-names="['1']">
                    <template v-for="list in this.subitems">
                        <router-link :to="list.uri">
                            <MenuItem :name="list.level"><Icon :type="list.icon" />{{list.name}}</MenuItem>
                        </router-link>
                    </template>
                </Menu>
            </div>

            <div id="nav-tip" style="margin-bottom: 0;position: fixed;width: 100%;top: 0px;z-index: 9;">
                <div class="nav-top" style="height:60px;background:#3E4B5E">
                    <div style="display: flex;float: right;line-height: 60px;width: 15%;">
                        <div style="margin-right: 18%;">
                            <!--<div class="top-icon">-->
                                <!--<Input search size="small" placeholder="Enter something..." />-->
                            <!--</div>-->
                            <!--<div class="top-icon">-->
                                <!--<Badge :count="2" type="warning" size="5" overflow-count="99">-->
                                    <!--<Icon type="md-notifications" size="20"/>-->
                                <!--</Badge>-->
                            <!--</div>-->
                            <div class="top-icon">
                                <Badge :count="5" type="warning" overflow-count="99" >
                                    <Icon type="ios-mail" size="20"/>
                                </Badge>
                            </div>
                        </div>
                        <div class="manager" style="">
                            <Icon type="md-contact" />
                            <!--<span style="margin-left: 5px;">{{ this.login_name }}</span>-->
                            <a  :href=" '#/backend_Page/backend_Administrator' " style="margin-left: 5px;">{{ this.login_name }}</a>
                        </div>
                        <div style="margin-left:15px;">
                            <Icon type="md-exit" style="cursor: pointer" title="退出" @click.native="exit"/>
                        </div>
                    </div>

                </div>
                <div id="right-body" style="color:black">
                    <transition>
                        <router-view></router-view>
                    </transition>
                </div>
            </div>



        </div>
    </div>
</template>

<script>

    import {backend_nav} from  './../../../config/nav'
    import {getStore} from './../../../config/Utils'

    export default {
        name: 'backend_Page',
        data() {
            return {
                login_name:'',
                theme:'light',
                backend_nav:{},    //菜单
                subitems: {},
                scrollTop:'',
        }
        },
        props:[],
        components: {backend_nav},
        mounted() {
            this.subitems = backend_nav;
            this.login_name = getStore('user_name')
            window.addEventListener('scroll', this.handleScroll)
        },
        created() {

        },
        methods: {
            handleScroll () {
//                this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
//                if( parseInt(this.scrollTop) > 84 ){
//                    document.getElementById("left-box").style.position = 'fixed';
//                    document.getElementById("left-box").style.bottom = '0px';
//                    document.getElementById("left-box").style.top = '0px';
//                    document.getElementById("right-box").style.marginLeft = '140px';
//                }else{
//                    document.getElementById("left-box").style.position = '';
//                    document.getElementById("left-box").style.bottom = '';
//                    document.getElementById("right-box").style.marginLeft = '';
//                }
            },

            exit(){
                this.$store.commit('logout');
                this.$router.push({name:'index'})
            }

        },
        beforeDestroy:function(){
            window.removeEventListener('scroll', this.handleScroll)
            this.$Notice.destroy()
        },
    }

</script>

<style type="text/css">

    #backend{
        color: #fff;
    }

    #backend .top-icon{
        margin-right:30px;
        float: left;
    }

    #backend .ivu-badge-count{
        top:6px;
    }

    #backend #nav-left .ivu-menu-light{
    }

    #backend #nav-left .ivu-menu-light a{
        color:#fff;
    }

    #backend #nav-left{
        z-index: 10;
        width: 170px;
        position: fixed;
        left: 0;
        background: #606777;
        top: 0px;
        bottom: 0;
        overflow-y: auto;
        -webkit-box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
        box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);

    }

    #backend .ivu-menu-light {
        background: #495060;
    }

    #backend .ivu-menu{
        width:170px !important;
    }

    #backend #right-body{
        position: fixed;
        left: 190px;
        top: 70px;
        right: 20px;
        overflow-y: auto;
        bottom: 10px;
    }

    #backend #nav-tip .manager a{
        color:#fff;
    }


</style>