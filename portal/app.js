// ============================================
// THE ROADMAP — Every step to get the license back, in order, with WHY
// ============================================
const ROADMAP = [
    {
        id: 'step-1',
        phase: 'PHASE 1 — KNOW WHERE YOU STAND',
        title: 'Pull Your Michigan Certified Driving Record',
        why: 'This is THE document. The hearing officer reviews this first. It tells you if you\'re even eligible to file, shows every violation on record, and has your "eligible for review" date. Look for "42" in the top-left corner — that means it\'s the certified version.',
        how: 'Use the link provided by Jennifer Stewart. Costs $16.00.',
        urgency: 'now',
        link: 'https://www.michigan.gov/sos/all-services/driving-record',
        linkLabel: 'Get MI Record ($16)'
    },
    {
        id: 'step-2',
        phase: 'PHASE 1 — KNOW WHERE YOU STAND',
        title: 'Pull Florida Driving Record (Bypass NDR)',
        why: 'Instead of waiting 4 weeks to mail Washington DC for a national search, we are pulling Florida check directly. The hearing officer WILL ask about your FL license. Pull it now so there are no surprises.',
        how: 'Go online to the FL DHSMV portal. You will need your old FL license number or identifying info. Costs ~$10.',
        urgency: 'now',
        link: 'https://www.flhsmv.gov/driver-licenses-id-cards/driving-record-check/',
        linkLabel: 'Get FL Record'
    },
    {
        id: 'step-3',
        phase: 'PHASE 1 — KNOW WHERE YOU STAND',
        title: 'Pull Arizona Driving Record (Bypass NDR)',
        why: 'Same as Florida. We lived there, so we pull the record directly to ensure our bases are covered. If MI, FL, and AZ are clean, there is nowhere else for a record to hide.',
        how: 'Go online to AZ MVD Now. Costs ~$5.',
        urgency: 'now',
        link: 'https://azmvdnow.gov/',
        linkLabel: 'Get AZ Record'
    },
    {
        id: 'step-4',
        phase: 'PHASE 1 — KNOW WHERE YOU STAND',
        title: 'Attend a Road to Restoration Clinic (FREE)',
        why: 'Michigan SOS runs these free clinics where a volunteer attorney reviews your record, tells you exactly where you stand, helps fill out your forms, and identifies any hidden barriers. This is the single best free resource available — do this before spending money on anything.',
        how: 'Battle Creek — June 24 (~45 min from Wayland) | Grand Rapids — Aug 4 (~30 min) | Kalamazoo — Aug 13 (~35 min). Pre-register at MDOS-R2R@Michigan.gov or call 888-767-6424. Walk-ins accepted but pre-registration gets you a "Skip Check-In" slot.',
        urgency: 'soon',
        link: 'https://www.michigan.gov/sos/license-id/road-to-restoration',
        linkLabel: 'Clinic Info'
    },
    {
        id: 'step-5',
        phase: 'PHASE 1 — KNOW WHERE YOU STAND',
        title: 'Check Jennifer Stewart\'s "Driving Records" Email',
        why: 'Your counselor at Arbor Circle sent you an email with the subject "Driving Records" — it may contain attachments or direct links to pull your official record. Check it before paying for a duplicate.',
        how: 'Search your email for "Driving Records" from jstewart@arborcircle.org.',
        urgency: 'now'
    },
    {
        id: 'step-6',
        phase: 'PHASE 2 — BUILD YOUR EVIDENCE',
        title: 'Lock In Your Sobriety Date',
        why: 'This is the SINGLE MOST IMPORTANT piece of information in your entire case. Every document, every support letter, your testimony, and the SOS-258 evaluation MUST reference the exact same sobriety date. If even one document has a different date, the hearing officer will deny you. Pick the date. Commit to it. Never waver.',
        how: 'Decide your sobriety anchor date. Write it down. Communicate it to every person writing you a support letter and to your substance abuse evaluator. This date is sacred.',
        urgency: 'critical'
    },
    {
        id: 'step-7',
        phase: 'PHASE 2 — BUILD YOUR EVIDENCE',
        title: 'Schedule 12-Panel Urinalysis',
        why: 'Proves you\'re clean right now. Must be lab-certified (NOT an instant cup test from a pharmacy). The lab must test for "Integrity Variables" — Creatinine, Specific Gravity, and pH — which prove the sample wasn\'t diluted or tampered with. Without these three variables, the test gets rejected.',
        how: 'Find a lab-certified testing facility (Quest Diagnostics, LabCorp, or a local hospital lab). Ask specifically for a 12-panel with integrity variables and chain-of-custody documentation.',
        urgency: 'when-ready'
    },
    {
        id: 'step-8',
        phase: 'PHASE 2 — BUILD YOUR EVIDENCE',
        title: 'Collect 3-6 Notarized Support Letters',
        why: 'These are character witnesses in writing. Each person must know your sobriety date, describe how they personally know you, confirm they\'ve observed your sober lifestyle, and state they believe you\'ll stay sober. The hearing officer reads these carefully.',
        how: '⚠️ Each letter MUST be unique — no template language. If two letters use the same phrases, it\'s an automatic red flag. ⚠️ NEVER mention "occasional drink" or "social drinking" — instant denial. Each letter must be signed and notarized (UPS Store, bank, or notary public).',
        urgency: 'when-ready'
    },
    {
        id: 'step-9',
        phase: 'PHASE 2 — BUILD YOUR EVIDENCE',
        title: 'Complete Form SOS-258 (Substance Abuse Evaluation)',
        why: 'A licensed substance abuse evaluator interviews you, reviews your history, and writes a clinical assessment. This is the professional opinion the hearing officer relies on most heavily. The evaluator must document your full charge history, treatment history, sobriety date, and their clinical assessment of relapse risk.',
        how: '⚠️ CRITICAL DEADLINE: This form MUST be dated within 90 DAYS of your submission. If you do this too early and don\'t file in time, you have to redo it. Schedule this AFTER you have everything else ready.',
        urgency: 'when-ready'
    },
    {
        id: 'step-10',
        phase: 'PHASE 3 — FILE & PREPARE',
        title: 'Get Legal Review Before Filing',
        why: 'The hearing is adversarial — the state has an attorney who will cross-examine you. Having an attorney (or at least the free Road to Restoration attorney) review your packet catches mistakes that would get you denied. Common errors: SOS-258 date outside the 90-day window, template language in letters, sobriety date mismatches, missing integrity variables on drug screen.',
        how: 'Either hire a license restoration attorney OR use the free attorney at a Road to Restoration clinic to review your complete packet before filing.',
        urgency: 'later'
    },
    {
        id: 'step-11',
        phase: 'PHASE 3 — FILE & PREPARE',
        title: 'File via DAIS (Driver Appeals Integrated System)',
        why: 'This is where you officially submit everything as one unified packet. Partial submissions get rejected — everything must go in together. Once filed, the system schedules your hearing.',
        how: 'Log into MiLogin → DAIS → Upload all documents as a single packet. The system will confirm receipt and provide a hearing date.',
        urgency: 'later',
        link: 'https://milogin.michigan.gov/',
        linkLabel: 'Go to DAIS'
    },
    {
        id: 'step-12',
        phase: 'PHASE 3 — FILE & PREPARE',
        title: 'Prepare Testimony & Attend Hearing',
        why: 'The hearing is on Microsoft Teams. You face a Hearing Officer (reviews evidence, asks questions) and a State Attorney (cross-examines you). Your testimony must be 100% consistent with every document you filed. Any inconsistency = denial.',
        how: 'Practice your testimony. Key points: your sobriety date (exact), what changed, your current lifestyle, your support system, why you won\'t relapse. If asked about the FL license: "I moved to Florida, applied, they issued one. My FL driving record was clean. My focus today is demonstrating sobriety."',
        urgency: 'later'
    }
];

