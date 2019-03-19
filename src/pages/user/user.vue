<template>
    <div id="user">
        <div id="home-page" style="position: absolute">

            <div class="logo">
                <span><a :href=" '/#/' " style="color:#fff">健康中心</a></span>
                <!--<Button type="warning" style="background: transparent;color:#f90">健康中心</Button>-->
            </div>

            <div class="bg-img">
                <img  src="./../../images/user/bg1280x788.jpg" />
            </div>

            <div class="content">
                <div class="title">
                    <h2>HELLO·<span>{{ this.user_name }}</span></h2>
                    <!--<p>I'm <span class="sub-title"></span></p>-->
                </div>
            </div>
            <div class="more-msg">
                <p>View Profile</p>
                <Icon type="ios-arrow-down" @click.native="view_profile"/>
            </div>



            <Drawer :closable="false" v-model="drawer" width="966">

                <div id="user-msg">
                    <div class="user-main" style="">
                        <div class="person-msg">
                            <div class="title" style="width: 50%;float: left">
                                <h1>{{ this.user_name }}</h1>
                                <!--<span style="display: block">I'm a Web designer</span>-->
                                <hr>
                            </div>
                            <div class="more-operations" style="width: 50%;float: right;height: 104px;">

                                <div style="position: fixed;right: 40px;">


                                    <Dropdown placement="bottom-start" @on-click="changeMenu">
                                        <a href="javascript:void(0)">
                                            <Icon type="md-menu" />
                                        </a>
                                        <DropdownMenu slot="list">
                                            <DropdownItem name="peronal">
                                                <Icon type="ios-contact" />
                                                个人信息</DropdownItem>
                                            <DropdownItem name="focus">
                                                <Icon type="ios-heart" />
                                                我的关注</DropdownItem>
                                            <DropdownItem name="collection">
                                                <Icon type="ios-star" />
                                                我的收藏</DropdownItem>
                                            <DropdownItem name="fan">
                                                <!--<Icon type="ios-help-circle" />-->
                                                <Icon type="md-people" />
                                                我的粉丝</DropdownItem>
                                            <DropdownItem name="foot">
                                                <Icon type="ios-paw" />
                                                我的足迹</DropdownItem>
                                            <DropdownItem name="blog">
                                                <!--<Icon type="ios-help-circle" />-->
                                                <Icon type="ios-people" />
                                                论坛</DropdownItem>
                                            <DropdownItem name="exit">
                                                <Icon type="md-exit" />
                                                退出</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div class="person-signature" style="margin-top: 10px;">
                                <!--<h1>关于我</h1>-->
                            <span style="margin-top: 10px;">我是一颗小小小小草，怎么长也长也不高。我寻寻觅觅，寻寻觅觅，只为找到一颗太阳，那样就可以又长高。
                                啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</span>
                            </div>
                            <div class="health-index" style="margin-top: 40px;display:-webkit-inline-box;">
                                <div class="person-img" style="width:46%;margin-right: 4%">
                                    <img src="./../../images/user/avatar500x680.jpg" style="text-align: center;width: 100%;height: auto;"/>
                                </div>
                                <div class="person-health-indx" style="width: 55%;">
                                    <div class="index-process">
                                        <p style="font-size: 34px;">食品摄入量
                                            <span style="font-size: 12px">(近一周)</span>
                                            <Button size="small" type="primary" style="" @click="food_intake">今天</Button>
                                        </p>

                                        <div class="two" style="margin-top: 10px">
                                            <span style="display: block;font-size: 20px;">蔬菜</span>
                                            <Progress class="health-progress" :percent="25" :stroke-width="5" />
                                        </div>
                                        <div class="three" style="margin-top: 10px">
                                            <span style="display: block;font-size: 20px;">水果</span>
                                            <Progress class="health-progress" :percent="25" :stroke-width="5" />
                                        </div>
                                        <div class="four" style="margin-top: 10px">
                                            <span style="display: block;font-size: 20px;">肉类</span>
                                            <Progress class="health-progress" :percent="25" :stroke-width="5" />
                                        </div>
                                        <div class="one" style="margin-top: 10px">
                                            <span style="display: block;font-size: 20px;">其他</span>
                                            <Progress style="color: #c7e7c8;" class="health-progress" :percent="25" :stroke-width="5" />
                                        </div>


                                    </div>
                                    <div class="health_history">
                                        <a :href=" '/#/basic_info/health_Record' " style="font-size: 20px;font-weight: bold;" title="了解更多">......</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="health-img" style="display:-webkit-inline-box;margin-top:30px;width:100%;height:245px;background: radial-gradient(#648880, #293f50);color:#fff;">
                            <div class="bg" style="width:100%;margin: 65px auto;">
                                <div style="width:75%;margin:0px auto;">
                                    <div class="sports other " style="">
                                        <Icon type="md-bicycle" />
                                        <span class="time" style="font-family: sans-serif;color: #fff;">27</span>min
                                        <p>骑自行车</p>
                                    </div>

                                    <div class="sports other" style="">
                                        <Icon type="ios-baseball" />
                                        <span class="time">30</span>min
                                        <p>户外运动</p>
                                    </div>

                                    <div class="sports other walk" style="">
                                        <Icon type="ios-body" />
                                        <span class="time">500</span>min
                                        <p>散步</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div class="article" style="height:auto;">
                            <div style="padding:15px;">
                                <div class="article-name" style="height:auto">
                                    <h2>文章
                                        <a :href=" '#/article/article_all' " style="float:right;font-size: 13px;line-height: 38px;margin-right: 25px;">更多</a>
                                    </h2>

                                    <hr>
                                </div>
                                <div style="display: flex;width: 90%;margin: 0px auto;">

                                    <div class="article-msg" style="padding:15px;width:45%;margin-left:20px;">
                                        <div class="" style="text-align: center;">
                                            <div class="article-title">
                                                <h5>导致肥胖的原因？</h5>
                                            </div>
                                            <div class="article-content">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit libero ac accumsan lobortis.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="article-msg" style="padding:15px;width:45%;margin-left:20px;">
                                        <div class="" style="text-align: center;">
                                            <div class="article-title">
                                                <h5>减肥是一项长久以来的大工程</h5>
                                            </div>
                                            <div class="article-content">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit libero ac accumsan lobortis.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="article-msg" style="padding:15px;width:45%;margin-left:20px;">
                                        <div class="" style="text-align: center;">
                                            <div class="article-title">
                                                <h5>坚持就是胜利啊，加油哦</h5>
                                            </div>
                                            <div class="article-content">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit libero ac accumsan lobortis.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>


                        </div>


                        <!--过敏史-->
                        <div class="allergies" style="height:auto">

                            <div style="padding:15px;">
                                <div style="height:auto">
                                    <h2>过敏史 <Icon type="md-add-circle" size="22" style="color:green;cursor:pointer" title="添加" @click.native="allergies"/></h2>

                                    <hr>
                                </div>
                            </div>
                            <div style="width: 90%;margin: 0px auto;">
                                <Table height="200" :columns="columns1" :data="data2"></Table>
                            </div>

                            <!--<div class="photo-footer" style="margin-top:15px;">-->
                                <!--<div class="viewer" style="width:50%;margin:0px auto;text-align: center;">-->
                                    <!--<Button icon="ios-plane" size="small" type="success" @click="viewphoto">VIEW MORE</Button>-->
                                <!--</div>-->
                            <!--</div>-->



                        </div>

                        <!--病史-->
                        <div class="Medical-history" style="height:auto">

                            <div style="padding:15px;">
                                <div style="height:auto">
                                    <h2>病史<Icon type="md-add-circle" size="22" style="color:green;margin-left: 8px;cursor:pointer" title="添加" @click.native="medical_history"/></h2>
                                    <hr>
                                </div>
                            </div>
                            <div style="">
                                <div class="medical">
                                    <Table height="200" :columns="columns_medical" :data="data_medical"></Table>
                                    <!--<span class="time">2018-10-2</span>-->
                                    <!--<div class="other">-->
                                        <!--<span>-->
                                            <!--这是病史的具体内容这是病史的具体内容这是病史的具体内容这是病史的具体内容-->
                                        <!--</span>-->
                                        <!--<Icon type="md-eye" />-->
                                        <!--<Button title="了解更多" style="border:none" >......</Button>-->
                                    <!--</div>-->
                                </div>

                                <!--<div class="photo">-->
                                    <!--<img src='./../../images/project_3.jpg' />-->
                                <!--</div>-->
                                <!--<div class="photo">-->
                                    <!--<img src='./../../images/project_3.jpg' />-->
                                <!--</div>-->
                                <!--<div class="photo">-->
                                    <!--<img src='./../../images/project_3.jpg' />-->
                                <!--</div>-->
                            </div>



                        </div>


                        <div class="message-board" style="height:auto;margin-top: 20px;opacity: 1;background: #f3f3f3;">
                            <div style="padding: 15px;">
                                <div class="head-line">

                                    <h2>留言板
                                        <Badge :count="3" style="position: absolute;margin-top: -6px;margin-left: -4px;"></Badge>
                                    </h2>
                                    <hr>
                                </div>
                                <div>
                                    <div class="message">
                                        <div class="commenter" style="width: 30%;display: -webkit-inline-box;">
                                            <div class="icon" style="margin-top: 15px;">
                                                <Icon type="md-contact" />
                                            </div>
                                            <div class="info" style="margin-left: 10px;">
                                                <p>陈小草</p>
                                                <p style="margin-top: -15px;">2019.1.2</p>
                                            </div>
                                        </div>
                                        <div class="commenter-msg" style="width: 65%;">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                In hendrerit libero ac accumsan lobortis.
                                                Nam sem lacus, vulputate ut turpis vel, viverra porta ante
                                            </p>
                                            <hr>
                                        </div>
                                    </div>
                                    <div class="message">
                                        <div class="commenter" style="width: 30%;display: -webkit-inline-box;">
                                            <div class="icon" style="margin-top: 15px;">
                                                <Icon type="md-contact" />
                                            </div>
                                            <div class="info" style="margin-left: 10px;">
                                                <p>陈小草</p>
                                                <p style="margin-top: -15px;">2019.1.2</p>
                                            </div>
                                        </div>
                                        <div class="commenter-msg" style="width: 65%;">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                In hendrerit libero ac accumsan lobortis.
                                                Nam sem lacus, vulputate ut turpis vel, viverra porta ante
                                            </p>
                                            <hr>
                                        </div>
                                    </div>

                                    <div style="text-align: center;">
                                        <Button type="primary" @click="leave_msg">我要留言</Button>
                                    </div>

                                </div>

                            </div>

                        </div>
                        <div class="footer" style="padding:30px;">
                            <div style="width:30%;margin:0px auto;">
                                <div class="footer-icon">
                                    <Icon style="cursor:pointer;" title="github" type="logo-github" />
                                </div>

                                <div class="footer-icon">
                                    <Icon style="cursor:pointer;" title="phone" type="md-phone-portrait" />
                                </div>

                                <div class="footer-icon">
                                    <Icon style="cursor:pointer;" title="twitter" type="logo-twitter" />
                                </div>

                                <div class="footer-icon">
                                    <Icon style="cursor:pointer;" title="Email" type="ios-mail" />
                                </div>

                                <div class="footer-icon">
                                    <Icon style="cursor:pointer;" title="contact" type="logo-octocat" />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>


            </Drawer>







        </div>

        <!--相册-->
        <div class="modal">
            <Modal v-model="modal" fullscreen>
                <div style="width: 90%;margin: 70px auto;">


                    <div class="demo-upload-list" v-for="item in uploadList">
                        <template v-if="item.status === 'finished'">
                            <img :src="item.url">
                            <div class="demo-upload-list-cover">
                                <!--<Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>-->
                                <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                            </div>
                        </template>
                        <template v-else>
                            <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
                        </template>
                    </div>
                    <Upload
                            ref="upload"
                            :show-upload-list="false"
                            :default-file-list="defaultList"
                            :on-success="handleSuccess"
                            :format="['jpg','jpeg','png']"
                            :max-size="2048"
                            :on-format-error="handleFormatError"
                            :on-exceeded-size="handleMaxSize"
                            :before-upload="handleBeforeUpload"
                            multiple
                            type="drag"
                            action="//jsonplaceholder.typicode.com/posts/"
                            style="display: inline-block;width:58px;">
                        <div style="width: 58px;height:58px;line-height: 58px;">
                            <Icon type="ios-camera" size="20"></Icon>
                        </div>
                    </Upload>
                    <!--<Modal title="View Image" v-model="visible">-->
                        <!--<img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">-->
                    <!--</Modal>-->



                </div>



                <!--<div style="width: 90%;margin: 50px auto;">-->
                            <!--<div class="more-photo">-->
                                <!--<img src='./../../images/project_3.jpg' />-->
                            <!--</div>-->
                            <!--<div class="more-photo">-->
                                <!--<img src='./../../images/project_3.jpg' />-->
                            <!--</div>-->
                            <!--<div class="more-photo">-->
                                <!--<img src='./../../images/project_3.jpg' />-->
                            <!--</div>-->
                            <!--<div class="more-photo">-->
                                <!--<img src='./../../images/project_3.jpg' />-->
                            <!--</div>-->
                            <!--<div class="more-photo">-->
                                <!--<img src='./../../images/project_3.jpg' />-->
                            <!--</div>-->
                            <!--<div class="more-photo">-->
                                <!--<img src='./../../images/project_3.jpg' />-->
                            <!--</div>-->
                            <!--<div class="more-photo">-->
                                <!--<img src='./../../images/project_3.jpg' />-->
                            <!--</div>-->
                            <!--<div class="more-photo">-->
                                <!--<img src='./../../images/project_3.jpg' />-->
                            <!--</div>-->
                            <!--<div class="more-photo">-->

                            <!--</div>-->
                <!--</div>-->

                <div slot="footer" style="text-align: center;" title="上传图片">
                    <!--<Button type="success" size="small" @click="more_cancel">上传</Button>-->
                </div>
            </Modal>
            
        </div>

        <!--留言-->
        <div class="modal">
            <Modal v-model="comments_modal" title="我要留言">
                <Input v-model="leave_comments" placeholder="Enter something..." style="width: 300px" />
                <div slot="footer">
                    <Button type="primary" @click="leave_ok">确认</Button>
                    <Button type="primary" ghost @click="leave_cancel">取消</Button>
                </div>
            </Modal>
        </div>


        <!--记录食品摄入量-->
        <div class="foods-modal">
            <Modal v-model="foods_modal" title="记录你每天的食物摄入情况:" width="600px;">
                <div style="width:100%;">
                    <div style="width: 90%;margin: 0px auto;text-align: center; ">
                        <img class="foods-img" src="./../../images/foods/1.gif" />
                        <img class="foods-img" src="./../../images/foods/2.gif" />
                        <img class="foods-img" src="./../../images/foods/3.gif" />
                        <img class="foods-img" src="./../../images/foods/4.gif" />
                    </div>
                    <div style="display: flex;margin-top: 15px;">
                        <div style="width: 40%;margin-left:20px;">
                            <p style="font-size: 12px;font-weight:bold;color:#626269bd">每周给自己定一个小目标吧
                                <Icon type="md-hand" size="22px" style="cursor:pointer;color:#ff00a3;margin-left: 5px;" title="开始制定" @click.native="set_goal"/>
                            </p>
                            <div class="goal-body">
                                <div style="width: 95%;text-align: center;padding: 20px;background: #eacca6;border-radius: 10px;">
                                    <div>
                                        <div style=" margin-bottom: 10px;">
                                            <span>蔬菜</span>
                                                <input :disabled="target_disabled" type="number" :value="target_vegetables" min="1" style="text-align: center;border: 1px solid #dcdee2;height: 32px;width: 110px;" />
                                            <span>克</span>
                                        </div>
                                        <div style=" margin-bottom: 10px;">
                                            <span>水果</span>
                                            <input :disabled="target_disabled" type="number" :value="target_fruit" min="1" style="text-align: center;border: 1px solid #dcdee2;height: 32px;width: 110px;" />
                                            <span>克</span>
                                        </div>
                                        <div style=" margin-bottom: 10px;">
                                            <span>肉类</span>
                                            <input :disabled="target_disabled" type="number" :value="target_meat" min="1" style="text-align: center;border: 1px solid #dcdee2;height: 32px;width: 110px;" />
                                            <span>克</span>
                                        </div>
                                        <div style=" margin-bottom: 10px;">
                                            <span>其他</span>
                                            <input :disabled="target_disabled" type="number" :value="target_others" min="1" style="text-align: center;border: 1px solid #dcdee2;height: 32px;width: 110px;" />
                                            <span>克</span>
                                        </div>

                                        <!--<Input v-model="target_vegetables" :disabled="target_disabled" style=" margin-bottom: 10px;text-align: center">-->
                                        <!--<span slot="prepend">蔬菜</span>-->
                                        <!--<span slot="append">克</span>-->
                                        <!--</Input>-->
                                        <!--<Input v-model="target_fruit" :disabled="target_disabled" style=" margin-bottom: 10px;text-align: center">-->
                                        <!--<span slot="prepend">水果</span>-->
                                        <!--<span slot="append">克</span>-->
                                        <!--</Input>-->
                                        <!--<Input v-model="target_meat" :disabled="target_disabled" style=" margin-bottom: 10px;text-align: center">-->
                                        <!--<span slot="prepend">肉类</span>-->
                                        <!--<span slot="append">克</span>-->
                                        <!--</Input>-->
                                        <!--<Input v-model="target_others" :disabled="target_disabled" style=" margin-bottom: 10px;text-align: center">-->
                                        <!--<span slot="prepend">其他</span>-->
                                        <!--<span slot="append">克</span>-->
                                        <!--</Input>-->
                                    </div>
                                    <div class="footer" style="">
                                        <Button type="warning" @click="target_ok" size="small">ok</Button>
                                        <!--<Button type="warning" ghost @click="target_cancel" size="small">no</Button>-->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="width: 55%;float: right">
                            <p style="font-size: 12px;font-weight:bold;color:#626269bd;">今天你吃了多少？</p>
                            <div class="goal-body">
                                <div style="width: 95%;text-align: center;padding: 20px;background: #bbb9da;border-radius: 10px;">
                                    <div>


                                        <div style=" margin-bottom: 10px;">
                                            <span>蔬菜</span>
                                            <input type="number" :value="eat_vegetables" min="1" style="text-align: center;border: 1px solid #dcdee2;height: 32px;width: 110px;" />
                                            <span>克</span>
                                        </div>
                                        <div style=" margin-bottom: 10px;">
                                            <span>水果</span>
                                            <input type="number" :value="eat_fruit" min="1" style="text-align: center;border: 1px solid #dcdee2;height: 32px;width: 110px;" />
                                            <span>克</span>
                                        </div>
                                        <div style=" margin-bottom: 10px;">
                                            <span>肉类</span>
                                            <input type="number" :value="eat_meat" min="1" style="text-align: center;border: 1px solid #dcdee2;height: 32px;width: 110px;" />
                                            <span>克</span>
                                        </div>
                                        <div style=" margin-bottom: 10px;">
                                            <span>其他</span>
                                            <input type="number" :value="eat_others" min="1" style="text-align: center;border: 1px solid #dcdee2;height: 32px;width: 110px;" />
                                            <span>克</span>
                                        </div>




                                        <!--<Input v-model="eat_vegetables"  style=" margin-bottom: 10px;">-->
                                        <!--<span slot="prepend">蔬菜</span>-->
                                        <!--<span slot="append">克</span>-->
                                        <!--</Input>-->
                                        <!--<Input v-model="eat_fruit" style=" margin-bottom: 10px;">-->
                                        <!--<span slot="prepend">水果</span>-->
                                        <!--<span slot="append">克</span>-->
                                        <!--</Input>-->
                                        <!--<Input v-model="eat_meat" style=" margin-bottom: 10px;">-->
                                        <!--<span slot="prepend">肉类</span>-->
                                        <!--<span slot="append">克</span>-->
                                        <!--</Input>-->
                                        <!--<Input v-model="eat_others" style=" margin-bottom: 10px;">-->
                                        <!--<span slot="prepend">其他</span>-->
                                        <!--<span slot="append">克</span>-->
                                        <!--</Input>-->


                                    </div>
                                    <div class="footer" style="">
                                        <Button type="success" @click="eat_ok" size="small">ok</Button>
                                        <!--<Button type="success" ghost @click="eat_cancel" size="small">no</Button>-->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div slot="footer">
                    <!--<Button type="primary" @click="food_ok">确认</Button>-->
                    <!--<Button type="primary" ghost @click="food_cancel">取消</Button>-->
                </div>
            </Modal>
        </div>


        <!--过敏史-->
        <div class="allergies-modal">
            <Modal v-model="allergies_modal" title="记录您的过敏史">
                <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="90">
                    <FormItem label="过敏原：" prop="name">
                        <Input v-model="formValidate.name" placeholder="Enter the name" style="width:75%"></Input>
                    </FormItem>
                    <FormItem label="药物：" prop="medical">
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

    import {getStore} from './../../../config/Utils'

    export default {
        name: 'user',
        data() {
            return {
                target_disabled:true,
                formValidate:{
                    id:'',
                    name:'',
                    medical:''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '请填写过敏原', trigger: 'blur' }
                    ],
                    medical: [
                        { required: true, message: '请填写治疗药物', trigger: 'blur' }
                    ],
                },
                allergies_modal:false,
                columns_medical: [
                    {
                        title: '时间',
                        key: 'time'
                    },
                    {
                        title: '诊断结果',
                        key: 'diagnosis'
                    },
                    {
                        title:'操作',
                        key: 'action',
                        align: 'center',
                        render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.remove_medical(params.row.id)
                                    }
                                }
                            }, '删除'),
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.detail_medical(params.row.id)
                                    }
                                }
                            }, '详情')
                            ]);
                         }
                     }
                ],
            data_medical:[
                {
                    id:'1',
                    time:'2018-01-02',
                    diagnosis:'病毒性感冒引起的呼吸道感染',
                }
            ],
                columns1: [
                    {
                        title: '过敏原',
                        key: 'allergen'
                    },
                    {
                        title: '药物',
                        key: 'medicine'
                    },
                    {
                        title:'操作',
                        key: 'action',
                        align: 'center',
                        render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                            on: {
                                click: () => {
                                    this.remove_allergen(params.row.id)
                                }
                             }
                            }, 'Delete')
                        ]);
                        }
                        }
                ],
                data2: [
                    {
                        id:'1',
                        allergen:'海鲜',
                        medicine:'无',
                    },
                    {
                        id:'2',
                        allergen:'海鲜',
                        medicine:'无',
                    },
                    {
                        id:'3',
                        allergen:'海鲜',
                        medicine:'无',
                    },
                    {
                        id:'4',
                        allergen:'海鲜',
                        medicine:'无',
                    },
                ],
                target_vegetables:'1',
                target_fruit:'1',
                target_meat:'1',
                target_others:'1',
                eat_vegetables:'1',
                eat_fruit:'1',
                eat_meat:'1',
                eat_others:'1',
                foods_modal:false,
                user_name:'',
                drawer:false,
                modal:false,
                comments_modal:false,
                leave_comments:'',
                scrollTop:'',
                defaultList: [
                    {
                        'name': 'a42bdcc1178e62b4694c830f028db5c0',
                        'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
                    },
                    {
                        'name': 'bc7521e033abdd1e92222d733590f104',
                        'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
                    }
                ],
                imgName: '',
                visible: false,
                uploadList: [],
                newList:'',

            }
        },
