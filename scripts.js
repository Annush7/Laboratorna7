function doubleValues() {
    const listItems = document.querySelectorAll('#numberList li');
    listItems.forEach(item => {
        item.textContent = parseInt(item.textContent) * 2;
    });
}

function swapInputs() {
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const temp = input1.value;
    input1.value = input2.value;
    input2.value = temp;
}

function decreaseSize() {
    const square = document.getElementById('square');
    let currentSize = parseInt(window.getComputedStyle(square).width);
    square.style.width = (currentSize - 15) + 'px';
    square.style.height = (currentSize - 15) + 'px';
}

function increaseSize() {
    const square = document.getElementById('square');
    let currentSize = parseInt(window.getComputedStyle(square).width);
    square.style.width = (currentSize + 15) + 'px';
    square.style.height = (currentSize + 15) + 'px';
}