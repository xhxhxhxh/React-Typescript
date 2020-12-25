import React from 'react';
import { render, RenderResult, fireEvent, cleanup } from '@testing-library/react';
import Menu, {MenuProps} from './Menu';

const RenderMenu = (props: MenuProps) => {
    return (
        <Menu {...props}>
            <Menu.Item keyNumber={1}>
              select
            </Menu.Item>
            <Menu.Item keyNumber={2}>
              active
            </Menu.Item>
            <Menu.Item keyNumber={3} disabled>
              disabled
            </Menu.Item>
      </Menu>
    )
}

const props: MenuProps = {
    defaultActive: 2,
    onSelect: jest.fn()
}

const verticalProps: MenuProps = {
    defaultActive: 2,
    mode: 'vertical',
}

let wrapper: RenderResult, menuDom: HTMLElement, activeDom: HTMLElement, disableDom: HTMLElement

describe('test menu component', () => {
    beforeEach(() => {
        wrapper = render(RenderMenu(props))
        menuDom = wrapper.getByTestId('menu-test')
        activeDom = wrapper.getByText('active')
        disableDom = wrapper.getByText('disabled')
    })
    test('should render correct Menu and MenuItem based on default props', () => {
        expect(menuDom).toBeInTheDocument()
        expect(menuDom).toHaveClass('menu')
        expect(activeDom).toHaveClass('menu-item is-active')
        expect(disableDom).toHaveClass('menu-item is-disabled')
    })
    test('click items should change active and call the right callback', () => {
        const thirdItem = wrapper.getByText('select')
        fireEvent.click(thirdItem)
        expect(thirdItem).toHaveClass('menu-item is-active')
        expect(activeDom).not.toHaveClass('is-active')
        expect(props.onSelect).toHaveBeenCalledWith(1)
        fireEvent.click(disableDom)
        expect(disableDom).not.toHaveClass('is-active')
        expect(props.onSelect).not.toHaveBeenCalledWith(3)
    })
    test('test Menu component in vertical mode', () => {
        cleanup()
        const verticalWrapper = render(RenderMenu(verticalProps))
        const menuDom = verticalWrapper.getByTestId('menu-test')
        expect(menuDom).toHaveClass('menu-vertical')
    })
})