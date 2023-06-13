var chartDom = document.getElementById('main5');
var myChart = echarts.init(chartDom);
var right1;
right1 = {
    grid: [{
        left: '4%',
        top: '1%',
        right: '5%',
        bottom: '0%',
        containLabel: true
    }],
    title: {
        text: "10,0000",
        subtext: "业绩完成率",
        left: "center",
        top: "78%",
        textStyle: {
            fontSize: 15,
            color: "#FAFAFA",
        },
        subtextStyle: {
            fontSize: 10,
            color: "#33FBF9"
        },

    },
    // legend: {
    //     show: true,
    //     left: '4%',
    //     top: '1%',
    //     icon: "circle",
    //     itemGap: 65,
    //     itemStyle: {
    //         color: "#E95378",
    //         fontSize: 20,
    //     },
    //     textStyle: { color: "#FAFAFA", fontSize: 20, },

    // },
    series: [
        {
            type: 'gauge',
            name: "规模业绩（新客组）",
            radius: '20%',
            center: [180, 110],// 的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
            radius: 100,
            axisLine: {
                lineStyle: {
                    width: 20,
                    color: [
                        [0.2, '#FD4794'],
                        [0.8, '#4199D8'],
                        [1, '#33FBF9']
                    ]
                }
            },
            // 指针
            pointer: {
                icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
                length: '65%',
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: "rgba(23,38,79, 0)" // 0% 处的颜色
                        },
                        {
                            offset: 0.5, color: 'rgba(39,90,153, 0.5)' // 100% 处的颜色
                        }, {
                            offset: 1, color: '#3985D0' // 100% 处的颜色
                        }]
                    }
                },
                width: 15
            },
            // 固定点
            anchor: {
                show: true,
                showAbove: true,
                size: 10,
                offsetCenter: [0, -15],
                itemStyle: {
                    color: "#1B192E"
                }
            },
            axisTick: {
                show: true,
                distance: 3,
                length: 10,
                lineStyle: {
                    color: '#4199D8',
                    width: 2
                }
            },
            // 分隔线
            splitLine: {
                show: false,
                // distance: -30,
                // length: 30,
                // lineStyle: {
                //   color: '#fff',
                //   width: 4
                // }
            },
            axisLabel: {
                color: '#4199D8',
                distance: 23,
                fontSize: 15
            },
            detail: {
                show: false,
                valueAnimation: false,
                // formatter: '10,0000',
                // color: 'inherit'
            },
            data: [
                {
                    value: 50
                }
            ]
        }
    ]
};
myChart.setOption(right1);
