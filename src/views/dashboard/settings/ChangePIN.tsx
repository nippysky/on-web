import React, { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  InputAdornment,
  IconButton,
  Typography,
} from '@mui/material';
import { IconEye, IconEyeOff, IconLock, IconMail } from '@tabler/icons-react';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomOutlinedInput from 'src/components/forms/theme-elements/CustomOutlinedInput';
import PageContainer from 'src/components/PageContainer';
import DashboardCard from 'src/components/shared/DashboardCard';

export default function ChangePIN() {
  const [oldPin, setOldPin] = useState('');
  const [newPin, setNewPin] = useState('');
  const [confirmNewPin, setConfirmNewPin] = useState('');
  const [code, setCode] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [openForgotDialog, setOpenForgotDialog] = useState(false);
  const [showOldPin, setShowOldPin] = useState(false);
  const [showNewPin, setShowNewPin] = useState(false);
  const [showConfirmNewPin, setShowConfirmNewPin] = useState(false);

  const togglePasswordVisibility = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setter((prev) => !prev);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleOpenForgotDialog = () => {
    setOpenForgotDialog(true);
  };

  const handleCloseForgotDialog = () => {
    setOpenForgotDialog(false);
  };

  return (
    <PageContainer title="Change PIN" description="Change PIN">
      <DashboardCard title="Change PIN">
        <Box paddingBottom={4}>
          <Grid container spacing={3}>
            {/* Old PIN */}
            <Grid item xs={12}>
              <CustomFormLabel htmlFor="old-pin" sx={{ mt: 0 }}>
                Old PIN
              </CustomFormLabel>
              <CustomOutlinedInput
                id="old-pin"
                placeholder="Enter Old PIN"
                type={showOldPin ? 'text' : 'password'}
                fullWidth
                value={oldPin}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOldPin(e.target.value)}
                required
                startAdornment={
                  <InputAdornment position="start">
                    <IconLock size="20" />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={() => togglePasswordVisibility(setShowOldPin)} edge="end">
                      {showOldPin ? <IconEyeOff size="20" /> : <IconEye size="20" />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Grid>

            {/* New PIN */}
            <Grid item xs={12} lg={6}>
              <CustomFormLabel htmlFor="new-pin" sx={{ mt: 0 }}>
                New PIN
              </CustomFormLabel>
              <CustomOutlinedInput
                id="new-pin"
                placeholder="Enter New PIN"
                type={showNewPin ? 'text' : 'password'}
                fullWidth
                value={newPin}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewPin(e.target.value)}
                required
                startAdornment={
                  <InputAdornment position="start">
                    <IconLock size="20" />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={() => togglePasswordVisibility(setShowNewPin)} edge="end">
                      {showNewPin ? <IconEyeOff size="20" /> : <IconEye size="20" />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Grid>

            {/* Confirm New PIN */}
            <Grid item xs={12} lg={6}>
              <CustomFormLabel htmlFor="confirm-new-pin" sx={{ mt: 0 }}>
                Confirm New PIN
              </CustomFormLabel>
              <CustomOutlinedInput
                id="confirm-new-pin"
                placeholder="Confirm New PIN"
                type={showConfirmNewPin ? 'text' : 'password'}
                fullWidth
                value={confirmNewPin}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setConfirmNewPin(e.target.value)
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
                      onClick={() => togglePasswordVisibility(setShowConfirmNewPin)}
                      edge="end"
                    >
                      {showConfirmNewPin ? <IconEyeOff size="20" /> : <IconEye size="20" />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Grid>

            {/* Confirm Button and Forgot PIN */}
            <Grid item xs={12} display="flex" justifyContent="space-between" alignItems="center">
              <Button
                variant="contained"
                color="primary"
                onClick={handleOpenDialog}
                disabled={!oldPin || !newPin || !confirmNewPin}
              >
                Continue
              </Button>
              <Button color="secondary" onClick={handleOpenForgotDialog}>
                Forgot PIN?
              </Button>
            </Grid>
          </Grid>
        </Box>
      </DashboardCard>

      {/* Confirmation Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="sm">
        <DialogTitle>Confirm PIN Change</DialogTitle>
        <DialogContent>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Please enter the code sent to your email to confirm PIN change.
          </Typography>
          <Grid container spacing={2}>
            {/* Code Input */}
            <Grid item xs={12}>
              <CustomFormLabel htmlFor="verification-code" sx={{ mt: 0 }}>
                Verification Code
              </CustomFormLabel>
              <CustomOutlinedInput
                id="verification-code"
                placeholder="Enter Verification Code"
                fullWidth
                value={code}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCode(e.target.value)}
                required
                startAdornment={
                  <InputAdornment position="start">
                    <IconMail size="20" />
                  </InputAdornment>
                }
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Resend Code
          </Button>
          <Button variant="contained" color="primary" onClick={() => {}}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      {/* Forgot PIN Dialog */}
      <Dialog open={openForgotDialog} onClose={handleCloseForgotDialog} fullWidth maxWidth="sm">
        <DialogTitle>Reset PIN</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            {/* Code Input */}
            <Grid item xs={12}>
              <CustomFormLabel htmlFor="reset-code" sx={{ mt: 0 }}>
                Verification Code
              </CustomFormLabel>
              <CustomOutlinedInput
                id="reset-code"
                placeholder="Enter Verification Code"
                fullWidth
                value={code}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCode(e.target.value)}
                required
                startAdornment={
                  <InputAdornment position="start">
                    <IconMail size="20" />
                  </InputAdornment>
                }
              />
            </Grid>

            {/* New PIN Input */}
            <Grid item xs={12}>
              <CustomFormLabel htmlFor="reset-new-pin" sx={{ mt: 0 }}>
                New PIN
              </CustomFormLabel>
              <CustomOutlinedInput
                id="reset-new-pin"
                placeholder="Enter New PIN"
                type="password"
                fullWidth
                value={newPin}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewPin(e.target.value)}
                required
                startAdornment={
                  <InputAdornment position="start">
                    <IconLock size="20" />
                  </InputAdornment>
                }
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={() => {}}>
            Resend Code
          </Button>
          <Button variant="contained" color="primary" onClick={() => {}}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </PageContainer>
  );
}
