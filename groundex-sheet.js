/* GroundEx – Ürünleri Google Sheet'ten yükler.
   Sheet erişilemezse sitedeki mevcut (elle yazılmış) ürünler görünmeye devam eder. */
(function(){
  // >>> Google Sheets'ten aldığın "CSV olarak yayınla" linkini buraya yapıştır <<<
  var SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRCfV305APLIKOAu7lL2yiOJRP76kStQz7h1iUyOe-lmrwwmRx7zpZEFn6dCW7iQ_v0MQujK2ZBArpG/pub?output=csv";

  if(!/^https:\/\/docs\.google\.com\//.test(SHEET_CSV_URL)) return;

  function parseCSV(t){
    var rows = [], row = [], f = "", q = false;
    function push(){ row.push(f); f = ""; }
    function endRow(){ push(); if(row.some(function(x){ return x.trim() !== ""; })) rows.push(row); row = []; }
    for(var i = 0; i < t.length; i++){
      var c = t[i];
      if(q){
        if(c === '"'){ if(t[i+1] === '"'){ f += '"'; i++; } else q = false; }
        else f += c;
      } else if(c === '"') q = true;
      else if(c === ',') push();
      else if(c === '\n' || c === '\r'){ if(c === '\r' && t[i+1] === '\n') i++; endRow(); }
      else f += c;
    }
    endRow();
    return rows;
  }

  var yes = /^(ja|evet|yes|1|x|true|wahr)$/i, no = /^(nein|hayir|hayır|no|0|false|falsch)$/i;
  var CATS = ["baumaschinen","fahrzeuge","werkzeuge","pflege"], TYPES = ["kauf","miete","kauf_miete"];

  function cleanImage(v){
    v = (v || "").trim();
    if(!v) return "";
    if(/^https:\/\/[^\s"'<>]+$/.test(v)) return v;          // tam link
    if(/^[\w\-. ]+\.(jpe?g|png|webp)$/i.test(v)) return "images/" + v; // sadece dosya adı
    return "";
  }

  fetch(SHEET_CSV_URL)
    .then(function(r){ if(!r.ok) throw new Error(r.status); return r.text(); })
    .then(function(text){
      var rows = parseCSV(text);
      if(rows.length < 2) return;
      var head = rows[0].map(function(h){ return h.trim().toLowerCase(); });
      function col(r, name){ var i = head.indexOf(name); return i < 0 ? "" : (r[i] || "").trim(); }

      var items = [];
      rows.slice(1).forEach(function(r){
        var name = col(r, "name");
        if(!name || no.test(col(r, "aktiv"))) return;
        var cat = col(r, "kategorie").toLowerCase(), typ = col(r, "typ").toLowerCase();
        items.push({
          name: name,
          category: CATS.indexOf(cat) >= 0 ? cat : "pflege",
          type: TYPES.indexOf(typ) >= 0 ? typ : "kauf",
          price: col(r, "preis") || "Preis auf Anfrage",
          specs: col(r, "beschreibung"),
          image: cleanImage(col(r, "foto")),
          used: yes.test(col(r, "gebraucht"))
        });
      });
      if(!items.length) return;

      machines.splice.apply(machines, [0, machines.length].concat(items));
      activeCategory = "all";
      renderFilters();
      renderCards();
      var bg = document.getElementById("hero-bg");
      if(bg && items[0].image) bg.style.backgroundImage = "url(" + items[0].image + ")";
    })
    .catch(function(e){ console.warn("GroundEx: Sheet yüklenemedi, yedek liste kullanılıyor.", e); });
})();
