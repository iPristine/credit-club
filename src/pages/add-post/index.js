import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import Error from "../../components/error/index";
import { fetchWrapper } from "../../utils/requests";
import { addPost } from "../../actions/actions";
import "./add-post.sass";

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      isSend: false,
      error: ""
    };
  }

  handlerSend = () => {
    fetchWrapper(
      "https://my-json-server.typicode.com/iPristine/credit-club/posts",
      {
        method: "POST",
        body: JSON.stringify({
          title: this.state.title,
          content: this.state.content
        })
      }
    )
      .then(res => {
        this.props.addPost({
          title: this.state.title,
          content: this.state.content
        });
        this.setState({ isSend: true });
      })
      .catch(err => {
        this.setState({ error: "Ошибка в запросе" });
      });
  };

  handlerTitleChange = event => {
    this.setState({ title: event.target.value });
  };

  handlerContentChange = event => {
    this.setState({ content: event.target.value });
  };

  render() {
    const { title, content, isSend, error } = this.state;
    const { posts } = this.props;
    return (
      <div className="add-post">
        {isSend && <Redirect to={`/post/${posts.length}`}></Redirect>}
        {error && <Error> {error} </Error>}
        <Link to="/posts">POSTS</Link>
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
              this.handlerSend();
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
