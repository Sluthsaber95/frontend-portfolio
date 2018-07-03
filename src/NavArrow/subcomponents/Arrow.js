import React, { Fragment } from 'react'
import PropTypes from 'prop-types' 
import ArrowPrev from './arrow-prev.svg'
import ArrowPrev_Active from './arrow-prev-active.svg'
import ArrowNext from './arrow-next.svg'
import ArrowNext_Active from './arrow-next-active.svg'

const Arrow = ({ left, hoveredOver }) => {
  const classUsed = left ? 'arrow-img-prev' : 'arrow-img-next'
  let ArrowShown;
  if(left){
    ArrowShown = hoveredOver
      ? ArrowPrev_Active
      : ArrowPrev
  } else {
    ArrowShown = hoveredOver
      ? ArrowNext_Active
      : ArrowNext
  }
  return <img className={classUsed} src={ArrowShown}/>
}

const ArrowLeft = ({ hoveredOver }) => {
  return (
    <Arrow left={true} hoveredOver={hoveredOver} />
  )
}

const ArrowRight = ({ hoveredOver }) => {
  return (
    <Arrow left={false} hoveredOver={hoveredOver} />
  )
}
export {
  Arrow,
  ArrowLeft,
  ArrowRight
}

Arrow.propTypes = {
  hoveredOver: PropTypes.bool
}

ArrowLeft.propTypes = {
  hoveredOver: PropTypes.bool
}

ArrowRight.propTypes = {
  hoveredOver: PropTypes.bool
}