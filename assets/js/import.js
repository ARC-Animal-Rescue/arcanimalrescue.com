async function getBlock(name) {
  const res = await fetch(`../components/${name}.html`);
  return await res.text() || "Error loading component.";
};

async function replaceBlocks() {
  const blocks = document.querySelectorAll('[data-block]');

  for (const block of blocks) {
    const name = block.getAttribute('data-block');
    block.innerHTML = await getBlock(name);
  }
};

window.addEventListener('load', replaceBlocks);