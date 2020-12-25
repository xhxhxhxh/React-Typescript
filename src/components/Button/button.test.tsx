import React from 'react';
import { render } from '@testing-library/react'
import Button, { ButtonType, ButtonSize }from './Button'

describe('test button component', () => {
    test('should render the correct default button', () => {
        const wrapper = render(<Button size={ButtonSize.large}>Nice</Button>)
        const element = wrapper.getByText('Nice')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('BUTTON')
        expect(element).toHaveClass('btn btn-default')
    })
})