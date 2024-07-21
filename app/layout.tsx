import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
import ogimage from '@/public/ogImage.png';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ashot Karapetyan Personal Portfolio Website",
  description: "I am a FrontEnd developer with 3+ years of experience. I enjoy building web apps. My focus is React.js/Next.js. I am currently looking for a New position as a software developer.",
  creator: 'Ashot Karapetyan',
  keywords: ['Next.js', 'React', 'JavaScript'],
  generator: 'Next.js',
  authors: [{ name: 'Ashot Karapetyan' }],
  openGraph: {
    images: ['ogImage.png', 'userPng.png'],
    title: "Ashot Karapetyan Personal Portfolio Website",
    description: "I am a FrontEnd developer with 3+ years of experience. I enjoy building web apps. My focus is React.js/Next.js. I am currently looking for a New position as a software developer.",
    creator: 'Ashot Karapetyan',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <Head>
          <meta property="og:image" content={ogimage.src} />
        </Head>
      <body
        className={`${inter.className} bg-gray-200 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
