import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Loading from './Loading';
import Post from './Post';


const useStyles = makeStyles((theme) => ({
    markdown: {
      ...theme.typography.body2,
      padding: theme.spacing(3, 0),
    },
  }));


export default function Posts(props) {
    const classes = useStyles()

  const [posts, setPosts] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(null)

  const handleFetchPosts = () => {
    fetch('http://127.0.0.1:8000/api/posts')
    .then(response => {
        if (response.ok) {
            return response.json()
        }
        throw response;
    })
    .then(data => {
        const postsData = data.map((item, _index) => {            
            return <Post className={classes.markdown} post={item} key={item.id.toString()} />
        })
        setPosts(postsData)
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
    handleFetchPosts()
  }, [])

  if (posts.length >= 1 && !isLoading) {
      return (
        <Grid item xs={8}
          container
          direction="row"
          justifyContent="space-around"
          alignItems="stretch"
        >
          {posts}                           
        </Grid>
      )
  } else return (
    <>
      <Loading/>                         
    </>
  )
}

