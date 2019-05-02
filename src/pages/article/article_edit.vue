<template>
    <div id="page_edit" style="width: 95%;margin: 0px auto;">
        <div style="margin-top: 15px;">
            <div class="nav" style="width:100%;height:100%">
                <Input v-model="page_title" type="textarea" :rows="2" placeholder="输入文章标题" />
            </div>
            <div class="content" style="margin-top:15px;">
                <Input v-model="page_content" type="textarea" :rows="29" placeholder="输入文章内容" />
            </div>
            <div class="classification" style="margin-top:15px;">
                <span style="font-size: 14px;color: #4F4F4F;float: left;">个人分类：</span>
                <div style="margin-left: 100px">
                    <RadioGroup v-model="phone">
                        <Radio label="apple">
                            <Icon type="logo-apple"></Icon>
                            <span>健身</span>
                        </Radio>
                        <Radio label="android">
                            <Icon type="logo-android"></Icon>
                            <span>美食</span>
                        </Radio>
                        <Radio label="windows">
                            <Icon type="logo-windows"></Icon>
                            <span>养身</span>
                        </Radio>
                    </RadioGroup>
                </div>

            </div>
            <div style="padding: 10px;">
                <Button style="margin-left: 60px;" type="error" ghost @click="save">发布博客</Button>
                <!--<Button style="margin-left: 15px;" type="error" ghost>保存为草稿</Button>-->
                <Button style="margin-left: 15px;" @click="goback">返回</Button>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'article_all',
        data() {
            return {
                page_title:'',
                page_content:'',
                phone: 'apple',
            }
        },
        mounted () {

            if(this.$route.params.article_title != 'undefined' && this.$route.params.article_title){
                this.page_title = this.$route.params.article_title
            }
            if(this.$route.params.article_body != 'undefined' && this.$route.params.article_body){
                this.page_content = this.$route.params.article_body
            }

        },
        components: {},
        created() {
        },
        methods: {
            save(){
                
                this.$http.post('http://47.107.125.48:8010/api/v1_0/allergy',{
                     id:id,
                 },{emulateJSON:true}).then(function(data){
                     if(data.status === 200){
                        this.$Message.success('编辑成功！');
                     }
                      console.log(data); 
                 }).catch(function(error){
                     this.$Message.success('编辑失败！' + error);
                });
            },
            goback(){
                this.$router.push({name:'article_one',params: {article_title:this.page_title,article_body: this.page_content}})
            },
        },
        beforeDestroy:function(){

        },
    }

</script>

<style type="text/css">

</style>