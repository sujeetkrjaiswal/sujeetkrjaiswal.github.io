import { Grid, Paper, Typography } from '@material-ui/core'
import React, { FC } from 'react'
import useStyles from '../common-style'
import TechItem, { ITechItem } from './TechItem'

import frameworks from './frameworks.const'
import misc from './misc.const'
import programmingLanguages from './programming.const'
import tools from './tools.const'

const techRender = (tech: ITechItem, key: string) => (
  <Grid item={true} xs={12} sm={6} md={4} lg={3} xl={2} key={key} >
    <TechItem tech={tech} key={tech.name} />
  </Grid >
)

const techsRender = (group: string, techs: ITechItem[]) => (
  <Grid container={true} spacing={3}>
    {techs.map((u, i) => techRender(u, `${group}-tech-${i}`))}
  </Grid>
)

const Tech: FC = () => {
  const classes = useStyles()
  return (
    <Paper className={classes.card} id="tech">
      <Typography variant="h5">
        Languages and Frameworks
      </Typography>

      <Typography variant="h6" className={classes.subheading}>
        Programming Languages
      </Typography>
      {techsRender('prog', programmingLanguages)}

      <Typography variant="h6" className={classes.subheading}>
        Frameworks
      </Typography>
      {techsRender('frame', frameworks)}

      <Typography variant="h6" className={classes.subheading}>
        Tools
      </Typography>
      {techsRender('tools', tools)}

      <Typography variant="h6" className={classes.subheading}>
        Misc
      </Typography>
      {techsRender('misc', misc)}
    </Paper>
  )
}
export default Tech
