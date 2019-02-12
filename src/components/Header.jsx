import React from 'react';

function Header () {
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
      `}
      </style>
      <h2 className='header'>Avery's Organic Farm</h2>
    </div>
  );
}

export default Header;