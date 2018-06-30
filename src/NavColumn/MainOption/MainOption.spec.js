import React from 'react'
import { shallow, mount } from 'enzyme'
import MainOptionComponent from './index'
import '../../enzyme-setup'

describe('MainOption', () => {
  it('renders', () => {
    const MainOption = shallow(<MainOptionComponent />)
    expect(MainOption.exists()).toBe(true)
  })
  it('renders with Arrow Component', () => {
    const MainOption = shallow(<MainOptionComponent />)
    const Arrow = MainOption.childAt(0).render()[0]
    expect(Arrow.attribs.class).toEqual('icon-arrow')
  })
  it('renders with h4 and inner text ', () => {
    const MainOption = mount(<MainOptionComponent />)
    const Introduction = 'Introduction'

    MainOption.setProps({ option: Introduction})
    const h4 = MainOption.find('h4').html()
    expect(h4).toEqual("<h4>Introduction</h4>")
  })
  it('should have default props "option", "routePicked"', () => {
    const MainOption = mount(<MainOptionComponent />)
    const propKeys = Object.keys(MainOption.props())
    expect(propKeys).toBeTruthy()
    expect(propKeys.includes('option')).toBe(true)
    expect(propKeys.includes('routePicked')).toBe(true)
  })
  it('should have default prop "option" set to a string value', () => {
    const MainOption = mount(<MainOptionComponent />)
    const props = MainOption.props()
    const option = props.option
    expect(typeof option).toBe('string')
  })
  it('should have default prop "routePicked" with keys "parentOption", "optionIndex"', () => {
    const MainOption = mount(<MainOptionComponent />)
    const props = MainOption.props()
    const routePicked = props.routePicked
    expect(routePicked).toHaveProperty('parentOption', null)
    expect(routePicked).toHaveProperty('optionIndex', null)
  })
  it('should handle props option', () => {
    const MainOption = mount(<MainOptionComponent />)
    
    MainOption.setProps({ option: 'Tutorial' })
    const optionValueDefault = MainOption.props().option
    expect(optionValueDefault).toBe('Tutorial')

    MainOption.setProps({ option: 'Introduction'})
    const optionValueSet = MainOption.props().option
    expect(optionValueSet).toBe('Introduction')
  })
  it('should handle props option and set the h4 title', () => {
    const MainOption = mount(<MainOptionComponent />)
    const Tutorial = 'Tutorial'
    const Introduction = 'Introduction'

    MainOption.setProps({ option: Tutorial })
    expect(MainOption.find('h4').html()).toBe(`<h4>${Tutorial}</h4>`)
    
    MainOption.setProps({ option: Introduction})
    expect(MainOption.find('h4').html()).toBe(`<h4>${Introduction}</h4>`)
  })
  it('should handle props routePicked', () => {
    const MainOption = mount(<MainOptionComponent />)
    const routePicked = MainOption.props().routePicked
    const parentOptionDefault = routePicked.parentOption
    const optionIndexDefault = routePicked.optionIndex
    expect(parentOptionDefault).toBeNull()
    expect(optionIndexDefault).toBeNull()

    MainOption.setProps({
      routePicked: {
        parentOption: 'Introduction',
        optionIndex: 1
      }
    })
    const routePickedSet = MainOption.props().routePicked
    const parentOptionSet = routePickedSet.parentOption
    const optionIndexSet = routePickedSet.optionIndex
    expect(parentOptionSet).toBe('Introduction')
    expect(optionIndexSet).toBe(1)
  })
  it('should append class "route-picked" to MainOption when clicked', () => {
    const MainOption = mount(<MainOptionComponent />)
    const Introduction = 'Introduction'
    const className = 'main-option-inline'
    expect(MainOption.find('div').hasClass(className)).toBe(true)

    MainOption.setProps({ option: Introduction})
    const handleClickTitle = () => {
      MainOption.setProps({
        routePicked: {
          parentOption: Introduction,
          optionIndex: Introduction
        }
      })
    }
    handleClickTitle()
    const previousClass = className
    const appendedClass = 'route-picked'
    expect(MainOption.find('div').hasClass(`${previousClass} ${appendedClass}`)).toBe(true)
  })
})