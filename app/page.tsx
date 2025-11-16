import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Layout from '@/components/Layout'
import PostCard from '@/components/PostCard'
import { getSortedPostsData } from '@/lib/blog'

export default function Home() {
  const recentPosts = getSortedPostsData().slice(0, 3)

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-dark relative overflow-hidden">
        {/* Line patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-1/4 top-0 w-px h-full bg-white"></div>
          <div className="absolute left-2/4 top-0 w-px h-full bg-white"></div>
          <div className="absolute left-3/4 top-0 w-px h-full bg-white"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,10 20,90 80,90" fill="currentColor" className="text-primary" />
          </svg>
        </div>
        <div className="absolute bottom-10 left-10 w-40 h-40 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,10 20,90 80,90" fill="currentColor" className="text-primary" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-medium text-white font-outfit leading-tight mb-6">
                <span className="text-light-muted">Looking For</span><br />
                Winning IT<br />
                Leader ?
              </h1>

              <div className="mb-6">
                <svg width="80" height="40" viewBox="0 0 80 40" fill="none" className="text-primary">
                  <path d="M10 30 Q 40 10, 70 30" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M65 25 L 70 30 L 65 35" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>

              <p className="text-lg text-light leading-relaxed mb-8 max-w-lg">
                Senior IT leader based in Brisbane, with experience transforming IT teams, uplifting cybersecurity, and using AI to automate workflows and solve real business problems.
              </p>

              <div>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold transition-all hover:bg-primary/90 hover:transform hover:-translate-y-1"
                >
                  Explore My Work
                  <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3.90566 3.95808C3.88909 3.80893 4.02167 3.67634 4.1874 3.67634H11.1148C11.2806 3.67634 11.3966 3.79235 11.3966 3.95808V10.8855C11.3966 11.0512 11.264 11.1838 11.1148 11.1673L10.4685 11.1838C10.3028 11.1838 10.1702 11.0512 10.1868 10.9021L10.1702 5.74794L4.51885 11.3993C4.40284 11.5153 4.23712 11.5153 4.12111 11.3993L3.65707 10.9352C3.55763 10.8358 3.54106 10.6535 3.65707 10.5375L9.3084 4.88616H4.17083C4.02167 4.90273 3.88909 4.77015 3.88909 4.60442L3.90566 3.95808Z"
                      fill="currentColor" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2 text-center">
              <div className="relative inline-block">
                <div className="bg-primary/10 rounded-full p-8 backdrop-blur-sm">
                  <div className="w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center text-white text-6xl lg:text-8xl font-bold font-outfit">
                    IB
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 sm:py-32 bg-white relative">
        {/* Line patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute left-1/4 top-0 w-px h-full bg-dark"></div>
          <div className="absolute left-2/4 top-0 w-px h-full bg-dark"></div>
          <div className="absolute left-3/4 top-0 w-px h-full bg-dark"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid xl:grid-cols-2 gap-12 items-center mb-16">
            <div className="xl:col-span-1">
              <div className="flex items-center mb-8">
                <span className="text-2xl font-bold text-primary font-outfit">01</span>
                <div className="flex-1 h-px bg-light/30 mx-4"></div>
                <span className="text-light font-medium">Who I Am</span>
              </div>
            </div>
            <div className="xl:col-span-1">
              <h2 className="text-4xl lg:text-5xl font-bold text-dark font-outfit leading-tight">
                Welcome to my portfolio, this is <span className="text-primary">"Iyan Barry",</span> senior IT leader with <span className="text-primary">8+ years</span> of experience transforming teams and <span className="text-primary">uplifting cybersecurity</span>
              </h2>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mb-4">
                  <svg width="40" height="40" viewBox="0 0 40 40" className="mx-auto text-primary">
                    <polygon points="20,5 10,35 30,35" fill="currentColor" opacity="0.2" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-dark font-outfit mb-2">
                  <span>8</span><span className="text-primary">+</span>
                </div>
                <p className="text-light">Years of Experience</p>
              </div>

              <div className="text-center">
                <div className="mb-4">
                  <svg width="40" height="40" viewBox="0 0 40 40" className="mx-auto text-primary">
                    <polygon points="20,5 10,35 30,35" fill="currentColor" opacity="0.2" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-dark font-outfit mb-2">
                  <span>50</span><span className="text-primary">+</span>
                </div>
                <p className="text-light">Teams Transformed</p>
              </div>

              <div className="text-center">
                <div className="mb-4">
                  <svg width="40" height="40" viewBox="0 0 40 40" className="mx-auto text-primary">
                    <polygon points="20,5 10,35 30,35" fill="currentColor" opacity="0.2" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-dark font-outfit mb-2">
                  <span>ISO</span><span className="text-primary"> 27001</span>
                </div>
                <p className="text-light">Security Standards</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative star */}
        <div className="absolute bottom-0 right-0 w-64 h-64 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,10 20,90 80,90" fill="currentColor" className="text-primary" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 sm:py-32 bg-white relative">
        {/* Line patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute left-1/4 top-0 w-px h-full bg-dark"></div>
          <div className="absolute left-2/4 top-0 w-px h-full bg-dark"></div>
          <div className="absolute left-3/4 top-0 w-px h-full bg-dark"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid xl:grid-cols-2 gap-12 items-center mb-16">
            <div className="xl:col-span-1">
              <div className="flex items-center mb-8">
                <span className="text-2xl font-bold text-primary font-outfit">02</span>
                <div className="flex-1 h-px bg-light/30 mx-4"></div>
                <span className="text-light font-medium">Services</span>
              </div>
            </div>
            <div className="xl:col-span-1">
              <h2 className="text-4xl lg:text-5xl font-bold text-dark font-outfit leading-tight">
                <span className="block">Providing Quality Services</span>
                For your Business
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="service-card bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg border border-light/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <polygon points="50,10 20,90 80,90" fill="currentColor" className="text-primary" />
                </svg>
              </div>
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 32 32" className="text-primary">
                    <path d="M16 2L20 12L30 8L26 18L28 28L16 24L4 28L6 18L2 8L12 12L16 2Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-dark mb-4 font-outfit">IT Leadership & Strategy</h3>
              <p className="text-light leading-relaxed mb-6">
                Transforming under-resourced IT teams into proactive, strategic partners that deliver real business value through structured processes and clear vision.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 font-semibold text-dark hover:text-primary transition-colors group-hover:gap-3">
                <span>Read More</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.79231 4.55465C4.77297 4.38064 4.92765 4.22596 5.121 4.22596H13.203C13.3964 4.22596 13.5317 4.3613 13.5317 4.55465V12.6367C13.5317 12.83 13.377 12.9847 13.203 12.9654L12.4489 12.9847C12.2556 12.9847 12.1009 12.83 12.1203 12.656L12.1009 6.64282L5.5077 13.236C5.37235 13.3714 5.179 13.3714 5.04366 13.236L4.50228 12.6947C4.38627 12.5787 4.36694 12.366 4.50228 12.2306L11.0955 5.63741H5.10166C4.92765 5.65674 4.77297 5.50206 4.77297 5.30871L4.79231 4.55465Z" fill="currentColor" />
                </svg>
              </Link>
            </div>

            <div className="service-card bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg border border-light/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <polygon points="50,10 20,90 80,90" fill="currentColor" className="text-primary" />
                </svg>
              </div>
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 32 32" className="text-primary">
                    <path d="M16 4C9.4 4 4 9.4 4 16s5.4 12 12 12 12-5.4 12-12S22.6 4 16 4zM16 22c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-dark mb-4 font-outfit">Cybersecurity & Governance</h3>
              <p className="text-light leading-relaxed mb-6">
                ISO 27001 implementation, Microsoft Secure Score uplift, and Essential Eight compliance. Building security frameworks that protect without hindering productivity.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 font-semibold text-dark hover:text-primary transition-colors group-hover:gap-3">
                <span>Read More</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.79231 4.55465C4.77297 4.38064 4.92765 4.22596 5.121 4.22596H13.203C13.3964 4.22596 13.5317 4.3613 13.5317 4.55465V12.6367C13.5317 12.83 13.377 12.9847 13.203 12.9654L12.4489 12.9847C12.2556 12.9847 12.1009 12.83 12.1203 12.656L12.1009 6.64282L5.5077 13.236C5.37235 13.3714 5.179 13.3714 5.04366 13.236L4.50228 12.6947C4.38627 12.5787 4.36694 12.366 4.50228 12.2306L11.0955 5.63741H5.10166C4.92765 5.65674 4.77297 5.50206 4.77297 5.30871L4.79231 4.55465Z" fill="currentColor" />
                </svg>
              </Link>
            </div>

            <div className="service-card bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg border border-light/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <polygon points="50,10 20,90 80,90" fill="currentColor" className="text-primary" />
                </svg>
              </div>
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 32 32" className="text-primary">
                    <path d="M16 2L8 8v12l8 8 8-8V8l-8-6zM16 6l4 3v8l-4 4-4-4V9l4-3z" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-dark mb-4 font-outfit">AI & Automation</h3>
              <p className="text-light leading-relaxed mb-6">
                Building AI-driven workflows and automation solutions focused on practical applications that remove friction from daily work and solve real business problems.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 font-semibold text-dark hover:text-primary transition-colors group-hover:gap-3">
                <span>Read More</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.79231 4.55465C4.77297 4.38064 4.92765 4.22596 5.121 4.22596H13.203C13.3964 4.22596 13.5317 4.3613 13.5317 4.55465V12.6367C13.5317 12.83 13.377 12.9847 13.203 12.9654L12.4489 12.9847C12.2556 12.9847 12.1009 12.83 12.1203 12.656L12.1009 6.64282L5.5077 13.236C5.37235 13.3714 5.179 13.3714 5.04366 13.236L4.50228 12.6947C4.38627 12.5787 4.36694 12.366 4.50228 12.2306L11.0955 5.63741H5.10166C4.92765 5.65674 4.77297 5.50206 4.77297 5.30871L4.79231 4.55465Z" fill="currentColor" />
                </svg>
              </Link>
            </div>

            <div className="service-card bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg border border-light/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <polygon points="50,10 20,90 80,90" fill="currentColor" className="text-primary" />
                </svg>
              </div>
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 32 32" className="text-primary">
                    <path d="M4 4h24v4H4V4zm0 8h24v4H4v-4zm0 8h24v4H4v-4zm0 8h24v4H4v-4z" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-dark mb-4 font-outfit">Strategic Consulting</h3>
              <p className="text-light leading-relaxed mb-6">
                Providing strategic guidance on IT transformation, cybersecurity implementation, and technology roadmaps tailored to your business needs and growth objectives.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 font-semibold text-dark hover:text-primary transition-colors group-hover:gap-3">
                <span>Read More</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.79231 4.55465C4.77297 4.38064 4.92765 4.22596 5.121 4.22596H13.203C13.3964 4.22596 13.5317 4.3613 13.5317 4.55465V12.6367C13.5317 12.83 13.377 12.9847 13.203 12.9654L12.4489 12.9847C12.2556 12.9847 12.1009 12.83 12.1203 12.656L12.1009 6.64282L5.5077 13.236C5.37235 13.3714 5.179 13.3714 5.04366 13.236L4.50228 12.6947C4.38627 12.5787 4.36694 12.366 4.50228 12.2306L11.0955 5.63741H5.10166C4.92765 5.65674 4.77297 5.50206 4.77297 5.30871L4.79231 4.55465Z" fill="currentColor" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Recent Blog Posts Section */}
      <section className="py-24 sm:py-32 bg-gray-50 relative">
        {/* Line patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute left-1/4 top-0 w-px h-full bg-dark"></div>
          <div className="absolute left-2/4 top-0 w-px h-full bg-dark"></div>
          <div className="absolute left-3/4 top-0 w-px h-full bg-dark"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid xl:grid-cols-2 gap-12 items-center mb-16">
            <div className="xl:col-span-1">
              <div className="flex items-center mb-8">
                <span className="text-2xl font-bold text-primary font-outfit">03</span>
                <div className="flex-1 h-px bg-light/30 mx-4"></div>
                <span className="text-light font-medium">Latest Insights</span>
              </div>
            </div>
            <div className="xl:col-span-1">
              <h2 className="text-4xl lg:text-5xl font-bold text-dark font-outfit leading-tight mb-6">
                Recent Blog Posts & Insights
              </h2>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-dark font-semibold hover:text-primary transition-colors"
              >
                View all posts
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <div key={post.slug} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg border border-light/20 group transition-all hover:-translate-y-2">
                <div className="mb-4">
                  <span className="text-sm text-light font-medium">
                    {new Date(post.date).toLocaleDateString('en-AU', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-dark mb-4 font-outfit group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-light leading-relaxed mb-6">
                  {post.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 font-semibold text-dark hover:text-primary transition-colors group-hover:gap-3"
                >
                  <span>Read more</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.79231 4.55465C4.77297 4.38064 4.92765 4.22596 5.121 4.22596H13.203C13.3964 4.22596 13.5317 4.3613 13.5317 4.55465V12.6367C13.5317 12.83 13.377 12.9847 13.203 12.9654L12.4489 12.9847C12.2556 12.9847 12.1009 12.83 12.1203 12.656L12.1009 6.64282L5.5077 13.236C5.37235 13.3714 5.179 13.3714 5.04366 13.236L4.50228 12.6947C4.38627 12.5787 4.36694 12.366 4.50228 12.2306L11.0955 5.63741H5.10166C4.92765 5.65674 4.77297 5.50206 4.77297 5.30871L4.79231 4.55465Z" fill="currentColor" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 sm:py-32 bg-dark relative overflow-hidden">
        {/* Line patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-1/4 top-0 w-px h-full bg-white"></div>
          <div className="absolute left-2/4 top-0 w-px h-full bg-white"></div>
          <div className="absolute left-3/4 top-0 w-px h-full bg-white"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,10 20,90 80,90" fill="currentColor" className="text-primary" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold text-white font-outfit leading-tight mb-6">
              Ready to Transform Your <span className="text-primary">IT Strategy?</span>
            </h2>
            <p className="text-lg text-light leading-relaxed mb-10 max-w-2xl mx-auto">
              If you're interested in IT leadership, cybersecurity strategy, AI implementation, or just want to swap ideas about building technology that matters, let's connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold transition-all hover:bg-primary/90 hover:transform hover:-translate-y-1"
              >
                Get in touch
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.90566 3.95808C3.88909 3.80893 4.02167 3.67634 4.1874 3.67634H11.1148C11.2806 3.67634 11.3966 3.79235 11.3966 3.95808V10.8855C11.3966 11.0512 11.264 11.1838 11.1148 11.1673L10.4685 11.1838C10.3028 11.1838 10.1702 11.0512 10.1868 10.9021L10.1702 5.74794L4.51885 11.3993C4.40284 11.5153 4.23712 11.5153 4.12111 11.3993L3.65707 10.9352C3.55763 10.8358 3.54106 10.6535 3.65707 10.5375L9.3084 4.88616H4.17083C4.02167 4.90273 3.88909 4.77015 3.88909 4.60442L3.90566 3.95808Z"
                    fill="currentColor" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/in/iyanbarry/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white border border-white/20 px-8 py-4 rounded-lg font-semibold transition-all hover:bg-white/10 hover:transform hover:-translate-y-1"
              >
                <ExternalLink className="h-4 w-4" />
                Connect on LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}