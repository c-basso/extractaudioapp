/**
 * Türkçe rehberler → /tr/guides/<slug>/
 * Slug’lar build/guides/en.js ile aynı (hreflang ile bağlı). Anahtar kelimeler: /keywords.md içindeki “Türkçe (TR)” bölümü.
 * Metinlerde yalnızca tipografik kesme işareti (’) kullanın, örn. iPhone’da.
 * Ekranlar: 1 kapak · 2 ses çıkarma · 3 kırpma · 4 Paylaş menüsü · 5 arşiv
 */

const APP = 'Extract Audio from Video⁺';

const STEP = {
    open: {
        name: 'Uygulamayı aç ve bir video seç',
        text: `${APP} uygulamasını aç ve Fotoğraflar’dan ya da Dosyalar’dan bir video seç. Daha hızlısı: Fotoğraflar’da videoda Paylaş’a dokunup uygulamayı seç.`,
        image: 2
    },
    share: {
        name: 'Videoyu uygulamaya gönder',
        text: 'Videoyu Fotoğraflar’da veya Dosyalar’da aç, Paylaş’a dokun ve uygulamayı seç. Uygulama video yüklenmiş şekilde açılır.',
        image: 2
    },
    trim: {
        name: 'İstediğin kısmı kırp (isteğe bağlı)',
        text: '“Videoyu Kırp”a dokun, sarı işaretleri istediğin kısmın başına ve sonuna sürükle, dinle ve “Kaydet”e dokun.',
        image: 3
    },
    extract: {
        name: '“Sesi Çıkar”a dokun',
        text: '“Sesi Çıkar”a dokun. Ses parçası iPhone’unda saniyeler içinde dönüştürülür — internete hiçbir şey yüklenmez.',
        image: 2
    },
    save: {
        name: 'Ses dosyasını kaydet veya paylaş',
        text: 'Yeni ses dosyası arşivde görünür. Dosyalar’a kaydetmek, AirDrop ile ya da herhangi bir uygulamaya göndermek için Paylaş’a dokun.',
        image: 4
    }
};

const guides = [];
module.exports = guides;

