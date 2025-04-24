import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from '../env'

// https://www.sanity.io/docs/image-url
const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: any) => {
  if (!source?.asset?._ref) {
    return {
      url: 'https://via.placeholder.com/600x400?text=No+Image',
      width: 600,
      height: 400,
    }
  }

  return imageBuilder.image(source)
}
