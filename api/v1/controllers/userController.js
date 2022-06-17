const { User } = require('../../../models');
const ApiError = require('../middlewares/errorManager/apiErrors')

const createUser = (req, res) => {
    User.findOne({ email: req.body.email }).then(user => {
      if (!user) {
        errors.push({ msg: 'Error: User not created. Confirm User data is correctly filled in'});
      } else {
        let newUser = {
          name: req.body.name,
          email : req.body.email,
          password : req.body.password
        };
        User.create(newUser)
        .then(user => {
          return res.status(200).json("User successfully created");
        })
        .catch( err => 
          ApiError.badRequest('There was an error processing this request. Try again!')
          );
      }
    });
  }

  const readUser = (req, res, next) => {
    User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    })
    .then(user => {
      if (user) {
        res.send(user);
      } else {
        ApiError.notFound(`Cannot find User with email=${email}.`);
      }
    })
    .catch(err => {
      ApiError.badRequest('There was an error processing this request. Try again!');
    });
  }

  const updateUser = (req, res) => {
    const {id} = req.params;
    User.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.status(200).json({
            message: "User was updated successfully."
          });
        } else {
          ApiError.badRequest('Error updating user record. Try again!');
        }
      })
      .catch(err => {
        ApiError.badRequest('There was an error processing this request. Try again!');
      });
  }

  const deleteUser = (req, res) => {
    const {id} = req.params;
    User.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.status(200).json({
            message: "User was deleted successfully."
          });
        } else {
          ApiError.notFound(`Error deleting User with id=${id}. Please try again`)
        }
      })
      .catch(err => {
        ApiError.badRequest('There was an error processing this request. Try again!');
      });
  }
	
  module.exports = {createUser, readUser, updateUser, deleteUser};