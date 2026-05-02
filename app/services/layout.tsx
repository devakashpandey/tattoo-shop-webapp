import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tattoo Services & Pricing',
  description: 'Premium tattoo services in Ara: Custom designs, professional piercing, and medical scar cover-ups. See our ₹500/inch pricing and expert services.',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
