import React from 'react';
var classNames = require('classnames');

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}

export enum ButtonSize {
    large = 'lg',
    small = 'sm'
}

interface IProps {
    className?: string,
    size?: ButtonSize,
    buttonType?: ButtonType,
    disabled?: boolean,
    children?: React.ReactNode,
    href?: string
}

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = React.AnchorHTMLAttributes<HTMLElement>
type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps & IProps>

const Button: React.FC<ButtonProps> = (props) => {
    const { className, size, buttonType, disabled, children, href, ...restProps } = props
    const btnClass = classNames('btn', className, {
        [`btn-${size}`]: size,
        [`btn-${buttonType}`]: buttonType,
        disabled: buttonType === ButtonType.Link && disabled
    })
    if(buttonType === ButtonType.Link) {
        return (
        <a className={btnClass} href={href} {...restProps}>
            {children}
        </a>
        )
    }else {
        return (
        <button className={btnClass} disabled={disabled} {...restProps}>
            {children}
        </button>
        )
    }
}

Button.defaultProps = {
    disabled: false,
    buttonType: ButtonType.Default
}

export default Button