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
            
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Typography variant='subtitle1' gutterBottom>
                        {post.published}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}  style={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-end", paddingRight: "10px"}}>
                        {post.category}
                    </Grid>
                </Grid>           

            
            <Divider />
            <div key={post.id}>
                <p>{post.sum_up}</p>
            </div>
            <Link href={'post/'+post.slug}>Continuer la lecture</Link>
        </Grid>
    )
}