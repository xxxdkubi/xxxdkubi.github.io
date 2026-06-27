import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional().default(''),
    date: z.date(),
    category: z.string().optional().default('未分类'),
    tags: z.array(z.string()).optional().default([]),
  }),
});

export const collections = { blog };
