<template>
    <div id="backend-admin">
        <div style="margin-bottom: 15px;">
            <span style="margin-left: 15px;color:#676262">个人信息</span>
        </div>
        <div style="width:40%;">
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
                <FormItem label="管理员账号：" prop="name">
                    <Input v-model="formValidate.name" placeholder="Enter your name" style="width:400px;"></Input>
                </FormItem>
                <FormItem label="密码：" style="margin-left:11px;">
                    <a href="#" style="text-decoration:underline;text-align:right;" @click="change_pwd">修改密码</a>
                </FormItem>
                <!--<FormItem label="联系人：" prop="contact">-->
                    <!--<Input v-model="formValidate.contact" placeholder="Enter your contact" style="width:400px;"></Input>-->
                <!--</FormItem>-->
                <!--<FormItem label="电话：" prop="phone">-->
                    <!--<Input v-model="formValidate.phone" placeholder="Enter your phone" style="width:400px;"></Input>-->
                <!--</FormItem>-->
                <!--<FormItem label="邮箱：" prop="mail">-->
                    <!--<Input v-model="formValidate.mail" placeholder="Enter your e-mail" style="width:400px;"></Input>-->
                <!--</FormItem>-->
                <!--<FormItem label="备注：" prop="remarks">-->
                    <!--<Input v-model="formValidate.remarks" placeholder="Enter your remarks" style="width:400px;"></Input>-->
                <!--</FormItem>-->
            </Form>

            <div class="footer" style="float: right">
                <!--<Button type="primary" size="large" @click="edit_ok('formValidate')" class="tdrcvp_btn">修改</Button>-->
                <Button type="primary" ghost size="large" @click="edit_cancel" class="tdrcvp_btn">返回</Button>
            </div>
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


    import modalButton from './../../components/modalButton.vue'
    import {getStore} from './../../../config/Utils'


    export default {
        name: 'backend_Administrator',
        data() {

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
            const validateContact = (rule, value, callback) => {
                var reg = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/;
                if (value === '') {
                    callback(new Error('请输入联系人'));
                } else if(!reg.test(value)) {
                    callback(new Error('只能含有英文大小写字母、下划线、数字、中文'));
                } else if (value.length < 2) {
                    callback(new Error('至少2个字符'));
                } else if (value.length >= 35) {
                    callback(new Error('应35个字符以内'));
                } else {
                    callback();
                }
            };
            const validateInput = (rule, value, callback) => {
                var reg = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/;
                if (value === '') {
                    callback(new Error('请输入有效值'));
                } else if(!reg.test(value)) {
                    callback(new Error('只能含有英文大小写字母、下划线、数字、中文'));
                } else if (value.length >= 35) {
                    callback(new Error('应35个字符以内'));
                } else {
                    callback();
                }
            }


            return {
                modal1:false,
                login_name:'',
                formValidate: {
                    name: 'lisa',
//                    contact:'莉莎',
//                    phone:'13511111111',
//                    mail: 'lisa.wow@outlook.com',
//                    remarks:'这是一个测试',
                },
                formItem1: {
                    old_password: '',
                    new_password: '',
                    confirm_password: ''
                },
                ruleValidate: {
                    old_password: [
                        {validator: validatePass1, trigger: 'blur',required: true}
                    ],
                    new_password: [
                        {validator: validatePass2, trigger: 'blur',required: true}
                    ],
                    confirm_password: [
                        {validator: validatePassCheck, trigger: 'blur',required: true}
                    ],
//                    contact: [
//                        {validator: validateContact, trigger: 'blur',required: true}
//                    ],
//                    name: [
//                        {validator: validateInput, trigger: 'blur',required: true}
//                    ],
//                    phone: [
//                        { required: true, message: '电话不能为空', trigger: 'blur' },
//                        { type: 'number', message: '请填写正确的手机号', trigger: 'blur',transform(value){
//                            var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
//                            if(!myreg.test(value)){
//                                return false;
//                            }else{
//                                return Number(value);
//                            }
//                        } }
//                    ],
//                    mail: [
//                        { required: true, message: '邮箱不能为空', trigger: 'blur' },
//                        { type: 'email', message: '请正确输入邮箱格式', trigger: 'blur' }
//                    ],
//                    remarks: [
//                        { required: false, message: '', trigger: 'blur' }
//                    ],
                }



            }
        },
        props:[],
        components: {},
        mounted() {
            this.login_name = getStore('user_name')
            this.getStore();
        },
        created() {

        },
        methods: {
            edit_ok(name){
                var self = this;
                self.$refs[name].validate((valid) => {
                    if (valid) {
                        self.$Message.success('修改成功')
                    }
                })
            },
            edit_cancel(){
                this.$router.push({name:'user_Management'})
            },
            getStore(){},
            change_pwd(){
                this.modal1 = true;
            },
            setPassword(value) {
                this.$refs[value].validate((valid) => {
                    if (valid) {
                        this.$http.post('http://47.107.125.48:8010/api/v1_0/administrator/password',{
                           id: value.id,
                           passwd: value.passwd,
                        },{emulateJSON:true}).then(function(data){
                        if(data.status === 200){
                        this.$Message.success('修改成功！');
                        }
                         console.log(data); 
                        }).catch(function(error){
                            this.$Message.success('修改失败！' + error);
                        });
                        this.modal1 = false;
                    }
                })
            },
            cancel() {
                this.formItem1.old_password = "";
                this.formItem1.new_password = "";
                this.formItem1.confirm_password = "";
                this.modal1 = false;
            },
        },
        beforeDestroy:function(){

        },
    }

</script>

<style type="text/css">
    #backend-admin{

    }
</style>