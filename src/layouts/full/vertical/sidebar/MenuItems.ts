/* eslint-disable @typescript-eslint/no-explicit-any */
import { uniqueId } from 'lodash';

interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
}
import {
  IconPoint,

  // //////////////////
  IconMilitaryRank,
  IconWallet,
  IconUser,
  IconSettings,
} from '@tabler/icons-react';

const Menuitems: MenuitemsType[] = [
  {
    id: uniqueId(),
    title: 'Wallet',
    icon: IconWallet,
    href: '/dashboards/home',
  },

  {
    id: uniqueId(),
    title: 'Services',
    icon: IconMilitaryRank,
    children: [
      {
        id: uniqueId(),
        title: 'Airtime',
        icon: IconPoint,
        href: '/dashboards/services/airtime',
      },

      {
        id: uniqueId(),
        title: 'Data Bundle',
        icon: IconPoint,
        href: '/dashboards/services/data-bundle',
      },

      {
        id: uniqueId(),
        title: 'Electricity',
        icon: IconPoint,
        href: '/dashboards/services/electricity',
      },

      {
        id: uniqueId(),
        title: 'Cable TV',
        icon: IconPoint,
        href: '/dashboards/services/cable-tv',
      },

      {
        id: uniqueId(),
        title: 'Education',
        icon: IconPoint,
        href: '/dashboards/services/education',
      },

      {
        id: uniqueId(),
        title: 'Betting',
        icon: IconPoint,
        href: '/dashboards/services/betting',
      },
    ],
  },

  {
    id: uniqueId(),
    title: 'Profile',
    icon: IconUser,
    children: [
      {
        id: uniqueId(),
        title: 'Update Profile',
        icon: IconPoint,
        href: '/dashboards/profile/update-profile',
      },
      {
        id: uniqueId(),
        title: 'Transaction History',
        icon: IconPoint,
        href: '/dashboards/profile/transaction-history',
      },
    ],
  },

  {
    id: uniqueId(),
    title: 'Settings',
    icon: IconSettings,
    children: [
      {
        id: uniqueId(),
        title: 'Notifications',
        icon: IconPoint,
        href: '/dashboards/settings/notifications',
      },

      {
        id: uniqueId(),
        title: 'Change Email',
        icon: IconPoint,
        href: '/dashboards/settings/change-email',
      },

      {
        id: uniqueId(),
        title: 'Change PIN',
        icon: IconPoint,
        href: '/dashboards/settings/change-pin',
      },

      {
        id: uniqueId(),
        title: 'Change Password',
        icon: IconPoint,
        href: '/dashboards/settings/change-password',
      },
    ],
  },
];

export default Menuitems;
