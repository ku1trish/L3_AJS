//req
const p = await pm.sendRequest('https://jsonplaceholder.typicode.com/posts');
const sposts = p.json().sort((a, b) => b.title.length - a.title.length);
pm.environment.set("sposts", JSON.stringify(sposts));

//res
const sposts = JSON.parse(pm.environment.get("sortedPosts") || "[]");
//posts

//req
const c = await pm.sendRequest('https://jsonplaceholder.typicode.com/comments');
const scomments = c.json().sort((a, b) => a.name.localeCompare(b.name));
pm.environment.set("scomments", JSON.stringify(scomments));

//res
const scomments = JSON.parse(pm.environment.get("scomments") || "[]");
//comments

//req
const u = await pm.sendRequest('https://jsonplaceholder.typicode.com/users');
        const fusers = u.json().map(user => ({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone
        }));
        pm.environment.set("fusers", JSON.stringify(fusers));

//res
const fusers = JSON.parse(pm.environment.get("fusers") || "[]");
//users

//req
const t = await pm.sendRequest('https://jsonplaceholder.typicode.com/todos');
const itodos = t.json().filter(todo => !todo.completed);
pm.environment.set("incompleteTodos", JSON.stringify(itodos));

//res
const itodos = JSON.parse(pm.environment.get("itodos") ||  "[]");
//todos
