import React from 'react';
import { CellProps } from './cell.types';
import { Button } from './cell.styles';

const Cell: React.FC<CellProps> = ({
    children,
    active = false,
    disabled = false,
    onClick,
    label,
}) => (
    <Button
        type="button"
        disabled={disabled || active}
        onClick={onClick}
        aria-label={label}
    >
        {children}
    </Button>
);

export default Cell;
