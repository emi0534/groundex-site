/**
 * GroundEx GmbH — Website Konfigürasyon Dosyası
 * 
 * Bu dosyadan firma adı, adres, telefon, WhatsApp numarası ve çalışma saatleri gibi
 * tüm temel bilgileri tek bir yerden kolayca değiştirebilirsiniz.
 */

const CONFIG = {
  // Firma Bilgileri
  companyName: "GroundEx GmbH",
  slogan: "Landschaftsbau & Maschinentechnik: Verkauf, Vermietung, Service",
  
  // WhatsApp İletişim Numarası (Ülke kodu ile, başında + olmadan: örn: 4917612345678)
  whatsappNumber: "4917612345678",
  
  // Telefon ve İletişim
  phone: "+49 (0) 2261 123456",
  phoneClean: "+492261123456",
  email: "info@groundex-gmbh.de",
  
  // Adres Bilgileri
  address: {
    street: "Musterstraße 12",
    city: "51643 Gummersbach",
    country: "Deutschland / Almanya",
    googleMapsUrl: "https://maps.google.com/?q=Gummersbach"
  },

  // Çalışma Saatleri
  workingHours: {
    weekdays: "Mo. - Fr.: 07:30 - 17:00 Uhr",
    saturday: "Sa.: 08:30 - 13:00 Uhr",
    sunday: "So. & Feiertage: Geschlossen"
  },

  // Sosyal Medya & Harici Bağlantılar
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com"
  }
};
