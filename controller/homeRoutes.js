const router = require('express').Router();
const { Seller, Customer } = require('../model');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const sellerData = await Seller.findAll({
      include: [
        {
          model: Customer,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const sellers = sellerData.map((seller) => seller.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      sellers, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/seller/:id', async (req, res) => {
  try {
    const sellerData = await Seller.findByPk(req.params.id, {
      include: [
        {
          model: Customer,
          attributes: ['name'],
        },
      ],
    });

    const seller = sellerData.get({ plain: true });

    res.render('seller', {
      ...seller,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const customerData = await Customer.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Seller}],
    });

    const customer = customerData.get({ plain: true });

    res.render('profile', {
      ...customer,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
