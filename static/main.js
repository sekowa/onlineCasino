const playBtn = document.querySelector('.play-btn');
const userNumber = document.querySelector('.user-number')



playBtn.addEventListener('click', ()=> {
    const obj = {userNumber: userNumber.value}
    fetch('/user', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: { 'Content-Type': 'application/json'}

    })
})