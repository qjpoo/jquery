(function($) {
    // 需要给jquery的原型添加方法
    $.fn.bgColor = function(color) {
        console.log($(this))
        this.css('backgroundColor', color)

        // 返回值 
        return this
    }

}(jQuery));