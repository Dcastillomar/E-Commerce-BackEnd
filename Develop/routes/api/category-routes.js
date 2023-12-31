const router = require('express').Router();
const { Category, Product } = require('../../models');
// The `/api/categories` endpoint

// find all categories
// be sure to include its associated Products, add error catch
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [{ model: Product }]
    })
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one category by its `id` value
// be sure to include its associated Products, add error catch
router.get('/:id', async (req, res) => {
  try {
    const categories = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    })
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new category, add error catch
router.post('/', async (req, res) => {
  try {
    const categories = await Category.create(req.body);
    res.status(200).json(categories);
  } catch (err) {
    res.status(400).json(err);
  }
}
);

// update a category by its `id` value, add error catch
router.put('/:id', async (req, res) => {
  try {
    const categories = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!categories[0]) {
      res.status(404).json({ message: ' No category by this id' });
      return;
    }
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a category by its `id` value, add error catch
router.delete('/:id', async (req, res) => {
  try {
    const categories = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categories) {
      res.status(404).json({ message: 'No category with this id' });
      return;
    }
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err),
    console.log(err);
  }

});

module.exports = router;
