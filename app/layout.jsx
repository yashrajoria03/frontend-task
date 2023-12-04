import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" /> */}
      <body className="font-Inter">{children}</body>
    </html>
  );
}
