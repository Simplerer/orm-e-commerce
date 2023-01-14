const router = require('express').Router();
const { Category, Product } = require('../../models');
const { destroy } = require('../../models/Product');


router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{
        model: Product
      }]
    });
    res.json(categoryData);

  } catch (err) {
    console.error(err);
    res.json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    res.json(categoryData);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.json(categoryData);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update({
      category_name: req.body.category_name,      
    },
    {
      where: { id: req.params.id }
    },
    )
    res.json(categoryData);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try { 
    const categoryData = await Category.destroy({
      where: { id: req.params.id } });
      res.json(categoryData);

  } catch (err) {
    console.error(err);
    res.json(err);    
  }
});

module.exports = router;
