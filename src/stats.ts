import * as math from 'mathjs';
import { Table } from 'p5';

declare module 'p5' {
  interface Table {
    count(column: string): number | Table;
    mean(column: string): number | Table;
    median(column: string): number | Table;
    max(column: string): number | Table;
    min(column: string): number | Table;
    sd(column: string): number | Table;
  }
}

/**
 * Creates a new p5.Table with an empty row for summary statistics.
 *
 * @param {p5.Table} table the table to summarize
 * @returns                the table and row as an array
 */
const summaryTable = function _summaryTable(table: Table): Table {
  const output: Table = new Table();
  output.columns = table.columns.slice();
  output.addRow();
  return output;
};

/**
 * Computes the number of cells with values in a column or set of columns.
 *
 * @param {string} [column] the name of the column to analyze
 * @returns                 the count, either as a number or as a table
 */
Table.prototype.count = function _count(column): number | Table {
  if (column === undefined) {
    const output: Table = summaryTable(this);
    this.columns.forEach((col: string) => {
      const data: number[] = this.getColumn(col);
      const count: number = data.filter((x) => x).length;
      output.setNum(0, col, count);
    });
    return output;
  }
  const data: number[] = this.getColumn(column);
  return data.filter((x: number) => x).length;
};

/**
 * Computes the mean of a column or set of columns.
 *
 * @param {string} [column] the name of the column to analyze
 * @returns                 the mean, either as a number or as a table
 */
Table.prototype.mean = function _mean(column): number | Table {
  if (column === undefined) {
    const output: Table = summaryTable(this);
    this.columns.forEach((col: string) => {
      const data: number[] = this.getColumn(col);
      const mean: number = math.mean(data);
      output.setNum(0, col, mean);
    });
    return output;
  }
  const data: number[] = this.getColumn(column);
  return math.mean(data);
};

/**
 * Computes the median of a column or set of columns.
 *
 * @param {string} [column] the name of the column to analyze
 * @returns                 the median, either as a number or as a table
 */
Table.prototype.median = function _median(column): number | Table {
  if (column === undefined) {
    const output: Table = summaryTable(this);
    this.columns.forEach((col: string) => {
      const data: number[] = this.getColumn(col);
      const median: number = math.median(data);
      output.setNum(0, col, median);
    });
    return output;
  }
  const data: number[] = this.getColumn(column);
  return math.median(data);
};

/**
 * Computes the maximum of a column or set of columns.
 *
 * @param {string} [column] the name of the column to analyze
 * @returns                 the maximum, either as a number or as a table
 */
Table.prototype.max = function _max(column): number | Table {
  if (column === undefined) {
    const output: Table = summaryTable(this);
    this.columns.forEach((col: string) => {
      const data: number[] = this.getColumn(col);
      const max: number = math.max(data);
      output.setNum(0, col, max);
    });
    return output;
  }
  const data: number[] = this.getColumn(column);
  return math.max(data);
};

/**
 * Computes the minimum of a column or set of columns.
 *
 * @param {string} [column] the name of the column to analyze
 * @returns                 the minimum, either as a number or as a table
 */
Table.prototype.min = function _min(column): number | Table {
  if (column === undefined) {
    const output: Table = summaryTable(this);
    this.columns.forEach((col: string) => {
      const data: number[] = this.getColumn(col);
      const min: number = math.min(data);
      output.setNum(0, col, min);
    });
    return output;
  }
  const data: number[] = this.getColumn(column);
  return math.min(data);
};

/**
 * Computes the standard deviation of a column or set of columns.
 *
 * @param {string} [column] the name of the column to analyze
 * @returns                 the standard deviation, either as a number or as a table
 */
Table.prototype.sd = function _sd(column): number | Table {
  if (column === undefined) {
    const output: Table = summaryTable(this);
    this.columns.forEach((col: string) => {
      const data: number[] = this.getColumn(col);
      const sd: any = math.std(data);
      output.setNum(0, col, sd);
    });
    return output;
  }
  const data: any = this.getColumn(column);
  return math.std(data);
};
