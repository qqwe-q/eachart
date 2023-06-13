var chartDom = document.getElementById('main3');
            var myChart = echarts.init(chartDom);
            let left3 ={
           
        grid: {
            left: '4%',
            top:'1%',
            right: '5%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: [{
            show: false,
        }],
        yAxis: [{
                axisTick:'none',
                axisLine:'none',
                offset:'7',
                axisLabel: {
                        textStyle: {
                            color: 'rgba(255,255,255,.6)',
                            fontSize:'14',
                        }
                    },
                data: ['字段1','字段2','字段3','字段4','字段5','字段6','字段7','字段8','字段9']

            }, {
                axisTick:'none',
                axisLine:'none',
                axisLabel: {
                        textStyle: {
                          color: 'rgba(255,255,255,.6)',
                            fontSize:'14',
                        }
                    },
                data: [1514, 1619, 1623,1968,2158,2456 ,3506,4664,8390]

                 },{
                name:'单位：件',
                    nameGap:'50',
                    nameTextStyle:{
                      color: 'rgba(255,255,255,.6)',
                        fontSize:'16',
                    },
                axisLine:{
                  lineStyle:{
                    color:'rgba(0,0,0,0)'
                  }
                },
                data: [],
        }],
        series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: [25,30,34,40,43,48,52,56,70],
            label:{
                  normal:{
                    show:true,
                    position:'right',
                    formatter:function(param){
                      return param.value + '%';
                    },
                    textStyle:{
                      color: 'rgba(255,255,255,.8)',
                       fontSize:'12',
                    }
                  }
            },
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                            offset: 0,
                            color: '#03c893'
                        },
                        {
                            offset: 1,
                            color: '#0091ff'
                        }
                    ]),
                    barBorderRadius: 15,
                }
            },
            z: 2
        }, {
            name: '白框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: [99.5,99.5,99.5,99.5,99.5,99.5,99.5,99.5,99.5,99.5],
            barWidth: 15,
            itemStyle: {
                normal: {
                  color:'rgba(0,0,0,.2)',
                    barBorderRadius:15,
                }
            },
            z: 1
        }]
    };


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(left3);
