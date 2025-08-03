// To delete a property from a JavaScript object, we use the delete operator.

const user = {
  name: "Mahir",
  age: 23,
  country: "Bangladesh"
};

// Deleting a property
delete user.age;

console.log(user);
// Output: { name: 'Mahir', country: 'Bangladesh' }
