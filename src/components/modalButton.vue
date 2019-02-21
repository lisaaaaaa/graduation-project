<template>
        <img id="modal_Button" v-if="isPower" v-bind:src="img_src" alt="" :title="img_title" @click="showDetail" :style="img_style">
</template>

<script>

    export default {
        name: "row_button",
        data () {
            return{
                img_title: this.title,
                img_src: (this.title == '启用') ? require('./../images/base/enable.png')
                        :( (this.title == '禁用') ? require('./../images/base/disable.png')
                        :( (this.title == '删除') ? require('./../images/base/delete.png')
                        :( (this.title == '不可删除') ? require('./../images/base/delete_gray.png')
                        :( (this.title == '重置') ? require('./../images/base/reset.png')
                        :( (this.title == '不可重置') ? require('./../images/base/gray_reset.png') : require('./../images/base/linkna.png')))))),
                img_style: (this.title !='不可启用'&&this.title != '不可删除'&&this.title != '不可重置')? 'cursor: pointer' :'cursor: not-allowed;'
            }
        },
        props: {
            data: Object,
            params: Array,
            functions: Function,
            title: String,
            isPower: Boolean
        },

        methods: {
            showDetail(){
                if(this.title !='不可启用'&&this.title != '不可删除'&&this.title !='不可重置'){
                    var p = this.params;
                    if(this.params.length == 0){
                        this.functions();
                    }else{
                        this.functions.apply(this.functions,p);
                    }
                }

            },
        }

    }
</script>

<style>
    #modal_Button{
        margin-right: 5px;
        /*margin-bottom: -6px;*/
    }
</style>