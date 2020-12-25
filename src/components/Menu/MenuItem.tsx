import React, {useState, useContext} from 'react';
import {ItemContext} from './Menu';
const classNames = require('classnames');


interface IProps {
    className?: string,
    children?: React.ReactNode,
    style?: React.CSSProperties;
    disabled?: boolean;
    keyNumber: number
}

type LiProps = React.LiHTMLAttributes<HTMLElement>
export type MenuItemProps = Partial<LiProps> & IProps

const MenuItem: React.FC<MenuItemProps> = (props) => {
    const {className, children, style, disabled, onSelect, keyNumber, ...restProps} = props
    const context = useContext(ItemContext)
    const classes = classNames('menu-item', className, {
        'is-disabled': disabled,
        'is-active': context.active === keyNumber && !disabled
    })

    const selectItem = () => {
        if(!disabled) {
            context.onSelect(keyNumber)
        }
    }

    return (
        <li className={classes} style={style} onClick={selectItem} {...restProps}>
            {children}
        </li>
    )
}

export default MenuItem