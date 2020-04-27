import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { setPostsThunk } from "../../redux/reducers/Posts-reducer";
import { NavLink } from "react-router-dom";

const Posts = (props) => {
  useEffect(() => {
    props.setPostsThunk();
  }, []);
  return (
    <div className="row">
      <div className="col s12">
        {props.posts.map((post) => (
          <div className="card #43a047 green darken-1" key={post._id}>
            <div className="card-content white-text">
              <span className="card-title">{post.title}</span>
              <p>{post.text}</p>
            </div>
            <div className="card-action card-button">
              <NavLink to={`/posts/${post._id}`}>View answer</NavLink>
              <p>{new Date(post.date).toLocaleDateString()}</p>
              <a
                onClick={() => {}}
                className="waves-effect waves-light btn-small"
              >
                Удалить
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
  };
};

export default compose(connect(mapStateToProps, { setPostsThunk }))(Posts);
