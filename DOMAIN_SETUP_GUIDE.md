# GroundEx GmbH — Özel Alan Adı (Custom Domain) Kurulum Rehberi

Bu rehber, GitHub Pages üzerinde yayınlanan web sitenizi özel bir domain adına (örneğin `groundex.de` veya `www.groundex.de`) yönlendirmek için izlemeniz gereken adımları içerir.

---

## 1. CNAME Dosyası
Proje kök dizininde `CNAME` adında bir dosya oluşturulmuştur ve içeriğine hedef domain adı yazılmıştır:
```
groundex.de
```

---

## 2. Alan Adı Sağlayıcınızda (DNS Panelinde) Yapılacak Ayarlar

Domaini satın aldığınız sağlayıcının (Strato, IONOS, GoDaddy, Natro vb.) DNS yönetim paneline girerek aşağıdaki kayıtları eklemeniz gerekmektedir:

### A) Ana Domain için Apex A Kayıtları (`groundex.de`):
Domaininizin doğrudan `https://groundex.de` şeklinde açılması için DNS panelinizde aşağıdaki 4 IP adresine işaret eden **A Kayıtları (A Records)** oluşturun:

| Tip | Ad / Host | Değer / IP Adresi |
|-----|-----------|-------------------|
| A   | @         | `185.199.108.153` |
| A   | @         | `185.199.109.153` |
| A   | @         | `185.199.110.153` |
| A   | @         | `185.199.111.153` |

### B) `www` Alt Domaini için CNAME Kaydı (`www.groundex.de`):
Sitenizin `www.groundex.de` şeklinde de açılması için aşağıdaki CNAME kaydını ekleyin:

| Tip   | Ad / Host | Değer / Hedef |
|-------|-----------|---------------|
| CNAME | www       | `emi0534.github.io.` |

---

## 3. GitHub Depo (Repository) Ayarları

1. GitHub'da `groundex-site` deponuza gidin.
2. **Settings** -> **Pages** sekmesine tıklayın.
3. **Custom domain** kutusuna `groundex.de` yazın ve **Save** butonuna basın.
4. **Enforce HTTPS** seçeneğini işaretleyin (GitHub ücretsiz SSL sertifikasını otomatik olarak tanımlayacaktır).

---

## 4. Yayınlanma Süresi
DNS değişikliklerinin dünya genelinde aktifleşmesi sağlayıcınıza bağlı olarak **15 dakika ile 24 saat** arasında sürebilir.
