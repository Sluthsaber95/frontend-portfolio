import React from 'react'
import PropTypes from 'prop-types'

const Label = ({ next, title }) => {
  const classUsed = next ? "nav-next-wrapper" : "nav-prev-wrapper"
  return (
    <article className={classUsed}>
      <div>
        <div className="nav-destination">{next ? 'Next' : 'Previous'}</div>
        <div className="nav-title">{title}</div>
      </div>
    </article>
  )
}

export default Label

Label.propTypes = {
  next: PropTypes.bool,
  title: PropTypes.string
}

Label.defaultProps = {
  next: true,
  title: 'Foundation'
}