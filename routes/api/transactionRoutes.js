const router = require('express').Router();
const {Buyer, Seller} = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../utils/auth')

router.get('/', (req, res) => {
  Post.findAll({
        attributes: ['bId',
          'bName',
          'bAddress',
          'bzip'
        ],
        order: [['bName', 'DESC']],
        include: [
          {
            model: User,
            attributes: ['bname']
          },
          {
            model: Comment,
            attributes: ['bId', '//some_column', '//some_column\'', '//some_column\'', '//some_column\''],
            include: {
              model: Buyer,
              attributes: ['bfName']
            }
          }
        ]
      })
      //reverse to sort
      .then(postData => res.json(postData.reverse()))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  
});

// GET a single transaction
router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      '',//TODO
      '',
      '',
      ''
    ],
    include: [
      {
        model: Buyer,
        attributes: ['username']
      },
      {
        model: Comment,
        attributes: ['//TODO'],
        include: {
          model: Buyer,
          attributes: ['username']
        }
      }
    ]
  }).then(postData => {
        if (!postData) {
          res.status(404).json({ message: 'No transaction found with this id' });
          return;
        }
        res.json(postData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// put to update
router.put('/:id', withAuth, (req, res) => {
  Post.update({
        title: req.body.title,
        content: req.body.content
      },
      {
        where: {
          id: req.params.id
        }
      }).then(postData => {
        if (!postData) {
          res.status(404).json({ message: 'No transaction found with this id' });
          return;
        }
        res.json(postData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// delete transaction

//delete post

router.delete('/:tId', withAuth, (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id
    }
  }).then(postData => {
    if (!postData) {
      res.status(404).json({ message: 'No transaction found with this id' });
      return;
    }
    res.json(postData);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});