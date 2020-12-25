import React from 'react';
import './styles/index.scss';
import Button, { ButtonType, ButtonSize } from './components/Button/Button';
import Menu from './components/Menu/Menu'

function App() {
  const showAlert = () => {
    alert(213)
  }

  return (
    <div className="App">
      <h1>learn react</h1>
      <Button size={ButtonSize.large} onClick={showAlert}>123</Button>
      <Button size={ButtonSize.small} buttonType={ButtonType.Primary}>123</Button>
      <Button buttonType={ButtonType.Link} href="http://www.baidu.com">百度</Button>
      <Menu defaultActive={2}>
        <Menu.Item keyNumber={1}>
          11111
        </Menu.Item>
        <Menu.Item keyNumber={2}>
          222222
        </Menu.Item>
        <Menu.Item keyNumber={3}>
          33333
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default App;
