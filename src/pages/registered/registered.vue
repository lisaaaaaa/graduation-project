<template>
    <div id="registered" style="">
        <div class='bg-style' style="width:100%;">
            <div class='content-left' style="float:left;width:40%;text-align: center;color:#fff;margin: 310px 120px;">
                <p style="font-size:60px;">健康中心系统</p>
                <span style="font-size:21px;font-weight:400;">
                    我们与您共同关注着您的健康状态
                </span>
            </div>

            <div class="register-form" style=""> 
                <div class="register-container" style="padding:24px;">
                    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                        <FormItem label="名称：" prop="name">
                            <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
                        </FormItem>
                        <FormItem label="签名：" prop="signature">
                            <Input v-model="formValidate.signature" placeholder="Enter your signature"></Input>
                        </FormItem>
                        <FormItem label="邮箱：" prop="mail">
                            <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
                        </FormItem>
                        <FormItem label="城市：" prop="city">
                            <Select v-model="formValidate.city" placeholder="Select your city">
                                <Option value="beijing">北京</Option>
                                <Option value="shanghai">上海</Option>
                                <Option value="shenzhen">深圳</Option>
                                <Option value="chengdu">成都</Option>
                                <Option value="xianggang">香港</Option>
                                <Option value="niuyue">纽约</Option>
                            </Select>
                        </FormItem>
                        <FormItem label="性别：" prop="gender">
                            <RadioGroup v-model="formValidate.gender">
                            <Radio label="male">男</Radio>
                            <Radio label="female">女</Radio>
                            </RadioGroup>
                        </FormItem>
                        <FormItem label="爱好：" prop="interest">
                            <CheckboxGroup v-model="formValidate.interest">
                            <Checkbox label="吃"></Checkbox>
                            <Checkbox label="睡"></Checkbox>
                            <Checkbox label="运动"></Checkbox>
                            <Checkbox label="电影"></Checkbox>
                            </CheckboxGroup>
                        </FormItem>
                        <!--<FormItem>-->
                            <div style="width: 80%;margin: 0px auto;margin-bottom: 15px;">
                                <Button type="primary" long @click="handleSubmit('formValidate')">注册</Button>
                                <!--<Button @click="handleReset('formValidate')" style="margin-left: 8px">取消</Button>-->
                            </div>
                        <!--</FormItem>-->
                        <div style="text-align: center">
                            <span style="color: #6a737d;font-size: 12px;">点击“注册”即表示您同意我们 的服务条款和 隐私声明。我们偶尔会向您发送与帐户相关的电子邮件。</span>
                        </div>
                    </Form>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

export default {
        name: 'forum',
        data() {
            return {
               formValidate: {
                    name: '',
                    signature:'',
                    mail: '',
                    city: '',
                    gender: '',
                    interest: [],
//                    time: '',
                },ruleValidate: {
                    name: [
                        { required: true, message: '名称不能为空', trigger: 'blur' }
                    ],
                    signature: [
                        { required: true, message: '签名不能为空', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: '邮箱不能为空', trigger: 'blur' },
                        { type: 'email', message: '请正确输入邮箱格式', trigger: 'blur' }
                    ],
                    city: [
                        { required: true, message: '请选择一个城市', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: '请选择身份', trigger: 'change' }
                    ],
                    interest: [
                        { required: true, type: 'array', min: 1, message: '至少选择一个爱好', trigger: 'change' },
                        { type: 'array', max: 3, message: '最多选择三个爱好', trigger: 'change' }
                    ],
//                    time: [
//                        { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
//                    ],
                }
            }
        },
        props:[],
        mounted() {
           
        },
        created() {

        },
        methods: {
        
             handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        console.log(this.formValidate)
//                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('请正确填写表单信息');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }

        }
    }

</script>

<style type="text/css">

    #registered{
        position: fixed;
        width: 100%;
        height:100%;
        background:url('./../../images/3.jpg') center;
        background-size: cover;
        background-color:#2b3137;
        opacity: 0.8;
    }

    .register-form{
        float:left;
        margin-top:160px;
        margin-left:-50px;
        width: 33%;
        height: 460px;
        background:#fff;
        box-shadow: 0 0 3px #000;
        border-radius: 5px;
    }



</style>