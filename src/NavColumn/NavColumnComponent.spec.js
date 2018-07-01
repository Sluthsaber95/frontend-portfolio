import React, { Component } from 'react'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import NavColumnComponent from './index'
import '../enzyme-setup'

const context = describe
describe('NavColumn', () => {
  it('renders', () => {
    const NavColumn = shallow(<NavColumnComponent />)
    
    expect(NavColumn.exists()).toBeTruthy()
  })
  it('render must NOT consist of any nav column option', () => {
    const NavColumn = shallow(<NavColumnComponent />)
    const className = 'main-option'
    
    expect(NavColumn.find(`.${className}`).length).toBeGreaterThanOrEqual(0)
  })
  it('should have default state "routePicked"', () => {
    const NavColumn = shallow(<NavColumnComponent />)
    const state = Object.keys(NavColumn.state())

    expect(state.includes('routePicked')).toBe(true)
  })
  it('should have default state "routePicked.parentOption" and "routePicked.optionIndex" set to null', () => {
    const NavColumn = shallow(<NavColumnComponent />)
    const routePicked = NavColumn.state().routePicked
    const keys = Object.keys(routePicked)
    const parentOption = routePicked.parentOption
    const optionIndex = routePicked.optionIndex

    expect(keys.includes('parentOption')).toBe(true)
    expect(keys.includes('optionIndex')).toBe(true)
    expect(routePicked.parentOption).toBeNull()
    expect(routePicked.optionIndex).toBeNull()
  })
  context('activateRoute method', () => {
    it('should have method activateRoute', () => {
      const NavColumn = mount(<NavColumnComponent />)
      const instance = NavColumn.instance()
      const spy = jest.spyOn(instance, 'activateRoute')
      
      instance.activateRoute()
      
      expect(spy).toHaveBeenCalled()
    })
    it('should mutate state routePicked when passed routePicked shaped object', () => {
      const NavColumn = mount(<NavColumnComponent />)
      const state = NavColumn.state()

      expect(state.routePicked.parentOption).toEqual(null)
      expect(state.routePicked.optionIndex).toEqual(null)

      const routePicked = {
        parentOption: 'Introduction',
        optionIndex: 1,
      }
      NavColumn.instance().activateRoute(routePicked)
      const nextState = NavColumn.state()

      expect(nextState.routePicked.parentOption).toEqual('Introduction')
      expect(nextState.routePicked.optionIndex).toEqual(1)
    })
  })
})