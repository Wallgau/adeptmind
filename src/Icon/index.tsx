import classNames from 'classnames';
import React from 'react';
import { IconProps } from './icon.types';
import { Span } from './icon.styles';
import SVG_MAP from '../helpers/SVG';

const Icon: React.FC<IconProps> = ({
    name,
    ...props
}) => (
    <Span {...props}>
        {SVG_MAP[name]}
    </Span>
);

export default Icon;