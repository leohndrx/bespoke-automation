import { type SchemaTypeDefinition } from 'sanity'
import blogPost from './schemas/blogPost'
import author from './schemas/author'
import category from './schemas/category'
import caseStudy from './schemas/caseStudy'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogPost, author, category, caseStudy],
} 