// ============================================
// Documents & Forms
// ============================================
const DOCS = [
    { icon: '📄', title: 'SOS-257 + SOS-258 Form Package', desc: 'Hearing Request + Substance Use Eval', url: 'https://www.michigan.gov/sos/-/media/Project/Websites/sos/sos/OHAO_Form_Package_SOS_257_258.pdf' },
    { icon: '🖥', title: 'DAIS — Submit Evidence Online', desc: 'Driver Appeals Integrated System', url: 'https://milogin.michigan.gov/' },
    { icon: '🆓', title: 'Road to Restoration Clinics', desc: 'Free attorney consult + record review', url: 'https://www.michigan.gov/sos/license-id/road-to-restoration' },
    { icon: '📑', title: 'All SOS Forms Library', desc: 'Complete Michigan SOS forms catalog', url: 'https://www.michigan.gov/sos/resources/forms' },
    { icon: '🌴', title: 'Florida Driving Record', desc: 'DHSMV — pull FL record online', url: 'https://www.flhsmv.gov/driver-licenses-id-cards/driving-record-check/' },
    { icon: '🌵', title: 'Arizona Driving Record', desc: 'MVD — pull AZ record online', url: 'https://azmvdnow.gov/' },
];

// ============================================
// Knowledgebase Files
// ============================================
const KB_FILES = [
    { icon: '📘', title: 'DAAD Complete Process', desc: 'Full hearing process guide', file: '../knowledgebase/DAAD_COMPLETE_PROCESS.md' },
    { icon: '📕', title: 'Jeff\'s Case Narrative', desc: 'Story, timeline, FL license, strategy', file: '../knowledgebase/JEFF_CASE_NARRATIVE.md' },
    { icon: '📗', title: 'Record Visibility Reference', desc: 'What shows / what doesn\'t on records', file: '../knowledgebase/RECORD_VISIBILITY_REFERENCE.md' },
    { icon: '📙', title: 'Interstate Data Systems', desc: 'MI ↔ FL ↔ AZ backend connections', file: '../knowledgebase/INTERSTATE_DATA_SYSTEMS.md' },
    { icon: '📓', title: 'Legal Research & Case Law', desc: 'Law evolution, hardship, sobriety court', file: '../knowledgebase/LEGAL_RESEARCH_CASELAW.md' },
    { icon: '📔', title: 'Alternative Pathways', desc: 'Road to Restoration, Clean Slate, novel strategies', file: '../knowledgebase/ALTERNATIVE_PATHWAYS.md' },
    { icon: '📒', title: 'DAAD Legal Analysis', desc: 'Expert guide & hearing prep', file: '../knowledgebase/DAAD_LEGAL_ANALYSIS.md' },
    { icon: '📚', title: 'DAAD Expert Guide', desc: 'Scraped legal research', file: '../knowledgebase/DAAD_EXPERT_GUIDE.md' },
];

