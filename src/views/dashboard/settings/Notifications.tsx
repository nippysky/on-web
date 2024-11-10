import * as React from 'react';
import { Typography, FormControlLabel, Switch, Box, Grid, Stack } from '@mui/material';
import PageContainer from 'src/components/PageContainer';
import DashboardCard from 'src/components/shared/DashboardCard';

function Notifications() {
  const [appNotification, setAppNotification] = React.useState(true);
  const [pushNotification, setPushNotification] = React.useState(false);

  const handleAppNotificationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAppNotification(event.target.checked);
  };

  const handlePushNotificationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPushNotification(event.target.checked);
  };

  return (
    <PageContainer title="Notification Settings" description="Your Preference & Settings">
      <DashboardCard title="Notification Settings">
        <Grid container spacing={3}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            spacing={3}
            paddingX={3}
            marginTop={3}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '80%',
                paddingY: '0.5rem',
              }}
            >
              <Typography variant="body1" fontWeight={'600'} sx={{ width: '100%' }}>
                App Notification
              </Typography>
              <Typography variant="caption" sx={{ width: '100%' }}>
                Set preference to receive app notification.
              </Typography>
            </Box>

            <FormControlLabel
              control={
                <Switch
                  checked={appNotification}
                  onChange={handleAppNotificationChange} // Corrected handler
                  color="primary"
                />
              }
              labelPlacement="start"
              sx={{ display: 'flex', alignItems: 'center' }} // Aligns switch and text on the same line
              label={undefined}
            />
          </Stack>

          {/* //////////////////////////// */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            spacing={3}
            paddingX={3}
            marginTop={3}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '80%',
                paddingY: '0.5rem',
              }}
            >
              <Typography variant="body1" fontWeight={'600'} sx={{ width: '100%' }}>
                Push Notification
              </Typography>
              <Typography variant="caption" sx={{ width: '100%' }}>
                Set preference to receive push notification.
              </Typography>
            </Box>

            <FormControlLabel
              control={
                <Switch
                  checked={pushNotification}
                  onChange={handlePushNotificationChange} // Corrected handler
                  color="primary"
                />
              }
              labelPlacement="start"
              sx={{ display: 'flex', alignItems: 'center' }} // Aligns switch and text on the same line
              label={undefined}
            />
          </Stack>
        </Grid>
      </DashboardCard>
    </PageContainer>
  );
}

export default Notifications;
