import { defineCollection, z } from "astro:content";

const proyectos = defineCollection({
  // Usamos esquema como función para que image() esté disponible
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cat: z.string(),
      tags: z.string(),
      img: image(),       // 👈 aquí es el helper image()
      url: z.string().url(),
      pubDate: z.date(),
    }),
});

export const collections = { proyectos };
