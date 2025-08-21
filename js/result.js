(async function () {
  const params = new URLSearchParams(window.location.search);
  const groupKey = params.get('g') || 'unknown';
  const tenshoNumber = params.get('n') || '';

  // UIノード
  const type = document.getElementById('type');
  const img = document.getElementById('img');
  const overallLuck  = document.getElementById('overallLuck');
  const loveLuck     = document.getElementById('loveLuck');
  const careerLuck   = document.getElementById('careerLuck');
  const moneyLuck    = document.getElementById('moneyLuck');
  const healthLuck   = document.getElementById('healthLuck');

  // フォールバック（キーが不明な時）
  function renderFallback() {
    // type.textContent = `タイプ: ${groupKey}`;
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  try {
    const res = await fetch('../data/fortune.json', { cache: 'no-store' });
    if (!res.ok) throw new Error('fortune.json fetch failed');
    const fortunes = await res.json();

    const entry = fortunes[groupKey];
    if (!entry) { renderFallback(); return; }

    type.textContent = entry.title;
    img.src = entry.img;
    overallLuck.innerHTML = entry.overallLuck.map(line => escapeHtml(line)).join('<br>');
    loveLuck.innerHTML = entry.loveLuck.map(line => escapeHtml(line)).join('<br>');
    careerLuck.innerHTML = entry.careerLuck.map(line => escapeHtml(line)).join('<br>');
    moneyLuck.innerHTML = entry.moneyLuck.map(line => escapeHtml(line)).join('<br>');
    healthLuck.innerHTML = entry.healthLuck.map(line => escapeHtml(line)).join('<br>');

  } catch (e) {
    console.error(e);
    renderFallback();
  }

})();