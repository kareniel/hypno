module.exports = function sleep (t) {
  return new Promise(function (resolve) {
    var timeout = setTimeout(function () {
      clearTimeout(timeout)
      timeout = null
      resolve()
    }, t)
  })
}
