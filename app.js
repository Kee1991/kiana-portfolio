const toggle = document.getElementById('soundToggle');
const label = document.getElementById('soundLabel');
let audioContext;
let timer;
let playing = false;
const fileMusic = new Audio('assets/instrumental-jazz.mp3');
fileMusic.loop = true;
fileMusic.volume = 0.35;

const philosophy = document.getElementById('community-title');
const philosophyLabel = document.querySelector('.pink-eyebrow');
if (philosophy) philosophy.innerHTML = 'We are <em>stronger together.</em>';
if (philosophyLabel) philosophyLabel.textContent = 'LEADERSHIP PHILOSOPHY';

const aboutBody = document.querySelector('.about-body');
if (aboutBody) {
  aboutBody.innerHTML = `<p class="lead">Kiana C. Farlow is the Founder and Executive Director of Law Enforcement Mentor Club Corporation, a Philadelphia-based nonprofit committed to supporting at-risk youth and their families through mentorship, education, music, sports, and the arts.</p><p>As a former Police Officer, Kiana brings firsthand experience in public safety, community engagement, and youth development. Her perspective helps bridge the gap between law enforcement and the communities they serve, working to build trust, open doors, and create meaningful change.</p><p>As Executive Director, she leads the organization’s strategic direction, program development, community partnerships, and fundraising efforts. She works with schools, recreation centers, local organizations, and first responders to expand opportunity, promote youth leadership, and strengthen communities.</p><div class="tag-list"><span>Nonprofit leadership</span><span>Community wellness</span><span>Youth mentorship</span><span>Public trust</span></div>`;
}

const aboutSection = document.querySelector('#about');
if (aboutSection) {
  const story = document.createElement('div');
  story.className = 'story-extension wrap';
  story.innerHTML = `<div class="story-intro"><p class="eyebrow pink-eyebrow">MY STORY · IN HER WORDS</p><h2>Service is personal. <em>Impact is collective.</em></h2><p>Kiana’s work is grounded in the belief that young people deserve access to support, safe spaces, and the chance to see a future beyond the circumstances around them. Her lived experience, public-safety background, and commitment to community wellness shape how she leads: with empathy, structure, and an insistence that collaboration creates lasting change.</p><p>Through mentorship, neighborhood partnerships, peace initiatives, and youth-centered programming, she turns relationships into resources and shared concern into organized action.</p></div><div class="coverage-section"><p class="eyebrow">FEATURED COVERAGE</p><p class="coverage-intro">Read more about peace marches and community events Kiana planned, led, and facilitated.</p><div class="coverage-grid"><a class="coverage-card" href="https://whyy.org/articles/as-gun-violence-continues-to-surge-organizers-unite-for-a-peace-march-in-southwest-philly/" target="_blank" rel="noopener"><span>WHYY · 2021</span><strong>Southwest Philly peace march protests surging gun violence</strong><b>Read the story ↗</b></a><a class="coverage-card" href="https://www.phillytrib.com/as-gun-violence-continues-to-surge-organizers-unite-for-a-peace-march-in-southwest-philly/article_eb49dcb5-7ae0-5a2b-a159-f2de9c02e4af.html" target="_blank" rel="noopener"><span>THE PHILADELPHIA TRIBUNE</span><strong>Organizers unite for a peace march in Southwest Philly</strong><b>Read the story ↗</b></a><a class="coverage-card" href="https://www.inquirer.com/photo/philly-peace-march-featuring-local-drill-teams-makes-its-way-down-market-street-20200718.html" target="_blank" rel="noopener"><span>THE PHILADELPHIA INQUIRER · 2020</span><strong>A Philly “Peace March” featuring local drill teams</strong><b>View the coverage ↗</b></a><a class="coverage-card" href="https://6abc.com/peaceful-march-in-philadelphia-to-end-gun-violence/6323656/" target="_blank" rel="noopener"><span>6ABC · 2020</span><strong>“No More Silence End the Violence”</strong><b>Read the story ↗</b></a></div></div>`;
  aboutSection.insertAdjacentElement('afterend', story);
}

