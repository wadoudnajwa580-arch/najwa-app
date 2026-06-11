export default function ArchivesPage() {
  const essays = [
    {
      title: "Le Syndrome du Caméléon : Pourquoi ton authenticité te fait peur",
      slug: "le-syndrome-du-cameleon",
      category: "Psychologie Sociale",
      date: "Juin 2026",
      readTime: "4 min",
      excerpt: "Une autopsie philosophique du besoin d'approbation et du conformisme social à travers l'expérience des lignes d'Asch."
    }
  ];

  const poems = [
    {
      title: "Coquillages",
      slug: "coquillages",
      category: "Cahiers Poétiques",
      date: "Juin 2026",
      note: "Phase Lutéale",
      excerpt: "parlez-moi coquillages / parlez bas, parlez long / que vos voix voyagent / dans le velours des vagues..."
    }
  ];

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
        
        {/* COLONNE GAUCHE : ESSAIS */}
        <div className="space-y-8">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-encre/40 border-b border-encre/10 pb-3">
            I. Essais & Perspectives
          </h2>
          
          {essays.map((essay, index) => (
            <article key={index} className="space-y-3 group">
              <div className="flex items-center space-x-2 text-[11px] font-bold uppercase tracking-wider text-terracotta">
                <span>{essay.category}</span>
                <span>•</span>
                <span className="text-encre/40">{essay.readTime}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold group-hover:text-terracotta transition-colors">
                <a href={`/archives/${essay.slug}`}>{essay.title}</a>
              </h3>
              <p className="text-sm text-encre/70 leading-relaxed font-serif italic">
                {essay.excerpt}
              </p>
              <div className="text-[11px] text-encre/40 tracking-wider">
                {essay.date}
              </div>
            </article>
          ))}
        </div>

        {/* COLONNE DROITE : POÉSIE */}
        <div className="space-y-8">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-encre/40 border-b border-encre/10 pb-3">
            II. Fragments & Poésie
          </h2>
          
          {poems.map((poem, index) => (
            <article key={index} className="space-y-3 group">
              <div className="flex items-center space-x-2 text-[11px] font-bold uppercase tracking-wider text-terracotta">
                <span>{poem.category}</span>
                <span>•</span>
                <span className="text-encre/40">{poem.note}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold italic group-hover:text-terracotta transition-colors">
                <a href={`/archives/${poem.slug}`}>{poem.title}</a>
              </h3>
              <p className="text-sm text-encre/60 leading-relaxed font-serif whitespace-pre-line border-l border-terracotta/20 pl-4">
                {poem.excerpt}
              </p>
              <div className="text-[11px] text-encre/40 tracking-wider">
                {poem.date}
              </div>
            </article>
          ))}
        </div>

      </div>
    </main>
);
                      }
