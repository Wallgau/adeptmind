export interface PaginatorProps {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    pageNeighbours: number;
    onChange: (pageNumber: number) => void
}