import { createStyles, Grid, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Paper, Switch, Theme, Typography } from '@material-ui/core'
import React, { FC, PureComponent } from 'react'

import useStyles from '../common-style'
import afeThumb from './img-awards/afe-thumb2.jpg'
import instaThumb from './img-awards/insta-thumb.jpeg'
import techChampThumb from './img-awards/techChamp-thumb.jpeg'

import afe17 from './img-awards/afe17-award.jpeg'
import afe19 from './img-awards/afe19-award.jpg'
import insta from './img-awards/insta-award.jpeg'
import techChamp from './img-awards/techChamp-award.jpeg'

interface IAwards {
  id: number,
  avatar: any
  award: string
  name: string
  description: string
}
const awards: IAwards[] = [{
  avatar: afeThumb,
  award: afe19,
  description: `Gold Winner (consecutive second year) of Highest Award at Infosys for Excellence under
  Internal Customer Delight for Lex: Talent Transformation in age of digital disruption`,
  id: 1,
  name: 'Award For Excellence 2018-2019',
}, {
  avatar: afeThumb,
  award: afe17,
  description: `Gold Winner of Highest Award at Infosys for Excellence under
  Internal Customer Delight for transforming Workplace Learning through new age solution`,
  id: 2,
  name: 'Award For Excellence 2017-2018',
}, {
  avatar: instaThumb,
  award: insta,
  description: `Certificate of Appreciation | 2016`,
  id: 3,
  name: 'Insta Award',
}, {
  avatar: techChampThumb,
  award: techChamp,
  description: `Certificate of Appreciation | 2015`,
  id: 4,
  name: 'Tech Champion',
}]

const awardStyles = makeStyles((theme: Theme) => createStyles({
  awards: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  logo: {
    height: '3em',
    marginRight: theme.spacing(2),
  },
}))

const renderAward = (award: IAwards, logoClass: string) => (
  <ListItem alignItems="flex-start" key={award.id}>
    <ListItemAvatar>
      <a href={award.award} target="_blank" rel="noopener noreferrer">
        <img src={award.avatar} alt={award.name} className={logoClass} />
      </a>
    </ListItemAvatar>
    <ListItemText primary={award.name} secondary={award.description} />
  </ListItem>
)

const AwardImages: FC<{ imageClass: string }> = ({ imageClass }) => (
  <Grid container={true} spacing={2}>
    <Grid item={true} xs={12} sm={6} md={4} lg={3} component="a" href={afe19} target="_blank" rel="noopener noreferrer">
      <img src={afe19} alt="AFE 2019" className={imageClass} />
    </Grid>
    <Grid item={true} xs={12} sm={6} md={4} lg={3} component="a" href={afe17} target="_blank" rel="noopener noreferrer">
      <img src={afe17} alt="AFE 2018" className={imageClass} />
    </Grid>
    <Grid item={true} xs={12} sm={6} md={4} lg={3} component="a" href={insta} target="_blank" rel="noopener noreferrer">
      <img src={insta} alt="Insta Award" className={imageClass} />
    </Grid>
    <Grid item={true} xs={12} sm={6} md={4} lg={3} component="a" href={techChamp} target="_blank" rel="noopener noreferrer">
      <img src={techChamp} alt="Tech Champ" className={imageClass} />
    </Grid>
  </Grid>
)

const AwardsRenderer: FC<{ show: boolean, toggle: () => void }> = ({ show, toggle }) => {
  const classes = useStyles()
  const awardClasses = awardStyles()
  return (
    <Paper className={classes.card} id="awards">
      <Typography variant="h5" className={classes.heading + ' flex'}>
        Awards & Recognition
        <span className="spacer" />
        <Switch
          checked={show}
          onChange={toggle}
          value={true}
          inputProps={{ 'aria-label': 'Toggle award images' }}
        />
      </Typography>
      <List>
        {awards.map((award) => renderAward(award, awardClasses.logo))}
      </List>
      {show ? <AwardImages imageClass={awardClasses.awards} /> : null}
    </Paper>
  )
}

class Awards extends PureComponent<{}, { show: boolean }> {
  constructor(props: {}) {
    super(props)
    this.state = { show: false }
    this.toggleShow = this.toggleShow.bind(this)
  }
  public toggleShow() {
    this.setState((state) => ({ ...state, show: !state.show }))
  }
  public render() {
    return <AwardsRenderer show={this.state.show} toggle={this.toggleShow} />
  }
}

export default Awards
