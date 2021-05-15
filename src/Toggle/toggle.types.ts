export interface ToggleProps {
    onChange: (value: string) => void;
    values: string[];
    selectedValue: string;
}

export interface ToggleLabelProps {
    isSelected: boolean;
}