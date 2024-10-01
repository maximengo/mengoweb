import { defineCollection, z } from "astro:content";

const proyectos = defineCollection({
    schema: z.object({
        title: z.string(),
        cat: z.string(),
        tags: z.string(),
        img: z.string(),
        url: z.string().url(),
    })
});

export const collections = {proyectos}