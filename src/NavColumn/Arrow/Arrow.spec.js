import React, { Component } from 'react'
import { shallow, mount } from 'enzyme'
import ArrowComponent from './index'
import '../../enzyme-setup'

describe('Arrow', () => {
  it('renders', () => {
    const Arrow = shallow(<ArrowComponent />)
    expect(Arrow.exists()).toBeTruthy()
  })
  it('should have default props', () => {
    const Arrow = mount(<ArrowComponent />)
    expect(Arrow.props()).toBeTruthy()
  })
  it('should have default prop "picked" set to false', () => {
    const Arrow = mount(<ArrowComponent />)
    const props = Object.keys(Arrow.props()) 
    expect(props.includes('picked')).toBe(true)
  })
  it('should handle props', () => {
    const Arrow = mount(<ArrowComponent />)
    Arrow.setProps({ picked: true})
    expect(Arrow.props().picked).toBe(true)
  })
  it('should toggle the Arrow orientation when clicked', () => {
    const Arrow = mount(<ArrowComponent />)
    const displaySubColumn = jest.fn()
    const ArrowLeft = "<img class=\"icon-arrow\" src=\"arrow-left.svg\">"
    const ArrowDown = "<img class=\"icon-arrow\" src=\"arrow-down.svg\">"
    
    const handleClick = () => {
      Arrow.setProps({ picked: true })
    }
    expect(Arrow.html()).toBe(ArrowLeft)
    
    handleClick()
    expect(Arrow.html()).toBe(ArrowDown)
  })
})