import React from 'react';
import { Parallax } from 'react-parallax';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <Parallax
        bgImage="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        strength={500}
        bgClassName="opacity-30"
      >
        <div className="h-[600px]">
          <div className="parallax-content">
            <h2 className="section-title">About Me</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="mb-4">
                I'm Alvan Al Rakib, a passionate musician and music director from Dhaka, Bangladesh. With over a decade of experience in the industry, I've had the privilege of working on numerous projects that have shaped the soundscape of our region.
              </p>
              <p className="mb-4">
                My journey began in the vibrant streets of Dhaka, where I was exposed to a rich tapestry of musical traditions. This early influence has been the cornerstone of my unique style, blending traditional Bengali melodies with contemporary global sounds.
              </p>
              <p>
                As a music director, I've had the honor of collaborating with some of the finest talents in the industry, creating soundtracks that resonate with audiences across the subcontinent. My work spans various genres, from soulful Bangla folk to energetic pop and everything in between.
              </p>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default About;