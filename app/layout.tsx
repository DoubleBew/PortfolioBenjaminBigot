import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Portfolio Benjamin Bigot',
  description: 'Portfolio professionnel de Benjamin Bigot',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