guides.push(
    {
        slug: 'extract-audio-from-video-iphone',
        keyword: 'iphone videodan ses çıkarma',
        eyebrow: 'Temel rehber',
        title: 'iPhone’da videodan ses nasıl çıkarılır? (2026 rehberi)',
        description: 'iPhone’da her videodan sesi 4 dokunuşta çıkar: videoyu seç, kırp, “Sesi Çıkar”a dokun ve MP3 veya M4A olarak kaydet. Ücretsiz, yükleme yok, ekran görüntülü.',
        h1: 'iPhone’da videodan ses nasıl çıkarılır?',
        answer: `iPhone’da videodan ses çıkarmak için ${APP} uygulamasını aç, Fotoğraflar’dan videoyu seç, istersen kırp ve “Sesi Çıkar”a dokun. Uygulama ses parçasını saniyeler içinde MP3 veya M4A olarak iPhone’una kaydeder. Başlamak ücretsiz, çevrimdışı çalışır ve hiçbir şey yüklenmez.`,
        intro: '<p>Fotoğraflar uygulamasında “yalnızca sesi kaydet” düğmesi yok. Bir kestirme oluşturabilir (bkz. <a href="/tr/guides/extract-audio-without-app-iphone/">uygulamasız yöntem</a>) ya da videoyu bir siteye yükleyebilirsin, ama sadece sese ihtiyacın varken ikisi de zahmetli. En hızlı yol şu: doğrudan Paylaş menüsünden çalışan ücretsiz bir uygulama.</p>',
        steps: [STEP.open, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Neye ihtiyacın var',
                html: `<ul>
<li>iOS 18.6 veya üzeri bir iPhone.</li>
<li>${APP} — App Store’da ücretsiz (yaklaşık 23 MB).</li>
<li>Sesli bir video: kamera kayıtları (MOV), indirilenler (MP4), ekran kayıtları veya Mesajlar’dan gelen videolar.</li>
</ul>`
            },
            {
                h2: 'En hızlısı: Paylaş menüsünden',
                html: '<p>Uygulamayı açmana bile gerek yok. <strong>Fotoğraflar</strong> veya <strong>Dosyalar</strong>’da videoyu aç, <strong>Paylaş</strong>’a dokun, uygulama sırasını kaydır ve uygulamayı seç. Görünmüyorsa “Diğer”e dokunup bir kez favorilere ekle — sonra hep elinin altında olur.</p>'
            },
            {
                h2: 'MP3 mü M4A mı?',
                html: '<p><strong>MP3</strong> her yerde çalar: Windows, Android, araba teybi, web siteleri ve düzenleme programları. <strong>M4A</strong> (AAC) Apple’ın formatıdır: aynı kalitede daha küçüktür, zil sesleri, GarageBand ve iMovie için idealdir. Emin değilsen MP3’ü seç. Ayrıntılar: <a href="/tr/guides/convert-video-to-mp3-iphone/">videoyu MP3’e çevirme</a> ve <a href="/tr/guides/video-to-m4a-iphone/">videoyu M4A’ya çevirme</a>.</p>'
            },
            {
                h2: 'Ses dosyası nereye kaydedilir?',
                html: '<p>Çıkarılan her dosya süresi, boyutu ve tarihiyle uygulamanın arşivinde listelenir. Oradan <strong>Paylaş → Dosyalar’a Kaydet</strong> ile iCloud Drive’a veya “iPhone’umda”ya kaydet ya da WhatsApp, Mail, Notlar, GarageBand’e veya AirDrop ile Mac’ine gönder.</p>'
            },
            {
                h2: 'Sorun giderme',
                html: `<ul>
<li><strong>Dosya sessiz.</strong> Videonun kendisinde ses yok — mikrofonsuz ekran kayıtlarında sık görülür. Önce videoyu Fotoğraflar’da oynat.</li>
<li><strong>Video iCloud’da.</strong> Fotoğraflar önce orijinali indirir; ilerleme halkası dolana kadar bekle.</li>
<li><strong>Sadece 20 saniye lazım.</strong> Çıkarmadan önce kırp — bkz. <a href="/tr/guides/trim-audio-from-video-iphone/">sesin bir kısmını çıkarma</a>.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'iPhone’da videodan ses çıkarmak ücretsiz mi?', a: `Evet. ${APP} ücretsiz indirilir ve temel ses çıkarma ücretsizdir. İsteğe bağlı uygulama içi satın alımlar ekstra özellikleri açar.` },
            { q: 'Ses çıkarınca kalite düşer mi?', a: 'Uygulama videonun ses parçasını yüksek kaliteli MP3 veya M4A’ya dönüştürür. Orijinalden daha iyi olmaz, ama videoyu oynattığında duyduğun gibi olur.' },
            { q: 'Uzun videolarla da çalışır mı?', a: 'Evet. Dersler, konserler ve toplantılar aynı şekilde çalışır, sadece biraz daha uzun sürer. Bir kısmı gerekiyorsa önce kırp.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'trim-audio-from-video-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'iPhone’da videodan ses çıkarma', text: 'Fotoğraflar’dan veya Paylaş’tan 4 dokunuşta.' }
    },
    {
        slug: 'convert-video-to-mp3-iphone',
        keyword: 'iphone video mp3 çevirme',
        eyebrow: 'Videodan MP3’e',
        title: 'iPhone’da video MP3’e nasıl çevrilir? Hızlı ve ücretsiz',
        description: 'iPhone’daki her videoyu ücretsiz dönüştürücüyle saniyeler içinde MP3’e çevir. Doğrudan Fotoğraflar’dan, yükleme olmadan, kırpma desteğiyle. Adımlar burada.',
        h1: 'iPhone’da video MP3’e nasıl çevrilir?',
        answer: `Videoyu Fotoğraflar’da aç, Paylaş’a dokun ve ${APP} uygulamasını seç. Gerekirse kırp, “Sesi Çıkar”a dokun ve MP3 olarak dışa aktar. MP3 iPhone’unda kalır; Dosyalar’a kaydedebilir, AirDrop ile ya da herhangi bir uygulamaya gönderebilirsin. Bilgisayar, yükleme veya hesap gerekmez.`,
        intro: '<p>MP3 en uyumlu ses formatıdır: her arabada, her bilgisayarda ve her programda çalar. Telefonu elinden bırakmadan iPhone’daki her videoyu MP3’e çevirmenin yolu şu.</p>',
        steps: [STEP.share, STEP.trim, { name: 'MP3 olarak çıkar', text: '“Sesi Çıkar”a dokun ve MP3’ü seç. Dönüştürme iPhone’unda yapılır.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'Neden online dönüştürücü değil de uygulama?',
                html: '<p>Online dönüştürücüler tüm videoyu yüklemeni, beklemeni ve MP3’ü tekrar indirmeni ister — mobil veride yavaş ve özel videolar için riskli. Uygulama çevrimdışı çalışır, dosyayı cihazda tutar ve dönüştürmeden önce kırpar. Karşılaştırma: <a href="/tr/guides/extract-audio-online-vs-app/">online mı uygulama mı</a>.</p>'
            },
            {
                h2: 'Hangi videolar MP3’e çevrilebilir?',
                html: '<p>iPhone’un oynatabildiği her şey: kamera kayıtları (<a href="/tr/guides/mov-to-mp3-iphone/">MOV</a>), indirilen klipler (<a href="/tr/guides/mp4-to-mp3-iphone/">MP4</a>), <a href="/tr/guides/screen-recording-to-audio-iphone/">ekran kayıtları</a> ve Mesajlar, WhatsApp ya da AirDrop ile gelen videolar.</p>'
            },
            {
                h2: 'MP3 ile neler yapabilirsin',
                html: `<ul>
<li><strong>Dosyalar</strong>’a kaydedip çevrimdışı dinle.</li>
<li><strong>AirDrop</strong> ile Mac’ine gönder.</li>
<li>30 saniyesinden <a href="/tr/guides/video-to-ringtone-iphone/">zil sesi</a> yap.</li>
<li>GarageBand, CapCut veya bir podcast düzenleyicisine aktar.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'iPhone uygulamasız video MP3’e çevirebilir mi?', a: 'Doğrudan hayır. Kestirmeler sesi yalnızca M4A olarak kaydeder, MP3 olarak değil. iPhone’da MP3 için bir dönüştürücü uygulamaya veya web sitesine ihtiyacın var.' },
            { q: 'MP3’e çevirmek ücretsiz mi?', a: `Evet, ${APP} içindeki temel dönüştürme ücretsizdir. Uygulama içi satın alımlar ekstra özellikler ekler.` },
            { q: 'Videoyu MP3’e çevirmek için Wi-Fi gerekir mi?', a: 'Hayır. Dönüştürme iPhone’da yapılır ve çevrimdışı çalışır. Sadece iCloud’daki videoların önce indirilmesi gerekir.' }
        ],
        related: ['mp4-to-mp3-iphone', 'mov-to-mp3-iphone', 'video-to-m4a-iphone'],
        card: { title: 'Videoyu MP3’e çevirme', text: 'iPhone’daki her video evrensel bir MP3 olsun.' }
    },
    {
        slug: 'mp4-to-mp3-iphone',
        keyword: 'mp4 mp3 dönüştürme iphone',
        eyebrow: 'MP4’ten MP3’e',
        title: 'iPhone’da MP4’ü MP3’e dönüştürme — ücretsiz, yüklemesiz',
        description: 'iPhone’da MP4’ü ücretsiz MP3’e dönüştür: dosyayı Dosyalar’da veya Fotoğraflar’da aç, Paylaş’a dokun ve uygulamayı seç. Çevrimdışı, kırpmalı, 4 adımda.',
        h1: 'iPhone’da MP4 MP3’e nasıl dönüştürülür?',
        answer: `iPhone’da MP4’ü MP3’e dönüştürmek için dosyayı Dosyalar’da veya Fotoğraflar’da aç, Paylaş’a dokun ve ${APP} uygulamasını seç. İstersen kırp, “Sesi Çıkar”a dokun, MP3’ü seç ve kaydet. Ücretsiz, cihazda ve internetsiz.`,
        intro: '<p>MP4 dosyaları genellikle indirme, e-posta eki veya AirDrop ile gelir; bu yüzden çoğu zaman Fotoğraflar’da değil <strong>Dosyalar</strong> uygulamasındadır. Uygulama ikisiyle de çalışır.</p>',
        steps: [
            { name: 'MP4 dosyasını bul', text: 'Dosyalar’ı (İndirilenler, iCloud Drive veya “iPhone’umda”) ya da Fotoğraflar’ı aç ve MP4’ü bul.', image: 2 },
            { name: 'Uygulamaya gönder', text: 'Dosyaya basılı tut, Paylaş’a dokun ve uygulamayı seç. MP4 uygulamada açılır.', image: 2 },
            STEP.trim,
            { name: 'MP3 olarak kaydet', text: '“Sesi Çıkar”a dokun, MP3’ü seç, sonra Paylaş → Dosyalar’a Kaydet ile MP3’ü orijinal MP4’ün yanına koy.', image: 4 }
        ],
        sections: [
            {
                h2: 'Tek cümlede MP4 ve MP3',
                html: '<p>MP4 görüntü <em>ve</em> ses içeren bir kapsayıcıdır; MP3 yalnızca sestir. Dönüştürünce ses parçası kalır, görüntü gider — dosya çok küçülür ve her oynatıcıda çalar.</p>'
            },
            {
                h2: 'WhatsApp, Telegram ve e-postadan gelen MP4’ler',
                html: '<p>Önce eki kaydet: sohbette videoyu aç → Paylaş → “Videoyu Kaydet” (Fotoğraflar’a) veya “Dosyalar’a Kaydet”. Sonra yukarıdaki adımları izle. Yalnızca sana ait veya hakkına sahip olduğun videoları dönüştür.</p>'
            },
            {
                h2: 'M4A mı tercih edersin?',
                html: '<p>Zil sesleri ve Apple uygulamaları için M4A daha iyidir. Bkz. <a href="/tr/guides/video-to-m4a-iphone/">iPhone’da videoyu M4A’ya çevirme</a>.</p>'
            }
        ],
        faq: [
            { q: 'iPhone’da MP4’ü ücretsiz MP3’e çevirebilir miyim?', a: `Evet. ${APP} MP4’ü doğrudan cihazda ücretsiz olarak MP3’e çevirir. Uygulama içi satın alımlar ekstraları açar.` },
            { q: 'MP3, MP4’ten küçük olur mu?', a: 'Evet, genellikle çok daha küçük, çünkü video parçası kaldırılır ve yalnızca ses kalır.' },
            { q: 'Birden fazla MP4 dönüştürebilir miyim?', a: 'Evet. Sırayla dönüştür — her MP3 uygulamanın arşivinde kalır.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'mov-to-mp3-iphone', 'extract-audio-online-vs-app'],
        card: { title: 'MP4’ü MP3’e dönüştürme', text: 'Dosyalar’daki veya Fotoğraflar’daki MP4’ler MP3 olsun.' }
    },
    {
        slug: 'mov-to-mp3-iphone',
        keyword: 'mov mp3 çevirme iphone',
        eyebrow: 'MOV’dan MP3’e',
        title: 'iPhone’da MOV’u MP3’e çevirme — kamera videolarının sesi',
        description: 'iPhone’la çekilen videolar MOV dosyasıdır. MOV’u doğrudan telefonda MP3’e çevir: klibi seç, kırp ve “Sesi Çıkar”a dokun. Ücretsiz ve çevrimdışı.',
        h1: 'iPhone’da MOV MP3’e nasıl çevrilir?',
        answer: `iPhone kamerasıyla çekilen her video bir MOV dosyasıdır. MOV’u MP3’e çevirmek için klibi Fotoğraflar’da aç, Paylaş’a dokun, ${APP} uygulamasını seç, gerekirse kırp ve “Sesi Çıkar”a dokun. MP3 iPhone’una kaydedilir — bilgisayar gerekmez.`,
        intro: '<p>MOV, Apple’ın video formatıdır ve kameranın kaydettiği formattır: konserler, konuşmalar, gitar çalan bir arkadaş, saklamak istediğin bir ses. MP3 olunca her yerde dinlersin.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'MOV’u MP3’e çevirmek ne işe yarar',
                html: `<ul>
<li>Çektiğin bir konserin veya gösterinin sesini sakla.</li>
<li>Bir konuşmayı veya kadeh kaldırmayı sesli anı olarak kaydet.</li>
<li>Grup provasını devasa bir video dosyası olmadan paylaş.</li>
<li>Kaydettiğin bir <a href="/tr/guides/lecture-video-to-audio-iphone/">dersi</a> yolda dinle.</li>
</ul>`
            },
            {
                h2: 'HEVC, 4K ve Sinematik mod',
                html: '<p>HEVC ve 4K kayıtlar da aynı şekilde dönüştürülür. Yalnızca ses işlenir; çok büyük MOV dosyaları bile küçük ses dosyalarına dönüşür.</p>'
            },
            {
                h2: 'Neden bilgisayarda değil?',
                html: '<p>Birkaç gigabaytlık bir MOV’u sadece sesini almak için bilgisayara aktarmak, iPhone’da dönüştürmekten daha uzun sürer. Uygulama bunu videonun zaten olduğu yerde yapar.</p>'
            }
        ],
        faq: [
            { q: 'iPhone hangi formatta video çeker?', a: 'iPhone kamerası MOV dosyaları kaydeder; genellikle HEVC veya H.264 video ve AAC ses ile.' },
            { q: 'MOV’u MP3’e çevirince kalite kaybolur mu?', a: 'Uygulama orijinal kaydın kalitesini korur — MP3, video oynatılırken duyduğun gibi ses verir.' },
            { q: 'MOV’u M4A’ya çevirebilir miyim?', a: 'Evet, format olarak M4A’yı seç. Zil sesleri ve Apple uygulamaları için uygundur.' }
        ],
        related: ['mp4-to-mp3-iphone', 'convert-video-to-mp3-iphone', 'save-music-from-video-iphone'],
        card: { title: 'MOV’dan MP3’e', text: 'Kamera kayıtları ses dosyası olsun.' }
    }
);

