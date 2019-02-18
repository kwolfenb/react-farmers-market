import React from 'react';
import { Link } from 'react-router-dom';
import farmerImg from '../../assets/images/img.png';

function Header() {
  return (
    <div>
      <style jsx> {`
        .header {
          border: solid gray;
          text-align: center;
          padding: 10px;
          border-radius: 5px;
          background-image: linear-gradient(to right, #98BEE8, #FFF4A8);
        }
        img {
          height: 30px;
          width: auto;
          margin-left: 10px;
          margin-right: 10px;
        }
      `}
      </style>
      <h2 className='header'>
        <img src={farmerImg} alt='farmer' />        
        Avery's Organic Farm
        <img src={farmerImg} alt='farmer' />
      </h2>
      <button><Link to='/'>Products</Link></button>
      <button><Link to='/schedule'>Schedule</Link></button>
    </div>
  );
}

export default Header;