import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writeups = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writeups' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    category: z
      .enum(['htb', 'thm', 'bugbounty', 'appsec', 'ctf', 'research'])
      .default('appsec'),
    difficulty: z.enum(['easy', 'medium', 'hard', 'insane']).optional(),
    cve: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writeups };
