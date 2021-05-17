import React, { useMemo } from 'react';
import { generatePagesRange } from '../helpers/pagination';
import Icon from '../Icon';
import { PaginatorProps } from './pagination.types';
import Cell from './Cell';


const Paginator: React.FC<PaginatorProps> = ({
    activePage,
    itemsPerPage,
    totalItems,
    pageNeighbours,
    onChange,
}) => {
    const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

    const pagesRange = useMemo(
        () => generatePagesRange(totalPages, activePage, pageNeighbours),
        [totalPages, activePage, pageNeighbours],
    );

    return totalPages > 1 ? (
        <div>
            <div>
                <Cell
                    disabled={activePage === 0}
                    onClick={() => onChange(0)}
                    label="Navigate to the first page"
                >
                    <Icon name="paginationFirst" />
                </Cell>

                <Cell
                    disabled={activePage === 0}
                    onClick={() => onChange(activePage - 1)}
                    label="Navigate to previous page"
                >
                    <Icon name="paginationPrevious" />
                </Cell>

                {pagesRange.map((pageIndex) => (
                    <Cell
                        key={`paginatorPage-${pageIndex}`}
                        active={activePage === pageIndex}
                        onClick={() => onChange(pageIndex)}
                        label={activePage === pageIndex
                            ? "current page"
                            : "page selected"}
                    >
                        { pageIndex + 1}
                    </Cell>
                ))}

                <Cell
                    disabled={activePage === totalPages - 1}
                    onClick={() => onChange(activePage + 1)}
                    label="Navigate to next page"
                >
                    <Icon name="paginationNext" />
                </Cell>

                <Cell
                    disabled={activePage === totalPages - 1}
                    onClick={() => onChange(totalPages - 1)}
                    label="Navigate to last page"
                >
                    <Icon name="paginationLast" />
                </Cell>
            </div>
        </div >
    ) : null;
};

export default Paginator;
