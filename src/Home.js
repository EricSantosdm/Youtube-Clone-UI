import React from 'react';
import { makeStyles,AppBar,IconButton,Toolbar,Button,
Drawer,List,ListItem,ListItemText,Divider, ListItemIcon
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
const useStyles=makeStyles((theme)=>({
    root:{
       height:'100vh'  
    },
    appBar:{
        boxShadow:'none',
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer:{
        width:240,
        flexShrink:0,
    },
    drawerPaper:{
        width:240,
        borderRight:'none'
    },
    grow:{
        flexGrow:1
    },
    Icons:{
        paddingRight:theme.spacing(2)

    },
    menuIcon:{
        paddingRight:theme.spacing(2),
        paddingLeft:theme.spacing(2),
    },
    logo:{
        height:25
    },
    listItemText:{
        fontSize:14,
    },
  }))
function Home(){
    const classes=useStyles();
    return(
        <div className={classes.root}>
                <AppBar color="inherit" className={classes.appBar}>
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
    <MenuIcon />
    </IconButton>
    <img src="/images/preto.png" alt="logo" className={classes.logo}/>

    
    <div className={classes.grow}/>
    <IconButton  className={classes.Icons} color="inherit" >
    <VideoCallIcon />
    </IconButton>
    <IconButton  className={classes.Icons} color="inherit" >
    <AppsIcon />
    </IconButton>
    <IconButton  className={classes.Icons} color="inherit" >
    <NotificationsIcon />
    </IconButton>
    <Button variant='outlined' color="secondary" startIcon={<AccountCircleIcon></AccountCircleIcon>}>
        Fazer Login
    </Button>
  </Toolbar>
</AppBar>

<Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
           
              <ListItem button>
                  <ListItemIcon><HomeIcon/></ListItemIcon>
                <ListItemText className={
                    {primary: classes.listItemText}
                } primary={"Inicio"} />
              </ListItem>

              <ListItem button>
                  <ListItemIcon><WhatshotIcon/></ListItemIcon>
                <ListItemText className={
                    {primary: classes.listItemText}
                } primary={"Em alta"} />
              </ListItem>
              <ListItem button>
                  <ListItemIcon><SubscriptionsIcon/></ListItemIcon>
                <ListItemText className={
                    {primary: classes.listItemText}
                } primary={"Inscrições"} />
              </ListItem>

          </List>
          <Divider />
          
        </div>
      </Drawer>
        </div>
    )
}export default Home;