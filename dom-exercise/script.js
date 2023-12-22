// // const p2 = document.createElement('p');
//
//
// const body = document.querySelector('body');
//
// const p1 = document.createElement('p');
// p1.innerText = `Hey I'm red!`;
// p1.style.color = `red`;
// body.appendChild(p1);
//
// const h3 = document.createElement('h3');
// h3.innerText = `I'm a blue h3!`;
// h3.style.color = `blue`;
// body.appendChild(h3);
//
// const div1 = document.createElement('div');
// const h1 = document.createElement('h1');
// const p2 = document.createElement('p');
// h1.innerText = `I'm in a div`;
// p2.innerText = `ME TOO!`;
// div1.appendChild(h1);
// div1.appendChild(p2);
// body.appendChild(div1);

// const btn = document.querySelector("#btn");
// // btn.onclick = () => alert("Hello World");
// btn.addEventListener('click', (e) =>{
//     e.target.style.backgroundColor = 'blue';
// });

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        alert(button.id);
    });
});