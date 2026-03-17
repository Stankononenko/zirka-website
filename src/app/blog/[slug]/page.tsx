import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import { services } from '@/data/services';
import { getPostData } from '@/lib/markdown';
import { 
  MessageCircle, Camera, Search, Target, Bot, 
  TrendingUp, Settings, Users, Code, ArrowRight 
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  MessageCircle, Camera, Search, Target, Bot, TrendingUp, Settings, Users, Code,
};

// Generate static params for all known blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate SEO metadata for each post dynamically
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postMeta = blogPosts.find((p) => p.slug === slug);
  
  if (!postMeta) {
    notFound();
  }

  let postData;
  try {
    postData = await getPostData(slug);
  } catch (error) {
    console.error(`Error loading markdown for ${slug}:`, error);
    notFound();
  }

  // Schema.org Article structured data for rich SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: postMeta.title,
    image: `www.zirkasolutions.ca${postMeta.image}`,
    author: {
      '@type': 'Person',
      name: postMeta.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Zirka Solutions',
      logo: {
        '@type': 'ImageObject',
        url: 'www.zirkasolutions.ca/images/icon-light.png'
      }
    },
    datePublished: postMeta.date,
  };

  return (
    <>
      {/* Inject JSON-LD Script for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingTop: '100px' }}>
        <article className="container-main" style={{ maxWidth: 840, paddingBottom: 100 }}>
          
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--text-muted)', marginBottom: 40, textDecoration: 'none', fontWeight: 500, fontSize: 15 }}>
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          {/* Post Header */}
          <header style={{ marginBottom: 40 }}>
            <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
               <span style={{ 
                 backgroundColor: 'rgba(59, 130, 246, 0.1)', 
                 color: 'var(--accent)', 
                 padding: '4px 12px', 
                 borderRadius: 100, 
                 fontSize: 13, 
                 fontWeight: 600,
                 letterSpacing: 0.5,
                 textTransform: 'uppercase'
               }}>
                 {postMeta.category}
               </span>
            </div>
            
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 5vw, 48px)', color: 'var(--text-heading)', lineHeight: 1.1, marginBottom: 24, fontWeight: 700 }}>
              {postMeta.title}
            </h1>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', color: 'var(--text-muted)', fontSize: 14 }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                 <User size={16} /> {postMeta.author}
               </div>
               <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                 <Calendar size={16} /> {new Date(postMeta.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
               </div>
               <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                 <Clock size={16} /> {postMeta.readTime}
               </div>
            </div>
          </header>

          {/* Featured Image */}
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: 16, overflow: 'hidden', marginBottom: 48, border: '1px solid var(--border-color)' }}>
            <Image
              src={postMeta.image}
              alt={postMeta.title}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          {/* Post Content */}
          <div 
            className="prose prose-invert max-w-none"
            style={{ 
              color: 'var(--text-body)', 
              fontSize: 17, 
              lineHeight: 1.8 
            }}
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />

          {/* Related Services */}
          {postMeta.relatedServices && postMeta.relatedServices.length > 0 && (
            <div style={{ marginTop: 80, borderTop: '1px solid var(--border-color)', paddingTop: 48 }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, color: 'var(--text-heading)', marginBottom: 24 }}>
                Related Services
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
                {postMeta.relatedServices.map(serviceSlug => {
                  const service = services.find(s => s.slug === serviceSlug);
                  if (!service) return null;
                  const Icon = iconMap[service.icon];
                  return (
                    <Link key={service.slug} href={`/services/${service.slug}`} style={{ textDecoration: 'none' }}>
                      <div className="card-hover" style={{ backgroundColor: 'var(--bg-card)', borderRadius: 12, padding: 20, border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: 16 }}>
                        <div style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: 'var(--bg-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          {Icon && <Icon size={20} color="var(--accent)" />}
                        </div>
                        <div style={{ flex: 1 }}>
                          <h3 style={{ fontSize: 15, fontWeight: 600, color: 'white', margin: 0 }}>{service.name}</h3>
                          <p style={{ color: 'var(--text-muted)', fontSize: 12, margin: 0 }}>{service.shortDescription}</p>
                        </div>
                        <ArrowRight size={16} color="var(--accent)" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
          
        </article>
      </main>
    </>
  );
}
