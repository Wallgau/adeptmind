import styled, { css } from 'styled-components';
import { ToggleLabelProps } from './toggle.types'

export const ToggleContainer = styled.div`
    display:inline-block;
    background-color: #EFEFEF;
    border-radius: 0.25rem;
`;

export const ToggleInput = styled.input`
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
`;

export const ToggleLabel = styled.label<ToggleLabelProps>`
    display:inline-block;
    text-transform:capitalize;
    color:#000;
    padding: 1rem;
    ${props => {
        if (props.isSelected) {
            return css`
                border: 0.126rem solid #000; 
                border-right: 0.063rem solid #000;
                font-weight: bold
            `
        }
        return css`
                border: 0.063rem solid #000;
                border-right: 0;
            `
    }};

    &:first-of-type {
        border-radius: 0.25rem 0 0 0.25rem;
    }
    
    &:last-of-type{
        border-radius: 0 0.25rem 0.25rem 0;
        border-right: ${props => props.isSelected ? `0.126rem solid #000` : `0.063rem solid #000`}
    }
`;