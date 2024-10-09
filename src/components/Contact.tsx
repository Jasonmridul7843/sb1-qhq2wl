import React from 'react';
import { Instagram, Youtube, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Contact Me</h2>
        <div className="max-w-3xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-accent">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md bg-background border-gray-700 shadow-sm focus:border-accent focus:ring focus:ring-accent focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-accent">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md bg-background border-gray-700 shadow-sm focus:border-accent focus:ring focus:ring-accent focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-accent">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md bg-background border-gray-700 shadow-sm focus:border-accent focus:ring focus:ring-accent focus:ring-opacity-50"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full btn btn-primary">Send Message</button>
            </div>
          </form>
          <div className="mt-12 flex justify-center space-x-6">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-opacity-80">
              <Instagram className="w-8 h-8" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-opacity-80">
              <Youtube className="w-8 h-8" />
            </a>
            <a href="mailto:alvan@example.com" className="text-accent hover:text-opacity-80">
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;