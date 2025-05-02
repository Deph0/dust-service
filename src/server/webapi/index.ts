import express from 'express';

import {
    createStar, getStar, updateStar, deleteStar, getAllStars
} from './controllers/starsController';

export default function startApiServer() {
  const app = express();
  app.use(express.json());

  app.get('/', async (req, res) => {
    res.send(`F2PDust  Star-API`);
  });

  // Routes for /stars
  app.route('/stars')
    .get(getAllStars) // Get all stars
    .post(createStar); // Create a new star

  app.route('/stars/:id')
    .get(getStar)    // Get a star by ID
    .patch(updateStar) // Update a star by ID
    .delete(deleteStar);  // Delete a star by ID


  const port = parseInt(process.env.API_PORT || '3000');
  app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`);
  });
}