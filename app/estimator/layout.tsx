import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tattoo Price Estimator',
  description: 'Calculate the cost of your next tattoo in seconds. Our interactive tool helps you estimate prices based on size and detail at Tattoo House Ara.',
};

export default function EstimatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
