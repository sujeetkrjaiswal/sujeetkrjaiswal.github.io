import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from '../common-style'
import ProjectIWP from './ProjectIWP'
import ProjectKhub from './ProjectKhub'

export default () => {
  const classes = useStyles()
  return (
    <Paper className={classes.card}>
      <Typography variant="h5" className={classes.heading}>
        Projects
      </Typography>
      <ProjectIWP />
      <ProjectKhub />
    </Paper>
  )
}
