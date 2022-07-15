const {Router} = require('express');
const { spaceshipGet, spaceshipPost, spaceshipPut, spaceshipDelete, spaceshipGetById } = require('../controllers/spaceship');

const router = Router()

router.get('/', spaceshipGet);
router.get('/:id', spaceshipGetById);
router.post('/', spaceshipPost );
router.put('/:id', spaceshipPut);
router.delete('/:id', spaceshipDelete )



module.exports = router;