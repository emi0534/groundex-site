/* GroundEx – Ek animasyonlar. index.html içindeki mevcut koda dokunmaz. */
(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 1) Kaydırma ilerleme çubuğu */
  var bar = document.createElement('div'); bar.className = 'gx-progress'; document.body.appendChild(bar);
  function onScroll(){
    var h = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = 'scaleX(' + (h > 0 ? scrollY / h : 0) + ')';
  }
  addEventListener('scroll', onScroll, {passive:true}); onScroll();

  /* 2) Tehlike şeridinde ilerleyen ekskavatör */
  var stripe = document.querySelector('.stripe');
  if(stripe && !reduce){
    stripe.style.position = 'relative';
    var d = document.createElement('div'); d.className = 'gx-digger';
    d.innerHTML = '<svg viewBox="0 0 64 40" aria-hidden="true">' +
      '<g fill="#f2b705" stroke="#1c1f1e" stroke-width="1.6" stroke-linejoin="round">' +
      '<rect x="6" y="26" width="40" height="8" rx="4" fill="#1c1f1e"/>' +
      '<rect x="10" y="14" width="22" height="13" rx="2"/><rect x="14" y="16" width="8" height="7" fill="#9fc5d6"/>' +
      '<g class="arm"><path d="M30 18 L48 8 L54 12 L36 24Z"/><path d="M50 9 L60 20 L54 24 L46 13Z" fill="#e8590c"/></g></g>' +
      '<circle cx="14" cy="30" r="2.4" fill="#f2b705"/><circle cx="38" cy="30" r="2.4" fill="#f2b705"/></svg>';
    stripe.appendChild(d);
  }

  /* 3) Hero altına akan bant */
  var hero = document.getElementById('top');
  if(hero){
    var words = ['Verkauf','Vermietung','Reparatur','Wartung','Pflegetechnik','Direkt per WhatsApp'];
    var row = words.map(function(w){return '<span>'+w+'</span>';}).join('');
    var t = document.createElement('div'); t.className = 'gx-ticker'; t.setAttribute('aria-hidden','true');
    t.innerHTML = '<div class="gx-ticker-track">' + row + row + row + row + '</div>';
    hero.insertAdjacentElement('afterend', t);

    /* 4) Fareyi izleyen ışık */
    var spot = document.createElement('div'); spot.className = 'gx-spot';
    hero.insertBefore(spot, hero.firstChild);
    if(!reduce){
      hero.addEventListener('mousemove', function(e){
        var r = hero.getBoundingClientRect();
        spot.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        spot.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    }
  }

  /* 5) Kart eğimi (kartlar dil/filtre değişince yeniden çizildiği için delegasyon kullanıyoruz) */
  var grid = document.getElementById('machine-grid');
  if(grid && !reduce){
    grid.addEventListener('mousemove', function(e){
      var c = e.target.closest('.card'); if(!c) return;
      var r = c.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      c.style.transform = 'translateY(-4px) rotateX(' + (-y * 6).toFixed(2) + 'deg) rotateY(' + (x * 7).toFixed(2) + 'deg)';
    });
    grid.addEventListener('mouseout', function(e){
      var c = e.target.closest('.card');
      if(c && !c.contains(e.relatedTarget)) c.style.transform = '';
    });
  }

  /* 6) Fotoğrafa tıklayınca büyüt */
  var lb = document.createElement('div'); lb.className = 'gx-lightbox';
  lb.innerHTML = '<button aria-label="Schließen">×</button><img alt="">';
  document.body.appendChild(lb);
  var lbImg = lb.querySelector('img');
  function close(){ lb.classList.remove('open'); }
  document.addEventListener('click', function(e){
    var img = e.target.closest('.card-media img');
    if(img){ lbImg.src = img.src; lbImg.alt = img.alt; lb.classList.add('open'); return; }
    if(lb.classList.contains('open')) close();
  });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') close(); });

  /* 7) Bölüm başlıklarının alt çizgisi görünür olunca çizilir */
  var io = new IntersectionObserver(function(es){
    es.forEach(function(x){ if(x.isIntersecting){ x.target.classList.add('in-view'); io.unobserve(x.target); } });
  }, {threshold:.3});
  document.querySelectorAll('.section-head').forEach(function(el){ io.observe(el); });
})();
