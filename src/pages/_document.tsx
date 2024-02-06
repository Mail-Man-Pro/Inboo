import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "@/components/Navbar/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Main />
        </ThemeProvider>
        <NextScript />
      </body>
    </Html>
  );
}
