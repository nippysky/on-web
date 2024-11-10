// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import { Box, Stack, Typography } from '@mui/material';
import DashboardCard from '../shared/DashboardCard';
import { IconChevronRight } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom'; // for navigation

import Airtime from '../../assets/images/brand/Airtime.svg';
import Data from '../../assets/images/brand/Data.svg';
import Betting from '../../assets/images/brand/Betting.svg';
import CableTV from '../../assets/images/brand/CableTV.svg';
import Education from '../../assets/images/brand/Education.svg';
import Electricity from '../../assets/images/brand/Electricity.svg';

const serviceData = [
  {
    name: 'Airtime',
    desc: 'Buy Airtime',
    path: '/dashboards/services/airtime',
    icon: Airtime,
  },
  {
    name: 'Data',
    desc: 'Buy Data',
    path: '/dashboards/services/data-bundle',
    icon: Data,
  },
  {
    name: 'Betting',
    desc: 'Fund your betting wallet',
    path: '/dashboards/services/betting',
    icon: Betting,
  },
  {
    name: 'Education',
    desc: 'Buy A Scratch Card',
    path: '/dashboards/services/education',
    icon: Education,
  },
  {
    name: 'Electricity',
    desc: 'Electricity is important',
    path: '/dashboards/services/electricity',
    icon: Electricity,
  },
  {
    name: 'Cable TV',
    desc: 'Renew Your Cable Subscription',
    path: '/dashboards/services/cable-tv',
    icon: CableTV,
  },
];

const QuickServices = () => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation
  const handleServiceClick = (path: string) => {
    navigate(path);
  };

  return (
    <DashboardCard title="Quick Services">
      <Box marginY={5} flexDirection={'column'} display={'flex'} gap={4}>
        {serviceData.map((service, index) => {
          return (
            <section
              key={index}
              style={{
                width: '100%',
                cursor: 'pointer',
              }}
              onClick={() => handleServiceClick(service.path)}
            >
              <Stack
                spacing={3}
                justifyContent={'space-between'}
                alignItems={'center'}
                direction={'row'}
              >
                <Stack direction={'row'} spacing={2} alignItems={'center'}>
                  <Box
                    borderRadius={1000}
                    component="img"
                    sx={{
                      height: 30,
                      width: 30,
                    }}
                    alt="The house from the offer."
                    src={service.icon}
                  />

                  <Stack direction={'column'}>
                    <Typography variant="h6" fontWeight={600} fontSize={14}>
                      {service.name}
                    </Typography>
                    <Typography variant="caption">{service.desc}</Typography>
                  </Stack>
                </Stack>

                <Stack
                  direction={'row'}
                  alignItems={'center'}
                  spacing={2}
                  justifyContent={'flex-end'}
                >
                  <IconChevronRight size={14} />
                </Stack>
              </Stack>
            </section>
          );
        })}
      </Box>
    </DashboardCard>
  );
};

export default QuickServices;
