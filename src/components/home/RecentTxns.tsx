// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import { Avatar, Box, Button, Stack, Typography } from '@mui/material';
import DashboardCard from '../shared/DashboardCard';
import { IconArrowDownRight, IconArrowUpLeft, IconChevronRight } from '@tabler/icons-react';
import { useTheme } from '@mui/material/styles';
import { txnDetails } from 'src/utils/dummy';
import { formatNumberCustom } from 'src/utils/formatNumber';

const RecentTxns = () => {
  const theme = useTheme();
  const errorlight = theme.palette.error.light;
  const successlight = theme.palette.success.light;

  const handleTxnClick = () => {};

  return (
    <DashboardCard
      title="Recent Transactions"
      action={
        <Button variant="text">
          <Typography variant="body2">VIEW ALL</Typography>
        </Button>
      }
    >
      <Box marginY={5} flexDirection={'column'} display={'flex'} gap={2}>
        {txnDetails.slice(0, 5).map((txn, index) => {
          const isDebit = txn.method === 'out';
          const isCredit = txn.method === 'in';

          return (
            <section
              key={index}
              style={{
                width: '100%',
                cursor: 'pointer',
                // backgroundColor: '##fcfcfc',
                padding: 10,
              }}
              onClick={handleTxnClick}
            >
              <Stack
                spacing={3}
                justifyContent={'space-between'}
                alignItems={'center'}
                direction={'row'}
              >
                <Stack direction={'row'} spacing={2} alignItems={'center'}>
                  {isCredit ? (
                    <Avatar sx={{ bgcolor: successlight, width: 40, height: 40 }}>
                      <IconArrowUpLeft width={20} color="green" />
                    </Avatar>
                  ) : isDebit ? (
                    <Avatar sx={{ bgcolor: errorlight, width: 40, height: 40 }}>
                      <IconArrowDownRight width={20} color="#FA896B" />
                    </Avatar>
                  ) : null}

                  <Stack direction={'column'} spacing={1}>
                    <Typography variant="h6" fontWeight={600} fontSize={15}>
                      {txn.name}
                    </Typography>
                    <Typography variant="caption">Sep 04, 2024</Typography>
                  </Stack>
                </Stack>

                <Stack direction={'row'} alignItems={'center'} spacing={2}>
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
  );
};

export default RecentTxns;
