document.querySelectorAll('.completed-btn').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        alert("Board Update Successfully");
        const container = document.getElementById('log-container');
        const p = document.createElement('p');
        const name = this.closest('.task-box').querySelector('.task-name').innerText;
        let currentDate = new Date();
        const time = currentDate.toLocaleTimeString();
        p.innerHTML = `
        <p class="rounded-lg bg-blue-50 p-3 mb-4 text-sm"> 
        You have completed the task "${name}" at ${time}
        </p>
        `;
        container.appendChild(p);
        this.disabled = true;

        const task = getInnerText('task');
        const sum = task - 1;
        setInnerText('task', sum);
        const totaltask = getInnerText('total-task');
        const total = totaltask + 1;
        setInnerText('total-task', total);
        if(sum == 0){
            alert("Congratulations! You have completed all the tasks.");
        }
    });
});
document.getElementById('discover-box').addEventListener("click",function(event){
    event.preventDefault();
    window.location.href = "discover.html";
})

document.getElementById("clear-btn").addEventListener("click", function(event){
    event.preventDefault();
    const container = document.getElementById('log-container');
    container.innerHTML = "";
})
document.getElementById('Date').innerText = new Date().toDateString();

document.getElementById('color-change').addEventListener('click',function(){
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById('body').style.backgroundColor = randomColor;    
})