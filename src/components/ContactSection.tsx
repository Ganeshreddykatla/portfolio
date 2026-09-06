import React, { useState, useEffect } from 'react';
import { contactInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, Check, Copy, Clock, MessageSquare, ArrowUpRight, MessageCircle, ExternalLink, RefreshCw, Github } from 'lucide-react';
import { SpotlightCard } from './effects/SpotlightCard';
import { MagneticButton } from './effects/MagneticButton';
import { triggerConfetti } from '../utils/confetti';
import { motion } from 'motion/react';

export const ContactSection: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState('');
  const [validationError, setValidationError] = useState('');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [sentSuccess, setSentSuccess] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // IST is UTC+5:30
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    triggerConfetti();
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const getPayload = () => {
    const subject = formState.subject.trim() || `Inquiry from ${formState.name.trim() || 'Portfolio Visitor'}`;
    const sender = `From: ${formState.name.trim()} (${formState.email.trim()})`;
    const body = `Hi Ganesh,\n\n${formState.message.trim()}\n\n---\n${sender}\nContact: ${formState.email.trim()}`;
    
    const to = contactInfo.primaryEmail;
    const cc = contactInfo.personalEmail || 'ganeshreddykatla321@gmail.com';

    // Direct Webmail Gmail compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&cc=${encodeURIComponent(cc)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Standard mailto URL
    const mailtoUrl = `mailto:${to}?cc=${encodeURIComponent(cc)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // WhatsApp Direct link
    const cleanPhone = contactInfo.phone.replace(/[^0-9]/g, '');
    const waText = `Hi Ganesh, reaching out via your portfolio:\n*From:* ${formState.name.trim()} (${formState.email.trim()})\n*Subject:* ${subject}\n\n*Message:*\n${formState.message.trim()}`;
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(waText)}`;

    // Full formatted plain text
    const plainText = `To: ${to}\nCc: ${cc}\nSubject: ${subject}\n\n${body}`;

    return { subject, body, to, cc, gmailUrl, mailtoUrl, whatsappUrl, plainText };
  };

  const validateForm = () => {
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setValidationError('Please fill in your Name, Email, and Message before sending.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email.trim())) {
      setValidationError('Please enter a valid email address.');
      return false;
    }
    setValidationError('');
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const payload = getPayload();
    setSentSuccess(true);
    triggerConfetti();

    // Attempt to open Gmail compose or mailto in a safe user-triggered gesture
    try {
      window.open(payload.gmailUrl, '_blank', 'noopener,noreferrer');
    } catch {
      // If popup is blocked by browser, the interactive action buttons in the success view handle it cleanly
    }
  };

  const handleQuickChannel = (channel: 'gmail' | 'mailto' | 'whatsapp') => {
    if (!validateForm()) return;
    const payload = getPayload();
    setSentSuccess(true);
    triggerConfetti();

    if (channel === 'gmail') {
      window.open(payload.gmailUrl, '_blank', 'noopener,noreferrer');
    } else if (channel === 'whatsapp') {
      window.open(payload.whatsappUrl, '_blank', 'noopener,noreferrer');
    } else {
      const link = document.createElement('a');
      link.href = payload.mailtoUrl;
      link.click();
    }
  };

  const payload = getPayload();

  return (
    <section id="contact" className="py-16 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12 space-y-2"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Let&apos;s Connect & Build
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Whether you are discussing senior engineering opportunities, design systems, or developer AI enablement tooling, feel free to reach out directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Info Cards with Spotlight */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary Direct Email Card */}
            <SpotlightCard
              spotlightColor="rgba(52, 211, 153, 0.12)"
              borderColor="rgba(52, 211, 153, 0.45)"
            >
              <div className="p-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                      Primary Email
                    </span>
                    <a
                      href={`mailto:${contactInfo.primaryEmail}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-emerald-400 transition-colors truncate block"
                    >
                      {contactInfo.primaryEmail}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(contactInfo.primaryEmail, 'primary-email')}
                  id="copy-primary-email-btn"
                  aria-label="Copy direct email"
                  title="Copy email address"
                  className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer shrink-0"
                >
                  {copiedKey === 'primary-email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </SpotlightCard>

            {/* Secondary Direct Email Card */}
            {contactInfo.personalEmail && (
              <SpotlightCard
                spotlightColor="rgba(56, 189, 248, 0.12)"
                borderColor="rgba(56, 189, 248, 0.45)"
              >
                <div className="p-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                        Direct Inquiries
                      </span>
                      <a
                        href={`mailto:${contactInfo.personalEmail}`}
                        className="text-sm sm:text-base font-semibold text-white hover:text-sky-400 transition-colors truncate block"
                      >
                        {contactInfo.personalEmail}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(contactInfo.personalEmail!, 'personal-email')}
                    id="copy-personal-email-btn"
                    aria-label="Copy personal email"
                    title="Copy alternate email"
                    className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer shrink-0"
                  >
                    {copiedKey === 'personal-email' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </SpotlightCard>
            )}

            {/* Direct Phone & WhatsApp Card */}
            <SpotlightCard
              spotlightColor="rgba(192, 132, 252, 0.12)"
              borderColor="rgba(192, 132, 252, 0.45)"
            >
              <div className="p-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                      Mobile & WhatsApp
                    </span>
                    <a
                      href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-purple-400 transition-colors block"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <a
                    href={`https://wa.me/${contactInfo.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Chat on WhatsApp"
                    className="p-2 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-400 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => handleCopy(contactInfo.phone, 'phone')}
                    id="copy-phone-btn"
                    aria-label="Copy phone number"
                    title="Copy phone number"
                    className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {copiedKey === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </SpotlightCard>

            {/* GitHub Profile & Repositories Card */}
            {contactInfo.github && (
              <SpotlightCard
                spotlightColor="rgba(255, 255, 255, 0.12)"
                borderColor="rgba(255, 255, 255, 0.35)"
              >
                <div className="p-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-xl bg-white/10 text-white border border-white/20 shrink-0">
                      <Github className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                        GitHub Profile & Code
                      </span>
                      <a
                        href={contactInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base font-semibold text-white hover:text-emerald-400 transition-colors truncate block flex items-center gap-1.5"
                      >
                        <span>github.com/Ganeshreddykatla</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-60 inline" />
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <a
                      href={contactInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      id="open-github-link-btn"
                      title="Open GitHub Profile"
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => handleCopy(contactInfo.github!, 'github')}
                      id="copy-github-btn"
                      aria-label="Copy GitHub link"
                      title="Copy GitHub URL"
                      className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                    >
                      {copiedKey === 'github' ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </SpotlightCard>
            )}

            {/* Location & Time Card */}
            <SpotlightCard
              spotlightColor="rgba(52, 211, 153, 0.08)"
              borderColor="rgba(52, 211, 153, 0.3)"
            >
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-zinc-500" />
                    {contactInfo.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    {currentTime || 'IST'}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Currently based in Hyderabad, India (GMT+5:30). Open to remote collaborations, hybrid setups, and high-impact engineering leadership roles.
                </p>
              </div>
            </SpotlightCard>
          </div>

          {/* Right Column: Direct Message Form with Spotlight */}
          <div className="lg:col-span-7">
            <SpotlightCard
              spotlightColor="rgba(52, 211, 153, 0.1)"
              borderColor="rgba(52, 211, 153, 0.4)"
              className="h-full"
            >
              <div className="p-6 sm:p-8 relative">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Send a Message to Ganesh
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
                    Instant Connect
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                  Drop your thoughts, opportunities, or inquiries directly into Ganesh&apos;s inbox.
                </p>

                {sentSuccess ? (
                  <div className="p-6 rounded-2xl bg-zinc-950/90 border border-emerald-500/30 text-left space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <Check className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white">Your Note is Ready to Send!</h4>
                        <p className="text-xs text-zinc-400">
                          Dispatches to <span className="text-emerald-400 font-mono">{contactInfo.primaryEmail}</span> &amp; <span className="text-sky-400 font-mono">{contactInfo.personalEmail}</span>
                        </p>
                      </div>
                    </div>

                    {/* Pre-formatted message snippet */}
                    <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-white/[0.06] text-xs font-mono space-y-1.5">
                      <div className="text-zinc-400 flex justify-between">
                        <span><b>Subject:</b> {payload.subject}</span>
                        <span className="text-emerald-400">From: {formState.name}</span>
                      </div>
                      <p className="text-zinc-200 line-clamp-3 italic pt-1 border-t border-white/[0.04]">
                        &quot;{formState.message}&quot;
                      </p>
                    </div>

                    {/* Primary dispatch actions */}
                    <div className="space-y-2.5">
                      <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                        Choose Your Preferred Send Channel:
                      </span>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        {/* 1. Launch in Gmail */}
                        <a
                          href={payload.gmailUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          id="dispatch-gmail-btn"
                          className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-xs transition-all shadow-md hover:scale-[1.02]"
                        >
                          <Mail className="w-4 h-4" />
                          <span>Open in Gmail</span>
                          <ExternalLink className="w-3 h-3 opacity-70" />
                        </a>

                        {/* 2. Launch Default Mail */}
                        <a
                          href={payload.mailtoUrl}
                          id="dispatch-mailto-btn"
                          className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-xs transition-all border border-white/[0.08] hover:scale-[1.02]"
                        >
                          <Send className="w-3.5 h-3.5 text-sky-400" />
                          <span>Mail App</span>
                          <ArrowUpRight className="w-3 h-3 opacity-70" />
                        </a>

                        {/* 3. Launch WhatsApp */}
                        <a
                          href={payload.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          id="dispatch-whatsapp-btn"
                          className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-300 font-medium text-xs transition-all border border-emerald-500/30 hover:scale-[1.02]"
                        >
                          <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                          <span>WhatsApp</span>
                          <ExternalLink className="w-3 h-3 opacity-70" />
                        </a>
                      </div>

                      {/* 4. Copy Draft to Clipboard */}
                      <button
                        onClick={() => handleCopy(payload.plainText, 'draft-text')}
                        id="copy-draft-btn"
                        className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-xs font-mono text-zinc-300 hover:text-white border border-white/[0.06] transition-colors cursor-pointer"
                      >
                        {copiedKey === 'draft-text' ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copied Entire Formatted Email to Clipboard!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-zinc-400" />
                            <span>Copy Full Formatted Message to Clipboard</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="pt-2 flex items-center justify-between border-t border-white/[0.06]">
                      <button
                        onClick={() => {
                          setSentSuccess(false);
                        }}
                        className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <span>← Back to Edit Message</span>
                      </button>
                      <button
                        onClick={() => {
                          setSentSuccess(false);
                          setFormState({ name: '', email: '', subject: '', message: '' });
                        }}
                        className="text-xs font-mono text-zinc-400 hover:text-emerald-400 flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <RefreshCw className="w-3 h-3" />
                        <span>Write New Note</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {validationError && (
                      <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono">
                        {validationError}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="contact-name" className="text-xs font-mono text-zinc-400">
                          Your Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => {
                            setFormState({ ...formState, name: e.target.value });
                            if (validationError) setValidationError('');
                          }}
                          placeholder="e.g. Alex Miller"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/80 border border-white/[0.08] focus:border-emerald-500/60 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="contact-email" className="text-xs font-mono text-zinc-400">
                          Your Email *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => {
                            setFormState({ ...formState, email: e.target.value });
                            if (validationError) setValidationError('');
                          }}
                          placeholder="alex@company.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/80 border border-white/[0.08] focus:border-emerald-500/60 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-subject" className="text-xs font-mono text-zinc-400">
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        placeholder="e.g. Senior Frontend Engineer role or AI Tooling discussion"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/80 border border-white/[0.08] focus:border-emerald-500/60 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-message" className="text-xs font-mono text-zinc-400">
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => {
                          setFormState({ ...formState, message: e.target.value });
                          if (validationError) setValidationError('');
                        }}
                        placeholder="Tell me about the project, role, or technical challenge..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/80 border border-white/[0.08] focus:border-emerald-500/60 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none transition-all resize-none"
                      />
                    </div>

                    <div className="space-y-3 pt-1">
                      <MagneticButton
                        type="submit"
                        id="submit-contact-btn"
                        className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-white text-zinc-950 hover:bg-zinc-200 text-sm font-semibold transition-all shadow-md shadow-white/5 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>Send Message to Ganesh</span>
                      </MagneticButton>

                      {/* Quick direct channel triggers */}
                      <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-zinc-400">
                        <span className="text-[11px] text-zinc-500">Quick dispatch:</span>
                        <button
                          type="button"
                          onClick={() => handleQuickChannel('gmail')}
                          className="hover:text-emerald-400 transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <Mail className="w-3 h-3 text-emerald-400" />
                          <span>Gmail</span>
                        </button>
                        <span className="text-zinc-700">·</span>
                        <button
                          type="button"
                          onClick={() => handleQuickChannel('whatsapp')}
                          className="hover:text-emerald-400 transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <MessageCircle className="w-3 h-3 text-emerald-400" />
                          <span>WhatsApp</span>
                        </button>
                        <span className="text-zinc-700">·</span>
                        <button
                          type="button"
                          onClick={() => handleQuickChannel('mailto')}
                          className="hover:text-sky-400 transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <Send className="w-3 h-3 text-sky-400" />
                          <span>Default Mail</span>
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
};
