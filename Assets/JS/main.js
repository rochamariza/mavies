import { fetchURL } from "./api.js"

const search = document.getElementById("search")
const submit = document.getElementById("submit")
const form = document.querySelector(".form")
const title = document.querySelector(".titulo")
const image = document.querySelector("images")

const renderAPI = async (query, url) => {
    const data = await fetchURL(query)

    title.innerHTML = data['results']['0']['title']

}


form.addEventListener('submit', (event) => {
    event.preventDefault();

    renderAPI(search.value.toLowerCase())
})