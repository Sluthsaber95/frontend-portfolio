import React, { Component } from 'react'
import InventoryIcon from './pakage-logo.svg'
import PropTypes from 'prop-types'
import "./index.css"
import shortId from 'shortid'

class NavBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      options: this.props.options
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(index){
    const options = this.state.options;
    // not possible to use the previous state entirely
    const nextOptions = options.map((option, i) => {
      return i === index
      ? Object.assign({}, option, { active: true })
      : Object.assign({}, option, { active: false })
    })
    this.setState({ options: nextOptions })
  }
  render() {
    let menuOptions = this.state.options.map((option, i) => {
      const id = shortId.generate()
      return option.active
        ? <button onClick={() => this.handleClick(i)} id={`nav-button-${i}`} key={id} className="nav-option nav-current"><span>{option.name}</span></button>
        : <button onClick={() => this.handleClick(i)} id={`nav-button-${i}`} key={id} className="nav-option"><span>{option.name}</span></button>
    }) 
    return (
      <section className="nav-container">
        <nav className="nav-bar-left">
          <img className="logo-size" src={this.props.logo} />
          <h1 className="logo-name">{this.props.logoName}</h1>
        </nav>
        <nav className="nav-bar-right">
          { menuOptions }
        </nav>
      </section>
    )
  }
}

NavBar.propTypes = {
  logo: (props, propName, componentName) => {
    if(!/(.svg|.png)/.test(props[propName])){
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. prop logo should consist of .svg or .png. Extension Validation failed.'
      )
    }
  },
  logoName: (props, propName, componentName) => {
    if (typeof props["logoName"] !== 'string') {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. prop logoName should be of type "string". Extension Validation failed.'
      )
    } 
    else if (props["logoName"] === ''){
      return new Error('Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. prop logoName must NOT consist of an empty string. Validation failed.'
      )
    }
    else if (props[propName].length > 15) {
      return new Error('Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. prop logoName must NOT be above 15 characters. Validation failed.'
      )
    }
  },
  options: PropTypes.arrayOf(PropTypes.shape({
    name: (props, propName, componentName) => {
      if(props.name === undefined){
        return
      }
      else if (typeof props.name !== 'string'){
        return new Error(
          'Invalid prop `' + propName + '` supplied to' +
          ' `' + componentName + '`. Prop must be of type string. Validation failed.'
        )
      }
      else if (!props[propName].length) {
        return new Error(
          'Invalid prop `' + propName + '` supplied to' +
          ' `' + componentName + '`. String must not be zero length. Validation failed.'
        )
      }
      else if (props[propName].length > 15){
        return new Error('Invalid prop `' + propName + '` supplied to' +
          ' `' + componentName + '`. String must not be above 15 characters. Validation failed.'
        )
      }
    },
    active: PropTypes.bool
  }))
}
NavBar.defaultProps = {
  logo: InventoryIcon,
  logoName: 'Inventory',
  options: [
    { name: 'Docs', active: true},
    { name: 'Tutorial', active: false },
    { name: 'Blog', active: false },
    { name: 'Github', active: false },
  ],
}
export default NavBar