const tribuneLink = document.querySelector('a[href*="phillytrib"]');
if (tribuneLink) tribuneLink.href = 'https://www.phillytrib.com/as-gun-violence-continues-to-surge-organizers-unite-for-a-peace-march-in-southwest-philly/article_eb5558f1-fc49-5794-83e8-37aec19b8207.html';

document.querySelectorAll('a[href*="lawenforcementmentoring.org"], a[href*="paypal.com/donate"]').forEach((link) => {
  link.target = '_self';
});

const recognition = document.querySelector('.credential:last-child');
if (recognition) {
  recognition.innerHTML = `<span>RECOGNITION</span><div class="award-entry"><strong>Justice Award</strong><small>Central Victim Services · 2021</small></div><div class="award-entry"><strong>Rising Star Award</strong><small>Marriott Bridges Foundation · 2019</small></div>`;
}

const impactSection = document.querySelector('#impact');
if (impactSection) {
  const outcomes = document.createElement('section');
  outcomes.className = 'outcomes wrap';
  outcomes.setAttribute('aria-labelledby', 'outcomes-title');
  outcomes.innerHTML = `<div class="outcomes-heading"><div><p class="eyebrow pink-eyebrow">SELECTED OUTCOMES</p><h2 id="outcomes-title">Impact you can <em>see.</em></h2></div><p>Selected results from Kiana’s public-safety, community-engagement, and program leadership work.</p></div><div class="outcome-grid"><article class="outcome-card"><strong>30K+</strong><span>residents, businesses, schools, and organizations served</span><div class="outcome-bar"><i style="width:92%"></i></div></article><article class="outcome-card"><strong>20%</strong><span>increase in residents reporting that they feel safe</span><div class="outcome-bar"><i style="width:68%"></i></div></article><article class="outcome-card"><strong>10%</strong><span>crime reduction connected to community-policing work</span><div class="outcome-bar"><i style="width:48%"></i></div></article><article class="outcome-card"><strong>$30K</strong><span>program budget managed during national fellowship</span><div class="outcome-bar"><i style="width:58%"></i></div></article></div><p class="outcome-note">Executive snapshot · Figures reflect selected documented outcomes and are shown as individual indicators, not direct comparisons.</p>`;
  impactSection.insertAdjacentElement('afterend', outcomes);
}

const mainNav = document.querySelector('.site-header nav');
if (mainNav && !mainNav.querySelector('a[href="#coursework"]')) {
  const courseLink = document.createElement('a');
  courseLink.href = '#coursework';
  courseLink.textContent = 'Coursework';
  mainNav.insertBefore(courseLink, mainNav.querySelector('.nav-cta'));
}

const coursework = document.createElement('section');
coursework.className = 'coursework wrap';
coursework.id = 'coursework';
coursework.setAttribute('aria-labelledby', 'coursework-title');
coursework.innerHTML = `<div class="coursework-heading"><p class="eyebrow pink-eyebrow">SAS GAFL 5420 · AI FOR PUBLIC SECTOR LEADERSHIP</p><h2 id="coursework-title">Learning through <em>practice.</em></h2><p>This student portfolio connects course learning with applied work in public service, policy, management, community engagement, and responsible AI.</p></div><div class="coursework-grid"><article class="course-card"><span>COURSE LEARNING</span><h3>Public-sector leadership and responsible AI</h3><p>Exploring how leaders can use data, policy analysis, program evaluation, and emerging technologies to strengthen public outcomes while keeping equity, trust, and accountability at the center.</p></article><article class="course-card project-card"><span>PROJECT WORKSPACE</span><h3>Farlow course projects</h3><p>Course labs, assignments, census analysis, officer wellness work, and the Make It Out Boot Camp project are organized in the project workspace.</p><a href="file:///C:/Users/coffe/OneDrive%20-%20PennO365/Shortcuts/SAS-GAFL%205420_%20AI%20For%20Public%20Sector%20Leadership%20-%20Coding%20Projects/Farlow/" target="_blank" rel="noopener">View project folder ↗</a></article><article class="course-card placeholder-card"><span>FUTURE PROJECT</span><h3>AI policy analysis project</h3><p>Placeholder for a future course project documenting the policy question, data, method, implementation plan, and measurable public-sector outcomes.</p><em>Coming soon</em></article></div>`;
const experienceSection = document.querySelector('#experience');
if (experienceSection) experienceSection.insertAdjacentElement('beforebegin', coursework);

