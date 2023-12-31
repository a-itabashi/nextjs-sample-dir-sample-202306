import { NavBar } from '@/components/NavBar';
import '@/app/globals.css';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
