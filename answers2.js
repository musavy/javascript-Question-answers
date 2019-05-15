const product = {
  name: 'iPad Pro',
  description: 'Cool shit',
  ratings: [3.5, 2, 5, 4, 3],
  likes: ['user1', 'user2', 'user3']
};

const user = {
  id: 'user4',
  name: 'sallar'
};

function sum(...arr) {
  return arr.reduce((final, item) => final + item, 0);
}

function like() {
  product.likes.push(user.id);
}

function unlike() {
  product.likes = product.likes.filter(like => like !== user.id);
}

function productRating() {
  const ratingsSum = sum(...product.ratings);
  const rating = ratingsSum / product.ratings.length;
  console.log('Rating:', rating);
}

function productLikes() {
  console.log(product.likes.length);
}

// =======================================================
// =======================================================
// =======================================================
// =======================================================

const users = [];

function signin(firstName, lastName, email) {
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return;
  }
  users.push({
    firstName,
    lastName,
    email
  });
}

signin('Sallar', 'Kaboli', 'sallar@kaboli.org');

signin('Sherry', 'Kaboli', 'sherry@kaboli.org');
signin('Sherry', 'Kaboli', 'sherry@kaboli.org');
console.log(users);