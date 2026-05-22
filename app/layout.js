import "./globals.css";

export const metadata = {
  title: "Neon Agency",
  description: "Neon Agency Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}