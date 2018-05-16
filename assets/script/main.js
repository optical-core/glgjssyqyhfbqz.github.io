document.addEventListener('DOMContentLoaded', () => {
  fetch('/assets/database/db.json')
    .then(data => data.json())
    .then(render);
});

function $(dom) {
  const d = document.getElementsByTagName(dom);
  return d.length === 1 ? d[0] : d;
}

function render(config) {
  $('title').textContent = config.title;
  $('h1').textContent = config.title;
  delete config.title;
  $('time').textContent = config.last;
  delete config.last;
  for (const conf in config) {
    const template = document.createElement('div');
    template.className = conf;
    const data = config[conf];
    template.innerHTML = `<div><strong class="${data.color}">${
      data.title
    }</strong>${data.site
      .map(
        c =>
          `<a href="http://${c.url}" title="http://${c.url}" class="${data.color}">${
            c.title
          }</a>`
      )
      .join('')}</div>`;
    $('main').appendChild(template);
  }
}
