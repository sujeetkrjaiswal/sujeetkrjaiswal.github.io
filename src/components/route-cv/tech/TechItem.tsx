import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core'
import React, { FC } from 'react'

export const Level = {
  Beginner: 'Beginner',
  Expert: 'Expert',
  Proficient: 'Proficient',
}

export interface ITechItem {
  name: string
  level: string
  imgSrc: string
  url?: string
}

const techItemStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
  },
  techContent: {
    flexGrow: 1,
    paddingLeft: theme.spacing(2),
  },
  techImg: {
    height: '3em',
    width: '3em',
  },
}))

const TechItem: FC<{ tech: ITechItem }> = (props) => {
  const classes = techItemStyles()
  return (
    <div className={classes.root}>
      <img src={props.tech.imgSrc} alt={props.tech.name} className={classes.techImg} />
      <div className={classes.techContent}>
        <Typography variant="body1">{props.tech.name}</Typography>
        <Typography variant="caption" color="textSecondary">{props.tech.level}</Typography>
      </div>
    </div>
  )
}

export default TechItem
