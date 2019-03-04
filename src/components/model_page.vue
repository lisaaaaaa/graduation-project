<template>
    <div>
        <!--<topmenu :activeName="activeName" :power="power"></topmenu>-->
        <div id="add_page">
            <div class="add-page-title">{{this.title}}</div>
            <div v-if=" type == 'step' " style="background: #f0f2f5 !important;padding: 15px;border-radius: 10px;">
                <Steps :current="current">
                    <Step :title="item.name" :style="item.style" v-for="item in steps"></Step>
                </Steps>
                <div class="add-page-content" style="position: relative;margin-top: 40px;padding:40px;background: #f0f2f5">
                    <div v-for="(item, index) in steps">
                        <div class="add-page-section" v-if="current == index && item.type == 'model' ">
                            <!--<modelDetail :culums="item.columns" :data="item.data" ref="add_panel"></modelDetail>-->
                        </div>
                        <div class="add-page-section" v-if="current == index && item.type == 'table'">
                            <Table border :columns="item.columns" :data="item.data"></Table>
                            <div v-if="item.button">
                                <div class="add-page-section-btn" style="cursor: pointer;" @click="set_click(item.button.func,item.button.params||null)">
                                    <!--<div v-if="item.button" class="add-page-section-btn" style="cursor: pointer;" @click="add">-->
                                    <img v-if="item.button.type=='add'" src="./../images/add16x16.png" :title="item.button.title" style="margin-top: 12px;vertical-align:text-bottom;">
                                    <img v-else-if="item.button.type='cancel'" src="./../images/disable.png" :title="item.button.title" style="margin-top: 12px;vertical-align:text-bottom;">
                                    <span :style="item.button.style">{{item.button.name}}</span>
                                </div>
                                <div v-if="item.addmodel">
                                    <template v-if="item.addmodel.enable">
                                        <!--<modelDetail :culums="item.addmodel.culums" :data="item.addmodel.data" ref="add_panel"></modelDetail>-->
                                        <div slot="footer">
                                            <Button type="error" @click="set_click(item.addmodel.button.cancel,item.name,'item.addmodel.button.cancel')">取消</Button>
                                            <Button type="primary" @click="set_click(item.addmodel.button.submit,item.name,'item.addmodel.button.submit')">提交</Button>
                                        </div>
                                    </template>
                                </div>
                            </div>
                        </div>
                        <div class="add-page-section" v-if="current == index && item.type == 'text' " style="padding-bottom: 5px">
                            <div class="add-page-up-msg">
                                <div>
                                    <div class="list-con" v-for="(_item,index) in steps_list" >
                                        <div v-if="index == steps_list.length-1">

                                        </div>
                                        <div v-else>
                                            <div class="list-title">
                                                <Icon :type="_item.icon" class="list-icon" size="20"></Icon>
                                                {{ _item.name }}
                                            </div>
                                            <div class="add-page-table-list" v-if=" _item.type=='table' ">
                                                <span class="title">{{ _item.name }}信息：</span>
                                                <div class="" ><Table border :columns="_item.columns" :data="_item.data"></Table></div>
                                            </div>
                                            <div v-else style="overflow: hidden">
                                                <div style="float: left">
                                                    <div class="list" v-for="list in _item.columns">
                                                        <span class="title" >{{ list.title }}：</span>
                                                    </div>
                                                </div>
                                                <div style="float: left;width: 80%;">
                                                    <div style="position: relative;float: left;">
                                                        <!--<div class="">-->
                                                            <span class="msg" v-for="msg in _item.data" style="display:table;margin-top: 10px">{{ msg }}</span>
                                                        <!--</div>-->
                                                    </div>
                                                    <!--<div style="position: relative;float: left;">-->
                                                        <!--<div class="list-msg" v-for="list in _item.columns"  style="margin-top: 10px;">-->
                                                            <!--<div class="list-tip" v-for=" _tip in list.sub_items">-->
                                                                <!--<span class="tip" v-if="_tip.tip"> {{_tip.tip}} </span>-->
                                                                <!--<span class="tip" v-else>  </span>-->
                                                            <!--</div>-->
                                                        <!--</div>-->
                                                    <!--</div>-->
                                                </div>
                                                <!--<div>-->
                                                <!--<div class="list" v-for="list in _item.columns">-->
                                                <!--<div class="list_tip" v-for=" _tip in list.sub_items">-->
                                                <!--<span class="tip" v-if="_tip.tip"> {{_tip.tip}} </span>-->
                                                <!--<span class="tip" v-else> {{ }} </span>-->
                                                <!--</div>-->
                                                <!--</div>-->
                                                <!--</div>-->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="add-page-button" style="margin-top: 20px;" id="btn" >
                        <i-button v-if="current != 0" type="primary" @click="last" class="ghost">上一步</i-button>
                        <i-button v-if="current != (steps.length-1)" type="primary" @click="next(current)">下一步</i-button>
                        <i-button v-if="current == (steps.length-1)" :type="btn.type" @click="set_click(btn.functions)" v-for="btn in footer">{{ btn.value }}</i-button>
                    </div>
                </div>
            </div>
            <div v-else-if=" type == 'nostep' ">
                <div class="add-page-content" style="position: relative;margin-top: 40px;padding:40px;background: white">
                    <div v-for="(item, index) in steps">
                        <div v-if="index == current" class="add-page-section" style="padding-bottom: 5px">
                            <div class="add-page-up-msg">
                                <div>
                                    <div class="list-con" v-for="(_item,index) in steps" >
                                            <div class="list-title">
                                                <Icon :type="_item.icon" class="list-icon" size="20"></Icon>
                                                {{ _item.name }}
                                            </div>
                                            <div class="add-page-table-list" v-if=" _item.type=='table' ">
                                                <span class="title">{{ _item.name }}信息：</span>
                                                    <Table border :columns="_item.columns" :data="_item.data"></Table>
                                                    <div v-if="_item.button">
                                                        <div class="add-page-section-btn" style="cursor: pointer;" @click="set_click(_item.button.func,_item.button.params||null)">
                                                            <img v-if="_item.button.type=='add'" src="./../images/add16x16.png" :title="_item.button.title" style="margin-top: 12px;vertical-align:text-bottom;">
                                                            <span :style="_item.button.style">{{_item.button.name}}</span>
                                                        </div>
                                                        <div v-if="_item.addmodel">
                                                            <template v-if="_item.addmodel.enable">
                                                                <!--<modelDetail :culums="_item.addmodel.culums" :data="_item.addmodel.data" ref="add_panel"></modelDetail>-->
                                                                <div slot="footer">
                                                                    <Button type="error" @click="set_click(_item.addmodel.button.cancel,_item.addmodel.params || null ,'_item.addmodel.button.cancel')">取消</Button>
                                                                    <Button type="primary" @click="set_click(_item.addmodel.button.submit,_item.addmodel.params || null ,'_item.addmodel.button.submit')">确认</Button>
                                                                </div>
                                                            </template>
                                                        </div>
                                                    </div>
                                            </div>
                                            <div v-else style="overflow: hidden">
                                                <div style="float: left">
                                                    <div class="list" v-for="list in _item.columns">
                                                        <span class="title" >{{ list.title }}：</span>
                                                    </div>
                                                </div>
                                                <div style>
                                                    <div style="position: relative;top: -10px;float: left;width: 15%">
                                                        <div class="list" v-for="msg in _item.data">
                                                            <span class="msg" >{{ msg }}</span>
                                                        </div>
                                                    </div>
                                                    <!--<div>-->
                                                        <!--<div class="list" v-for="list in _item.columns">-->
                                                            <!--<div class="list_tip" v-for=" _tip in list.sub_items">-->
                                                                <!--<span class="tip" v-if="_tip.tip"> {{_tip.tip}} </span>-->
                                                                <!--<span class="tip" v-else>  </span>-->
                                                            <!--</div>-->
                                                        <!--</div>-->
                                                    <!--</div>-->
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="add-page-button" style="margin-top: 20px;" id="btn">
                        <i-button :type="btn.type" @click="set_click(btn.functions)" v-for="btn in footer">{{ btn.value }}</i-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
