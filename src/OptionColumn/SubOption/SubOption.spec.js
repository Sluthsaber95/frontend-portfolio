import React from 'react'
import { mount } from 'enzyme'
import SubOptionComponent from './index'
import '../../enzyme-setup'

const context = describe

describe('SubOption', () => {
  it('renders', () => {
    const SubOption = mount(<SubOptionComponent />)
    expect(SubOption.exists()).toBe(true)
  })
  it('renders with <h4> and inner text', () => {
    const SubOption = mount(<SubOptionComponent />)
    const Introduction = 'Introduction'
    const option = {
      name: "Introduction",
      path: "",
      exact: true,
      main: () => <div />
    }
    SubOption.setProps({ option })
    const h4 = SubOption.find('h4').html()
    expect(h4).toEqual("<h4>Introduction</h4>")
  })
  it('should have default props "index", "option", "" "routePicked"', () => {
    const SubOption = mount(<SubOptionComponent />)
    const propKeys = Object.keys(SubOption.props())
    expect(propKeys.includes('index')).toBe(true)
    expect(propKeys.includes('option')).toBe(true)
    expect(propKeys.includes('parentOption')).toBe(true)
    expect(propKeys.includes('routePicked')).toBe(true)
  })
  it('should have default prop "index" set to a NaN', () => {
    const SubOption = mount(<SubOptionComponent />)
    const props = SubOption.props()
    const index = props.index
    expect(isNaN(index)).toBe(true)
  })
  it('should have default prop "option" set to a object value', () => {
    const SubOption = mount(<SubOptionComponent />)
    const option = SubOption.props().option

    expect(typeof option).toBe('object')
  })
  it('should have default prop "parentOption" set to a string value', () => {
    const SubOption = mount(<SubOptionComponent />)
    const props = SubOption.props()
    const parentOption = props.parentOption

    expect(typeof parentOption).toBe('string')
  })
  it('should have default prop "routePicked" with keys "parentOption", "optionIndex"', () => {
    const SubOption = mount(<SubOptionComponent />)
    const routePicked = SubOption.props().routePicked

    expect(routePicked).toHaveProperty('parentOption', null)
    expect(routePicked).toHaveProperty('optionIndex', null)
  })
  it('should handle props index', () => {
    const SubOption = mount(<SubOptionComponent />)

    SubOption.setProps({ index: 0 })
    const indexDefault = SubOption.props().index
    expect(indexDefault).toBe(0)

    SubOption.setProps({ index: 1 })
    const indexValueSet = SubOption.props().index
    expect(indexValueSet).toBe(1)
  })
  it('should handle props option and set the h4 name', () => {
    const SubOption = mount(<SubOptionComponent />)
    const Tutorial = 'Tutorial'
    const Introduction = 'Introduction'

    SubOption.setProps({ option: { name: Tutorial } })
    expect(SubOption.find('h4').html()).toBe(`<h4>${Tutorial}</h4>`)

    SubOption.setProps({ option: { name: Introduction } })
    expect(SubOption.find('h4').html()).toBe(`<h4>${Introduction}</h4>`)
  })
  it('should handle props parentOption', () => {
    const SubOption = mount(<SubOptionComponent />)

    SubOption.setProps({ parentOption: 'Tutorial' })
    const parentOptionDefault = SubOption.props().parentOption
    expect(parentOptionDefault).toBe('Tutorial')

    SubOption.setProps({ parentOption: 'Introduction' })
    const parentOptionValueSet = SubOption.props().parentOption
    expect(parentOptionValueSet).toBe('Introduction')
  })
  it('should handle props routePicked', () => {
    const SubOption = mount(<SubOptionComponent />)
    const routePicked = SubOption.props().routePicked
    const parentOptionDefault = routePicked.parentOption
    const optionIndexDefault = routePicked.optionIndex
    
    expect(parentOptionDefault).toBeNull()
    expect(optionIndexDefault).toBeNull()

    SubOption.setProps({
      routePicked: {
        parentOption: 'Introduction',
        optionIndex: 1
      }
    })
    const routePickedSet = SubOption.props().routePicked
    const parentOptionSet = routePickedSet.parentOption
    const optionIndexSet = routePickedSet.optionIndex
    
    expect(parentOptionSet).toBe('Introduction')
    expect(optionIndexSet).toBe(1)
  })
  context('when clicked should append class "route-picked"', () => {
    const SubOption = mount(<SubOptionComponent />)
    const optionDefault = 'Introduction'
    const indexDefault = 0
    const propsDefaultShape = {
      index: indexDefault,
      parentOption: optionDefault,
      routePicked: {
        optionIndex: indexDefault,
        parentOption: optionDefault,
      }
    }
    const setOption = (props) => {
      SubOption.setProps(props)
    }
    const restorePropsToDefault = () => setOption(propsDefaultShape)
    beforeEach(() => {
      restorePropsToDefault() 
    })
    it('should append class "route-picked" when optionIndexPicked is true', () => {
      const className = 'sub-option'
      const appendedClass = 'route-picked'
      const props = SubOption.props()
      let optionIndexPicked = props.routePicked.optionIndex === props.index
      let sameParentPicked = props.parentOption === props.routePicked.parentOption
      
      expect(optionIndexPicked).toBe(true)
      expect(sameParentPicked).toBe(true)
      expect(SubOption.find('div').hasClass(`${className} ${appendedClass}`)).toBe(true)

      setOption({
        index: 2,
        routePicked: {
          optionIndex: indexDefault,
          parentOption: optionDefault
        }
      })
      let nextProps = SubOption.props()
      optionIndexPicked = nextProps.routePicked.optionIndex === nextProps.index
      sameParentPicked = nextProps.parentOption === nextProps.routePicked.parentOption

      expect(optionIndexPicked).toBe(false)
      expect(sameParentPicked).toBe(true)
      expect(SubOption.find('div').hasClass(`${className} ${appendedClass}`)).toBe(false)

      setOption({
        index: indexDefault,
        routePicked: {
          optionIndex: indexDefault,
          parentOption: optionDefault
        }
      })
      const followingProps = SubOption.props()
      optionIndexPicked = followingProps.routePicked.optionIndex === followingProps.index
      sameParentPicked = followingProps.parentOption === followingProps.routePicked.parentOption

      expect(sameParentPicked).toBe(true)
      expect(optionIndexPicked).toBe(true)
      expect(SubOption.find('div').hasClass(`${className} ${appendedClass}`)).toBe(true)
    })
    it('should append class "route-picked" when sameParentPicked is true', () => {
      const className = 'sub-option'
      const appendedClass = 'route-picked'
      const props = SubOption.props()
      let optionIndexPicked = props.routePicked.optionIndex === props.index
      let sameParentPicked = props.parentOption === props.routePicked.parentOption
      
      expect(optionIndexPicked).toBe(true)
      expect(sameParentPicked).toBe(true)
      expect(SubOption.find('div').hasClass(`${className} ${appendedClass}`)).toBe(true)

      setOption({
        parentOption: optionDefault,
        routePicked: {
          optionIndex: indexDefault,
          parentOption: 'Tutorial'
        }
      })
      let nextProps = SubOption.props()
      optionIndexPicked = nextProps.routePicked.optionIndex === nextProps.index
      sameParentPicked = nextProps.parentOption === nextProps.routePicked.parentOption

      expect(sameParentPicked).toBe(false)
      expect(optionIndexPicked).toBe(true)
      expect(SubOption.find('div').hasClass(`${className} ${appendedClass}`)).toBe(false)

      setOption({
        parentOption: 'Tutorial',
        routePicked: {
          optionIndex: indexDefault,
          parentOption: 'Tutorial'
        }
      })
      const followingProps = SubOption.props()
      optionIndexPicked = followingProps.routePicked.optionIndex === followingProps.index
      sameParentPicked = followingProps.parentOption === followingProps.routePicked.parentOption

      expect(sameParentPicked).toBe(true)
      expect(optionIndexPicked).toBe(true)
      expect(SubOption.find('div').hasClass(`${className} ${appendedClass}`)).toBe(true)
    })
  })
})