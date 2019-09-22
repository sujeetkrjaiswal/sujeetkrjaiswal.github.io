import { createStyles, Grid, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Paper, Theme, Typography } from '@material-ui/core'
import React, { FC } from 'react'

import useStyles from '../common-style'

import afe1 from './img-awards/afe17-award.jpeg'
import afe2 from './img-awards/afe19-award.jpg'
import insta from './img-awards/insta-award.jpeg'
import techChamp from './img-awards/techChamp-award.jpeg'

interface IAwards {
  id: number,
  avatar: any
  name: string
  description: string
}
const awards: IAwards[] = [{
  avatar: afe2,
  description: `Gold Winner (consecutive second year) of Highest Award at Infosys for Excellence under
  Internal Customer Delight for Lex: Talent Transformation in age of digital disruption`,
  id: 1,
  name: 'Award For Excellence 2018-2019',
}, {
  avatar: afe1,
  description: `Gold Winner of Highest Award at Infosys for Excellence under
  Internal Customer Delight for transforming Workplace Learning through new age solution`,
  id: 2,
  name: 'Award For Excellence 2017-2018',
}, {
  avatar: insta,
  description: `You can see the test scores of PluralsightIQ on this.`,
  id: 3,
  name: 'Insta Award',
}, {
  avatar: techChamp,
  description: `PDF Version of Resume`,
  id: 4,
  name: 'Tech Champion',
}]

const awardStyles = makeStyles((theme: Theme) => createStyles({
  awards: {
    width: '100%',
  },
  logo: {
    height: '3em',
    marginRight: theme.spacing(2),
  },
}))

const renderAward = (award: IAwards, logoClass: string) => (
  <ListItem alignItems="flex-start" key={award.id}>
    <ListItemAvatar>
      <a href={award.avatar} target="_blank" rel="noopener noreferrer">
        <img src={award.avatar} alt={award.name} className={logoClass} />
      </a>
    </ListItemAvatar>
    <ListItemText primary={award.name} secondary={award.description} />
  </ListItem>
)

const Skills: FC = () => {
  const classes = useStyles()
  const awardClasses = awardStyles()
  return (
    <Paper className={classes.card}>
      <Typography variant="h5" className={classes.heading}>
        Awards & Recognition
      </Typography>
      <List>
        {awards.map((award) => renderAward(award, awardClasses.logo))}
      </List>
      <Grid container={true} spacing={2}>
        <Grid item={true} xs={12} sm={6} md={4} lg={3} component="a" href={afe2} target="_blank" rel="noopener noreferrer">
          <img src={afe2} alt="AFE 2019" className={awardClasses.awards} />
        </Grid>
        <Grid item={true} xs={12} sm={6} md={4} lg={3} component="a" href={afe1} target="_blank" rel="noopener noreferrer">
          <img src={afe1} alt="AFE 2018" className={awardClasses.awards} />
        </Grid>
        <Grid item={true} xs={12} sm={6} md={4} lg={3} component="a" href={insta} target="_blank" rel="noopener noreferrer">
          <img src={insta} alt="Insta Award" className={awardClasses.awards} />
        </Grid>
        <Grid item={true} xs={12} sm={6} md={4} lg={3} component="a" href={techChamp} target="_blank" rel="noopener noreferrer">
          <img src={techChamp} alt="Tech Champ" className={awardClasses.awards} />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Skills
