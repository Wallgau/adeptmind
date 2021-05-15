import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ToggleContainer, ToggleInput, ToggleLabel } from './styled';

interface ToggleProps {
    onChange: (value: string) => void;
    values: string[];
    selectedValue: string;
}

const Toggle: React.FC<ToggleProps> = ({ onChange, values, selectedValue }) => (
    <ToggleContainer role='radiogroup'>
        {values.map((value) => {
            const radioId = `radio-${uuidv4()}`;
            return (
                <>
                    <ToggleInput
                        type="radio"
                        id={radioId}
                        name="align"
                        value={value}
                        aria-checked={selectedValue === value}
                        checked={selectedValue === value}
                        onChange={() => onChange(value)}
                    />
                    <ToggleLabel isSelected={selectedValue === value} htmlFor={radioId}>{value}</ToggleLabel>
                </>
            )
        })}
    </ToggleContainer>
)

export default Toggle;


