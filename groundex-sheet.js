/* GroundEx – Önbellek Kırıcı & Zorunlu Yükleyici */
(function(){
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

  // Rastgele sayı ekleyerek önbelleği kırıyoruz (cache-buster)
  var randomVersion = new Date().getTime();

  fetch(SHEET_CSV_URL + "&v=" + randomVersion)
    .then(function(r){ return r.text(); })
    .then(function(text){
      var rows = parseCSV(text);
      if(rows.length < 2) return;

      var items = [];
      for(var i = 1; i < rows.length; i++){
        var r = rows[i];
        if(!r[0]) continue;

        var imgName = (r[5] || "").split(',')[0].trim();
        var imgPath = imgName ? "images/" + imgName.replace(/^images\//i, '') : "images/placeholder.jpg";

        items.push({
          name: r[0].trim(),
          category: (r[1] || "pflege").trim().toLowerCase(),
          type: (r[2] || "kauf").trim().toLowerCase(),
          price: (r[3] || "Preis auf Anfrage").trim(),
          specs: (r[4] || "").trim(),
          image: imgPath,
          images: [imgPath],
          used: true
        });
      }

      if(!items.length) return;

      // Sitedeki orijinal machines dizisini ezip sıfırdan dolduruyoruz
      if(typeof machines !== "undefined"){
        machines.length = 0;
        for(var k = 0; k < items.length; k++){
          machines.push(items[k]);
        }
      }

      // Filtreyi 'all' yapıp kartları çizdiriyoruz
      window.activeCategory = "all";
      if(typeof renderFilters === "function") renderFilters();
      if(typeof renderCards === "function") renderCards();
    })
    .catch(function(e){ console.error("Sheet hatasi:", e); });
})();
