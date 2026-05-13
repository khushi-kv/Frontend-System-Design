"use client";

import { useEffect, useState } from "react";
import { MemeCard } from "./lld-patterns/shimmer/components/MemeCard";
import { CardShimmer } from "./lld-patterns/shimmer/components/CardShimmer";

interface Meme {
  imageUrl: string;
  title: string;
  description: string;
}
const Meme_Data: Meme[] = [
  {
    title: "When code works on first try",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    description: "When code works on first try",
  },
  {
    title: "When code works on first try",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    description: "When code works on first try",
  },
  {
    title: "When code works on first try",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    description: "When code works on first try",
  },
  {
    title: "When code works on first try",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    description: "When code works on first try",
  },
];
export default function Home() {
  const [meme, setMeme] = useState<Meme[]>([]);
  useEffect(() => {
    setTimeout(() => setMeme(Meme_Data), 3000);
  }, []);
  const loading = meme.length === 0;
  return (
    <div className="grid grid-cols-3 gap-4 ">
      {loading &&
        Array.from({ length: 5 }).map((_, index) => (
          <CardShimmer
            key={index}
          
          />
        ))}
      {meme?.map((data, index) => (
        <MemeCard
          key={index}
          title={data.title}
          description={data.description}
          imageUrl={data.imageUrl}
        />
      ))}
    </div>
  );
}
