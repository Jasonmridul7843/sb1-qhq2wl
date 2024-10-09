import React from 'react';
import { Play } from 'lucide-react';

const songs = [
  { title: "Dhaka Dreams", cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", description: "A tribute to the bustling city that never sleeps." },
  { title: "River's Song", cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", description: "Inspired by the mighty rivers that flow through Bangladesh." },
  { title: "Monsoon Melodies", cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", description: "Capturing the essence of rainy season in musical notes." },
];

const Music: React.FC = () => {
  return (
    <section id="music" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="section-title">My Music</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {songs.map((song, index) => (
            <div key={index} className="bg-background rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 fade-in">
              <img src={song.cover} alt={song.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-accent">{song.title}</h3>
                <p className="text-gray-400 mb-4">{song.description}</p>
                <button className="flex items-center justify-center w-full bg-accent text-background py-2 px-4 rounded-full hover:bg-opacity-80 transition duration-300">
                  <Play className="w-5 h-5 mr-2" />
                  Play
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Music;