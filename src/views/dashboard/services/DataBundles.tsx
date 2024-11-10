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
import { IconPhone, IconMoneybag } from '@tabler/icons-react';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomOutlinedInput from 'src/components/forms/theme-elements/CustomOutlinedInput';
import PageContainer from 'src/components/PageContainer';
import DashboardCard from 'src/components/shared/DashboardCard';
import { useState, useRef } from 'react';

const NETWORK = [
  { id: '1', name: 'MTN' },
  { id: '2', name: 'Airtel' },
  { id: '3', name: 'Glo' },
  { id: '4', name: '9 Mobile' },
  { id: '5', name: 'Smile' },
  { id: '6', name: 'Spectranet' },
];

const DATA_PACKAGE = [
  { id: '1', name: '150MB - Daily - ₦150.00' },
  { id: '2', name: '500MB - Weekly - ₦500.00' },
  { id: '3', name: '1GB - Monthly - ₦1000.00' },
  { id: '4', name: '3GB - Monthly - ₦2000.00' },
  { id: '5', name: '5GB - Monthly - ₦3000.00' },
  { id: '6', name: '10GB - Monthly - ₦5000.00' },
];

export default function DataBundle() {
  const [network, setNetwork] = useState('');
  const [dataPackage, setDataPackage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
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
    <PageContainer
      title="Buy Data Bundle"
      description="Buy your data bundle from your favourite network"
    >
      <DashboardCard title="Buy Data Bundle">
        <Box paddingBottom={4}>
          <Grid container spacing={3}>
            {/* Network Dropdown */}
            <Grid item xs={12} lg={6}>
              <CustomFormLabel htmlFor="network-select" sx={{ mt: 0 }}>
                Network
              </CustomFormLabel>
              <Select
                fullWidth
                value={network}
                onChange={(e) => setNetwork(e.target.value as string)}
                displayEmpty
                id="network-select"
              >
                <MenuItem value="" disabled>
                  Select Network
                </MenuItem>
                {NETWORK.map((net) => (
                  <MenuItem key={net.id} value={net.name}>
                    {net.name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            {/* Data Package Dropdown */}
            <Grid item xs={12} lg={6}>
              <CustomFormLabel htmlFor="package-select" sx={{ mt: 0 }}>
                Data Package
              </CustomFormLabel>
              <Select
                fullWidth
                value={dataPackage}
                onChange={(e) => setDataPackage(e.target.value as string)}
                displayEmpty
                id="package-select"
              >
                <MenuItem value="" disabled>
                  Select Package
                </MenuItem>
                {DATA_PACKAGE.map((pkg) => (
                  <MenuItem key={pkg.id} value={pkg.name}>
                    {pkg.name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            {/* Phone Number */}
            <Grid item xs={12} lg={6}>
              <CustomFormLabel htmlFor="bi-phone" sx={{ mt: 0 }}>
                Phone Number
              </CustomFormLabel>
              <CustomOutlinedInput
                startAdornment={
                  <InputAdornment position="start">
                    <IconPhone size="20" />
                  </InputAdornment>
                }
                id="bi-phone"
                placeholder="Enter Phone Number"
                fullWidth
                value={phoneNumber}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPhoneNumber(e.target.value)
                }
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
                disabled={!network || !dataPackage || !phoneNumber || !amount}
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
              <strong>Network:</strong> {network}
            </Typography>
            <Typography>
              <strong>Data Package:</strong> {dataPackage}
            </Typography>
            <Typography>
              <strong>Phone Number:</strong> {phoneNumber}
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
