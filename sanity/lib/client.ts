import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

export async function getBlogPosts() {
  return client.fetch(
    `*[_type == "blogPost"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      excerpt,
      publishedAt,
      "author": author->{name, image, slug},
      "categories": categories[]->title
    }`
  )
}

export async function getBlogPostBySlug(slug: string) {
  return client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      mainImage,
      content,
      excerpt,
      publishedAt,
      "author": author->{name, image, bio, slug},
      "categories": categories[]->title,
      "relatedPosts": relatedPosts[]-> {
        _id,
        title,
        slug,
        mainImage,
        excerpt,
        publishedAt
      }
    }`,
    { slug }
  )
}

export async function getCaseStudies() {
  return client.fetch(
    `*[_type == "caseStudy"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      introduction,
      clientName,
      clientLogo,
      publishedAt,
      technologies
    }`
  )
}

export async function getCaseStudyBySlug(slug: string) {
  return client.fetch(
    `*[_type == "caseStudy" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      mainImage,
      introduction,
      challenge,
      solution,
      results,
      clientName,
      clientLogo,
      technologies,
      testimonial,
      galleryImages,
      publishedAt
    }`,
    { slug }
  )
}
