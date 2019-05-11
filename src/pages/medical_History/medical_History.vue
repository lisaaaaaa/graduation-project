<template>
    <div id="medical" style="min-height:500px;background: #f8f9fa">
       <div style="width: 80%;margin: 0px auto;border: 1px solid #c7c1c1;position: relative;top: 10px;box-shadow: 0 10px 10px -10px rgba(0,0,0,.5);">
           <div class="medical-top" style="width:100%;height:50px;background: #e7edf5;text-align: center;line-height: 50px;">
               <span style="font-size: 15px;font-weight: bold;">诊断书</span>
           </div>
           <div class="medical-body">
               <div class="basic" style="background: #dcdee2">
                   <div class="medical-body-basic-msg" style="display: flex;padding: 15px">
                       <div class="msg">
                           <span class="msg-name">姓名：</span><span class="msg-other"> {{ this.$route.params.name }}</span>
                       </div>
                       <div class="msg">
                           <span class="msg-name">出生日期：</span><span class="msg-other">{{ this.$route.params.date }}</span>
                       </div>
                       <div class="msg">
                           <span class="msg-name">诊断时间：</span><span class="msg-other">{{ this.basic_data.time }}</span>
                       </div>
                       <div class="msg">
                           <span class="msg-name">诊疗结果：</span><span class="msg-other">{{ this.basic_data.result }}</span>
                       </div>
                       <!--<div class="msg">-->
                       <!--<span class="msg-name">诊断时间：</span><span class="msg-other">2018-01-07</span>-->
                       <!--</div>-->
                   </div>
                   <div class="medical-body-basic-msg" style="display: flex;padding: 15px">
                       <div class="msg">
                           <span class="msg-name">医师：</span><span class="msg-other">{{ this.basic_data.doctor }}</span>
                       </div>
                       <div class="msg">
                           <span class="msg-name">就诊医院：</span><span class="msg-other">{{ this.basic_data.hispital }}</span>
                       </div>
                       <div class="msg">
                           <span class="msg-name">备注：</span><span class="msg-other">{{ this.basic_data.other }}</span>
                       </div>
                   </div>
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
                        <div>
                            <Table height="200" width="850" :columns="columns_radiotherapy" :data="data_radiotherapy" style="margin-top: 15px;margin: 0px auto;"></Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

//    import {getStore} from './../../../config/Utils'

    export default {
        name: 'medical_History',
        data() {
            return {
                treatment_name_surgery_value:'ok',
                treatment_name_radiotherapy_value:'ok',
                user_name:'',
                basic_data : 
                    {
                        doctor: '陈医生',
                        time: '2019-5-1',
                        result: '病毒性感冒引起的呼吸道感染',
                        hispital: '四川省人民医院',
                        other: '内容包含主诉、诊断、治疗史信息供治疗参考'
                    }
                ,
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
                data_surgery:[
                    {
                        time:'2010-02-01',
                        type:'外创型小型手术治疗',
                    },
                    {
                        time:'2010-02-01',
                        type:'外创型小型手术治疗',
                    },
                ],
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
                data_radiotherapy:[
                    {
                        time:'2010-02-01',
                        type:'外创型小型手术治疗',
                    },
                    {
                        time:'2010-02-01',
                        type:'外创型小型手术治疗',
                    },
                ],

            }
        },
        props:[],
        mounted() {
            console.log(this.$route.params.id)
//            this.user_name = getStore('user_name')

        },
        created() {

        },
        methods: {

        }
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
</style>