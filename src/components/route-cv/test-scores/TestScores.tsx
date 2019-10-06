import { createStyles, Grid, makeStyles, Paper, Theme, Typography } from '@material-ui/core'
import React, { FC } from 'react'
import getStyles from '../common-style'

interface IScore {
  dateCompleted: string,
  id: string
  level: string
  percentile: number
  percentileText: string
  score: number
  thumbnailUrl: string
  title: string
  verifiedOn: string,
  url: string
}

const scores: IScore[] = [
  {
    dateCompleted: '2019-09-08T14:30:02.574208+00:00',
    id: 'git',
    level: 'Proficient',
    percentile: 59.9822,
    percentileText: '60th',
    score: 165,
    thumbnailUrl: 'https://pluralsight2.imgix.net/assessments/images/icons/git-ZTFPuKmPsFw6.png',
    title: 'Git',
    url: '/score/skill-assessment/git',
    verifiedOn: 'Sep 2019',
  },
  {
    dateCompleted: '2019-09-08T13:54:46.351216+00:00',
    id: 'rxjs',
    level: 'Expert',
    percentile: 91.0856,
    percentileText: '91st',
    score: 229,
    thumbnailUrl: 'https://pluralsight2.imgix.net/assessments/images/icons/rxjs-1TXbfgBFS7wf.png',
    title: 'RxJS',
    url: '/score/skill-assessment/rxjs',
    verifiedOn: 'Sep 2019',
  },
  {
    dateCompleted: '2019-09-04T10:00:10.503192+00:00',
    id: 'javascript',
    level: 'Expert',
    percentile: 99.9254,
    percentileText: '100th',
    score: 297,
    thumbnailUrl: 'https://pluralsight.imgix.net/paths/path-icons/javascript-36f5949a45.png',
    title: 'JavaScript',
    url: '/score/skill-assessment/javascript',
    verifiedOn: 'Sep 2019',
  },
  {
    dateCompleted: '2019-08-26T18:45:54.603461+00:00',
    id: 'npm',
    level: 'Proficient',
    percentile: 66.0836,
    percentileText: '66th',
    score: 175,
    thumbnailUrl: 'https://pluralsight2.imgix.net/assessments/images/icons/npm-EQLkhQpQW4Pa.png',
    title: 'NPM',
    url: '/score/skill-assessment/npm',
    verifiedOn: 'Aug 2019',
  },
  {
    dateCompleted: '2019-08-26T18:36:55.248315+00:00',
    id: 'es6',
    level: 'Expert',
    percentile: 92.17020000000001,
    percentileText: '92nd',
    score: 233,
    thumbnailUrl: 'https://pluralsight2.imgix.net/assessments/images/icons/es6-ZTFHaqZcD2zV.png',
    title: 'ES6',
    url: '/score/skill-assessment/es6',
    verifiedOn: 'Aug 2019',
  },
  {
    dateCompleted: '2019-08-26T18:26:32.561236+00:00',
    id: 'typescript',
    level: 'Expert',
    percentile: 97.2997,
    percentileText: '97th',
    score: 260,
    thumbnailUrl: 'https://pluralsight2.imgix.net/assessments/images/icons/typescript-g4UBd2ehbtKm.png',
    title: 'TypeScript',
    url: '/score/skill-assessment/typescript',
    verifiedOn: 'Aug 2019',
  },
  {
    dateCompleted: '2019-08-26T18:15:06.200675+00:00',
    id: 'angular',
    level: 'Expert',
    percentile: 96.6433,
    percentileText: '97th',
    score: 255,
    thumbnailUrl: 'https://pluralsight2.imgix.net/paths/images/angular-14a0f6532f.png',
    title: 'Angular',
    url: '/score/skill-assessment/angular',
    verifiedOn: 'Aug 2019',
  },
  {
    dateCompleted: '2018-09-08T14:40:00.522121+00:00',
    id: 'react',
    level: 'Proficient',
    percentile: 71.68369999999999,
    percentileText: '72nd',
    score: 184,
    thumbnailUrl: 'https://pluralsight2.imgix.net/paths/images/react-0f6558f88f.png',
    title: 'React',
    url: '/score/skill-assessment/react',
    verifiedOn: 'Sep 2018',
  },
  {
    dateCompleted: '2018-09-08T14:26:37.273149+00:00',
    id: 'node-js',
    level: 'Expert',
    percentile: 91.1954,
    percentileText: '91st',
    score: 229,
    thumbnailUrl: 'https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png',
    title: 'Node.js',
    url: '/score/skill-assessment/node-js',
    verifiedOn: 'Sep 2018',
  },
  {
    dateCompleted: '2018-09-08T14:17:27.271267+00:00',
    id: 'html5',
    level: 'Expert',
    percentile: 98.8185,
    percentileText: '99th',
    score: 276,
    thumbnailUrl: 'https://pluralsight.imgix.net/paths/path-icons/html5-7ac65c8ec0.png',
    title: 'HTML5',
    url: '/score/skill-assessment/html5',
    verifiedOn: 'Sep 2018',
  },
  {
    dateCompleted: '2018-09-08T14:10:07.718785+00:00',
    id: 'css',
    level: 'Expert',
    percentile: 95.9166,
    percentileText: '96th',
    score: 251,
    thumbnailUrl: 'https://pluralsight.imgix.net/paths/path-icons/css-c9b214f0d7.png',
    title: 'CSS',
    url: '/score/skill-assessment/css',
    verifiedOn: 'Sep 2018',
  },
  {
    dateCompleted: '2018-02-05T15:21:00.025702+00:00',
    id: 'android',
    level: 'Proficient',
    percentile: 74.2597,
    percentileText: '74th',
    score: 189,
    thumbnailUrl: 'https://pluralsight.imgix.net/paths/path-icons/android-53f8da146d.png',
    title: 'Android',
    url: '/score/skill-assessment/android',
    verifiedOn: 'Feb 2018',
  },
  {
    dateCompleted: '2017-03-03T13:29:38.351525+00:00',
    id: 'java',
    level: 'Expert',
    percentile: 84.353,
    percentileText: '84th',
    score: 209,
    thumbnailUrl: 'https://pluralsight.imgix.net/paths/path-icons/java-79830005fe.png',
    title: 'Java',
    url: '/score/skill-assessment/java',
    verifiedOn: 'Mar 2017',
  },
]

