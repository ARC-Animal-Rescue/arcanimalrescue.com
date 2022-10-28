async function uploaded_images(year) {
  var images = []
  const req_commits = await fetch(`https://api.github.com/repos/ARC-Animal-Rescue/arcanimalrescue.com/contents/subdirs/xmas${year}`);

  var resolution = await req_commits.json();
  
  for (var i=0; i < resolution.length; i++) {
    var filename = JSON.stringify(resolution[i].download_url);
  
    images.push(filename);
  }
  
  return images;
}

async function yearExists(year) {
  const response = await fetch(`https://api.github.com/repos/ARC-Animal-Rescue/arcanimalrescue.com/contents/static/xmas${year}.html`);
  return (response.status === 200) ? true : false;
}

async function nextYear(thisYear) {
  const nextYear = thisYear + 1;
  window.open(`https://arcanimalrescue.com/static/xmas${nextYear}.html`, '_self');
}

async function prevYear(thisYear) {
  const prevYear = thisYear - 1;
  window.open(`https://arcanimalrescue.com/static/xmas${prevYear}.html`, '_self');
}

async function checkControls() {
  const year = parseInt(window.location.href.split('xmas')[1].split('.')[0]);
  const next = await yearExists(year + 1);
  const prev = await yearExists(year - 1);
  if (!next) {
    document.getElementById('next').style.color = 'gray';
    document.getElementById('next').style.cursor = 'default';
  } else { 
    document.getElementById('next').onclick = () => nextYear(year);
    document.getElementById('next').style.cursor = 'cursor';
  }
  if (!prev) {
    document.getElementById('prev').style.color = 'gray';
    document.getElementById('prev').style.cursor = 'default';
  } else {
    document.getElementById('prev').onclick = () => prevYear(year);
    document.getElementById('prev').style.cursor = 'cursor';
  }
}

window.onload = async function() {
  await checkControls();
}