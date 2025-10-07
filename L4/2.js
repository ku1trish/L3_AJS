function f() 
{
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(d => {
      return d.map(user => ({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone
      }));
    });
} //users

const a = pm.response.json();
const b = a.filter(task => !task.completed);
pm.response.json = () => b; 
// todos

