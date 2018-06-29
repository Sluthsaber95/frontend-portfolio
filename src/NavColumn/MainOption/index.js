import React from 'react'
import Arrow from '../Arrow'
import "./MainOption.css"

const OPTION_TITLE = 'OPTION_TITLE'

const MainOption = (props) => {
  const handleClickTitle = () => {
    const routeUpdated = {
      parentOption: props.option,
      optionIndex: props.option
    }
    props.displaySubColumn(OPTION_TITLE)
    props.activateRoute(routeUpdated)
  }
  const className = props.option === props.routePicked.optionIndex
    ? "main-option-inline route-picked"
    : "main-option-inline"
  return (
    <div className={className}>
      <Arrow 
        displaySubColumn={props.displaySubColumn} 
        picked={props.picked}
        option={props.option}
        routePicked={props.routePicked}
      />
      <h4 onClick={() => handleClickTitle()} >{props.option}</h4>
    </div>
  )
}

export default MainOption