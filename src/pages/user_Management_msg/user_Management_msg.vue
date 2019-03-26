<template>
    <div id="user-manager-leavemsg">
        <div style="margin-bottom: 15px;">
            <span style="margin-left: 15px;color:#676262">管理员-留言板</span>
        </div>
        <div class="content-body">
            <div>
                <Table :columns="columns" :data="data"></Table>
            </div>
        </div>

        <!--删除确认-->
        <Modal v-model="modal" width="360">
            <p slot="header" style="color:#f60;text-align:center">
                <Icon type="ios-information-circle"></Icon>
                <span>删除确认</span>
            </p>
            <div style="text-align:center">
                <p>此留言消息删除后，将无法恢复！</p>
                <p>是否继续删除?</p>
            </div>
            <div slot="footer">
                <Button type="error" size="large" long :loading="modal_loading" @click="del_ok">删除</Button>
            </div>
        </Modal>

        <div class="page">
            <Page :total="total_num" :page-size="page_size" @on-change="change" show-elevator></Page>
        </div>



    </div>
</template>

<script>



    export default {
        name: 'user_Management_msg',
        data() {

            return {
                modal:false,
                index:null,  //存储删除的id
                modal_loading: false,
                total_num: 0,
                current_page: 1,
                page_size: 15,
                columns:[
                    {
                        type: 'expand',
                        width: 50,
                        render: (h, params) => {
                            return h('div', {
//                                props: {
//                                    row: params.row.msg
//                                }
                            },params.row.msg)
                        }
                    },
                    {
                        title: '名称',
                        key: 'name'
                    },
                    {
                        title: '电话号码',
                        key: 'phone'
                    },
                    {
                        title: '电子邮件',
                        key: 'email'
                    },
                    {
                        title:'操作',
                        render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.remove(params.row.userid)
                                    }
                                }
                            }, '删除')
                        ]);
                        }
                    }
                ],
                data:[
                    {
                        userid:'1',
                        name: 'John Brown',
                        phone: 1871231456,
                        email: 'lisa.wow@outlook.com',
                        msg:'我留了一次言，留言内容测试'
                    },
                    {
                        userid:'2',
                        name: 'Lisa',
                        phone: 879654130,
                        email: 'lisa.wow@outlook.com',
                        msg:'第一次访问留言测试系统'
                    },
                    {
                        userid:'2',
                        name: 'Lisa',
                        phone: 879654130,
                        email: 'lisa.wow@outlook.com',
                        msg:'第一次访问留言测试系统'
                    },
                ],
            }
        },
        props:[],
        components: {},
        mounted() {

        },
        created() {

        },
        methods: {
            remove(index){
                console.log(index)
                this.modal = true;
                this.index = index;
            },
            del_ok(){
                console.log(this.index)
                this.modal_loading = true;
                setTimeout(() => {
                    this.modal_loading = false;
                this.modal = false;
                this.$Message.success('删除成功！');
            }, 2000);
            },
            change(page) {
                this.current_page = page;
//                this.getStore();
            }


        },
        beforeDestroy:function(){

        },
    }

</script>

<style type="text/css">

#user-manager-leavemsg .page{
    padding: 15px;
    float: right;
}


</style>