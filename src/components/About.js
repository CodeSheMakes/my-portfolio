import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';


export default function About() {
const [author, setAuthor] = useState(null);

useEffect(()=> {
    sanityClient.fetch(`[*_type == "author"]{
        name,
        bio,
        "authorImage": image.asset->url
    }`
        )
    .then((data) => setAuthor(data[0]))
    .catch(console.error);
}, []);

if (!author) return <div>Loading...</div>

    return <h1>About Page!</h1>
}