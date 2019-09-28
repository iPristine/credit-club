import React, { Component } from "react";
import { connect } from "react-redux";
import { addPost } from "../../actions/actions";
import "./add-post.sass";

class AddPost extends Component {
  state = {
    title: "",
    content: ""
  };

  handlerTitleChange = event => {
    this.setState({ title: event.target.value });
  };

  handlerContentChange = event => {
    this.setState({ content: event.target.value });
  };

  render() {
    const { title, content } = this.state;
    const { addPost, path, history } = this.props;
    return (
      <div className="add-post">
        <div className="add-post__content">
          <p> Название поста</p>
          <input value={title} onChange={this.handlerTitleChange}></input>
          <p>Содержимое</p>
          <textarea
            rows={8}
            value={content}
            onChange={this.handlerContentChange}
          ></textarea>
          <button
            onClick={() => {
              addPost({ title, content });
              history.push("/posts");
            }}
          >
            Добавить
          </button>
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
    addPost: post => {
      dispatch(addPost(post));
    }
  };
};

export default connect(
  stateToProps,
  mapDispatchToProps
)(AddPost);
