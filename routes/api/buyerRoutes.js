const router = require('express').Router();
const buyer = require('/model/buyer');

// GET one buyer
router.get('/:bPhoneNumber', async (req, res) => {
  try {
    const bPhoneNumberInfo = await buyer.findByPk(req.params.id);
    if (!bPhoneNumberInfo) {
      res.status(404).json({ message: 'No seller with this phone' });
      return;
    }
    res.status(200).json(bPhoneNumberInfo);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST create a new buyer
router.post('/buyer', async (req, res) => {
  try {
    const bInfo = await buyer.create(req.body);
    res.status(200).json(bInfo);
  } catch (err) {
    res.status(400).json(err);
  }
});

// POST user buyer
router.post('/buyer', async (req, res) => {
  try {
    // First we find one user record with an email address that matches the one provided by the user logging in
    const buyerData = await buyer.findOne({ where: { email: req.body.email } });
    // If an account with that email address doesn't exist, the user will recieve an error message
    if (!buyerData) {
      res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    // If the user does exist, we will use the checkPassword() instance method to compare the user's input to the password stored in the record
    const validPassword = await userData.checkPassword(req.body.password);
    // If checkPassword() evaluates as false, the user will receive an error message
    if (!validPassword) {
      res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    // If checkPassword() evaluates as true, the user will be logged in
    res.json({ user: userData, message: 'You are now logged in!' });
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT update a buyer
router.put('/:buyer', async (req, res) => {
  try {
    const buyerData = await buyer.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!buyerData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(buyerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;