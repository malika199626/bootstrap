const id= window.location.search.substring(4)
const container = document.querySelector(".up-side")

const getPost = async()=>{
    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        if(!res.ok){
            throw new Error()
        }
        const post = await res.json()
        const userRes = await fetch(
            `https://jsonplaceholder.typicode.com/users/${post.userId}`
        )
        if (!userRes.ok){
            throw new Error()
        }
        const user = await userRes.json()
        container.innerHTML+= `
        <div class="up-side">
        <h5 class="card-title">${post.title}</h5>
        <p class="card-text">${post.body}</p>
        <p class="card-text"> Автор:${user.name} </p></div>`
    } catch(error){
        container.innerHTML+="Ошибка при запросе данных. Попробуйте чуть позже."
    }
}
getPost()
