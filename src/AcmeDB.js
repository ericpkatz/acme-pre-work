class AcmeDB {
  constructor({ users }){
    this.users = [];
    users.forEach( (user) => this.addUser(user));
  }
  addUser(user){
    let max = this.users.reduce( (memo, user)=> {
      if(user.id > memo)
        memo = user.id;
      return memo;
    }, 0);
    user.id = ++max;
    this.users.push(user);
  }
  removeUserById(id){
    this.users = this.users.filter( user=> user.id !== id );
  }
  findById(id){
    const filtered = this.users.filter( (user)=> user.id === id );
    return filtered.length ? filtered[0] : null;
  }
  editUser(_user){
    this.users = this.users.map( user=> {
      if(_user.id !== user)
        return user;
      return _user;
    });
  }
  showUsers(){
    return this.users.map( user => user.name).join(' ');
  }
}

export default AcmeDB;