//    import topmenu from './../topnav/topmenu.vue';
//    import modelDetail from './../add_panel/model_detail';
    import {deepCopy} from './../../config/Utils';


    export default {
        data () {
            return {
                current: 0,
                activeName: '1-1',
                power: 1,
//                steps_list:[],
            }
        },
        props: {
            title:String,
//            data: Object,
            type:String,
            steps: Array,
            footer: Array,
            steps_list:Array,
        },
//        components: {modelDetail},
        mounted(){
            var self = this;
            self.init_style();
        },
        beforeMount(){
            var self = this;
            self.progress_style();
        },
        methods: {
            next(index){
                var self = this;

                if(index == self.steps.length - 2){
                    self.show_msg()
                }
                self.current += 1;
            },
            last(){
//                if(this.current == this.steps.length - 1){
//                    this.steps_list = []
//                }
                this.current -= 1;
            },
            init_style(){
                document.getElementById('main').style.display = 'none';
                document.getElementById('topnav').style.display = 'none';
                var pageContent = document.getElementById('page-content');
                pageContent.style.left = '0';
                pageContent.style.right = '0';
            },
            progress_style(){
                //进度条样式控制
                if(this.steps.length > 1){
                    var wid = 100/(this.steps.length - 1)
                    for (var item in this.steps){
                        this.steps[item].style = 'width: calc(' + wid + '% - ' + wid +'px);'
                        this.steps[this.steps.length-1].style = 'width:100px;'
                    }
                }
            },
            set_click(name,params,path) {
                if(path){
                    if( path.indexOf('cancel') == -1 ){
                        if(this.$refs.add_panel && this.$refs.add_panel.length > 0){
                            if (!this.$refs.add_panel[0].isAdopt()) return false;
                        }
                    }
                }
                if(params==null){
                    this.$parent[name]();
                }else {
                    this.$parent[name](params);
                }

            },
//            selectAreaOfDrc(index){
//                var self = this
//                var data = self.steps[index-1].columns;
//                for(var i=0; i<this.$route.params.area.length; i++){
//                    if(i==index-1){
//                        data[0].sub_items[i].select = true;
//                    }else {
//                        data[0].sub_items[i].select = false;
//                    }
//                }
//            },
            show_msg(){
                var self = this;
                var msg=[];
                for (var i in self.steps){
                    var arr =[];
                    arr = deepCopy(self.steps[i], {} )
                    msg.push(arr)
                }
                this.$emit('handCallBack',msg)
            }
        },
        watch: {
            steps: {
                handler(newValue, oldValue) {
//                    console.log(newValue)
                },
                deep: true
            }
        },
        destroyed: function () {
            var topNav = document.getElementById('topnav');
            var leftNav = document.getElementById('left-nav');
            var main = document.getElementById('main');
            var pageContent = document.getElementById('page-content');
            topNav.style.display = 'block';
            main.style.display = 'block';
            pageContent.style.left = parseFloat(leftNav.style.width) < 170? '52px':'170px';
            pageContent.style.right = '20px';
        }
    }