//        props: ['tariff', 'area', 'tariff_id', 'specification'],
//        props:['name'],
        mounted() {
            this.user_name = getStore('user_name')
//            console.log(this.$route.params.name)
            window.addEventListener('scroll', this.handleScroll)
            this.uploadList = this.$refs.upload.fileList;
//            console.log(this.uploadList)
        },
        created() {

        },
        methods: {

            //制定目标
            set_goal(){
                this.target_disabled = false;
            },
            target_ok(){
                if(this.target_vegetables == '' || this.target_fruit == '' || this.target_meat == '' || this.target_others == ''){
                    this.$Message.warning('请正确填写目标表单信息')
                }else{
                    this.$Message.success('制定目标成功');
                    this.target_disabled = true;
                }
            },
            target_cancel(){
                this.target_vegetables = '1'
                this.target_fruit = '1'
                this.target_meat = '1'
                this.target_others = '1'
            },
            eat_ok(){
                if(this.eat_vegetables == '' || this.eat_fruit == '' || this.eat_meat == '' || this.eat_others == ''){
                    this.$Message.warning('请正确填写今日表单机械能系')
                }else{
                    this.$Message.success('填写成功');
                    this.target_disabled = true;
                }
            },
            eat_cancel(){
                this.eat_vegetables = '1'
                this.eat_fruit = '1'
                this.eat_meat = '1'
                this.eat_others = '1'
            },

//            删除过敏史
            remove_allergen(id){
                if(confirm("确认删除吗？")){
                    console.log('删除' + id)
                }
            },
//            添加过敏史
            allergies(){
                this.allergies_modal = true;
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

//            删除病史
            remove_medical(id){
                if(confirm("确认删除吗？")){
                    console.log('删除' + id)
                }
            },

            detail_medical(id){
                this.$router.push({'name':'medical_History',params: {id: id}})
            },

//            添加病史
            medical_history(){
                this.$router.push({'name':'add_medical_History'})
            },


            leave_msg(){
                this.comments_modal = true;
            },

            leave_ok(){
                this.comments_modal = false;
            },

            leave_cancel(){
                this.comments_modal = false;
            },

            viewphoto(){
                this.modal = true;
            },

            more_cancel(){
                this.modal = false;
            },

            view_profile(){
                this.drawer = true;
            },

            handleScroll () {
                this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
//                console.log(this.scrollTop)
                if(this.scrollTop == 0){
                    this.drawer = false;
                }else if(this.scrollTop == 100){
                    this.drawer = true;
                }
            },

            changeMenu(name){
//                console.log(name)
                if(name == 'peronal'){
                    this.$router.push({name:'personal_Information'})
                }else if(name == 'focus'){
                    this.$router.push({name:'my_Focus'})
                }else if(name == 'foot'){
                    this.$router.push({name:'my_Footprint'})
                }else if(name == 'collection'){
                    this.$router.push({name:'my_Collection'})
                }else if(name == 'fan'){
                    this.$router.push({name:'my_Fans'})
                }else if(name == 'exit'){
                    this.$router.push({name:'index'})
                }else if(name == 'blog'){
                    this.$router.push({name:'forum'})
                }
            },

//            handleRemove (file) {
//                var url = file.url
//                for(var i in this.uploadList){
//                    if( this.uploadList[i] = url){
//                        this.uploadList.splice( i ,1)
//                    }
////                    console.log(this.defaultList[i])
//                }
////                const fileList = this.$refs.upload.fileList;
////                this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
//            },
            handleView (name) {
                this.imgName = name;
                this.visible = true;
            },
            handleRemove (file) {
                const fileList = this.$refs.upload.fileList;
                this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
            },
            handleSuccess (res, file) {
                file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
                file.name = '7eb99afb9d5f317c912f08b5212fd69a';
            },
            handleFormatError (file) {
                this.$Notice.warning({
                    title: '文件格式错误',
                    desc: '文件 ' + file.name + ' 格式不正确, 请选择 jpg 或者 png.'
                });
            },
            handleMaxSize (file) {
                this.$Notice.warning({
                    title: '超过文件大小限制',
                    desc: '文件  ' + file.name + ' 过大，不超过2M.'
                });
            },
            handleBeforeUpload (file) {
                console.log(file)
                const check = this.uploadList.length < 5;
                console.log(check)
                if (!check) {
                    this.$Notice.warning({
                        title: '最多上传5张照片.'
                    });
                }
                return false ;
            },

            food_intake(){
                this.foods_modal = true;
            },


        },
        beforeDestroy:function(){
            window.removeEventListener('scroll', this.handleScroll)
            this.$Notice.destroy()
        },
    }


