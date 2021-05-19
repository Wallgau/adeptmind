import React, { Fragment, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ToggleContainer, ToggleInput, ToggleLabel } from './toggle.styles';
import { useDispatch, useSelector } from 'react-redux';
import * as productsActions from '../core/productsStore/actions/productActions';
import { ToggleProps } from './toggle.types';
import { ProductsReduxState } from '../core/productsStore/reducer/productsReduxState';

const Toggle: React.FC<ToggleProps> = ({ values }) => {
    const dispatch = useDispatch();
    const selectedDisplay = useSelector((state: ProductsReduxState) => state.view);

    console.log(selectedDisplay);

    useEffect(() => {
        const storageView = sessionStorage.getItem('view');
        if (storageView) dispatch(productsActions.setView(storageView))
    }, [dispatch]);

    const handleChange = (value: string) => {
        sessionStorage.setItem('view', value);
        console.log(value)
        dispatch(productsActions.setView(value))
    }

    return (
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
                            onChange={() => handleChange(value)}
                        />
                        <ToggleLabel isSelected={selectedDisplay === value} className="toggleLabel" htmlFor={radioId}>{value}</ToggleLabel>
                    </Fragment>
                )
            })}
        </ToggleContainer>
    )
}

export default Toggle;


