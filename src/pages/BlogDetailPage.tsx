import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { blogPostsData } from '@/data/blogPosts'
import { ArrowLeft, ArrowRight, Clock, Calendar, Bookmark } from 'lucide-react'

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPostsData.find((p) => p.slug === slug)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const relatedPosts = blogPostsData.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <div className="w-full pt-28 sm:pt-36">
      <article className="max-w-4xl mx-auto px-6 sm:px-10 pb-24 sm:pb-36">
        {/* Back Link */}
        <div className="mb-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest font-semibold text-neutral/70 hover:text-neutral transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All articles</span>
          </Link>
        </div>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-sans uppercase tracking-widest text-text-light font-medium mb-6">
          <span className="flex items-center gap-1.5">
            <Bookmark className="w-3.5 h-3.5" />
            {post.category}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-neutral font-normal tracking-tight leading-[1.1] mb-10">
          {post.title}
        </h1>

        {/* Excerpt Lead */}
        <p className="font-heading text-xl sm:text-2xl text-text-light font-normal leading-relaxed italic mb-12 pb-8 border-b border-neutral/15">
          {post.excerpt}
        </p>

        {/* Cover Image */}
        <div className="aspect-[16/9] w-full overflow-hidden bg-neutral/10 mb-16 shadow-lg">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body Sections */}
        <div className="space-y-12 max-w-2xl mx-auto text-neutral leading-relaxed">
          {post.sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl text-neutral font-normal tracking-tight">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-text-light text-base sm:text-lg leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Related Articles */}
        <div className="mt-28 pt-16 border-t border-neutral/15">
          <div className="flex items-center justify-between mb-10">
            <h3 className="font-heading text-2xl sm:text-3xl text-neutral font-normal">
              More Stories
            </h3>
            <Link
              to="/blog"
              className="text-xs font-sans uppercase tracking-widest font-semibold text-neutral border-b border-neutral pb-1 hover:text-text-light transition-colors"
            >
              View all
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {relatedPosts.map((related) => (
              <Link
                key={related.id}
                to={`/blog/${related.slug}`}
                className="group block bg-surface border border-neutral/10 p-6 hover:border-neutral/30 transition-all"
              >
                <div className="aspect-[16/9] w-full overflow-hidden bg-neutral/10 mb-4">
                  <img
                    src={related.coverImage}
                    alt={related.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="text-[11px] font-sans uppercase tracking-wider text-text-light block mb-1">
                  {related.category}
                </span>
                <h4 className="font-heading text-xl text-neutral font-medium group-hover:underline">
                  {related.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
