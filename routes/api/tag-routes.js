const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll({include: Product});
    res.json(tags);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error." });
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tag = await Tag.findByPk(req.params.id);
    if (!tag) {
      res.status(404).json({ message: "Tag not found!" });
      return;
    }
    res.json(tag);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error." });
  }
});

router.post("/", (req, res) => {
  // create a new tag
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