// ============================================
// State: localStorage persistence
// ============================================
let stepState = JSON.parse(localStorage.getItem('daad_step_state')) || {};

const roadmapEl = document.getElementById('roadmapList');
const resetBtn = document.getElementById('resetBtn');

// ============================================
// Tab Navigation
// ============================================
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(`panel-${tab.dataset.tab}`).classList.add('active');
    });
});

// ============================================
// Render Roadmap
// ============================================
function renderRoadmap() {
    roadmapEl.innerHTML = '';
    let currentPhase = '';

    ROADMAP.forEach(step => {
        // Phase header
        if (step.phase !== currentPhase) {
            currentPhase = step.phase;
            const phaseEl = document.createElement('div');
            phaseEl.className = 'phase-header';
            phaseEl.textContent = currentPhase;
            roadmapEl.appendChild(phaseEl);
        }

        const isComplete = !!stepState[step.id];
        const el = document.createElement('div');
        el.className = `roadmap-item ${isComplete ? 'completed' : ''} urgency-${step.urgency}`;
        el.dataset.id = step.id;

        const urgencyLabels = {
            'critical': '🔴 CRITICAL',
            'now': '🟠 DO NOW',
            'soon': '🟡 THIS MONTH',
            'when-ready': '🔵 WHEN READY',
            'later': '⚪ BEFORE FILING'
        };

        el.innerHTML = `
            <div class="roadmap-check">
                <div class="task-checkbox">
                    <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
            </div>
            <div class="roadmap-content">
                <div class="roadmap-top">
                    <h3>${step.title}</h3>
                    <span class="urgency-badge urgency-${step.urgency}">${urgencyLabels[step.urgency]}</span>
                </div>
                <div class="roadmap-why">
                    <strong>Why:</strong> ${step.why}
                </div>
                <div class="roadmap-how">
                    <strong>How:</strong> ${step.how}
                </div>
                ${step.link ? `<a href="${step.link}" target="_blank" class="roadmap-link">${step.linkLabel} →</a>` : ''}
            </div>
        `;

        el.querySelector('.roadmap-check').addEventListener('click', (e) => {
            e.stopPropagation();
            stepState[step.id] = !stepState[step.id];
            localStorage.setItem('daad_step_state', JSON.stringify(stepState));
            renderRoadmap();
            updateProgress();
        });

        roadmapEl.appendChild(el);
    });
}

