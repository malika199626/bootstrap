const postsContainer = document.querySelector(".posts-row")

fetch("https://jsonplaceholder.typicode.com/posts")
.then((res)=>res.json())
.then((res)=> renderPosts(res))

const renderPosts = (posts) =>{
    posts.forEach(
        ({id, userId, title, body})=>
    (postsContainer.innerHTML += `<div class="col">
      <div class="card" style="width: 18rem;">
        <img src="img/2.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${title.length>20? title.substring(0,20) + "..." : title}</h5>
            <p class="card-text">${body.length>100? body.substring(0,100) + "..." : body}</p>
            <a href="pages/post.html?=${id}" class="btn btn-primary">
            Go somewhere
            </a>
          </div>
      </div>
    </div>`)
)
}

