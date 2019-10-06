import { createStyles, CssBaseline, Drawer, Hidden, makeStyles, SwipeableDrawer, Theme, useTheme } from '@material-ui/core'
import React, { FC } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { NavBarClosed, NavBarOpened } from '../../actions/navBar.actions'
import { IRootState } from '../../reducers/root-reducers'
import DrawerContent from './DrawerContent'

const drawerWidth = 250
const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      flexShrink: 0,
      width: drawerWidth,
    },
  },
  drawerPaperPermanent: {
    height: `calc(100% - 64px)`,
    top: 'auto',
    width: drawerWidth,
  },
  drawerPaperTemporary: {
    top: 'auto',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}),
)

interface IProps {
  isDrawerOpen: boolean,
  drawerClosed: () => void
  drawerOpened: () => void
}

const ResponsiveDrawerContainer: FC<IProps> = (props) => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden mdUp={true} implementation="css">
          <SwipeableDrawer
            // container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={props.isDrawerOpen}
            onClose={props.drawerClosed}
            onOpen={props.drawerOpened}
            classes={{ paper: classes.drawerPaperTemporary }}
            ModalProps={{ keepMounted: true }}
          >
            <DrawerContent />
          </SwipeableDrawer>
        </Hidden>
        <Hidden smDown={true} implementation="js">
          <Drawer
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            classes={{ paper: classes.drawerPaperPermanent }}
            variant="permanent"
          >
            <DrawerContent />
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        {props.children}
      </main>
    </div>
  )
}

function mapStateToProps(state: IRootState) {
  return {
    isDrawerOpen: state.navBar.isOpen,
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    drawerClosed: bindActionCreators(NavBarClosed, dispatch),
    drawerOpened: bindActionCreators(NavBarOpened, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResponsiveDrawerContainer)
