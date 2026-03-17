const topicData = {
  cell: {
    basics: 'Cells are life’s smallest autonomous units, with membrane-defined boundaries and regulated interior chemistry.',
    functions: 'Mitochondria synthesize ATP via oxidative phosphorylation—an energy battery metaphor for learners.',
    disorders: 'Mutations in mitochondrial DNA can compromise muscle and neural performance, especially in high-demand tissues.',
    applications: 'Cellular assays guide precision medicine, from cancer metabolism to rare disease diagnostics.'
  },
  heart: {
    basics: 'The heart is a muscular four-chamber pump that sustains systemic and pulmonary circulation.',
    functions: 'Coordinated contractions drive oxygen delivery and waste removal; valve timing maintains unidirectional flow.',
    disorders: 'Arrhythmia, ischemia, and cardiomyopathies disrupt flow dynamics and tissue perfusion.',
    applications: 'ECG analytics, stent design, and surgical simulation rely on physiologic heart modeling.'
  },
  dna: {
    basics: 'DNA stores hereditary information in a double-helix polymer built from paired nucleotides.',
    functions: 'Transcription copies DNA into RNA, then translation assembles proteins for structure and signaling.',
    disorders: 'Single-base changes or chromosomal errors can alter protein function and drive inherited disorders.',
    applications: 'Sequencing, CRISPR, and pharmacogenomics personalize therapies and risk prediction.'
  },
  neuron: {
    basics: 'Neurons are excitable cells that integrate, propagate, and transmit electrochemical signals.',
    functions: 'Action potentials travel down axons to synapses, converting electrical information into neurotransmitter release.',
    disorders: 'Demyelinating disease, synaptic dysfunction, and degenerative loss impair cognition and movement.',
    applications: 'Brain-computer interfaces and neuromodulation therapies depend on precise pathway mapping.'
  },
  ecosystem: {
    basics: 'Ecosystems link organisms with climate, nutrient cycles, and energy transfer across trophic levels.',
    functions: 'Primary producers capture solar input; consumers and predators redistribute energy and biomass.',
    disorders: 'Pollution and habitat fragmentation destabilize food webs and can trigger biodiversity collapse.',
    applications: 'Conservation planning and public health forecasting use ecosystem models to anticipate systemic risk.'
  }
};

const timelineStates = [
  'Step 1: DNA transcription begins in nucleus.',
  'Step 2: mRNA exits nucleus and meets ribosome.',
  'Step 3: Translation builds protein chains for cell function.'
];

const topicButtons = [...document.querySelectorAll('.topic-btn')];
const topicSvgs = [...document.querySelectorAll('.topic-svg')];
const tabButtons = [...document.querySelectorAll('.tab-btn')];
const tabPanels = [...document.querySelectorAll('.tab-panel')];
const timeline = document.getElementById('bioTimeline');
const timelineReadout = document.getElementById('timelineReadout');
const quizDialog = document.getElementById('quizDialog');
const quizResult = document.getElementById('quizResult');
const flashcard = document.getElementById('flashcard');
const flashcardPrompt = document.getElementById('flashcardPrompt');
let currentTopic = 'cell';
let flashFlipped = false;

function clickTone() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.value = 460;
  gain.gain.value = 0.028;
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.08);
}

function updateText(topic) {
  const data = topicData[topic];
  document.getElementById('topicDefinition').textContent = data.basics;
  document.getElementById('topicFunction').textContent = data.functions;
  document.getElementById('topicDisorder').textContent = data.disorders;
  document.getElementById('topicApplication').textContent = data.applications;
}

function activateTopic(topic) {
  currentTopic = topic;
  topicButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.topic === topic));
  topicSvgs.forEach(svg => svg.classList.toggle('active', svg.id === `topic-${topic}`));
  updateText(topic);
}

topicButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    activateTopic(btn.dataset.topic);
    clickTone();
  });
});

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tabButtons.forEach(b => b.classList.toggle('active', b === btn));
    tabPanels.forEach(panel => panel.classList.toggle('active', panel.id === btn.dataset.tab));
    clickTone();
  });
});

timeline.addEventListener('input', () => {
  timelineReadout.textContent = timelineStates[Number(timeline.value)];
});

document.getElementById('quizBtn').addEventListener('click', () => {
  quizResult.textContent = '';
  quizDialog.showModal();
  clickTone();
});

document.querySelectorAll('.quiz-options button').forEach(btn => {
  btn.addEventListener('click', () => {
    quizResult.textContent = btn.dataset.answer === 'correct'
      ? 'Correct: mitochondria are ATP production hubs.'
      : 'Try again: think energy conversion and ATP synthesis.';
    clickTone();
  });
});

document.getElementById('closeQuiz').addEventListener('click', () => quizDialog.close());

document.getElementById('flashcardBtn').addEventListener('click', () => {
  flashcard.classList.remove('hidden');
  flashFlipped = false;
  flashcardPrompt.textContent = 'What organelle is best described as the cell\'s battery?';
  clickTone();
});

document.getElementById('flipFlashcard').addEventListener('click', () => {
  flashFlipped = !flashFlipped;
  flashcardPrompt.textContent = flashFlipped
    ? 'Answer: Mitochondria (GO:0005739) power ATP generation.'
    : 'What organelle is best described as the cell\'s battery?';
  clickTone();
});

// Requirement alignment: ensure no visibility:hidden remains on embedded SVG nodes.
document.querySelectorAll('svg [style*="visibility:hidden"], svg [visibility="hidden"]').forEach(node => {
  node.style.visibility = 'visible';
  node.removeAttribute('visibility');
});

updateText(currentTopic);
