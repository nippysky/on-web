/* eslint-disable @typescript-eslint/no-unsafe-return */
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
const Home = Loadable(lazy(() => import('../views/dashboard/Home')));

// /SUB PAGES //////
const Airtime = Loadable(lazy(() => import('../views/dashboard/services/Airtime')));
const DataBundles = Loadable(lazy(() => import('../views/dashboard/services/DataBundles')));
const Electricity = Loadable(lazy(() => import('../views/dashboard/services/Electricity')));
const CableTV = Loadable(lazy(() => import('../views/dashboard/services/CableTV')));
const Betting = Loadable(lazy(() => import('../views/dashboard/services/Betting')));
const Education = Loadable(lazy(() => import('../views/dashboard/services/Education')));

const UpdateProfile = Loadable(lazy(() => import('../views/dashboard/profile/UpdateProfile')));
const TransactionHistory = Loadable(
  lazy(() => import('../views/dashboard/profile/TransactionHistory')),
);
const FillSupportForm = Loadable(lazy(() => import('../views/dashboard/FillForm')));
const NotificationSettings = Loadable(
  lazy(() => import('../views/dashboard/settings/Notifications')),
);
const ChangeEmail = Loadable(lazy(() => import('../views/dashboard/settings/ChangeEmail')));
const ChangePassword = Loadable(lazy(() => import('../views/dashboard/settings/ChangePassword')));
const ChangePIN = Loadable(lazy(() => import('../views/dashboard/settings/ChangePIN')));

// authentication
const Login = Loadable(lazy(() => import('../views/authentication/auth1/Login')));
const Login2 = Loadable(lazy(() => import('../views/authentication/auth2/Login2')));
const Register = Loadable(lazy(() => import('../views/authentication/auth1/Register')));
const Register2 = Loadable(lazy(() => import('../views/authentication/auth2/Register2')));
const ForgotPassword = Loadable(lazy(() => import('../views/authentication/auth1/ForgotPassword')));
const ForgotPassword2 = Loadable(
  lazy(() => import('../views/authentication/auth2/ForgotPassword2')),
);
const TwoSteps = Loadable(lazy(() => import('../views/authentication/auth1/TwoSteps')));
const TwoSteps2 = Loadable(lazy(() => import('../views/authentication/auth2/TwoSteps2')));
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Maintenance = Loadable(lazy(() => import('../views/authentication/Maintenance')));

// landingpage
const Landingpage = Loadable(lazy(() => import('../views/pages/landingpage/Landingpage')));

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/dashboards/home" /> },
      { path: '/dashboards/home', exact: true, element: <Home /> },

      // /////////////////////////////////////////////////////////////////////////////////////////////////
      { path: '/dashboards/services/airtime', exact: true, element: <Airtime /> },
      { path: '/dashboards/services/data-bundle', exact: true, element: <DataBundles /> },
      { path: '/dashboards/services/electricity', exact: true, element: <Electricity /> },
      { path: '/dashboards/services/education', exact: true, element: <Education /> },
      { path: '/dashboards/services/cable-tv', exact: true, element: <CableTV /> },
      { path: '/dashboards/services/betting', exact: true, element: <Betting /> },

      { path: '/dashboards/profile/update-profile', exact: true, element: <UpdateProfile /> },
      {
        path: '/dashboards/profile/transaction-history',
        exact: true,
        element: <TransactionHistory />,
      },
      { path: '/dashboards/fill-form', exact: true, element: <FillSupportForm /> },
      {
        path: '/dashboards/settings/notifications',
        exact: true,
        element: <NotificationSettings />,
      },
      { path: '/dashboards/settings/change-email', exact: true, element: <ChangeEmail /> },
      { path: '/dashboards/settings/change-password', exact: true, element: <ChangePassword /> },
      { path: '/dashboards/settings/change-pin', exact: true, element: <ChangePIN /> },

      // /////////////////////////////////////////////////////////////////////////////////////
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },

  {
    path: '/',
    element: <BlankLayout />,
    children: [
      { path: '/auth/404', element: <Error /> },
      { path: '/auth/login', element: <Login /> },
      { path: '/auth/login2', element: <Login2 /> },
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/register2', element: <Register2 /> },
      { path: '/auth/forgot-password', element: <ForgotPassword /> },
      { path: '/auth/forgot-password2', element: <ForgotPassword2 /> },
      { path: '/auth/two-steps', element: <TwoSteps /> },
      { path: '/auth/two-steps2', element: <TwoSteps2 /> },
      { path: '/auth/maintenance', element: <Maintenance /> },
      { path: '/landingpage', element: <Landingpage /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
