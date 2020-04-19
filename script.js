var inputData = document.querySelector('input[type="text"]');
var ulSpisok = document.getElementById('list');
var spans = document.getElementsByTagName('span');
var saveBtn = document.getElementById('save');
var clearBtn = document.getElementById('clear');
var infoBtn = document.getElementById('ínfo');
var lis = document.getElementsByTagName('p');

function endQuest(){
    for(let li of lis){
        li.addEventListener('click', function(){
        li.style.textDecoration = 'line-through';
        event.preventDefault();
        })
    }
}

function deleteTodo(){
    for(let span of spans){
        span.addEventListener('click', function(){
            span.parentElement.remove();
            event.preventDefault();
        })
    }
};

function loadTodo(){
    if(localStorage.getItem('todoApplication')){
        ulSpisok.innerHTML = localStorage.getItem('todoApplication');
        deleteTodo();
    }
};

var Fulldate = new Date();
var year = Fulldate.getFullYear();
var month = Fulldate.getMonth() + 1;
var day = Fulldate.getDate();
var date = '(' + year + "." + month + "." + day + ')';


/*addEventListener- получение типа события и вызов функции*/ 

inputData.addEventListener('keypress', function(keyPressed){
    if(keyPressed.which === 13 && this.value.trim().length !== 0 ){
        var newLi = document.createElement('li');
        var newSpan = document.createElement('span');
        newSpan.innerHTML = 'Delete  ';
        var newTodo = document.createElement('p');
        newTodo.innerHTML = this.value; /*получение value из input*/
        this.value = ''; /*Очистка поля ввода*/

        ulSpisok.appendChild(newLi).append(newTodo, ' - ' + date, newSpan);

        deleteTodo();
        endQuest();
    }
    else if((this.value.trim().length == 0) && (keyPressed.which === 13)){
        alert ('Заполните поле');
    }
});

saveBtn.addEventListener('click', function(){
    localStorage.setItem('todoApplication', ulSpisok.innerHTML);
});

clearBtn.addEventListener('click', function(){
    ulSpisok.innerHTML = '';
    localStorage.setItem('todoApplication', ulSpisok.innerHTML);
})



deleteTodo();

loadTodo();