</script>

<style type="text/css">

    .logo{
        position: fixed;
        left: 0;
        padding: 20px 20px;
        z-index: 10000;
        cursor: pointer;
    }

    .logo > span{
        color: #fff;
        display: inline-block;
        float: left;
        border: 2px solid #fff;
        padding: 7px 10px 7px 12px;
    }

    .logo > span:hover{
        color: #fff;
        opacity: .8;
    }

    #home-page{
        position: relative;
        margin: 0 auto;
        min-height: 560px;
        width: 100%;
        height: 100%;
    }

    #user #home-page .bg-img{
        position: fixed;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        /*background: url('./../../images/user/bg1280x788.jpg');*/
        /*background-size: cover;*/
    }

    .bg-img img {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        min-width: 100%;
        min-height: 100%;
    }

    #home-page .bg-img::before{
        width: 100%;
        height: 100%;
        /*background-color: rgba(79, 77, 77, 0.44);*/
        background-color: rgba(97, 62, 63, 0.4);
    }

    #home-page .bg-img::before, #home-page .bg-img::after {
        content: '';
        position: absolute;
        z-index: 100;
    }

    #home-page .content{
        margin: 0 auto;
        padding: 0 1.25em 10em 1.25em;
        width: 100%;
        text-align: center;
        position: fixed;
        top: 27%;
        /*left: 50%;*/
    }

    .title h2 {
        text-transform: uppercase;
        padding: 0 0 0.2em;
        color: #fff;
        font-weight: 800;
        font-size: 5em;
        margin: 0 auto;
    }

    .title h1 {
        font-family: 'Playfair Display', serif;
        font-weight: 900;
        font-size: 4em;
        line-height: 1.1;
        color: #444444;
    }


    .title p, .more-msg p {
        color: #fff;
        padding: 0 0 0.6em;
        font-weight: 400;
        font-size: 2.25em;
        margin: 0 auto;
    }

    .more-msg{
        position: fixed;
        margin: 0 auto;
        padding: 0 1.25em 10em 1.25em;
        width: 100%;
        text-align: center;
        top: 79%;
        bottom: 0%;
    }

    #user .ivu-icon-ios-arrow-down{
        font-size: 60px;
        font-weight: bold;
        color: #fff;
        cursor: pointer;
    }

    .ivu-icon-ios-arrow-down:hover{
        color: #e49ce4;
    }

    #user-msg .user-main{
        height: auto;
        min-height: 100%;
        /*width: 61%;*/
        width:100%;
        position: absolute;
        right: 0px;
        top:0px;
       /* padding: 15px;*/
        background: #fff;
    }

    .person-msg{
        position: relative;
        min-height: 1px;
        /*padding: 30px;*/
        padding-left: 52px;
        padding-top: 10px;
    }

    #user-msg .title span{
        display: block;
        font-size: 24px;
        font-family: inherit;
        font-weight: 400;
        line-height: 1.1;
        color: #444444;
    }

    .health-img .first{
        margin-left:10%;
    }
    .health-img .sports{
        display: inline-block;
        width:30%;
        height:117px;
        margin: 0px auto;
        text-align: center;
    }

    .health-img .sports span p {
        font-family: sans-serif;
        color: #fff;
    }

    .health-img .other{
       
    }

    .health-img .time{
        font-size: 45px
    }

    .health-img .sports p {
        font-weight: 600;
        text-transform: uppercase;
        font-size: 20px;
    }

    .ivu-icon-md-bicycle, .ivu-icon-ios-baseball, .ivu-icon-ios-body, .ivu-icon-md-contact, .ivu-icon-logo-github,
    .ivu-icon-md-phone-portrait, .ivu-icon-logo-twitter, .ivu-icon-ios-mail, .ivu-icon-logo-octocat{
        font-size: 30px;
    }

    .footer-icon{
        display:-webkit-inline-box;
        margin-left:10px;
    }

    .person-health-indx .index-process .one .ivu-progress-bg{
        background-color:#e51c23;
    }

    .person-health-indx .index-process .two .ivu-progress-bg{
        background-color:#4caf50;
    }

    .person-health-indx .index-process .three .ivu-progress-bg{
        background-color:#ff9800;
    }

    .person-health-indx .index-process .four .ivu-progress-bg{
        background-color:#2196f3;
    }

    .article-msg{
        border: 4px solid transparent;
        border-radius: 4px; 
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);
        float: left;
        height:auto;
    }

    .article-msg:hover{
        box-shadow: 0 10px 10px -10px rgba(0,0,0,.5);
        -webkit-transform: scale(1.1);
    }

