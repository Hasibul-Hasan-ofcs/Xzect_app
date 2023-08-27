import ContextProvider from "@/providers/ContextProvider";
import "./globals.css";
import { Roboto } from "next/font/google";
import Drawer from "@/components/drawer/Drawer";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "XZECT",
  description: "Assignment project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ContextProvider>
        <body suppressHydrationWarning={true} className={roboto.className}>
          {/* <Drawer></Drawer> */}
          <NavBar></NavBar>
          {/* {children} */}
          {/* <Footer></Footer> */}
        </body>
      </ContextProvider>
    </html>
  );
}
