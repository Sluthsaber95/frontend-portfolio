import React, { Component } from 'react'
import { shallow, mount, render } from 'enzyme'
import sinon from 'sinon'
import LabelComponent from './Label'
import '../../enzyme-setup'

const context = describe
describe('Label', () => {
  fit('renders', () => {
    const Label = shallow(<LabelComponent />)

    expect(Label.exists()).toBe(true)
  })
  fit('render must consist of classes', () => {
    const Label = shallow(<LabelComponent />)

    expect(Label.find('.nav-next-wrapper').exists()).toBe(true)
    expect(Label.find('.nav-destination').exists()).toBe(true)
    expect(Label.find('.nav-title').exists()).toBe(true)
  })
  fit('should have default props "next", "title"', () => {
    const Label = mount(<LabelComponent />)
    const props = Object.keys(Label.props())
    expect(props.includes('next')).toBe(true)
    expect(props.includes('title')).toBe(true)
  })
  fit('should have default props "next" set to true', () => {
    const Label = mount(<LabelComponent />)
    const props = Label.props()

    expect(props.next).toEqual(true)
  })
  fit('should handle prop "next"', () => {
    const Label = mount(<LabelComponent />)
    const next = Label.props().next
    let classNavDestination = Label.find('.nav-destination')
    let classPreviousWrapper = Label.find('.nav-prev-wrapper')
    let classNextWrapper = Label.find('.nav-next-wrapper')

    expect(classNextWrapper.exists()).toBe(true)
    expect(classPreviousWrapper.exists()).toBe(false)
    expect(classNavDestination.contains('Next')).toBe(true)

    Label.setProps({ next: false })
    classNavDestination = Label.find('.nav-destination')
    classPreviousWrapper = Label.find('.nav-prev-wrapper')
    classNextWrapper = Label.find('.nav-next-wrapper')

    expect(classNextWrapper.exists()).toBe(false)
    expect(classPreviousWrapper.exists()).toBe(true)
    expect(classNavDestination.contains('Next')).toBe(false)
    expect(classNavDestination.contains('Previous')).toBe(true)
  })
  fit('should have default props "title" set to "Foundation"', () => {
    const Label = mount(<LabelComponent />)
    const props = Label.props()
    
    expect(props.title).toEqual('Foundation')
  })
  fit('should handle prop "title"', () => {
    const Label = mount(<LabelComponent />)
    let title = Label.props().title

    expect(title).toBe('Foundation')

    Label.setProps({ title: 'Advanced' })
    title = Label.props().title

    expect(title).toBe('Advanced')
  })
})