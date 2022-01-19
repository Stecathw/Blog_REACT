import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Loading from '../Loading';
import Post from './main/Post';
import Sidebar from './main/Sidebar';

const useStyles = makeStyles((theme) => ({
    markdown: {
      ...theme.typography.body2,
      padding: theme.spacing(3, 0),
    },
  }));

export function Posts(props) {
    const classes = useStyles()

  const [posts, setPosts] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(null)

  const handleFetchPosts = () => {
    fetch('http://127.0.0.1:8000/api/')
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


  if (isError) return (
    <div>
        "Something went wrong..."
        {isError}
        <Loading/>
    </div>
  )

  if (posts.length >= 1 && !isLoading) {
      return (
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <main>
            <Grid container spacing={8} >
              {posts}   
              <Sidebar title='Météo en Temps réel'/>           
            </Grid>
          </main>
        </Container>
      </React.Fragment>
      )
  }

  else return (
    <div>
        "Loading..."
        <Loading/>
    </div>
  )
}

