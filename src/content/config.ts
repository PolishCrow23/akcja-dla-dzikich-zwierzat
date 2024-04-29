import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        image: z.string(),
    }),
});

export const collections = {
    posts: postsCollection,
};