import React, { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ToggleContainer, ToggleInput, ToggleLabel } from './toggle.styles';
import { ToggleProps } from './toggle.types';

const Toggle: React.FC<ToggleProps> = ({ onChange, values, selectedValue }) => (
    <ToggleContainer role='radiogroup'>
        {values.map((value) => {
            const radioId = `radio-${uuidv4()}`;
            return (
                <Fragment key={uuidv4()}>
                    <ToggleInput
                        type="radio"
                        id={radioId}
                        name="align"
                        className="toggleInput"
                        value={value}
                        aria-checked={selectedValue === value}
                        checked={selectedValue === value}
                        onChange={() => onChange(value)}
                    />
                    <ToggleLabel isSelected={selectedValue === value} className="toggleLabel" htmlFor={radioId}>{value}</ToggleLabel>
                </Fragment>
            )
        })}
    </ToggleContainer>
)

export default Toggle;


