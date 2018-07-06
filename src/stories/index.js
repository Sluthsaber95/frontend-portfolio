import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import NavArrow from '../NavArrow'
import NavBar from '../NavBar'
import NavColumn from '../NavColumn'
import OptionColumn from '../OptionColumn'
import ReactIcon from './react-icon.svg'
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

const multipleOptions = [
  {
    name: "",
    path: "/",
    exact: true,
    main: () => <Introduction />
  },
  {
    name: "Core Concepts",
    path: "/core-concepts",
    exact: true,
    main: () => <CoreConcepts />
  },
  {
    name: "Motivation",
    path: "/motivation",
    exact: true,
    main: () => <Motivation />
  },
  {
    name: "Introduction",
    path: "/introduction",
    exact: true,
    main: () => <Introduction />
  },
];
storiesOf('NavColumn', module)
  .add('with no options (Default)', () => <NavColumn />)
  .add('with a singleCardUsed main option', () =>
    <Router>
      <NavColumn>
        <OptionColumn
          option='Introduction'
          subOption={multipleOptions}
          />
      </NavColumn>
    </Router>
  )
  .add('with multiple main options', () =>
    <Router>
      <NavColumn>
        <OptionColumn
          option='Introduction'
          subOption={multipleOptions}
        />
        <OptionColumn
          option='Basics'
          subOption={multipleOptions}
        />
        <OptionColumn
          option='Advanced'
          subOption={multipleOptions}
        />
      </NavColumn>
    </Router>
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