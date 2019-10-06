import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core'
import React from 'react'

const iwpStyles = makeStyles((theme: Theme) => createStyles({
  contentMarginV: {
    margin: theme.spacing(1, 0),
  },
  video: {
    display: 'block',
    margin: '8px auto',
    maxWidth: '100%',
    [theme.breakpoints.only('xs')]: {
      width: '100%',
      height: '200px',
    },
    [theme.breakpoints.up('sm')]: {
      clear: 'right',
      float: 'right',
      height: '226px',
      width: '400px',
      marginBottom: theme.spacing(2),
      marginLeft: theme.spacing(2),
    },
    [theme.breakpoints.up('lg')]: {
      height: '315px',
      width: '560px',
    },
  }
}))
const video = (className: string) => (<iframe
  className={className}
  title="Infosys Wingspan Intro Video"
  src="https://www.youtube.com/embed/fsK0WSDqWqY"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  />)

export default () => {
  const classes = iwpStyles()
  return (
    <>
      <Typography variant="h6">
        Infosys Wingspan Platform
      </Typography>
      <Typography variant="caption">
        Oct 2017 - Present
      </Typography>
      {video(classes.video)}
      <Typography variant="body1" className={classes.contentMarginV} align="justify">
        Wingspan (internally called Lex) is a gamified talent reskilling platform
        that helps organizations accelerate their talent transformation journey.
      It empowers a learner through Personalized recommendations (courses, learning paths,
      programs, and certifications), Guided Learning Paths (based on roles, skills, and interests)
        and Adaptive Learning (based on user's skill proficiency). It encourages collaborative learning
        through cohorts, shareable playlists & goals. For practice, assessments & organizing coding contest;
      it has quizzes, an online coding platform, lab-on-cloud (for environments which requires sandboxing
      and VMs), and Virtual proctoring (remote proctoring for certifications and assessments).
      It also includes concept-graph (for exploring related topics, projects, and other learning contents),
        AI-based chat-bot, discussion forums, search, catalog, badges, analytics, authoring tool and more.
      </Typography>
      <Typography variant="body1" className={classes.contentMarginV} align="justify">
        Intense telemetry that helped gain insight into the organization's skill distribution and interacts
        with existing HR systems to help manage talents for project allocation, hiring and getting ready
        for upcoming projects.
      </Typography>
      <Typography variant="body1" className={classes.contentMarginV} align="justify">
        Lex (an Internal instance of Wingspan) reached a user count of 1 lakhs within the first 100 days
        of launch and currently has 2.73 Lakhs+ users. It has obtained 83.0 as average SUS
        (System Usability Scale) score against the average SUS score of 68-70.
      </Typography>
      <Typography variant="subtitle1">
        Contribution
      </Typography>
      <ul>
        <li>Managing entire UI team across all verticals (App, Authoring, Admin, Analytics)</li>
        <li>Contributed to Application Design and Architecture for Front-End Web Application.</li>
        <li>Design & Development using Angular & Angular Material.</li>
        <li>Backend API (Node.js with Express.js) for Authentication, Search & Proxy.</li>
        <li>
          Created extensible & pluggable player that supports multiple content types with interactions,
          telemetry events, and resume points.
          </li>
        <li>
          Created application to support multiple tenant with multiple degree of configurations (apps, user actions,
          page layouts, features etc) with dimensions like region, organisation, roles, etc.
        </li>
      </ul>
    </>
  )
}
