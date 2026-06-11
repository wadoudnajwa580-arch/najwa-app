import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

function getSinglePost(slug) {
  try {
    const filePath = path.join(process.cwd(), 'content', `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    return { data, content };
  } catch (error) {
    return null;
  }
}

export default function PostPage({ params }) {
  const post = getSinglePost(params.slug);
  
  if (!post) {
    return (
      <main className="max-w-xl mx-auto px-6 py-24 text-center space-y-4 font-sans">
        <h1 className="font-serif text-3xl font-bold">Texte introuvable</h1>
        <p className="text-encre/60 text-sm">Ce fragment n'a pas encore été consigné dans le laboratoire.</p>
        <a href="/" className="inline-block pt-4 text-xs font-bold uppercase tracking-widest text-terracotta border-b border-terracotta">Retour à l'accueil</a>
      </main>
    );
  }

  const isPoem = post.data.category === "Cahiers Poétiques" || !post.data.category;

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-10">
      

      <div className="space-y-4 text-center">
        {post.data.category && (
          <div className="text-xs font-bold uppercase tracking-widest text-terracotta">
            {post.data.category}
          </div>
        )}
        <h1 className={`font-serif font-bold text-encre leading-tight tracking-tight ${isPoem ? 'text-4xl lg:text-5xl italic text-terracotta' : 'text-3xl lg:text-5xl'}`}>
          {post.data.title}
        </h1>
        <p className="text-xs tracking-widest uppercase text-encre/40 font-bold">
          {post.data.meta}
        </p>
        <hr className="w-12 mx-auto border-terracotta/20 pt-4" />
      </div>


      <article className={`prose-essay font-serif text-lg text-encre/90 leading-relaxed space-y-6 text-justify ${isPoem ? 'text-center whitespace-pre-line italic leading-loose max-w-xl mx-auto' : ''}`}>
        {post.content}
      </article>


      <div className="pt-16 text-center border-t border-terracotta/10">
        <a href="/archives" className="inline-block border border-encre/20 text-encre/60 text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-sm hover:bg-encre hover:text-white hover:border-encre transition-all">
          ← Retour aux archives
        </a>
      </div>

    </main>
  );
      }
