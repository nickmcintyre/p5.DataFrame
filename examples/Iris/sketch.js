let iris

function preload() {
  iris = loadTable('iris.csv', 'csv', 'header')
}

function setup() {
  noCanvas()
  iris.inferTypes()
  print('Beginning of Iris dataset')
  iris.head(5)
  print('End of Iris dataset')
  iris.tail(5)
  print('Iris dataset summary by column')
  let summary = iris.describe()
  summary.print()
  print('Mean by species')
  let mean = iris.groupby('Species').mean()
  mean.print()
}
