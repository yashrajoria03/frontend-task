import "../styles/globals.css";
import { SearchContextProvider } from "@context/searchContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SearchContextProvider>
        <body>{children}</body>
      </SearchContextProvider>
    </html>
  );
}
