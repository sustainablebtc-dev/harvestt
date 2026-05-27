import type { Metadata } from 'next';
import PolicyPage from '@/components/Legal/PolicyPage';

export const metadata: Metadata = {
  title: 'Disclaimer | Sustainable Bitcoin Protocol',
  description:
    'Read our disclaimer for important information about the use of our website and services.',
  openGraph: {
    title: 'Disclaimer | Sustainable Bitcoin Protocol',
    description:
      'Read our disclaimer for important information about the use of our website and services.',
    type: 'website',
  },
};

export default function DisclaimerPage() {
  return <PolicyPage policyName="disclaimer" />;
}
