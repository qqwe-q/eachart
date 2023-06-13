var chartDom = document.getElementById('main4');
var myChart = echarts.init(chartDom);
var center = {
    grid: {
        left: '4%',
        top:'5%',
        right: '5%',
        bottom: '0%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {//y轴文字的配置
        textStyle: {
             color: "#7581A9",
        },
       // formatter: '{value} %'//y轴的每一个刻度值后面加上‘%’号
    },
        data: ['01', '03', '05', '07', '09', '12', '14','16','18','20','22','24','26']
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: "#172057"
            }
        },
        splitLine:{
            show:true,
            lineStyle:{
                type:'solid',
                color: "#172057"
            }
        },
        axisLabel: {//y轴文字的配置
        textStyle: {
             color: "#7581A9",
        },
       // formatter: '{value} %'//y轴的每一个刻度值后面加上‘%’号
    },
    },
    series: [
        {
            data: [3, 4, 3, 4, 3, 6, 2, 4, 2, 4, 3, 4, 3, 4],
            type: 'line',
            smooth:true,
            symbol: 'none',  //取消折点圆圈
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                        { offset: 0, color: '#084353' },
                            { offset: 1, color: '#0C2E5E' }
                        ]
                    )
                }
            },
            itemStyle: {
                normal: {
                    normal: {
                        borderType: "solid",
                        color: '#FAFAFA', //拐点颜色
                        //borderColor: '#0F6F97',拐点边框颜色
                        borderWidth: 0//拐点边框大小
                    },
                    lineStyle: {
                        color: '#0B538D' //改变折线颜色
                    }
                }
            },
        },
        {
            data: [5, 3, 6, 1, 5, 3, 6, 4, 6, 4, 8, 2, 4, 6],
            type: 'line',
            symbol: 'none', 
            smooth:true,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            { offset: 0, color: '#084353' },
                            { offset: 1, color: '#0C2E5E' }
                        ]
                    )
                }
            },
            itemStyle: {
                normal: {
                    normal: {
                        borderType: "solid",
                        color: '#FAFAFA', //拐点颜色
                        borderColor: '#0F6F97',//拐点边框颜色
                        borderWidth: 0//拐点边框大小
                    },
                    lineStyle: {
                        color: '#0EAC7B' //改变折线颜色
                    }
                }
            },
        }
    ]
};
myChart.setOption(center);