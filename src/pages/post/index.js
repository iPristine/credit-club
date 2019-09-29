import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PostById from "../../components/post-by-id/index";

class Post extends Component {
  render() {
    const { path, posts } = this.props;
    console.log(path.params.id);
    return (
      <div className="post">
        <p className="post__header">
          Post #{path.params.id}
          <Link to="/posts">Posts</Link>
        </p>
        <PostById post={posts[path.params.id]}></PostById>
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
)(Post);
