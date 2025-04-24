export default {
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
    },
    {
      name: 'clientLogo',
      title: 'Client Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'challenge',
      title: 'Challenge',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'solution',
      title: 'Solution',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'results',
      title: 'Results',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'metric',
              title: 'Metric',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'value',
              title: 'Value',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'testimonial',
      title: 'Testimonial',
      type: 'object',
      fields: [
        {
          name: 'quote',
          title: 'Quote',
          type: 'text',
        },
        {
          name: 'author',
          title: 'Author',
          type: 'string',
        },
        {
          name: 'role',
          title: 'Role',
          type: 'string',
        },
      ],
    },
    {
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
            {
              name: 'alt',
              title: 'Alternative text',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      client: 'clientName',
      media: 'mainImage',
    },
    prepare(selection: any) {
      const { client } = selection;
      return { ...selection, subtitle: client && `Client: ${client}` };
    },
  },
} 