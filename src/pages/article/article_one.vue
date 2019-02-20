<template>
    <div id="page-one">
        <div class="pa-title" style="width: 100%;height: 100px;border-bottom: 1px solid rgb(227, 227, 227);">
            <div style="width: 95%;margin: 15px auto;">
                <div style="float: left;">
                    <Icon type="ios-paper-plane" />
                </div>
                <p style="font-size: 24px;font-weight: bold">{{ this.article_title }}</p>
                <div style="color:#858585;font-size: 13px;letter-spacing: 1px;">
                    <span style="margin-right:20px;">2018年10月25日</span>
                    <span>阅读数：</span><span style="margin-right:20px;">11110</span>
                    <span>收藏：</span>
                    <Rate v-model="star" :count = "star_count" :clearable="clearable" />
                    <span style="float: right"><Button type="primary" size="small" ghost @click="edit">编辑</Button></span>
                </div>
            </div>
        </div>
        <div class="page-body" style="border-bottom: 1px solid rgb(227, 227, 227);">
            <div style="margin-top: 15px;padding: 10px;">
                <p>{{ this.article_body }}</p>
            </div>
        </div>
        <div class="leave-msg">
            <div style="width: 95%;margin: 25px auto;">
                <img src="./../../images/banner4.jpg"/>
                <Input type="textarea" v-model="leave_msg" :rows="4" placeholder="相对作者说点什么？" style="width: 72%;margin-left:5px;" />
                <Button type="error" size="small" style="margin-top: 50px;margin-left: 10px;">确认评论</Button>
            </div>

        </div>
    </div>
</template>

<script>

    export default {
        name: 'article_one',
        data() {
            return {
                article_title:'',
                article_body:'',
                star:0,
                star_count:1,
                clearable:true,
                leave_msg:'',
            }
        },
        mounted () {
//            console.log(this.$route.params.article_title)
            if(this.$route.params.article_title != 'undefined' && this.$route.params.article_title){
                this.article_title = this.$route.params.article_title
            }
            if(this.$route.params.article_body != 'undefined' && this.$route.params.article_body){
                this.article_body = this.$route.params.article_body
            }


        },
        components: {},
        created() {
        },
        methods: {

            edit(){
                this.$router.push({name:'article_edit', params: {article_title:this.article_title,article_body: this.article_body}})
            },

        },
        beforeDestroy:function(){

        },


    }


</script>

<style type="text/css">

    #page-one .ivu-icon-ios-paper-plane{
        font-size: 28px;
        margin-right: 5px;
    }

    #page-one .leave-msg img{
        width:40px;
        height:40px;
        border-radius: 20px;
    }
</style>