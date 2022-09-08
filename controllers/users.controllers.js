const getUsers = (req, res) => {
    res.status(200).send("All Users")
};

const getUser = (req, res) => {
    res.status(200).send("Single User")
};

const createUser = (req, res) => {
    res.status(201).send(" Create User")
};

const updateUser = (req, res) => {
    res.status(200).send("Update User")
};

const deleteUser = (req, res) => {
    res.status(200).send("Delete this User")
};


module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
};