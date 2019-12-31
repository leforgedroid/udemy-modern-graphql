const Query =
{
    users(parent, args, {db}, info) {
        if (!args.query) {
            return db.users;
        } else {
            return db.users.filter((user) => {
                return user.name.toLowerCase().includes(args.query.toLowerCase());
            })
        }
    },
    posts(parent, args, {db}, info) {
        if (!args.query) {
            return db.posts;
        }
        return db.posts.filter((post) => {
            const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase());
            const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase());
            return isTitleMatch || isBodyMatch;
        })
    },
    comments(parent, args, {db}, info) {
        if (!args.query) {
            return db.comments;
        }
        // return comments.filter((comment) => {

        // })
    },
    me() {
        return {
            id: "123098",
            name: "Mike",
            email: "mike@example.com",
        }
    },
    post() {
        return {
            id: "POSTabc123",
            title: "Now is the time",
            body: "Don't delay anymore. Just do it!",
            published: false
        }
    }
}

export {Query as default}