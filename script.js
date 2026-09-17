
  // ============ AYARLAR — buradan düzenle ============
  const WHATSAPP_NUMBER = "49XXXXXXXXXX"; // örn: "491701234567"

  // ============ ARAÇ / MALZEME LİSTESİ ============
  const machines = [
    { name:"John Deere Aufsitzmäher (Z-Serie)", category:"pflege", type:"kauf", price:"Preis auf Anfrage", specs:"Gebraucht · Zero-Turn · Profi-Mähwerk", image:"images/product1.jpg", used:true },
    { name:"Profi-Freiflächenmäher", category:"pflege", type:"kauf", price:"Preis auf Anfrage", specs:"Gebraucht · Frontmähwerk · für große Flächen", image:"images/product2.jpg", used:true },
    { name:"Kogo Tec Flächenkehrmaschine", category:"pflege", type:"kauf", price:"Preis auf Anfrage", specs:"Gebraucht · Anbau-Kehreinheit", image:"images/product3.jpg", used:true },
  ];

  // ============ ÇEVİRİLER ============
  const i18n = {
    de: {
      nav_angebot:"Angebot", nav_fahrzeuge:"Fahrzeuge", nav_service:"Service", nav_kontakt:"Kontakt", nav_wa:"WhatsApp",
      hero_eyebrow:"Landschaftsbau & Maschinentechnik",
      hero_h1_1:"Geräte & Maschinen für ", hero_h1_em:"den Platz, den Sie bearbeiten.",
      hero_lead:"GroundEx beliefert Landschaftsbauer, Kommunen und Handwerksbetriebe mit Pflegetechnik zum Kauf — und stellt schwere Maschinen für den Einsatz bereit, wenn Sie sie brauchen.",
      hero_cta1:"Fahrzeuge ansehen", hero_cta2:"Direkt per WhatsApp anfragen",
      tagline:"Garantie für Qualität und Zuverlässigkeit",
      stat1_label:"Sprachen · DE / TR / EN", stat2_label:"Antwortzeit auf WhatsApp", stat3_label:"Kommunen & Betriebe", stat4_num:"DE", stat4_label:"Lieferung & Abholung",
      svc1_num:"01 / Verkauf", svc1_title:"Verkauf", svc1_desc:"Geprüfte Baumaschinen, Nutzfahrzeuge und Arbeitsgeräte zum Kauf — mit klaren Angaben zu Zustand, Baujahr und Betriebsstunden.",
      svc2_num:"02 / Vermietung", svc2_title:"Vermietung", svc2_desc:"Kurzfristig oder projektbezogen mieten, ohne Kapital zu binden. Flexible Zeiträume, transparente Preise.",
      svc3_num:"03 / Service", svc3_title:"Reparatur & Wartung", svc3_desc:"Eigene Werkstatt für Reparatur, Wartung und Instandsetzung — auch für Maschinen, die nicht bei uns gekauft wurden.",
      fz_eyebrow:"Bestand", fz_title:"Fahrzeuge & Maschinen",
      fz_note:"Ausgewählte gebrauchte Maschinen aus unserem Bestand — weitere Fahrzeuge werden laufend ergänzt.",
      process_eyebrow:"Ablauf", process_title:"So einfach geht's",
      step1_title:"Anfrage senden", step1_desc:"Fahrzeug oder Maschine auswählen und über WhatsApp anfragen — mit Wunschtermin oder Zeitraum.",
      step2_title:"Besichtigung & Klärung", step2_desc:"Details, Zustand und Preis werden persönlich oder telefonisch geklärt, Kauf oder Miete wird fixiert.",
      step3_title:"Übergabe & Nutzung", step3_desc:"Fahrzeug wird übergeben — bei Bedarf inklusive Einweisung. Unsere Werkstatt bleibt danach für Sie erreichbar.",
      why_title:"Warum GroundEx", why_lead:"Wir kennen die Maschinen, die wir verkaufen und vermieten — weil wir sie auch selbst reparieren. Das gibt Ihnen ehrliche Beratung statt reiner Verkaufsgespräche.", why_cta:"Jetzt anfragen",
      why1_title:"Verkauf & Vermietung aus einer Hand", why1_desc:"Ob Kauf oder flexible Miete — wir finden die passende Lösung für Ihr Projekt.",
      why2_title:"Eigene Werkstatt", why2_desc:"Reparatur und Wartung laufen bei uns im Haus — kurze Wege, schnelle Rückmeldung.",
      why3_title:"Direkter Kontakt per WhatsApp", why3_desc:"Fragen zu einer Maschine? Einfach anschreiben — ohne Formular, ohne Umwege.",
      faq_eyebrow:"Fragen", faq_title:"Häufig gefragt",
      faq1_q:"Kann ich eine Maschine erst mieten und später kaufen?", faq1_a:"Ja, sprechen Sie uns einfach darauf an — wir prüfen gemeinsam, ob eine Anrechnung der Mietkosten möglich ist.",
      faq2_q:"Übernehmen Sie auch Reparaturen an Maschinen, die nicht von GroundEx sind?", faq2_a:"Ja, unsere Werkstatt repariert und wartet auch Fremdmaschinen und Fahrzeuge.",
      faq3_q:"Wie schnell bekomme ich eine Antwort auf WhatsApp?", faq3_a:"In der Regel innerhalb weniger Stunden während unserer Geschäftszeiten.",
      faq4_q:"Liefern Sie Maschinen auch an?", faq4_a:"Je nach Standort und Maschine ist eine Lieferung möglich — fragen Sie einfach bei der Anfrage danach.",
      testi_eyebrow:"Stimmen", testi_title:"Kundenstimmen", testi_tag:"Beispiel",
      testi_note:"Diese Beispiele zeigen, wie Bewertungen hier aussehen werden — echte Kundenstimmen ersetzen sie, sobald verfügbar.",
      testi1_text:"So könnte eine echte Bewertung aussehen: kurz, ehrlich, mit konkretem Bezug zur Maschine oder zum Service.", testi1_author:"Platzhalter-Name", testi1_role:"Landschaftsbau-Betrieb",
      testi2_text:"Beispieltext für eine Bewertung zur Vermietung — wird durch echtes Kundenfeedback ersetzt.", testi2_author:"Platzhalter-Name", testi2_role:"Kommunaler Betrieb",
      testi3_text:"Beispieltext für eine Bewertung zum Reparaturservice — wird durch echtes Kundenfeedback ersetzt.", testi3_author:"Platzhalter-Name", testi3_role:"Handwerksbetrieb",
      contact_title:"Fragen zu einer Maschine?", contact_lead:"Schreiben Sie uns direkt über WhatsApp — mit Fahrzeugname, und wir melden uns kurzfristig zurück.", contact_btn:"WhatsApp öffnen",
      addr_label:"Adresse", contact_label:"Kontakt", hours_label:"Erreichbarkeit", hours_value:"Mo–Fr: 08:00–17:00 · Sa: nach Vereinbarung",
      footer_text:"Baumaschinen & Fahrzeuge: Verkauf, Vermietung, Service.",
      footer_impressum:"Impressum", footer_datenschutz:"Datenschutz", footer_agb:"AGB",
      legal_warning:"Platzhalter — vor Live-Schaltung mit echten Firmendaten ersetzen (gesetzlich vorgeschrieben nach § 5 TMG).",
      legal_represented:"Vertreten durch", legal_register:"Handelsregister", legal_vat:"USt-IdNr.",
      legal_warning_dsgvo:"Platzhalter — vor Live-Schaltung durch eine vollständige, rechtsgeprüfte Datenschutzerklärung ersetzen (DSGVO).",
      legal_dsgvo_body:"Diese Website verarbeitet grundsätzlich keine personenbezogenen Daten über Formulare. Kontaktaufnahmen erfolgen freiwillig per WhatsApp, Telefon oder E-Mail. Details zu Cookies, eingebundenen Diensten (z. B. Google Fonts) und Ihren Rechten nach DSGVO folgen hier in der finalen Fassung.",
      cat_all:"Alle", cat_baumaschinen:"Baumaschinen", cat_fahrzeuge:"Fahrzeuge", cat_werkzeuge:"Werkzeuge", cat_pflege:"Pflegetechnik",
      type_kauf:"Kauf", type_miete:"Miete", type_kauf_miete:"Kauf & Miete",
      badge_example:"BEISPIEL", badge_used:"Gebraucht", detail_btn:"Anfragen →",
      wa_default:"Merhaba, GroundEx web sitesi üzerinden yazıyorum.",
      wa_inquiry:(n)=>`Hallo, ich interessiere mich für: ${n}`,
    },
    tr: {
      nav_angebot:"Hizmetler", nav_fahrzeuge:"Araçlar", nav_service:"Süreç", nav_kontakt:"İletişim", nav_wa:"WhatsApp",
      hero_eyebrow:"Peyzaj & Makine Teknolojisi",
      hero_h1_1:"Sahanız için ", hero_h1_em:"doğru makine ve ekipman.",
      hero_lead:"GroundEx; peyzajcılara, belediyelere ve zanaat işletmelerine bakım ekipmanları satar — ihtiyaç duyduğunuzda ağır makineleri de kiralık olarak hazır tutar.",
      hero_cta1:"Araçları incele", hero_cta2:"WhatsApp'tan hemen sor",
      tagline:"Kalite ve güvenilirlik garantisi",
      stat1_label:"Dil · DE / TR / EN", stat2_label:"WhatsApp yanıt süresi", stat3_label:"Belediye & işletmeler", stat4_num:"DE", stat4_label:"Teslimat & teslim alma",
      svc1_num:"01 / Satış", svc1_title:"Satış", svc1_desc:"Kontrolden geçmiş iş makineleri, araçlar ve ekipmanlar — durum, model yılı ve çalışma saatleri net şekilde belirtilir.",
      svc2_num:"02 / Kiralama", svc2_title:"Kiralama", svc2_desc:"Kısa süreli veya proje bazlı kiralama, sermayenizi bağlamadan. Esnek süreler, şeffaf fiyatlandırma.",
      svc3_num:"03 / Servis", svc3_title:"Tamir & Bakım", svc3_desc:"Kendi atölyemizde tamir, bakım ve onarım — bizden alınmamış makineler için de geçerlidir.",
      fz_eyebrow:"Envanter", fz_title:"Araçlar & Makineler",
      fz_note:"Envanterimizden seçilmiş ikinci el makineler — yeni ürünler düzenli olarak eklenmektedir.",
      process_eyebrow:"Nasıl çalışır", process_title:"Bu kadar basit",
      step1_title:"Talep gönder", step1_desc:"Aracı veya makineyi seç, WhatsApp üzerinden istediğin tarih ya da süreyle birlikte ulaş.",
      step2_title:"Görüşme & netleştirme", step2_desc:"Detaylar, durum ve fiyat telefonda ya da yüz yüze netleştirilir, satış veya kiralama karara bağlanır.",
      step3_title:"Teslim & kullanım", step3_desc:"Araç teslim edilir — gerekirse kullanım bilgisi verilir. Sonrasında atölyemiz her zaman ulaşılabilir.",
      why_title:"Neden GroundEx", why_lead:"Sattığımız ve kiraladığımız makineleri iyi tanıyoruz — çünkü onları biz tamir de ediyoruz. Bu da size sadece satış değil, dürüst bir danışmanlık sunar.", why_cta:"Hemen sor",
      why1_title:"Satış & kiralama tek elden", why1_desc:"İster satın alma ister esnek kiralama — projenize uygun çözümü birlikte buluruz.",
      why2_title:"Kendi atölyemiz", why2_desc:"Tamir ve bakım bizde, kendi çatımız altında yapılır — kısa süreçler, hızlı geri dönüş.",
      why3_title:"WhatsApp'tan doğrudan iletişim", why3_desc:"Bir makine hakkında sorun mu var? Form doldurmadan, direkt yazabilirsiniz.",
      faq_eyebrow:"Sorular", faq_title:"Sıkça sorulanlar",
      faq1_q:"Bir makineyi önce kiralayıp sonra satın alabilir miyim?", faq1_a:"Evet, bizimle iletişime geçin — kira bedelinin satış fiyatından düşülüp düşülemeyeceğine birlikte bakarız.",
      faq2_q:"GroundEx'e ait olmayan makinelerin tamirini de yapıyor musunuz?", faq2_a:"Evet, atölyemiz başka firmalardan alınmış makine ve araçların da tamir ve bakımını yapar.",
      faq3_q:"WhatsApp'a ne kadar sürede dönüş yapıyorsunuz?", faq3_a:"Genellikle çalışma saatleri içinde birkaç saat içinde dönüş yapıyoruz.",
      faq4_q:"Makine teslimatı yapıyor musunuz?", faq4_a:"Konuma ve makineye göre teslimat mümkün olabilir — talep sırasında bunu belirtmeniz yeterli.",
      testi_eyebrow:"Görüşler", testi_title:"Müşteri Yorumları", testi_tag:"Örnek",
      testi_note:"Bu örnekler yorumların burada nasıl görüneceğini gösteriyor — gerçek müşteri yorumları geldikçe bunların yerine eklenecek.",
      testi1_text:"Gerçek bir yorum böyle görünebilir: kısa, samimi, makine veya hizmetle ilgili somut bir detay içeren.", testi1_author:"Yer Tutucu İsim", testi1_role:"Peyzaj İşletmesi",
      testi2_text:"Kiralama hakkında örnek bir yorum metni — gerçek müşteri geri bildirimiyle değiştirilecek.", testi2_author:"Yer Tutucu İsim", testi2_role:"Belediye İşletmesi",
      testi3_text:"Tamir servisi hakkında örnek bir yorum metni — gerçek müşteri geri bildirimiyle değiştirilecek.", testi3_author:"Yer Tutucu İsim", testi3_role:"Zanaat İşletmesi",
      contact_title:"Bir makine hakkında sorunuz mu var?", contact_lead:"Bize doğrudan WhatsApp'tan yazın — araç adını belirtin, kısa sürede size dönüş yapalım.", contact_btn:"WhatsApp'ı aç",
      addr_label:"Adres", contact_label:"İletişim", hours_label:"Çalışma saatleri", hours_value:"Pzt–Cuma: 08:00–17:00 · Cumartesi: randevu ile",
      footer_text:"İş makineleri & araçlar: satış, kiralama, servis.",
      footer_impressum:"Yasal Bilgiler (Impressum)", footer_datenschutz:"Gizlilik Politikası", footer_agb:"Kullanım Koşulları",
      legal_warning:"Bu bir yer tutucudur — site yayına alınmadan önce gerçek firma bilgileriyle değiştirilmeli (Almanya'da § 5 TMG gereği zorunludur).",
      legal_represented:"Yetkili temsilci", legal_register:"Ticaret sicil no", legal_vat:"KDV no",
      legal_warning_dsgvo:"Bu bir yer tutucudur — site yayına alınmadan önce eksiksiz, hukuki olarak kontrol edilmiş bir gizlilik metniyle değiştirilmeli (KVKK/DSGVO).",
      legal_dsgvo_body:"Bu web sitesi form yoluyla kişisel veri toplamaz. İletişim WhatsApp, telefon veya e-posta üzerinden gönüllü olarak kurulur. Çerezler, kullanılan servisler (örn. Google Fonts) ve haklarınıza dair detaylar sitenin nihai sürümünde burada yer alacaktır.",
      cat_all:"Tümü", cat_baumaschinen:"İş Makineleri", cat_fahrzeuge:"Araçlar", cat_werkzeuge:"Ekipmanlar", cat_pflege:"Bakım Ekipmanları",
      type_kauf:"Satılık", type_miete:"Kiralık", type_kauf_miete:"Satılık & Kiralık",
      badge_example:"ÖRNEK", badge_used:"İkinci El", detail_btn:"Sor →",
      wa_default:"Merhaba, GroundEx web sitesi üzerinden yazıyorum.",
      wa_inquiry:(n)=>`Merhaba, şununla ilgileniyorum: ${n}`,
    },
    en: {
      nav_angebot:"Services", nav_fahrzeuge:"Vehicles", nav_service:"Process", nav_kontakt:"Contact", nav_wa:"WhatsApp",
      hero_eyebrow:"Landscaping & Machine Technology",
      hero_h1_1:"Equipment & machines for ", hero_h1_em:"the ground you work.",
      hero_lead:"GroundEx supplies landscapers, municipalities and trade businesses with grounds care equipment — and keeps heavy machinery ready to rent when you need it.",
      hero_cta1:"View vehicles", hero_cta2:"Ask directly on WhatsApp",
      tagline:"Guaranteed quality and reliability",
      stat1_label:"Languages · DE / TR / EN", stat2_label:"Response time on WhatsApp", stat3_label:"Municipalities & businesses", stat4_num:"DE", stat4_label:"Delivery & pickup",
      svc1_num:"01 / Sale", svc1_title:"Sale", svc1_desc:"Inspected construction machinery, vehicles and equipment for sale — with clear details on condition, year and operating hours.",
      svc2_num:"02 / Rental", svc2_title:"Rental", svc2_desc:"Rent short-term or per project without tying up capital. Flexible periods, transparent pricing.",
      svc3_num:"03 / Service", svc3_title:"Repair & Maintenance", svc3_desc:"Our own workshop handles repair, maintenance and servicing — including machines not purchased from us.",
      fz_eyebrow:"Inventory", fz_title:"Vehicles & Machines",
      fz_note:"Selected used machinery from our current inventory — more items are added regularly.",
      process_eyebrow:"How it works", process_title:"It's this simple",
      step1_title:"Send an inquiry", step1_desc:"Pick a vehicle or machine and reach out on WhatsApp with your preferred date or rental period.",
      step2_title:"Viewing & details", step2_desc:"Condition and price are clarified in person or by phone, and the sale or rental is confirmed.",
      step3_title:"Handover & use", step3_desc:"The machine is handed over, with a briefing if needed. Our workshop stays reachable afterwards.",
      why_title:"Why GroundEx", why_lead:"We know the machines we sell and rent — because we repair them ourselves too. That means honest advice, not just a sales pitch.", why_cta:"Ask now",
      why1_title:"Sale & rental in one place", why1_desc:"Whether you buy or rent flexibly, we help find the right fit for your project.",
      why2_title:"Our own workshop", why2_desc:"Repair and maintenance happen in-house — short paths, fast responses.",
      why3_title:"Direct contact via WhatsApp", why3_desc:"Questions about a machine? Just message us — no forms, no detours.",
      faq_eyebrow:"Questions", faq_title:"Frequently asked",
      faq1_q:"Can I rent a machine first and buy it later?", faq1_a:"Yes, just ask us — we'll check together whether rental costs can be credited toward a purchase.",
      faq2_q:"Do you repair machines not bought from GroundEx?", faq2_a:"Yes, our workshop also repairs and services machines and vehicles from other providers.",
      faq3_q:"How fast do you reply on WhatsApp?", faq3_a:"Usually within a few hours during business hours.",
      faq4_q:"Do you deliver machines?", faq4_a:"Depending on location and machine, delivery may be possible — just ask when you inquire.",
      testi_eyebrow:"Reviews", testi_title:"Customer Reviews", testi_tag:"Example",
      testi_note:"These examples show how reviews will look here — real customer reviews will replace them once available.",
      testi1_text:"This is what a real review might look like: short, honest, with a concrete detail about the machine or service.", testi1_author:"Placeholder Name", testi1_role:"Landscaping Company",
      testi2_text:"Example review text about a rental — will be replaced with real customer feedback.", testi2_author:"Placeholder Name", testi2_role:"Municipal Business",
      testi3_text:"Example review text about repair service — will be replaced with real customer feedback.", testi3_author:"Placeholder Name", testi3_role:"Trade Business",
      contact_title:"Questions about a machine?", contact_lead:"Message us directly on WhatsApp — include the vehicle name and we'll get back to you shortly.", contact_btn:"Open WhatsApp",
      addr_label:"Address", contact_label:"Contact", hours_label:"Hours", hours_value:"Mon–Fri: 8am–5pm · Sat: by appointment",
      footer_text:"Construction machinery & vehicles: sale, rental, service.",
      footer_impressum:"Legal Notice", footer_datenschutz:"Privacy Policy", footer_agb:"Terms",
      legal_warning:"Placeholder — replace with real company details before going live (legally required in Germany under § 5 TMG).",
      legal_represented:"Represented by", legal_register:"Commercial register", legal_vat:"VAT ID",
      legal_warning_dsgvo:"Placeholder — replace with a complete, legally reviewed privacy policy before going live (GDPR).",
      legal_dsgvo_body:"This website does not collect personal data through forms. Contact is made voluntarily via WhatsApp, phone or email. Details on cookies, embedded services (e.g. Google Fonts) and your rights under GDPR will appear here in the final version.",
      cat_all:"All", cat_baumaschinen:"Machinery", cat_fahrzeuge:"Vehicles", cat_werkzeuge:"Equipment", cat_pflege:"Grounds Care",
      type_kauf:"For Sale", type_miete:"For Rent", type_kauf_miete:"Sale & Rent",
      badge_example:"SAMPLE", badge_used:"Used", detail_btn:"Inquire →",
      wa_default:"Hello, I'm reaching out via the GroundEx website.",
      wa_inquiry:(n)=>`Hi, I'm interested in: ${n}`,
    }
  };

  let currentLang = "de";
  const icon = `<svg class="icon" viewBox="0 0 48 48" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="4" y="24" width="18" height="12" rx="1"></rect>
      <path d="M22 24h10l8 8v4H22z"></path>
      <circle cx="12" cy="38" r="4"></circle>
      <circle cx="34" cy="38" r="4"></circle>
    </svg>`;

  function waLink(message){ return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`; }

  function escapeHtml(str){
    return String(str).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  }

  function applyStaticText(){
    const t = i18n[currentLang];
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key = el.getAttribute("data-i18n");
      if(t[key] !== undefined) el.textContent = t[key];
    });
    document.getElementById("wa-nav").href = waLink(t.wa_default);
    document.getElementById("wa-hero").href = waLink(t.wa_default);
    document.getElementById("wa-contact").href = waLink(t.wa_default);
    document.getElementById("wa-float").href = waLink(t.wa_default);
    document.querySelectorAll(".lang-btn").forEach(b=>b.classList.toggle("active", b.dataset.lang===currentLang));
  }

  const categories = ["all","baumaschinen","fahrzeuge","werkzeuge","pflege"];
  let activeCategory = "all";
  const grid = document.getElementById("machine-grid");
  const filterBar = document.getElementById("filters");

  function renderFilters(){
    const t = i18n[currentLang];
    filterBar.innerHTML = "";
    const labels = {all:t.cat_all, baumaschinen:t.cat_baumaschinen, fahrzeuge:t.cat_fahrzeuge, werkzeuge:t.cat_werkzeuge, pflege:t.cat_pflege};
    categories.forEach(cat=>{
      const btn = document.createElement("button");
      btn.className = "filter-btn" + (cat===activeCategory ? " active" : "");
      btn.textContent = labels[cat];
      btn.onclick = ()=>{ activeCategory = cat; renderFilters(); renderCards(); };
      filterBar.appendChild(btn);
    });
  }

  function renderCards(){
    const t = i18n[currentLang];
    const typeLabels = {kauf:t.type_kauf, miete:t.type_miete, kauf_miete:t.type_kauf_miete};
    const catLabels = {baumaschinen:t.cat_baumaschinen, fahrzeuge:t.cat_fahrzeuge, werkzeuge:t.cat_werkzeuge, pflege:t.cat_pflege};
    grid.innerHTML = "";
    machines
      .filter(m => activeCategory==="all" || m.category===activeCategory)
      .forEach(m=>{
        const card = document.createElement("div");
        card.className = "card reveal";
        card.innerHTML = `
          <div class="card-media">
            ${m.image ? `<img src="${m.image}" alt="${escapeHtml(m.name)}">` : icon}
            <span class="badge">${typeLabels[m.type]}</span>
            ${m.used ? `<span class="badge example">${t.badge_used}</span>` : ""}
          </div>
          <div class="card-body">
            <h3>${escapeHtml(m.name)}</h3>
            <div class="specs mono">${escapeHtml(m.specs)}</div>
          </div>
          <div class="card-footer">
            <div class="price">${escapeHtml(m.price)}<br><small>${catLabels[m.category]}</small></div>
            <a class="detail-btn" href="${waLink(t.wa_inquiry(m.name))}" target="_blank" rel="noopener noreferrer">${t.detail_btn}</a>
          </div>
        `;
        grid.appendChild(card);
      });
    observeReveals();
  }

  function renderFaq(){
    const t = i18n[currentLang];
    const list = document.getElementById("faq-list");
    list.innerHTML = "";
    for(let i=1;i<=4;i++){
      const item = document.createElement("div");
      item.className = "faq-item";
      item.innerHTML = `
        <button class="faq-q">${t["faq"+i+"_q"]}<span class="plus">+</span></button>
        <div class="faq-a"><p>${t["faq"+i+"_a"]}</p></div>
      `;
      const btn = item.querySelector(".faq-q");
      const ans = item.querySelector(".faq-a");
      btn.onclick = ()=>{
        const isOpen = item.classList.contains("open");
        document.querySelectorAll(".faq-item").forEach(fi=>{fi.classList.remove("open"); fi.querySelector(".faq-a").style.maxHeight = null;});
        if(!isOpen){ item.classList.add("open"); ans.style.maxHeight = ans.scrollHeight + "px"; }
      };
      list.appendChild(item);
    }
  }

  function renderTestimonials(){
    const t = i18n[currentLang];
    const list = document.getElementById("testi-list");
    if(!list) return;
    list.innerHTML = "";
    for(let i=1;i<=3;i++){
      const card = document.createElement("div");
      card.className = "testi-card reveal";
      card.innerHTML = `
        <span class="testi-tag">${t.testi_tag}</span>
        <div class="testi-stars">★★★★★</div>
        <p class="testi-text">${escapeHtml(t["testi"+i+"_text"])}</p>
        <div class="testi-author">${escapeHtml(t["testi"+i+"_author"])}</div>
        <div class="testi-role">${escapeHtml(t["testi"+i+"_role"])}</div>
      `;
      list.appendChild(card);
    }
    observeReveals();
  }

  function animateCount(el, targetText){
    const match = targetText.match(/^(\d+)(.*)$/);
    if(!match){ el.textContent = targetText; return; }
    const target = parseInt(match[1], 10);
    const suffix = match[2] || "";
    const duration = 900;
    const start = performance.now();
    function tick(now){
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      el.textContent = current + suffix;
      if(progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function observeStatCounters(){
    const stats = document.querySelectorAll(".stat-num[data-count]");
    if(!stats.length) return;
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          animateCount(e.target, e.target.getAttribute("data-count"));
          io.unobserve(e.target);
        }
      });
    }, {threshold:0.4});
    stats.forEach(el=>io.observe(el));
  }

  function setLang(lang){
    currentLang = lang;
    applyStaticText();
    renderFilters();
    renderCards();
    renderFaq();
    renderTestimonials();
  }

  document.querySelectorAll(".lang-btn").forEach(btn=>{
    btn.addEventListener("click", ()=> setLang(btn.dataset.lang));
  });

  function observeReveals(){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in-view"); io.unobserve(e.target); } });
    }, {threshold:0.15});
    document.querySelectorAll(".reveal:not(.in-view)").forEach(el=>io.observe(el));
  }

  setLang("de");
  observeReveals();
  observeStatCounters();

  // SHATTER / REASSEMBLE KEPÇE ANİMASYONU — scroll ile parçalanır, geri kaydırınca birleşir
  function updateShatter(){
    const rig = document.getElementById("shatter-rig");
    const hero = document.getElementById("top");
    if(!rig || !hero) return;
    const heroHeight = hero.offsetHeight || 600;
    const progress = Math.min(Math.max(window.scrollY / heroHeight, 0), 1);
    const p1 = rig.querySelector(".piece-1");
    const p2 = rig.querySelector(".piece-2");
    const p3 = rig.querySelector(".piece-3");
    const spread = 160 * progress;
    const rot = 28 * progress;
    p1.style.transform = `translate(${-spread}px, ${-spread*0.65}px) rotate(${-rot}deg)`;
    p2.style.transform = `translate(0px, ${spread*0.95}px) rotate(${rot*0.35}deg)`;
    p3.style.transform = `translate(${spread}px, ${-spread*0.55}px) rotate(${rot}deg)`;
    rig.style.opacity = String(0.5 - progress*0.4);
  }
  window.addEventListener("scroll", updateShatter, {passive:true});
  window.addEventListener("resize", updateShatter);
  updateShatter();
