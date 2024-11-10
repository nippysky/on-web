import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
  useTheme,
  TextField,
  Chip,
} from '@mui/material';
import {
  IconArrowDownRight,
  IconArrowUpLeft,
  IconChevronRight,
  IconCopy,
  IconShare,
} from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom'; // for navigation
import DashboardCard from '../shared/DashboardCard';
import { txnDetails } from 'src/utils/dummy';
import { formatNumberCustom } from 'src/utils/formatNumber';

interface RecentTxnsProps {
  title: string;
  actionType: 'view' | 'filter';
  sliceNumber?: number;
}

const RecentTxns: React.FC<RecentTxnsProps> = ({ title, actionType, sliceNumber = 5 }) => {
  const theme = useTheme();
  const navigate = useNavigate(); // Initialize useNavigate for navigation
  const errorlight = theme.palette.error.light;
  const successlight = theme.palette.success.light;

  // State to control the transaction details dialog and filter modal
  const [open, setOpen] = useState(false);
  const [selectedTxn, setSelectedTxn] = useState<any>(null);
  const [filterOpen, setFilterOpen] = useState(false); // New state for filter modal

  const handleTxnClick = (txn: any) => {
    setSelectedTxn(txn);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTxn(null);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedTxn?.reference);
    alert('Reference copied to clipboard!');
  };

  // Function for the "View All" button to navigate to the transaction history page
  const handleViewAll = () => {
    navigate('/dashboards/profile/transaction-history');
  };

  // Function for the "Filter" button to open the filter modal
  const handleFilterOpen = () => {
    setFilterOpen(true);
  };

  const handleFilterClose = () => {
    setFilterOpen(false);
  };

  return (
    <Box>
      <DashboardCard
        title={title}
        subtitle="View transaction history"
        action={
          actionType === 'view' ? (
            <Button variant="text" onClick={handleViewAll}>
              <Typography variant="body2">VIEW ALL</Typography>
            </Button>
          ) : (
            <Button variant="text" onClick={handleFilterOpen}>
              <Typography variant="body2">FILTER</Typography>
            </Button>
          )
        }
      >
        <Box
          marginY={5}
          flexDirection="column"
          display="flex"
          gap={2}
          sx={{ width: '100%', overflowX: 'auto' }}
        >
          {txnDetails.slice(0, sliceNumber).map((txn, index) => {
            const isCredit = txn.method === 'in';

            return (
              <section
                key={index}
                style={{
                  width: '100%',
                  cursor: 'pointer',
                  padding: 10,
                }}
                onClick={() => handleTxnClick(txn)}
              >
                <Stack
                  spacing={3}
                  justifyContent="space-between"
                  alignItems="center"
                  direction="row"
                  sx={{
                    flexWrap: 'wrap',
                    gap: 1,
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar
                      sx={{
                        bgcolor: isCredit ? successlight : errorlight,
                        width: 40,
                        height: 40,
                      }}
                    >
                      {isCredit ? (
                        <IconArrowUpLeft width={20} color="green" />
                      ) : (
                        <IconArrowDownRight width={20} color="#FA896B" />
                      )}
                    </Avatar>

                    <Stack direction="column" spacing={1}>
                      <Typography variant="h6" fontWeight={600} fontSize={15}>
                        {txn.name}
                      </Typography>
                      <Typography variant="caption">Sep 04, 2024</Typography>
                    </Stack>
                  </Stack>

                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Typography variant="body1" fontSize={15} fontWeight={700}>
                      {isCredit ? '+' : '-'} ₦{formatNumberCustom(txn.amount)}
                    </Typography>
                    <IconChevronRight size={15} />
                  </Stack>
                </Stack>
              </section>
            );
          })}
        </Box>
      </DashboardCard>

      {/* Dialog for Transaction Details */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Transaction Details</DialogTitle>
        <DialogContent dividers>
          {selectedTxn && (
            <Stack spacing={2}>
              <Typography variant="h6" align="center" fontWeight="bold">
                Amount - ₦{formatNumberCustom(selectedTxn.amount)}
              </Typography>
              <Typography>Date & Time: Sep 04, 2024 10:00PM</Typography>
              <Typography>Token: {selectedTxn.token}</Typography>
              <Typography>Units: {selectedTxn.units} KW</Typography>
              <Typography>Address: Abuja, Nigeria</Typography>
              <Typography>Transaction Type: {selectedTxn.type}</Typography>
              <Typography>
                Transaction Status: <span style={{ color: 'green' }}>Success</span>
              </Typography>
              <Typography>Fees: ₦{selectedTxn.fees}</Typography>
              <Typography>Reference: {selectedTxn.reference}</Typography>
            </Stack>
          )}
        </DialogContent>
        <DialogActions>
          <Button startIcon={<IconCopy />} onClick={handleCopy}>
            Copy Reference
          </Button>
          <Button
            startIcon={<IconShare />}
            onClick={() => alert('Share functionality is triggered')}
          >
            Share Receipt
          </Button>
          <Button onClick={handleClose} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Filter Modal */}
      <Dialog open={filterOpen} onClose={handleFilterClose} fullWidth maxWidth="sm">
        <DialogTitle>Filter By</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            {/* Filter options as Chips */}
            <Stack direction="row" spacing={1} flexWrap="wrap">
              <Chip label="Airtime" clickable color="primary" />
              <Chip label="Electricity" clickable color="primary" />
              <Chip label="Data Bundles" clickable color="primary" />
              <Chip label="Education" clickable color="primary" />
            </Stack>
            {/* Date Fields */}
            <TextField
              label="Start Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
            <TextField label="End Date" type="date" InputLabelProps={{ shrink: true }} fullWidth />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" fullWidth>
            Filter
          </Button>
          <Button onClick={handleFilterClose} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default RecentTxns;
