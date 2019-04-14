<template>
        <div style="padding: 0 32px 30px;">
            <div id="">
                <div class="right-box-title" style="">
                    <p class="right-box-name">个人资料</p>
                </div>
                <div class="right-box-content">
                    <div class="avatar" style="float: left;text-align: center;margin-right: 16px;cursor: pointer;">
                        <img src="./../../images/forum/man.png"/>
                        <!--<router-link :to="health_Record">健康记录</router-link>-->
                        <p><a :href=" '/#/basic_info/health_Record' ">健康记录</a></p>
                    </div>
                    <div class="person-info" style="float: right;width:85%;text-align: left;">
                        <div class="title" style="height:60px;border-bottom: 1px solid #e0e0e0;">
                            <div style="font-size: 14px;color: #999;margin-top: 16px">
                                <span>昵称：</span><span>{{ this.user_name }}</span>
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
                                    <a style="float: right;font-size: 14px;color: #3399ea;padding-right: 9.3px;" v-on:click="edit_msg()">修改资料</a>
                                </li>
                                <!--<li>-->
                                    <!--<span>生日：</span><span>1990/2/14</span>-->
                                <!--</li>-->
                                <li>
                                    <span>邮箱：</span><span>lisa.wow@outlook.com</span>
                                </li>
                                <li>
                                    <span>出生日期：</span><span>2019-02-01</span>
                                </li>
                                <li>
                                    <span>身高：</span><span>152<em>cm</em></span>
                                </li>
                                <li>
                                    <span>体重：</span><span>42<em>kg</em></span>
                                </li>
                                <li>
                                    <span>血型：</span><span>A型</span>
                                </li>

                                <!--<li>-->
                                    <!--<span>爱好：</span><span>吃饭 睡觉</span>-->
                                <!--</li>-->
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div class="">
                <Modal v-model="edit_person_msg" title="修改个人资料">

                    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="90">
                        <FormItem label="名称：" prop="name">
                            <Input v-model="formValidate.name" placeholder="Enter your name" style="width:75%"></Input>
                        </FormItem>
                        <FormItem label="密码：" style="margin-left:11px;">
                            <a href="#" style="text-decoration:underline;text-align:right;" @click="change_pwd">修改密码</a>
                        </FormItem>
                        <FormItem label="签名：" prop="signature">
                            <Input v-model="formValidate.signature" placeholder="Enter your signature" style="width:75%"></Input>
                        </FormItem>
                        <FormItem label="邮箱：" prop="mail">
                            <Input v-model="formValidate.mail" placeholder="Enter your e-mail" style="width:75%"></Input>
                        </FormItem>
                        <FormItem label="性别：" prop="gender">
                            <RadioGroup v-model="formValidate.gender">
                                <Radio label="male">男</Radio>
                                <Radio label="female">女</Radio>
                            </RadioGroup>
                        </FormItem>
                        <FormItem label="身高：" prop="height">
                            <!--<InputNumber :min="1" v-model="formValidate.height">-->
                            <!--<span>cm</span>-->
                            <Input v-model="formValidate.height" placeholder="height" type="number" style="width:80px;"></Input>
                            <span>cm</span>
                        </FormItem>
                        <FormItem label="体重：" prop="weight">
                            <Input v-model="formValidate.weight" placeholder="weight" type="number" style="width:80px;"></Input>
                            <span>kg</span>
                            <!--<InputNumber :min="1" v-model="formValidate.weight">-->
                            <!--<span>kg</span>-->
                            <!--<Input v-model="formValidate.name" placeholder="Enter your weight"></Input>-->
                        </FormItem>
                        <FormItem label="出生日期：" prop="date">
                            <Row>
                                <Col span="11">
                                <DatePicker v-model="formValidate.date" type="date" format="yyyy-MM-dd" placeholder="Select date" @on-change="date"></DatePicker>
                                </Col>
                                <!--<Col span="2" style="text-align: center">-</Col>-->
                            </Row>
                        </FormItem>
                        <FormItem label="血型：" prop="blood">
                            <Select v-model="formValidate.blood" placeholder="Select your blood type" style="width:80px;">
                                <Option value="A">A型</Option>
                                <Option value="B">B型</Option>
                                <Option value="AB">AB型</Option>
                                <Option value="O">0型</Option>
                            </Select>
                        </FormItem>
                    </Form>

                    <div slot="footer">
                        <Button type="primary" @click="edit_ok('formValidate')">确认</Button>
                        <Button type="primary" ghost @click="edit_cancel">取消</Button>
                    </div>
                </Modal>
            </div>


            <Modal
                    v-model="modal1"
                    title="修改密码"
                    @on-ok=""
                    @on-cancel="">
                <Form ref="formItem1" :model="formItem1" :rules="ruleValidate" label-position="left" :label-width="94">
                    <FormItem label="旧密码：" prop="old_password">
                        <Input type="password" v-model="formItem1.old_password" placeholder=""></Input>
                    </FormItem>
                    <FormItem label="新密码：" prop="new_password">
                        <Input type="password" v-model="formItem1.new_password" placeholder=""></Input>
                    </FormItem>
                    <FormItem label="确认新密码：" prop="confirm_password">
                        <Input type="password" v-model="formItem1.confirm_password" placeholder=""></Input>
                    </FormItem>
                </Form>
                <div slot="footer">
                    <Button type="text" @click="cancel">取消</Button>
                    <Button type="primary" @click="setPassword('formItem1')">确定</Button>
                </div>
            </Modal>



        </div>
