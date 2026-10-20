/* AP-CORD v1 — The cord: four strands, eight knots. Drawn in code (ruled Oct 20, 2026).
   Use:  APCord.svg({ tied: 3 })                 → across (desktop) SVG string, 3 knots tied
         APCord.svg({ tied: 8, hanging: true })  → hanging (phone) SVG string
         APCord.render(el, { tied, hanging })     → writes it into an element
   tied = knots tied (0–8). Untied knots show faint and dashed. Never the word "rope". */
(function (w) {
  var STRANDS = [
    { name: 'The Wait',     color: '#B07A3E' },   // camel
    { name: 'The Look',     color: '#D9A829' },   // gold
    { name: 'The Blood',    color: '#7E2F2A' },   // burgundy
    { name: 'The Mountain', color: '#8E8A74' }    // stone
  ];
  var OUTLINE = '#3E2E1C', CREAM = '#FBF7EF', INK = '#5A4A3A', MUTED = '#9C8C78';
  var FONT = "Georgia, 'Times New Roman', serif";
  var ARIA = 'The cord: four strands braided into one, with eight knots';

  function clamp(n) { n = parseInt(n, 10); if (isNaN(n)) n = 0; return Math.max(0, Math.min(8, n)); }

  function across(tied) {
    var W = 1000, H = 300, cy = 150, A = 10, lam = 100, x0 = 180, xb = 330, xe = 965;
    var ys = [66, 122, 178, 234], o = [];
    o.push('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + ' ' + H + '" width="100%" role="img" aria-label="' + ARIA + '">');
    o.push('<rect width="' + W + '" height="' + H + '" fill="' + CREAM + '"/>');
    o.push('<defs><linearGradient id="apKnotA" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#A67C47"/><stop offset="1" stop-color="#6A4E2B"/></linearGradient></defs>');
    function braid(k) {
      var phi = k * Math.PI / 2, pts = [];
      for (var x = xb; x <= xe; x += 4) pts.push(x.toFixed(1) + ',' + (cy + A * Math.sin(2 * Math.PI * (x - xb) / lam + phi)).toFixed(1));
      return 'M' + pts.join(' L');
    }
    STRANDS.forEach(function (s, k) {
      var y1 = cy + A * Math.sin(k * Math.PI / 2);
      var d = 'M' + x0 + ',' + ys[k] + ' C' + (x0 + 70) + ',' + ys[k] + ' ' + (xb - 60) + ',' + y1.toFixed(1) + ' ' + xb + ',' + y1.toFixed(1);
      o.push('<path d="' + d + '" fill="none" stroke="' + OUTLINE + '" stroke-width="15" stroke-linecap="round" opacity="0.9"/>');
      o.push('<path d="' + d + '" fill="none" stroke="' + s.color + '" stroke-width="10.5" stroke-linecap="round"/>');
      [[-9, -16], [0, -20], [9, -16]].forEach(function (f) {
        o.push('<path d="M' + x0 + ',' + ys[k] + ' l' + f[1] + ',' + f[0] + '" stroke="' + s.color + '" stroke-width="4" stroke-linecap="round" fill="none"/>');
      });
      o.push('<text x="' + (x0 - 30) + '" y="' + (ys[k] + 8) + '" text-anchor="end" font-family="' + FONT + '" font-size="24" fill="' + INK + '">' + s.name + '</text>');
    });
    STRANDS.forEach(function (s, k) { o.push('<path d="' + braid(k) + '" fill="none" stroke="' + OUTLINE + '" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>'); });
    STRANDS.forEach(function (s, k) { o.push('<path d="' + braid(k) + '" fill="none" stroke="' + s.color + '" stroke-width="10.5" stroke-linecap="round" stroke-linejoin="round"/>'); });
    for (var i = 0; i < 8; i++) {
      var kx = 372 + i * 82, n = i + 1;
      if (n <= tied) {
        o.push('<ellipse cx="' + kx + '" cy="' + cy + '" rx="16" ry="20" fill="url(#apKnotA)" stroke="' + OUTLINE + '" stroke-width="3"/>');
        o.push('<path d="M' + (kx - 13) + ',' + (cy - 9) + ' q13,6 26,0 M' + (kx - 14) + ',' + (cy + 2) + ' q14,7 28,0 M' + (kx - 10) + ',' + (cy + 11) + ' q10,5 20,0" fill="none" stroke="' + OUTLINE + '" stroke-width="2" opacity="0.7"/>');
        o.push('<path d="M' + (kx - 9) + ',' + (cy - 12) + ' q9,-5 18,0" fill="none" stroke="#FFF4DC" stroke-width="2.5" opacity="0.6"/>');
        o.push('<text x="' + kx + '" y="' + (cy + 52) + '" text-anchor="middle" font-family="' + FONT + '" font-size="22" fill="' + INK + '">' + n + '</text>');
      } else {
        o.push('<circle cx="' + kx + '" cy="' + cy + '" r="18" fill="none" stroke="' + MUTED + '" stroke-width="2.5" stroke-dasharray="5 5"/>');
        o.push('<text x="' + kx + '" y="' + (cy + 52) + '" text-anchor="middle" font-family="' + FONT + '" font-size="22" fill="' + MUTED + '">' + n + '</text>');
      }
    }
    o.push('</svg>');
    return o.join('\n');
  }

  function hanging(tied) {
    var W = 390, H = 640, cx = 170, A = 9, lam = 90, y0 = 78, yb = 190, ye = 615;
    var xs = [62, 134, 206, 278], o = [];
    o.push('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + ' ' + H + '" width="100%" role="img" aria-label="' + ARIA + '">');
    o.push('<rect width="' + W + '" height="' + H + '" fill="' + CREAM + '"/>');
    o.push('<defs><linearGradient id="apKnotH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#A67C47"/><stop offset="1" stop-color="#6A4E2B"/></linearGradient></defs>');
    function braid(k) {
      var phi = k * Math.PI / 2, pts = [];
      for (var y = yb; y <= ye; y += 4) pts.push((cx + A * Math.sin(2 * Math.PI * (y - yb) / lam + phi)).toFixed(1) + ',' + y.toFixed(1));
      return 'M' + pts.join(' L');
    }
    STRANDS.forEach(function (s, k) {
      var x1 = (cx + A * Math.sin(k * Math.PI / 2)).toFixed(1);
      var d = 'M' + xs[k] + ',' + y0 + ' C' + xs[k] + ',' + (y0 + 55) + ' ' + x1 + ',' + (yb - 50) + ' ' + x1 + ',' + yb;
      o.push('<path d="' + d + '" fill="none" stroke="' + OUTLINE + '" stroke-width="14" stroke-linecap="round" opacity="0.9"/>');
      o.push('<path d="' + d + '" fill="none" stroke="' + s.color + '" stroke-width="9.5" stroke-linecap="round"/>');
      [[-8, -14], [0, -17], [8, -14]].forEach(function (f) {
        o.push('<path d="M' + xs[k] + ',' + y0 + ' l' + f[0] + ',' + f[1] + '" stroke="' + s.color + '" stroke-width="3.5" stroke-linecap="round" fill="none"/>');
      });
      o.push('<text x="' + xs[k] + '" y="' + (k % 2 === 0 ? 30 : 50) + '" text-anchor="middle" font-family="' + FONT + '" font-size="17" fill="' + INK + '">' + s.name + '</text>');
    });
    STRANDS.forEach(function (s, k) { o.push('<path d="' + braid(k) + '" fill="none" stroke="' + OUTLINE + '" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>'); });
    STRANDS.forEach(function (s, k) { o.push('<path d="' + braid(k) + '" fill="none" stroke="' + s.color + '" stroke-width="9.5" stroke-linecap="round" stroke-linejoin="round"/>'); });
    for (var i = 0; i < 8; i++) {
      var ky = 222 + i * 54, n = i + 1;
      if (n <= tied) {
        o.push('<ellipse cx="' + cx + '" cy="' + ky + '" rx="18" ry="15" fill="url(#apKnotH)" stroke="' + OUTLINE + '" stroke-width="2.5"/>');
        o.push('<path d="M' + (cx - 8) + ',' + (ky - 11) + ' q6,11 0,22 M' + (cx + 2) + ',' + (ky - 12) + ' q7,12 0,24 M' + (cx + 11) + ',' + (ky - 9) + ' q5,9 0,18" fill="none" stroke="' + OUTLINE + '" stroke-width="1.8" opacity="0.7"/>');
        o.push('<text x="' + (cx + 42) + '" y="' + (ky + 6) + '" font-family="' + FONT + '" font-size="17" fill="' + INK + '">' + n + '</text>');
      } else {
        o.push('<circle cx="' + cx + '" cy="' + ky + '" r="15" fill="none" stroke="' + MUTED + '" stroke-width="2" stroke-dasharray="4 4"/>');
        o.push('<text x="' + (cx + 42) + '" y="' + (ky + 6) + '" font-family="' + FONT + '" font-size="17" fill="' + MUTED + '">' + n + '</text>');
      }
    }
    o.push('</svg>');
    return o.join('\n');
  }

  var APCord = {
    version: 'AP-CORD v1',
    strands: STRANDS,
    svg: function (opt) { opt = opt || {}; var t = clamp(opt.tied == null ? 8 : opt.tied); return opt.hanging ? hanging(t) : across(t); },
    render: function (el, opt) { if (!el) return; opt = opt || {}; if (opt.hanging == null) opt.hanging = w.innerWidth < 500; el.innerHTML = APCord.svg(opt); },
    line: function (tied) { tied = clamp(tied); var words = ['No', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight'];
      if (tied === 0) return 'No knots yet. Week 1 is first.';
      if (tied === 8) return 'Eight knots tied. The cord is whole.';
      return words[tied] + (tied === 1 ? ' knot' : ' knots') + ' tied. Week ' + (tied + 1) + ' is next.'; }
  };
  w.APCord = APCord;
})(window);
