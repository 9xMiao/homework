let num = 1
function htmlwrite(id = 0, start = '', end = '') {
    let h = document.getElementById('output')
    h.innerHTML = h.innerHTML + '</br>第' + num + '次移动，将' + id + '号圆盘从' + start + '塔上的移动到' + end + '上去。';
    num++

}// 输出文本的函数
function Move(n = 1, start = 'A', cache = 'B', end = 'C') {
    if (n == 1) {
        htmlwrite(1, start, end);
    } else {
        Move(n - 1, start, end, cache);
        htmlwrite(n, start, end);
        Move(n - 1, cache, start, end);
    }
}
function hannuo() {
    let h = document.getElementById('output')
    h.innerHTML = '';
    Move(
        $('#hannuof input[name="n"]').val()
    )
    num = 1;

}