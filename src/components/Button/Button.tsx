import React, {ButtonHTMLAttributes, AnchorHTMLAttributes, FC} from 'react';
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
    /**设置button 大小 */
    size?: ButtonSize,
    buttonType?: ButtonType,
    /**设置button 禁用 */
    disabled?: boolean,
    href?: string
}

type NativeButtonProps = ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = AnchorHTMLAttributes<HTMLElement>
type ButtonProps = Partial<IProps & NativeButtonProps & AnchorButtonProps>

export const Button: FC<ButtonProps> = (props) => {
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
    buttonType: ButtonType.Default,
    className: '',
}

export default Button;