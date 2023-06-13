var main = document.getElementById('main2')
var mychart = echarts.init(main)
var Leftoption1 ={
	grid: {
		left: '4%',
		top:'10%',
		right: '5%',
		bottom: '0%',
		containLabel: true
	},
	//   legend: {
	//     data: ['Allocated Budget', 'Actual Spending']
	//   },
	  radar: {
		// shape: 'circle',
		// 设置雷达图中间射线的颜色
		axisLine: {
							lineStyle: {
								color: "#013A3F",
							},
						},
						splitLine: {
							show: true,
							lineStyle: {
								width: 1,
								color: "#013A3F", // 设置网格的颜色
							},
						},
	
		indicator: [
		  { name: '测试一', max: 6500 },
		  { name: '测试二', max: 16000 },
		  { name: '测试三', max: 30000 },
		  { name: '测试四', max: 38000 },
		  { name: '测试五', max: 52000 },
		  { name: '测试六', max: 25000 }
		],
		name:{
			  textStyle:{color:'#30A5C1'}
			 },
		splitArea: {
			//雷达图背景的颜色，在这儿随便设置了一个颜色，完全不透明度为0，就实现了透明背景
							show: false,
							areaStyle: {
								color: "#3E4D6D", // 图表背景的颜色
							},
						}, 
	  },
	 
	 
	
	  series: [
		{
		  name: 'Budget vs spending',
		  type: 'radar',
		  symbol: 'none',
		  data: [
			{
			  value: [4200, 3000, 20000, 35000, 50000, 18000],
			  name: 'Allocated Budget',
			  itemStyle: {     //此属性的颜色和下面areaStyle属性的颜色都设置成相同色即可实现
								color: '#32AAC6',
								borderColor: '#32AAC6',
							},
							normal: {
								color: 'rgba(255,225,0,.3)',
							},
							areaStyle: {
								color: '#32AAC6',
							},
			},
			  
		  ]
		}
	  ]
	};
		  // 使用刚指定的配置项和数据显示图表。
		  mychart.setOption(Leftoption1)