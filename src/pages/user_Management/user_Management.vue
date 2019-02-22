<template>
    <div id="user-manager">
        <div style="margin-bottom: 15px;">
            <span style="margin-left: 15px;color:#676262">管理员管理</span>
        </div>
        <div style="width: 100%;height: 50px;line-height: 50px;background: #f5f4f4;box-shadow: 0.2px 0.3px 0.2px rgba(0, 21, 41, 0.35);">
            <div>
                <div class="toolbar-left">
                    <span style="font-size: 12px;line-height: 1.5;color: #495060;">关键字：</span>
                    <Input v-model="search" placeholder="输入关键字以查询..." style="width: 200px"></Input>
                </div>
                <div class="toolbar-right">
                    <Button type="primary" icon="ios-search" @click="seek">搜索</Button>
                </div>
            </div>
        </div>
        <div style="width:100%;height:auto;margin-top: 15px;background: rgb(245, 244, 244);">

            <div style="height: 60px;width: 100%;padding-top: 15px;">
                <div style="float: right;padding-right: 10px;">
                    <Button type="primary" icon="ios-add-circle-outline" @click="addmodel" class="tdrcvp_btn">添加</Button>
                    <Button type="primary" icon="ios-close-circle-outline" @click="deletemodel" class="tdrcvp_btn">删除</Button>
                    <Button type="primary" icon="ios-checkmark-circle-outline" @click="startmodel" class="tdrcvp_btn">启用</Button>
                    <Button type="primary" icon="ios-remove-circle-outline" @click="disablemodel" class="tdrcvp_btn">禁用</Button>
                </div>
            </div>
            <div class="table-box ivu-table-border">
                <Table border :columns="table_columns" :data="table_data" @on-selection-change="select"></Table>
            </div>
            <div class="page">
                <Page :total="total_num" :page-size="page_size" @on-change="change" show-elevator></Page>
            </div>

        </div>
        <div>

            <!--添加管理员-->
            <Modal v-model="modal_add"
                   title="添加管理员"
                   width="600">
                <div class="" style="text-align: left">
                    <!--<modelDetaile :data="add_data" :culums="add_list" ref="add_panels"></modelDetaile>-->

                    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
                        <FormItem label="管理员账号：" prop="name">
                            <Input v-model="formValidate.name" placeholder="Enter your name" style="width:400px;"></Input>
                        </FormItem>
                        <FormItem label="联系人：" prop="contact">
                            <Input v-model="formValidate.contact" placeholder="Enter your contact" style="width:400px;"></Input>
                        </FormItem>
                        <FormItem label="电话：" prop="phone">
                            <Input v-model="formValidate.phone" placeholder="Enter your phone" style="width:400px;"></Input>
                        </FormItem>
                        <FormItem label="邮箱：" prop="mail">
                            <Input v-model="formValidate.mail" placeholder="Enter your e-mail" style="width:400px;"></Input>
                        </FormItem>
                        <FormItem label="备注：" prop="remarks">
                            <Input v-model="formValidate.remarks" placeholder="Enter your remarks" style="width:400px;"></Input>
                        </FormItem>
                        <FormItem label="状态：" prop="single">
                            <div>
                                <Checkbox v-model="formValidate.single">启用</Checkbox>
                            </div>
                        </FormItem>
                    </Form>


                </div>
                <div slot="footer">
                    <Button type="primary" size="large" @click="add_ok('formValidate')" class="tdrcvp_btn">确认</Button>
                    <Button type="primary" ghost size="large" @click="add_cancel" class="tdrcvp_btn">取消</Button>
                </div>
            </Modal>

            <!--重置密码-->

            <Modal v-model="modal_reset"
                   title="重置密码"
                   width="790">
                <div class="">
                    <div>
                        <Form ref="formReset" :model="formReset" :rules="ruleReset" :label-width="100">
                            <FormItem label="账号：" prop="name">
                                <span>{{ this.formReset.admin_name}}</span>
                            </FormItem>
                            <FormItem label="密码：" prop="pass">
                                <Input v-model="formReset.pass" type="password" placeholder="输入密码" style="width:400px;"></Input>
                            </FormItem>
                            <FormItem label="新密码：" prop="newpass">
                                <Input v-model="formReset.newpass" type="password" placeholder="确认密码" style="width:400px;"></Input>
                            </FormItem>
                        </Form>
                    </div>
                </div>
                <div slot="footer">
                    <Button type="primary" size="large" @click="reset_ok" class="tdrcvp_btn">重置</Button>
                    <Button type="primary" size="large" @click="reset_cancel" class="tdrcvp_btn">关闭</Button>
                </div>
            </Modal>



        </div>
    </div>
