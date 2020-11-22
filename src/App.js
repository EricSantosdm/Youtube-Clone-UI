import { ThemeProvider,createMuiTheme } from '@material-ui/core';
import React from 'react';
import Home from './Home'

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

  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
    
  );
}

export default App;
