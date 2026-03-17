import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, ArrowRight, MessageCircle, Camera, Search, 
  Target, Bot, TrendingUp, Settings, Users, Code 
} from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';
import { services } from '@/data/services';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import CTABanner from '@/components/CTABanner';

const iconMap: Record<string, React.ElementType> = {
  MessageCircle, Camera, Search, Target, Bot, TrendingUp, Settings, Users, Code,
};

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseStudies.find((cs) => cs.id === slug);
  if (!caseStudy) return {};

  return {
    title: caseStudy.title,
    description: caseStudy.summary,
    alternates: { canonical: `https://zirka.solutions/results/${slug}` },
    openGraph: {
      title: `${caseStudy.title} | Zirka Solutions Results`,
      description: caseStudy.summary,
      url: `https://zirka.solutions/results/${slug}`,
      type: 'article',
      images: [{ url: '/images/zirka-og.jpg', width: 1200, height: 630, alt: `Zirka Solutions Case Study - ${caseStudy.client}` }],
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((cs) => cs.id === slug);

  if (!caseStudy) {
    notFound();
  }

  // Find 2 related case studies to show at the bottom
  const relatedCaseStudies = caseStudies.filter((cs) => cs.id !== slug).slice(0, 2);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://zirka.solutions" },
      { "@type": "ListItem", position: 2, name: "Results", item: "https://zirka.solutions/results" },
      { "@type": "ListItem", position: 3, name: caseStudy.title, item: `https://zirka.solutions/results/${slug}` },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: caseStudy.title,
    image: `https://zirka.solutions${caseStudy.image}`,
    author: {
      "@type": "Organization",
      name: "Zirka Solutions",
      url: "https://zirka.solutions"
    },
    publisher: {
      "@type": "Organization",
      name: "Zirka Solutions",
      logo: {
        "@type": "ImageObject",
        url: "https://zirka.solutions/images/icon-light.png"
      }
    },
    description: caseStudy.summary
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingTop: '120px' }}>
        <article className="container-main" style={{ maxWidth: 840, paddingBottom: 100 }}>
          
          <Link href="/results" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--text-muted)', marginBottom: 40, textDecoration: 'none', fontWeight: 500, fontSize: 15 }}>
            <ArrowLeft size={16} /> Back to Results
          </Link>

          {/* Post Header */}
          <header style={{ marginBottom: 48 }}>
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
                 {caseStudy.industry}
               </span>
            </div>
            
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(36px, 5vw, 56px)', color: 'var(--text-heading)', lineHeight: 1.1, marginBottom: 24, fontWeight: 700 }}>
              {caseStudy.headlineMetric}
            </h1>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
               {caseStudy.serviceTags.map(tag => (
                 <span key={tag} style={{ 
                   backgroundColor: 'var(--bg-elevated)', 
                   color: 'var(--text-muted)', 
                   padding: '6px 14px', 
                   borderRadius: 6, 
                   fontSize: 13, 
                   fontWeight: 500
                 }}>
                   {tag}
                 </span>
               ))}
            </div>
          </header>

          {/* Featured Image */}
          <div style={{ position: 'relative', width: '100%', height: 400, borderRadius: 16, overflow: 'hidden', marginBottom: 48, border: '1px solid var(--border-color)' }}>
            <Image
              src={caseStudy.image}
              alt={caseStudy.title}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          <div style={{ color: 'var(--text-body)', fontSize: 17, lineHeight: 1.8 }}>
             
             {/* The Challenge */}
             <AnimateOnScroll>
               <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, color: 'var(--text-heading)', marginBottom: 16, marginTop: 48 }}>
                 The Challenge
               </h2>
               {caseStudy.challenge.split('\n\n').map((paragraph, i) => (
                 <p key={i} style={{ marginBottom: 24 }}>{paragraph}</p>
               ))}
             </AnimateOnScroll>

             {/* The Solution */}
             <AnimateOnScroll delay={0.15}>
               <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, color: 'var(--text-heading)', marginBottom: 16, marginTop: 48 }}>
                 The Solution
               </h2>
               {caseStudy.solution.split('\n\n').map((paragraph, i) => (
                 <p key={i} style={{ marginBottom: 24 }}>{paragraph}</p>
               ))}
             </AnimateOnScroll>

             {/* The Results */}
             <AnimateOnScroll delay={0.1}>
               <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, color: 'var(--text-heading)', marginBottom: 16, marginTop: 48 }}>
                 The Results
               </h2>

               <div style={{ 
                 backgroundColor: 'var(--bg-card)', 
                 padding: 32, 
                 borderRadius: 16, 
                 border: '1px solid var(--border-color)',
                 marginBottom: 32
               }}>
                 <ul style={{ paddingLeft: 20, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                   {caseStudy.result.split('\n').filter(Boolean).map((item, i) => (
                     <li key={i} style={{ paddingLeft: 8 }}>
                       {item.replace(/^- /, '')}
                     </li>
                   ))}
                 </ul>
               </div>
                                                                 
               {caseStudy.quote && (
                 <blockquote style={{ 
                   borderLeft: '4px solid var(--accent)', 
                   paddingLeft: 24, 
                   fontStyle: 'italic', 
                   fontSize: 20, 
                   color: 'var(--text-heading)',
                   margin: '48px 0',
                   lineHeight: 1.6
                 }}>
                   {caseStudy.quote}
                 </blockquote>
               )}
             </AnimateOnScroll>

             {/* Related Services */}
             {caseStudy.relatedServices && caseStudy.relatedServices.length > 0 && (
               <div style={{ marginTop: 64, borderTop: '1px solid var(--border-color)', paddingTop: 48 }}>
                 <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, color: 'var(--text-heading)', marginBottom: 24 }}>
                   Utilized Services
                 </h2>
                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
                   {caseStudy.relatedServices.map(serviceSlug => {
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
                           </div>
                           <ArrowRight size={16} color="var(--accent)" />
                         </div>
                       </Link>
                     );
                   })}
                 </div>
               </div>
             )}
          </div>
        </article>
      </main>

      {/* Explore More */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container-main">
          <AnimateOnScroll>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 32, color: 'var(--text-heading)', marginBottom: 40, textAlign: 'center' }}>
              Explore More Results
            </h2>
          </AnimateOnScroll>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
            {relatedCaseStudies.map((cs, i) => (
              <AnimateOnScroll key={cs.id} delay={i * 0.1}>
                <Link href={`/results/${cs.id}`} style={{ textDecoration: 'none' }}>
                   <div style={{
                     backgroundColor: 'var(--bg-primary)',
                     border: '1px solid var(--border-color)',
                     borderRadius: 12,
                     overflow: 'hidden',
                     height: '100%',
                     display: 'flex',
                     flexDirection: 'column',
                     transition: 'border-color 0.2s',
                   }} className="card-hover">
                     <div style={{
                       height: 180,
                       backgroundColor: 'var(--bg-elevated)',
                       overflow: 'hidden',
                       position: 'relative',
                     }}>
                       <Image src={cs.image} alt={cs.client} fill style={{ objectFit: 'cover' }} />
                     </div>
                     <div style={{ padding: 24, display: 'flex', flexDirection: 'column', flex: 1 }}>
                       <div style={{ marginBottom: 12 }}>
                         <span style={{ color: 'var(--accent)', fontSize: 13, fontWeight: 600 }}>{cs.industry}</span>
                       </div>
                       <h3 style={{
                         fontFamily: 'var(--font-heading)',
                         fontSize: 20,
                         color: 'var(--text-heading)',
                         marginBottom: 12,
                         lineHeight: 1.4
                       }}>
                         {cs.title}
                       </h3>
                       <p style={{ color: 'var(--text-body)', fontSize: 14, lineHeight: 1.6, marginBottom: 20, flex: 1 }}>
                         {cs.summary}
                       </p>
                       <div style={{ color: 'var(--accent)', fontWeight: 600, fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                         Read Case Study <ArrowRight size={14} />
                       </div>
                     </div>
                   </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Achieve Similar Results?"
        subheading="Let's build a customized growth strategy for your business."
      />
    </>
  );
}
