
export interface ButtonProps {
    text: string;
    color?: ButtonColors;
    width?: boolean;
    action: (textNumber: string) => void;
}

export type ButtonColors = 'darkGray' | 'yellow' | 'lightGrey';

