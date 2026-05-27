import type { Metadata } from 'next';
import PolicyPage from '@/components/Legal/PolicyPage';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Sustainable Bitcoin Protocol',
  description:
    'Read our terms and conditions to understand the rules and policies governing your use of our services.',
  openGraph: {
    title: 'Terms & Conditions | Sustainable Bitcoin Protocol',
    description:
      'Read our terms and conditions to understand the rules and policies governing your use of our services.',
    type: 'website',
  },
};

export default function TermsAndConditionsPage() {
  return <PolicyPage policyName="terms-and-conditions" />;
}
