import React, { Component } from "react";

class PostById extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className="post">
        {post ? (
          <div>
            <p>title:</p>{" "}
            <div className="post__title">{post.title}</div>
            <p>content:</p>
            <div className="post__content">{post.content}</div>
          </div>
        ) : (
          "Пост не найден"
        )}
      </div>
    );
  }
}

export default PostById;
