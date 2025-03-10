// app/layout.js
import ClientProvider from './ClientProvider';
import '../styles/globals.css';

export const metadata = {
  title: 'Fancy ToDo App',
  description: 'A fancy ToDo app built with Next.js app directory and Redux',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>
          <div className="container">{children}</div>
        </ClientProvider>
      </body>
    </html>
  );
}
