const btn = document.querySelector('#btnSubmit')

function prevent(e) {
    e.preventDefault()
}

btn.addEventListener('click', prevent)