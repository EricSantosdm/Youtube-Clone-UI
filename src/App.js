import { Button,ThemeProvider,createMuiTheme, makeStyles } from '@material-ui/core';
import React from 'react';
import Home from './Home'
const useStyles=makeStyles({
  root:{
    

  }
})
function App() {
  const theme=createMuiTheme({
    palette:{
      primary:{ 
        main:'#ff0000'
      },
      secondary:{ 
        main:'#001eff'
      },
    },
  });
  const classes=useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
    
  );
}

export default App;
