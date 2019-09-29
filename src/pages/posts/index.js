import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchWrapper } from "../../utils/requests";
import { updatePosts } from "../../actions/actions";

class Posts extends Component {
  constructor(props) {
    super(props);

    fetchWrapper(
      "https://my-json-server.typicode.com/iPristine/credit-club/posts"
    ).then(res => {
      props.updatePosts(res);
    });
  }

  render() {
    const { posts } = this.props;
    return (
      <div className="posts">
        <div className="posts__title">
          Посты<Link to="/add/post"> Add post </Link>
        </div>
        <div className="posts__posts-list">
          {posts.map((post, postIndex) => {
            return (
              <div key={postIndex}>
                {`title: ${post.title} | content${post.content}`}{" "}
              </div>
            );
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
  return {
    updatePosts: posts => {
      dispatch(updatePosts(posts));
    }
  };
};

export default connect(
  stateToProps,
  mapDispatchToProps
)(Posts);
