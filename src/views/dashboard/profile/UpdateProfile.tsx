import { Box, Button, Grid, InputAdornment } from '@mui/material';
import { IconMail, IconMessage2, IconUser, IconPhone } from '@tabler/icons-react';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomOutlinedInput from 'src/components/forms/theme-elements/CustomOutlinedInput';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from 'src/components/shared/DashboardCard';
import { useState, ChangeEvent } from 'react';

interface ProfileData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
}

export default function UpdateProfile() {
  const [profileData, setProfileData] = useState<ProfileData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
  });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof ProfileData,
  ) => {
    setProfileData({
      ...profileData,
      [field]: event.target.value,
    });
  };

  const handleUpdate = () => {
    console.log('Profile Data:', profileData);
    // API call logic here
  };

  return (
    <PageContainer title="Update Profile" description="Update your account profile">
      <Box>
        <DashboardCard title="Update Your Profile" subtitle="Update your account profile.">
          <Grid container spacing={3}>
            {/* First Name */}
            <Grid item xs={12} lg={6}>
              <CustomFormLabel htmlFor="first-name">First Name</CustomFormLabel>
              <CustomOutlinedInput
                startAdornment={
                  <InputAdornment position="start">
                    <IconUser size="20" />
                  </InputAdornment>
                }
                id="first-name"
                placeholder="John"
                fullWidth
                value={profileData.firstName}
                onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                  handleInputChange(e, 'firstName')
                }
              />
            </Grid>

            {/* Last Name */}
            <Grid item xs={12} lg={6}>
              <CustomFormLabel htmlFor="last-name">Last Name</CustomFormLabel>
              <CustomOutlinedInput
                startAdornment={
                  <InputAdornment position="start">
                    <IconUser size="20" />
                  </InputAdornment>
                }
                id="last-name"
                placeholder="Doe"
                fullWidth
                value={profileData.lastName}
                onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                  handleInputChange(e, 'lastName')
                }
              />
            </Grid>

            {/* Email */}
            <Grid item xs={12} lg={6}>
              <CustomFormLabel htmlFor="email">Email Address</CustomFormLabel>
              <CustomOutlinedInput
                startAdornment={
                  <InputAdornment position="start">
                    <IconMail size="20" />
                  </InputAdornment>
                }
                id="email"
                placeholder="johndoe@example.com"
                fullWidth
                value={profileData.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                  handleInputChange(e, 'email')
                }
              />
            </Grid>

            {/* Phone Number */}
            <Grid item xs={12} lg={6}>
              <CustomFormLabel htmlFor="phone-number">Phone Number</CustomFormLabel>
              <CustomOutlinedInput
                startAdornment={
                  <InputAdornment position="start">
                    <IconPhone size="20" />
                  </InputAdornment>
                }
                id="phone-number"
                placeholder="+1234567890"
                fullWidth
                value={profileData.phoneNumber}
                onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                  handleInputChange(e, 'phoneNumber')
                }
              />
            </Grid>

            {/* Address */}
            <Grid item xs={12}>
              <CustomFormLabel htmlFor="address">Address</CustomFormLabel>
              <CustomOutlinedInput
                startAdornment={
                  <InputAdornment position="start">
                    <IconMessage2 size="20" />
                  </InputAdornment>
                }
                id="address"
                placeholder="Enter your address"
                multiline
                fullWidth
                value={profileData.address}
                onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                  handleInputChange(e, 'address')
                }
              />
            </Grid>

            {/* Update Button */}
            <Grid item xs={12} lg={4} mt={3}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleUpdate}
                disabled={
                  !profileData.firstName ||
                  !profileData.lastName ||
                  !profileData.email ||
                  !profileData.phoneNumber ||
                  !profileData.address
                }
              >
                Update
              </Button>
            </Grid>
          </Grid>
        </DashboardCard>
      </Box>
    </PageContainer>
  );
}