guides.push(
    {
        slug: 'video-to-m4a-iphone',
        keyword: 'video m4a çevirme iphone',
        eyebrow: 'Videodan M4A’ya',
        title: 'iPhone’da videoyu M4A’ya çevirme — MP4 ve MOV’dan M4A’ya',
        description: 'Videolarının sesini zil sesleri, GarageBand ve Apple uygulamaları için M4A olarak kaydet. Ücretsiz, cihazda, kırpmalı. MP4 veya MOV’dan M4A’ya 4 dokunuşta.',
        h1: 'iPhone’da video M4A’ya nasıl çevrilir?',
        answer: `iPhone’da bir videoyu M4A’ya çevirmek için Fotoğraflar’dan veya Dosyalar’dan Paylaş ile ${APP} uygulamasına gönder, istersen kırp, “Sesi Çıkar”a dokun ve M4A’yı seç. GarageBand, iMovie, ses oynatıcılar ve zil sesi olarak kullanılabilen bir M4A (AAC) dosyası elde edersin.`,
        intro: '<p>M4A, Apple’ın ses formatıdır. Benzer kalitede MP3’ten küçüktür — ve iPhone’un zil sesleri ve GarageBand projeleri için beklediği format tam olarak budur.</p>',
        steps: [STEP.share, STEP.trim, { name: 'M4A olarak çıkar', text: '“Sesi Çıkar”a dokun ve M4A’yı seç.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'M4A mı MP3 mü — ne zaman M4A',
                html: `<table class="guide-table"><thead><tr><th></th><th>M4A (AAC)</th><th>MP3</th></tr></thead><tbody>
<tr><td>En uygun</td><td>iPhone, Mac, zil sesleri, GarageBand</td><td>Geri kalan her şey: Windows, Android, araba</td></tr>
<tr><td>Dosya boyutu</td><td>Aynı kalitede daha küçük</td><td>Biraz daha büyük</td></tr>
<tr><td>Uyumluluk</td><td>Çok iyi</td><td>Evrensel</td></tr>
</tbody></table>`
            },
            {
                h2: 'M4A’yı zil sesi yap',
                html: '<p>iOS 26’da 30 saniyeden kısa bir M4A doğrudan Dosyalar’dan zil sesi yapılabilir. Tam rehber: <a href="/tr/guides/video-to-ringtone-iphone/">videodan zil sesi yapma</a>.</p>'
            },
            {
                h2: 'GarageBand veya iMovie’de aç',
                html: '<p>M4A’yı Dosyalar’a kaydet ve GarageBand ya da iMovie’nin dosya tarayıcısından fon müziği, dış ses veya ses efekti olarak içe aktar.</p>'
            }
        ],
        faq: [
            { q: 'M4A, MP3’ten daha mı iyi?', a: 'Aynı bit hızında M4A (AAC) genellikle aynı veya daha iyi ses verir ve daha az yer kaplar. MP3 daha fazla cihazda çalışır.' },
            { q: 'Kestirmeler ile M4A oluşturabilir miyim?', a: 'Evet, “Yalnızca Ses” açıkken “Ortamı Kodla” eylemi M4A üretir. Ama kırpamaz ve MP3 dışa aktaramaz — uygulama ikisini de yapar.' },
            { q: 'M4A’ya çevirmek ücretsiz mi?', a: `Evet, ${APP} içindeki temel ses çıkarma, M4A dışa aktarma dahil ücretsizdir.` }
        ],
        related: ['video-to-ringtone-iphone', 'convert-video-to-mp3-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Videodan M4A’ya', text: 'Zil sesleri ve GarageBand için Apple formatı.' }
    },
    {
        slug: 'extract-audio-without-app-iphone',
        keyword: 'iphone uygulamasız videodan ses çıkarma kestirme',
        eyebrow: 'Kestirme mi uygulama mı',
        title: 'iPhone’da uygulamasız videodan ses çıkarma (Kestirmeler)',
        description: 'iPhone’da hiçbir şey yüklemeden, Kestirmeler ve “Ortamı Kodla” ile videodan ses çıkarabilirsin. Kurulum, sınırlar (yalnızca M4A) ve daha hızlı bir yol.',
        h1: 'iPhone’da uygulamasız videodan ses nasıl çıkarılır?',
        answer: 'Ek uygulama olmadan bir kestirme kullanılır: “Ortamı Kodla” eylemini ekle, “Yalnızca Ses”i aç, “Dosyayı Kaydet”i ekle ve “Paylaşma Sayfasında Göster”i aç. Sonra videoyu bu kestirmeyle paylaş. Yalnızca M4A üretir ve kırpamaz — MP3 veya kısa parçalar için uygulama daha hızlıdır.',
        intro: '<p>Apple’ın ücretsiz Kestirmeler uygulaması videodan sesi ayırabilir. Kurulumu yaklaşık iki dakika sürer. İşte tam tarif — ve sınırları.</p>',
        steps: [
            { name: 'Yeni bir kestirme oluştur', text: 'Kestirmeler’i aç, +’ya dokun ve adını “Videodan ses” koy.', image: 2 },
            { name: '“Ortamı Kodla”yı ekle', text: '“Eylem Ekle”ye dokun, “Ortamı Kodla”yı ara ve ekle, seçenekleri genişlet ve “Yalnızca Ses”i aç.', image: 2 },
            { name: '“Dosyayı Kaydet”i ekle', text: 'Sonuç Dosyalar’a gitsin diye “Dosyayı Kaydet” eylemini ekle.', image: 4 },
            { name: 'Paylaş menüsünde göster', text: 'Kestirme ayarlarını aç (i simgesi), “Paylaşma Sayfasında Göster”i aç ve “Ortam”a izin ver. Şimdi Fotoğraflar’dan bir video paylaş ve kestirmeyi seç.', image: 4 }
        ],
        sections: [
            {
                h2: 'Kestirme yönteminin sınırları',
                html: `<ul>
<li><strong>Yalnızca M4A</strong> — MP3 yok.</li>
<li><strong>Kırpma yok</strong> — her zaman tüm ses parçası kaydedilir.</li>
<li><strong>Arşiv yok</strong> — dosyalar Dosyalar’a gider, bulup yeniden adlandırmak sana kalır.</li>
<li>Uzun videolarda kestirme net bir hata vermeden durabilir.</li>
</ul>`
            },
            {
                h2: 'Tek dokunuşluk alternatif',
                html: `<p>${APP} aynı işi kırpma, MP3 veya M4A seçimi ve çıkardığın her şeyin arşiviyle yapar. Uygulama da Paylaş menüsünde olduğu için aynı hızdadır — ve kurulacak hiçbir şey yoktur.</p>`
            },
            {
                h2: 'Uygulamasız diğer yollar',
                html: '<p>iMovie ve GarageBand de sesi ayırabilir, ama daha fazla adım gerekir ve dışa aktarma formatları sınırlıdır. Web siteleri de çalışır ama videoyu yüklemen gerekir — bkz. <a href="/tr/guides/extract-audio-online-vs-app/">online mı uygulama mı</a>.</p>'
            }
        ],
        faq: [
            { q: 'iPhone’da yerleşik bir ses çıkarıcı var mı?', a: 'Fotoğraflar’da düğme olarak yok. En yakını, Kestirmeler uygulamasındaki “Yalnızca Ses” açık “Ortamı Kodla” eylemidir.' },
            { q: 'Kestirme hangi formatta kaydeder?', a: 'M4A olarak. Kestirmeler ile MP3 kaydedilemez.' },
            { q: 'Kestirme sesi kırpabilir mi?', a: `Rahatça değil. Kırpmak için ${APP} gibi zaman çizelgeli bir uygulama kullan.` }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-online-vs-app', 'video-to-m4a-iphone'],
        card: { title: 'Uygulamasız (Kestirmeler)', text: 'Ücretsiz kestirme tarifi ve sınırları.' }
    },
    {
        slug: 'extract-audio-online-vs-app',
        keyword: 'videodan ses çıkarma online',
        eyebrow: 'Online mı uygulama mı',
        title: 'Videodan ses çıkarma: online mı, iPhone uygulaması mı?',
        description: 'Videodan sesi online mı yoksa uygulamayla mı çıkarmalı? iPhone’da gizlilik, hız, sınırlar ve kırpmayı karşılaştırıyoruz — ve telefonda kim kazanıyor.',
        h1: 'Videodan ses çıkarma: online (ücretsiz) mi, iPhone uygulaması mı?',
        answer: `Online siteler her cihazda çalışır ama tüm videoyu yüklemeni, beklemeni ve sonucu indirmeni ister — mobil veride yavaş ve gizli değil. iPhone’da ${APP} gibi bir uygulama daha hızlıdır, çevrimdışı çalışır, videoları cihazda tutar ve dışa aktarmadan önce kırpar.`,
        intro: '<p>“Videodan ses çıkarma online” diye aratırsan onlarca ücretsiz site bulursun. Hızlı internetli bir dizüstünde işe yararlar. iPhone’da ise hesap farklı.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Karşılaştırma',
                html: `<table class="guide-table"><thead><tr><th></th><th>Online site</th><th>${APP}</th></tr></thead><tbody>
<tr><td>Gizlilik</td><td>Video başkasının sunucusuna yüklenir</td><td>iPhone’da kalır</td></tr>
<tr><td>Hız</td><td>Yükleme + sıra + indirme</td><td>Saniyeler, cihazda</td></tr>
<tr><td>Çevrimdışı</td><td>Hayır</td><td>Evet</td></tr>
<tr><td>Boyut sınırı</td><td>Ücretsiz planlarda yaygın</td><td>Sadece depolama alanı</td></tr>
<tr><td>Kırpma</td><td>Bazen</td><td>Yerleşik zaman çizelgesi</td></tr>
<tr><td>Reklam ve açılır pencere</td><td>Sık</td><td>Web açılır penceresi yok</td></tr>
<tr><td>Fiyat</td><td>Sınırlı ücretsiz</td><td>Temel özellikler ücretsiz</td></tr>
</tbody></table>`
            },
            {
                h2: 'Online site ne zaman mantıklı',
                html: '<p>Windows bir bilgisayardaysan ve video zaten oradaysa güvenilir bir site yeterlidir. Ama kişisel hiçbir şey yükleme: aile videoları, toplantılar veya müşteri materyalleri.</p>'
            },
            {
                h2: 'Uygulama ne zaman daha iyi',
                html: '<p>Video iPhone’undaysa uygulama kazanır: mobil veriyle yükleme yok, bekleme yok, indirme yok — ve tam ihtiyacın olan kısmı kırparsın.</p>'
            }
        ],
        faq: [
            { q: 'Videodan online ses çıkarmak güvenli mi?', a: 'Siteye bağlı. Video üçüncü tarafın sunucusuna gider; özel içerik için bundan kaçın. Cihazda çalışan uygulamalar hiçbir şey yüklemez.' },
            { q: 'iPhone’da video yüklemeden ücretsiz bir yol var mı?', a: `Evet. ${APP} başlamak için ücretsizdir ve cihazda dönüştürür — videon asla yüklenmez.` },
            { q: 'Telefonda online dönüştürme neden bu kadar yavaş?', a: 'Çünkü önce tüm videonun yüklenmesi gerekir. Telefon videoları büyüktür ve mobil veride yükleme hızı genellikle indirmeden çok daha yavaştır.' }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-without-app-iphone', 'mp4-to-mp3-iphone'],
        card: { title: 'Online mı uygulama mı', text: 'Gizlilik, hız ve sınırlar karşılaştırması.' }
    },
    {
        slug: 'save-music-from-video-iphone',
        keyword: 'videodan müzik çıkarma iphone',
        eyebrow: 'Müzik',
        title: 'iPhone’da videodan müzik nasıl çıkarılır? (MP3 veya M4A)',
        description: 'Bir videodaki şarkıyı veya fon müziğini iPhone’da MP3 ya da M4A olarak kaydet. Tam şarkıyı kırp, çevrimdışı dinle ve her yerde paylaş. Kısa rehber.',
        h1: 'iPhone’da videodan müzik nasıl çıkarılır?',
        answer: `iPhone’da videodan müzik çıkarmak için videoyu Fotoğraflar’da aç, Paylaş’a dokun, ${APP} uygulamasını seç, kırpma işaretlerini şarkının çevresine koy ve “Sesi Çıkar”a dokun. Müzik MP3 veya M4A olarak kaydedilir; Dosyalar’da çevrimdışı dinleyebilir veya herhangi bir uygulamaya gönderebilirsin.`,
        intro: '<p>Düğündeki bir şarkı, bir arkadaşın cover’ı, kendi kurgundaki müzik — bazen bir videoda en önemli şey sestir. Onu ayrı bir müzik dosyası olarak kaydetmenin yolu şu.</p>',
        steps: [STEP.share, { name: 'Şarkının çevresini kırp', text: '“Videoyu Kırp”a dokun ve sarı işaretleri yalnızca şarkı kalacak şekilde sürükle. Başını ve sonunu dinle.', image: 3 }, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'En iyi ses için ipuçları',
                html: `<ul>
<li>Baştaki ve sondaki konuşmaları ve alkışları kes.</li>
<li>Araba teybi ve eski çalarlar için MP3, Apple cihazları için M4A.</li>
<li>Kolay bulmak için dosyayı Dosyalar’da yeniden adlandır (basılı tut → Yeniden Adlandır).</li>
</ul>`
            },
            {
                h2: 'Telif hakkı hakkında',
                html: '<p>Yalnızca kendi videolarından veya hakkına sahip olduğun videolardan müzik kaydet. Ticari şarkılar telif hakkıyla korunur: kendi kaydının kişisel bir kopyası sorun değildir, başkasının müziğini yeniden yayınlamak ise değildir.</p>'
            },
            {
                h2: 'Zil sesi yap',
                html: '<p>En sevdiğin 30 saniyeyi mi buldun? <a href="/tr/guides/video-to-ringtone-iphone/">Onu zil sesine çevir</a>.</p>'
            }
        ],
        faq: [
            { q: 'iPhone’umdaki bir videodan şarkıyı nasıl alırım?', a: `Videoyu ${APP} uygulamasına gönder, şarkının çevresini kırp ve “Sesi Çıkar”a dokun. Şarkı bir ses dosyası olarak kaydedilir.` },
            { q: 'Çıkardığım şarkıyı Apple Music’e ekleyebilir miyim?', a: 'iPhone’daki Müzik uygulaması yerel dosyaları doğrudan içe aktaramaz. Dosyayı Dosyalar’da tut veya bir Mac ya da PC’den eşzamanla.' },
            { q: 'WhatsApp veya Mesajlar videolarıyla çalışır mı?', a: 'Evet. Önce videoyu Fotoğraflar’a veya Dosyalar’a kaydet, sonra sesi çıkar.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-ringtone-iphone', 'mov-to-mp3-iphone'],
        card: { title: 'Videodan müzik çıkarma', text: 'Şarkıyı tut, görüntüyü bırak.' }
    }
);

