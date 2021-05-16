import classNames from 'classnames';
import React from 'react';
import { IconName } from './icon.types';
import SVG_MAP from '../helpers/SVG';
interface IconProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'size'> {
    name: IconName;
    size?: 'very-small' | 'small' | 'medium' | 'large' | 'auto';
}

const Icon: React.FC<IconProps> = ({
    name,
    size = 'auto',
    className = '',
    ...props
}) => (
    <span {...props}>
        {SVG_MAP[name]}
    </span>
);

export default Icon;