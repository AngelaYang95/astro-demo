import React from 'react';
import {primary, secondary} from './button.css';

export type StyleType = "primary" | "secondary";

export interface ButtonType {
    label: string;
    to?: string;
    onClick?: () => void;
    styleType?: StyleType;
}

export const Button = React.memo(({label, to, onClick, styleType="primary"}: ButtonType) => {
    if (to) {
        return (<a href={to}>{label}</a>)
    }
    return (
        <button className={styleType == "primary" ? primary : secondary} onClick={onClick}>{label}</button>
    );
});