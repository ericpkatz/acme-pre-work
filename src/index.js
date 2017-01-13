import AcmeDB from './AcmeDB';

const users = [
  { name: 'Moe' }
];

const db = new AcmeDB({ users });

console.log(db.users.length); //should equal 1
console.log(db.users[0].id); //should equal 1
db.addUser({ name: 'Larry' });
console.log(db.showUsers());//should be 'Moe, Larry'
console.log(db.findById(2).name);//should be larry 
db.addUser({ name: 'Curly' });
db.removeUserById(1);
console.log(db.users[0].name);//should be Larry
db.editUser({ id: 2, name: 'Laary'});
console.log(db.showUsers());//should be 'Laary, Curly'


