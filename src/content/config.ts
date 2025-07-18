// src/content/config.ts
import { defineCollection, z, reference } from 'astro:content';

const asignaturasCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    coverImage: image(),
  }),
});

const librosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subject: reference('asignaturas'),
    grade: z.string(),
    gradeOrder: z.number().optional(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'asignaturas': asignaturasCollection,
  'libros': librosCollection,
};