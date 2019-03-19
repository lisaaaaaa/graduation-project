<template>
    <div id="medical" style="min-height:500px;background: #f8f9fa">
        <div style="width: 80%;margin: 0px auto;border: 1px solid #c7c1c1;position: relative;top: 10px;box-shadow: 0 10px 10px -10px rgba(0,0,0,.5);">
            <div class="medical-top" style="width:100%;height:50px;background: #e7edf5;text-align: center;line-height: 50px;">
                <span style="font-size: 15px;font-weight: bold;">诊断书</span>
            </div>
            <div class="medical-body">
                <div class="basic" style="background: #dcdee2">
                    <div class="medical-body-basic-msg" style="display: flex;padding: 15px">
                        <Form ref="formValidate_ori" :model="formValidate_ori" :rules="ruleValidate_ori" :label-width="90">
                            <FormItem label="姓名：" prop="name">
                                <Input v-model="formValidate_ori.name" placeholder="Enter your name" style="width:75%"></Input>
                            </FormItem>
                            <FormItem label="出生日期：" prop="date">
                                <Row>
                                    <Col span="11">
                                        <DatePicker type="date" format="yyyy-MM-dd" placeholder="Select date" @on-change="date" style="width:141%"></DatePicker>
                                    </Col>
                                </Row>
                            </FormItem>
                            <FormItem label="诊断时间：" prop="date">
                                <Row>
                                    <Col span="11">
                                    <DatePicker type="date" format="yyyy-MM-dd" placeholder="Select date" @on-change="treatment_time" style="width:141%"></DatePicker>
                                    </Col>
                                </Row>
                            </FormItem>
                            <FormItem label="诊疗结果：" prop="treatment_outcome">
                                <Input v-model="formValidate_ori.treatment_outcome" placeholder="Enter your diagnosis results" style="width:75%"></Input>
                            </FormItem>
                            <FormItem label="医师：" prop="doctor">
                                <Input v-model="formValidate_ori.doctor" placeholder="Enter your doctor's name" style="width:75%"></Input>
                            </FormItem>
                            <FormItem label="就诊医院：" prop="hospital">
                                <Input v-model="formValidate_ori.hospital" placeholder="Enter your hospital" style="width:75%"></Input>
                            </FormItem>
                            <FormItem label="备注：" prop="remark">
                                <Input v-model="formValidate_ori.remark" placeholder="Enter your remark" style="width:75%"></Input>
                            </FormItem>
                        </Form>














                        <!--<div class="msg">-->
                            <!--<span class="msg-name">姓名：</span>-->
                            <!--<Input v-model="patient_name" placeholder="Enter something..." style="width:200px;" />-->
                        <!--</div>-->
                        <!--<div class="msg">-->
                            <!--<span class="msg-name">出生日期：</span>-->
                            <!--<DatePicker type="date" format="yyyy-MM-dd" placeholder="Select date" @on-change="date"></DatePicker>-->
                        <!--</div>-->
                        <!--<div class="msg">-->
                            <!--<span class="msg-name">诊断时间：</span>-->
                            <!--<DatePicker type="date" format="yyyy-MM-dd" placeholder="Select date" @on-change="treatment_time"></DatePicker>-->
                        <!--</div>-->
                        <!--<div class="msg">-->
                            <!--<span class="msg-name">诊疗结果：</span>-->
                            <!--<Input v-model="treatment_outcome" placeholder="Enter something..." style="width: 200px" />-->
                        <!--</div>-->
                        <!--&lt;!&ndash;<div class="msg">&ndash;&gt;-->
                        <!--&lt;!&ndash;<span class="msg-name">诊断时间：</span><span class="msg-other">2018-01-07</span>&ndash;&gt;-->
                        <!--&lt;!&ndash;</div>&ndash;&gt;-->
                    </div>
                    <!--<div class="medical-body-basic-msg" style="display: flex;padding: 15px">-->
                        <!--<div class="msg">-->
                            <!--<span class="msg-name">医师：</span>-->
                            <!--<Input v-model="doctor" placeholder="Enter something..." style="width: 300px" />-->
                            <!--&lt;!&ndash;<span class="msg-other">小熊医生</span>&ndash;&gt;-->
                        <!--</div>-->
                        <!--<div class="msg">-->
                            <!--<span class="msg-name">就诊医院：</span>-->
                            <!--<Input v-model="hospital" placeholder="Enter something..." style="width: 300px" />-->
                            <!--&lt;!&ndash;<span class="msg-other">四川省人民医院</span>&ndash;&gt;-->
                        <!--</div>-->
                        <!--<div class="msg">-->
                            <!--<span class="msg-name">备注：</span>-->
                            <!--<Input v-model="remark" placeholder="Enter something..." style="width: 300px" />-->
                            <!--&lt;!&ndash;<span class="msg-other">内容包含主诉、诊断、治疗史信息供治疗参考</span>&ndash;&gt;-->
                        <!--</div>-->
                    <!--</div>-->
                </div>
            </div>
        </div>
        <div class="medical-body-treatment" style="width: 80%;margin: 25px auto;border: 1px solid #c7c1c1;box-shadow: 0 10px 10px -10px rgba(0,0,0,.5);">
            <div class="medical-top" style="width:100%;height:50px;background: #e7edf5;text-align: left;line-height: 50px;">
                <span style="font-size: 15px;font-weight: bold;margin-left: 15px;">既往病史及治疗史</span>
            </div>
            <div style="background: #dcdee2;padding: 15px;">
                <div>
                    <div class="treatment-tip">
                        <span class="treatment-name">是否接受过手术治疗：</span>
                        <div style="padding: 13px;">
                            <RadioGroup v-model="treatment_name_surgery_value">
                                <Radio label="ok">
                                    <span>是</span>
                                </Radio>
                                <Radio label="no">
                                    <span>否</span>
                                </Radio>
                            </RadioGroup>
                        </div>
                    </div>
                    <div style="font-size:12px;font-weight:bold;margin-left: 60px;">
                        <Icon type="ios-nuclear" style="color:dodgerblue" size="12"/>
                        <span>手术治疗情况：</span>
                        <Icon id="add-surgery" type="md-add-circle" style="color:dodgerblue;cursor:pointer" size="15" title="新增" @click.native="add_surgery"/>

                        <div>
                            <Table height="200" width="850" :columns="columns_surgery" :data="data_surgery" style="margin-top: 15px;margin: 0px auto;"></Table>
                        </div>
                    </div>
                </div>
                <div style="margin-top: 15px;">
                    <div class="treatment-tip">
                        <span class="treatment-name">是否接受过放疗：</span>
                        <div style="padding: 13px;">
                            <RadioGroup v-model="treatment_name_radiotherapy_value">
                                <Radio label="ok">
                                    <span>是</span>
                                </Radio>
                                <Radio label="no">
                                    <span>否</span>
                                </Radio>
                            </RadioGroup>
                        </div>
                    </div>
                    <div style="font-size:12px;font-weight:bold;margin-left: 60px;">
                        <Icon type="ios-nuclear" style="color:dodgerblue" size="12"/>
                        <span>放疗治疗情况：</span>
                        <Icon id="add-radiotherapy" type="md-add-circle" style="color:dodgerblue;cursor:pointer" size="15" title="新增" @click.native="add_radiotherapy"/>
                        <div>
                            <Table height="200" width="850" :columns="columns_radiotherapy" :data="data_radiotherapy" style="margin-top: 15px;margin: 0px auto;"></Table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="foot" style="text-align: center;background: rgb(220, 222, 226);padding: 10px;">
                <Button type="success" style="text-align: center" @click="save('formValidate_ori')">保存</Button>
            </div>
        </div>

        <!--添加手术记录-->
        <div class="allergies-modal">
            <Modal v-model="allergies_modal" title="记录您的治疗历程">
                <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="90">
                    <FormItem label="时间：" prop="date">
                        <Row>
                            <Col span="11">
                                <DatePicker type="date" format="yyyy-MM-dd" placeholder="Select date" @on-change="add_date"></DatePicker>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem label="类型：" prop="medical">
                        <Input v-model="formValidate.medical" placeholder="Enter the medical" style="width:75%"></Input>
                    </FormItem>
                </Form>

                <div slot="footer">
                    <Button type="primary" @click="allergies_ok('formValidate')">确认</Button>
                    <Button type="primary" ghost @click="allergies_cancel">取消</Button>
                </div>
            </Modal>
        </div>

    </div>
