import React from 'react';
import { CellProps } from './cell.types';

const Cell: React.FC<CellProps> = ({
    children,
    active = false,
    disabled = false,
    onClick,
    label,
}) => (
    <button
        type="button"
        disabled={disabled || active}
        onClick={onClick}
        aria-label={label}
    >
        {children}
    </button>
);

export default Cell;
