import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core'
import React from 'react'

const khubStyles = makeStyles((theme: Theme) => createStyles({
  contentMarginV: {
    margin: theme.spacing(1, 0),
  },
}))

export default () => {
  const classes = khubStyles()
  return (
    <>
      <Typography variant="h6">
        Knowledge Hub
      </Typography>
      <Typography variant="caption">
        Aug 2016 - Oct 2017
      </Typography>
      <Typography variant="body1" className={classes.contentMarginV} align="justify">
        KnowledgeHub is a Knowledge Management project which helps accelerate project delivery
        by easing users to find experts and reusable components within the organization.
        The core features include knowledge-graph, people-search, and recommendations.
      </Typography>
      <Typography variant="body1" className={classes.contentMarginV} align="justify">
        It has a comprehensive repository of data related to employees, their skills, projects,
        location, policies, technical documentation, learning content, certifications, 
        job levels and more using which knowledge-graph is built and recommendations are generated
        tailored to a user based on their roles, projects, and location.
      </Typography>
      <Typography variant="body1" className={classes.contentMarginV} align="justify">
        It also helps users to explore projects and managers to find talent who are relevant.
      </Typography>
      <Typography variant="subtitle1">
        Contribution
      </Typography>
      <ul>
        <li>Non-personalized Recommendation System (using Association Rule Learning)</li>
        <li>Restful APIs for recommendations using Node.js & Express</li>
        <li>Topic Extraction using DBpedia Spotlight (Python Batch Jobs)</li>
        <li>Data ingestion modules (Python Batch Jobs)</li>
        <li>System Architecture & Database Design for Knowledge-graph, Topics Management</li>
      </ul>
    </>
  )
}
