import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Button, { ButtonType, ButtonSize } from './Button';
// import TableComponent from '../TableComponent/TableComponent'

const DefaultButton = () => (
    <Button onClick={action('clicked')}>default</Button>
)

const TypeButton = () => (
    <>
        <Button buttonType={ButtonType.Primary} onClick={action('clicked')}>Primary</Button>
        <Button buttonType={ButtonType.Danger} onClick={action('clicked')}>Danger</Button>
        <Button buttonType={ButtonType.Link} onClick={action('clicked')} href="http://www.baidu.com">Link</Button>
    </>
)

const SizeButton = () => (
    <>
        <Button onClick={action('clicked')}>default</Button>
        <Button size={ButtonSize.large} onClick={action('clicked')}>large</Button>
        <Button size={ButtonSize.small} onClick={action('clicked')}>small</Button>
    </>
)

storiesOf('Button', module)
    .add('默认 Button', DefaultButton)
    .add('不同尺寸 Button', SizeButton)
    .add('不同类型 Button', TypeButton)