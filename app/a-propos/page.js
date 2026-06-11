export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 font-sans text-encre">
      
  
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-16">
        <div className="lg:col-span-4 space-y-2 border-l-2 border-terracotta pl-6">
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-terracotta">
            Origine
          </div>
          <h1 className="font-serif text-3xl lg:text-4xl font-bold italic leading-tight">
            Najwa Ouadoud
          </h1>
          <p className="text-xs uppercase tracking-widest text-encre/40 font-bold">
            Casablanca, Maroc
          </p>
        </div>
        
        <div className="lg:col-span-8 bg-creme/40 border border-terracotta/10 p-8 rounded-sm font-serif text-lg italic leading-relaxed text-encre/80 shadow-sm">
          « Il est 2 heures du matin. De ma fenêtre, je n'entends pas la ville, non, j\'entends le bruit blanc de l\'Atlantique. Sur mon bureau, il y a un manuel de psychologie cognitive ouvert, trois carnets d\'encre noire et un thermomètre de jeune fille. C\'est de ce désordre exact qu\'est né ce journal. »
        </div>
      </div>


      <div className="max-w-3xl mx-auto space-y-8 pb-16 border-b border-terracotta/10">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-encre/40 text-center">
          — Le Déclic de mes 18 ans —
        </h2>
        
        <article className="font-serif text-lg text-encre/90 leading-relaxed space-y-6 text-justify prose-essay">
          <p>
            J'ai longtemps cru que pour être respectée, il fallait être invisible. Se fondre dans le décor des salles de classe, opiner du chef devant les adultes, et garder ses tempêtes intérieures pour les pages cachées d\'un journal intime. C’est le piège du confort social. Parfois, on s\'excuse d\'exister à haute voix.
          </p>
          <p>
            Mais cet été, quelque chose a rompu. J'ai enfin compris que l\'autonomie ne se reçoit pas, qu\'elle se prend. Et ce site est mon premier acte d\'indépendance. Il n\'a pas été conçu pour plaire à une audience, mais pour forcer ma propre voix à s\'articuler, sans bégayer, face au monde. 
          </p>
          <p>
            Je ne cherche pas la perfection d'une image lissée. C\'est la précision du diagnostic que je cherche. Si un professeur, un inconnu ou un pair s\'arrête ici, je ne veux pas qu\'il voie une étudiante qui récite, mais une pensée en train de se chercher, de se tromper, et de prendre forme.
          </p>
        </article>
      </div>

  
      <div className="pt-16 space-y-12">
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-encre/40 text-center">
          L'Équation du Laboratoire
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          

          <div className="border border-encre/5 p-8 bg-white/50 space-y-4 rounded-sm hover:border-terracotta/20 transition-colors">
            <span className="font-serif text-3xl font-bold text-terracotta">01 /</span>
            <h4 className="font-serif text-xl font-bold">La Clinique de l'Esprit</h4>
            <p className="text-sm text-encre/70 leading-relaxed">
              Disserter sur les failles psychologiques et les biais cognitifs avec la rigueur d'une autopsie. Utiliser la recherche universitaire non pas comme une armure théorique, mais comme une loupe pour décoder notre quotidien mécanique.
            </p>
          </div>

          <div className="border border-encre/5 p-8 bg-white/50 space-y-4 rounded-sm hover:border-terracotta/20 transition-colors">
            <span className="font-serif text-3xl font-bold text-terracotta">02 /</span>
            <h4 className="font-serif text-xl font-bold italic">La Chair des Mots</h4>
            <p className="text-sm text-encre/70 leading-relaxed">
              Écrire une poésie brute, rythmée par les cycles du corps et les marées de Casablanca. Laisser les mots s'abîmer, se cicatriser par le sel, et accepter que l'art commence là où la science n'a plus de réponses à offrir.
            </p>
          </div>

        </div>
      </div>


      <div className="pt-16 text-center">
        <p className="text-xs tracking-widest text-encre/30 italic mb-6">
          « S'exposer à la friction, sans rompre. »
        </p>
        <a href="/" className="inline-block bg-encre text-albatre text-xs font-bold uppercase tracking-widest px-8 py-3 rounded-sm hover:bg-terracotta transition-all shadow-sm">
          Entrer dans l'index
        </a>
      </div>

    </main>
  );
    }
    
