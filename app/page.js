import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

function getContentData(fileName) {
  const filePath = path.join(process.cwd(), 'content', fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const htmlContent = marked(content);
  return { data, htmlContent };
}

export default function HomePage() {
  const essay = getContentData('le-syndrome-du-cameleon.md');
  const poem = getContentData('coquillages.md');

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
  
        <section className="lg:col-span-7 space-y-6">
          <div className="flex items-center space-x-3 text-xs font-bold uppercase tracking-wider text-terracotta">
            <span>{essay.data.category}</span>
            <span>•</span>
            <span className="text-encre/50">{essay.data.meta}</span>
          </div>
          
          <h2 className="font-serif text-4xl lg:text-5xl font-bold leading-tight">
            {essay.data.title}
          </h2>
          
          <p className="text-lg text-encre/80 font-medium leading-relaxed italic">
            {essay.data.excerpt}
          </p>

    
            className="prose-essay text-base text-encre/90 leading-relaxed space-y-6 pt-4"
            dangerouslySetInnerHTML={{ __html: essay.htmlContent }}
          />
        </section>

    
        <aside className="lg:col-span-5 bg-creme border border-terracotta/10 p-8 lg:p-10 rounded-sm space-y-6">
          <div className="text-xs font-bold uppercase tracking-wider text-terracotta border-b border-terracotta/20 pb-3">
            Le Souffle Poétique
          </div>
          
          <h3 className="font-serif text-3xl italic font-semibold text-center text-terracotta">
            {poem.data.title}
          </h3>
          
  
          <div 
            className="font-serif text-lg text-encre/90 leading-loose text-center whitespace-pre-line italic pt-4"
            dangerouslySetInnerHTML={{ __html: poem.htmlContent }}
          />
          
          <div className="text-center pt-6 border-t border-terracotta/10 text-xs text-encre/40 italic">
            {poem.data.meta}
          </div>
        </aside>

      </div>
    </main>
  );
    }
