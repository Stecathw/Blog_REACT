import React from 'react';

import PropTypes from 'prop-types';


import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import ReactMarkdown from 'react-markdown'



export default function PostDetail (props) {

    const { post } = props

    PostDetail.propTypes = {
        post: PropTypes.object
    }

    const useStyles = makeStyles((theme) => ({
        post: {
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop:  theme.spacing(8),
        },
      }));

    const classes = useStyles()
  
    return (
        <>
        <Grid item xs={8} md={8} className={classes.post}>
            <Typography variant="h2" gutterBottom>
                {post.title}
            </Typography>
            <Divider />
            <Typography variant="h6" gutterBottom>
                {post.published}
            </Typography>
            <Typography gutterBottom>
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </Typography>          
        </Grid>
    </>
    )
}