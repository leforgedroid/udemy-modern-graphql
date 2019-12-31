
const users = [{
    id: "1",
    name: "Tim",
    email: "leforgedroid@gmail.com",
    age: 54
},{
    id: "2",
    name: "Andrew",
    email: "andrewleforge@gmail.com",
    age: 17
},{
    id: "3",
    name: "Ryan",
    email: "ryanleforge@gmail.com",
    age: 17
}
]

const posts = [{
    id: "post1",
    title: "Array Properties",
    body: "Arrays have methods, but also properties",
    published: true,
    author: "1"
    
},{
    id: "post2",
    title: "React Hooks",
    body: "React has non-fishing hooks",
    published: true,
    author: "1"
},{
    id: "post3",
    title: "TypeScript Irritations",
    body: "TypeScript is great, but can be frustrating",
    published: true,
    author: "3"
},]

const comments = [{
    id: "com1",
    text: "This post really sucks",
    author: "1",
    post: "post3"
}, {
    id: "com2",
    text: "Awesome post. Thank you!",
    author: "1",
    post: "post2"
}, {
    id: "com3",
    text: "You could also do that another way.",
    author: "3",
    post: "post2"
}, {
    id: "com4",
    text: "Here's a link to MY post, which is better.",
    author: "2",
    post: "post3"
}
]

const db = {
    users,
    posts,
    comments
}

export {db as default}