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
  Typography,
} from '@mui/material';
import { IconPhone, IconMoneybag, IconNumber } from '@tabler/icons-react';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomOutlinedInput from 'src/components/forms/theme-elements/CustomOutlinedInput';
import PageContainer from 'src/components/PageContainer';
import DashboardCard from 'src/components/shared/DashboardCard';
import { NetworkOption } from 'src/types/services';

import WAEC from '../../../assets/images/brand/services/WAEC.png';
import { useState, useRef } from 'react';

const educationOption: NetworkOption[] = [
  { name: 'WAEC Result Checker PIN', icon: WAEC },
  { name: 'WAEC Registration PIN', icon: WAEC },
];

export default function Education() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [quantity, setquantity] = useState('');
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
    <PageContainer title="Education" description="Make Education Purchase">
      <DashboardCard title="Education">
        <Box paddingBottom={4}>
          <Grid container spacing={3}>
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

            {/* Network Selection */}
            <Grid item xs={12}>
              <CustomFormLabel sx={{ mt: 0 }}>Select Type</CustomFormLabel>
              <Grid container spacing={2}>
                {educationOption.map((option) => (
                  <Grid item xs={12} lg={6} key={option.name}>
                    {/* Full width on all screens */}
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

            {/* Amount */}
            <Grid item xs={12} lg={6}>
              <CustomFormLabel htmlFor="bi-quantity" sx={{ mt: 0 }}>
                Quantity
              </CustomFormLabel>
              <CustomOutlinedInput
                startAdornment={
                  <InputAdornment position="start">
                    <IconNumber size="20" />
                  </InputAdornment>
                }
                id="bi-quantity"
                placeholder="Enter Quantity"
                fullWidth
                value={quantity}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setquantity(e.target.value)}
              />
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
