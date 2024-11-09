export type TxnDetailType = {
  name: string;
  method: 'in' | 'out'; // 'in' for credit, 'out' for debit
  datetime: string;
  amount: number;
};

export type NotificationType = {
  id: string;
  title: string;
  content: string;
  datetime: string;
};

export const txnDetails: TxnDetailType[] = [
  {
    name: 'Electricity Payment',
    method: 'out',
    datetime: 'Sep 04, 2024',
    amount: 34000,
  },
  {
    name: 'Water Bill',
    method: 'out',
    datetime: 'Aug 15, 2024',
    amount: 12000,
  },
  {
    name: 'Salary',
    method: 'in',
    datetime: 'Aug 30, 2024',
    amount: 150000,
  },
  {
    name: 'Internet Subscription',
    method: 'out',
    datetime: 'Jul 28, 2024',
    amount: 8000,
  },
  {
    name: 'Freelance Work Payment',
    method: 'in',
    datetime: 'Sep 02, 2024',
    amount: 45000,
  },
  {
    name: 'Groceries',
    method: 'out',
    datetime: 'Aug 20, 2024',
    amount: 22000,
  },
  {
    name: 'Gym Membership',
    method: 'out',
    datetime: 'Jul 10, 2024',
    amount: 15000,
  },
  {
    name: 'Gift from Friend',
    method: 'in',
    datetime: 'Jun 22, 2024',
    amount: 30000,
  },
  {
    name: 'Mobile Recharge',
    method: 'out',
    datetime: 'Sep 01, 2024',
    amount: 5000,
  },
  {
    name: 'Bonus Payment',
    method: 'in',
    datetime: 'Jul 31, 2024',
    amount: 20000,
  },
];

export const notificationData: NotificationType[] = [
  {
    id: '1',
    title: 'Announcement of our new services',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.',
    datetime: 'Sep 04. 2024 - 10:00AM',
  },
];
