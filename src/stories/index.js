import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import NavBar from '../NavBar'
import NavColumn from '../NavColumn'
import OptionColumn from '../NavColumn/OptionColumn'
import ReactIcon from '../../public/react-icon.svg'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('NavBar', module)
  .add('with logo and no options',() => <NavBar options={[]} />)
  .add('with logo and text (Default)', () => <NavBar />)
  .add('with logo and text (Both Customized)', () => {
    const navOptions = [
      { name: 'Docs', active: true },
      { name: 'Releases', active: false },
      { name: 'Guides', active: false },
      { name: 'How To', active: false },
    ]
    return (
      <NavBar 
        logo={ReactIcon}
        options= {navOptions}
      />
    )
  }
  )
storiesOf('NavColumn', module)

  .add('with no options (Default)', () => <NavColumn />)
  .add('with a single main option', () =>
    <NavColumn>
      <OptionColumn
        option='Introduction'
        subOption={['Motivation', 'Core Concepts', 'Three Principles', 'Prior Art', 'Learning Resources', 'Ecosystem', 'Examples']}
        />
    </NavColumn>
  )
  .add('with multiple main options', () =>
    <NavColumn>
      <OptionColumn
        option='Introduction'
        subOption={['Motivation', 'Core Concepts', 'Three Principles', 'Prior Art', 'Learning Resources', 'Ecosystem', 'Examples']}
      />
      <OptionColumn
        option='Basics'
        subOption={['Actions', 'Reducers', 'Store', 'Data Flow', 'Usage with React', 'Example: TodoList']}
      />
      <OptionColumn
        option='Advanced'
        subOption={['Async Actions', 'Async Flow', 'Middle', 'Usage', 'Example: Reddit API', 'Next Steps']}
      />
    </NavColumn>
  )