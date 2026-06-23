//設問１・３
var input = document.getElementById('input');
var show = document.getElementById('show');
var output = document.getElementById('output');

show.addEventListener('click', function(){
        var text = input.value;

        if (text.trim() ===''){
            alert('入力値が空です。')
            return;
        }

        output.textContent = text;
        output.classList.toggle('highlight');
    });





//設問２
var colors = ['lightblue','lightgreen','lightcoral'];
let colorIndex = 0;
var changeColor = document.getElementById('changeColor');

changeColor.addEventListener('click', () => {
    const color = colors[colorIndex % colors.length];
    document.body.style.backgroundColor = color;
    colorIndex++;
});



//設問４・５・６
var add = document.getElementById('add');
var table = document.getElementById('table');
var count = document.getElementById('count');

function getRow(){
    count.textContent = `現在の行数：${table.rows.length -1}`;
}

function hideShowButton(){
    if (table.rows.length >= 4){
        show.style.display = "none";
    }else{
        show.style.display ='inline-block';
    }
}


add.addEventListener('click',function(){

    if (table.rows.length >= 4){
        table.deleteRow(1);
    }

    var newRow = document.createElement('tr');
    var contentCell = document.createElement('td');
    var deleteButton = document.createElement('button');
    var actionCell = document.createElement('td');

    contentCell.textContent = input.value;
    deleteButton.textContent = '削除';

    deleteButton.addEventListener('click',function(){
        newRow.remove();

        getRow();
        hideShowButton();

    });

    actionCell.appendChild(deleteButton);

    newRow.appendChild(contentCell);
    newRow.appendChild(actionCell);

    table.appendChild(newRow);

    getRow();
    hideShowButton();
});



//設問７
for (let i = 1; i <= 5; i++){
    console.log(`ループ回数:${i}`);
}




