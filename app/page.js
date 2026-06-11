import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

function getContentData(fileName) {
  try {
    const filePath = path.join(process.cwd(), 'content', fileName);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    return { data, content };
  } catch (error) {
    return { 
      data: { title: "En cours d'écriture...", category: "Littérature", meta: "", excerpt: "" }, 
      content: "Le texte sera bientôt disponible." 
    };
  }
}

export default function HomePage() {
  const essay = getContentData('le-syndrome-du-cameleon.md');
  const poem = getContentData('coquillages.md');

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* GAUCHE : L'ESSAI PSYCHOLOGIQUE */}
        <section className="lg:col-span-7 space-y-6">
          <div className="flex items-center space-x-3 text-xs font-bold uppercase tracking-wider text-terracotta">
            <span>{essay.data.category}</span>
            <span>•</span>
            <span className="text-encre/50">{essay.data.meta}</span>
          </div>
          
          <h2 className="font-serif text-4xl lg:text-5xl font-bold leading-tight">
            {essay.data.title}
          </h2>
          
          <p className="text-lg text-encre/80 font-medium leading-relaxed italic border-l-2 border-terracotta pl-4">
            {essay.data.excerpt}
          </p>

          <article className="prose-essay text-base text-encre/90 leading-relaxed space-y-6 pt-4 whitespace-pre-line">
            {essay.content}
          </article>
        </section>

        {/* DROITE : LE POÈME */}
        <aside className="lg:col-span-5 bg-creme border border-terracotta/10 p-8 lg:p-10 rounded-sm space-y-6">
          <div className="text-xs font-bold uppercase tracking-wider text-terracotta border-b border-terracotta/20 pb-3">
            Le Souffle Poétique
          </div>
          
          <h3 className="font-serif text-3xl italic font-semibold text-center text-terracotta">
            {poem.data.title}
          </h3>
          
          <div className="font-serif text-lg text-encre/90 leading-loose text-center whitespace-pre-line italic pt-4">
            {poem.content}
          </div>
          
          <div className="text-center pt-6 border-t border-t-terracotta/10 text-xs text-encre/40 italic">
            {poem.data.meta}
          </div>
        </aside>

      </div>
    </main>
  );
      }