</template>

<script>


    import modalButton from './../../components/modalButton.vue'
    import {getStore} from './../../../config/Utils'


    export default {
        name: 'user_Management',
        data() {

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
                } else if (value !== this.formReset.pass) {
                    callback(new Error('两次密码不一致!'));
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





            return {

                isPower:true,
                login_name:'',
                formReset:{
                    admin_name:'',
                    admin_id:'',
                    pass:'',
                    newpass:''
                },
                ruleReset:{
                    name: [
                        { required: false}
                    ],
                    pass: [
                        {validator: validatePass2, trigger: 'blur',required: true}
                    ],
                    newpass: [
                        {validator: validatePassCheck, trigger: 'blur',required: true}
                    ],
                },
                formValidate: {
                    name: '',
                    contact:'',
                    phone:'',
                    mail: '',
                    remarks:'',
                    single:'false'
                },ruleValidate: {
                    name: [
                        {validator: validateInput, trigger: 'blur',required: true}
                    ],
                    contact: [
                        {validator: validateContact, trigger: 'blur',required: true}
                    ],
                    phone: [
                        { required: true, message: '电话不能为空', trigger: 'blur' },
                        { type: 'number', message: '请填写正确的手机号', trigger: 'blur',transform(value){
                            var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
                            if(!myreg.test(value)){
                                return false;
                            }else{
                                return Number(value);
                            }
                        } }
                    ],
                    mail: [
                        { required: true, message: '邮箱不能为空', trigger: 'blur' },
                        { type: 'email', message: '请正确输入邮箱格式', trigger: 'blur' }
                    ],
                    remarks: [
                        { required: false, message: '', trigger: 'blur' }
                    ],
                    single: [
                        { required: false}
                    ],
                },

                selection:'',
                modal_reset:false,
                modal_add:false,
                modal_detail:false,
                detail_data:{},
                detail_list:[
                    {
                        title: '',
                        sub_items: [
                            {
                                enable: true,
                                type: 'label',
                                label:'管理员账号：',
                                name: 'admin_name',
                                item_style:'width:50%',
                            },{
                                enable: true,
                                type: 'label',
                                label:'管理员类型：',
                                name: 'admin_type',
                                value:'',
                                item_style:'width:50%',
                            },
                            {
                                enable: true,
                                type: "label",
                                label:'联系人：',
                                name: "contact_person",
                                value: "",
                                item_style:'width:50%',
                            },
                            {
                                enable: true,
                                type: "label",
                                label:'座机：',
                                name: "admin_telephone",
                                value: "",
                                item_style:'width:50%',
                            },
                            {
                                enable: true,
                                type: "label",
                                label:'手机：',
                                name: "admin_cellphone",
                                value: "",
                                item_style:'width:50%',
                            },{
                                enable: true,
                                type: "label",
                                label:'邮箱：',
                                name: "admin_email",
                                value: "",
                                item_style:'width:50%',
                            },
                            {
                                enable: true,
                                type: "label",
                                label:'状态：',
                                item_style:"",
                                name: "admin_status",
                                value: "",
                                item_style:'width:50%',
                            },
                            {
                                enable: true,
                                type: "label",
                                label:'备注：',
                                name: "comment",
                                value: "",
                                item_style:'width:100%',
                            }
                        ]
                    },
                ],
                table_data:[
                    {
                        'admin_id':1,
                        'admin_name':'test',
                        'contact_person':'lisa',
                        'admin_cellphone':'123456789',
                        'admin_email':'lisa.wow@outlook.com',
                        'admin_status':'启用'
                    },
                    {
                        'admin_id':2,
                        'admin_name':'test2',
                        'contact_person':'莉莎',
                        'admin_cellphone':'123456789',
                        'admin_email':'lisa.wow@outlook.com',
                        'admin_status':'禁用'
                    },
                ],
                table_columns:[
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '管理员账号',
                        key: 'admin_name',
//                        width: 80,
                        render:(create,data) => {
                        return create('div',{
                            style: {
                                width: '100%',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap'
                            },
                            domProps: {
                                title:data.row.admin_name
                            }
                        },data.row.admin_name)
                    }
            },
//            {
//                title: '管理员类型',
//                key: 'admin_type',
////                width: 80,
//                render:(create,data) => {
//                return create('div',{
//                    style: {
//                        width: '100%',
//                        overflow: 'hidden',
//                        textOverflow: 'ellipsis',
//                        whiteSpace: 'nowrap'
//                    },
//                    domProps: {
//                        title:data.row.admin_type
//                    }
//                },data.row.admin_type)
//            }
//        },
            {
                title: '联系人',
                        key: 'contact_person',
//                width: 80,
                        render:(create,data) => {
                    return create('div',{
                        style: {
                            width: '100%',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                        },
                        domProps: {
                            title:data.row.contact_person
                        }
                    },data.row.contact_person)
                }
            },
            {
                title: '电话',
                        key: 'admin_cellphone',
//                width: 80,
                    render:(create,data) => {
                return create('div',{
                    style: {
                        width: '100%',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                    },
                    domProps: {
                        title:data.row.admin_cellphone
                    }
                },data.row.admin_cellphone)
            }
            },
            {
                title: '邮箱',
                        key: 'admin_email',
//                width: 80,
                    render:(create,data) => {
                return create('div',{
                    style: {
                        width: '100%',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                    },
                    domProps: {
                        title:data.row.admin_email
                    }
                },data.row.admin_email)
            }
            },
            {
                title: '备注',
                        key: 'comment',
//                width: 80,
                    render:(create,data) => {
                return create('div',{
                    style: {
                        width: '100%',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                    },
                    domProps: {
                        title:data.row.comment
                    }
                },data.row.comment)
            }
            },
            {
                title: '状态',
                        key: 'admin_status',
//                width: 80,
                    render:(create,data) => {
                return create('div',{
                    style: {
                        width: '100%',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                    },
                    domProps: {
                        title:data.row.admin_status
                    }
                },data.row.admin_status)
            }
            },
            {
                title: '操作',
                key: 'action',
//              width: 100,
                align: 'center',
                    render: (create,params) => {
                return create('div', [
                    create(modalButton, {
                        props:{
                            title:(params.row.admin_status == "启用") ? '禁用' : '启用',
//                            title: '禁用',
                            functions: this.disable,
                            params:[params.row.admin_id,params.row.admin_name],
                            isPower:this.isPower,
                        }
                    }),
                    create(modalButton, {
                        props:{
//                            title:(params.row.admin_status == "启用" && params.row.admin_type != '系统管理员' && params.row.admin_name != 'config' && params.row.admin_name != 'audit') ? '重置' : '不可重置',
                            title: '重置',
                            functions: this.reset,
                            params:[params.row.admin_id,params.row.admin_name],
                            isPower:this.isPower,
                        }
                    }),
                    create(modalButton, {
                        props:{
//                            title:(params.row.admin_status == "启用" && params.row.admin_type != '系统管理员' && params.row.admin_name != 'config' && params.row.admin_name != 'audit') ? '删除' : '不可删除',
                            title: '删除',
                            functions: this.delete,
                            params:[params.row.admin_id],
                            isPower:this.isPower,
                        }
                    }),
                ]);
            },

            },
        ],
            search:'',
            total_num: 0,
            current_page: 1,
            page_size: 12,
            }
        },
        props:['name'],
        components: {},
        mounted() {
            this.login_name = getStore('user_name')
        },
        created() {

        },
        methods: {

            seek(){},
            addmodel(){},
            deletemodel(){
                var self = this;
                var checked_items_id = [];
                var checked_items_name = [];
//                console.log(self.selection)
                if(typeof self.selection=="object"&&self.selection.constructor==Array&&self.selection.length >0){
                    for (var i = 0; i < self.selection.length; i++) {
                        checked_items_id.push(self.selection[i].admin_id);
                        checked_items_name.push(self.selection[i].admin_name);
                    }
                    var ids = checked_items_id.join("&");
                    var names = checked_items_name.join("&");
//                    console.log(ids,names)
                    self.delete(ids)
                }else{
                    this.$Message.warning('请选择需要删除的管理员！');
                }
            },
            startmodel(admin_ids, name){
                var self = this;
                var checked_items_id = [];
                var checked_items_name = [];
//                console.log(self.selection)
                if(typeof self.selection=="object"&&self.selection.constructor==Array&&self.selection.length >0){
                    for (var i = 0; i < self.selection.length; i++) {
                        checked_items_id.push(self.selection[i].id);
                        checked_items_name.push(self.selection[i].admin_name);
                    }
                    var ids = checked_items_id.join("&");
                    var names = checked_items_name.join("&");
//                    console.log(ids,names)
                    if(confirm("确认要启用这些管理员吗？")){
//                        enable_items(admin_ids, name).then(res => {
////                            console.log(res)
//                            if(res.status == 0){
//                            self.$Message.success("启用成功!");
//                        }else{
//                            self.$Message.error(res.mesg);
//                        }
//                    })
                    }else{
                        self.selection = [];
                    }
                }else{
                    self.$Message.warning('请选择要启用的管理员！');
                }
                self.getStore();
            },
            disablemodel(){
                var self = this;
                var checked_items_id = [];
                var checked_items_name = [];
                if(typeof self.selection=="object"&&self.selection.constructor==Array&&self.selection.length >0){
                    for (var i = 0; i < self.selection.length; i++) {
                        checked_items_id.push(self.selection[i].admin_id);
                        checked_items_name.push(self.selection[i].admin_name);
                    }
                    var ids = checked_items_id.join("&");
                    var names = checked_items_name.join("&");
//                    console.log(ids,names)
                    self.disable(ids,names)
                }else{
                    this.$Message.warning('请选择需要禁用的管理员！');
                }
            },
            select(){},
            change(page) {
                this.current_page = page;
//                this.getStore();
            },
            select(selection){
                this.selection = selection;
            },
            addmodel(){
                this.modal_add = true;
            },
            add_cancel(){
                this.modal_add = false;
            },
            add_ok(name){
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('添加成功!');
                    } else {
                        this.$Message.error('请正确填写表单!');
            }
            })
            },
            getStore (){

            },
            delete(admin_ids){
                var self = this;
                if(confirm("确认要删除管理员吗？")){
                      console.log(admin_ids)
//                    delete_data(admin_ids, name).then(res => {
////                        console.log(res)
//                        if(res.status == 0){
//                        self.$Message.success("删除成功!");
//                    }else{
//                        self.$Message.error(res.mesg);
//                    }
//                })
                }else{
                    self.selection = [];
                }
            },
            disable(admin_ids, name){
                var self = this;
                if(confirm("确认要禁用管理员吗？")){
                    console.log(admin_ids, name)
//                    disable_items(admin_ids, name).then(res => {
////                        console.log(res)
//                        if(res.status == 0){
//                        self.$Message.success("禁用成功!");
//                    }else{
//                        self.$Message.error(res.mesg);
//                    }
//                })
                }else{
                    self.selection = [];
                }
//                self.getStore();
            },
            reset(id,name){
                this.formReset.admin_id = id;
                this.formReset.admin_name = name;
                this.modal_reset = true;
            },
            reset_ok(){
                console.log('修改成功')
                this.modal_reset = false;
//                if(self.formReset.new_pass != self.formReset.pass){
//                    self.$Message.error('两次密码不一致！');
//                    return;
//                }

                self.getStore();
            },
            reset_cancel(){
                this.modal_reset = false;
            },
            getStore(){},

        },
        beforeDestroy:function(){

        },
    }

</script>

<style type="text/css">
    #user-manager .toolbar-left {
        float: left;
        padding-left: 10px;
    }

    #user-manager .toolbar-right {
        float: right;
        padding-right: 10px;
    }

    #user-manager .table-box {
        width: 100%;
        padding: 0 10px;
    }

    #user-manager .page{
        width: 100%;
        /*background: #ffffff;*/
        padding: 10px;
        text-align: right;
    }

    #user-manager .page .ivu-page{
        font-size: 12px;
        line-height: 1.5;
        color: rgb(73, 80, 96);
    }

    #user-manager .ivu-table-tip table td{
        width: auto !important;
    }



</style>