<template>
  <div class="container">
    <div class="bar chart"  name="scale">
        <chart class="chart" :options="bar"></chart>
    </div>
    <div class="pie chart" id="piebox" ref="piebox">
        <chart class="chart" :options="pie"></chart>
    </div>
    <div class="map">
    </div>
  </div>
</template>


<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 300px;
  margin: 0 auto;
}
</style>


<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 饼
require('echarts/lib/chart/pie')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

export default {
  name: 'scale',
  data () {
    return {
      legenmapData: [],
      selected: [],
      seriesData: {},
      nameList : [
        '赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '褚', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许', '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏', '陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦', '章', '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦', '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳', '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常', '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余', '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹', '姚', '邵', '湛', '汪', '祁', '毛', '禹', '狄', '米', '贝', '明', '臧', '计', '伏', '成', '戴', '谈', '宋', '茅', '庞', '熊', '纪', '舒', '屈', '项', '祝', '董', '梁', '杜', '阮', '蓝', '闵', '席', '季', '麻', '强', '贾', '路', '娄', '危'
      ],
      bar: {
        title: { text: 'This is bar' },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      },
      pie: {}
    }
  },
  mounted () {
      this.genData(50);
  },
  created () {
    
  },
  methods: {
    genData (count) {
        var that = this;
      var legenmapData = []
      var seriesData = []
      var selected = {}
      for (var i = 0; i < 50; i++) {
        name =
          Math.random() > 0.65
            ? that.makeWord(4, 1) + "·" + that.makeWord(3, 0)
            : that.makeWord(2, 1);
        legenmapData.push(name);
        seriesData.push({
          name: name,
          value: Math.round(Math.random() * 100000)
        })
        selected[name] = i < 6
      }
      that.legenmapData = legenmapData
      that.seriesData = seriesData
      that.selected = selected
        console.log(that.seriesData)
      that.initOptions();
    },
    initOptions () {
      var that = this
      that.pie = {
        title: {
          text: '同名数量统计',
          subtext: '纯属虚构',
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          type: "scroll",
          orient: "vertical",
          right: 10,
          top: 20,
          bottom: 20,
          data: that.legenmapData,
          selected: that.selected
        },
        series: [
          {
            name: '姓名',
            type: 'pie',
            radius: '55%',
            center: ['40%', '50%'],
            data: that.seriesData,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
    },
    makeWord (max, min) {
        var that = this;
        var nameLen = Math.ceil(Math.random() * max + min);
        var name = [];
        for (var i = 0; i < nameLen; i++) {
            name.push(that.nameList[Math.round(Math.random() * that.nameList.length - 1)]);
        }
        return name.join('');
    }
  }
};
</script>
