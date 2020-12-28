import '../src/styles/index.scss';
import { addDecorator, addParameters } from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import React from 'react'

const wrapperStyle = {
  padding: '20px 40px'
}

const storyWrapper = (stroyFn) => (
  <div style={wrapperStyle}>
    <h3>组件演示</h3>
    {stroyFn()}
  </div>
)
addDecorator(storyWrapper)
addDecorator(withInfo)
// addParameters({info: { inline: true, header: false}})
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  info: { inline: true, header: false}
}

