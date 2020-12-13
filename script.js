//Get elements by Id

//console.log(document.getElementById('header-title'));
// const headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = "Hello";
// headerTitle.innerText = "Goodbye";
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = "<h3>Hi There</h3>"
// headerTitle.style.borderBottom = 'solid 3px #000';




// Get elements by Class Name

// const items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "apples suck";
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// for(let i = 0; i < items.length; i++){
// items[i].style.backgroundColor = "#f4f4f4"}



// Get elements by Tag Name
// const li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "apples suck";
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// for(let i = 0; i < li.length; i++){
// li[i].style.backgroundColor = "#f4f4f4"}


// var cursor = document.getElementById('cursor');
// document.addEventListener('mousemove', function(e){
// var x = e.clientX;
// var y = e.clientY;
// cursor.style.left = x + 'px';
// cursor.style.top = y + 'px;'
// });








document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const circle = document.getElementById('circle');
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
})