let post = {
    title: 'Senior TS Dev soon',
    comments: [1, 2, 3]
}
console.log(post)

// update from API
let postUpdated = {title: 'Senior TS Dev UPDATED'}
console.log(postUpdated)

let postUpdatedMerge = {...post, ...postUpdated}
console.log(postUpdatedMerge)