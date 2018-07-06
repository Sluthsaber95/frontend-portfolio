import React from 'react'
import PropTypes from 'prop-types'
import './SubOption.css'

const SubOption = (props) => {
  const { index, option, parentOption, routePicked } = props
  const optionIndexPicked = index === routePicked.optionIndex
  const sameParentPicked = parentOption === routePicked.parentOption
  const className = optionIndexPicked && sameParentPicked
    ? "sub-option route-picked"
    : "sub-option"
  const routeUpdated = {
    parentOption,
    optionIndex: index
  }
  return (
    <div className={className} onClick={() => props.activateRoute(routeUpdated)}>
      <h4>{option.name}</h4>
    </div>
  )
}

export default SubOption

SubOption.propTypes = {
  activateRoute: PropTypes.func,
  index: PropTypes.number.isRequired,
  option: PropTypes.exact({
    name: PropTypes.string,
    path: PropTypes.string,
    exact: PropTypes.bool,
    main: PropTypes.func,
  }),
  parentOption: PropTypes.string,
  routePicked: PropTypes.exact({
    parentOption: PropTypes.string,
    optionIndex: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  })
}


SubOption.defaultProps = {
  index: NaN,
  option: {
    name: "",
    path: "",
    exact: true,
    main: () => <div />
  },
  parentOption: 'Main Option',
  routePicked: {
    parentOption: null,
    optionIndex: null
  },
}