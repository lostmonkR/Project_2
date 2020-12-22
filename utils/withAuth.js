const withAuth = (req, res, next) => {
  if(!req.session.bId || req.session.sId){
    res.redirect('/index');
  }else{
    next();
  }
};

module.exports = withAuth;