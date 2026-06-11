import { database } from '../../data.js';

export default function PostPage({ params }) {
  // L'application cherche le texte dans la base de données grâce à l'identifiant dans le lien
  const post = database.find(item => item.id === params.id);

  if (!post) {
    return (
      <main className="max-w-xl mx-auto px-6 py-24 text-center space-y-4 font-sans">
        <h1 className="font-serif text-3xl font-bold">Texte introuvable</h1>
        <p className="text-encre/60 text-sm">Ce fragment n'a pas encore été consigné.</p>
        <a href="/" className="inline-block pt-4 text-xs font-bold uppercase tracking-widest text-terracotta border-b border-terracotta">Retour à l'accueil</a>
      </main>
    );
  }

  const isPoem = post.type === "poeme";

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-10">
      
      {/* EN-TÊTE DU TEXTE */}
      <div className="space-y-4 text-center">
        <div className="text-xs font-bold uppercase tracking-widest text-terracotta">
          {post.category}
        </div>
        <h1 className={`font-serif font-bold text-encre leading-tight tracking-tight ${isPoem ? 'text-4xl lg:text-5xl italic text-terracotta' : 'text-3xl lg:text-5xl'}`}>
          {post.title}
        </h1>
        <p className="text-xs tracking-widest uppercase text-encre/40 font-bold">
          {post.meta}
        </p>
        <hr className="w-12 mx-auto border-terracotta/20 pt-4" />
      </div>

      {/* ZONE DE LECTURE CHIC ET IMMERSIVE */}
      <article className={`prose-essay font-serif text-lg text-encre/90 leading-relaxed space-y-6 text-justify ${isPoem ? 'text-center whitespace-pre-line italic leading-loose max-w-xl mx-auto' : 'whitespace-pre-line'}`}>
        {post.content}
      </article>

      {/* FOOTER */}
      <div className="pt-16 text-center border-t border-terracotta/10">
        <a href="/archives" className="inline-block border border-encre/20 text-encre/60 text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-sm hover:bg-encre hover:text-white hover:border-encre transition-all">
          ← Retour à l'index
        </a>
      </div>

    </main>
  );
      }
