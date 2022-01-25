import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';


export default function Post (props) {

    const { post } = props

    Post.propTypes = {
        post: PropTypes.object
    }  
    return (
        <Grid item xs={12} md={8}>
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