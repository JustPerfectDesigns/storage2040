export default {
  name: 'product',
  type: 'document',
  title: 'Products',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of product',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of product',
      options: {
        source: 'name',
      },
    },
    {
      name: 'images',
      type: 'array',
      title: 'Product Images',
      of: [
        {
          type: 'image',
        },
      ],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description of product',
    },
    {
      name: 'info',
      type: 'text',
      title: 'Additional Description of product',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Product price',
    },
    {
      name: 'price_id',
      type: 'string',
      title: 'Stripe Price ID',
    },
    {
      name: 'category',
      title: 'Product Category',
      type: 'reference',
      to: [
        {
          type: 'category',
        },
      ],
    },
  ],
}
