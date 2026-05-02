import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Book your tattoo appointment in Ara, Bihar. Call +919304328528 or visit our studio at Mahadeva Road. Get your custom ink today.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
