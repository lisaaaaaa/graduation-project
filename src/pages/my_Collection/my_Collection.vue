<template>
    <div style="padding: 0 32px 30px;">
        <div id="my-collection">
            <div class="right-box-title" style="">
                <p class="right-box-name">我的收藏</p>
            </div>
            <div class="right-box-content">
                <p style="text-align: right;font-size: 14px;color: #4d4d4d;">共<span>1</span>条</p>
                <div class="collection-content">
                    <div class="collection-part"  style="height:80px;line-height: 80px;border-bottom: 1px dashed #e0e0e0;">
                        <div style="float:left;width:300px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;text-align: left">
                            <a style="">多喝牛奶多喝水啊</a>
                        </div>
                        <div style="float: right">
                            <span class="collection-time" style="color: #ccc;margin-right: 15px;">2019-2-18</span>
                            <span class="collection-cancel" style=""><a>取消</a></span>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

    export default {
        name: 'my_Collection',
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

    #my-collection .right-box-content .collection-part a:hover{
        color: red;
    }

</style>