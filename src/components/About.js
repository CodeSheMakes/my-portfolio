import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';
import night from '../Night01.png';
import imageUrlBuilder from '@sanity/image-url';


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
          name,
          "bio": bio[0].children[0].text,
          "authorImage": image.asset->url
      }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
    <main className="relative">
      <img src={night} alt="Colorful waves" className="absolute w-full" />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-yellow-100 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-flex h-32 lg:w-flex lg:h-64 mr-8"
            alt="Morgan"
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-indigo-300 mb-4" aria-label="waving">
              👋🏿 Hey there, I'm{" "}
              <span className="text-purple-400">{author.name}</span>
            </h1>
            <p className="text-black-200 text-xl">{author.bio}</p>
          </div>
        </section>
      </div>
    </main>
  );
}