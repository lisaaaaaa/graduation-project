<template>
    <div id="health-record" style="width:100%;height:100%;background: #3d3744;">
        <div style="width: 85%;min-height:620px;margin:40px auto;text-align: center">
            <div class="record-1" style="width:20%;height:100%;position: absolute;margin-top: -20px;">
                <div style="width: 100%;height:210px;background-color: #e5e4e0;box-shadow: 0 4px 16px 0 rgba(0,0,0,0.2);">
                    <div style="padding: 35px;">
                        <p style="color:#fff;font-size: 20px;font-weight: bold;">岁月漫长，然而值得等待</p>
                        <!--<p style="font-size: 13px">你已坚持<span style="color:darkred;font-size: 21px;font-weight: bold;">10</span>天</p>-->
                        <p style="font-size: 13px;margin-top: 35px">你与<span style="color:coral;font-size: 21px;font-weight: bold;">21520</span>位用户一起努力着！</p>
                    </div>
                </div>
            </div>
            <div class="record-2" style="width:27%;text-align: left;">
                <div style="width: 100%;min-height:300px;">
                    <div style="width:100%">
                        <span class="text-line"></span>
                        <span class="text-name">近一周BMI指数</span>
                    </div>
                    <div id="bmi-img" style="height:233px; width: 100%; padding: 10px"></div>
                </div>

                <div style="width: 100%">
                    <div style="width:100%;margin-top: 35px;">
                        <span class="text-line"></span>
                        <span class="text-name">累计训练</span>
                    </div>
                    <div class="" style="margin-top: 16px;">
                        <span style="color:#fff;font-size: 44px;font-weight: 700;">{{ this.alltime }}</span>
                        <span style="font-size: 12px;color: #8e8893;margin-left:8px;">小时</span>
                    </div>
                    <!--<div class="" style="margin-top: 11px;">-->
                        <!--<span style="color: #fff;">-->
                            <!--<span class="" style="font-size: 26px;font-weight: 700;">4.93</span>-->
                            <!--<span style="font-size: 12px;color: #8e8893;margin-left:8px;">亿次</span>-->
                        <!--</span>-->
                        <!--<span style="color: #fff;margin-left: 25px;">-->
                            <!--<span class="" class="" style="font-size: 26px;font-weight: 700;">388.56</span>-->
                            <!--<span class="" style="font-size: 12px;color: #8e8893;margin-left:8px;">亿千卡</span>-->
                        <!--</span>-->
                    <!--</div>-->
                </div>
            </div>
            <div class="record-3" style="width:35px;float: left">
                <div>
                    <img style="position: relative;top: 35px;" src="./../../images/body.png" />
                    <img style="position: relative;bottom: 35px;left: -75px;" src="./../../images/bodycircle.png" />
                </div>
            </div>
            <div class="record-4" style="width:30%;float: right;">
                <div style="width:100%;min-height: 300px;margin-top: 100px;">
                    <span>近一周的热量摄入情况</span>
                    <div id="heat-img" style="height:233px; width: 100%; padding: 10px"></div>
                </div>
                <div style="width:100%;text-align: left">
                    <span style="font-size: 16px;color: #fff;font-weight: bold;">健康小建议</span>
                    <p style="margin-top:10px;font-size: 14px;color: #8e8893;margin: 16px 0 36px;line-height: 1.6;">{{ this.suggest}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'health_Record',
        data() {
            return {
                BMIdata:[],
                sportsData:[],
                foodData: [],
                alltime:0,
                suggest:'',
            }
        },
        props:[],
        mounted() {
            this.getBMI();
            this.getFood();
            this.getSuggest();
        },
        created() {

        },
        methods: {

            //获取近一周BMI指数
            getBMI(){
                this.BMIdata = [28, 28.3, 28, 28.3, 28, 27.9,28];
                // this.$http.get('http://47.107.125.48:8010/api/v1_0/user',{
                //     params: {
                //         id:'' },},{
                //         emulateJSON: true
                //     }).then(
                //     function (data) {

                //         console.log(data)
                //     }).catch(function (error) {
                //         console.log('获取用户信息失败',error);
                // })
                this.showBMI();
            },

            //获取一周食物热量
            getFood(){
                this.foodData = [1, 1.5, 0.5, 0.7, 1.2, 0.6, 1.2];
                this.getSports();
            },
            //获取一周运动量
            getSports(){
                this.sportsData = [1.4, 1, 1.2, 1, 0.4, 0.9, 1.1];
                this.showHeat();
                for (var i=0;i<this.sportsData.length ;i++ )
                {
                    this.alltime+=this.sportsData[i];
                    console.log(this.alltime);
                }
                this.alltime = this.alltime.toFixed(2);
            },

            //获取健康建议
            getSuggest(){
                var sport = (this.alltime / 7).toFixed(2);
                // console.log(this.alltime)
                var bmi,sug1,sug2;
                for (var i=0;i<this.BMIdata.length ;i++ )
                {
                    bmi+=this.BMIdata[i];
                }
                if(sport >= 1){
                    sug1 = '您的运动达标啦！'
                }else {
                    sug1 = '最近运动的时长不够哦！快抓紧时间锻炼身体吧！'
                }

//BMI指数过轻：低于18.5
//                            //正常：18.5-23.9
//                            //过重：24-27
//                            //肥胖：28-32
//                            //非常肥胖, 高于32
                if(bmi < 18.5){
                    sug2 = '你最近身体比较虚弱，需要多吃一点肉类食品让自己更加强大起来哦！'
                }else if(bmi > 24){
                    sug2 = '你是不是偷吃了很多东西呢！体重超标啦！注意饮食哦要记得多吃蔬菜水果哦！'
                }else {
                    sug2 = '您的BMI指数是正常的哦！'
                }

                this.suggest = '系统根据你最近一周的数据得出：' + sug1 + sug2 + '请根据我们的建议保持身体健康吧！祝你好运~';
            },

            showBMI(){
                var self = this;
                var echarts = require('echarts');
                var echarts_theme = 'macarons'; //主题
                require('echarts/theme/' + echarts_theme);
                var bmi_Chart = echarts.init(document.getElementById('bmi-img'), echarts_theme);

                bmi_Chart.setOption({
                    title: {
                        text: '25', //最近一次体重
                        subtext: 'BMI',
                        textStyle: {
                            fontWeight: 'bolder',
                            fontSize: 48,
                            color: 'rgb(142, 136, 147)',
                        },
                        subtextStyle: {
                            fontWeight: 'bolder',
                            fontSize: 24,
                            color: '#6b94ff',
                        },
                        right: '5%',
                        top: '5%'
                    },
                    grid: {
                        left: '1%',
                        right: '5%',
                        bottom: '0%',
                        containLabel: true
                    },
                    tooltip: {
//                        trigger: 'axis',
                        textStyle:{
                            align:'left'
                        },
                        formatter:function(value){
//                            //BMI指数过轻：低于18.5
//                            //正常：18.5-23.9
//                            //过重：24-27
//                            //肥胖：28-32
//                            //非常肥胖, 高于32
                            var x = '';
                            var data = value.data;
                            if(data < 18.5 || data == 18.5){
                                x = '过轻：'
                            }else if( data > 18.5 && data < 24){
                                x = '正常：'
                            }else if( (data > 24 && data < 28) || data == 24){
                                 x = "过重："
                            }else if( (data > 28 && data < 32) || data == 28) {
                                x = "肥胖："
                            }else{
                                x = "非常肥胖："
                            }
                            return x + data
                        }
                    },
                    xAxis: [{
                        type: 'category',
                        boundaryGap: false,
                        // data: ['9.23', '10.3', '10.11', '10.15', '10.26', '12.26', '10'],
                        axisLabel: {
                            show: true,
                            interval:0,
                            fontSize: 10,
                            color: 'rgb(142, 136, 147)',
//                            fontWeight: 'bold'
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                    }],
                    yAxis: [{
                        show: false,
                        min: 27.7, //最低为临近BMI线减0.3
                        max: 29, //最高为临近BMI线加0.3或最高值加0.5
                    }],
                    series: [{
                        name: 'BMI',
                        type: 'line',
                        smooth: true,
                        symbol: 'circle',
                        showSymbol: true,
                        lineStyle: {  //图线条
                            normal: {
                                width: 2,
                                color: '#6b94ff',
                                shadowBlur: 6,
                                shadowColor: 'rgba(0, 0, 0, 0.2)',
                                shadowOffsetY: 8,
                            }
                        },
                        areaStyle: {  //图背景
                            normal: {
                                color: new echarts.graphic.LinearGradient(1, 1, 1, 0, [{
                                    offset: 0,
                                    color: 'rgba(133,165,250, 1)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(133,165,250, 0.3)'
                                }]),
                            }
                        },
                        itemStyle: { //图上的小圆圈
                            normal: {
                                color: 'rgb(142, 136, 147)',
                                borderColor: '#ffffff',
                                borderWidth: 12,
                            }
                        },
                        label: {  //图上的bmi值
                            normal: {
                                show: true,
                                position: 'top',
                                color: 'rgb(142, 136, 147)',
                                fontSize: 10
                            }
                        },
                        // data: [28, 28.3, 28, 28.3, 28, 27.9,28]
                        data: this.BMIdata
                    }, ]

                });
                window.addEventListener("resize", () => { bmi_Chart.resize();});
            },

            showHeat(){
                var self = this;
                var echarts = require('echarts');
                var echarts_theme = 'macarons'; //主题
                require('echarts/theme/' + echarts_theme);
                var heat_Chart = echarts.init(document.getElementById('heat-img'), echarts_theme);

                heat_Chart.setOption({
//                    backgroundColor: "#05224d",
                    grid: {
                        top: '8%',
                        left: '1%',
                        right: '1%',
                        bottom: '8%',
                        containLabel: true,
                    },
                    legend: {
                        itemGap: 50,
                        data: ['食物热量(千卡)' ,'运动量(小时)'],
                        textStyle: {
                            color: '#f9f9f9',
                            borderColor: '#fff'
                        },
                    },
                    xAxis: [{
                        type: 'category',
                        boundaryGap: true,
                        axisLine: { //坐标轴轴线相关设置。数学上的x轴
                            show: false,
                            lineStyle: {
                                color: '#f9f9f9'
                            },
                        },
                        axisLabel: { //坐标轴刻度标签的相关设置
                            textStyle: {
                                color: '#d1e6eb',
                                margin: 15,
                            },
                        },
                        axisTick: {
                            show: false,
                        },
                        // data: ['2.1', '2.2', '2.3', '2.4', '2.5', '2.6', '2.7', ],
                    }],
                    yAxis: [{
                        show:false,
                        type: 'value',
                        min: 0,
                        // max: 140,
                        splitNumber: 7,
                        splitLine: {
                            show: false,
                            lineStyle: {
                                color: '#0a3256'
                            }
                        },
                        axisLine: {
                            show: false,
                        },
                        axisLabel: {
                            margin: 20,
                            textStyle: {
                                color: '#d1e6eb',

                            },
                        },
                        axisTick: {
                            show: false,
                        },
                    }],
                    tooltip: {
                        show:false,
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow',
                            label: {
//                                show: true,
                                backgroundColor: '#333',
                                formatter:function(value){
//                                    res += '<br/>'+'<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background: '+value[i].color+'"></span>&nbsp;' + value[i].seriesName + ' : ￥' + value[i].value;
//                                    var res = '食物热量：'+ value.seriesData[0].data + '千卡' + '运动量：' + value.seriesData[1].data + '小时'
//                                    return res
                                }
                            },
                        },


                    },
                    series: [{
                        name: '食物热量(千卡)',
                        type: 'line',
                        // smooth: true, //是否平滑曲线显示
                        symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
                        showAllSymbol: true,
                        symbol: 'emptyCircle',
                        symbolSize: 6,
                        lineStyle: {
                            normal: {
                                color: "#28ffb3", // 线条颜色
                            },
                            borderColor: '#f0f'
                        },
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: '#fff',
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: "#28ffb3",

                            }
                        },
//                        tooltip: {
//                            show: true
//                        },
                        areaStyle: { //区域填充样式
                            normal: {
                                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(0,154,120,1)'
                                },
                                    {
                                        offset: 1,
                                        color: 'rgba(0,0,0, 0)'
                                    }
                                ], false),
                                shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                            }
                        },
                        data: this.foodData
                    }, {
                        name: '运动量(小时)',
                        type: 'bar',
                        barWidth: 20,
//                        tooltip: {
//                            show: true
//                        },
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: '#fff',
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: function(params) {
                                    var colorList = [];
                                    if(params.data < 0.5 || params.data == 0.5){
                                        colorList.push('#af00a9');
                                    }else if(params.data > 0.5 && params.data < 2){
                                        colorList.push('#ffb800');
                                    }else {
                                        colorList.push('#00ed03');
                                    }
//                                    var colorList = ['#af00a9','#ffb800','#00ed03']
                                    return colorList;
                                }
                            }
                        },
                        data:this.sportsData
                    }]
                });
                window.addEventListener("resize", () => { heat_Chart.resize();});

            },

        }
    }

</script>
<style type="text/css">
    #health-record .record-2 .text-line{
        position: relative;
        top: 1px;
        height: 7px;
        border: 2px solid #25c085;
        margin-right: 7px;
    }

    #health-record .record-2{
        float: left;
        width: 20%;
        margin-left: 27%;
        margin-top: 20px;
    }

    #health-record .record-2 .text-title{
        font-size: 12px;
        color: #8e8893;
    }



</style>