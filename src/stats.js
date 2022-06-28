/* eslint-disable import/no-extraneous-dependencies */
import * as math from 'mathjs';
import * as p5 from 'p5';

/**
 * Creates a new p5.Table with an empty row for summary statistics.
 *
 * @param {p5.Table} table the table to summarize
 * @returns                the table and row as an array
 */
const summaryTable = function _summaryTable(table) {
  const output = new p5.Table();
  output.columns = table.columns.slice();
  const row = output.addRow();
  return [output, row];
};

/**
 * Computes the number of cells with values in a column or set of columns.
 *
 * @param {string} [column] the name of the column to analyze
 * @returns                 the count, either as a number or as a table
 */
p5.Table.prototype.count = function _count(column) {
  if (column === undefined) {
    const [output, row] = summaryTable(this);
    this.columns.forEach((c) => {
      const data = this.getColumn(c);
      const count = data.filter((x) => x).length;
      row.setNum(c, count);
    });
    return output;
  }
  const data = this.getColumn(column);
  return data.filter((x) => x).length;
};

/**
 * Computes the mean of a column or set of columns.
 *
 * @param {string} [column] the name of the column to analyze
 * @returns                 the mean, either as a number or as a table
 */
p5.Table.prototype.mean = function _mean(column) {
  if (column === undefined) {
    const [output, row] = summaryTable(this);
    this.columns.forEach((c) => {
      const data = this.getColumn(c);
      const mean = math.mean(data);
      row.setNum(c, mean);
    });
    return output;
  }
  const data = this.getColumn(column);
  return math.mean(data);
};

/**
 * Computes the median of a column or set of columns.
 *
 * @param {string} [column] the name of the column to analyze
 * @returns                 the median, either as a number or as a table
 */
p5.Table.prototype.median = function _median(column) {
  if (column === undefined) {
    const [output, row] = summaryTable(this);
    this.columns.forEach((c) => {
      const data = this.getColumn(c);
      const median = math.median(data);
      row.setNum(c, median);
    });
    return output;
  }
  const data = this.getColumn(column);
  return math.median(data);
};

/**
 * Computes the maximum of a column or set of columns.
 *
 * @param {string} [column] the name of the column to analyze
 * @returns                 the maximum, either as a number or as a table
 */
p5.Table.prototype.max = function _max(column) {
  if (column === undefined) {
    const [output, row] = summaryTable(this);
    this.columns.forEach((c) => {
      const data = this.getColumn(c);
      const max = math.max(data);
      row.setNum(c, max);
    });
    return output;
  }
  const data = this.getColumn(column);
  return math.max(data);
};

/**
 * Computes the minimum of a column or set of columns.
 *
 * @param {string} [column] the name of the column to analyze
 * @returns                 the minimum, either as a number or as a table
 */
p5.Table.prototype.min = function _min(column) {
  if (column === undefined) {
    const [output, row] = summaryTable(this);
    this.columns.forEach((c) => {
      const data = this.getColumn(c);
      const min = math.min(data);
      row.setNum(c, min);
    });
    return output;
  }
  const data = this.getColumn(column);
  return math.min(data);
};

/**
 * Computes the standard deviation of a column or set of columns.
 *
 * @param {string} [column] the name of the column to analyze
 * @returns                 the standard deviation, either as a number or as a table
 */
p5.Table.prototype.sd = function _sd(column) {
  if (column === undefined) {
    const [output, row] = summaryTable(this);
    this.columns.forEach((c) => {
      const data = this.getColumn(c);
      const sd = math.std(data);
      row.setNum(c, sd);
    });
    return output;
  }
  const data = this.getColumn(column);
  return math.std(data);
};