</template>

<script>

    import {getStore} from './../../../config/Utils'

    export default {
        name: 'personal_Information',
        data() {

            const validateDate = (rule, value, callback, source, options) => {
                if (value === '') {
                    callback(new Error('请选择出生日期'));
                }  else {
                    callback();
                }
            };

            const validateNumber = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('不能为空'));
                } else if( value<1 ) {
                    callback(new Error('不能小于1'));
                } else {
                    callback();
                }
            };


            const validatePass1 = (rule, value, callback) => {
                var reg = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/;
                if (value === '') {
                    callback(new Error('请输入旧密码'));
                } else if(!reg.test(value)) {
                    callback(new Error('只能含有英文大小写字母、下划线、数字、中文'));
                } else if (value.length < 6) {
                    callback(new Error('至少6个字符'));
                } else if (value.length >= 35) {
                    callback(new Error('应35个字符以内'));
                } else {
                    callback();
                }
            };
            const validatePass2 = (rule, value, callback) => {
                var reg = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/;
                if (value === '') {
                    callback(new Error('请输入新密码'));
                } else if(!reg.test(value)) {
                    callback(new Error('只能含有英文大小写字母、下划线、数字、中文'));
                } else if (value.length < 6) {
                    callback(new Error('至少6个字符'));
                } else if (value.length >= 35) {
                    callback(new Error('应35个字符以内'));
                } else {
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                var reg = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/;
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if(!reg.test(value)) {
                    callback(new Error('只能含有英文大小写字母、下划线、数字、中文'));
                } else if (value !== this.formItem1.new_password) {
                    callback(new Error('两次密码不一致!'));
                } else {
                    callback();
                }
            };


            return {
                modal1:false,
                formItem1: {
                    old_password: '',
                    new_password: '',
                    confirm_password: ''
                },


                formValidate: {
                    name: 'lisa',
                    signature:'然而岁月漫长，总之值得等待',
                    mail: 'lisa.wow@outlook.com',
                    blood: 'A',
                    gender: 'female',
                    date:'2019-02-01',
                    height:'152',
                    weight:'42',
                },ruleValidate: {
                    old_password: [
                        {validator: validatePass1, trigger: 'blur',required: true}
                    ],
                    new_password: [
                        {validator: validatePass2, trigger: 'blur',required: true}
                    ],
                    confirm_password: [
                        {validator: validatePassCheck, trigger: 'blur',required: true}
                    ],
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
                    blood: [
                        { required: true, message: '请选择您的血型', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: '请选择身份', trigger: 'change' }
                    ],
                    height: [
                        {validator: validateNumber, trigger: 'number',required: true}
                    ],
                    weight: [
                        {validator: validateNumber, trigger: 'number',required: true}
                    ],

                    date: [
                        {validator: validateDate, trigger: 'blur',required: true}
                    ],
                },

                user_name:'',
                edit_person_msg:false,
            }
        },
        props:[],
        mounted() {
            this.user_name = getStore('user_name')

        },
        created() {

        },
        methods: {

            change_pwd(){
                this.modal1 = true;
            },

            date(e){
                this.formValidate.date = e;
            },

            edit_msg(){
                this.edit_person_msg = true;
            },
            edit_ok(name){
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('密码修改成功！')
                        this.modal1 = false;
                    }
                })
                this.edit_person_msg = false;
            },
            edit_cancel(){
                this.edit_person_msg = false;
            },

            cancel() {
                this.formItem1.old_password = "";
                this.formItem1.new_password = "";
                this.formItem1.confirm_password = "";
                this.modal1 = false;
            },

            setPassword(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('密码修改成功！')
                        this.modal1 = false;
                    }
                })
            },


        }
    }

</script>
<style type="text/css">



</style>