import { lazy } from 'react';

const Home = lazy(() => import('pages/home'));

export const links = [
  {
    title: 'Home',
    path: '/home',
    component: <Home />,
    id: 1,
  },
  {
    title: 'Solutions',
    path: '/solutions',
    component: <Home />,
    id: 2,
  },
  {
    title: 'Pages',
    path: '/pages',
    component: <Home />,
    id: 3,
  },
  {
    title: 'Elements',
    path: '/elements',
    component: <Home />,
    id: 4,
  },
  {
    title: 'Blog',
    path: '/blog',
    component: <Home />,
    id: 5,
  },
  {
    title: 'Contacts',
    path: '/contacts',
    component: <Home />,
    id: 6,
  },
];

export const quickLinks = [
  {
    title: 'Home',
    path: '/home',
    component: <Home />,
    id: 1,
  },
  {
    title: 'Solutions',
    path: '/solutions',
    component: <Home />,
    id: 2,
  },
  {
    title: 'Blog',
    path: '/blog',
    component: <Home />,
    id: 3,
  },
  {
    title: 'Contacts',
    path: '/contacts',
    component: <Home />,
    id: 4,
  },
  {
    title: 'Our team',
    path: '/our-team',
    component: <Home />,
    id: 5,
  },
  {
    title: 'About Us',
    path: '/about-us',
    component: <Home />,
    id: 6,
  },
  {
    title: 'Services',
    path: '/services',
    component: <Home />,
    id: 7,
  },
  {
    title: 'FAQ',
    path: '/faq',
    component: <Home />,
    id: 8,
  },
];

export const serviceLinks = [
  {
    title: 'Pages',
    path: '/pages',
    component: <Home />,
    id: 1,
  },
  {
    title: 'Elements',
    path: '/elements',
    component: <Home />,
    id: 2,
  },
  {
    title: 'FAQ',
    path: '/faq',
    component: <Home />,
    id: 3,
  },
  {
    title: 'Pricing',
    path: '/pricing',
    component: <Home />,
    id: 4,
  },
  {
    title: 'Site map',
    path: '/site-map',
    component: <Home />,
    id: 5,
  },
];
