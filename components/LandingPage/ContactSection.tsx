// ContactSection.jsx
import React from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form className="max-w-md mx-auto space-y-4">
          <Input label="Name" type="text" placeholder="Your Name" />
          <Input label="Email" type="email" placeholder="Your Email" />
          <Input label="Subject" type="text" placeholder="Subject" />
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              placeholder="Your Message"
            ></textarea>
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
