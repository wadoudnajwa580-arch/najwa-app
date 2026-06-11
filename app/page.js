export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* SECTION GAUCHE : L'ÉDITORIAL À LA UNE */}
        <section className="lg:col-span-7 space-y-8">
          <div className="flex items-center space-x-3 text-xs font-bold uppercase tracking-widest text-terracotta">
            <span>Psychologie Sociale</span>
            <span>•</span>
            <span className="text-encre/40">☕ 4 min de lecture • Écrit par une nuit de vent</span>
          </div>
          
          <h2 className="font-serif text-4xl lg:text-6xl font-bold leading-tight tracking-tight text-encre">
            Le Syndrome du Caméléon : Pourquoi ton authenticité te fait peur
          </h2>
          
          <p className="text-xl text-encre/80 font-serif leading-relaxed italic border-l-4 border-terracotta pl-6 py-2">
            "On nous répète depuis l'enfance : « Sois toi-même ». C'est le conseil le plus paresseux de notre siècle. Pourquoi ? Parce que la société punit secrètement l’authenticité."
          </p>

          <div className="pt-6">
            <a 
              href="/archives" 
              className="inline-flex items-center space-x-3 group text-xs font-bold uppercase tracking-widest text-encre border-b-2 border-encre pb-2 hover:text-terracotta hover:border-terracotta transition-all"
            >
              <span>Découvrir l'Index complet</span>
              <span>→</span>
            </a>
          </div>
        </section>

        {/* SECTION DROITE : L'ENCADRÉ CRÉATIF */}
        <aside className="lg:col-span-5 space-y-12">
          
          <div className="bg-creme/60 border border-terracotta/10 p-8 lg:p-10 rounded-sm space-y-6 shadow-sm">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-terracotta/70 text-center">
              — Anthologie Spontanée —
            </div>
            
            <h3 className="font-serif text-3xl italic font-semibold text-center text-encre">
              Coquillages
            </h3>
            
            <p className="text-sm text-encre/70 text-center font-serif leading-relaxed italic max-w-xs mx-auto">
              « ...apprenez-moi la science secrète des choses qui survivent en se laissant traverser. »
            </p>
            
            <div className="text-center pt-4">
              <a 
                href="/archives" 
                className="text-xs font-bold uppercase tracking-wider text-terracotta hover:text-encre transition-colors"
              >
                Consulter les écrits
              </a>
            </div>
          </div>

          <div className="px-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-encre/40">
              Notes d'ambiance
            </h4>
            <div className="font-serif text-base text-encre/70 leading-relaxed space-y-4">
              <p>
                Le laboratoire s'installe. Entre la rigidité des examens scolaires et l'immensité de l'océan, cet espace devient le point de friction où l'esprit tente de prendre forme.
              </p>
              <span className="inline-block text-xs uppercase tracking-wider font-sans font-bold text-terracotta">
                Casablanca • Session d'été
              </span>
            </div>
          </div>

        </aside>

      </div>
    </main>
  );
    }
