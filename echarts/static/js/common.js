var fun = {
    showChart:function(eleId,option) {
        // 初始化实例
        var myDom = document.getElementById(eleId)
        var myChart = echarts.init(myDom);
        // 渲染
        myChart.setOption(option);
    }
}
