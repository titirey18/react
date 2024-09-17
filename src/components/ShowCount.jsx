import './ShowCount.css'

import PropTypes from 'prop-types'

const ShowCount = (props) => {
  return (
    <div>
      <h2>
        You clicked here {props.count} {props.count === 1 ? 'time' : 'times'}
      </h2>
    </div>
  )
}

ShowCount.propTypes = {
  count: PropTypes.number.isRequired
}

export default ShowCount
