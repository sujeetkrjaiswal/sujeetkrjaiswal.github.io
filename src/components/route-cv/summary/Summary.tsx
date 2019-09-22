import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from '../common-style'
export default () => {
  const classes = useStyles()
  return (
    <Paper className={classes.card}>
      <Typography variant="h5" className={classes.heading}>
        Summary
      </Typography>
      <Typography variant="body1" className={classes.content} align="justify">
        I have 5+ years of design & development experience with Agile methodology and
        currently leading the Front-end Engineering team of 15+ for Infosys Wingspan
        Platform and responsible for end-to-end product development.
      </Typography>
      <Typography variant="body1" className={classes.content} align="justify">
        I am also involved with technical due-diligence for pre-sales and is responsible for
        direct interactions with multiple clients for various development activities and
        integrations with their existing systems.
      </Typography>
      <Typography variant="body1" className={classes.content} align="justify">
        I am looking for opportunities which allow me to grow well beyond any single
        technology stack is focused on providing an outstanding user experience.
      </Typography>
      <Typography variant="body1" className={classes.content} align="justify">
        As a developer, I love to try out new frameworks, tools, and languages which extend
        outside web-development to other domains like Recommendation Engine, Machine learning,
        bash-scripting and back-end in general.
    </Typography>
    </Paper>
  )
}
