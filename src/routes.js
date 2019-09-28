import Main from "./pages/main/index";
import Posts from "./pages/posts/index";
import Post from "./pages/post/index";
import AddPost from "./pages/add-post/index";

const routes = [
  {
    path: "/posts",
    component: Posts,
    exact: true
  },
  {
    path: "/post/:id",
    component: Post,
    exact: true
  },
  {
    path: "/add/post",
    component: AddPost,
    exact: true
  },
  {
    path: "/",
    component: Main,
    exact: false
  }
];

export default routes;
