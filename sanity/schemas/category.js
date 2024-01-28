export default {
  name: 'category',
  type: 'document',
  title: 'Categories',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of category',
    },
    {
      name: 'bigImage',
      type: 'image',
      title: 'Category Banner',
    },
    {
      name: 'catText',
      type: 'string',
      title: 'Category Title',
    },
    {
      name: 'catDesc',
      type: 'text',
      title: 'Category Description',
    },
  ],
}
