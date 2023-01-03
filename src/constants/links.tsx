import { lazy } from 'react';

const Home = lazy(() => import('pages/home'));
const Services = lazy(() => import('pages/services'));
const Contacts = lazy(() => import('pages/contacts'));
const OurTeam = lazy(() => import('pages/ourTeam'));
const IntroductionSection = lazy(() => import('pages/faqs'));
const Solutions = lazy(() => import('pages/solutions'));
const AboutUs = lazy(() => import('pages/aboutUs'));

export const links = [
  {
    title: 'Home',
    path: '/home',
    component: <Home />,
    id: 1,
  },
  {
    title: 'Services',
    path: '/services',
    component: <Services />,
    id: 2,
  },
  {
    title: 'Our team',
    path: '/our-team',
    component: <OurTeam />,
    id: 3,
  },
  {
    title: 'FAQs',
    path: '/faqs',
    component: <IntroductionSection />,
    id: 4,
  },
  {
    title: 'Solutions',
    path: '/solutions',
    component: <Solutions />,
    id: 5,
  },
  {
    title: 'Contacts',
    path: '/contacts',
    component: <Contacts />,
    id: 6,
  },
  {
    title: 'About us',
    path: '/about-us',
    component: <AboutUs />,
    id: 7,
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
    component: <Services />,
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
