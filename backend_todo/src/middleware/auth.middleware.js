function auth(req, res, next) {
    // Check if user object exists in session
    if (!req.session || !req.session.user) {
      return res.status(401).json({ msg: 'Not authenticated' });
    }
  
    // If user object exists, proceed to the next middleware
    next();
  }
  
  module.exports = auth;
  