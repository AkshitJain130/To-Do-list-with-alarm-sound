document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const taskList = document.getElementById('task-list');
    const alarmSound = document.getElementById('alarm-sound');

    const predefinedTasks = [
        { task: 'Continue Unit3 CS', alarmTime: '2024-07-11T15:05' },
        { task: 'Complete Unit3', alarmTime: '2024-07-11T15:30' },
        { task: 'Start Unit4', alarmTime: '2024-07-11T15:45' },
        { task: 'Complete Unit4 CS', alarmTime: '2024-07-11T16:30' },
        { task: 'Rest', alarmTime: '2024-07-11T16:30' },
        { task: 'Continue Unit4', alarmTime: '2024-07-11T22:20' },
        { task: 'Complete Unit4', alarmTime: '2024-07-11T23:30' },
        { task: 'Start Unit5', alarmTime: '2024-07-11T23:45' },
        { task: 'Complete Unit5', alarmTime: '2024-07-12T01:30' },
        { task: 'Rest', alarmTime: '2024-07-12T02:00' },
        { task: 'Start Unit2', alarmTime: '2024-07-12T02:05' },
        { task: 'Complete Unit2', alarmTime: '2024-07-12T03:20' },
        { task: 'Continue Unit2 CS', alarmTime: '2024-07-12T07:45' },
        { task: 'Complete Unit2', alarmTime: '2024-07-12T09:30' },
        { task: 'Revision Complete', alarmTime: '2024-07-12T10:00' },
        { task: 'After Revision Ready for the college', alarmTime: '2024-07-12T10:10' }
    ];

    predefinedTasks.forEach(({ task, alarmTime }) => {
        addTask(task, alarmTime);
    });

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskInput = document.getElementById('task-input');
        const alarmTimeInput = document.getElementById('alarm-time');

        const task = taskInput.value;
        const alarmTime = alarmTimeInput.value;

        addTask(task, alarmTime);

        taskInput.value = '';
        alarmTimeInput.value = '';
    });

    function addTask(task, alarmTime) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <span>${new Date(alarmTime).toLocaleString()}</span>
            <button class="delete-btn">Delete</button>
        `;

        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            li.classList.add('fade-out');
            li.addEventListener('animationend', () => {
                li.remove();
            });
        });

        taskList.appendChild(li);

        const alarmTimeInMs = new Date(alarmTime).getTime();
        const currentTimeInMs = new Date().getTime();
        const timeToAlarm = alarmTimeInMs - currentTimeInMs;

        if (timeToAlarm > 0) {
            setTimeout(() => {
                alert(`Time for: ${task}`);
                alarmSound.play();
            }, timeToAlarm);
        }
    }
});
