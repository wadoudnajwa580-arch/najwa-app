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
  description: 'Essais de psychologie, philosophie et cahiers poétiques.',
  manifest: '/manifest.json',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="bg-albatre text-encre font-sans min-h-screen selection:bg-terracotta selection:text-white">
        
        {/* HEADER GLOBAL AVEC LE DRAPEAU ET LA NAVIGATION */}
        <header className="max-w-7xl mx-auto px-6 pt-12 pb-6 border-b border-terracotta/20">
          <div className="flex flex-col items-center justify-center space-y-4">
            
            {/* Le Titre et le clin d'œil subtil au Maroc */}
            <div className="flex items-center space-x-3">
              <a href="/" className="font-serif text-3xl font-bold tracking-[0.2em] hover:text-terracotta transition-colors">
                NAJWA OUADOUD.
              </a>
              {/* Drapeau minimaliste en CSS pur */}
              <div className="flex items-center justify-center w-5 h-3.5 bg-[#C1272D] rounded-[2px] shadow-sm relative overflow-hidden group" title="Rabat, Maroc">
                {/* Étoile verte chérifienne simplifiée */}
                <span className="text-[7px] text-[#006233] font-bold absolute pb-[1px]">★</span>
              </div>
            </div>

            <p className="text-xs tracking-[0.15em] uppercase text-encre/60">
              Laboratoire de Vérité • Essais & Poésie
            </p>

            {/* LE MENU DE NAVIGATION DE L'APPLICATION */}
            <nav className="flex items-center space-x-8 pt-2 text-xs font-bold uppercase tracking-widest text-encre/70">
              <a href="/" className="hover:text-terracotta transition-colors border-b border-transparent hover:border-terracotta/40 pb-1">Accueil</a>
              <a href="/archives" className="hover:text-terracotta transition-colors border-b border-transparent hover:border-terracotta/40 pb-1">Archives</a>
              <a href="/a-propos" className="hover:text-terracotta transition-colors border-b border-transparent hover:border-terracotta/40 pb-1">À Propos</a>
            </nav>

          </div>
        </header>

        {children}
      </body>
    </html>
  );
  }
