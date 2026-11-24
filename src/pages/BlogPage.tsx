import React from 'react'
import { Link } from 'react-router-dom'
import { InnerPageHero } from '@/components/hero/InnerPageHero'
import { blogPostsData } from '@/data/blogPosts'
import { ArrowRight } from 'lucide-react'

export const BlogPage: React.FC = () => {
  return (
    <div className="w-full">
      <InnerPageHero
        title="OUR INSIGHTS"
        subtitle="Editorial Journal"
        bgImage="/assets/posters/hero-poster.jpg"
      />

      <section className="py-24 sm:py-36 px-6 sm:px-10 max-w-container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-sans tracking-[0.25em] uppercase font-semibold text-text-light mb-3 block">
            Stories &amp; Perspectives
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-neutral font-normal tracking-tight">
            Reflections from the coastal estate
          </h2>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 sm:gap-y-24">
          {blogPostsData.map((post) => (
            <article key={post.id} className="group flex flex-col justify-between">
              <Link to={`/blog/${post.slug}`} className="block overflow-hidden mb-6">
                <div className="aspect-[4/3] w-full overflow-hidden bg-neutral/10">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </Link>

              <div className="space-y-3">
                <div className="flex items-center gap-4 text-xs font-sans uppercase tracking-wider text-text-light font-medium">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl text-neutral font-normal tracking-tight group-hover:text-neutral/80 transition-colors">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-text-light text-sm sm:text-base leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="pt-2">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest font-semibold text-neutral border-b border-neutral pb-1 group-hover:text-text-light transition-colors"
                  >
                    <span>Read story</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
