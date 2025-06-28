/* Vertical selection: Check each column. If a column has a down arrow - check each cell below.
When an arrow is found, put the cell in the list, move to the next cell (below).
If a cell doesn't have an arrow, but is active and placed concecutively after the one with an arrow,
it belongs to the list.
If an inactive cell is encountered, it's not included the search for an arrow starts again.
If an active cell is encountered, but there is no down arrow, it's not a part of a word placed
vertically, so it doesn't belong to the list.
When we run out of elements in the column, move right to the next column 
The algorithm is the same for horizontal selection, the only change is direction */
const createIterationOrder = (crossword, numberOfColumns, numberOfRows, direction) => {
    /* The direction determines whether we iterate over columns or rows (first dimention)
    iteration inside a column/row is in the second dimension */
    const firstDimentionLength = direction === "down" ? numberOfColumns : numberOfRows;
    const secondDimentionLength = direction === "down" ? numberOfRows : numberOfColumns;

    const iterationOrder = [];

    for (let i = 0; i < firstDimentionLength; i++) {

        let isArrowFound = false;

        for (let j = 0; j < secondDimentionLength; j++) {
            // If we first iterate over columns, then the first iteration variable is a column index
            const column = direction === "down" ? i : j;
            const row = direction === "down" ? j : i;

            if (isArrowFound) {
                if (crossword[row][column]?.[1] === direction) {
                    iterationOrder.push([row, column]);
                    continue;
                } else {
                    if (crossword[row][column]) {
                        iterationOrder.push([row, column]);
                        continue;
                    } else {
                        isArrowFound = false;
                        continue;
                    };
                }
            } else {
                if (crossword[row][column]?.[1] === direction) {
                    iterationOrder.push([row, column]);
                    isArrowFound = true;
                    continue;
                } continue;
            }
        }
    }

    return iterationOrder;
}

export { createIterationOrder };