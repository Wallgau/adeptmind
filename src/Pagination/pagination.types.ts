export interface PaginatorProps {
    activePage: number;
    itemsPerPage: number;
    totalItems: number;
    pageNeighbours: number;
    onChange: (pageNumber: number) => void
}