</template>

<script>

    //    import {getStore} from './../../../config/Utils'

    export default {
        name: 'add_medical_History',
        data() {

            const validateDate = (rule, value, callback, source, options) => {
                if (value === '') {
                    callback(new Error('请选择时间'));
                }  else {
                    callback();
                }
            };

            return {
                formValidate_ori: {
                    name: '',
                    treatment_outcome:'',
                    doctor:'',
                    hospital:'',
                    remark:'',
                    date:'',
                    birth_date:'',     //出生日期
                    treatment_data:'',   //治疗时间
                },ruleValidate_ori: {
                    name: [
                        { required: true, message: '名称不能为空', trigger: 'blur' }
                    ],
                    treatment_outcome: [
                        { required: true, message: '诊疗结果不能为空', trigger: 'blur' }
                    ],
                    doctor: [
                        { required: true, message: '医师不能为空', trigger: 'blur' }
                    ],
                    hospital: [
                        { required: true, message: '就诊医院不能为空', trigger: 'blur' }
                    ],
                    remark: [
                        { required: false, message: '', trigger: 'blur' }
                    ],
                    date: [
                        {validator: validateDate, trigger: 'blur',required: true}
                    ],
                },




                patient_name:'',   //姓名
                treatment_outcome:'',   //治疗结果
                doctor:'',    //医师
                hospital:'',   //医院
                remark:'',     //备注
                birth_date:'',     //出生日期
                treatment_data:'',   //治疗时间
                add_1:true,
                add_2:true,
                model:'',

                allergies_modal:false,
                formValidate:{
                    id:'',
                    date:'',
                    medical:''
                },
                ruleValidate: {
                    date: [
                        {validator: validateDate, trigger: 'blur',required: true}
                    ],
                    medical: [
                        { required: true, message: '请填写治疗类型', trigger: 'blur' }
                    ],
                },



                treatment_name_surgery_value:'ok',
                treatment_name_radiotherapy_value:'ok',
                user_name:'',
                columns_surgery: [
                    {
                        title: '序号',
                        type: 'index'
                    },
                    {
                        title: '时间',
                        key: 'time'
                    },
                    {
                        title: '手术类型',
                        key: 'type'
                    }
                ],
                data_surgery:[],
                columns_radiotherapy: [
                    {
                        title: '序号',
                        type: 'index'
                    },
                    {
                        title: '时间',
                        key: 'time'
                    },
                    {
                        title: '手术类型',
                        key: 'type'
                    }
                ],
                data_radiotherapy:[],



            }
        },
        props:[],
        mounted() {
//            console.log(this.$route.params.id)
//            this.user_name = getStore('user_name')

        },
        created() {

        },
        methods: {

            date(e){
                this.formValidate_ori.birth_date = e;
            },

            treatment_time(e){
                this.formValidate_ori.treatment_data = e;
            },

            add_date(e){
                this.formValidate.date = e;
            },

            add_surgery(){
                if(this.add_1){
                    this.allergies_modal = true;
                    this.model = '手术'
                }
            },

            add_radiotherapy(){
                if(this.add_2){
                    this.allergies_modal = true;
                    this.model = '放疗'
                }
            },

            allergies_ok(name){
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.data2.push(this.formValidate)
                        console.log(this.formValidate)
//                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('请正确填写表单信息');
            }
            })
            },
            allergies_cancel(){
                this.allergies_modal = false;
            },

            save(name){
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.data2.push(this.formValidate)
                        console.log(this.formValidate)
                        this.$Message.success("保存成功")
                        this.$router.push({'name':'user'})
                    } else {
                        this.$Message.error('请正确填写表单信息');
            }
            })
            }

        },
        watch: {
            treatment_name_surgery_value(newName, oldName){
                if(newName == 'no'){
                    document.getElementById('add-surgery').style.cursor = 'not-allowed'
                    this.add_1 = false;
                }else{
                    document.getElementById('add-surgery').style.cursor = 'pointer'
                    this.add_1 = true;
                }
            },
            treatment_name_radiotherapy_value(newName, oldName){
                if(newName == 'no'){
                    document.getElementById('add-radiotherapy').style.cursor = 'not-allowed'
                    this.add_2 = false;
                }else{
                    document.getElementById('add-radiotherapy').style.cursor = 'pointer'
                    this.add_2 = true;
                }
            }
        },
    }

</script>

<style type="text/css">

    .medical-body-basic-msg .msg{
        width: 33%;
        /*float: left;*/
    }

    .medical-body-basic-msg .msg .msg-name{
        font-size: 15px;
        font-weight:bold;
    }

    .medical-body-basic-msg .msg .msg-other{
        font-size: 14px;
        /*font-weight:bold;*/
    }

    .medical-body-treatment .treatment-tip{
        padding: 25px;
        font-size: 12px;
        font-weight: bold;
    }

    #medical .ivu-form-item{
        float:left;
    }
</style>