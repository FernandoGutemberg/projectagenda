const Login = require('../models/LoginModel')

exports.index = (req, res) => {
    res.render('login');
};

exports.register = function(req, res) {
    const login = new Login(req.body);
    login.register();
    res.send(login.errors);
};