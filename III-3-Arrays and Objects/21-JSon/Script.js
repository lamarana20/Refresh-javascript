const post =
    {
        "id": 1,
        "title": "My first post",
        "body": "This is the content of my first post.",
    }
    //convert jsonn to string
    const postToJson1 = JSON.stringify(post);
    //parse the string back to JSON
    const postFromJson1 = JSON.parse(postToJson1);

    // 
    const posts =[
        {
            "id": 1,
            "title": "My first post",
            "body": "This is the content of my first post.",    
        }
        ,
        {
            "id": 2,
            "title": "My second post",
            "body": "This is the content of my second post.",
        }
    ];
    const postsToJson2 =JSON.stringify(posts);
    

console.log(postsToJson2);

//parse the string back to JSON
const postsFromJson2 = JSON.parse(postsToJson2);
console.log(postsFromJson2);
