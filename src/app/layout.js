import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Hacker's Unity",
  description: "Join 10,000+ developers, students & innovators. Discover hackathons, form teams, and ship real projects with Hacker's Unity.",
  keywords: ['hackathon', 'developer community', 'coding', 'tech events', 'projects', 'innovation'],
  openGraph: {
    title: "Hacker's Unity — Build. Connect. Innovate.",
    description: "Join 10,000+ developers, students & innovators. Discover hackathons, form teams, and ship real projects.",
    type: 'website',
    siteName: "Hacker's Unity",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Hacker's Unity",
    description: "Where Hackers Build the Future",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ minHeight: '100vh', paddingTop: 'var(--nav-height)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
