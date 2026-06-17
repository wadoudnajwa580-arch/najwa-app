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
        

        <div className="space-y-12">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-encre/40 border-b border-encre/10 pb-3">
            I. Essais & Perspectives
          </h2>
          
  
          <article className="space-y-3">
            <div className="flex items-center space-x-2 text-[11px] font-bold uppercase tracking-wider text-terracotta">
              <span>Psychologie Sociale</span>
              <span>•</span>
              <span className="text-encre/40">4 min</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-encre hover:text-terracotta transition-colors">
              <a href="/archives/le-syndrome-du-cameleon">Le Syndrome du Caméléon : Pourquoi ton authenticité te fait peur</a>
            </h3>
            <p className="text-sm text-encre/70 leading-relaxed font-serif italic">
              Une autopsie philosophique du besoin d'approbation et du conformisme social à travers l'expérience des lignes d'Asch.
            </p>
          </article>

  
          <article className="space-y-3">
            <div className="flex items-center space-x-2 text-[11px] font-bold uppercase tracking-wider text-terracotta">
              <span>Critique Culturelle</span>
              <span>•</span>
              <span className="text-encre/40">5 min</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-encre hover:text-terracotta transition-colors">
              <a href="/archives/marchesincerite">Le Marché de l'Authenticité : Quand le "Vrai" Devient un Produit</a>
            </h3>
            <p className="text-sm text-encre/70 leading-relaxed font-serif italic">
              Une réflexion incisive sur l'ère du capitalisme intime, où l'exposition scénarisée de nos fêlures remplace la quête philosophique de vérité.
            </p>
          </article>
        </div>

  
                <div className="space-y-12">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-encre/40 border-b border-encre/10 pb-3">
            II. Fragments & Poésie
          </h2>

          {/* Poème 1 : Coquillages */}
          <article className="space-y-3">
            <div className="flex items-center space-x-2 text-[11px] font-bold uppercase tracking-wider text-terracotta">
              <span>Cahiers Poétiques</span>
              <span>•</span>
              <span className="text-encre/40">Âme luisante</span>
            </div>
            <h3 className="font-serif text-2xl font-bold italic text-encre hover:text-terracotta transition-colors">
              <a href="/archives/coquillages">Coquillages</a>
            </h3>
            <p className="text-sm text-encre/60 leading-relaxed font-serif whitespace-pre-line border-l border-terracotta/20 pl-4">
              parlez-moi coquillages / parlez bas, parlez long / que vos voix voyagent dans le velours des vagues...
            </p>
          </article>

          {/* Poème 2 : Les Liens de l'Or */}
          <article className="space-y-3">
            <div className="flex items-center space-x-2 text-[11px] font-bold uppercase tracking-wider text-terracotta">
              <span>Cahiers Poétiques</span>
              <span>•</span>
              <span className="text-encre/40">Âme luisante</span>
            </div>
            <h3 className="font-serif text-2xl font-bold italic text-encre hover:text-terracotta transition-colors">
              <a href="/archives/liens-de-or">Les Liens de l'Or</a>
            </h3>
            <p className="text-sm text-encre/60 leading-relaxed font-serif whitespace-pre-line border-l border-terracotta/20 pl-4">
              L'argent fait tourner l'axe où l'homme se broie / Il rend l'homme de loi sans scrupule et sans foi...
            </p>
          </article>
        </div>

      </div>
    </main>
  );
}
