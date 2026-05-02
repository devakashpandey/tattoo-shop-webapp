import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Gallery',
  description: 'Explore the best tattoo portfolio in Bihar. Featuring realism, mandala, and custom designs by Satish K. Keshri at Tattoo House Ara.',
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
