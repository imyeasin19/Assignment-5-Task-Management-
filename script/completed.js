document.querySelectorAll('.completed-btn').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        alert("Board Update Successfully");
        const container = document.getElementById('log-container');
        const p = document.createElement('p');
        const name = this.closest('.task-box').querySelector('.task-name').innerText;
        let currentDate = new Date();
        const time = currentDate.toLocaleTimeString();

        p.innerText = `You have completed the task "${name}" at ${time}`;
        container.appendChild(p);

        this.disabled = true;

        const task = getInnerText('task');
        const sum = task - 1;
        setInnerText('task', sum);
        const totaltask = getInnerText('total-task');
        const total = totaltask + 1;
        setInnerText('total-task', total);
    });
});