const footer = document.querySelector('.footer');
if (footer) {
  const studentLabel = document.createElement('span');
  studentLabel.textContent = 'Student portfolio · SAS GAFL 5420';
  footer.insertBefore(studentLabel, footer.lastElementChild);
}

const futureProject = document.querySelector('.placeholder-card');
if (futureProject) {
  futureProject.innerHTML = '<span>FUTURE PROJECT</span><h3>Officer Wellness Resource App</h3><p>A proposed resource app to help officers find wellness support, crisis resources, peer connection, and practical tools for sustaining mental and physical well-being.</p><em>In development</em>';
}

if (impactSection) {
  const cases = document.createElement('section');
  cases.className = 'case-studies wrap';
  cases.setAttribute('aria-labelledby', 'case-studies-title');
  cases.innerHTML = `<div class="case-heading"><p class="eyebrow pink-eyebrow">SELECTED CASE STUDIES</p><h2 id="case-studies-title">Leadership in <em>action.</em></h2><p>Examples of how Kiana turns community needs into organized, collaborative initiatives.</p></div><div class="case-list"><article class="case-study"><div class="case-index">01</div><div><p class="case-kicker">COMMUNITY SAFETY · 2021</p><h3>Southwest Philly Peace March</h3><p>Organized a peace march with Fareed Abdullah in response to gun violence, bringing together residents, families affected by violence, drill teams, community leaders, and public officials.</p><div class="case-outcome"><strong>Outcome</strong><span>Approximately 100–150 people participated, with the march ending at Christy Recreation Center for community stories and resources.</span></div><a href="https://whyy.org/articles/as-gun-violence-continues-to-surge-organizers-unite-for-a-peace-march-in-southwest-philly/" target="_blank" rel="noopener">Read the coverage ↗</a></div></article><article class="case-study"><div class="case-index">02</div><div><p class="case-kicker">YOUTH ENGAGEMENT · 2020</p><h3>No More Silence, End the Violence</h3><p>Planned and led a citywide peace march using music, drill teams, youth groups, artists, and trauma-support partners to create a positive platform for public awareness and connection.</p><div class="case-outcome"><strong>Outcome</strong><span>Connected community members, young people, police, performers, and support organizations through arts-based violence-prevention programming.</span></div><a href="https://www.inquirer.com/photo/philly-peace-march-featuring-local-drill-teams-makes-its-way-down-market-street-20200718.html" target="_blank" rel="noopener">View the coverage ↗</a></div></article><article class="case-study"><div class="case-index">03</div><div><p class="case-kicker">NONPROFIT LEADERSHIP · 2020 — PRESENT</p><h3>Law Enforcement Mentor Club Corporation</h3><p>Founded and leads a nonprofit connecting at-risk youth and families with mentors through sports, music, arts, education, and positive relationships with law enforcement.</p><div class="case-outcome"><strong>Outcome</strong><span>Built a mission, strategic direction, fundraising approach, and partnership network to expand youth opportunity and community trust.</span></div><a href="https://www.lawenforcementmentoring.org/" target="_blank" rel="noopener">Visit the organization ↗</a></div></article><article class="case-study"><div class="case-index">04</div><div><p class="case-kicker">PUBLIC SAFETY · WELLNESS</p><h3>Community Policing & Wellness Initiatives</h3><p>Developed and implemented programs including Ball with Badges, Safe Block Party, Safe Halloween, and Water Ice and Chill with Cops while championing officer wellness and community relations.</p><div class="case-outcome"><strong>Outcome</strong><span>Strengthened connections among residents, youth, schools, police, first responders, and community organizations.</span></div><a href="#contact">Discuss a partnership ↗</a></div></article></div>`;
  const outcomes = document.querySelector('.outcomes');
  (outcomes || impactSection).insertAdjacentElement('afterend', cases);
}

