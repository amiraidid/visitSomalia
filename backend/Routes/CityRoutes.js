import express from 'express';
import { getAll, getPlace, regions} from '../Controllers/CityController.js';

const router = express.Router();

router.route('/explore').get(getAll);
router.route('/explore/:name').get(getPlace);
router.route('/regions/:region').get(regions);

export default router