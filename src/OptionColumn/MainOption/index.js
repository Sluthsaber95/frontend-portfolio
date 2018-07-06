import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Arrow from '../Arrow'
import "./MainOption.css"

const OPTION_TITLE = 'OPTION_TITLE'

const MainOption = (props) => {
  const handleClickTitle = () => {
    const routeUpdated = {
      parentOption: props.option,
      optionIndex: props.option
    }
    props.activateRoute(routeUpdated)
    props.displaySubColumn(OPTION_TITLE)
  }
  const className = props.option === props.routePicked.optionIndex
    ? "main-option-inline route-picked"
    : "main-option-inline"
  return (
    <div className={className}>
        <Arrow 
          displaySubColumn={props.displaySubColumn} 
          picked={props.picked}
        />
      <Link to={`/${props.option}`}>
        <h4 onClick={() => handleClickTitle()} >{props.option}</h4>
      </Link>
    </div>
  )
}

export default MainOption

MainOption.propTypes = {
  displaySubColumn: PropTypes.func,
  option: PropTypes.oneOfType([
    PropTypes.string,
  ]),
  picked: PropTypes.bool,
  routePicked: PropTypes.exact({
    parentOption: PropTypes.string,
    optionIndex: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ])
  })
}

MainOption.defaultProps = {
  option: 'Main Option',
  routePicked: {
    parentOption: null,
    optionIndex: null
  },
}