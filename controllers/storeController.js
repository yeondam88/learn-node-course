exports.myMiddleware = (req, res, next) => {
  req.name = 'Lloyd';
  next();
}
exports.homePage = (req, res) => {
  res.render('index');
}
