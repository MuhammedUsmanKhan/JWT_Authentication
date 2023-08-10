



let showPass = document.getElementById(`showPass`)
let signupPass = document.getElementById(`signupPass`)
let hidePass = document.getElementById(`hidePass`)
showPass.addEventListener(`click`, () => {
    signupPass.type = 'text'
    showPass.classList.add('hidden')
    hidePass.classList.remove('hidden')
    hidePass.classList.add('flex')
})
hidePass.addEventListener(`click`, () => {
    signupPass.type = 'password'
    hidePass.classList.add('hidden')
    showPass.classList.remove('hidden')
})
let darkMode = document.getElementById(`darkMode`)
let lightMode = document.getElementById(`lightMode`)
let body = document.querySelector(`body`)
let signupHead = document.querySelector(`header`)
let main = document.querySelector('main')
let inps = document.querySelectorAll('input')
let labels = document.querySelectorAll('label')
let footer = document.querySelector('footer')
darkMode.addEventListener(`click`, () => {

    if (!body.classList.contains('bg-white')) {
        lightMode.disabled = false
        darkMode.disabled = true
        body.classList.toggle('bg-[#0f172a]')
        signupHead.classList.toggle('text-white')
        main.classList.toggle('text-white')
        inps.forEach((input) => {
            input.classList.toggle('bg-[#0f172a]')
        })
        labels.forEach((label) => {
            //if (!label.classList.contains('bg-white')) {
                // label.classList.remove('bg-white')
                label.classList.toggle('bg-[#0f172a]')
                label.classList.toggle('bg-white')
            //}
        })
        footer.classList.toggle('text-white')
    }


})
lightMode.addEventListener(`click`, () => {
    if (body.classList.contains('bg-[#0f172a]')) {
        lightMode.disabled = true
        darkMode.disabled = false
        body.classList.toggle('bg-[#0f172a]')
        signupHead.classList.toggle('text-white')
        main.classList.toggle('text-white')
        inps.forEach((input) => {
            input.classList.toggle('bg-[#0f172a]')
        })
        labels.forEach((label) => {
            //if (label.classList.contains('bg-white')) {
                // label.classList.add('bg-white')
                label.classList.toggle('bg-white')
                label.classList.toggle('bg-[#0f172a]')
            //}
        })
        footer.classList.toggle('text-white')
    }
})