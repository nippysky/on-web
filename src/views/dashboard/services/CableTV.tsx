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
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from 'src/components/shared/DashboardCard';
import { NetworkOption } from 'src/types/services';

import DSTV from '../../../assets/images/brand/services/DSTV.png';
import GOTV from '../../../assets/images/brand/services/GOTV.png';
import STARTIMES from '../../../assets/images/brand/services/Startimes.png';
import SHOWMAX from '../../../assets/images/brand/services/Showmax.png';
import { useState, useRef } from 'react';

const tvOptions: NetworkOption[] = [
  { name: 'DSTV', icon: DSTV },
  { name: 'GOTV', icon: GOTV },
  { name: 'STARTIMES', icon: STARTIMES },
  { name: 'SHOWMAX', icon: SHOWMAX },
];

const TV_PACKAGE = [
  { id: '1', name: '150MB - Daily - ₦150.00' },
  { id: '2', name: '500MB - Weekly - ₦500.00' },
  { id: '3', name: '1GB - Monthly - ₦1000.00' },
  { id: '4', name: '3GB - Monthly - ₦2000.00' },
  { id: '5', name: '5GB - Monthly - ₦3000.00' },
  { id: '6', name: '10GB - Monthly - ₦5000.00' },
];

export default function CableTV() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [tvPackage, setTVPackage] = useState('');
  const [amount, setAmount] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [pin, setPin] = useState<string[]>(['', '', '', '']);

  // References for each PIN input box
  const pinRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleToggle = (option: NetworkOption) => {
    setSelectedOption(selectedOption === option.name ? null : option.name);
  };

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
    <PageContainer title="Cable TV" description="Buy TV Subscription">
      <DashboardCard title="Cable TV">
        <Box paddingBottom={4}>
          <Grid container spacing={3}>
            {/* Card Number */}
            <Grid item xs={12} lg={6}>
              <CustomFormLabel htmlFor="bi-cardNumber" sx={{ mt: 0 }}>
                Card Number
              </CustomFormLabel>
              <CustomOutlinedInput
                startAdornment={
                  <InputAdornment position="start">
                    <IconPhone size="20" />
                  </InputAdornment>
                }
                id="bi-cardNumber"
                placeholder="Enter Card Number"
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

            {/* Network Selection */}
            <Grid item xs={12}>
              <CustomFormLabel sx={{ mt: 0 }}>Select Network</CustomFormLabel>
              <Grid container spacing={2} columns={{ xs: 12, sm: 6, lg: 12 }}>
                {tvOptions.map((option) => (
                  <Grid item xs={6} sm={3} lg={3} key={option.name}>
                    <div
                      onClick={() => handleToggle(option)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '10px',
                        border: '2px solid',
                        borderColor: selectedOption === option.name ? '#ff9800' : '#e0e0e0',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        backgroundColor: selectedOption === option.name ? '#fff3e0' : '#ffffff',
                        transition: 'background-color 0.3s, border-color 0.3s',
                      }}
                    >
                      <img
                        src={option.icon}
                        alt={option.name}
                        style={{ width: '40px', height: '40px' }}
                      />
                      <span style={{ marginLeft: '8px', fontWeight: 'bold', color: '#333' }}>
                        {option.name}
                      </span>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* TV Package Dropdown */}
            <Grid item xs={12}>
              <CustomFormLabel htmlFor="tv-select" sx={{ mt: 0 }}>
                TV Package
              </CustomFormLabel>
              <Select
                fullWidth
                value={tvPackage}
                onChange={(e) => setTVPackage(e.target.value as string)}
                displayEmpty
                id="tv-select"
              >
                <MenuItem value="" disabled>
                  Select Package
                </MenuItem>
                {TV_PACKAGE.map((pkg) => (
                  <MenuItem key={pkg.id} value={pkg.name}>
                    {pkg.name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            {/* Confirm Button */}
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleOpenDialog}
                disabled={!phoneNumber || !amount || !selectedOption}
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
              <strong>Phone Number:</strong> {phoneNumber}
            </Typography>
            <Typography>
              <strong>Amount:</strong> {amount}
            </Typography>
            <Typography>
              <strong>Network:</strong> {selectedOption}
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
              // Process transaction here
              console.log('Processing transaction with PIN:', pin.join(''));
              handleCloseDialog();
            }}
            disabled={pin.some((digit) => digit === '')} // Disable if any PIN field is empty
          >
            Complete
          </Button>
        </DialogActions>
      </Dialog>
    </PageContainer>
  );
}
