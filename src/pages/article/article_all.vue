<template>
    <div id="page-all">
        <ul style="padding: 15px;background-color: #f5f6f7;box-shadow: #afadad 0px 0.5px 0.1px 0px;">
            <li>
                <div class="listing-main" v-for="item in articlemsg">
                    <div class="title">
                        <div style="float: left;"><Icon type="ios-paper" /></div>
                        <div style="color:#3b4348 ;cursor: pointer;font-weight: bold;">
                            <!--<font style="vertical-align: inherit;">-->
                                <Button style="vertical-align: inherit;" @click="article">{{ item.article_title }}</Button>
                            <!--</font>-->
                        </div>
                    </div>
                    <p class="cont" style="margin-top: 10px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                        {{ item.article_body }}
                    </p>
                    <div class="list-author" style="margin-top: 10px;padding: 4px 3px 4px 0px;border-top:1px solid rgb(227, 227, 227);border-bottom: 1px solid rgb(227, 227, 227);margin-bottom: 15px;font-size: 12px;">
                        <span class="list"><Icon type="ios-calendar" />{{ item.article_time }}</span>
                        <!--<span class="list"><Icon type="ios-contact" /><a :href=" '#/user' ">莉莎</a></span>-->
                        <span class="list"><Icon type="ios-chatboxes" />{{ item.article_num }}<span>评论</span></span>
                        <div style="float: right;">
                            <Button size="small" @click="delete_articl(item.article_id)">删除</Button>
                            <Button size="small" @click="edit(item.article_id)">编辑</Button>
                        </div>
                    </div>
                </div>
            </li>
        </ul>

    </div>
</template>

<script>

    export default {
        name: 'article_all',
        data() {
            return {
                articlemsg: [
                    {
                        article_id:0,
                        article_title:'将WordPress与您的网站集成aaaaaaaa',
                        article_body:'我们中的许多人工作在无休止的任务，浏览器任务，社交媒体，电子邮件，会议，从一件事情到另一件事，从不停顿，永无止境。然后这一天结束了，我们筋疲力尽，而且我们往往很少有人表现出来。然后我们开始下一个',
                        article_time:'2018-1-1',
                        article_num:'10'
                    }
                ]
                
            }
        },
        mounted () {

        },
        components: {},
        created() {
        },
        methods: {
            //删除文章
            delete_articl(id){
                console.log(id);
                this.articlemsg.splice(id,1)
                console.log(this.articlemsg);
            },
            article(){
//                console.log(this.article_title)
                this.$router.push({name:'article_one', params: {article_title:this.article_title,article_body: this.article_body,origin:'content'}})
            },
            edit(id){
                this.$router.push({name:'article_edit', params: {article_title:this.articlemsg[id].article_title,article_body: this.articlemsg[id].article_body}})
            },

        },
        beforeDestroy:function(){

        },


    }

</script>

<style type="text/css">

    #page-all .title Button{
        border: navajowhite;
        background: transparent;
        color: #5a5a5a;
        font-weight: bold;
        font-size: 16px;
        margin-left: -10px;
    }

    #page-all .title Button:hover{
        color: red;
    }

    #page-all .ivu-icon-ios-paper{
        font-size: 18px;
    }

</style>