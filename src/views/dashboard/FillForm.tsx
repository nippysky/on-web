import { Box, Button, Grid, InputAdornment } from '@mui/material';
import { IconMail, IconMessage2, IconUser, IconWriting } from '@tabler/icons-react';
import PageContainer from 'src/components/container/PageContainer';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomOutlinedInput from 'src/components/forms/theme-elements/CustomOutlinedInput';
import DashboardCard from 'src/components/shared/DashboardCard';

export default function FillForm() {
  return (
    <PageContainer title="Support" description="this is Modern Dashboard page">
      <Box>
        <DashboardCard
          title="How Can We Help You?"
          subtitle="Kindly fill the form and we will get back to you."
        >
          <Grid container spacing={3}>
            {/*Name  */}
            <Grid item xs={12} lg={6}>
              <Grid item xs={12}>
                <CustomFormLabel htmlFor="bi-name" sx={{ mt: 0 }}>
                  Full Name
                </CustomFormLabel>
              </Grid>
              <Grid item xs={12}>
                <CustomOutlinedInput
                  startAdornment={
                    <InputAdornment position="start">
                      <IconUser size="20" />
                    </InputAdornment>
                  }
                  id="bi-name"
                  placeholder="John Deo"
                  fullWidth
                />
              </Grid>
            </Grid>

            {/* Email */}
            <Grid item xs={12} lg={6}>
              <Grid item xs={12}>
                <CustomFormLabel htmlFor="bi-email" sx={{ mt: 0 }}>
                  Email Address
                </CustomFormLabel>
              </Grid>
              <Grid item xs={12}>
                <CustomOutlinedInput
                  startAdornment={
                    <InputAdornment position="start">
                      <IconMail size="20" />
                    </InputAdornment>
                  }
                  id="bi-email"
                  placeholder="Johndeo@company.com"
                  fullWidth
                />
              </Grid>
            </Grid>

            {/* Subject */}
            <Grid item xs={12}>
              <Grid item xs={12}>
                <CustomFormLabel htmlFor="bi-subject" sx={{ mt: 0 }}>
                  Subject
                </CustomFormLabel>
              </Grid>
              <Grid item xs={12}>
                <CustomOutlinedInput
                  startAdornment={
                    <InputAdornment position="start">
                      <IconWriting size="20" />
                    </InputAdornment>
                  }
                  id="bi-subject"
                  placeholder="Enter mail subject"
                  fullWidth
                />
              </Grid>
            </Grid>

            {/* Message */}
            <Grid item xs={12}>
              <Grid item xs={12}>
                <CustomFormLabel htmlFor="bi-message" sx={{ mt: 0 }}>
                  Message
                </CustomFormLabel>
              </Grid>
              <Grid item xs={12}>
                <CustomOutlinedInput
                  startAdornment={
                    <InputAdornment position="start">
                      <IconMessage2 size="20" />
                    </InputAdornment>
                  }
                  id="bi-message"
                  placeholder="Enter your message"
                  multiline
                  fullWidth
                />
              </Grid>
            </Grid>

            {/* Send Button */}
            <Grid item xs={12} lg={4} mt={3}>
              <Button variant="contained" color="primary" fullWidth>
                Send
              </Button>
            </Grid>
          </Grid>
        </DashboardCard>
      </Box>
    </PageContainer>
  );
}
