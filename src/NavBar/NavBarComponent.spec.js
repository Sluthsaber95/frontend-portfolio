import React, { Component } from 'react'
import { shallow, mount, render } from 'enzyme'
import sinon from 'sinon'
import NavBarComponent from './index'
import '../enzyme-setup'

/*
Test Updates
- More specific error messages for props
Feature Updates
- Passing both icons/texts/customised buttons
Bug Fixes

*/

const context = describe
describe('NavBarComponent', () => {
  beforeEach(() => {
    sinon.stub(console, 'error')
  })
  afterEach(() => {
    console.error.restore()
  })
  it('renders', () => {
    const NavBar = shallow(<NavBarComponent />)
    expect(NavBar.exists()).toBeTruthy()
  })
  it('must consist of logo and at least one option available', () => {
    const NavBar = shallow(<NavBarComponent />)
    const logoSection = NavBar.find('.nav-bar-left')
    const optionsSection = NavBar.find('.nav-bar-right')
    expect(logoSection.children().find('img').exists).toBeTruthy()
    expect(logoSection.children().find('h1').exists).toBeTruthy()
    expect(optionsSection.children().find('button').exists).toBeTruthy()
  })
  it('must consist of only one active navigation option', () => {
    const NavBar = mount(<NavBarComponent />)
    const options = NavBar.props().options;
    const activeOptions = options.filter(option => option.active === true).length
    expect(activeOptions).toBe(1)
  })
  context('state', () => {
    it('has default props.option set to state.option', () => {
      const NavBar = shallow(<NavBarComponent />)
      expect(NavBar.state().options).not.toBeUndefined()
    })
  })
  context('default props', () => {
    it('should pass props.logo as Inventorylogo if no other logo is given', () => {
      const NavBar = mount(<NavBarComponent />)
      expect(NavBar.props().logo).toBe("pakage-logo.svg")
    })
    it('should pass props.logoName as "Inventory" if no other logo text is given', () => {
      const NavBar = mount(<NavBarComponent />)
      expect(NavBar.props().logoName).toBe("Inventory")
    })
    it('should pass props.options with default Array[Objects]', () => {
      const NavBar = mount(<NavBarComponent />)
      const options = NavBar.props().options
      expect(typeof options).toBe('object')
      for(let i = 0; i < options.length; i++){
        expect(typeof options[i].active).toBe('boolean')
        expect(typeof options[i].name).toBe('string')
      }
    })
  })
  context('props', () => {
    it('passing a file that is neither SVG nor PNG should throw an error', () => {
      const NavBar = mount(<NavBarComponent />)
      NavBar.setProps({ logo: ''})
      sinon.assert.calledOnce(console.error);
    })
    it('passing an empty string to props.logoName should throw an error', () => {
      const NavBar = mount(<NavBarComponent />)
      NavBar.setProps({ logoName: ''})
      const expected = ''
      sinon.assert.calledOnce(console.error)
    })
    it('passing an empty object onto the prop options, should not render any option', () => {
      const NavBar = mount(<NavBarComponent />)
      NavBar.setProps({ options: []})
      const options = NavBar.props().options
      expect(options.length).toEqual(0)
    })
    it('passing an empty string to props.options.name should throw an error', () => {
      const NavBar = mount(<NavBarComponent />)
      NavBar.setProps({
        options: [
          { name: '', active: true },
        ]
      })
      const expection = 'Invalid prop `name` supplied to `NavBar`. String must not be zero length. Validation failed. in NavBar'
    })
    /* 
    Please leave this test skipped, as current react component PropType error
    only get called only if, for a specific "propName"
    */
    it('passing option.name to props must NOT surpass length of 15 characters', () => {
      const NavBar = mount(<NavBarComponent />)
      NavBar.setProps({
        options: [
          { name: 'Subscription Signup', active: true },
        ]
      })
      sinon.assert.calledOnce(console.error);
    })
  })
  context('Option Buttons', () => {
    const NavBar = mount(<NavBarComponent />)
    const options = NavBar.props().options
    for(let i = 0; i < options.length; i++){
      test(`When button id=#nav-button-${i} is clicked, it should be the only button with className "nav-current" appended`, () => {
        const activeButtons = options.filter((button, i) => {
          return button.active
        })
        const NavBar = mount(<NavBarComponent />)
        const buttonBeforePressed = NavBar.find(`#nav-button-${i}`)
        const classNameToBeAdded = /nav-current/

        buttonBeforePressed.simulate('click')

        const buttonAfterPress = NavBar.find(`#nav-button-${i}`)
        const newClassNameAppended = buttonAfterPress.props().className
        const optionsActive = options.filter(x => x.active === true).length

        expect(classNameToBeAdded.test(newClassNameAppended)).toBe(true)
        expect(optionsActive).toBe(1)
      })
    }
  })
})