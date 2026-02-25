import { IPricing } from '@/types';

export const pricingData: IPricing[] = [
  {
    name: 'Event Sponsor',
    price: 20000,
    period: 'one-time',
    features: [
      'Website branding',
      'Social media posters',
      'Logo on hoardings & banners',
      'Crowd interaction opportunities',
      'On-stage interaction (10 mins)',
      'Direct access to national-level coders',
    ],
    mostPopular: false,
  },
  {
    name: 'Gold Sponsor',
    price: 35000,
    period: 'one-time',
    features: [
      'Special promotional teaser',
      'Logo on contestant merchandise',
      'Website branding',
      'Dedicated social media posts',
      '"CoPowered by" branding',
      'Logo on hoardings & banners',
      'On-stage interaction (20 mins)',
      'Company presentation / lecture',
    ],
    mostPopular: true,
  },
  {
    name: 'Title Sponsor',
    price: 60000,
    period: 'one-time',
    features: [
      'Special promotional teaser',
      'Logo on contestant merchandise',
      'Website branding',
      'Dedicated social media posts',
      '"Powered by" branding',
      'Logo on hoardings & banners',
      'On-stage interaction (30 mins)',
      'Company presentation / lecture',
    ],
    mostPopular: false,
  },
];
