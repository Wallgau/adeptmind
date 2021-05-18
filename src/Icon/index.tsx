import classNames from 'classnames';
import React from 'react';
import { IconProps } from './icon.types';
import SVG_MAP from '../helpers/SVG';

const Icon: React.FC<IconProps> = ({
    name,
    ...props
}) => (
    <span {...props}>
        {SVG_MAP[name]}
    </span>
);

export default Icon;