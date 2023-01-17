const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');



router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{
        model: Product, through: {
          attributes: []
        }
      }]
    });
    res.json(tagData);

  } catch (err) {
    console.error(err);
    res.json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: {
        attributes: []
      } }]
    });
    res.json(tagData);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.json(tagData);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
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
});

module.exports = router;
