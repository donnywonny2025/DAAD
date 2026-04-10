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

// ============================================
// Documents & Forms
// ============================================
const DOCS = [
    { icon: '📄', title: 'SOS-257 + SOS-258 Form Package', desc: 'Hearing Request + Substance Use Eval', url: 'https://www.michigan.gov/sos/-/media/Project/Websites/sos/sos/OHAO_Form_Package_SOS_257_258.pdf' },
    { icon: '🖥', title: 'DAIS — Submit Evidence Online', desc: 'Driver Appeals Integrated System', url: 'https://milogin.michigan.gov/' },
    { icon: '🆓', title: 'Road to Restoration Clinics', desc: 'Free attorney consult + record review', url: 'https://www.michigan.gov/sos/license-id/road-to-restoration' },
    { icon: '📑', title: 'All SOS Forms Library', desc: 'Complete Michigan SOS forms catalog', url: 'https://www.michigan.gov/sos/resources/forms' },
    { icon: '🇺🇸', title: 'NDR/PDPS Self-Request', desc: 'National Driver Register — multi-state check', url: 'https://www.nhtsa.gov/content/ndr' },
    { icon: '🌴', title: 'Florida Driving Record', desc: 'DHSMV — pull FL record online', url: 'https://www.flhsmv.gov/driver-licenses-id-cards/driving-record-check/' },
    { icon: '🌵', title: 'Arizona Driving Record', desc: 'MVD — pull AZ record online', url: 'https://azmvdnow.gov/' },
];

const KB_FILES = [
    { icon: '📘', title: 'DAAD Complete Process', desc: 'Full hearing process guide', file: '../knowledgebase/DAAD_COMPLETE_PROCESS.md' },
    { icon: '📕', title: 'Jeff\'s Case Narrative', desc: 'Story, timeline, FL license, strategy', file: '../knowledgebase/JEFF_CASE_NARRATIVE.md' },
    { icon: '📗', title: 'Record Visibility Reference', desc: 'What shows / what doesn\'t on records', file: '../knowledgebase/RECORD_VISIBILITY_REFERENCE.md' },
    { icon: '📙', title: 'Interstate Data Systems', desc: 'MI ↔ FL ↔ AZ backend connections', file: '../knowledgebase/INTERSTATE_DATA_SYSTEMS.md' },
    { icon: '📓', title: 'Legal Research & Case Law', desc: 'Law evolution, hardship, sobriety court', file: '../knowledgebase/LEGAL_RESEARCH_CASELAW.md' },
    { icon: '📔', title: 'Alternative Pathways', desc: 'Novel strategies, Road to Restoration, Clean Slate', file: '../knowledgebase/ALTERNATIVE_PATHWAYS.md' },
    { icon: '📒', title: 'DAAD Legal Analysis', desc: 'Expert guide & hearing prep', file: '../knowledgebase/DAAD_LEGAL_ANALYSIS.md' },
    { icon: '📚', title: 'DAAD Expert Guide', desc: 'Scraped legal research', file: '../knowledgebase/DAAD_EXPERT_GUIDE.md' },
];

function renderLinkList(items, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    items.forEach(item => {
        const a = document.createElement('a');
        a.href = item.url || item.file;
        a.target = '_blank';
        a.className = 'resource-item';
        a.innerHTML = `
            <div class="resource-left">
                <span class="resource-icon">${item.icon}</span>
                <div>
                    <strong>${item.title}</strong>
                    <span>${item.desc}</span>
                </div>
            </div>
            <span class="resource-phone">→</span>
        `;
        container.appendChild(a);
    });
}

renderLinkList(DOCS, 'docList');
renderLinkList(KB_FILES, 'kbList');
