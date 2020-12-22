// .innerHTML() property
// Homework
let ulElemnt = '';
for (let i = 1; i<= 9; i++){
    ulElemnt += `
        <li>
            <a href="">item ${i}</a>
        </li>
    `
}
let box = document.getElementById('caja2')
box.innerHTML = ulElemnt
