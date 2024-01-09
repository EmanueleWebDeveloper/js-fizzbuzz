const ul = document.querySelector('ul.list');

for (let i = 1; i <= 100; i++) {
    const li = document.createElement('li');
    

    li.textContent = i % 3 === 0 && i % 5 === 0 ? "FizzBuzz" :
                     i % 3 === 0 ? "Fizz" :
                     i % 5 === 0 ? "Buzz" :
                     i;

    ul.appendChild(li);
}