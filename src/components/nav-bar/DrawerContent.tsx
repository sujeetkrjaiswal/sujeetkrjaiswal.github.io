// tslint:disable: jsx-no-multiline-js

import {
  Collapse, createStyles, Divider, Link,
  List, ListItem, ListItemIcon,
  ListItemText, makeStyles, Theme,
} from '@material-ui/core'
import { ListItemProps } from '@material-ui/core/ListItem'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import AdditionalLinkIcon from '@material-ui/icons/OpenInBrowser'
import React, { FC } from 'react'
import { AdditionalLinkMenu } from '../route-cv/additional-links/Links'
import listData, { IListEntry } from './listData'

const useStyles = makeStyles((theme: Theme) => createStyles({
  toolbar: theme.mixins.toolbar,
  toolbarSpacing: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))
const NestedAdditionalLink: FC = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)
  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <List>
      <ListItem button={true} onClick={handleClick}>
        <ListItemIcon><AdditionalLinkIcon /></ListItemIcon>
        <ListItemText primary="Links" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit={true}>
        <div className={classes.nested}>
          <AdditionalLinkMenu />
        </div>
      </Collapse>
    </List>
  )
}
const NestedListItem: FC<{ item: IListEntry }> = ({ item }) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <>
      <ListItem button={true} onClick={handleClick}>
        {item.icon ? <ListItemIcon>{item.icon}</ListItemIcon> : null}
        <ListItemText primary={item.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit={true}>
        <List disablePadding={true}>
          {(item.children || []).map((childItem) => (
            <NonNestedListItem
              key={childItem.id}
              className={classes.nested}
              item={childItem}
            />
          ))}
        </List>
      </Collapse>
    </>
  )
}
function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button={true} component="a" {...props} />
}

const NonNestedListItem: FC<{ item: IListEntry, className: string }> = ({ item, className }) => (
  <ListItemLink href={item.url || ''} target={item.target} className={className}>
    {item.icon ? <ListItemIcon><item.icon /></ListItemIcon> : null}
    <ListItemText primary={item.name} secondary={item.subtext} />
  </ListItemLink>
)

const DrawerContent: FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={`${classes.toolbar} ${classes.toolbarSpacing}`} />
      <Divider />
      <NestedAdditionalLink />
      <Divider />
      <List component="nav">
        {listData.map(
          (listItem) => listItem.children && listItem.children.length ?
            <NestedListItem item={listItem} key={listItem.id} /> :
            <NonNestedListItem key={listItem.id} item={listItem} className="" />,
        )}
      </List>

    </div>

  )
}

export default DrawerContent
