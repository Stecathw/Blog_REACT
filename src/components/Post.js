import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    postBox: {
      padding: theme.spacing(2),
      marginBottom: theme.spacing(5)
    },
  }))

export default function Post (props) {

    const { post } = props

    Post.propTypes = {
        post: PropTypes.object
    }  
    const classes = useStyles()

    return (
        <Grid item xs={10} className={classes.postBox}>
            <Typography variant="h6">
                {post.title}
            </Typography>
            <Typography variant='subtitle1' gutterBottom>
                {post.published}
            </Typography>
            <Divider />
            <div key={post.id}>
                <p>{post.sum_up}</p>
            </div>
            <Link href={'post/'+post.slug}>Continuer la lecture</Link>
        </Grid>
    )
}