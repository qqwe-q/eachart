var chartDom = document.getElementById('main1');
var myChart = echarts.init(chartDom);
var left1;
left1 = {
    grid: {
		left: '2%',
            top:'8%',
            right: '5%',
            bottom: '5%',
            containLabel: true
	},
    xAxis: {
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false  
        },
        axisLabel: {//y轴文字的配置
        textStyle: {
             color: "#7581A9",
             fontSize: 10,
             margin: 15
        },
       // formatter: '{value} %'//y轴的每一个刻度值后面加上‘%’号
    },
        data: [ '教育培育', '房地产', '生活服务', 'F汽车销售', '酒店服务', '五金建材']
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
            data: [270, 300, 900, 1500, 1200, 600],
            type: 'bar',
            itemStyle: {
                normal: {
                    //这里设置柱形图圆角 [左上角，右上角，右下角，左下角]
                    barBorderRadius: [10, 10, 10, 10]
                }
            },
            barWidth: '50%'
        }
    ]
};
myChart.setOption(left1);
