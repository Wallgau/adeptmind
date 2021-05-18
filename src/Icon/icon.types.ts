import SVG_MAP from '../helpers/SVG';

export type IconName = keyof typeof SVG_MAP;

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
    name: IconName;
}