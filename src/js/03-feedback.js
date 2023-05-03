import throttle from 'lodash.throttle'
const key ="feedback-form-state"
const feedback = document.querySelector('.feedback-form')
const form = { 
    email: document.querySelector('input'),
    message: document.querySelector('textarea')
}
let draftInputs = {}

const setItems = () => {
    form.email.value = draftInputs.email || null
        form.message.value = draftInputs.message || null
}
const setForms  =() => { 
    if (localStorage.getItem(key)){
        draftInputs = JSON.parse(localStorage.getItem(key))
        setItems()
    } else {
        draftInputs = {}
        setItems()
    }
}

setForms()

const hadleUpdate = (e)=>{
    draftInputs[e.target.name] = e.target.value
    localStorage.setItem(key,JSON.stringify(draftInputs))
}

feedback.addEventListener('input', throttle(hadleUpdate,500))
feedback.addEventListener('submit', () =>{
    localStorage.removeItem(key)
    setForms()
})