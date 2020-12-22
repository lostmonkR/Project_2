const withAuth = (req, res, next) => {
  if(!req.session.bId){
    res.redirect('/index');
  }else{
    next();
  }
};

module.exports = withAuth;