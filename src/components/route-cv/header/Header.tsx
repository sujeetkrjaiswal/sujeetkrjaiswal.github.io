import { CardMedia, Chip, createStyles, makeStyles, Paper, Theme, Typography } from '@material-ui/core'
import React from 'react'

import me from './me.jpg'

const styles = makeStyles((theme: Theme) => createStyles({
  card: {
    marginBottom: theme.spacing(3),
    padding: theme.spacing(3),
  },
  chipContainer: {
    'alignItems': 'center',
    'display': 'flex',
    'flexWrap': 'wrap',
    'justifyContent': 'center',
    'margin': theme.spacing(1, 0),
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  content: {
    fontSize: '2rem',
  },
  heading: {
    fontWeight: 'lighter',
    marginBottom: theme.spacing(2),
    // textAlign: 'center',
    [theme.breakpoints.only('xs')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: '2.5rem',
    },
  },
  profileImg: {
    borderRadius: '50%',
    height: '150px',
    margin: 'auto',
    marginBottom: theme.spacing(3),
    // marginTop: theme.spacing(3),
    width: '150px',
  },

}))

export default () => {
  const classes = styles()

  return (
    <Paper className={classes.card}>
      <CardMedia className={classes.profileImg} image={me} />
      <div>
        <Typography variant="h3" className={classes.heading} align="center" color="primary">
          Sujeet Kumar Jaiswal
      </Typography>
        <div className={classes.chipContainer}>
          <Chip
            // icon={<FaceIcon />}
            label="Designing Illusion of Simplicity"
            color="primary"
            variant="outlined"
          />
          <Chip
            // icon={<FaceIcon />}
            label="Building elegant & accessible Web Apps"
            color="primary"
            variant="outlined"
          />
        </div>
        <Typography variant="body1" className={classes.content + ' cursive'} align="center" color="primary">
          I design and develop experiences that makes people's live simple.
      </Typography>
      </div>
    </Paper>
  )
}
