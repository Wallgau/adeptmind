import React, { useMemo } from 'react';
import { generatePagesRange } from '../helpers/pagination';
import Icon from '../Icon';
import { PaginatorProps } from './pagination.types';
import { PaginationContainer } from './pagination.styles';
import Cell from './Cell';


const Paginator: React.FC<PaginatorProps> = ({
    currentPage,
    itemsPerPage,
    totalItems,
    pageNeighbours,
    onChange,
}) => {
    const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

    const pagesRange = useMemo(
        () => generatePagesRange(totalPages, currentPage, pageNeighbours),
        [totalPages, currentPage, pageNeighbours],
    );

    return totalPages > 1 ? (
        <PaginationContainer>
            <div>
                <Cell
                    disabled={currentPage === 0}
                    onClick={() => onChange(0)}
                    label="Navigate to the first page"
                >
                    <Icon name="paginationFirst" />
                </Cell>

                <Cell
                    disabled={currentPage === 0}
                    onClick={() => onChange(currentPage - 1)}
                    label="Navigate to previous page"
                >
                    <Icon name="paginationPrevious" />
                </Cell>

                {pagesRange.map((pageIndex) => (
                    <Cell
                        key={`paginatorPage-${pageIndex}`}
                        active={currentPage === pageIndex}
                        onClick={() => onChange(pageIndex)}
                        label={currentPage === pageIndex
                            ? "current page"
                            : "page selected"}
                    >
                        { pageIndex + 1}
                    </Cell>
                ))}

                <Cell
                    disabled={currentPage === totalPages - 1}
                    onClick={() => onChange(currentPage + 1)}
                    label="Navigate to next page"
                >
                    <Icon name="paginationNext" />
                </Cell>

                <Cell
                    disabled={currentPage === totalPages - 1}
                    onClick={() => onChange(totalPages - 1)}
                    label="Navigate to last page"
                >
                    <Icon name="paginationLast" />
                </Cell>
            </div>
        </PaginationContainer>
    ) : null;
};

export default Paginator;
