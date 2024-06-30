let person = {
  name: 'RK',
  age: 20,
  gender: 'male'
};

for (let key in person) {
  console.log(key+':'+person[key]);
}
