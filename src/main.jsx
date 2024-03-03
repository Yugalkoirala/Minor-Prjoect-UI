import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  QueryClient,
  QueryClientProvider
} from 'react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import { loginRoutes } from './routes/login.routes.jsx';
import { mainRoutes } from './routes/main.routes.jsx';

const router = createBrowserRouter([...loginRoutes,...mainRoutes]);

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
