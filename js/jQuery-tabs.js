(function($) {
    // 给$的原型添加tabs方法

    /*
    options.tabHeads       对应tab head的li标签
    options.tabHeadsClass  选中heads的class
    options.tabBodys       tabbody栏的主体
    options.tabBodysClass   body是否选中
    */

    $.fn.tabs = function(options) { // 这里的options就是tabs方法里面的那个对象
        // console.log(this); // 谁调用tabs方法, 这里是wrapper, 返回的是一个jquery对象
        var $bigDiv = this;
        // console.log($bigDiv);
        // 给li注册点击事件
        // console.log($bigDiv.find(options.tabHeads));
        // $(options.tabHeads).on('click', function() {
        // console.log($(options.tabHeads)); // 返回jquery对象
        // console.log(options.tabHeads); // .tab-head>li
        // console.log($bigDiv.find('.tab-head>li'));
        // $bigDiv.find(options.tabHeads).on('click', function() {
        // $(options.tabHeads).on('click', function() {
        // $bigDiv.find('.tab-head>li').on('click', function() {
        $bigDiv.find(options.tabHeads).on('click', function() {
            // console.log('11111111111');
            // 给当前的鼠标点击的页签添加options.tabHeadsClass,别的li要移除这个类
            // console.log(this); // 返回的是一个dom对象 <li>页签2</li>
            // console.log($(this)); // 返回的是一个jquery对象 m.fn.init [li, context: li]
            $(this).addClass(options.tabHeadsClass).siblings().removeClass(options.tabHeadsClass)

            // 获取当前点击的页面的索引
            var idx = $(this).index()
            console.log($(this).index());

            // 获取索引一致的页面, 给它添加options.tabBodysClass, 其它的移除这个类
            console.log($bigDiv.find(options.tabBodysClass).eq(idx))
            $bigDiv.find(options.tabBodys).eq(idx).addClass(options.tabBodysClass).siblings().removeClass(options.tabBodysClass)




        })




    }
}(window.jQuery));