import localFont from "next/font/local";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export const metadata = {
  title: "Harry Potter App",
  description: "A frontend web app for Harry Potter API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header className="mb-3">
            <h1>Harry Potter</h1>
          </header>
          <div className="d-flex">
            <sidebar className="me-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link href="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link href="/characters" className="nav-link">Characters</Link>
                </li>
                <li className="nav-item">
                  <Link href="/profile" className="nav-link">Profile</Link>
                </li>
              </ul>
            </sidebar>
            <main>
              {children}
            </main>
          </div>
          <footer className="mt-3">
            <p>
              Data provided by <a href="https://hp-api.onrender.com/api/characters" target="_blank" rel="noopener noreferrer">Harry Potter all characters API</a>.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
