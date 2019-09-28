import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <Link to="/posts">posts</Link>
      </div>
    );
  }
}
