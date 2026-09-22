/**
 * GroundEx GmbH — Ürün Kataloğu Dosyası
 * 
 * Yeni ürün eklemek için mevcut ürün objelerinden birini kopyalayıp dizinin sonuna ekleyin.
 * 
 * Kategori Seçenekleri (category):
 * - "baumaschinen"   : Kompakt İş Makineleri & Traktörler
 * - "motorgeraete"   : Heckenschere, Freischneider, Motorlu Çapa vb.
 * - "handwerkzeuge"  : Peyzaj El Aletleri & Kürek, Tırmık vb.
 * - "arbeitskleidung": Çalışma Kıyafetleri & İş Güvenliği (PSA)
 * 
 * Satış / Kiralama Tipi (type):
 * - "kauf"       : Satılık
 * - "miete"      : Kiralık
 * - "kauf_miete" : Satılık & Kiralık
 */

const PRODUCTS = [
  // --- YÜKLENEN GÖRSELLER / ARAÇLAR ---
  {
    id: "jd-2026-pflug",
    name: "John Deere Kompakt-Traktor mit Schneepflug",
    category: "baumaschinen",
    type: "kauf_miete",
    price: "Auf Anfrage / Teklif Alın",
    specs: "Baujahr 2022 · Winterdienst-Ausrüstung · Front-Schneepflug · Allrad 4WD",
    description: "Kış hizmetleri ve peyzaj çalışmaları için hidrolik kar küreme bıçağına sahip yüksek performanslı compact traktör.",
    image: "assets/images/john-deere-schneepflug.jpg",
    featured: true,
    badge: "Kış Hizmetleri & Peyzaj"
  },
  {
    id: "branson-f36cn",
    name: "Branson F36Cn Kompakttraktor Kabine",
    category: "baumaschinen",
    type: "kauf_miete",
    price: "Auf Anfrage / Teklif Alın",
    specs: "35 PS · Komfortkabine mit Heizung · Allradantrieb · StVZO-Zulassung",
    description: "Belediye işleri ve profesyonel peyzaj projeleri için konforlu kabinli ve güçlü motorlu traktör.",
    image: "assets/images/branson-f36cn.jpg",
    featured: true,
    badge: "Profesyonel Seri"
  },
  {
    id: "john-deere-2026r",
    name: "John Deere Kompakttraktor 2026R",
    category: "baumaschinen",
    type: "kauf",
    price: "Auf Anfrage / Teklif Alın",
    specs: "Hydrostat-Getriebe · Zapfwelle hinten/mitte · Ergonomischer Fahrersitz",
    description: "Peyzaj ve çim bakımı için hassas kumandalı, hydrostat şanzımanlı kompakt traktör.",
    image: "assets/images/john-deere-compact.jpg",
    featured: false,
    badge: "Sıfır Ayarında"
  },
  {
    id: "holder-kommunal",
    name: "Holder Kommunaltraktor Allrad",
    category: "baumaschinen",
    type: "miete",
    price: "Kiralık / Auf Anfrage",
    specs: "Knicklenkung · Vielseitige Anbaugeräte · Ganzjahreseinsatz",
    description: "Dört mevsim kullanım için belden kırmalı, yüksek manevra kabiliyetine sahip belediye ve peyzaj aracı.",
    image: "assets/images/holder-kommunaltraktor.jpg",
    featured: false,
    badge: "Kiralık Filo"
  },

  // --- FREISCHNEIDER / MOTORLU TIRPANLAR ---
  {
    id: "stihl-fs-profi",
    name: "STIHL Profi-Freischneider / Motorlu Tırpan",
    category: "motorgeraete",
    type: "kauf_miete",
    price: "480 € (netto)",
    specs: "2-Takt Motor · ErgoStart · Gurt-System · Schneidblatt & Fadenkopf",
    description: "Yoğun otlar ve çalı temizliği için ergonomik askı sistemli profesyonel motorlu tırpan.",
    image: "assets/images/stihl-freischneider-profi.jpg",
    featured: true,
    badge: "Çok Satan"
  },

  // --- HECKENSCHERE / ÇİT BUDAMA ---
  {
    id: "stihl-heckenschere-akku",
    name: "Profi Akku-Heckenschere / Şarjlı Çit Budama",
    category: "motorgeraete",
    type: "kauf",
    price: "320 € (netto)",
    specs: "60 cm Messerlänge · Langlebiger Akku · Leichtgewicht 3.8 kg",
    description: "Park ve bahçe bakımlarında sessiz, titreşimsiz ve keskin çift taraflı bıçaklı çit budama makinesi.",
    image: "",
    featured: false,
    badge: "Akülü Seri"
  },

  // --- MOTORHACKE / MOTORLU ÇAPA ---
  {
    id: "benzin-motorhacke",
    name: "Profi Benzin-Motorhacke / Motorlu Çapa",
    category: "motorgeraete",
    type: "kauf_miete",
    price: "650 € / Kiralık Günlük 35 €",
    specs: "Arbeitsbreite 85 cm · Rückwärtsgang · Transportrad",
    description: "Sert toprağı gevşetmek ve peyzaj alanlarını ekime hazır hale getirmek için güçlü motorlu çapa.",
    image: "",
    featured: false,
    badge: "Toprak İşleme"
  },

  // --- PEYZAJ EL ALETLERİ / LANDSCHAFTSBAU HANDWERKZEUGE ---
  {
    id: "gala-spaten-set",
    name: "Gala-Profi Spaten & Schaufel Set / Peyzaj Kürek Seti",
    category: "handwerkzeuge",
    type: "kauf",
    price: "85 €",
    specs: "Eschenholz-Stiel · Gehärteter Stahl · Ergo-D-Griff",
    description: "Peyzaj ustaları için kırılmaz temperli çelikten imal edilmiş profesyonel bel küreği ve bahçe küreği seti.",
    image: "",
    featured: false,
    badge: "Galabau Standart"
  },
  {
    id: "profi-rechen-set",
    name: "Profi-Laubrechen & Landschaftsrechen / Tırmık Seti",
    category: "handwerkzeuge",
    type: "kauf",
    price: "45 €",
    specs: "Alu-Stiel light · 22 Zinken · Verstellbar",
    description: "Çim yüzey temizliği ve çakıl düzleme işleri için hafif ve dayanıklı tırmık modelleri.",
    image: "",
    featured: false,
    badge: "El Aleti"
  },

  // --- ÇALIŞMA KIYAFETLERİ & İŞ GÜVENLİĞİ / ARBEITSKLEIDUNG & PSA ---
  {
    id: "schnittschutz-hose",
    name: "Forst-Schnittschutzhose / Ağaç Kesim İş Pantolonu",
    category: "arbeitskleidung",
    type: "kauf",
    price: "135 €",
    specs: "Klasse 1 (20 m/s) · Atmungsaktiv · Stretch-Zone · EN ISO 11393",
    description: "Motorlu testere ve tırpan kullanımı için EN standartlarında A sınıfı kesilmez koruyucu iş pantolonu.",
    image: "",
    featured: true,
    badge: "İş Güvenliği EN 11393"
  },
  {
    id: "gala-arbeitsjacke",
    name: "Softshell-Arbeitsjacke GroundEx Edition / Çalışma Ceketi",
    category: "arbeitskleidung",
    type: "kauf",
    price: "75 €",
    specs: "Wind- & Wasserabweisend · Reflex-Streifen · Taschen für Werkzeug",
    description: "Rüzgar ve su geçirmeyen, refleks şeritli ve çok cepli profesyonel saha çalışma ceketi.",
    image: "",
    featured: false,
    badge: "Giyim"
  },
  {
    id: "profi-arbeitsschuhe-s3",
    name: "Sicherheitsschuhe S3 Galabau / İş Ayakkabısı S3",
    category: "arbeitskleidung",
    type: "kauf",
    price: "95 €",
    specs: "Stahlkappe · Durchtrittsicher · Wasserdichtes Leder · S3 SRC",
    description: "Şantiye ve bahçe alanları için çelik burunlu, çivi batmaz tabanlı, su geçirmez S3 koruma sınıfı ayakkabı.",
    image: "",
    featured: false,
    badge: "S3 Güvenlik"
  }
];
