export default function ArchivesPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">
      
      <div className="space-y-4 text-center">
        <div className="text-xs font-bold uppercase tracking-widest text-terracotta">
          L'Index du Laboratoire
        </div>
        <h1 className="font-serif text-4xl lg:text-5xl font-bold text-encre">
          Les Archives
        </h1>
        <p className="font-serif text-base text-encre/60 italic max-w-md mx-auto">
          « Consigner les courants, cartographier les failles. »
        </p>
        <hr className="w-12 mx-auto border-terracotta/30 pt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* COLONNE ESSAIS */}
        <div className="space-y-8">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-encre/40 border-b border-encre/10 pb-3">
            I. Essais & Perspectives
          </h2>
          
          <article className="space-y-3">
            <div className="flex items-center space-x-2 text-[11px] font-bold uppercase tracking-wider text-terracotta">
              <span>Psychologie Sociale</span>
              <span>•</span>
              <span className="text-encre/40">4 min</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-encre">
              Le Syndrome du Caméléon : Pourquoi ton authenticité te fait peur
            </h3>
            <p className="text-sm text-encre/70 leading-relaxed font-serif italic">
              Une autopsie philosophique du besoin d'approbation et du conformisme social à travers l'expérience des lignes d'Asch.
            </p>
            <div className="text-[11px] text-encre/40 tracking-wider">
              Juin 2026
            </div>
          </article>
        </div>

        {/* COLONNE POÉSIE */}
        <div className="space-y-8">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-encre/40 border-b border-encre/10 pb-3">
            II. Fragments & Poésie
          </h2>
          
          <article className="space-y-3">
            <div className="flex items-center space-x-2 text-[11px] font-bold uppercase tracking-wider text-terracotta">
              <span>Cahiers Poétiques</span>
              <span>•</span>
              <span className="text-encre/40">Phase Lutéale</span>
            </div>
            <h3 className="font-serif text-2xl font-bold italic text-encre">
              Coquillages
            </h3>
            <p className="text-sm text-encre/60 leading-relaxed font-serif whitespace-pre-line border-l border-terracotta/20 pl-4">
              parlez-moi coquillages / parlez bas, parlez long / que vos voix voyagent / dans le velours des vagues...
            </p>
            <div className="text-[11px] text-encre/40 tracking-wider">
              Juin 2026
            </div>
          </article>
        </div>

      </div>
    </main>
  );
    }
