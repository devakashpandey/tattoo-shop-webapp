import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Our Studio',
  description: 'Learn about the history and passion of Tattoo House Ara. Bihar\'s leading tattoo studio since 2010, founded by artist Satish K. Keshri.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
