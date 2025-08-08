
function renderPubList(data, mountId){
  const m = document.getElementById(mountId);
  data.forEach(p => {
    const li = document.createElement('li');
    const doi = p.doi ? ` <a href="${p.doi}" target="_blank">[link]</a>` : '';
    li.innerHTML = `<strong>${p.authors}</strong> (${p.year}). <em>${p.title}</em>. ${p.venue}.${doi}`;
    m.appendChild(li);
  });
}

renderPubList(pubsJournal, 'pub-journal');
renderPubList(pubsProc, 'pub-proc');
renderPubList(pubsBook, 'pub-book');

function renderTwoCol(items, mountId){
  const m = document.getElementById(mountId);
  items.forEach(row => {
    const [date, html] = row;
    const d = document.createElement('div'); d.className='date'; d.textContent=date;
    const t = document.createElement('div'); t.className='text'; t.innerHTML=html;
    m.appendChild(d); m.appendChild(t);
  });
}

renderTwoCol(talks, 'talks');
renderTwoCol(grants, 'grants-grid');

// Mobile nav toggle
const navBtn = document.querySelector('.nav-toggle');
const navEl  = document.getElementById('site-nav');
if (navBtn && navEl) {
  navBtn.addEventListener('click', () => {
    const open = navEl.classList.toggle('open');
    navBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

