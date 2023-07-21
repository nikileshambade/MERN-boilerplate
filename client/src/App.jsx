import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppRoutes from './components/routes';
import { ColorModeContext, useMode} from './theme'

const queryClient = new QueryClient();
// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark'
//   },
// });

const Application = () => {
  const [theme, colorMode] = useMode();
  return(
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <ColorModeContext.Provider value={colorMode} >
          <ThemeProvider theme={theme}>
            <Router>
              <AppRoutes />
            </Router>
          </ThemeProvider>
        </ColorModeContext.Provider>
      
      </QueryClientProvider>
    </React.Fragment>
  )
}

export default Application;