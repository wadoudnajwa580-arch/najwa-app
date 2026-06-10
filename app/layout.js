import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter' 
});

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant' 
});

export const metadata = {
  title: 'NAJWA OUADOUD.',
  description: 'Essais vidéo, psychologie et cahiers poétiques.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="bg-albatre text-encre font-sans min-h-screen selection:bg-terracotta selection:text-white">
        {/* HEADER MINI - DESIGN EDITEUR */}
        <header className="max-w-7xl mx-auto px-6 pt-12 pb-6 border-b border-terracotta/20">
          <div className="flex flex-col items-center justify-center space-y-2">
            <a href="/" className="font-serif text-3xl font-bold tracking-[0.2em] hover:text-terracotta transition-colors">
              NAJWA OUADOUD.
            </a>
            <p className="text-xs tracking-[0.15em] uppercase text-encre/60">
              Laboratoire de Vérité • Essais & Poésie
            </p>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
  }
