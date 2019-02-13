import React from 'react';
import PropTypes from 'prop-types';

function ProductsByMonth (props) {
  return (
    <div className='productsByMonth'>
      <style jsx>{`
        li {
          font-size: 12px;
        }
        .productsByMonth h5 {
          color: white;
          text-shadow: -1px -1px 0 #000,  
          1px -1px 0 #000,
          -1px 1px 0 #000,
          1px 1px 0 #000;
          font-size: 150%;
        }
      `}
      </style>
      <h5>{props.month}</h5>
      <ul>
        {props.products.map((x) => 
          <li>{x}</li>
        )}
      </ul>
    </div>
  );
}

export default ProductsByMonth;

ProductsByMonth.propTypes = {
  month: PropTypes.string,
  products: PropTypes.array
};