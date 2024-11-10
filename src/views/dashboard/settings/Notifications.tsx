import * as React from 'react';
import { Typography, FormControlLabel, Switch, Box } from '@mui/material';
import PageContainer from 'src/components/PageContainer';
import DashboardCard from 'src/components/shared/DashboardCard';

function Notifications() {
  const [appNotification, setAppNotification] = React.useState(true);
  const [pushNotification, setPushNotification] = React.useState(false);

  const handleAppNotificationChange = (event: Event) => {
    setAppNotification((event.target as HTMLInputElement).checked);
  };

  const handlePushNotificationChange = (event: Event) => {
    setPushNotification((event.target as HTMLInputElement).checked);
  };
  return (
    <PageContainer title="Notification Settings" description="Your Preference & Settings">
      <DashboardCard title="Notification Settings">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <FormControlLabel
            control={
              <Switch
                checked={appNotification}
                onChange={() => handleAppNotificationChange}
                color="primary"
              />
            }
            label={<Typography variant="body1">App Notification</Typography>}
            labelPlacement="start"
          />
          <Typography variant="body2" color="text.secondary">
            Set preference to receive app notification.
          </Typography>

          <FormControlLabel
            control={
              <Switch
                checked={pushNotification}
                onChange={() => handlePushNotificationChange}
                color="primary"
              />
            }
            label={<Typography variant="body1">Push Notification</Typography>}
            labelPlacement="start"
          />
          <Typography variant="body2" color="text.secondary">
            Set preference to receive push notification.
          </Typography>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
}

export default Notifications;
