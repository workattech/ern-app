const express = require('express');

const router = express.Router();

router.get('/:developerId', (req, res) => {
    res.send({ id: req.params.developerId });
});

module.exports = router;
