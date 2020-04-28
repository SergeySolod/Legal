import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  deletePostThunk,
  setPostThunk,
} from "../../redux/reducers/Posts-reducer";
import { NavLink, useParams } from "react-router-dom";

const Post = (props) => {
  const postId = useParams().id;
  useEffect(() => {
    props.setPostThunk(postId);
  }, []);
  return (
    <div className="row">
      <div className="col s12">
        <div className="card #43a047 green darken-1">
          <div className="card-content white-text">
            <span className="card-title">{props.post.title}</span>
            <p>{props.post.text}</p>
            <p>{new Date(props.post.date).toLocaleDateString()}</p>
            <div className="card-action card-button">
              <NavLink to={`/change/${props.post._id}`}>Редактировать</NavLink>
              <a
                onClick={() => {
                  props.deletePostThunk();
                }}
                className="waves-effect waves-light btn-small"
              >
                Удалить
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    post: state.posts.post,
  };
};

export default compose(
  connect(mapStateToProps, { setPostThunk, deletePostThunk })
)(Post);
