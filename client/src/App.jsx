import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppRoutes from './components/routes';

const queryClient = new QueryClient();
const darkTheme = createTheme({
  palette: {
    mode: 'light'
  },
});

const Application = () => {
  return(
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
          <Router>
            <AppRoutes />
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </React.Fragment>
  )
}

export default Application;