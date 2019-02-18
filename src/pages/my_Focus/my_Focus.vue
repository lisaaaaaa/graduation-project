<template>
    <div style="padding: 0 32px 30px;">
        <div id="my-Focus">
            <div class="right-box-title" style="">
                <p class="right-box-name">我的关注</p>
            </div>
            <div class="right-box-content">
                <p style="text-align: right;font-size: 14px;color: #4d4d4d;">共<span>1</span>人</p>
                <div class="Focus-content">
                    <div class="Focus-part" style="height:80px;line-height: 80px;border-bottom: 1px dashed #e0e0e0;">
                        <div style="float:left;width:300px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;text-align: left">
                            <img style="width: 50px;height: 50px;margin-right: 16px;border-radius: 50%;" src="./../../images/forum/man.png"/>
                            <a>陈老爸喜欢吃柚子</a>
                        </div>
                        <div style="float: right">
                           <Button>取消关注</Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

    export default {
        name: 'my_Focus',
        data() {
            return {
            }
        },
        props:[],
        mounted() {

        },
        created() {

        },
        methods: {

        }
    }

</script>
<style type="text/css">

    #my-Focus .right-box-content .Focus-part a:hover{
        color: red;
    }

</style>