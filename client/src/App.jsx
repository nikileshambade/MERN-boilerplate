import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes';

const queryClient = new QueryClient();

const Application = () => {
  return(
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <Router>
          <AppRoutes />
        </Router>
      </QueryClientProvider>
    </React.Fragment>
  )
}

export default Application;