import * as React from 'react';
import './globals.css';
import { ApolloWrapper } from "@/lib/apollo-wrapper";
import ThemeRegistry from '@/components/ThemeRegistry';
import Image from 'next/image';
import Box from '@mui/material/Box';
import BottomNav from '@/components/BottomNav.client';
import AnalyticsProvider from '@/lib/analytics-provider';

export const metadata = {
  title: 'Threads',
  description: '',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="app-root">
        <AnalyticsProvider>
          <ApolloWrapper>
            <ThemeRegistry>
              <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Box display="flex" justifyContent="center" alignItems="center" flexGrow={1} flexDirection="column">
                  <Box sx={{ padding: 2 }}>
                    <Image
                      className="invert"
                      src="https://seeklogo.com/images/T/threads-logo-E9BA734BF6-seeklogo.com.png?v=638252100960000000"
                      alt="Logo"
                      width={50}
                      height={50}
                    />
                  </Box>
                  <Box>
                    {children}
                  </Box>
                </Box>
                <Box sx={{ width: '100%', position: 'fixed', bottom: 0 }}>
                  <BottomNav />
                </Box>
              </Box>
            </ThemeRegistry>
          </ApolloWrapper>
        </AnalyticsProvider>
      </body>
    </html>
  );
}
