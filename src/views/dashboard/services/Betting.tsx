import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { IconMoneybag, IconUser } from '@tabler/icons-react';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomOutlinedInput from 'src/components/forms/theme-elements/CustomOutlinedInput';
import DashboardCard from 'src/components/shared/DashboardCard';
import { useState, useRef } from 'react';
import PageContainer from 'src/components/container/PageContainer';

const PROVIDER_DATA = [
  { id: '1', name: 'Sporty Bet' },
  { id: '2', name: 'Betano' },
];

const BET_PACKAGES = [
  { id: '1', name: 'Prepaid' },
  { id: '2', name: 'Postpaid' },
];

export default function Betting() {
  const [provider, setprovider] = useState('');
  const [betPackage, setbetPackage] = useState('');
  const [userID, setuserID] = useState('');
  const [amount, setAmount] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [pin, setPin] = useState<string[]>(['', '', '', '']);

  // References for each PIN input box
  const pinRefs = Array.from({ length: 4 }, () => useRef<HTMLInputElement>(null));

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  const handlePinChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    if (value && index < pin.length - 1) {
      pinRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && !pin[index] && index > 0) {
      pinRefs[index - 1].current?.focus();
    }
  };

  return (
    <PageContainer title="Betting" description="Purchase betting services">
      <DashboardCard title="Buy Electricity Units">
        <Box paddingBottom={4}>
          <Grid container spacing={3}>
            {/* provider Dropdown */}
            <Grid item xs={12} lg={6}>
              <CustomFormLabel htmlFor="provider-select" sx={{ mt: 0 }}>
                Provider
              </CustomFormLabel>
              <Select
                fullWidth
                value={provider}
                onChange={(e) => setprovider(e.target.value as string)}
                displayEmpty
                id="provider-select"
              >
                <MenuItem value="" disabled>
                  Select Provider
                </MenuItem>
                {PROVIDER_DATA.map((net) => (
                  <MenuItem key={net.id} value={net.name}>
                    {net.name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            {/* Electricity Package Dropdown */}
            <Grid item xs={12} lg={6}>
              <CustomFormLabel htmlFor="package-select" sx={{ mt: 0 }}>
                Bet Package
              </CustomFormLabel>
              <Select
                fullWidth
                value={betPackage}
                onChange={(e) => setbetPackage(e.target.value as string)}
                displayEmpty
                id="package-select"
              >
                <MenuItem value="" disabled>
                  Select Package
                </MenuItem>
                {BET_PACKAGES.map((pkg) => (
                  <MenuItem key={pkg.id} value={pkg.name}>
                    {pkg.name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            {/* Phone Number */}
            <Grid item xs={12} lg={6}>
              <CustomFormLabel htmlFor="bi-userID" sx={{ mt: 0 }}>
                User ID
              </CustomFormLabel>
              <CustomOutlinedInput
                startAdornment={
                  <InputAdornment position="start">
                    <IconUser size="20" />
                  </InputAdornment>
                }
                id="bi-userID"
                placeholder="Enter User ID"
                fullWidth
                value={userID}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setuserID(e.target.value)}
              />
            </Grid>

            {/* Amount */}
            <Grid item xs={12} lg={6}>
              <CustomFormLabel htmlFor="bi-amount" sx={{ mt: 0 }}>
                Amount
              </CustomFormLabel>
              <CustomOutlinedInput
                startAdornment={
                  <InputAdornment position="start">
                    <IconMoneybag size="20" />
                  </InputAdornment>
                }
                id="bi-amount"
                placeholder="Enter Amount"
                fullWidth
                value={amount}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)}
              />
            </Grid>

            {/* Confirm Button */}
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleOpenDialog}
                disabled={!provider || !betPackage || !userID || !amount}
              >
                Confirm Purchase
              </Button>
            </Grid>
          </Grid>
        </Box>
      </DashboardCard>

      {/* Confirmation Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="sm">
        <DialogTitle>Confirm Transaction</DialogTitle>
        <DialogContent>
          <Typography variant="subtitle1">Please review your details:</Typography>
          <Box marginTop={2}>
            <Typography>
              <strong>Provider:</strong> {provider}
            </Typography>
            <Typography>
              <strong>Package:</strong> {betPackage}
            </Typography>
            <Typography>
              <strong>User ID:</strong> {userID}
            </Typography>
            <Typography>
              <strong>Amount:</strong> {amount}
            </Typography>
          </Box>

          {/* PIN Input */}
          <Box marginTop={4}>
            <CustomFormLabel sx={{ mt: 0 }}>Enter PIN</CustomFormLabel>
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
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              console.log('Processing transaction with PIN:', pin.join(''));
              handleCloseDialog();
            }}
            disabled={pin.some((digit) => digit === '')}
          >
            Complete
          </Button>
        </DialogActions>
      </Dialog>
    </PageContainer>
  );
}
