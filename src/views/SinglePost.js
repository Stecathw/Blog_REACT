import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// useParams is able to get the slug through the URL
import { useParams } from "react-router-dom";

import Loading from '../components/Loading';
import PostDetail from '../components/PostDetail';


export default function SinglePost () {

    const { slug } = useParams()

    const [post, setPostDetail] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [isError, setError] = useState(null)

    SinglePost.propTypes = {
        slug: PropTypes.string
    }

    const handleFetchPostDetails = () => {
        fetch('http://127.0.0.1:8000/api/posts/'+slug)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw response;
        })
        .then(context=> {
            setPostDetail(context)
        })
        .catch(error => {
            console.log("Error fetching data :", error);
            setError(error);
        })
        .finally(() => {
            setLoading(false)
        })
    }

    useEffect(() => {
        setLoading(true)
        handleFetchPostDetails()
    }, [])

    if (isLoading) {
        return (
            <Loading/>
        )
    }
    if (isError) {
        return (
            <>Error 404</>
        )
    } else return (
            <>
                <PostDetail post={post} />

            </>
    )
}