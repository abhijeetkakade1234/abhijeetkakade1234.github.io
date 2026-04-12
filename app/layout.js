import "./globals.css";
import NewspaperLayout from "@/components/NewspaperLayout";

export const metadata = {
  title: "The Portfolio Gazette — Abhijeet Kakade",
  description: "Dispatches from the Frontier of Digital Craft — Portfolio of Abhijeet Kakade",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=IM+Fell+English:ital@0;1&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body>
        <NewspaperLayout>
          {children}
        </NewspaperLayout>
      </body>
    </html>
  );
}
