const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'users.json');

function readUsers() {
  const raw = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(raw);
}

function writeUsers(users) {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2), 'utf8');
}

function findById(id) {
  return readUsers().find((item) => item.id === Number(id));
}

function findByEmail(email) {
  if (!email) return undefined;
  return readUsers().find((item) => item.email.toLowerCase() === String(email).toLowerCase());
}

function nextId(users) {
  return users.length ? Math.max(...users.map((item) => item.id)) + 1 : 1;
}

function publicUser(user) {
  if (!user) return null;
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    category: user.category,
    image: user.image
  };
}

module.exports = {
  readUsers,
  writeUsers,
  findById,
  findByEmail,
  nextId,
  publicUser
};