.photo{
    padding: 15px;
    width: 45%;
    margin-left: 20px;
    text-align: center;
    cursor: pointer;
}

.photo :hover{
    box-shadow: 0 10px 10px -10px rgba(0,0,0,.5);
    opacity: 0.5;
}

.photo:before{
    background: #3085a3;
}

.photo img{
    width:100%;
    height:100%;
    border-radius: 5px;
    /*box-shadow: 1px 0.5px 0.5px black;*/
    box-shadow: 0 4px 4px black;
}

    .medical{
        padding: 15px;
        width: 95%;
        margin-left: 20px;
        /*cursor: pointer;*/
    }

    .medical Button:hover{
        cursor: pointer;
        box-shadow: 0 10px 10px -10px rgba(0,0,0,.5);
        opacity: 0.5;
    }

    .medical Button{
        /*float: right;*/
        margin:5px;
    }

    .medical .time{
        font-size: 15px;
        font-weight: bold;
    }

    .medical .other{
        margin-left: 20px;
        font-size: 13px;
        overflow: hidden;
        /*text-overflow:ellipsis;*/
        white-space: nowrap;
    }

.ivu-modal-content{
    /*background: rgba(25, 25, 25, .5);*/
    /*background: #d0d0d0ad;*/
}

.ivu-modal-close .ivu-icon-ios-close{
    color:#fff;
    font-size: 45px;
}

.more-photo{
    padding: 15px;
    width: 30%;
    margin-left: 3%;
    text-align: center;
    cursor: pointer;
    float:left;
}

.more-photo img{
    width:100%;
    height:300px;
    /*height:100%;*/
}

.ivu-icon-logo-github:hover, .ivu-icon-md-phone-portrait:hover, .ivu-icon-logo-twitter:hover, .ivu-icon-ios-mail:hover, .ivu-icon-logo-octocat:hover{
        color:#ff9800;
    }


.ivu-icon-md-menu{
    font-size: 35px;
    cursor: pointer;
}

    .demo-badge{
        width: 42px;
        height: 42px;
        background: #eee;
        border-radius: 6px;
        display: inline-block;
    }

    .health_history a:hover, .article-name a:hover{
        color:#af6382 !important;
    }


    .demo-upload-list{
        display: inline-block;
        width: 200px;
        height: 200px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 14px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 50px;
        cursor: pointer;
        margin: 70px 2px;
    }

    .foods-img{
        width:20%
    }

</style>