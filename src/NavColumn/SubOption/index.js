import React from 'react'
import "./SubOption.css"

const SubOption = (props) => {
  const optionIndexPicked = props.index === props.routePicked.optionIndex
  const sameParentPicked = props.parentOption === props.routePicked.parentOption
  const className = optionIndexPicked && sameParentPicked
    ? "sub-option route-picked"
    : "sub-option"
  const routeUpdated = {
    parentOption: props.parentOption,
    optionIndex: props.index
  }
  return (
    <div className={className} onClick={() => props.activateRoute(routeUpdated)}>
      <h4>{props.option}</h4>
    </div>
  )
}

export default SubOption