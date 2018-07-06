import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import OptionColumnComponent from './index'
import { shallowWrapper, mountWrapper } from '../util/contextWrap'
import '../enzyme-setup'

const OPTION_TITLE = 'OPTION_TITLE'
const OPTION_ARROW = 'OPTION_ARROW'

const context = describe
describe('OptionColumn', () => {
  let OptionColumn;
  beforeEach(()=> {
    OptionColumn = mountWrapper(<OptionColumnComponent />)
  })
  afterEach(() => {
    OptionColumn.unmount(
      <Router>
        <OptionColumnComponent />
      </Router>
    )
  })
  fit('renders', () => {
    expect(OptionColumn.exists()).toBe(true)
  })
  it('renders with MainOption Component', () => {
    const Arrow = OptionColumn.childAt(0).render()[0]
    expect(Arrow.attribs.class).toEqual('col-option')
  })
  it('renders without SubOption', () => {
    const OptionColumn = mount(<OptionColumnComponent />)
    const SubOptionNode = OptionColumn.find('.sub-option')

    expect(SubOptionNode.exists()).toBe(false)
  })
  it('should have default state mainPicked', () => {
    const OptionColumn = mount(<OptionColumnComponent />)
    const state = Object.keys(OptionColumn.state())

    expect(state.includes('mainPicked')).toBe(true)
  })
  it('should have default state mainPicked set to false', () => {
    const OptionColumn = mount(<OptionColumnComponent />)
    const mainPickedValue = OptionColumn.state().mainPicked

    expect(mainPickedValue).toBe(false)
  })
  it('should have default props "option", "routePicked", "subOption"', () => {
    const OptionColumn = mount(<OptionColumnComponent />)
    const props = Object.keys(OptionColumn.props())

    expect(props).toBeTruthy()
    expect(props.includes('option')).toBe(true)
    expect(props.includes('routePicked')).toBe(true)
    expect(props.includes('subOption')).toBe(true)
  })
  it('should have default prop "option" set to a string value', () => {
    const OptionColumn = mount(<OptionColumnComponent />)
    const props = OptionColumn.props()
    const option = props.option
    expect(typeof option).toBe('string')
  })
  it('should have default prop "routePicked" with keys "parentOption", "optionIndex"', () => {
    const OptionColumn = mount(<OptionColumnComponent />)
    const props = OptionColumn.props()
    const routePicked = props.routePicked

    expect(routePicked).toHaveProperty('parentOption', null)
    expect(routePicked).toHaveProperty('optionIndex', null)
  })
  it('should handle props option', () => {
    const OptionColumn = mount(<OptionColumnComponent />)

    OptionColumn.setProps({ option: 'Tutorial' })
    const optionValueDefault = OptionColumn.props().option
    expect(optionValueDefault).toBe('Tutorial')

    OptionColumn.setProps({ option: 'Introduction' })
    const optionValueSet = OptionColumn.props().option
    expect(optionValueSet).toBe('Introduction')
  })
  it('should handle props routePicked', () => {
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
  it('should have method displaySubColumn', () => {
    const OptionColumn = mount(<OptionColumnComponent />)
    const spy = jest.spyOn(OptionColumnComponent.prototype, 'displaySubColumn')

    expect(OptionColumn.instance().displaySubColumn(OPTION_TITLE)).toBe()
    expect(OptionColumn.state().mainPicked).toBe(true)
  })
})