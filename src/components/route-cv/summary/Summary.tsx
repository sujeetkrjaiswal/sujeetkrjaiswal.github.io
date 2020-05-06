import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from '../common-style'
export default () => {
  const classes = useStyles()
  return (
    <Paper className={classes.card} id="summary">
      <Typography variant="h5" className={classes.heading}>
        Summary
      </Typography>
      <Typography variant="body1" className={classes.content} align="justify">
      I help improve user conversion & retention by developing experiences that engage the
      users by creating an illusion of simplicity & ease to help them finish their tasks.
      </Typography>
      <Typography variant="body1" className={classes.content} align="justify">
      I'm a problem solver & fast learner with about 6 years of experience in end-to-end
      development of mobile-first responsive and progressive web-apps that are performant,
      reliable, secure, accessible, SEO-friendly, personalized and supports internationalization
      following Agile and OKR methodology.
      </Typography>
      <Typography variant="body1" className={classes.content} align="justify">
      I have also contributed to System architecture for high availability, scalability,
      multi-tenant support, Authentication, Authorization & Access control.
      </Typography>
      <Typography variant="body1" className={classes.content} align="justify">
      I have lead teams of varying sizes (2-15 developers) for different projects and
      have experience in client interactions, requirement gathering, managing user stories, feature identification, design plan & prioritization.
    </Typography>
    <Typography variant="body1" className={classes.content} align="justify">
    With a passion for technology, I love to explore new tools, languages, and
    frameworks and solve challenging problems.
    </Typography>
    </Paper>
  )
}
