
import Provider from "@/Provider";
import Header from "./components/Header";
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <Header />
          {children}

        </Provider>

      </body>
    </html>
  );
}
