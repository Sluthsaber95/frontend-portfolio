import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import NavArrow from '../NavArrow'
import NavBar from '../NavBar'
import NavColumn from '../NavColumn'
import OptionColumn from '../NavColumn/OptionColumn'
import ReactIcon from '../../public/react-icon.svg'
import './index.css'

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
  .add('with a singleCardUsed main option', () =>
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

const NavArrowDecorator = (storyFn) => (
  <div className="nav-arrow-height centralise-component">
    <div className="nav-arrow-container">
      {storyFn()}
    </div>
  </div>
)


storiesOf('NavArrow', module)
  .addDecorator(NavArrowDecorator)
  .add('plain card with no decoration (Default)', () => 
    <NavArrow />
  )
  .add('single card denoting next destination', () =>
    <NavArrow
      next={true}
      title='Core Concepts'
      singleCardUsed={true}
    />
  )
  .add('single card denoting previous destination', () =>
    <NavArrow
      next={false}
      title='Basics'
      singleCardUsed={true}
    />
  )
  .add('double cards denoting both previous and next destinations', () => 
    <Fragment>
      <NavArrow
        next={false}
        title='Basics'
        singleCardUsed={false}
      />
      <NavArrow
        next={true}
        title='Core Concepts'
        singleCardUsed={false}
      />
    </Fragment>
  )