// ============================================
// Progress Tracking
// ============================================
function updateProgress() {
    const total = ROADMAP.length;
    let completed = 0;
    ROADMAP.forEach(s => { if (stepState[s.id]) completed++; });

    // Ring
    const ringFill = document.getElementById('ringFill');
    const ringLabel = document.getElementById('ringLabel');
    const circumference = 2 * Math.PI * 18;
    const offset = circumference - (completed / total) * circumference;
    ringFill.style.strokeDashoffset = offset;
    ringLabel.textContent = `${completed}/${total}`;

    // Phase counters
    const phases = {};
    ROADMAP.forEach(s => {
        if (!phases[s.phase]) phases[s.phase] = { total: 0, done: 0 };
        phases[s.phase].total++;
        if (stepState[s.id]) phases[s.phase].done++;
    });
}

// ============================================
// Render Docs & KB
// ============================================
function renderDocs() {
    const container = document.getElementById('docList');
    if (!container) return;
    container.innerHTML = '';
    DOCS.forEach(item => {
        const a = document.createElement('a');
        a.href = item.url;
        a.target = '_blank';
        a.className = 'link-card';
        a.innerHTML = `
            <span class="link-icon">${item.icon}</span>
            <div>
                <strong>${item.title}</strong>
                <span>${item.desc}</span>
            </div>
            <span class="link-arrow">→</span>
        `;
        container.appendChild(a);
    });
}

function renderKB() {
    const container = document.getElementById('kbList');
    if (!container) return;
    container.innerHTML = '';
    KB_FILES.forEach(item => {
        const a = document.createElement('a');
        a.href = item.file;
        a.target = '_blank';
        a.className = 'kb-card';
        a.innerHTML = `
            <span class="kb-icon">${item.icon}</span>
            <strong>${item.title}</strong>
            <span>${item.desc}</span>
        `;
        container.appendChild(a);
    });
}

// ============================================
// Reset
// ============================================
resetBtn.addEventListener('click', () => {
    if (confirm('Reset all progress? This clears every checkbox.')) {
        stepState = {};
        localStorage.setItem('daad_step_state', JSON.stringify(stepState));
        renderRoadmap();
        updateProgress();
    }
});

// ============================================
// Init
// ============================================
renderRoadmap();
renderDocs();
renderKB();
updateProgress();
