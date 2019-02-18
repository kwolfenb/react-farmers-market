import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

class ProductsByMonth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      showComment: false,
      comments: ''
    };

    this.handleLike = this.handleLike.bind(this);
    this.handleShowComment = this.handleShowComment.bind(this);
  }

  handleLike () {
    let newLikes = this.state.likes +1;
    this.setState({likes: newLikes});
  }

  handleShowComment () {
    this.setState({showComment: true});
    console.log(this.state.showComment);
  }

  render () {
    let commentField = null;
    if(this.state.showComment) {
      commentField = <Comment />
    } 
    return (
      <div className='productsByMonth'>
        <style jsx>{`
      ul {
        list-style: none;
      }
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
        <h5>{this.props.month}</h5>
        <ul>
          {this.props.products.map((x) => 
            <li>{x}<br />
              <button onClick={this.handleLike}>Like {this.state.likes}</button><button onClick={this.handleShowComment}>Comment</button>
              <br /> {commentField}
            </li>
          )}
        </ul>
      </div>
    );
  }
}


ProductsByMonth.propTypes = {
  month: PropTypes.string,
  products: PropTypes.array
};

export default ProductsByMonth;