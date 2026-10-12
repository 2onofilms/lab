/* 2ONO Lab · tiny helpers, no dependencies */
(function () {
  // Copy buttons on .code blocks
  document.querySelectorAll('.code').forEach(function (box) {
    var btn = box.querySelector('button');
    var pre = box.querySelector('pre');
    if (!btn || !pre) return;
    btn.addEventListener('click', function () {
      var text = pre.innerText;
      var ok = function () {
        btn.textContent = 'Copied';
        btn.classList.add('done');
        setTimeout(function () { btn.textContent = 'Copy'; btn.classList.remove('done'); }, 1800);
      };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(ok, fallback);
      } else { fallback(); }
      function fallback() {
        var r = document.createRange(); r.selectNodeContents(pre);
        var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
        try { document.execCommand('copy'); ok(); } catch (e) {}
        s.removeAllRanges();
      }
    });
  });

  // Reduced motion: do not autoplay looping videos
  var rm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (rm) {
    document.querySelectorAll('video[autoplay]').forEach(function (v) {
      v.removeAttribute('autoplay'); v.pause(); v.controls = true;
    });
  }
})();
