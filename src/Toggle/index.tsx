import React, { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ToggleContainer, ToggleInput, ToggleLabel } from './toggle.styles';
import { ToggleProps } from './toggle.types';

const Toggle: React.FC<ToggleProps> = ({ onChange, values, selectedDisplay }) => (
    <ToggleContainer role='radiogroup'>
        {values.map((value) => {
            const radioId = `radio-${uuidv4()}`;
            return (
                <Fragment key={uuidv4()}>
                    <ToggleInput
                        type="radio"
                        id={radioId}
                        name="toggleInput"
                        className="toggleInput"
                        value={value}
                        aria-checked={selectedDisplay === value}
                        checked={selectedDisplay === value}
                        onChange={() => onChange(value)}
                    />
                    <ToggleLabel isSelected={selectedDisplay === value} className="toggleLabel" htmlFor={radioId}>{value}</ToggleLabel>
                </Fragment>
            )
        })}
    </ToggleContainer>
)

export default Toggle;


