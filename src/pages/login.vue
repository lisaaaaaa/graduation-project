<template>
    <div id="login" style="position:relative;">
        <!--<div id="center" style="min-height:85%;">-->
        <div id="center" style="">

            <div class="login-card" style="height: auto">
                <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" label-position="top">
                    <span class="join">进入我的健康中心</span>
                    <FormItem prop="user">
                        <Input type="text" v-model="formCustom.user" @on-enter="handleSubmit(formCustom)" size="large" placeholder="用户名">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem prop="passwd">
                        <Input type="password" v-model="formCustom.passwd" @on-enter="handleSubmit(formCustom)" size="large" placeholder="密码">
                        <Icon type="ios-lock-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem>
                        <span>验证码：</span>                   
                        <i-input v-model="yanzhengma" placeholder="请输入验证码" @on-enter="handleSubmit(formCustom)" style="width: 100px" ></i-input>                   
                        <input class="code-check" type="button" @click="createCode" v-model="checkCode" title="点击切换" style=""/>
                        <span style="font-size: 12px">点击切换</span>
                    </FormItem>
                    <FormItem style="margin-left: 10%;">
                        <Button style="width: 309px;margin-top: -10px;font-size: 16px;" type="primary" :loading="modal_loading" @click="handleSubmit(formCustom)">登录</Button>
                    </FormItem>
                </Form>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'login',
        data() {
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('密码不能为空'));
                } else {
                    callback();
                }
            };

            const validateUser = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('用户名不能为空'));
                } else {
                    callback();
                }
            };
            return {
                modal_loading:false,
                formCustom: {
                    passwd: '',
                    user: '',
                },
                ruleCustom: {
                    passwd: [
                        {validator: validatePass, trigger: 'blur'}
                    ],
                    user: [
                        {validator: validateUser, trigger: 'blur'}
                    ],
                },
                identity:'配置管理员',
                change:'1',
                checkCode: '',
                yanzhengma: '',
            }
        },
        created() {
            this.createCode();
        },
        methods: {
            createCode(){
                var code = "";
                var codeLength = 4;//验证码的长度      
                var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
                        'S','T','U','V','W','X','Y','Z');
                for(var i = 0; i < codeLength; i++) {
                    var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）        
                    code += random[index];//根据索引取得随机数加到code上      
                }
                this.checkCode = code;//把code值赋给验证码    
            },
            // 验证所输入验证码是否一致，不区分大小写   
            checkL_yzma(){
                this.yanzhengma.toUpperCase();//取得输入的验证码并转化为大写        
                if(this.yanzhengma == '') {
                    this.$Message.error('请输入验证码');
                    this.createCode();
                    return false;
                }else if(this.yanzhengma.toUpperCase() != this.checkCode ) {
                    this.$Message.error('验证码输入错误');
                    this.createCode();//刷新验证码        
                    this.yanzhengma = '';
                    return false;
                }else {
                    //输入正确时      
                    return true;
                }
            },
            handleSubmit(value) {
                if(value.user == ""){
                    this.$Message.error('用户名不能为空');
                    return;
                }
                if(value.passwd == ""){
                    this.$Message.error('密码不能为空');
                    return;
                }
                var account = value.user;
                var psw = value.passwd;
                if(this.change == 2){
                    account = account + '_audit'
                }else if(this.change == 1){
                    account = account + '_config'
                }else{
                    account = account + '_visitor'
                }
                if(this.checkL_yzma()){
                    this.modal_loading = true;
                    setTimeout(() => {
                        this.modal_loading = false;
                        this.$Message.success('登录成功！');
                        this.$router.push({name: 'user', params: {name:account}});
                        }, 2000);
                }
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  type="text/css">

    .row {
        margin-right: -15px;
        margin-left: -15px;
    }

    .join {
        font-size: 17px;
        color: #4D4D4D;
        margin-bottom: 26px;
        display: block;
        padding-bottom: 10px;
        border-bottom: 1px solid #CCCCCC;
    }

    .Account-number {
        color: #4D4D4D;
        position: relative;
        bottom: 5px;
        font-weight: 600;
        top: 0px;
        font-family: 'shsn';
    }

    .cloud-index-hr-footer {
        width: 80%;
        padding-left: 20%;
    }

    .cloud-copyright {
        text-align: center;
        color: #828690;
        font-size: 14px;
    }

    .login-card {
        position: relative;
        width: 360px;
        margin: 0px auto;
        /*width: 360px;*/
        /*height: 360px;*/
        /*border: 1px solid #d4d2d2;*/
        /*background-color: #ffffff;*/
        /*box-shadow: 0px 0px 2px 1px #eee;*/
        /*border-radius: 5px;*/
        /*padding: 25px 20px 10px 20px;*/
    }

    .cloud-index-footer {
        /*margin-top: 2%;*/
        /*position: absolute;*/
        /*bottom: 0;*/
        font-family: 'shsn';
        background-color: #f6f6f6;
        background-color: #26313E;
        /*height: 200px;*/
        height: 20%;
        width: 100%;
        /*margin-top: 174px;*/
    }

    .cloud-index-columns {
        text-align: center;
    }

    .cloud-index-column {
        display: inline-block;
        vertical-align: top;
        width: 16%;
    }

    #login .h1, #login .h2,#login .h3,#login h1, #login h2, #login h3 {
        margin-top: 20px;
        margin-bottom: 10px;
    }

    .cloud-index-column h3 {
        font-family: 宋体;
        font-weight: bold;
        font-size: 14px;
        color: rgb(255, 255, 255);
    }

    .cloud-index-column a {
        font-family: 宋体;
        font-size: 12px;
        cursor: pointer;
        color: rgb(130, 134, 144);
        text-decoration: none;
    }

    .cloud-index-title {
        height: 60px;
        background-color: #171F2A;
    }

    .img-logo-top {
        padding: 15px 0px 0px 50px;
    }

    .cloud-text-top {
        color: white;
        float: right;
        padding: 0px 20px 0px 0px;
    }

    .container-fluid {
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }

    .login {
        font-family: 'shsn';
        position: relative;
        padding-top: 20px;
        padding-left: 13.3%;
    }

    .cloud-copyright {
        text-align: center;
        color: #828690;
        font-size: 14px;
    }

    .cloud-index-footer hr {
        border: 1px;
        border-top: 1px solid #37414B;
    }

    .cloud-index-hr-footer {
        width: 80%;
        padding-left: 20%;
    }

    hr {
        display: block;
        unicode-bidi: isolate;
        -webkit-margin-before: 0.5em;
        -webkit-margin-after: 0.5em;
        -webkit-margin-start: auto;
        -webkit-margin-end: auto;
        overflow: hidden;
        margin-top: 20px;
        margin-bottom: 20px;
        border: 0;
        border-top: 1px solid #eee;
        height: 0;
        box-sizing: content-box;
    }

    /*.ivu-input-group{*/
    /*font-size: 22px ;*/
    /*}*/

    .login-card  .ivu-form-item-content{
        font-size: 13px;
    }

    .ivu-icon{
        font-size: 22px;
    }

    .code-check {
        vertical-align: middle;
        line-height: normal;
        margin-left: 30px;
        height: 32px;
        width: 90px;
        font-size: 20px;
        font-style: oblique;
        letter-spacing: 8px;
        color: transparent;
        text-shadow: rgba(0,0,0,0.2) 0 0 1px;
        background: url('./../images/yanzheng.png');
    }


</style>
