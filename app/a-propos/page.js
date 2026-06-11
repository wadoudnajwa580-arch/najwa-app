export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-8">
      <div className="text-xs font-bold uppercase tracking-wider text-terracotta text-center">
        Le Manifeste
      </div>
      
      <h1 className="font-serif text-4xl lg:text-5xl font-bold text-center leading-tight">
        Pourquoi cet espace existe.
      </h1>

      <p className="text-center text-xs tracking-widest uppercase text-encre/40 italic">
        Najwa Ouadoud — Fondatrice & Rédactrice
      </p>

      <hr className="w-12 mx-auto border-terracotta/30 my-6" />

      <article className="font-serif text-lg text-encre/90 leading-relaxed space-y-6 text-justify">
        <p>
          Ce journal n'est pas une vitrine de certitudes, ni un catalogue de savoirs académiques froids. C’est un laboratoire de vérité né au cœur de mes 18 ans, quelque part face au ressac de l'Atlantique.
        </p>
        <p>
          À une époque où l'on nous somme de nous liquéfier pour entrer dans le moule des attentes sociales, j’ai choisi de poser des mots solides. Cet espace rassemble mes doutes, mes dissections psychologiques, mes autopsies littéraires, et une poésie brute qui refuse le filtre de la perfection artificielle.
        </p>
        <p>
          Inspirée par la rigueur des revues comme <em>La Conversation</em> et guidée par le besoin viscéral d'articuler ma pensée profonde, je cartographie ici mes propres abîmes. Non pas pour plaire à la tribu, mais pour connecter avec les esprits qui partagent la même soif d'authenticité.
        </p>
      </article>

      <div className="pt-8 text-center">
        <a href="/" className="inline-block bg-encre text-albatre text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-sm hover:bg-terracotta transition-colors">
          Retour aux textes
        </a>
      </div>
    </main>
  );
    }
  
