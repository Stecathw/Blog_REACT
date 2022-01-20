import React from 'react';
import PropTypes from 'prop-types';


export default function PostDetail (props) {

    const { post } = props

    PostDetail.propTypes = {
        post: PropTypes.object
    }
  
    return (
        <>
        {post}
        </>
    )
}