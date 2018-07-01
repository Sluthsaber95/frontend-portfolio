import React from 'react'
import { shallow, mount } from 'enzyme'
import OptionColumnComponent from './index'
import '../../enzyme-setup'

const OPTION_TITLE = 'OPTION_TITLE'
const OPTION_ARROW = 'OPTION_ARROW'

const context = describe
describe('OptionColumn', () => {
  fit('renders', () => {
    const OptionColumn = shallow(<OptionColumnComponent />)
    expect(OptionColumn.exists()).toBe(true)
  })
  fit('renders with MainOption Component', () => {
    const OptionColumn = shallow(<OptionColumnComponent />)
    const Arrow = OptionColumn.childAt(0).render()[0]

    expect(Arrow.attribs.class).toEqual('main-option')
  })
  fit('renders without SubOption', () => {
    const OptionColumn = mount(<OptionColumnComponent />)
    const SubOptionNode = OptionColumn.find('.sub-option')

    expect(SubOptionNode.exists()).toBe(false)
  })
  fit('should have default state mainPicked', () => {
    const OptionColumn = mount(<OptionColumnComponent />)
    const state = Object.keys(OptionColumn.state())

    expect(state.includes('mainPicked')).toBe(true)
  })
  fit('should have default state mainPicked set to false', () => {
    const OptionColumn = mount(<OptionColumnComponent />)
    const mainPickedValue = OptionColumn.state().mainPicked

    expect(mainPickedValue).toBe(false)
  })
  fit('should have default props "option", "routePicked", "subOption"', () => {
    const OptionColumn = mount(<OptionColumnComponent />)
    const props = Object.keys(OptionColumn.props())

    expect(props).toBeTruthy()
    expect(props.includes('option')).toBe(true)
    expect(props.includes('routePicked')).toBe(true)
    expect(props.includes('subOption')).toBe(true)
  })
  fit('should have default prop "option" set to a string value', () => {
    const OptionColumn = mount(<OptionColumnComponent />)
    const props = OptionColumn.props()
    const option = props.option
    expect(typeof option).toBe('string')
  })
  fit('should have default prop "routePicked" with keys "parentOption", "optionIndex"', () => {
    const OptionColumn = mount(<OptionColumnComponent />)
    const props = OptionColumn.props()
    const routePicked = props.routePicked

    expect(routePicked).toHaveProperty('parentOption', null)
    expect(routePicked).toHaveProperty('optionIndex', null)
  })
  fit('should handle props option', () => {
    const OptionColumn = mount(<OptionColumnComponent />)

    OptionColumn.setProps({ option: 'Tutorial' })
    const optionValueDefault = OptionColumn.props().option
    expect(optionValueDefault).toBe('Tutorial')

    OptionColumn.setProps({ option: 'Introduction' })
    const optionValueSet = OptionColumn.props().option
    expect(optionValueSet).toBe('Introduction')
  })
  fit('should handle props routePicked', () => {
    const OptionColumn = mount(<OptionColumnComponent />)
    const routePicked = OptionColumn.props().routePicked
    const parentOptionDefault = routePicked.parentOption
    const optionIndexDefault = routePicked.optionIndex

    expect(parentOptionDefault).toBeNull()
    expect(optionIndexDefault).toBeNull()

    OptionColumn.setProps({
      routePicked: {
        parentOption: 'Introduction',
        optionIndex: 1
      }
    })
    const routePickedSet = OptionColumn.props().routePicked
    const parentOptionSet = routePickedSet.parentOption
    const optionIndexSet = routePickedSet.optionIndex

    expect(parentOptionSet).toBe('Introduction')
    expect(optionIndexSet).toBe(1)
  })
  fit('should have method displaySubColumn', () => {
    const OptionColumn = mount(<OptionColumnComponent />)
    const spy = jest.spyOn(OptionColumnComponent.prototype, 'displaySubColumn')

    expect(OptionColumn.instance().displaySubColumn(OPTION_TITLE)).toBe()
    expect(OptionColumn.state().mainPicked).toBe(true)
  })
})