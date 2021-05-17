export interface CellProps extends React.HTMLAttributes<HTMLDivElement> {
    disabled?: boolean;
    active?: boolean;
    onClick: () => void;
    label: string;
}