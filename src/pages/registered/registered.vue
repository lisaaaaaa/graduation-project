<template>
    <div id="registered" style="">
        <div class='bg-style' style="width:100%;">
            <div class='content-left' style="float:left;width:40%;text-align: center;color:#fff;margin: 200px 120px;">
                <p style="font-size:60px;">健康中心系统</p>
                <span style="font-size:21px;font-weight:400;">
                    我们与您共同关注着您的健康状态
                </span>
            </div>

            <div class="register-form" style=""> 
                <div class="register-container" style="padding:24px;">
<Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="Name" prop="name">
            <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
        </FormItem>
        <FormItem label="E-mail" prop="mail">
            <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
        </FormItem>
        <FormItem label="City" prop="city">
            <Select v-model="formValidate.city" placeholder="Select your city">
                <Option value="beijing">New York</Option>
                <Option value="shanghai">London</Option>
                <Option value="shenzhen">Sydney</Option>
            </Select>
        </FormItem>
        <FormItem label="Gender" prop="gender">
            <RadioGroup v-model="formValidate.gender">
                <Radio label="male">Male</Radio>
                <Radio label="female">Female</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="Hobby" prop="interest">
            <CheckboxGroup v-model="formValidate.interest">
                <Checkbox label="Eat"></Checkbox>
                <Checkbox label="Sleep"></Checkbox>
                <Checkbox label="Run"></Checkbox>
                <Checkbox label="Movie"></Checkbox>
            </CheckboxGroup>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">注册</Button>
            <Button @click="handleReset('formValidate')" style="margin-left: 8px">取消</Button>
        </FormItem>
        <span>点击“注册GitHub”即表示您同意我们 的服务条款和 隐私声明。我们偶尔会向您发送与帐户相关的电子邮件。</span>
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
                    mail: '',
                    city: '',
                    gender: '',
                    interest: [],
                    time: '',
                },ruleValidate: {
                    name: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                        { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                    ],
                    city: [
                        { required: true, message: 'Please select the city', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: 'Please select gender', trigger: 'change' }
                    ],
                    interest: [
                        { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
                        { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
                    ],
                    time: [
                        { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
                    ],
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
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
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
        background:url('./../images/3.jpg') center;
        background-size: cover;
        background-color:#2b3137;
        opacity: 0.8;
    }

    .register-form{
        float:left;
        margin-top:100px;
        margin-left:-50px;
        width: 33%;
        height: 460px;
        background:#fff;
        box-shadow: 0 0 3px #000;
        border-radius: 5px;
    }



</style>