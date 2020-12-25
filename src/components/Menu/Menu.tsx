import React, {useState, useContext} from 'react';
import MenuItem, {MenuItemProps as MenuItemType} from './MenuItem';
const classNames = require('classnames');

type MenuMode = 'horizontal' | 'vertical'

type SelectType = (key: number) => void

interface IProps {
    className?: string,
    children?: React.ReactNode,
    mode?: MenuMode,
    defaultActive?: number,
    style: React.CSSProperties;
    onSelect: SelectType
}

interface MenuType {
    Item: React.FC<MenuItemType>
}

interface IContextValue {
    active: number,
    onSelect: SelectType
}

type HtmlProps = React.HtmlHTMLAttributes<HTMLElement>
export type MenuProps = Partial<HtmlProps & IProps>

export const ItemContext = React.createContext({active: 0, onSelect: (key: number) => {}});

const Menu: React.FC<MenuProps> & MenuType = (props) => {
    const {className, children, mode, defaultActive, style, onSelect, ...restProps} = props
    const [active, setActive] = useState(defaultActive)
    const classes = classNames('menu', className, {
        'menu-vertical': mode === 'vertical'
    })

    const contextValue: IContextValue = {
        active: active || 0,
        onSelect: (key) => {
            setActive(key)
            onSelect && onSelect(key)
        }
    }
    
    return (
        <ItemContext.Provider value={contextValue}>
            <ul className={classes} {...restProps} style={style} data-testid="menu-test">
            {children}
        </ul>
        </ItemContext.Provider>
        
    )
}

Menu.defaultProps = {
    mode: 'horizontal',
    defaultActive: 0
}

Menu.Item = MenuItem

export default Menu