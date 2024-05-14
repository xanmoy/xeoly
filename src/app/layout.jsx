import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <body className="relative min-h-screen bg-neutral-900 text-neutral-400">
        {children}
        {/* Footer */}

        <Footer />
      </body>
    </html>
  );
}