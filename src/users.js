// Imports small array of users
// Pretend it's an API request
const users = require("./datos/data.js").default;

// Fetches all users
const getUsers = () => {
  return users;
};

// Filters users by specific ID
const getUser = (id) => {
  return new Promise ((resolve, reject) => { // dos resultados
    process.nextTick(() => {
      const user=users.find((user) => user.id === id );
      user ? resolve(user) : reject(new Error("User not found")); // comprobar si el usuario existe
      });
  }):
  };

module.exports = { getUsers, getUser };

// funcionó con error

