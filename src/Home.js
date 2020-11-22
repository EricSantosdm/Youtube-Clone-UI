import React from 'react';
import { makeStyles,AppBar,IconButton,Toolbar,Button,
Drawer,List,ListItem,ListItemText,Divider, ListItemIcon,Box,Typography
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import RestoreIcon from '@material-ui/icons/Restore';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
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
    listItem:{
        paddingTop:4,
        paddingBottom:4
    },
    top:{
        marginTop:-30
    }
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
           
              <ListItem button classes={{root:classes.listItem}}>
                  <ListItemIcon><HomeIcon/></ListItemIcon>
                <ListItemText classes={
                    {primary: classes.listItemText}
                } primary={"Inicio"} />
              </ListItem>

              <ListItem button classes={{root:classes.listItem}}>
                  <ListItemIcon><WhatshotIcon/></ListItemIcon>
                <ListItemText classes={
                    {primary: classes.listItemText}
                } primary={"Em alta"} />
              </ListItem>
              <ListItem button classes={{root:classes.listItem}}>
                  <ListItemIcon><SubscriptionsIcon/></ListItemIcon>
                <ListItemText classes={
                    {primary: classes.listItemText}
                } primary={"Inscrições"} />
              </ListItem>

          </List>
          <Divider />

        
          <List>
           
           <ListItem button classes={{root:classes.listItem}}>
               <ListItemIcon><VideoLibraryIcon/></ListItemIcon>
             <ListItemText classes={
                 {primary: classes.listItemText}
             } primary={"Biblioteca"} />
           </ListItem>

           <ListItem button classes={{root:classes.listItem}}>
               <ListItemIcon><RestoreIcon/></ListItemIcon>
             <ListItemText classes={
                 {primary: classes.listItemText}
             } primary={"Historico"} />
           </ListItem>
           <ListItem button classes={{root:classes.listItem}}>
               <ListItemIcon><OndemandVideoIcon/></ListItemIcon>
             <ListItemText classes={
                 {primary: classes.listItemText}
             } primary={"Seus videos"} />
           </ListItem>

       </List>
    
       <Divider></Divider>
       <Box p={5} className={classes.top}>
               <Typography variant="body2">
                   Faça login para continuar</Typography>
                   <Box mt={2}>
                       <Button
                       
                       variant='outlined'
                       color='secondary'
                       startIcon={<AccountCircleIcon/>}
                       >Fazer Login

                       </Button>

                   </Box>
       </Box>
          
        </div>
      </Drawer>
        </div>
    )
}export default Home;