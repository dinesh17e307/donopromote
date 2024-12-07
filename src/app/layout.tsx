import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import styles from "./page.module.css";
import Image from "next/image";
import profilepic from '../../public/logo.png'
import NavBar from "@/Components/NavBar";
import SocialMedia from "@/Components/SocialMedia";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dono Promote",
  description: "Affiliate Marketing",
};
const navOptions: { title: string, link: string }[] = [
  {title:'Home',link:"/"},
  { title: 'Trending', link: '/trending' },
  { title: "travel & fashion", link: "/travel" },
  { title: 'Beauty', link: '/beauty' },
  { title: "Insurance", link: "/travel" },
  { title: 'Students', link: '/beauty' },
  { title: "Hosting & Domain", link: "/travel" },
  { title: 'Decor & kitchen', link: '/beauty' },
  { title: 'Lifestyle', link: '/lifestyle' },
  { title: 'Best offers', link: 'bestoffer' }
]
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <div style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
      }}>
        <div className={styles.header}>
          <Image className={styles.logo} src={profilepic} alt="donopromote" />
          <div style={{ width: '100%' }}>
            <NavBar navOptions={navOptions} />
          </div>
        </div>
        <div style={{ marginTop: '120px',flex:1,marginLeft:'10px' }}>
          {children}
        </div>



        <footer className={styles.footer}>
          <div>
             <div>
               <SocialMedia />
             </div>
             <div>

             </div>
          </div>
        </footer>
        </div>
      </body>

    </html>
  );
}
