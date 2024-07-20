function tableRow (objectData) {
    let table = document.querySelectorAll('#table');
    let html = "";
    //let row = document.createElement('tr');

    for (record of objectData){
        html +=
        `<tr>
            <td>${objectData['First Name']}</td>
            <td>${objectData['Email']}</td>
            <td>${objectData['console']}</td>
            <td>${objectData['frequency']}</td>
        </tr>
        `;

    }

    //console.log(newRow);
    //row.innerHTML = newRow;
    table.innerHTML = html;
}

function indexPage () {
    window.location.href = 'index.html';
}

let stringData = localStorage.getItem('tableData');
console.log(stringData);
//let objectData = [];

//for (object of stringData ){
//    object.JSON.parse(stringData);
//   objectData.push(object);
//}

//let objectData = JSON.parse(stringData);
//tableRow(objectData);




