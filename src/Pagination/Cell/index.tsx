import React from 'react';

interface CellProps extends React.HTMLAttributes<HTMLDivElement> {
    disabled?: boolean;
    active?: boolean;
    onClick: () => void;
    label: string;
}

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
