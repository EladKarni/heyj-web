"use client";

import { FC, useState } from "react";
import SectionContainer from "@/ui/SectionContainer";
import CTAButton from "@/ui/CTAButton";

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

const ContactSection: FC<ContactSectionProps> = ({
  title = "Get in Touch",
  subtitle = "Contact",
  description = "Have a question or feedback? We'd love to hear from you.",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Support",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "Support", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <SectionContainer sectionName="contact" background="alt">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm md:text-base uppercase tracking-wider mb-2">
            {subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-content mb-4">
            {title}
          </h2>
          <p className="text-lg text-base-content/70">{description}</p>
        </div>

        {/* Contact Form */}
        <div className="bg-white/60 dark:bg-base-200/60 backdrop-blur-sm border border-gray-300 dark:border-base-300 rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-base-content mb-2">
                Name <span className="text-error">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-base-300 bg-base-100 text-base-content focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-base-content mb-2">
                Email <span className="text-error">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-base-300 bg-base-100 text-base-content focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-base-content mb-2">
                Subject <span className="text-error">*</span>
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-base-300 bg-base-100 text-base-content focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              >
                <option value="Support">Support</option>
                <option value="Info">Info</option>
                <option value="Business">Business</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-base-content mb-2">
                Message <span className="text-error">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-base-300 bg-base-100 text-base-content focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Your message..."
              />
            </div>

            {status === "success" && (
              <div className="bg-success/10 border border-success text-success px-4 py-3 rounded-lg">
                Thank you! We&apos;ll get back to you soon.
              </div>
            )}

            {status === "error" && (
              <div className="bg-error/10 border border-error text-error px-4 py-3 rounded-lg">
                Something went wrong. Please try again.
              </div>
            )}

            <CTAButton
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              loading={status === "loading"}
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </CTAButton>
          </form>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
