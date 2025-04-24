import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from '../env'

// https://www.sanity.io/docs/image-url
const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: any) => {
  // Handle missing image source gracefully
  if (!source?.asset?._ref) {
    console.warn('Missing image source reference:', source);
    // Return an object with a url method to maintain consistent interface
    return {
      url: () => 'https://via.placeholder.com/600x400?text=No+Image',
      width: () => 600,
      height: () => 400,
    }
  }

  try {
    // Return Sanity image builder for normal operation
    return imageBuilder.image(source);
  } catch (error) {
    console.error('Error creating image URL:', error, source);
    // Fallback for errors
    return {
      url: () => 'https://via.placeholder.com/600x400?text=Image+Error',
      width: () => 600,
      height: () => 400,
    }
  }
}