guides.push(
    {
        slug: 'trim-audio-from-video-iphone',
        keyword: 'videonun bir kısmının sesini çıkarma iphone',
        eyebrow: 'Kırpma',
        title: 'iPhone’da videonun sadece bir kısmının sesini çıkarma',
        description: 'Sadece 10 saniyelik ses mi lazım? iPhone’da videoyu kırp ve yalnızca o kısmı MP3 veya M4A olarak çıkar. İşaretleri sürükle, dinle, dışa aktar. Ücretsiz.',
        h1: 'iPhone’da videonun sadece bir kısmının sesi nasıl çıkarılır?',
        answer: `Videonun sadece bir kısmının sesini çıkarmak için videoyu ${APP} uygulamasında aç, “Videoyu Kırp”a dokun, sarı başlangıç ve bitiş işaretlerini istediğin kısmın çevresine sürükle, “Kaydet”e ve ardından “Sesi Çıkar”a dokun. Yalnızca seçilen kısım MP3 veya M4A olarak dışa aktarılır.`,
        intro: '<p>Çoğu zaman tüm ses parçasına değil, sadece bir cümleye, nakarata veya ses efektine ihtiyacın olur. Önce kırparsan küçük ve temiz bir dosya elde edersin.</p>',
        steps: [
            STEP.open,
            { name: '“Videoyu Kırp”a dokun', text: 'Ses çıkarma ekranında zaman çizelgesini açmak için “Videoyu Kırp”a dokun.', image: 2 },
            { name: 'İşaretleri sürükle', text: 'Soldaki sarı işareti başlangıca, sağdakini sona sürükle. Süreler tam seçimi gösterir. Dinle ve “Kaydet”e dokun.', image: 3 },
            { name: 'Parçayı çıkar ve kaydet', text: '“Sesi Çıkar”a dokun. Yalnızca kırpılan kısım dışa aktarılır — paylaş veya Dosyalar’a kaydet.', image: 4 }
        ],
        sections: [
            {
                h2: 'Hassas kırpma için ipuçları',
                html: `<ul>
<li>Kelimeleri kesmemek için konuşmanın öncesinde ve sonrasında yarım saniye bırak.</li>
<li>Zil sesi için en fazla 30 saniye seç.</li>
<li>Aynı videodan birkaç parça mı lazım? Her biri için kırpmayı tekrarla — hepsi arşivde kalır.</li>
</ul>`
            },
            {
                h2: 'En sık kırpılanlar',
                html: '<p>Bir konuşmadan tek cümle, bir şarkının nakaratı, kurgu için bir ses efekti, çocuğunun ilk kelimeleri ya da uzun bir toplantının o önemli dakikası.</p>'
            }
        ],
        faq: [
            { q: 'iPhone’da videonun sesini kesebilir miyim?', a: `Evet. Videoyu ${APP} içinde ihtiyacın olan kısma kırp ve çıkar — yalnızca o kısım ses olarak kaydedilir.` },
            { q: 'Kırpma orijinal videoyu değiştirir mi?', a: 'Hayır. Fotoğraflar’daki orijinal değişmez; yalnızca dışa aktarılan ses dosyası kırpılır.' },
            { q: 'Aynı videodan birden fazla parça çıkarabilir miyim?', a: 'Evet. Her parça için yeniden kırp ve çıkar.' }
        ],
        related: ['video-to-ringtone-iphone', 'save-music-from-video-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Sesin bir kısmını çıkarma', text: 'Saniyesi saniyesine kırp.' }
    },
    {
        slug: 'screen-recording-to-audio-iphone',
        keyword: 'ekran kaydı ses çıkarma iphone',
        eyebrow: 'Ekran kaydı',
        title: 'iPhone’da ekran kaydının sesi nasıl alınır? (MP3, M4A)',
        description: 'iPhone ekran kaydını MP3 veya M4A ses dosyasına çevir. Kaydın neden sessiz olduğunu öğren, doğru kısmı kırp ve sesi kaydet. Kolay adımlarla anlatıyoruz.',
        h1: 'iPhone’da ekran kaydının sesi nasıl alınır?',
        answer: `iPhone ekran kayıtları Fotoğraflar’a video olarak kaydedilir. Sesini almak için kaydı aç, Paylaş’a dokun, ${APP} uygulamasını seç, gerekirse kırp ve “Sesi Çıkar”a dokun. Dosya sessizse kayıt hiç ses almamış demektir — kayıttan önce mikrofonu aç.`,
        intro: '<p>Ekran kaydı; sesli mesajları, hoparlördeki aramaları veya bir uygulamadaki klipleri saklamanın yaygın bir yoludur. Sadece sesi tutmanın yolu şu.</p>',
        steps: [
            { name: 'Kaydı Fotoğraflar’da bul', text: 'Ekran kayıtları Fotoğraflar → “Ortam Türleri” → “Ekran Kayıtları”nda bulunur.', image: 2 },
            { name: 'Uygulamaya gönder', text: 'Kaydı aç, Paylaş’a dokun ve uygulamayı seç.', image: 2 },
            STEP.trim,
            { name: 'Çıkar ve kaydet', text: '“Sesi Çıkar”a dokun ve MP3’ü ya da M4A’yı Dosyalar’a kaydet.', image: 4 }
        ],
        sections: [
            {
                h2: 'Ekran kaydım neden sessiz?',
                html: `<ul>
<li><strong>Mikrofon kapalı:</strong> Denetim Merkezi’nde ekran kaydı düğmesine basılı tut ve sesini kaydetmek için “Mikrofon”u aç.</li>
<li><strong>Sessiz mod:</strong> Bazı uygulamalar sessiz modda ses çıkarmaz.</li>
<li><strong>Korumalı içerik:</strong> Birçok yayın uygulaması ekran kayıtlarında sesi engeller — bu kasıtlıdır ve aşılamaz.</li>
</ul>`
            },
            {
                h2: 'Gizliliğe saygı göster',
                html: '<p>Aramaları veya konuşmaları yalnızca tüm katılımcıların onayıyla ve ülkendeki yasalara uygun şekilde kaydet ve sakla.</p>'
            }
        ],
        faq: [
            { q: 'Ekran kaydını MP3’e çevirebilir miyim?', a: 'Evet. Ekran kayıtları normal videolardır; sesleri MP3 veya M4A olarak kaydedilebilir.' },
            { q: 'iPhone ekran kayıtlarını nereye kaydeder?', a: 'Fotoğraflar uygulamasında, “Ortam Türleri” → “Ekran Kayıtları” altına.' },
            { q: 'Ekran kaydımda neden hiçbir şey duyulmuyor?', a: 'Mikrofon kapalıydı ya da kaydedilen uygulama sesi engelliyor. Çıkarmadan önce kaydın sesli oynatıldığını kontrol et.' }
        ],
        related: ['extract-audio-from-video-iphone', 'trim-audio-from-video-iphone', 'lecture-video-to-audio-iphone'],
        card: { title: 'Ekran kaydının sesi', text: 'Sesi kaydet ve neden eksik olduğunu öğren.' }
    },
    {
        slug: 'lecture-video-to-audio-iphone',
        keyword: 'ders videosunu sese çevirme',
        eyebrow: 'Ders',
        title: 'iPhone’da ders videosunu sese (MP3) çevirme rehberi',
        description: 'Kaydedilmiş dersleri, webinarları ve sunumları iPhone’da MP3’e çevir, her yerde çalış. Küçük dosyalar, çevrimdışı dinleme, kolay paylaşım. Adım adım rehber.',
        h1: 'iPhone’da ders videosu sese nasıl çevrilir?',
        answer: `Bir ders videosunu sese çevirmek için kaydı Fotoğraflar’da veya Dosyalar’da aç, Paylaş’a dokun, ${APP} uygulamasını seç ve “Sesi Çıkar”a dokun. MP3’ü Dosyalar’a kaydet ve çevrimdışı dinle — yolda, spor salonunda ya da ekran kapalıyken — çok daha az yer kaplayarak.`,
        intro: '<p>Bir derste önemli olan söylenenlerdir, görünenler değil. Sese çevrilen ders, istediğin yerde tekrar dinleyebileceğin bir podcast olur.</p>',
        steps: [
            STEP.share,
            { name: 'Beklemeleri ve araları kes (isteğe bağlı)', text: 'Başlangıçtan önceki bekleme süresini ve ihtiyacın olmayan soru-cevap kısmını kesmek için “Videoyu Kırp”a dokun.', image: 3 },
            STEP.extract,
            { name: 'Dersler klasörüne kaydet', text: 'Paylaş → Dosyalar’a Kaydet’e dokun ve her ders için bir klasör oluştur, böylece her şeyi hızla bulursun.', image: 4 }
        ],
        sections: [
            {
                h2: 'Neden sesle çalışmalı',
                html: `<ul>
<li><strong>Küçük dosyalar:</strong> Bir saatlik ses, bir saatlik videonun çok küçük bir kısmı kadar yer kaplar.</li>
<li><strong>Ekran kapalı:</strong> Telefon kilitliyken dinle, pilden tasarruf et.</li>
<li><strong>Her yerde:</strong> Yolda, yürüyüşte, spor salonunda — Wi-Fi gerekmez.</li>
</ul>`
            },
            {
                h2: 'Nota dönüştür',
                html: '<p>Metin mi lazım? Sesi zaten kullandığın transkripsiyon uygulamasına aktar ve daha sonra metinde ara.</p>'
            },
            {
                h2: 'Kuralları kontrol et',
                html: '<p>Birçok üniversite kişisel kullanım için kayda izin verir ama paylaşmaya izin vermez. Bir dersi kaydetmeden veya paylaşmadan önce kuralları kontrol et.</p>'
            }
        ],
        faq: [
            { q: 'iPhone’da ekran kapalıyken video dinleyebilir miyim?', a: 'Çoğu video oynatıcısı kilitleyince durur. MP3’e çevrildiğinde Dosyalar’da veya herhangi bir ses oynatıcıda ekran kapalıyken dinleyebilirsin.' },
            { q: 'Bir saatlik bir dersle çalışır mı?', a: 'Evet. Uzun kayıtlar aynı şekilde çalışır, sadece biraz daha uzun sürer.' },
            { q: 'Zoom veya webinar kayıtlarını çevirebilir miyim?', a: 'Evet, MP4 kaydı iPhone’undaki Fotoğraflar’da veya Dosyalar’da olduğu anda.' }
        ],
        related: ['screen-recording-to-audio-iphone', 'mp4-to-mp3-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Ders videosunu sese', text: 'Küçük MP3’lerle her yerde çalış.' }
    },
    {
        slug: 'video-to-ringtone-iphone',
        keyword: 'iphone videodan zil sesi yapma',
        eyebrow: 'Zil sesleri',
        title: 'iPhone’da videodan zil sesi nasıl yapılır? (iOS 26)',
        description: 'Her videoyu iPhone zil sesine çevir: sesi 30 sn’ye kırp, Dosyalar’a kaydet ve Paylaş → “Zil Sesi Olarak Kullan”a dokun. iOS 26 ve GarageBand yöntemi.',
        h1: 'iPhone’da videodan zil sesi nasıl yapılır?',
        answer: `Videodan zil sesi yapmak için videoyu ${APP} uygulamasında aç, en fazla 30 saniyeye kırp, M4A veya MP3 olarak çıkar ve Dosyalar’a kaydet. iOS 26’da dosyaya Dosyalar’da basılı tut, Paylaş’a dokun ve “Zil Sesi Olarak Kullan”ı seç. Eski iOS sürümlerinde sesi GarageBand’e aktar ve zil sesi olarak dışa aktar.`,
        intro: '<p>Bir kahkaha, partiden bir şarkı, köpeğinin havlaması — videolarındaki her ses zil sesin olabilir. iOS 26’da bir ses dosyan olduğu anda bu çok kolay.</p>',
        steps: [
            STEP.share,
            { name: '30 saniyeye kırp', text: '“Videoyu Kırp”a dokun ve en fazla 30 saniye seç — zil sesi sınırı budur.', image: 3 },
            { name: 'Çıkar ve Dosyalar’a kaydet', text: '“Sesi Çıkar”a (M4A veya MP3) dokun, sonra Paylaş → Dosyalar’a Kaydet.', image: 4 },
            { name: 'Zil Sesi Olarak Kullan', text: 'Dosyalar’da ses dosyasına basılı tut, Paylaş → “Zil Sesi Olarak Kullan”a dokun (iOS 26). Ayarlar → Sesler ve Dokunuş → Zil Sesi’nden kontrol et.', image: 4 }
        ],
        sections: [
            {
                h2: 'iOS 18’de: GarageBand yöntemi',
                html: `<ol>
<li>Sesi yukarıdaki gibi çıkar, kırp ve Dosyalar’a kaydet.</li>
<li>GarageBand’i aç, “Ses Kaydedici” ile bir proje başlat ve iz görünümüne geç.</li>
<li>Loop tarayıcısını aç → “Dosyalar” → “Dosyalar uygulamasındaki öğelere göz at” ve sesi bir ize sürükle.</li>
<li>“Şarkılarım”a dön, projeye basılı tut → Paylaş → Zil Sesi → Dışa Aktar.</li>
</ol>`
            },
            {
                h2: '“Zil Sesi Olarak Kullan” neden görünmüyor',
                html: `<ul>
<li>Dosya 30 saniyeden uzun — yeniden kırp.</li>
<li>Dosya MP3 veya M4A değil.</li>
<li>iPhone’un henüz iOS 26’da değil — GarageBand’i kullan.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'iPhone zil sesi en fazla ne kadar olabilir?', a: 'Ses dosyalarından oluşturulan özel zil sesleri en fazla 30 saniye olabilir.' },
            { q: 'iPhone zil sesi için hangi format gerekir?', a: 'iOS 26’da 30 saniyeden kısa MP3 veya M4A dosyaları “Zil Sesi Olarak Kullan” ile ayarlanabilir.' },
            { q: 'Bir videoyu doğrudan zil sesi yapabilir miyim?', a: 'Hayır. Önce videodan sesi çıkar, sonra ses dosyasını zil sesi olarak ayarla.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-m4a-iphone', 'save-music-from-video-iphone'],
        card: { title: 'Videodan zil sesi', text: 'iOS 26’da “Zil Sesi Olarak Kullan”, 4 adımda.' }
    }
);
