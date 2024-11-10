import { Box } from '@mui/material';
import RecentTxns from 'src/components/home/RecentTxns';
import PageContainer from 'src/components/container/PageContainer';

export default function TransactionHistory() {
  return (
    <PageContainer title="Transaction History" description="View all transactions">
      <Box>
        <RecentTxns title={'Transactions History'} actionType={'filter'} sliceNumber={20} />
      </Box>
    </PageContainer>
  );
}
