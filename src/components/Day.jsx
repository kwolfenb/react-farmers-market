import React from 'react';
import PropTypes from 'prop-types';

function Day (props) {
  return (
    <div>
      <style jsx>{`
        .day {
          border: solid #9ca7ba 1px;
          border-radius: 5px;
          padding: 5px;
          margin-bottom: 5px;
        }
      `}
      </style>
      <div className='day'>
        <h4>{props.day}</h4>
        <h5>Location: {props.location}</h5>
        <h5>Hours: {props.hours}</h5>
        <h5>Booth: {props.booth}</h5>
      </div>
    </div>
  );
}

export default Day;

Day.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string, 
  booth: PropTypes.string
};
