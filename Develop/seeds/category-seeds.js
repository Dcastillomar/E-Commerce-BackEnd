const { Category } = require('../models');

const categoryData = [
  {
    category_id: 1,
    category_name: 'Shirts',
  },
  {
    category_id: 2,
    category_name: 'Shorts',
  },
  {
    category_id: 3,
    category_name: 'Music',
  },
  {
    category_id: 4,
    category_name: 'Hats',
  },
  {
    category_id: 5,
    category_name: 'Shoes',
  },
];

const seedCategories = async () => {
  try {
    await Category.bulkCreate(categoryData);
    console.log("categories seeded");
  } catch (error) {
    console.error('Error seeding categories', error);
  }
};

module.exports = seedCategories;
