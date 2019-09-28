import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Posts extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="posts">
        <div className="posts__title">Посты<Link to="/add/post"> Add post </Link></div>
        <div className="posts__posts-list">
          {posts.map((post, postIndex) => {
            return <div> {post}</div>;
          })}
        </div>
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    posts: state.posts
  };
}

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  stateToProps,
  mapDispatchToProps
)(Posts);
