/**
 * Generates range array like [from, from + 1, from + 2, ..., to]
 */
export const generateRange = (from: number, to: number): number[] => [...new Array(to - from + 1)]
    .map((_, i) => from + i);

/**
 * Generates array of pages to display in pagination
 * @param totalPages – total amount of pages in pagination
 * @param currentPage – current selected page
 * @param displayPages – maximum amount of page neighbours to display around the active page
 * @returns array of pages to display, like [0, 1, 2, 3]
 */
export const generatePagesRange = (totalPages: number, currentPage: number, displayPages: number): number[] => {
    for (let i = 0; i < totalPages; i += 1) {
        const startPage = i;
        const endPage = Math.min(i + displayPages, totalPages - 1);

        const middlePage = (endPage + startPage) / 2;
        const lastPage = totalPages - 1;

        if (currentPage <= middlePage) {
            return generateRange(startPage, endPage);
        }

        if (endPage === lastPage) {
            return generateRange(startPage, endPage);
        }
    }

    throw Error('Unexpected error in pagination');
};

export const getCurrentPageItems = <T>(items: T[], currentPage: number, itemsPerPage: number): T[] => items.slice(
    currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage,
);
