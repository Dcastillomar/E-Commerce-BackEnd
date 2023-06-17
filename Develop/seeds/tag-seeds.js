const { Tag } = require('../models');

const tagData = [
  {
    tag_id: 1,
    tag_name: 'rock music',
  },
  {
    tag_id: 2,
    tag_name: 'pop music',
  },
  { 
    tag_id: 3,
    tag_name: 'blue',
  },
  {
    tag_id: 4,
    tag_name: 'red',
  },
  {
    tag_id: 5,
    tag_name: 'green',
  },
  {
    tag_id: 6,
    tag_name: 'white',
  },
  {
    tag_id: 7,
    tag_name: 'gold',
  },
  {
    tag_id: 8,
    tag_name: 'pop culture',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
