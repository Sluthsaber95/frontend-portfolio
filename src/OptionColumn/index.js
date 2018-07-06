import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import MainOption from '../OptionColumn/MainOption'
import SubOption from '../OptionColumn/SubOption'
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
        <Link to={`/${this.props.option}${option.path}`} key={keyId}>
          <SubOption 
            routePicked={this.props.routePicked}
            parentOption={this.props.option}
            activateRoute={this.props.activateRoute}
            index={index} 
            option={option} 
          />
        </Link>
      )
    })
    const DisplayOption = this.state.mainPicked
      ? OptionList
      : null
    return (
      <article className="col-option">
        <div className="main-option">
          <Fragment>
              <MainOption
                routePicked={this.props.routePicked}
                activateRoute={this.props.activateRoute}
                displaySubColumn={this.displaySubColumn}
                option={this.props.option}
                picked={this.state.mainPicked}
              />
            {DisplayOption}
          </Fragment>
        </div>
      </article>
    )
  }
}

export default OptionColumn

OptionColumn.propTypes = {
  option: PropTypes.string.isRequired,
  routePicked: PropTypes.exact({
    parentOption: PropTypes.string,
    optionIndex: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  }),
  subOption: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string,
    path: PropTypes.string,
    exact: PropTypes.bool,
    main: PropTypes.func
  })),
}

OptionColumn.defaultProps = {
  option: 'Main Option',
  routePicked: {
    parentOption: "",
    optionIndex: ""
  },
  subOption: [{
    name: "",
    path: "/",
    exact: true,
    main: () => <Introduction />
  }]
}