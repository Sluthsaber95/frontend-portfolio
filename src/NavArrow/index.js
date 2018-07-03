import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { ArrowLeft, ArrowRight } from './subcomponents/Arrow'
import Label from './subcomponents/Label'
import "./index.css"

class NavArrow extends Component {
  constructor(props){
    super(props)
    this.state = {
      hoveredOver: false
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }
  handleMouseEnter(){
    this.setState({ hoveredOver: true })
  }
  handleMouseLeave(){
    this.setState({ hoveredOver: false })
  }
  render(){
    const { hoveredOver } = this.state
    const { next, singleCardUsed, title } = this.props
    const classUsed = next && !singleCardUsed
      ? "nav-arrow margin-left margin-bottom"
      : "nav-arrow margin-bottom"
    const ArrowDirection = next 
      ? <ArrowRight hoveredOver={hoveredOver} /> 
      : <ArrowLeft hoveredOver={hoveredOver} />
    const Orientation = (
      <Fragment>
        <Label next={next} title={title} />
        {ArrowDirection}
      </Fragment>
    )
    const DataPassed = typeof next === 'boolean' || typeof title === 'string'
      ? Orientation
      : null
    return (
      <section 
        className={classUsed}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >{ DataPassed }</section>
    )
  }
}

export default NavArrow

NavArrow.propTypes = {
  next: PropTypes.bool.isRequired,
  singleCardUsed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
}