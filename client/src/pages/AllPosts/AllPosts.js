import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { setAllPostsThunk } from "../../redux/reducers/Posts-reducer";
import { NavLink } from "react-router-dom";

const AllPosts = (props) => {
  useEffect(() => {
    props.setAllPostsThunk();
  }, []);
  return (
    <div className="row">
      <div className="col s12">
        {props.allposts.map((post) => (
          <div className="card #43a047 green darken-1" key={post._id}>
            <div className="card-content white-text">
              <span className="card-title">{post.title}</span>
              <p>{post.text}</p>
            </div>
            <div className="card-action">
              <NavLink to={`/all/${post._id}`}>View answer</NavLink>
              <p>{new Date(post.date).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allposts: state.posts.allposts,
  };
};

export default compose(connect(mapStateToProps, { setAllPostsThunk }))(
  AllPosts
);
