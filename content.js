(() => {
  const data = window.academicProfile;
  if (!data) return;
  const element = (tag, text, className) => {
    const node = document.createElement(tag);
    if (text) node.textContent = text;
    if (className) node.className = className;
    return node;
  };
  // Allow web URLs and local file paths, but never executable URL schemes.
  const safeURL = (value) => {
    if (!value || typeof value !== 'string') return null;
    try {
      const url = new URL(value, window.location.href);
      if (['https:', 'http:'].includes(url.protocol)) return url.href;
      if (url.protocol === 'file:' && window.location.protocol === 'file:' && !/^[a-z][a-z\d+.-]*:/i.test(value)) return url.href;
    } catch (_) {}
    return null;
  };
  const link = (label, value) => {
    const href = safeURL(value);
    if (!href) return null;
    const node = element('a', label);
    node.href = href;
    const cvURL = safeURL((data.links || {}).cv);
    if (cvURL && href === cvURL) {
      node.target = '_blank';
      node.rel = 'noopener noreferrer';
      node.setAttribute('aria-label', `${label} (opens CV in a new tab)`);
    }
    return node;
  };
  const appendLink = (parent, label, value) => {
    const node = link(label, value);
    if (node) parent.append(node);
  };
  const addIcon = (node, emoji) => {
    const icon = element('span', emoji, 'profile-icon');
    icon.setAttribute('aria-hidden', 'true');
    node.prepend(icon);
  };
  // Support inline Markdown links while keeping all other content as plain text.
  const biographyParagraph = (text) => {
    const paragraph = element('p');
    const pattern = /\[([^\]]+)\]\(([^\s)]+)\)/g;
    let cursor = 0;
    for (const match of text.matchAll(pattern)) {
      paragraph.append(document.createTextNode(text.slice(cursor, match.index)));
      paragraph.append(link(match[1], match[2]) || document.createTextNode(match[1]));
      cursor = match.index + match[0].length;
    }
    paragraph.append(document.createTextNode(text.slice(cursor)));
    return paragraph;
  };
  const fill = (selector, text) => {
    document.querySelector(selector).textContent = text || '';
  };
  const populate = (id, items, render) => {
    const section = document.getElementById(id);
    const navigation = document.querySelector(`nav a[href="#${id}"]`);
    section.hidden = !items.length;
    navigation.hidden = !items.length;
    const target = section.querySelector('[data-content]');
    target.replaceChildren(...items.map(render));
  };

  document.title = `${data.name} | Academic Homepage`;
  document.querySelector('meta[name="description"]').content = `${data.name} — ${[data.position, data.institution].filter(Boolean).join(', ')}. Research, publications, and academic background.`;
  fill('.brand-name', data.headerName || data.name);
  fill('h1', data.name);
  fill('.profile-role', data.position);
  const affiliation = document.querySelector('.affiliation');
  affiliation.replaceChildren();
  [[data.department, data.departmentUrl], [data.institution, data.institutionUrl]].filter(([text]) => Boolean(text)).forEach(([text, url], i) => {
    if (i) affiliation.append(document.createElement('br'));
    affiliation.append(link(text, url) || document.createTextNode(text));
  });
  fill('.footer-name', data.headerName || data.authorName || data.name);
  fill('.profile-location', data.location);
  if (data.location) addIcon(document.querySelector('.profile-location'), '📍');
  document.querySelector('.profile-location').hidden = !data.location;
  const portrait = document.querySelector('.portrait-placeholder');
  portrait.querySelector('span').textContent = data.name.trim().split(/\s+/).map(part => part[0]).join('').slice(0, 2).toUpperCase() || '?';
  const photo = safeURL(data.photo);
  if (photo) {
    const image = element('img', '', 'profile-photo');
    image.alt = `Portrait of ${data.name}`;
    image.width = 166;
    image.height = 166;
    image.addEventListener('load', () => portrait.replaceWith(image));
    image.src = photo;
  }
  const social = document.querySelector('.profile-links');
  social.replaceChildren();
  const profiles = data.links || {};
  [['Google Scholar', profiles.scholar, '🎓'], ['ORCID', profiles.orcid, '🔬'], ['GitHub', profiles.github, null], ['LinkedIn', profiles.linkedin, null]].forEach(([label, url, emoji]) => {
    const node = link(label, url);
    if (node) {
      if (label === 'LinkedIn' || label === 'GitHub') {
        const icon = element('span', '', `profile-icon ${label === 'LinkedIn' ? 'linkedin-icon' : 'github-icon'}`);
        icon.setAttribute('aria-hidden', 'true');
        node.prepend(icon);
      } else {
        addIcon(node, emoji);
      }
      social.append(node);
    }
  });
  document.querySelector('#about [data-content]').replaceChildren(...(data.about || []).map(biographyParagraph));

  populate('research', data.research || [], item => {
    const row = element('li');
    row.append(element('h3', item.title), element('p', item.description));
    return row;
  });
  const renderAuthors = (text = '') => {
    const paragraph = element('p');
    const ownName = data.authorName || data.headerName || data.name;
    text.split(',').forEach((author, index) => {
      if (index) paragraph.append(document.createTextNode(', '));
      const label = author.trim();
      const name = label.replace(/\*+$/, '').trim();
      if (name === ownName) {
        paragraph.append(element('strong', name));
        paragraph.append(document.createTextNode(label.slice(name.length)));
      } else {
        paragraph.append(document.createTextNode(label));
      }
    });
    return paragraph;
  };
  const renderPaper = item => {
    const row = element('article', '', 'publication');
    row.append(element('h3', item.title), renderAuthors(item.authors));
    row.append(element('p', [item.venue, item.year].filter(Boolean).join(', '), 'venue'));
    if (item.note) row.append(element('p', item.note, 'entry-note'));
    const resources = element('div', '', 'publication-links');
    [['Paper', item.paper], ['Code', item.code], ['Project', item.project]].forEach(([label, url]) => appendLink(resources, label, url));
    if (resources.childElementCount) row.append(resources);
    if (item.bibtex) {
      const details = element('details', '', 'citation');
      details.append(element('summary', 'BibTeX'), element('pre', item.bibtex));
      row.append(details);
    }
    return row;
  };
  populate('publications', data.publications || [], renderPaper);
  populate('preprints', data.preprints || [], renderPaper);
  populate('cross-disciplinary', data.crossDisciplinary || [], renderPaper);
  const renderExperience = item => {
    const row = element('div', '', 'experience-row');
    const body = element('div');
    body.append(element('h3', item.title), element('p', item.institution));
    if (item.location) body.append(element('p', item.location, 'entry-note'));
    if (item.details) body.append(element('p', item.details, 'entry-note'));
    row.append(element('span', item.years, 'date'), body);
    return row;
  };
  populate('education', data.education || [], renderExperience);
  populate('experience', data.experience || [], renderExperience);
  const contact = document.querySelector('.contact-details');
  contact.replaceChildren();
  const contactRow = (label, value) => {
    const row = element('div');
    const body = element('dd');
    body.append(value || element('span', 'To be added', 'muted'));
    row.append(element('dt', label), body);
    contact.append(row);
  };
  let email;
  if (data.email) {
    email = element('a', data.email);
    email.href = `mailto:${encodeURIComponent(data.email).replace(/%40/g, '@')}`;
  }
  if (email) {
    const sidebarEmail = email.cloneNode(true);
    sidebarEmail.textContent = 'Email';
    addIcon(sidebarEmail, '✉️');
    social.prepend(sidebarEmail);
  }
  contactRow('Email', email);
})();
