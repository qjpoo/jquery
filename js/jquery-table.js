(function($) {
    // 给$原型添加方法
    $.fn.table = function(arrTableHead, arrTableBody) {
        // console.log(this); // this指当前调用的的jquery对象
        var list = []
        list.push('<table>')
            // 生成表头
        list.push('<thead>')
        list.push('<tr>')
        for (var i = 0; i < arrTableHead.length; i++) {
            list.push('<th>')
            list.push(arrTableHead[i])
            list.push('</th>')
        }
        list.push('</tr>')
        list.push('</thead>')


        // 生成body
        for (var i = 0; i < arrTableBody.length; i++) {
            list.push('<tr>')
            list.push('<td>' + (i + 1) + '</td>')
            for (key in arrTableBody[i]) {
                list.push('<td>')
                list.push(arrTableBody[i][key])
                list.push('</td>')
            }
            list.push('</tr>')
        }



        list.push('</table>')

        this.html(list.join(''))
    }
}(window.jQuery))