import React,{useState} from 'react';

import { makeStyles,AppBar,IconButton,Toolbar,Button,Hidden,
Drawer,List,ListItem,ListItemText,Divider, ListItemIcon,Box,Typography,Grid
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
height: '100vh'
},
appBar:{
boxShadow: 'none',
zIndex : theme.zIndex.drawer + 1,
},
drawer:{
width : 240,
flexShrink: 0,
},
drawerPaper:{
width : 240,
borderRight: 'none'
},
grow:{
flexGrow: 1
},
Icons:{
paddingRight: theme.spacing(2)

},
menuIcon:{
paddingRight: theme.spacing(2),
paddingLeft : theme.spacing(2),
},
logo:{
height: 25
},
listItemText:{
fontSize: 14,
},
listItem:{
paddingTop : 4,
paddingBottom: 4
},
top:{
marginTop: -30
}
}))
const videos = [
    {
      id: 1,
      title:
        'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
      channel: 'Lucas Nhimi',
      views: '11 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb1.png',
    },
    {
      id: 2,
      title:
        'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
      channel: 'Lucas Nhimi',
      views: '957 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb2.png',
    },
    {
      id: 3,
      title:
        'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
      channel: 'Lucas Nhimi',
      views: '106 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb3.png',
    },
    {
      id: 4,
      title:
        'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
      channel: 'Lucas Nhimi',
      views: '5,6 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb4.png',
    },
    {
      id: 5,
      title:
        'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
      channel: 'Lucas Nhimi',
      views: '2,2 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb5.png',
    },
    {
      id: 6,
      title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
      channel: 'Lucas Nhimi',
      views: '233 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb6.png',
    },
    {
      id: 7,
      title:
        'PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
      channel: 'Lucas Nhimi',
      views: '118 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb7.png',
    },
    {
      id: 8,
      title:
        'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04',
      channel: 'Lucas Nhimi',
      views: '1,9 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb8.png',
    },
  ];
  
  
  function Home(){
    
const classes = useStyles();


const [count, setCount] = useState(0);




return(
   
<div className={classes.root}>
    <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
            <IconButton onClick={() => setCount(count==0?1:0)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon  />
            </IconButton>
            <img src="/images/preto.png" alt="logo" className={classes.logo} />

            <div className={classes.grow} />
            <IconButton className={classes.Icons} color="inherit">
                <VideoCallIcon />
            </IconButton>
            <IconButton className={classes.Icons} color="inherit">
                <AppsIcon />
            </IconButton>
            <IconButton className={classes.Icons} color="inherit">
                <NotificationsIcon />
            </IconButton>
            <Button variant='outlined' color="secondary" startIcon={<AccountCircleIcon></AccountCircleIcon>}>
                Fazer Login
            </Button>
        </Toolbar>
    </AppBar>
<Box display="flex">
    
<Hidden mdDown={count}>
    <Drawer className={classes.drawer} variant="permanent" classes={{
          paper: classes.drawerPaper,
        }}>
        <Toolbar />
        <div className={classes.drawerContainer}>
            <List>

                <ListItem button classes={{root:classes.listItem}}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText classes={ {primary: classes.listItemText} } primary={"Inicio"} />
                </ListItem>

                <ListItem button classes={{root:classes.listItem}}>
                    <ListItemIcon>
                        <WhatshotIcon />
                    </ListItemIcon>
                    <ListItemText classes={ {primary: classes.listItemText} } primary={"Em alta"} />
                </ListItem>
                <ListItem button classes={{root:classes.listItem}}>
                    <ListItemIcon>
                        <SubscriptionsIcon />
                    </ListItemIcon>
                    <ListItemText classes={ {primary: classes.listItemText} } primary={"Inscrições"} />
                </ListItem>

            </List>
            <Divider />

            <List>

                <ListItem button classes={{root:classes.listItem}}>
                    <ListItemIcon>
                        <VideoLibraryIcon />
                    </ListItemIcon>
                    <ListItemText classes={ {primary: classes.listItemText} } primary={"Biblioteca"} />
                </ListItem>

                <ListItem button classes={{root:classes.listItem}}>
                    <ListItemIcon>
                        <RestoreIcon />
                    </ListItemIcon>
                    <ListItemText classes={ {primary: classes.listItemText} } primary={"Historico"} />
                </ListItem>
                <ListItem button classes={{root:classes.listItem}}>
                    <ListItemIcon>
                        <OndemandVideoIcon />
                    </ListItemIcon>
                    <ListItemText classes={ {primary: classes.listItemText} } primary={"Seus videos"} />
                </ListItem>

            </List>

            <Divider />
            <Box p={5} className={classes.top}>
                <Typography variant="body2">
                    Faça login para continuar</Typography>
                <Box mt={2}>
                    <Button variant='outlined' color='secondary' startIcon={<AccountCircleIcon />}
                    >Fazer Login

                    </Button>

                </Box>
            </Box>

        </div>
    </Drawer>
</Hidden>
   <Toolbar/>
    
    <Box p={7} marginLeft={-12}>
        <Typography variant='h5'
        color='gray'
        style={{fontWeight:600}}
        >Recomendados

        </Typography>
        <Grid container >
          {
              videos.map((item,index)=>(
                <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box p={0.5}>
                  <img
                    style={{ width: '100%' }}
                    alt={item.title}
                    src={item.thumb}
                  />
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant='body1'
                      color='textPrimary'
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      display='block'
                      variant='body2'
                      color='textSecondary'
                    >
                      {item.channel}
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      {`${item.views} • ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              ))
          }

        </Grid>
    </Box>
</Box>
</div>
)
}export default Home;