const outcomesSection = document.querySelector('.outcomes');
if (outcomesSection) {
  const visual = document.createElement('div');
  visual.className = 'impact-visual wrap';
  visual.setAttribute('aria-label', 'Visual summary of selected impact measures');
  visual.innerHTML = `<div class="impact-visual-header"><div><p class="eyebrow pink-eyebrow">EXECUTIVE DATA VIEW</p><h3>Impact at a glance</h3></div><span>Selected indicators · 2020–2026</span></div><div class="impact-bars"><div class="impact-bar-row"><div><strong>30K+</strong><span>people and organizations reached</span></div><i><b style="width:100%"></b></i></div><div class="impact-bar-row"><div><strong>20%</strong><span>increase in perceived safety</span></div><i><b style="width:70%"></b></i></div><div class="impact-bar-row"><div><strong>10%</strong><span>crime reduction in served community</span></div><i><b style="width:45%"></b></i></div><div class="impact-bar-row"><div><strong>11</strong><span>youth graduated from first Boot Camp cohort</span></div><i><b style="width:35%"></b></i></div></div><p class="impact-visual-note">Use the case studies below for context, methods, and program-level evidence behind each indicator.</p>`;
  outcomesSection.insertAdjacentElement('afterend', visual);
  visual.querySelector('.eyebrow').textContent = 'MEASURABLE OUTCOMES';
  visual.querySelector('.impact-visual-note').textContent = 'Evidence base: résumé outcomes, Make It Out Boot Camp summer results, and documented program reporting. Review the case studies below for context and limitations.';
}

const caseList = document.querySelector('.case-list');
if (caseList) {
  const bootCamp = document.createElement('article');
  bootCamp.className = 'case-study';
  bootCamp.innerHTML = `<div class="case-index">05</div><div><p class="case-kicker">YOUTH DEVELOPMENT · SUMMER 2026</p><h3>Make It Out Boot Camp</h3><p>Created and led a six-week summer boot camp to help young people see that they are not defined by their ZIP codes or environments. The first cohort graduated in August 2026, with programming centered on physical fitness, peer connection, trusted mentorship, life skills, and community resources.</p><div class="case-outcome"><strong>Early results</strong><span>11 youth graduated; the cohort gave the program an average 4.73/5 rating, 100% said they would recommend it to a peer, 81.8% felt safe and comfortable, and 72.7% reported gaining more tools to handle life’s challenges.</span></div><p class="case-note">Pilot results are directional early signals from an 11-student cohort. Future evaluation will add baseline and follow-up measures.</p></div>`;
  caseList.appendChild(bootCamp);
}

const communityPolicingCase = document.querySelectorAll('.case-study')[3];
if (communityPolicingCase) {
  communityPolicingCase.innerHTML = `<div class="case-index">04</div><div><p class="case-kicker">PUBLIC SAFETY · WELLNESS</p><h3>Community Policing & Wellness Initiatives</h3><p>As a Community Relations Officer with the Philadelphia Police Department, Kiana developed and implemented initiatives including Ball with Badges, Safe Block Party, Safe Halloween, and Water Ice and Chill with Cops. She also strengthened relationships among faith-based organizations, local businesses, city leaders, residents, and police.</p><div class="case-outcome"><strong>Outcome</strong><span>Helped lower crime by 10% in a community of approximately 30,000 residents while building stronger community partnerships and advancing trust-centered public safety.</span></div><a href="#contact">Discuss a partnership ↗</a></div>`;
}

const missionCard = document.querySelector('.mission-card');
if (missionCard) {
  missionCard.classList.add('mission-layout');
  const missionContent = document.createElement('div');
  while (missionCard.firstChild) missionContent.appendChild(missionCard.firstChild);
  const missionPhoto = document.createElement('img');
  missionPhoto.className = 'mission-photo';
  missionPhoto.src = 'assets/community-mentorship.png';
  missionPhoto.alt = 'Young people standing together in a classroom as part of a mentorship community';
  missionCard.append(missionContent, missionPhoto);
}

