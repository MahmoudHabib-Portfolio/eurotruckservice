import { FC, ReactNode} from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';

export const AllProviders: FC<{ children: ReactNode }> = ({children}) => {

    const queryClient = new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            refetchOnWindowFocus: false,
          },
        },
      });

  return (
    <HelmetProvider>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </HelmetProvider>
  )
}
