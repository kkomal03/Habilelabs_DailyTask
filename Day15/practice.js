// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function greet() {
//   console.log("Hello");
//  await delay(1000);
//   console.log("World");
//   await delay(2000);
//   console.log("done");
// }

// greet();




// async function getUser() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//     const user = await response.json();
//     console.log("User Name:", user.name);
//   } catch (error) {
//     console.log("Error:", error.message);
//   }
// }

// getUser();



// async function getPosts() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     const posts = await res.json();
//     console.log("Post Title:", posts.title);
//   } catch (error) {
//     console.log("Error:", error.message);
//   }
// }

// getPosts();






//  async function getComments() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/comments?postId=1");
//   const comments = await res.json();
//   console.log(comments.filter(id1=>id1.id>3))
//  console.log("Total Comments:", comments.length);
//   comments.forEach(comment => {
//     console.log("Comment:", comment.id);
//   });
// }

// getComments();






// async function getMultipleUsers() {
//   const userIds = [1, 2, 3];
//   const userPromises = userIds.map(id =>
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())
//   );

//   const users = await Promise.all(userPromises);
//   users.forEach(user => {
//     console.log(user.name);
//   });
// }

// getMultipleUsers();







// async function getInvalidData() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/comments?postId=1");
//     if (!res.ok) throw new Error("Failed to fetch data");
//     const data = await res.json();
//     console.log("first console data:",data);
//   } catch (error) {
//     console.error("Caught Error:", error.message);
//   }
// }

// getInvalidData();




// function getDataWithPromise() {
//   fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
//     .then(res => {
//       if (!res.ok) {
//         throw new Error("Failed to fetch data");
//       }
//       return res.json(); // returns a Promise
//     })
//     .then(data => {
//       console.log("Promise Result:", data);
//     })
//     .catch(error => {
//       console.error("Promise Error:", error.message);
//     });
// }

// getDataWithPromise();








//without Async/await

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then(res => res.json())
//   .then(data => console.log(data.title))
//   .catch(err => console.error(err));





  ////////
  fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => {
    return response.json();
  })
  .then(post => {
    console.log("Post Title:", post.title);

    return fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
  })
  .then(response => response.json())
  .then(user => {
    console.log("Author Name:", user.name);

    return fetch(`https://jsonplaceholder.typicode.com/comments?postId=1`);
  })
  .then(response => response.json())
  .then(comments => {
    console.log("Total Comments:", comments.length);
  })
  .catch(err => {
    console.error("Error:", err.message);
  });



  //with async/await

//   async function getPost() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     const data = await res.json();
//     console.log(data.title);
//   } catch (err) {
//     console.error(err.message);
//   }
// }

// getPost();







//////
async function fetchData() {
  try {
    const postRes = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const post = await postRes.json();
    console.log("Post Title:", post.title);

    const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
    const user = await userRes.json();
    console.log("Author Name:", user.name);

    const commentRes = await fetch("https://jsonplaceholder.typicode.com/comments?postId=1");
    const comments = await commentRes.json();
    console.log("Total Comments:", comments.length);

  } catch (err) {
    console.error("Error:", err.message);
  }
}

fetchData();















/////////////////////Promise.all


const p1 = fetch("https://jsonplaceholder.typicode.com/posts/1");
const p2 = fetch("https://jsonplaceholder.typicode.com/users/1");
const p3 = fetch("https://jsonplaceholder.typicode.com/comments?postId=1");

Promise.all([p1, p2, p3])
  .then(responses => Promise.all(responses.map(r => r.json())))
  .then(([post, user, comments]) => {
    console.log("Post Title:", post.title);
    console.log("Author Name:", user.name);
    console.log("Total Comments:", comments.length);
  })
  .catch(error => {
    console.error("Error:", error.message);
  });




  //with async/awiat
  async function getAllData() {
  try {
    const [postRes, userRes, commentRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts/1"),
      fetch("https://jsonplaceholder.typicode.com/users/1"),
      fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
    ]);

    const [post, user, comments] = await Promise.all([
      postRes.json(),
      userRes.json(),
      commentRes.json()
    ]);

    console.log("Post Title:", post.title);
    console.log("Author Name:", user.name);
    console.log("Total Comments:", comments.length);
  } catch (err) {
    console.error("Error:", err.message);
  }
}

getAllData();
