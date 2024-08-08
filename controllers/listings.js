// controllers/listings.js
// controllers/listings.js

const express = require('express');
const router = express.Router();
const Listing = require('../models/listing'); // Make sure the path is correct

// GET /listings
router.get('/', async (req, res) => {
  try {
    // Find all listings
    const listings = await Listing.find({});
    console.log(listings); // Log all listings to the console
    res.render('listings/index', { listings }); // Render the index.ejs view with listings data
  } catch (err) {
    console.error(err); // Log any errors that occur
    res.status(500).send('Internal Server Error'); // Send an error message to the client
  }
});

module.exports = router;