</script>
<style type="text/css">

    .navbar-static-top{
        left: 0;
    }

    #add_page .ivu-btn{
        border-radius: 0;
    }

    .ivu-menu-horizontal.ivu-menu-light:after{
        background: transparent;
    }

    #top-menu .ivu-menu-horizontal .ivu-menu-submenu{
        border: none;
        margin-top: -3px;
    }

    .navbar-static-top{
        height: 50px!important;
    }

    .top_logo_img{
        margin-left: 5px;
    }

    #add_page {
        position: absolute;
        left: 10%;
        right: 10%;
        min-width: 600px;
        padding-bottom: 11px;
    }

    #add_page tr.add-panel-odd-line td.add-panel-subtitle, tr.add-panel-even-line td.add-panel-subtitle{
        width: 14%;
    }

    #add_page .ghost{
        background: transparent;
        border: 1px solid;
        border-color:  #3498da;
        color: #3498da;
        transition: color .2s linear,background-color .2s linear,border .2s linear,box-shadow .2s linear;
    }
    #add_page .ghost:hover{
        background: transparent;
        color: #5dade2;
        border-color: #5dade2;
    }

    #add_page .add-page-title{
        font-size: 1.2rem;
        font-weight: bold;
        margin: 20px 0 60px;
    }
    /*步骤条样式设置*/
    #add_page .ivu-steps .ivu-steps-head {
        background: #f0f2f5 !important;
    }

    #add_page .ivu-steps .ivu-steps-title{
        background: #f0f2f5 !important;
        padding-right: 10px;
    }
    #add_page .ivu-steps .ivu-steps-main{
        position: relative;
        top: 2.5px;
    }

    #add_page .ivu-steps-item.ivu-steps-status-process .ivu-steps-tail>i, .ivu-steps-item.ivu-steps-status-wait .ivu-steps-tail>i{
        background: #ccc;
    }

    #add_page .ivu-steps .ivu-steps-tail>i {
        width: calc(100% - 40px);
        height: 2px;
        margin-left: 40px;
    }

    #add_page table{
        /*position: relative;*/
        /*top: 150px;*/
    }

    #add_page table tr{
        background: transparent !important;
        border-bottom: none;
    }

    .list-icon{
        margin-right: 5px;
        width: 18px;
        position: relative;
        top: 2px;
    }

    #add_page .add-page-up-msg .list-title{
        font-size: 14px;
        font-weight: bold;
        margin: 0 0 10px;
    }

    #add_page .add-page-up-msg .list-con{
        padding: 0;
        margin-bottom: 20px;
    }

    #add_page .add-page-up-msg .list{
        margin: 10px 28px;
    }

    #add_page .add-page-up-msg .msg{

    }

    #add_page .add-page-table-list{
        margin: 10px 28px;
        width: auto;
    }

    #add_page .add-page-table-list .title{
        display: inline-block;
        margin-bottom: 10px;
    }

    #add_page .ivu-select-dropdown {
        overflow: overlay !important;
    }

    #add_page .tip {
        /*margin-left: -11%;*/
        display: inline-table;
    }



</style>