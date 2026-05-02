'use client';
import { useState } from 'react';
import { Mail, MessageCircle, MapPin, Clock, Send, ChevronDown, Phone, MessageSquare } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import AnimatedSection from '@/components/AnimatedSection';
import styles from './contact.module.css';

const faqs = [
  { q: 'How do I register for a hackathon?', a: 'Browse our hackathons page, select an event, and click "Register Now". You\'ll need to create a free account first.' },
  { q: 'Is Hacker\'s Unity free to join?', a: 'Yes! Joining our community is completely free. Some premium events may have registration fees.' },
  { q: 'Can I participate as a solo hacker?', a: 'Most hackathons allow solo participation. You can also use our team-finding feature to connect with teammates.' },
  { q: 'How do I become a mentor?', a: 'Reach out to us through this contact form or join our Discord and express interest in the #mentorship channel.' },
  { q: 'Do you host in-person events?', a: 'Yes! We host events across major cities in India. Check our events page for upcoming in-person meetups.' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>
      <section className={styles.hero}><div className="container"><AnimatedSection>
        <SectionHeading label="Contact" title="Get in Touch" subtitle="Have a question, partnership inquiry, or just want to say hello? We'd love to hear from you." />
      </AnimatedSection></div></section>

      <section className="section"><div className={`container ${styles.layout}`}>
        <AnimatedSection>
          <div className={styles.formSection}>
            <h2 className="heading-sm">Send a Message</h2>
            {submitted ? (
              <div className={styles.success}><span>🎉</span><p>Thanks for reaching out! We&apos;ll get back to you within 24-48 hours.</p></div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.field}><label htmlFor="name">Name</label><input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Your name" /></div>
                  <div className={styles.field}><label htmlFor="email">Email</label><input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="you@example.com" /></div>
                </div>
                <div className={styles.field}><label htmlFor="subject">Subject</label><input id="subject" name="subject" type="text" required value={formData.subject} onChange={handleChange} placeholder="What's this about?" /></div>
                <div className={styles.field}><label htmlFor="message">Message</label><textarea id="message" name="message" rows={5} required value={formData.message} onChange={handleChange} placeholder="Tell us more..." /></div>
                <button type="submit" className="btn btn-primary btn-lg"><Send size={18} /> Send Message</button>
              </form>
            )}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className={styles.sidebar}>
            <div className={styles.infoCard}>
              <h3 className="heading-sm">Other Ways to Reach Us</h3>
              <div className={styles.infoList}>
                <div className={styles.infoItem}><Mail size={18} /><div><p className={styles.infoLabel}>Email</p><p><a href="mailto:hackerunity.community@gmail.com">hackerunity.community@gmail.com</a></p></div></div>
                <div className={styles.infoItem}><Phone size={18} /><div><p className={styles.infoLabel}>Phone</p><p><a href="tel:+918852924002">+91 8852924002</a></p></div></div>
                <div className={styles.infoItem}><Phone size={18} /><div><p className={styles.infoLabel}>Phone</p><p><a href="tel:+919324264950">+91 9324264950</a></p></div></div>
                <div className={styles.infoItem}><MessageCircle size={18} /><div><p className={styles.infoLabel}>Discord</p><p><a href="https://discord.com/invite/xcNNqdDhce" target="_blank" rel="noopener noreferrer">Join our Server</a></p></div></div>
                <div className={styles.infoItem}><MessageSquare size={18} /><div><p className={styles.infoLabel}>WhatsApp</p><p><a href="https://chat.whatsapp.com/JqVKrBiZIdND1n40ffErw3?mode=gi_t" target="_blank" rel="noopener noreferrer">Community Group</a></p></div></div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div></section>

      <section className={`section ${styles.faqSection}`}><div className="container"><AnimatedSection>
        <SectionHeading label="FAQ" title="Frequently Asked Questions" />
        <div className={styles.faqList}>{faqs.map((faq, i) => (
          <div key={i} className={`${styles.faqItem} ${openFaq === i ? styles.faqOpen : ''}`}>
            <button className={styles.faqQuestion} onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
              <span>{faq.q}</span><ChevronDown size={18} className={styles.faqChevron} />
            </button>
            {openFaq === i && <div className={styles.faqAnswer}><p>{faq.a}</p></div>}
          </div>
        ))}</div>
      </AnimatedSection></div></section>
    </>
  );
}
