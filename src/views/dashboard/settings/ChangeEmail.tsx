import * as React from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  InputAdornment,
  TextField,
} from '@mui/material';
import { IconMail, IconLock } from '@tabler/icons-react';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomOutlinedInput from 'src/components/forms/theme-elements/CustomOutlinedInput';
import PageContainer from 'src/components/PageContainer';
import DashboardCard from 'src/components/shared/DashboardCard';

import { useState, useRef } from 'react';

export default function ChangeEmail() {
  const [emailAddress, setEmailAddress] = useState('');
  const [code, setCode] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [pin, setPin] = useState<string[]>(['', '', '', '']);

  // References for each PIN input box
  const pinRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handlePinChange = (index: number, value: string) => {
    if (value.length > 1) return; // Prevent more than one character
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    // Move focus to the next box if a character is entered
    if (value && index < pin.length - 1) {
      pinRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    // Move to the previous box on backspace
    if (event.key === 'Backspace' && !pin[index] && index > 0) {
      pinRefs[index - 1].current?.focus();
    }
  };

  return (
    <PageContainer title="Change Email Address" description="Change Email Address">
      <DashboardCard title="Change Email Address">
        <Box paddingBottom={4}>
          <Grid container spacing={3}>
            {/* Email Address */}
            <Grid item xs={12}>
              <CustomFormLabel htmlFor="email-address" sx={{ mt: 0 }}>
                Email Address
              </CustomFormLabel>
              <CustomOutlinedInput
                startAdornment={
                  <InputAdornment position="start">
                    <IconMail size="20" />
                  </InputAdornment>
                }
                id="email-address"
                placeholder="Enter Email Address"
                fullWidth
                value={emailAddress}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmailAddress(e.target.value)
                }
                required
                type="email"
                autoComplete="email"
                inputProps={{ autoCorrect: 'off', spellCheck: 'false' }}
              />
            </Grid>

            {/* PIN Input */}
            <Grid item xs={12}>
              <Box>
                <CustomFormLabel sx={{ mt: 0 }}>Enter Transaction PIN</CustomFormLabel>
                <Grid container spacing={1}>
                  {pin.map((value, index) => (
                    <Grid item xs={3} key={index}>
                      <TextField
                        variant="outlined"
                        type="password"
                        inputProps={{ maxLength: 1, style: { textAlign: 'center' } }}
                        value={value}
                        onChange={(e) => handlePinChange(index, e.target.value)}
                        onKeyDown={(e) =>
                          handleKeyDown(index, e as React.KeyboardEvent<HTMLInputElement>)
                        }
                        inputRef={pinRefs[index]}
                        fullWidth
                        required
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>

            {/* Confirm Button */}
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleOpenDialog}
                disabled={!emailAddress || pin.some((digit) => digit === '')}
              >
                Continue
              </Button>
            </Grid>
          </Grid>
        </Box>
      </DashboardCard>

      {/* Confirmation Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="sm">
        <DialogTitle>Confirm Email Change</DialogTitle>
        <DialogContent>
          {/* Code Input */}
          <Grid item xs={12} marginTop={3}>
            <CustomFormLabel htmlFor="verification-code" sx={{ mt: 0 }}>
              Verification Code
            </CustomFormLabel>
            <CustomOutlinedInput
              startAdornment={
                <InputAdornment position="start">
                  <IconLock size="20" />
                </InputAdornment>
              }
              id="verification-code"
              placeholder="Enter Verification Code"
              fullWidth
              value={code}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCode(e.target.value)}
              required
              autoComplete="off"
              type="text"
            />
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Resend Code
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {}}
            disabled={!code || pin.some((digit) => digit === '')} // Disable if any PIN field or code is empty
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </PageContainer>
  );
}
