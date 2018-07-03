import React, { Component } from 'react'
import { shallow, mount } from 'enzyme'
import { 
  Arrow as ArrowComponent, 
  ArrowLeft as ArrowLeftComponent,
  ArrowRight as ArrowRightComponent,
}  from './Arrow'
import '../../enzyme-setup'

const context = describe
const arrowClass = {
  next: 'arrow-img-next',
  prev: 'arrow-img-prev'
}
const arrowSrc = {
  next: 'arrow-next.svg',
  prev: 'arrow-prev.svg',
  active: {
    next: 'arrow-next-active.svg',
    prev: 'arrow-prev-active.svg',
  }
}

describe('Arrow', () => {
  it('renders', () => {
    const Arrow = shallow(<ArrowComponent />)
    expect(Arrow.exists()).toBe(true)
  })
  it('render with <img>', () => {
    const Arrow = shallow(<ArrowComponent />)
    const img = Arrow.find('img')
    expect(img.exists()).toBe(true)
  })
  it(`should return class="${arrowClass.next}", src="${arrowSrc.next}" when prop left and prop hoveredOver set to false`, () => {
    const Arrow = mount(<ArrowComponent />)
    Arrow.setProps({
      hoveredOver: false,
      left: false,
    })
    expect(Arrow.html()).toBe(`<img class="${arrowClass.next}" src="${arrowSrc.next}">`)
  })
  it(`should return class="${arrowClass.prev}", src="${arrowSrc.prev}" when prop left set to true and prop hoveredOver set to false`, () => {
    const Arrow = mount(<ArrowComponent />)
    Arrow.setProps({
      hoveredOver: false,
      left: true,
    })
    expect(Arrow.html()).toBe(`<img class="${arrowClass.prev}" src="${arrowSrc.prev}">`)
  })
  it(`should return class="${arrowClass.next}", src="${arrowSrc.active.next}" when prop left set to false and prop hoveredOverOver set to true`, () => {
    const Arrow = mount(<ArrowComponent />)
    Arrow.setProps({
      hoveredOver: true,
      left: false,
    })
    expect(Arrow.html()).toBe(`<img class="${arrowClass.next}" src="${arrowSrc.active.next}">`)
  })
  it(`should return class="${arrowClass.prev}", src="${arrowSrc.active.prev}" when prop left and prop hoveredOverOver set to true`, () => {
    const Arrow = mount(<ArrowComponent />)
    Arrow.setProps({
      hoveredOver: true,
      left: true,
    })
    expect(Arrow.html()).toBe(`<img class="${arrowClass.prev}" src="${arrowSrc.active.prev}">`)
  })
})

describe('ArrowLeft', () => {
  it('renders', () => {
    const ArrowLeft = shallow(<ArrowLeftComponent />)
    expect(ArrowLeft.exists()).toBe(true)
  })
  it(`should return class="${arrowClass.prev}", src="${arrowSrc.prev}" when prop left and prop hoveredOver set to false`, () => {
    const ArrowLeft = shallow(<ArrowLeftComponent />)
    ArrowLeft.setProps({
      hoveredOver: false,
    })
    expect(ArrowLeft.html()).toBe(`<img class="${arrowClass.prev}" src="${arrowSrc.prev}"/>`)
  })
  it(`should return class="${arrowClass.prev}", src="${arrowSrc.active.prev}" when prop left and prop hoveredOver set to false`, () => {
    const ArrowLeft = shallow(<ArrowLeftComponent />)
    ArrowLeft.setProps({
      hoveredOver: true,
    })
    expect(ArrowLeft.html()).toBe(`<img class="${arrowClass.prev}" src="${arrowSrc.active.prev}"/>`)
  })
})

describe('ArrowRight', () => {
  it('renders', () => {
    const ArrowRight = shallow(<ArrowRightComponent />)
    expect(ArrowRight.exists()).toBe(true)
  })
  it(`should return class="${arrowClass.next}", src="${arrowSrc.next}" when prop left and prop hoveredOver set to false`, () => {
    const ArrowRight = shallow(<ArrowRightComponent />)
    ArrowRight.setProps({
      hoveredOver: false,
    })
    expect(ArrowRight.html()).toBe(`<img class="${arrowClass.next}" src="${arrowSrc.next}"/>`)
  })
  it(`should return class="${arrowClass.next}", src="${arrowSrc.active.next}" when prop left and prop hoveredOver set to false`, () => {
    const ArrowRight = shallow(<ArrowRightComponent />)
    ArrowRight.setProps({
      hoveredOver: true,
    })
    expect(ArrowRight.html()).toBe(`<img class="${arrowClass.next}" src="${arrowSrc.active.next}"/>`)
  })
})