const contactLinks = document.querySelector('.contact-links');
const personalEmail = document.querySelector('.contact-links a[href="mailto:kiana.farlow91@gmail.com"]');
if (personalEmail) personalEmail.remove();
if (contactLinks && !contactLinks.querySelector('a[href="mailto:LawEnforcementmc@gmail.com"]')) {
  const businessEmail = document.createElement('a');
  businessEmail.href = 'mailto:LawEnforcementmc@gmail.com';
  businessEmail.innerHTML = '<span>Business</span>LawEnforcementmc@gmail.com <b>↗</b>';
  contactLinks.insertBefore(businessEmail, contactLinks.querySelector('.contact-note'));
}
if (contactLinks && !contactLinks.querySelector('a[href="mailto:kiana.farlow91@gmail.com"]')) {
  const personalEmailLink = document.createElement('a');
  personalEmailLink.href = 'mailto:kiana.farlow91@gmail.com';
  personalEmailLink.innerHTML = '<span>Personal</span>kiana.farlow91@gmail.com <b>↗</b>';
  contactLinks.insertBefore(personalEmailLink, contactLinks.querySelector('.contact-note'));
}

function playNote(frequency, start, duration, volume = 0.035) {
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(frequency, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.08);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(gain).connect(audioContext.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.05);
}

function loop() {
  if (fileMusic) return;
  const now = audioContext.currentTime;
  // Soft major-7 / add-9 voicings for a gentle instrumental jazz color.
  [261.63, 329.63, 392, 493.88, 587.33].forEach((note, index) => playNote(note, now + index * 0.1, 2.8, 0.028));
  [196, 246.94, 293.66].forEach((note, index) => playNote(note, now + index * 0.16, 3.2, 0.018));
  timer = window.setTimeout(loop, 3000);
}

toggle.addEventListener('click', () => {
  if (fileMusic) {
    if (fileMusic.paused) {
      fileMusic.play().catch(() => {});
      label.textContent = 'Pause instrumental music';
      toggle.setAttribute('aria-pressed', 'true');
    } else {
      fileMusic.pause();
      label.textContent = 'Play instrumental music';
      toggle.setAttribute('aria-pressed', 'false');
    }
    playing = !fileMusic.paused;
    return;
  }
  if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
  if (playing) {
    audioContext.suspend();
    window.clearTimeout(timer);
    label.textContent = 'Play calm ambient sound';
    toggle.setAttribute('aria-pressed', 'false');
  } else {
    audioContext.resume();
    loop();
    label.textContent = 'Pause ambient sound';
    toggle.setAttribute('aria-pressed', 'true');
  }
  playing = !playing;
});

// Try to begin on page load. Modern browsers may block audible autoplay;
// the visible sound button remains available when that happens.
window.addEventListener('load', () => {
  fileMusic.play().then(() => {
    playing = true;
    label.textContent = 'Pause instrumental music';
    toggle.setAttribute('aria-pressed', 'true');
  }).catch(() => {});
  if (fileMusic) return;
  try {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const start = audioContext.resume();
    if (start && typeof start.then === 'function') {
      start.then(() => {
        if (audioContext.state === 'running') {
          loop();
          playing = true;
          label.textContent = 'Pause ambient sound';
          toggle.setAttribute('aria-pressed', 'true');
        }
      }).catch(() => {});
    }
  } catch (error) {
    // The button remains the fallback for unsupported audio contexts.
  }
});

// Start on the visitor's first ordinary page interaction, without requiring
// a dedicated music-button click. This satisfies browser autoplay rules.
['pointerdown', 'touchstart', 'keydown', 'scroll'].forEach((eventName) => {
  window.addEventListener(eventName, () => {
    if (fileMusic.paused) toggle.click();
  }, { once: true, passive: true });
});

const handsStage = document.querySelector('.hands-stage');
if (handsStage) {
  const updateHands = (event) => {
    const box = handsStage.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - box.left) / box.width));
    const pull = Math.round((0.5 - x) * 34);
    handsStage.classList.add('interactive');
    handsStage.style.setProperty('--left-shift', `${pull}px`);
    handsStage.style.setProperty('--right-shift', `${pull * -1}px`);
  };
  handsStage.addEventListener('pointermove', updateHands);
  handsStage.addEventListener('pointerleave', () => handsStage.classList.remove('interactive'));
  handsStage.addEventListener('click', () => {
    handsStage.classList.add('joined');
    window.setTimeout(() => handsStage.classList.remove('joined'), 1400);
  });
}
