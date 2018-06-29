import React, { Component } from 'react'
import shortid from 'shortid'
import MainOption from '../MainOption'
import SubOption from '../SubOption'
import "./OptionColumn.css"

const OPTION_TITLE = 'OPTION_TITLE'
const OPTION_ARROW = 'OPTION_ARROW'

class OptionColumn extends Component {
  constructor(props){
    super(props)
    this.state = {
      mainPicked: false
    }
    this.displaySubColumn = this.displaySubColumn.bind(this)
  }
  displaySubColumn(iconClicked) {
    switch (iconClicked) {
      case OPTION_ARROW:
        this.setState({ mainPicked: !this.state.mainPicked })
        break;
      case OPTION_TITLE:
        this.setState({ mainPicked: true })
        break;
      default:
        break;
    }
  }
  render(){
    const OptionList = this.props.subOption.map((option, index) => {
      const keyId = shortid.generate()
      return (
        <SubOption 
          routePicked={this.props.routePicked}
          parentOption={this.props.option}
          activateRoute={this.props.activateRoute}
          index={index} 
          key={keyId} 
          option={option} 
        />
      )
    })
    const DisplayOption = this.state.mainPicked
      ? OptionList
      : null
    return (
      <article className="col-option">
        <div className="main-option">
          <MainOption 
            routePicked={this.props.routePicked}
            activateRoute={this.props.activateRoute}
            displaySubColumn={this.displaySubColumn}
            option={this.props.option}
            picked={this.state.mainPicked}
          />
          { DisplayOption }
        </div>
      </article>
    )
  }
}

export default OptionColumn