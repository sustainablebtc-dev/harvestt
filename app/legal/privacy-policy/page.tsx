import type { Metadata } from 'next';
import PolicyPage from '@/components/Legal/PolicyPage';

export const metadata: Metadata = {
  title: 'Privacy Policy | Sustainable Bitcoin Protocol',
  description:
    'Read our privacy policy to understand how we collect, use, and protect your data.',
  openGraph: {
    title: 'Privacy Policy | Sustainable Bitcoin Protocol',
    description:
      'Read our privacy policy to understand how we collect, use, and protect your data.',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  return <PolicyPage policyName="privacy-policy" />;
}
