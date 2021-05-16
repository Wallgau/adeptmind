import classNames from 'classnames';
import React from 'react';

import { IconName } from './icon.types';

import SVG_MAP from '../helpers/SVG';

import styles from './Icon.module.scss';

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
    <span className={classNames(styles.icon, styles[size], className)} {...props}>
        {SVG_MAP[name]}
    </span>
);

export default Icon;