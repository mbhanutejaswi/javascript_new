const { users, posts } = require('./data');

console.log(posts.filter((x) => x.userId === 1));

console.log(posts.filter((x)=>x.userId===10));
// const post1= posts.filter((x) => x.userId === 3 && x.id === 24);
// console.log(post1.map((x)=>x.title));

const post= posts.find((x) => x.userId === 3 && x.id === 24);
if (post) {
console.log(post.title)
} else {
    console.log('post not found')
}


// console.log(post1.map((x)=>x.title));
const seventhPost=posts.find((x)=>x.id===7);

if (seventhPost) {
    const {userId} = seventhPost;
    const user = users.find(user => user.id === userId);
    if(user) {
        console.log(user.name)
    } else {
        console.log('user not found')
    }
} else {
    console.log('post not found')
}

// console.log(user1.map((x)=>x.name));

