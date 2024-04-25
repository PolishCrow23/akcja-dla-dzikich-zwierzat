import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        date: z.string(),
        image: z.string(),
    }),
});

export const collections = {
    posts: postsCollection,
};