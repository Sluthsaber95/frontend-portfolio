import React, { Component } from 'react'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import NavArrowComponent from './index'
import '../enzyme-setup'

const context = describe
describe('NavArrow', () => {
  beforeEach(() => {
    sinon.stub(console, 'error')
  })
  afterEach(() => {
    console.error.restore()
  })

  fit('renders', () => {
    const NavArrow = shallow(<NavArrowComponent />)
    
    expect(NavArrow.exists())
  })

  fit('render with class "nav-arrow"', () => {
    const NavArrow = shallow(<NavArrowComponent />)
    const sectionClass = '.nav-arrow'
    
    expect(NavArrow.find(sectionClass).exists()).toBe(true)
  })

  fit('should have default state hoveredOver', () => {
    const NavArrow = mount(<NavArrowComponent />)
    const stateKeys = Object.keys(NavArrow.state())

    expect(stateKeys.includes('hoveredOver')).toBe(true)
  })

  fit('should have default state hoveredOver set to false', () => {
    const NavArrow = mount(<NavArrowComponent />)
    const state = NavArrow.state()

    expect(state.hoveredOver).toBe(false)
  })
  
  fit('should handle prop "next"', () => {
    const NavArrow = mount(<NavArrowComponent />)

    NavArrow.setProps({
      next: true
    })
    
    expect(NavArrow.find('.arrow-img-next')).toHaveLength(1)

    NavArrow.setProps({
      next: false
    })

    expect(NavArrow.find('.arrow-img-next')).toHaveLength(0)
    expect(NavArrow.find('.arrow-img-prev')).toHaveLength(1)
  })

  fit('should handle prop "next", with "singleCardUsed" set to true', () => {
    const NavArrow = mount(<NavArrowComponent />)
    const singleCardUsed = true
    
    const classesDoNotChange = () => {
      expect(NavArrow.find('.nav-arrow')).toHaveLength(1)
      expect(NavArrow.find('.margin-left')).toHaveLength(0)
      expect(NavArrow.find('.margin-bottom')).toHaveLength(1)
    }
    
    NavArrow.setProps({
      next: true,
      singleCardUsed
    })

    classesDoNotChange()

    NavArrow.setProps({
      next: false,
      singleCardUsed
    })

    classesDoNotChange()
  })
  
  fit('should handle prop "next", with "singleCardUsed" set to false', () => {
    const NavArrow = mount(<NavArrowComponent />)
    const singleCardUsed = false
    
    NavArrow.setProps({
      next: true,
      singleCardUsed
    })

    expect(NavArrow.find('.nav-arrow')).toHaveLength(1)
    expect(NavArrow.find('.margin-left')).toHaveLength(1)
    expect(NavArrow.find('.margin-bottom')).toHaveLength(1)

    NavArrow.setProps({
      next: false,
      singleCardUsed
    })

    expect(NavArrow.find('.nav-arrow')).toHaveLength(1)
    expect(NavArrow.find('.margin-left')).toHaveLength(0)
    expect(NavArrow.find('.margin-bottom')).toHaveLength(1)
  })

  fit('should handle prop "next", with "title" set to type "string"', () => {
    const NavArrow = mount(<NavArrowComponent />)
    const title = "Introduction"
    
    NavArrow.setProps({
      next: "Finale",
      title
    })
    let ArrowComponent = NavArrow.find('.arrow-img-next')
    let LabelComponent = NavArrow.find('.nav-next-wrapper')

    expect(ArrowComponent.exists()).toBe(true)
    expect(LabelComponent.exists()).toBe(true)
    
    NavArrow.setProps({
      next: true,
      title
    })
    ArrowComponent = NavArrow.find('.arrow-img-next')
    LabelComponent = NavArrow.find('.nav-next-wrapper')

    expect(ArrowComponent.exists()).toBe(true)
    expect(LabelComponent.exists()).toBe(true)
  })

  fit('should handle prop "title", with "next" set to type "string"', () => {
    const NavArrow = mount(<NavArrowComponent />)
    const next = "Finale"

    NavArrow.setProps({
      next,
      title: true
    })
    let ArrowComponent = NavArrow.find('.arrow-img-next')
    let LabelComponent = NavArrow.find('.nav-next-wrapper')

    expect(ArrowComponent.exists()).toBe(false)
    expect(LabelComponent.exists()).toBe(false)

    NavArrow.setProps({
      next,
      title: ''
    })
    ArrowComponent = NavArrow.find('.arrow-img-next')
    LabelComponent = NavArrow.find('.nav-next-wrapper')

    expect(ArrowComponent.exists()).toBe(true)
    expect(LabelComponent.exists()).toBe(true)
  })

  context('handleMouseEnter method', () => {

    fit('should have handleMouseEnter method', () => {
      const NavArrow = mount(<NavArrowComponent />)
      const instance = NavArrow.instance()
      const spy = jest.spyOn(instance, 'handleMouseEnter')

      instance.handleMouseEnter()

      expect(spy).toHaveBeenCalled()
    })

    fit('should mutate state hoveredOver, set to true ', () => {
      const NavArrow = mount(<NavArrowComponent />)
      const state = NavArrow.state()

      expect(state.hoveredOver).toEqual(false)

      NavArrow.instance().handleMouseEnter()
      const nextState = NavArrow.state()
      
      expect(nextState.hoveredOver).toEqual(true)
    })

  })

  context('handleMouseLeave method', () => {

    fit('should have handleMouseLeave method', () => {
      const NavArrow = mount(<NavArrowComponent />)
      const instance = NavArrow.instance()
      const spy = jest.spyOn(instance, 'handleMouseLeave')

      instance.handleMouseLeave()

      expect(spy).toHaveBeenCalled()
    })

    fit('should mutate state hoveredOver, set to false', () => {
      const NavArrow = mount(<NavArrowComponent />)
      const state = NavArrow.state()

      expect(state.hoveredOver).toEqual(false)

      NavArrow.setProps({ hoveredOver: true })
      NavArrow.instance().handleMouseLeave()
      const nextState = NavArrow.state()
      
      expect(nextState.hoveredOver).toEqual(false)
    })

  })
})