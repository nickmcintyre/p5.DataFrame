let iris

function preload() {
  iris = loadTable('iris.csv', 'csv', 'header')
}

function setup() {
  noCanvas()
  iris.inferTypes()
  // iris.print()
  iris.describe().print()
}
