import React, { useState } from 'react';
import { Box, Button, Grid, InputAdornment, IconButton } from '@mui/material';
import { IconEye, IconEyeOff, IconLock } from '@tabler/icons-react';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomOutlinedInput from 'src/components/forms/theme-elements/CustomOutlinedInput';
import PageContainer from 'src/components/PageContainer';
import DashboardCard from 'src/components/shared/DashboardCard';

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  const togglePasswordVisibility = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setter((prev) => !prev);
  };

  return (
    <PageContainer title="Change Password" description="Change your password">
      <DashboardCard title="Change Password">
        <Box paddingBottom={4}>
          <Grid container spacing={3}>
            {/* Old Password */}
            <Grid item xs={12}>
              <CustomFormLabel htmlFor="old-password" sx={{ mt: 0 }}>
                Old Password
              </CustomFormLabel>
              <CustomOutlinedInput
                id="old-password"
                placeholder="Enter Old Password"
                type={showOldPassword ? 'text' : 'password'}
                fullWidth
                value={oldPassword}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setOldPassword(e.target.value)
                }
                required
                startAdornment={
                  <InputAdornment position="start">
                    <IconLock size="20" />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => togglePasswordVisibility(setShowOldPassword)}
                      edge="end"
                    >
                      {showOldPassword ? <IconEyeOff size="20" /> : <IconEye size="20" />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Grid>

            {/* New Password */}
            <Grid item xs={12} lg={6}>
              <CustomFormLabel htmlFor="new-password" sx={{ mt: 0 }}>
                New Password
              </CustomFormLabel>
              <CustomOutlinedInput
                id="new-password"
                placeholder="Enter New Password"
                type={showNewPassword ? 'text' : 'password'}
                fullWidth
                value={newPassword}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNewPassword(e.target.value)
                }
                required
                startAdornment={
                  <InputAdornment position="start">
                    <IconLock size="20" />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => togglePasswordVisibility(setShowNewPassword)}
                      edge="end"
                    >
                      {showNewPassword ? <IconEyeOff size="20" /> : <IconEye size="20" />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Grid>

            {/* Confirm New Password */}
            <Grid item xs={12} lg={6}>
              <CustomFormLabel htmlFor="confirm-new-password" sx={{ mt: 0 }}>
                Confirm New Password
              </CustomFormLabel>
              <CustomOutlinedInput
                id="confirm-new-password"
                placeholder="Confirm New Password"
                type={showConfirmNewPassword ? 'text' : 'password'}
                fullWidth
                value={confirmNewPassword}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setConfirmNewPassword(e.target.value)
                }
                required
                startAdornment={
                  <InputAdornment position="start">
                    <IconLock size="20" />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => togglePasswordVisibility(setShowConfirmNewPassword)}
                      edge="end"
                    >
                      {showConfirmNewPassword ? <IconEyeOff size="20" /> : <IconEye size="20" />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12} display="flex" justifyContent="flex-start">
              <Button
                variant="contained"
                color="primary"
                disabled={!oldPassword || !newPassword || !confirmNewPassword}
                onClick={() => {
                  // Submit form logic here
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
}
