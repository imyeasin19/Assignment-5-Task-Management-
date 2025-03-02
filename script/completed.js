document.getElementById('completed-btn1').addEventListener('click', function (event){
    event.preventDefault();
    alert("Board Update Successfully");
    const container = document.getElementById('activity-container');
    const p = document.createElement('p');
    const name = document.getElementById('box-1').innerText;
    p.innerText = `You have completed the task ${name}`;
    container.appendChild(p); 
    document.getElementById('completed-btn1').disabled = true;
})