/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { Box, Grid } from '@mui/material';
import WalletContainer from 'src/components/home/WalletContainer';
import PageContainer from 'src/components/PageContainer';
import RecentTxns from 'src/components/home/RecentTxns';
import QuickServices from 'src/components/home/QuickServices';

const Home = () => {
  return (
    <PageContainer title="Home" description="this is Modern Dashboard page">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <WalletContainer />

            <Box marginTop={5}>
              <RecentTxns />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <QuickServices />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Home;
