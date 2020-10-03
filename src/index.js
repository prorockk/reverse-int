module.exports = function reverse (n) {
    if (n<0) {
        n*=-1
    }
    let xui = Array.from(n.toString())
    let ressult= xui.reverse().join('')
    return ressult
}