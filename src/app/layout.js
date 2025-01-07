
import Provider from "../Provider"
import Header from "./components/Header";
import "./globals.css";
import Tabs from "./components/Tabs";



export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <Header />
          <Tabs />
          {children}

        </Provider>

      </body>
    </html>
  );
}
