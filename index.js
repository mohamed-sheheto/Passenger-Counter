const countEl = document.getElementById('count-el')
let count = 0

const increment = () => {
    // it's the same as count = count + 1,
    count += 1
    countEl.innerText = count
}


const saveEl = document.getElementById('save-el')

const save = () => {
    const data = count + " - "
    // the += means add data to the words inside
    // textContent = innerText but it renders the text as you write it without any edit 
    saveEl.textContent += data
    countEl.innerText = 0
    count = 0
}


