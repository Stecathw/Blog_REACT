import React, { Component } from 'react'
import { CircularProgress } from '@mui/material';

export default class Loading extends Component {
    render() {
        return (
            <div>
                <CircularProgress/>
            </div>
        )
    }
}
