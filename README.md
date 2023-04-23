# p5.tidy
> A grammar of data manipulation for p5.js

[![Build Status](https://github.com/nickmcintyre/p5.tidy/actions/workflows/ci.yml/badge.svg)](https://github.com/nickmcintyre/p5.tidy/actions/workflows/ci.yml)

p5.tidy is an addon library for p5.js that provides an API for wrangling data stored in [p5.Table](https://p5js.org/reference/#/p5.Table) objects. It's written as a minimal wrapper over the excellent [tidy.js](https://pbeshai.github.io/tidy/) library.

View the [Mauna Loa example](/examples/mauna-loa/).
```javascript
let data;

function preload() {
  data = loadTable("co2.csv", "csv", "header");
}

function setup() {
  noCanvas();
  tidy(
    data,
    filter((d) => d.mean > 400),
    debug("Observations greater than 400ppm CO2"),
  );
}

/**
[tidy.debug] Observations greater than 400ppm CO2 -----------------------------
console.table()
(index) date        mean    unc
0       2013-05-01  400.02  0.13
1       2014-04-01  401.51  0.19
2       2014-05-01  401.96  0.21
**/
```

View the [Iris example](/examples/iris/).
```javascript
let data;

function preload() {
  data = loadTable("iris.csv", "csv", "header");
}

function setup() {
  noCanvas();
  tidy(
    data,
    groupBy("Species", [
      summarize({
        min: min("PetalLength"),
        median: median("PetalLength"),
        max: max("PetalLength"),
        variance: variance("PetalLength"),
      }),
    ]),
    debug("PetalLength summary by species"),
  );
}

/**
[tidy.debug] PetalLength summary by species -----------------------------------
console.table()
(index) Species     min  median  max  variance
0       setosa      1.0	 1.5     1.9  0.030106122448979606
1       versicolor  3.0  4.35    5.1  0.22081632653061217
2       virginica   4.5  5.55    6.9  0.30458775510204095
**/
```
