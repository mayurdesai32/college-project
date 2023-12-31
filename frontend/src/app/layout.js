import './globals.css';
import { Montserrat } from 'next/font/google';

const inter = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='container'>
          <div id='navbar'>
            <div className='navLogo'>Cropigo</div>
            <ul className='navList'>
              <li>Home</li>
              <li>About</li>
              <li>Recommendation</li>
              <li>Disease</li>
            </ul>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