const scoreStyles = makeStyles((theme: Theme) => createStyles({
  details: {
    [theme.breakpoints.up('xs')]: {
      textAlign: 'center',
    },
  },
  detailsSec1: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  detailsSec2: {

  },
  logo: {
    height: '64px',
    width: '64px',
  },
  root: {
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      alignItems: 'center',
      borderBottom: '1px inset',
      display: 'flex',
      paddingBottom: theme.spacing(1.5),
    },
  },
}))

const UnitScore: FC<{ score: IScore }> = (props) => {
  const classes = scoreStyles()
  return (
    <Grid item={true} xs={12} sm={6} md={4} lg={3} xl={2}>
      <div className={classes.root}>
        <img src={props.score.thumbnailUrl} alt={props.score.title} className={classes.logo} />
        <Grid container={true}>
          <Grid item={true} xs={6} sm={12}>
            <Typography variant="h6">{props.score.title}</Typography>
          </Grid>
          <Grid item={true} xs={6} sm={12}>
            <Typography variant="body1">{props.score.level} {props.score.score}</Typography>
          </Grid>
          <Grid item={true} xs={6} sm={12}>
            <Typography variant="body2">{props.score.percentileText} percentile</Typography>
          </Grid>
          <Grid item={true} xs={6} sm={12}>
            <Typography variant="caption">Verified on {props.score.verifiedOn}</Typography>
          </Grid>
        </Grid>
      </div>
    </Grid>
  )
}
export default () => {
  const classes = getStyles()
  return (
    <Paper className={classes.card} id="scores">
      <Typography variant="h5" className={classes.heading}>
        Test Scores
      </Typography>
      <Grid container={true} spacing={2}>
        {scores.map((score) => <UnitScore score={score} key={score.id} />)}
      </Grid>
    </Paper>
  )
}
