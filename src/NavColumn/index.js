import React, { Component } from 'react'
import OptionColumn from './OptionColumn/index'
import PropTypes from 'prop-types'
import "./index.css"

class NavColumn extends Component {
  constructor(props){
    super(props)
    this.state = {
      routePicked: { 
        parentOption: null, 
        optionIndex: null
      },
    }
    this.activateRoute = this.activateRoute.bind(this)
  }
  activateRoute(routePicked) {
    this.setState({ routePicked })
  }
  render(){
    const { children } = this.props
    const ChildrenColumn = React.Children.map(children, (child) => {
      return React.cloneElement(child,
        {
          ...this.props,
          routePicked: this.state.routePicked,
          activateRoute: this.activateRoute,
        }
      )
    })
    return (
      <section className="col-option-container">
        <article className="col-option-wrapper">
        { ChildrenColumn }
        </article>
      </section>
    )
  }
}

export default NavColumn

NavColumn.propTypes = {
   option: PropTypes.string,
   subOption: PropTypes.arrayOf([
     PropTypes.string.isRequired
   ])
}