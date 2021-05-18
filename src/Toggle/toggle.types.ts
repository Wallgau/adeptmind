export interface ToggleProps {
    onChange: (value: string) => void;
    values: string[];
    selectedDisplay: string;
}

export interface ToggleLabelProps {
    isSelected: boolean;
}