import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  ExternalLink,
  Award,
  Briefcase,
  PenTool,
  Menu,
  X,
  ChevronDown
} from 'lucide-react';
import './App.css';

function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const glassEffect = "backdrop-blur-xl bg-white/5 border border-white/10";

  // Navigation items
  const navItems = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Blog', href: '#blog' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  // Projects data (combining work and achievements for the 'portfolio' section)
  const portfolioItems = [
    {
      id: 1,
      title: "AI-Powered Sales Enablement Suite",
      category: "product",
      description: "Led the design and development of a real-time, AI-powered conversation analytics system using LLMs. Analyzed 100K+ customer conversations to extract insights that shaped the product roadmap.",
      tags: ["AI/ML", "Product Strategy", "Analytics", "B2B SaaS"],
      link: "#"
    },
    {
      id: 2,
      title: "Product Selection Agent",
      category: "product",
      description: "Ideated, built, and launched an AI agent that matches customers with best-fit technical products based on their business needs.",
      tags: ["AI", "Product Development", "Customer Success"],
      link: "#"
    },
    {
      id: 3,
      title: "Fleet Management Analytics Platform",
      category: "product",
      description: "Launched Motorq's fuel product by partnering with fuel card providers and OEMs to integrate fuel expenditure and telemetry data.",
      tags: ["IoT", "Analytics", "B2B", "Fleet Management"],
      link: "#"
    },
    {
      id: 4,
      title: "EU Market Expansion",
      category: "growth",
      description: "Spearheaded EU expansion by developing a GDPR compliance checklist, ensuring product adherence to regulations and data security.",
      tags: ["Market Expansion", "Compliance", "Strategy"],
      link: "#"
    },
    {
      id: 5,
      title: "Mixpanel Analytics Implementation",
      category: "growth",
      description: "Implemented Mixpanel analytics from scratch and set key success metrics for continuous improvement.",
      tags: ["Analytics", "Growth", "Data Strategy"],
      link: "#"
    },
    {
      id: 6,
      title: "Chainlink Spring 2023 Hackathon Winner",
      category: "product", // Categorizing hackathon wins under product for now
      description: "Won $500 cash prize under 'Top Quality Projects' amongst 14,000+ registrants, 498 projects, and 100+ countries.",
      tags: ["Hackathon", "Blockchain", "AI"],
      link: "#"
    },
    {
      id: 7,
      title: "NetApp Women Innovathon First Runner Up",
      category: "product",
      description: "Won 2nd place amongst 3,500 applicants and 900 teams. Awarded ₹150,000 cash prize.",
      tags: ["Hackathon", "Blockchain", "Product Innovation"],
      link: "#"
    },
    {
      id: 8,
      title: "Mitacs Globalink Research Selection",
      category: "writing", // Can be categorized as research/writing
      description: "Selected as one of 283 out of 30,000 applicants globally (<1% acceptance rate) for research at UBC Vancouver.",
      tags: ["Research", "IoT", "System Reliability"],
      link: "#"
    }
  ];

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Why Quick Commerce in India is Miles Ahead",
      category: "writing",
      description: "A deep-dive into the Indian quick commerce landscape and what makes it unique globally.",
      readTime: "8 min read",
      claps: "71",
      url: "https://ashikka.medium.com/why-quick-commerce-in-india-is-miles-ahead-27122024-90403810287f"
    },
    {
      id: 2,
      title: "Product Case Study — Monetizing Twitter The Right Way",
      category: "writing",
      description: "Highlighted problems with Twitter's marketing/product pitch and suggested alternatives.",
      readTime: "12 min read",
      claps: "694",
      url: "https://ashikka.medium.com/product-case-study-monetizing-twitter-the-right-way-4-july-2023-e6308007204b"
    },
    {
      id: 3,
      title: "Apple's Bold Gamble with Apple Vision Pro",
      category: "writing",
      description: "A dissection of Apple's AR/VR venture - Smart Move or Risky Misstep?",
      readTime: "10 min read",
      claps: "537",
      url: "https://ashikka.medium.com/apples-bold-gamble-with-apple-vision-pro-a-smart-move-or-a-risky-misstep-22-aug-2023-3810287f"
    },
    {
      id: 4,
      title: "Unlocking the Power of LLMs: The Art of Prompt Engineering",
      category: "writing",
      description: "A blog demystifying the art of prompt engineering and best practices.",
      readTime: "15 min read",
      claps: "51",
      url: "https://ashikka.medium.com/unlocking-the-power-of-llms-the-art-of-prompt-engineering-2-april-2023-3810287f"
    },
    {
      id: 5,
      title: "Elevating Social Features On Spotify",
      category: "writing",
      description: "A product case study to drive reach for Spotify using new social features.",
      readTime: "9 min read",
      claps: "494",
      url: "https://ashikka.medium.com/product-case-study-elevating-social-features-on-spotify-13-june-2023-3810287f"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      quote: "As a Founding Member, Ashikka has been instrumental in our growth from 0 to 25+ enterprise customers. Her ability to navigate ambiguous spaces and execute flawlessly is unmatched.",
      name: "Sarah Chen",
      role: "CEO & Co-founder",
      company: "Rapidflare"
    },
    {
      id: 2,
      quote: "Ashikka became the youngest PM in our company's history for good reason. She launched products that directly saved our customers $50K+ and opened new revenue streams worth $100K+.",
      name: "Rajesh Kumar",
      role: "Head of Product",
      company: "Motorq"
    },
    {
      id: 3,
      quote: "Her approach to AI-powered solutions is genuinely impressive. She analyzed 100K+ customer conversations and turned insights into product features that became our key market differentiator.",
      name: "Michael Thompson",
      role: "VP of Engineering",
      company: "Rapidflare"
    },
    {
      id: 4,
      quote: "What sets Ashikka apart is her cross-functional mindset. She doesn't just manage products—she understands growth, analytics, and customer success deeply.",
      name: "Priya Sharma",
      role: "Director of Customer Success",
      company: "Motorq"
    },
    {
      id: 5,
      quote: "Working with Ashikka on EU expansion was incredible. She navigated GDPR compliance, secured our first EU customer, and unlocked $100K in revenue—all while maintaining her technical depth.",
      name: "David Rodriguez",
      role: "Head of International",
      company: "Motorq"
    },
    {
      id: 6,
      quote: "The analytics infrastructure Ashikka implemented gave us the data foundation we needed. 30% increase in feature adoption speaks for itself.",
      name: "Lisa Wang",
      role: "Data Science Lead",
      company: "Motorq"
    }
  ];

  // Filter items for the portfolio section
  const filteredPortfolioItems = portfolioItems.filter(item =>
    activeFilter === 'all' || item.category === activeFilter
  );

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? `${glassEffect} shadow-2xl` : 'bg-transparent'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="text-xl font-light tracking-wide"
              whileHover={{ scale: 1.05 }}
            >
              Ashikka Gupta
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-light tracking-wide hover:text-white/60 transition-colors duration-300"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className={`md:hidden ${glassEffect} border-t border-white/10`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 py-4 space-y-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block text-left text-sm font-light tracking-wide hover:text-white/60 transition-colors duration-300"
                    whileHover={{ x: 10 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-black"></div>

        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-thin tracking-tight mb-6"
            variants={fadeInUp}
          >
            Product Manager &
            <br />
            <span className="text-white/60">Tech Innovator</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl font-light text-white/80 mb-8 leading-relaxed"
            variants={fadeInUp}
          >
            Building AI-powered solutions that scale from 0 to millions of users.
            <br />
            Currently founding member at Rapidflare, previously at Motorq.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            variants={fadeInUp}
          >
            <motion.button
              onClick={() => scrollToSection('#portfolio')}
              className={`px-8 py-3 ${glassEffect} rounded-full text-sm font-light tracking-wide hover:bg-white/10 transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Portfolio
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-3 border border-white/20 rounded-full text-sm font-light tracking-wide hover:bg-white/5 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-white/40" size={24} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-thin tracking-tight mb-16 text-center">
              A little bit of background, first
            </h2>

            <div className="text-lg font-light text-white/80 leading-relaxed text-center max-w-3xl mx-auto space-y-6">
              <p>
                A former head of growth at several unicorn companies said my portfolio was unbelievably good.
                Another growth PM who's been in the trenches for over a decade said it's that of a "unicorn growth person (marketing + product growth)".
              </p>
              <p>
                So welcome to my portfolio.
              </p>
              <p>
                Use the multiple choice options for an à la carte menu or simply scroll for the chef's recommendation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section (formerly Work) */}
      <section id="portfolio" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-thin tracking-tight mb-16 text-center">
              My Portfolio
            </h2>

            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['all', 'product', 'growth', 'writing'].map((filter) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full text-sm font-light tracking-wide transition-all duration-300 ${activeFilter === filter
                    ? 'bg-white text-black'
                    : `${glassEffect} hover:bg-white/10`
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </motion.button>
              ))}
            </div>

            {/* Projects grid */}
            <motion.div
              className="grid md:grid-cols-2 gap-8"
              layout
            >
              <AnimatePresence>
                {filteredPortfolioItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className={`p-8 ${glassEffect} rounded-2xl hover:bg-white/10 transition-all duration-300 group cursor-pointer`}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-light mb-2 group-hover:text-white/80 transition-colors">
                          {item.title}
                        </h3>
                        {item.company && (
                          <p className="text-white/60 text-sm font-light">{item.company}</p>
                        )}
                        {item.readTime && (
                          <div className="flex items-center space-x-4 text-white/60 text-sm">
                            <span>{item.readTime}</span>
                            {item.claps && <span>👏 {item.claps}</span>}
                          </div>
                        )}
                      </div>
                      {item.link && (
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="text-white/40 group-hover:text-white/80 transition-colors" size={20} />
                        </a>
                      )}
                    </div>

                    <p className="text-white/80 font-light leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {item.achievements && (
                      <div className="space-y-2 mb-6">
                        {item.achievements.map((achievement, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                            <span className="text-sm text-white/70">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {item.tags && (
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-white/10 rounded-full text-xs font-light"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-thin tracking-tight mb-16 text-center">
              My Blog Posts
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <motion.a
                  key={post.id}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-8 ${glassEffect} rounded-2xl hover:bg-white/10 transition-all duration-300 group cursor-pointer`}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-light mb-2 group-hover:text-white/80 transition-colors">
                        {post.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-white/60 text-sm">
                        <span>{post.readTime}</span>
                        {post.claps && <span>👏 {post.claps}</span>}
                      </div>
                    </div>
                    <ExternalLink className="text-white/40 group-hover:text-white/80 transition-colors" size={20} />
                  </div>
                  <p className="text-white/80 font-light leading-relaxed">
                    {post.description}
                  </p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-thin tracking-tight mb-8 text-center">
              What industry leaders say
            </h2>

            <p className="text-xl font-light text-white/60 leading-relaxed text-center max-w-3xl mx-auto mb-16">
              Here's what colleagues, leadership, and industry experts have said about working with me:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className={`p-8 ${glassEffect} rounded-2xl hover:bg-white/10 transition-all duration-300`}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="mb-6">
                    <p className="text-lg font-light text-white/90 leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-white font-light">{testimonial.name}</h4>
                      <p className="text-white/60 text-sm">{testimonial.role}</p>
                      <p className="text-white/40 text-xs">{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-thin tracking-tight mb-8">
              Let's Connect
            </h2>

            <p className="text-xl font-light text-white/80 mb-12 leading-relaxed">
              Always open to discussing product strategy, AI innovations,
              or potential collaborations.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.a
                href="mailto:ashikagupta28@gmail.com"
                className={`p-6 ${glassEffect} rounded-2xl hover:bg-white/10 transition-all duration-300 group`}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="mx-auto mb-4 text-white/80 group-hover:text-white transition-colors" size={32} />
                <h3 className="text-lg font-light mb-2">Email</h3>
                <p className="text-white/60 text-sm">ashikagupta28@gmail.com</p>
              </motion.a>

              <motion.a
                href="tel:+916392765693"
                className={`p-6 ${glassEffect} rounded-2xl hover:bg-white/10 transition-all duration-300 group`}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="mx-auto mb-4 text-white/80 group-hover:text-white transition-colors" size={32} />
                <h3 className="text-lg font-light mb-2">Phone</h3>
                <p className="text-white/60 text-sm">+91 6392765693</p>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/ashikka-gupta"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-6 ${glassEffect} rounded-2xl hover:bg-white/10 transition-all duration-300 group`}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Linkedin className="mx-auto mb-4 text-white/80 group-hover:text-white transition-colors" size={32} />
                <h3 className="text-lg font-light mb-2">LinkedIn</h3>
                <p className="text-white/60 text-sm">Connect with me</p>
              </motion.a>
            </div>

            <motion.div
              className="mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <a
                href="https://ashikka.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-white/60 hover:text-white transition-colors duration-300"
              >
                <PenTool size={20} />
                <span className="font-light">Read my thoughts on Medium</span>
                <ExternalLink size={16} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-thin tracking-tight mb-6">
              Stay in the loop
            </h2>

            <p className="text-lg font-light text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
              I share insights on product strategy, AI innovations, and the journey of scaling from 0 to millions.
              Join product leaders from AMD, Eagle Eye Networks, and other growth-stage companies.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className={`flex-1 px-4 py-3 ${glassEffect} rounded-full text-sm font-light tracking-wide placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300`}
              />
              <motion.button
                className="px-6 py-3 bg-white text-black rounded-full text-sm font-light tracking-wide hover:bg-white/90 transition-all duration-300 whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>

            <p className="text-xs text-white/50 mt-4">
              No spam, unsubscribe anytime. I respect your inbox.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-white/40 font-light text-sm">
              © 2025 Ashikka Gupta. Crafted with attention to detail.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;

