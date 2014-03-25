module.exports = angular.module('stf/common-ui', [
  require('./safe-apply').name,
  require('./clear-button').name,
  require('./filter-button').name,
  require('./nothing-to-show').name,
  require('./table').name,
  require('./notifications').name
])