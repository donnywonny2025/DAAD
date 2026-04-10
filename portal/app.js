// ============================================
// To-Do Items (Immediate Actions)
// ============================================
const TODO_ITEMS = [
    {
        id: 'todo-1',
        title: 'Get Michigan Certified Driving Record',
        description: 'Order your official certified record from the MI SOS (look for "42" in the top-left corner). This is the master document the hearing officer reviews.'
    },
    {
        id: 'todo-2',
        title: 'Research NDR / Multi-State Records',
        description: 'Check if the National Driver Register (PDPS) covers FL & AZ history. If not, you must pull individual state records from Florida and Arizona separately.'
    },
    {
        id: 'todo-3',
        title: 'Open Jennifer Stewart\'s "Driving Records" Email',
        description: 'She sent you an email with the subject "Driving Records" — check for attachments or links to pull your record from the state portal.'
    }
];

// ============================================
// Required Evidence (Appeal Checklist)
// ============================================
const DAAD_TASKS = [
    {
        id: 'task-1',
        title: 'Obtain Master Driving Record',
        description: 'Pull your official record from the SOS online portal or contact Jennifer Stewart (jstewart@arborcircle.org) to retrieve the attachment from the "Driving Records" email.'
    },
    {
        id: 'task-2',
        title: 'Schedule 12-Panel Urinalysis',
        description: 'Must be lab-certified, not an instant test. Ensure the lab explicitly tests for Integrity Variables: Creatinine, Specific Gravity, and pH.'
    },
    {
        id: 'task-3',
        title: 'Complete Form SOS-258 (Substance Abuse Eval)',
        description: 'Schedule with a licensed evaluator. THIS MUST BE DATED WITHIN 90 DAYS OF SUBMISSION. Ensure they clearly note your exact sobriety anchor date.'
    },
    {
        id: 'task-4',
        title: 'Collect 3-6 Notarized Support Letters',
        description: 'Original signatures, strictly notarized. Friends/family must state exactly how they know you, and MUST verify your exact sobriety date. No generic character references.'
    },
    {
        id: 'task-5',
        title: 'Final Review with Legal Counsel',
        description: 'Select an attorney to vet the SOS-258 wording and reference letters before formally submitting.'
    }
];

// ============================================
// State: localStorage persistence
// ============================================
let todoState = JSON.parse(localStorage.getItem('daad_todo_state')) || {};
let taskState = JSON.parse(localStorage.getItem('daad_portal_state')) || {};

const todoListEl = document.getElementById('todoList');
const taskListEl = document.getElementById('taskList');
const resetBtn = document.getElementById('resetBtn');

// ============================================
// Render Functions
// ============================================
function renderItem(item, isCompleted, container) {
    const el = document.createElement('div');
    el.className = `task-item ${isCompleted ? 'completed' : ''}`;
    el.dataset.id = item.id;

    el.innerHTML = `
        <div class="task-checkbox">
            <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <div class="task-content">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        </div>
    `;

    el.addEventListener('click', () => {
        if (item.id.startsWith('todo-')) {
            todoState[item.id] = !todoState[item.id];
            localStorage.setItem('daad_todo_state', JSON.stringify(todoState));
            renderTodos();
        } else {
            taskState[item.id] = !taskState[item.id];
            localStorage.setItem('daad_portal_state', JSON.stringify(taskState));
            renderTasks();
        }
    });

    container.appendChild(el);
}

function renderTodos() {
    todoListEl.innerHTML = '';
    TODO_ITEMS.forEach(item => renderItem(item, !!todoState[item.id], todoListEl));
}

function renderTasks() {
    taskListEl.innerHTML = '';
    DAAD_TASKS.forEach(item => renderItem(item, !!taskState[item.id], taskListEl));
}

// ============================================
// Reset
// ============================================
resetBtn.addEventListener('click', () => {
    if (confirm('Reset all progress?')) {
        todoState = {};
        taskState = {};
        localStorage.setItem('daad_todo_state', JSON.stringify(todoState));
        localStorage.setItem('daad_portal_state', JSON.stringify(taskState));
        renderTodos();
        renderTasks();
    }
});

// ============================================
// Init
// ============================================
renderTodos();
renderTasks();
