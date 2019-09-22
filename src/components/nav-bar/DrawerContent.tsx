import {
  createStyles, Divider, makeStyles, Theme,
} from '@material-ui/core'
import React, { FC } from 'react'
import { AdditionalLinkMenu } from '../route-cv/additional-links/Links'
const useStyles = makeStyles((theme: Theme) => createStyles({
  toolbar: theme.mixins.toolbar,
  toolbarSpacing: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}))

const DrawerContent: FC = () => {
  const classes = useStyles()
  return (
    <div>
      <div className={`${classes.toolbar} ${classes.toolbarSpacing}`} />
      <Divider />
      <AdditionalLinkMenu />
    </div>

  )
}

export default DrawerContent
