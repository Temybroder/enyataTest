const express = require('express');
const app = express();
   const validationHandler = (req, res, next) => {
      let errors = [];
      const password = req.body.password;
            if(req.method == "GET" && req.originalUrl == "/read_user"){
            if (!req.body.name ||!req.body.email || !req.body.password) {
                errors.push({ msg: 'Missing fields: Please enter all fields' });
            }
            if (req.body.password.length < 8) {
                errors.push({ msg: 'Password must be at least 8 characters' });
            }
            if (errors.length > 0) {
            // Return a data error StatusCode
            return res.status(400).json({
                errors
                });
            } else {
                return next();
            }}
      else {
        if (!req.body.email || !req.body.password) {
            errors.push({ msg: 'Missing fields: Please enter all fields' });
          }
          if (password.length < 8) {
            errors.push({ msg: 'Password must be at least 8 characters' });
          }
          if (errors.length > 0) {
           // Return a data error StatusCode
           return res.status(400).json({
              errors
            });
          } else {
            return next();
          }
      }
    }

    module.exports = validationHandler;
