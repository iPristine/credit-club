import React, { Component } from "react";
import { Link } from "react-router-dom";
import './error.sass';

class Error extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="error">
        <div className="error__content">
          <Link to="/posts">POSTS</Link>
          {children}
        </div>
      </div>
    );
  }
}

export default Error;
