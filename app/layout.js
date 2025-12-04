import { Inter, Rokkitt } from "next/font/google";
import "./globals.css";
import { Flex, Layout } from "antd";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from "@/styles/layout.module.css";

const RokkittSans = Rokkitt({
  subsets: ["latin"],
});
const InterSans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Mahadika",
  description: "Mahadika, Kesehatan anda, prioritas kami setiap hari",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${RokkittSans.variable} ${InterSans.variable}`}>
        {" "}
        <Flex>
          <Layout className={styles.main_layout}>
            <header className={styles.main_layout_header}>
              <Header />
            </header>

            <main className={styles.main_layout_content}>
              <div className={styles.main_layout_content_container}>
                {children}
              </div>
            </main>

            <footer>
              <Footer />
            </footer>
          </Layout>
        </Flex>
      </body>
    </html>
  );
}
