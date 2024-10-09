import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background text-text py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Alvan Al Rakib. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;