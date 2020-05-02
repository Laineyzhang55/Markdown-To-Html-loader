const showdown = require('showdown')
const {getOptions} = require('loader-utils')

module.exports = function (source) {
  //const options = getOptions(this)
  const converter = new showdown.Converter()
  return converter.makeHtml(source)
 }