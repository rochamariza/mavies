import { fetchURL } from "./api.js"
import { imageFetch } from "./api.js"

const search = document.getElementById("search")
const submit = document.getElementById("submit")
const form = document.querySelector(".form")
const title = document.querySelector(".titulo")
const image = document.querySelector("images")

const renderAPI = async (query) => {
    const data = await fetchURL(query)
    const imageURL = await imageFetch(url)

    title.innerHTML = data['results']['0']['title']
    image.src = imageURL(data['results']['0']['poster_path'])
}


form.addEventListener('submit', (event) => {
    event.preventDefault();

    renderAPI(search.value)
})