let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let arr = Array.from(buttons);
let str = "";

arr.forEach((btn) => {
    btn.addEventListener('click', (el) => {
        if (el.target.innerHTML == '=') {
            str = eval(str);
            input.value = str;
        }
        else if(el.target.innerHTML == 'AC'){
            str = "";
            input.value = str;
        }
        else if(el.target.innerHTML == 'DEL'){
            str = str.substring(0, str.length-1);
            input.value = str;
        }
        else {
            str = str + el.target.innerHTML;
            input.value = str;
        }
    })
})