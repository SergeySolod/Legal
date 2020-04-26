import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {setPostThunk} from "../../redux/reducers/Posts-reducer";
import {useParams} from "react-router-dom";

const Post = (props) => {
    const postId = useParams().id
    useEffect(() => {
        props.setPostThunk(postId)
    }, []);
    return (
        <div className="row">
            <div className="col s12">
                <div className="card #43a047 green darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{props.post.title}</span>
                        <p>{props.post.text}</p>
                        <p>{new Date(props.post.date).toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        post: state.posts.post
    }
}


export default compose(
    connect(mapStateToProps, {setPostThunk})
)(Post)