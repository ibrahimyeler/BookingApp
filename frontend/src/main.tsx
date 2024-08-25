import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
<<<<<<< HEAD
import { QueryClient, QueryClientProvider } from 'react-query';
=======
import { QueryClient, QueryClientProvider } from 'react-query'; // Eksik import
>>>>>>> 49304292c6ffddd1a62436e9dfc9cc0378c98387

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
);
