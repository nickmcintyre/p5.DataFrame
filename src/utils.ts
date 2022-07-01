import { Table, TableRow } from 'p5';

declare module 'p5' {
  interface Table {
    print(column?: string): void;
    inferTypes(): void;
  }
}

/**
 * Prints a p5.Table to the console.
 *
 * @param {string} [column] the column to print
 */
Table.prototype.print = function _print(column?: string): void {
  const tableObject: object = this.getObject(column);
  // eslint-disable-next-line no-console
  console.table(tableObject);
};

const asNum = (table: Table, column: string): void => {
  table.rows.forEach((row: TableRow) => {
    const num: number = row.getNum(column);
    row.setNum(column, num);
  });
};

Table.prototype.inferTypes = function _inferTypes(): void {
  this.columns.forEach((column: string) => {
    try {
      asNum(this, column);
    } catch (error) {
      // pass silently
    }
  });
};
