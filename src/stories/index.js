import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import NavBar from '../NavBar/index'
import LightBulbLogo from '../NavBar/light-bulb-thin.svg'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

const navOptions = [
  { name: 'Docs', active: true },
  { name: 'Releases', active: false },
  { name: 'Guides', active: false },
  { name: 'How To', active: false },
]
storiesOf('NavBar', module)
  .add('with logo',() => <NavBar options={[]} />)
  .add('with logo and text (Default)', () => <NavBar />)
  .add('with logo and text (Customized)', () =>
    <NavBar 
      logo={LightBulbLogo}
      options= {navOptions}
    />
  )
