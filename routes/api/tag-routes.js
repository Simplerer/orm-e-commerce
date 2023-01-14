const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{
        model: Product
      }]
    });
    res.json(tagData);

  } catch (err) {
    console.error(err);
    res.json(err);
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    res.json(tagData);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.json(tagData);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
  // create a new tag
});

router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update({
      tag_name: req.body.tag_name,      
    },
    {
      where: { id: req.params.id }
    },
    )
    res.json(tagData);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  try { 
    const tagData = await Tag.destroy({
      where: { id: req.params.id } });
      res.json(tagData);

  } catch (err) {
    console.error(err);
    res.json(err);    
  }
  // delete on tag by its `id` value
});

module.exports = router;
