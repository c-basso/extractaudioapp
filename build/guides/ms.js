/**
 * Panduan Bahasa Melayu → /ms/guides/<slug>/
 * Slug sama dengan versi Inggeris (build/guides/en.js) supaya halaman dihubungkan melalui hreflang.
 * Kata kunci — lihat bahagian “Bahasa Melayu (MS)” dalam /keywords.md. Struktur medan — seperti en.js.
 * Tangkapan skrin: 1 kulit · 2 skrin ekstrak · 3 potong · 4 menu Kongsi · 5 pustaka
 */

const APP = 'Ekstrak Audio daripada Video⁺';

const STEP = {
    open: {
        name: 'Buka apl dan pilih video',
        text: `Buka ${APP} dan pilih video dari Foto atau Fail. Lebih pantas: dalam Foto, ketik Kongsi pada video dan pilih “Ekstrak Audio”.`,
        image: 2
    },
    share: {
        name: 'Hantar video ke apl',
        text: 'Buka video dalam Foto atau Fail, ketik Kongsi dan pilih “Ekstrak Audio”. Apl dibuka dengan video yang sudah dimuatkan.',
        image: 2
    },
    trim: {
        name: 'Potong bahagian yang dikehendaki (pilihan)',
        text: 'Ketik “Potong Video”, seret penanda kuning ke awal dan akhir bahagian yang dikehendaki, dengar, kemudian ketik “Simpan”.',
        image: 3
    },
    extract: {
        name: 'Ketik “Ekstrak Audio”',
        text: 'Ketik “Ekstrak Audio” – trek audio ditukar terus di iPhone dalam beberapa saat, dan tiada apa-apa dimuat naik ke internet.',
        image: 2
    },
    save: {
        name: 'Simpan atau hantar fail',
        text: 'Fail audio yang siap muncul dalam pustaka. Ketik Kongsi untuk menyimpannya ke Fail, menghantarnya melalui AirDrop atau ke mana-mana apl.',
        image: 4
    }
};

const guides = [];
module.exports = guides;

guides.push(
    {
        slug: 'extract-audio-from-video-iphone',
        keyword: 'cara ekstrak audio daripada video di iphone',
        eyebrow: 'Asas',
        title: 'Cara ekstrak audio daripada video di iPhone – panduan penuh',
        description: 'Ambil audio daripada mana-mana video di iPhone dengan empat ketikan: pilih video, potong, ketik “Ekstrak Audio” dan simpan sebagai MP3 atau M4A. Percuma.',
        h1: 'Cara ekstrak audio daripada video di iPhone',
        answer: `Untuk ekstrak audio daripada video di iPhone, buka ${APP}, pilih video dari Foto, potong jika perlu dan ketik “Ekstrak Audio”. Apl menyimpan trek audio sebagai MP3 atau M4A di iPhone dalam beberapa saat. Percuma dan berfungsi tanpa internet.`,
        intro: '<p>Apl Foto di iPhone tiada butang “simpan audio sahaja”. Anda boleh membina pintasan (lihat <a href="/ms/guides/extract-audio-without-app-iphone/">cara tanpa apl</a>) atau memuat naik video ke laman web, tetapi kedua-duanya perlahan jika anda hanya perlukan audio. Berikut cara paling pantas: apl percuma yang berfungsi terus dari menu Kongsi.</p>',
        steps: [STEP.open, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Apa yang anda perlukan',
                html: `<ul>
<li>iPhone dengan iOS 18.6 atau lebih baharu.</li>
<li>${APP} – percuma di App Store (kira-kira 23 MB).</li>
<li>Video yang ada bunyi: rakaman kamera (MOV), video yang dimuat turun (MP4), rakaman skrin, video daripada Mesej atau WhatsApp.</li>
</ul>`
            },
            {
                h2: 'Cara paling pantas – melalui Kongsi',
                html: '<p>Anda tidak perlu pun membuka apl. Dalam <strong>Foto</strong> atau <strong>Fail</strong>, buka video, ketik <strong>Kongsi</strong>, leret deretan apl dan pilih <strong>“Ekstrak Audio”</strong>. Jika tidak kelihatan, ketik “Lagi” dan tambahkannya ke kegemaran – selepas itu ia sentiasa sedia.</p>'
            },
            {
                h2: 'MP3 atau M4A – yang mana satu?',
                html: '<p><strong>MP3</strong> boleh dimainkan di mana-mana: Windows, Android, radio kereta, laman web dan penyunting video. <strong>M4A</strong> (AAC) ialah format asli Apple: lebih kecil pada kualiti yang sama, sesuai untuk nada dering, GarageBand dan iMovie. Jika ragu-ragu, pilih MP3. Selanjutnya: <a href="/ms/guides/convert-video-to-mp3-iphone/">video ke MP3</a> dan <a href="/ms/guides/video-to-m4a-iphone/">video ke M4A</a>.</p>'
            },
            {
                h2: 'Di mana audio disimpan?',
                html: '<p>Setiap fail yang diekstrak muncul dalam pustaka apl bersama tempoh, saiz dan tarikh. Dari situ ketik <strong>Kongsi → Simpan ke Fail</strong> untuk meletakkannya di iCloud Drive atau “Pada iPhone Saya”, atau hantar ke WhatsApp, Telegram, Nota, GarageBand atau melalui AirDrop ke komputer.</p>'
            },
            {
                h2: 'Jika ada masalah',
                html: `<ul>
<li><strong>Fail tiada bunyi.</strong> Video itu sendiri tiada trek audio – ini berlaku pada rakaman skrin tanpa mikrofon. Semak video dalam Foto terlebih dahulu.</li>
<li><strong>Video berada dalam iCloud.</strong> Foto memuat turun fail asal dahulu – tunggu sehingga selesai.</li>
<li><strong>Hanya perlukan 20 saat.</strong> Potong sebelum mengekstrak – lihat <a href="/ms/guides/trim-audio-from-video-iphone/">cara memotong sebahagian audio</a>.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Bolehkah ekstrak audio daripada video di iPhone secara percuma?', a: `Boleh. ${APP} percuma dimuat turun dan ekstrak audio asas juga percuma. Ciri tambahan tersedia melalui pembelian dalam apl.` },
            { q: 'Adakah kualiti menurun semasa ekstrak audio?', a: 'Apl menyimpan trek audio video sebagai MP3 atau M4A berkualiti tinggi. Bunyi tidak akan lebih baik daripada asal, tetapi sama seperti semasa video dimainkan.' },
            { q: 'Bolehkah ekstrak audio daripada video yang panjang?', a: 'Boleh. Kuliah, konsert dan mesyuarat diproses dengan cara yang sama, cuma lebih lama sedikit. Jika hanya perlukan sebahagian, potong dahulu.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'trim-audio-from-video-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Ekstrak audio daripada video di iPhone', text: 'Cara empat ketikan – dari Foto atau melalui Kongsi.' }
    },
    {
        slug: 'convert-video-to-mp3-iphone',
        keyword: 'cara tukar video ke mp3 di iphone',
        eyebrow: 'Video ke MP3',
        title: 'Cara tukar video ke MP3 di iPhone – pantas dan percuma',
        description: 'Tukar mana-mana video iPhone ke MP3 dalam beberapa saat. Berfungsi dari Foto, fail kekal pada peranti dan boleh dipotong sebelum eksport.',
        h1: 'Cara tukar video ke MP3 di iPhone',
        answer: `Buka video dalam Foto, ketik Kongsi dan pilih “Ekstrak Audio” (${APP}). Potong jika perlu, ketik “Ekstrak Audio” dan simpan sebagai MP3. Fail kekal di iPhone – boleh dihantar ke Fail, melalui AirDrop atau ke mana-mana apl. Tidak perlu komputer atau akaun.`,
        intro: '<p>MP3 ialah format audio paling serasi: boleh dimainkan dalam mana-mana kereta, komputer dan penyunting. Begini cara menukar video ke MP3 tanpa melepaskan iPhone dari tangan.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Ekstrak ke MP3', text: 'Ketik “Ekstrak Audio” dan pilih format MP3. Penukaran video ke MP3 berlaku terus di iPhone.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'Kenapa apl, bukan penukar online?',
                html: '<p>Penukar online memerlukan anda memuat naik seluruh video, menunggu giliran dan memuat turun MP3 semula – perlahan dengan data mudah alih dan berisiko untuk video peribadi. Apl berfungsi di luar talian, menyimpan fail pada peranti dan membolehkan anda memotong rakaman sebelum ditukar. Perbandingan penuh: <a href="/ms/guides/extract-audio-online-vs-app/">online atau apl</a>.</p>'
            },
            {
                h2: 'Video apa yang boleh ditukar ke MP3?',
                html: '<p>Semua yang boleh dimainkan oleh iPhone: rakaman kamera (<a href="/ms/guides/mov-to-mp3-iphone/">MOV</a>), video yang dimuat turun (<a href="/ms/guides/mp4-to-mp3-iphone/">MP4</a>), <a href="/ms/guides/screen-recording-to-audio-iphone/">rakaman skrin</a>, serta video daripada Mesej, WhatsApp, Telegram dan AirDrop.</p>'
            },
            {
                h2: 'Apa yang boleh dibuat dengan MP3',
                html: `<ul>
<li>Simpan ke <strong>Fail</strong> dan dengar di luar talian.</li>
<li>Hantar ke komputer melalui <strong>AirDrop</strong>.</li>
<li>Jadikan 30 saat sebagai <a href="/ms/guides/video-to-ringtone-iphone/">nada dering</a>.</li>
<li>Tambah ke GarageBand, CapCut atau penyunting podcast.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Bolehkah iPhone menukar video ke MP3 tanpa apl?', a: 'Tidak secara terus. Pintasan hanya boleh menyimpan audio sebagai M4A. Untuk MP3 di iPhone, anda perlukan apl atau laman web.' },
            { q: 'Adakah penukaran ke MP3 percuma?', a: `Ya, penukaran asas dalam ${APP} adalah percuma. Ciri tambahan melalui pembelian dalam apl.` },
            { q: 'Perlukah internet untuk menukar video ke MP3?', a: 'Tidak. Penukaran berlaku di iPhone dan berfungsi di luar talian. Hanya video yang disimpan dalam iCloud perlu dimuat turun dahulu.' }
        ],
        related: ['mp4-to-mp3-iphone', 'mov-to-mp3-iphone', 'video-to-m4a-iphone'],
        card: { title: 'Video ke MP3 di iPhone', text: 'Mana-mana video menjadi MP3 universal.' }
    }
);

guides.push(
    {
        slug: 'mp4-to-mp3-iphone',
        keyword: 'mp4 ke mp3 iphone',
        eyebrow: 'MP4 ke MP3',
        title: 'MP4 ke MP3 di iPhone: penukar percuma tanpa muat naik',
        description: 'Tukar MP4 ke MP3 di iPhone secara percuma: buka fail dalam Fail atau Foto, kemudian ketik Kongsi → “Ekstrak Audio”. Berfungsi di luar talian, dengan potongan.',
        h1: 'Cara tukar MP4 ke MP3 di iPhone',
        answer: `Untuk menukar MP4 ke MP3 di iPhone, buka fail dalam Fail atau Foto, ketik Kongsi dan pilih “Ekstrak Audio”. Dalam ${APP}, potong jika mahu, ketik “Ekstrak Audio”, pilih MP3 dan simpan. Percuma, pada peranti, tanpa internet.`,
        intro: '<p>Fail MP4 biasanya datang sebagai muat turun, lampiran e-mel atau melalui AirDrop, jadi ia sering berada dalam apl <strong>Fail</strong>, bukan dalam Foto. Apl ini berfungsi dengan kedua-duanya.</p>',
        steps: [
            { name: 'Cari fail MP4', text: 'Buka Fail (Muat Turun, iCloud Drive atau “Pada iPhone Saya”) atau Foto dan cari MP4.', image: 2 },
            { name: 'Hantar ke “Ekstrak Audio”', text: 'Tekan lama pada fail dan pilih Kongsi → “Ekstrak Audio”. MP4 dibuka dalam apl.', image: 2 },
            STEP.trim,
            { name: 'Simpan sebagai MP3', text: 'Ketik “Ekstrak Audio”, pilih MP3, kemudian Kongsi → Simpan ke Fail supaya MP3 berada di sebelah MP4 asal.', image: 4 }
        ],
        sections: [
            {
                h2: 'Perbezaan MP4 dan MP3',
                html: '<p>MP4 ialah bekas yang mengandungi gambar dan bunyi; MP3 hanya mengandungi bunyi. Apabila MP4 ditukar ke MP3, trek audio dikekalkan dan gambar dibuang: fail menjadi jauh lebih kecil dan boleh dimainkan dalam mana-mana pemain.</p>'
            },
            {
                h2: 'MP4 daripada WhatsApp, Telegram dan e-mel',
                html: '<p>Simpan lampiran dahulu: dalam sembang, buka video → Kongsi → “Simpan Video” (ke Foto) atau “Simpan ke Fail”. Kemudian ikut langkah di atas. Tukar hanya video anda sendiri atau video yang anda ada hak.</p>'
            },
            {
                h2: 'Perlukan M4A?',
                html: '<p>Untuk nada dering dan apl Apple, M4A lebih sesuai. Lihat <a href="/ms/guides/video-to-m4a-iphone/">cara simpan video sebagai M4A di iPhone</a>.</p>'
            }
        ],
        faq: [
            { q: 'Bolehkah MP4 ditukar ke MP3 secara percuma di iPhone?', a: `Boleh. ${APP} menukar MP4 ke MP3 secara percuma terus pada peranti. Pembelian dalam apl membuka ciri tambahan.` },
            { q: 'Adakah MP3 lebih kecil daripada MP4?', a: 'Ya, biasanya jauh lebih kecil: trek video dibuang dan hanya bunyi yang tinggal.' },
            { q: 'Bolehkah menukar banyak fail MP4?', a: 'Boleh. Tukar satu demi satu – semua MP3 disimpan dalam pustaka apl.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'mov-to-mp3-iphone', 'extract-audio-online-vs-app'],
        card: { title: 'MP4 ke MP3 di iPhone', text: 'MP4 yang dimuat turun dari Fail dan Foto ke MP3.' }
    },
    {
        slug: 'mov-to-mp3-iphone',
        keyword: 'mov ke mp3 iphone',
        eyebrow: 'MOV ke MP3',
        title: 'MOV ke MP3 di iPhone – bunyi daripada video kamera iPhone',
        description: 'Video daripada kamera iPhone ialah fail MOV. Tukar MOV ke MP3 terus pada telefon: pilih video, potong dan ketik “Ekstrak Audio”. Percuma dan offline.',
        h1: 'Cara tukar MOV ke MP3 di iPhone',
        answer: `Semua video daripada kamera iPhone disimpan dalam format MOV. Untuk mendapatkan MP3, buka video dalam Foto, ketik Kongsi → “Ekstrak Audio”, potong jika perlu dan ketik “Ekstrak Audio” dalam ${APP}. MP3 disimpan di iPhone – tidak perlu komputer.`,
        intro: '<p>MOV ialah format video Apple yang digunakan oleh kamera iPhone: konsert, ucapan, kawan bermain gitar, suara yang anda mahu simpan. Sebagai MP3, bunyi itu boleh didengar di mana-mana.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Bila MOV ke MP3 berguna',
                html: `<ul>
<li>Simpan bunyi konsert atau persembahan yang anda rakam.</li>
<li>Jadikan ucapan atau ucapan tahniah sebagai kenangan audio.</li>
<li>Hantar rakaman latihan kepada band tanpa video yang besar.</li>
<li>Dengar <a href="/ms/guides/lecture-video-to-audio-iphone/">rakaman kuliah</a> semasa dalam perjalanan.</li>
</ul>`
            },
            {
                h2: 'HEVC, 4K dan mod Sinematik',
                html: '<p>Video HEVC dan 4K diproses dengan cara yang sama. Hanya audio yang ditukar, jadi fail MOV yang sangat besar pun menghasilkan fail audio yang kecil.</p>'
            },
            {
                h2: 'Kenapa tidak perlu komputer',
                html: '<p>Memindahkan MOV bersaiz beberapa gigabait ke komputer semata-mata untuk audionya mengambil masa lebih lama daripada menukarnya di telefon. Apl melakukannya di tempat video sudah berada.</p>'
            }
        ],
        faq: [
            { q: 'Dalam format apa iPhone merakam video?', a: 'Kamera iPhone merakam fail MOV, biasanya dengan video HEVC atau H.264 dan audio AAC.' },
            { q: 'Bolehkah MOV ditukar ke MP3 tanpa kehilangan kualiti?', a: 'Apl mengekalkan kualiti rakaman asal: MP3 berbunyi sama seperti semasa video dimainkan.' },
            { q: 'Bolehkah MOV disimpan sebagai M4A?', a: 'Boleh, pilih format M4A. Ia praktikal untuk nada dering dan apl Apple.' }
        ],
        related: ['mp4-to-mp3-iphone', 'convert-video-to-mp3-iphone', 'save-music-from-video-iphone'],
        card: { title: 'MOV ke MP3', text: 'Bunyi daripada video kamera iPhone.' }
    },
    {
        slug: 'video-to-m4a-iphone',
        keyword: 'video ke m4a iphone',
        eyebrow: 'Video ke M4A',
        title: 'Video ke M4A di iPhone – MP4 dan MOV ke M4A percuma',
        description: 'Simpan audio video sebagai M4A di iPhone untuk nada dering, GarageBand dan apl Apple. Percuma, pada peranti, dengan potongan – MP4 atau MOV ke M4A.',
        h1: 'Cara simpan audio video sebagai M4A di iPhone',
        answer: `Untuk menukar video ke M4A di iPhone, hantar video dari Foto atau Fail ke “Ekstrak Audio”, potong jika mahu, ketik “Ekstrak Audio” dan pilih M4A. ${APP} menyimpan fail M4A (AAC) yang sesuai untuk GarageBand, iMovie, pemain muzik dan nada dering.`,
        intro: '<p>M4A ialah format audio asli Apple. Pada kualiti yang serupa, ia lebih kecil daripada MP3, dan inilah format yang diperlukan iPhone untuk nada dering dan projek GarageBand.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Ekstrak ke M4A', text: 'Ketik “Ekstrak Audio” dan pilih format M4A.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'M4A atau MP3 – bila memilih M4A',
                html: `<table class="guide-table"><thead><tr><th></th><th>M4A (AAC)</th><th>MP3</th></tr></thead><tbody>
<tr><td>Paling sesuai untuk</td><td>iPhone, Mac, nada dering, GarageBand</td><td>Selebihnya – Windows, Android, kereta</td></tr>
<tr><td>Saiz fail</td><td>Lebih kecil pada kualiti sama</td><td>Sedikit lebih besar</td></tr>
<tr><td>Keserasian</td><td>Sangat baik</td><td>Universal</td></tr>
</tbody></table>`
            },
            {
                h2: 'Jadikan M4A nada dering',
                html: '<p>Dalam iOS 26, fail M4A yang kurang daripada 30 saat boleh dijadikan nada dering terus dari Fail. Selanjutnya: <a href="/ms/guides/video-to-ringtone-iphone/">cara buat nada dering daripada video</a>.</p>'
            },
            {
                h2: 'Buka dalam GarageBand atau iMovie',
                html: '<p>Simpan M4A ke Fail, kemudian import melalui pelayar fail dalam GarageBand atau iMovie – sebagai muzik latar, naratif atau kesan bunyi.</p>'
            }
        ],
        faq: [
            { q: 'Adakah M4A lebih baik daripada MP3?', a: 'Pada kadar bit yang sama, M4A (AAC) biasanya berbunyi sama baik atau lebih baik dan menggunakan kurang ruang. MP3 serasi dengan lebih banyak peranti.' },
            { q: 'Bolehkah membuat M4A dengan Pintasan?', a: 'Boleh, tindakan “Kodkan Media” dengan pilihan “Audio Sahaja” menghasilkan M4A. Tetapi cara itu tidak boleh memotong audio atau menyimpan MP3 – apl boleh.' },
            { q: 'Adakah menyimpan sebagai M4A percuma?', a: `Ya, ekstrak asas dalam ${APP} adalah percuma, termasuk eksport ke M4A.` }
        ],
        related: ['video-to-ringtone-iphone', 'convert-video-to-mp3-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Video ke M4A', text: 'Format Apple untuk nada dering dan GarageBand.' }
    }
);

guides.push(
    {
        slug: 'extract-audio-without-app-iphone',
        keyword: 'cara ekstrak audio daripada video di iphone tanpa apl',
        eyebrow: 'Pintasan atau apl',
        title: 'Cara ekstrak audio daripada video di iPhone tanpa apl',
        description: 'Audio video di iPhone boleh diambil tanpa apl – dengan Pintasan dan tindakan “Kodkan Media”. Tetapan lengkap, had kaedah ini dan alternatif yang lebih pantas.',
        h1: 'Cara ekstrak audio daripada video di iPhone tanpa apl',
        answer: 'Tanpa apl pihak ketiga, audio boleh diambil dengan Pintasan: tambah tindakan “Kodkan Media”, hidupkan “Audio Sahaja”, tambah “Simpan Fail” dan hidupkan paparan dalam menu Kongsi. Kemudian hantar video ke pintasan itu. Hasilnya hanya M4A dan tanpa potongan; untuk MP3 dan klip pendek, apl lebih pantas.',
        intro: '<p>Apl Pintasan percuma daripada Apple boleh mengasingkan bunyi daripada video. Tetapannya hanya beberapa minit. Berikut resipi tepatnya – dan hadnya.</p>',
        steps: [
            { name: 'Cipta pintasan baharu', text: 'Buka Pintasan, ketik + dan namakan pintasan “Audio daripada video”.', image: 2 },
            { name: 'Tambah “Kodkan Media”', text: 'Ketik “Tambah Tindakan”, cari “Kodkan Media”, tambahkannya, kembangkan pilihan dengan anak panah dan hidupkan “Audio Sahaja”.', image: 2 },
            { name: 'Tambah “Simpan Fail”', text: 'Tambah tindakan “Simpan Fail” supaya hasilnya masuk ke Fail.', image: 4 },
            { name: 'Papar dalam menu Kongsi', text: 'Buka butiran pintasan (ikon i), hidupkan “Tunjukkan dalam Helaian Kongsi” dan benarkan jenis “Media”. Sekarang hantar video dari Foto dan pilih pintasan tersebut.', image: 4 }
        ],
        sections: [
            {
                h2: 'Had kaedah Pintasan',
                html: `<ul>
<li><strong>Hanya M4A</strong> – tidak boleh MP3.</li>
<li><strong>Tiada potongan</strong> – sentiasa menyimpan keseluruhan trek audio.</li>
<li><strong>Tiada pustaka</strong> – fail masuk ke Fail dan perlu dicari serta dinamakan semula secara manual.</li>
<li>Untuk video panjang, pintasan boleh berhenti tanpa mesej ralat yang jelas.</li>
</ul>`
            },
            {
                h2: 'Pilihan satu ketikan',
                html: `<p>${APP} melakukan perkara yang sama, tetapi dengan potongan, pilihan MP3 atau M4A dan pustaka semua fail yang diekstrak. Apl ini juga ada dalam menu Kongsi, jadi ia tidak lebih perlahan – dan tiada apa-apa yang perlu dibina.</p>`
            },
            {
                h2: 'Cara lain tanpa apl',
                html: '<p>Bunyi juga boleh diasingkan dalam iMovie atau GarageBand, tetapi langkahnya lebih banyak dan format eksportnya terhad. Laman web juga boleh digunakan, tetapi video perlu dimuat naik ke internet – lihat <a href="/ms/guides/extract-audio-online-vs-app/">online atau apl</a>.</p>'
            }
        ],
        faq: [
            { q: 'Adakah iPhone mempunyai cara terbina dalam untuk ekstrak audio?', a: 'Foto tiada butang khas. Pilihan terbina dalam yang paling hampir ialah tindakan “Kodkan Media” dengan “Audio Sahaja” dalam apl Pintasan.' },
            { q: 'Dalam format apa pintasan menyimpan audio?', a: 'M4A. Tidak boleh menyimpan MP3 melalui Pintasan.' },
            { q: 'Bolehkah audio dipotong dengan pintasan?', a: `Tidak dengan mudah. Untuk memotong, gunakan apl dengan garis masa, contohnya ${APP}.` }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-online-vs-app', 'video-to-m4a-iphone'],
        card: { title: 'Tanpa apl (Pintasan)', text: 'Resipi percuma dan hadnya.' }
    },
    {
        slug: 'extract-audio-online-vs-app',
        keyword: 'ekstrak audio video online',
        eyebrow: 'Online atau apl',
        title: 'Ekstrak audio video secara online atau dengan apl iPhone?',
        description: 'Ekstrak audio daripada video secara online atau dengan apl? Kami bandingkan privasi, kelajuan, had dan potongan di iPhone – dan pilihan terbaik untuk anda.',
        h1: 'Ekstrak audio video secara online atau dengan apl: mana satu di iPhone',
        answer: `Perkhidmatan online boleh digunakan pada mana-mana peranti, tetapi anda perlu memuat naik seluruh video, menunggu pemprosesan dan memuat turun hasilnya – perlahan dengan data mudah alih dan tidak selamat untuk rakaman peribadi. Di iPhone, apl seperti ${APP} lebih pantas, berfungsi di luar talian, menyimpan video pada peranti dan boleh memotong audio.`,
        intro: '<p>Carian “ekstrak audio video online” memaparkan berpuluh-puluh laman percuma. Pada komputer riba dengan internet laju, ia mudah. Di iPhone, ceritanya berbeza.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Perbandingan',
                html: `<table class="guide-table"><thead><tr><th></th><th>Perkhidmatan online</th><th>${APP}</th></tr></thead><tbody>
<tr><td>Privasi</td><td>Video dimuat naik ke pelayan orang lain</td><td>Kekal di iPhone</td></tr>
<tr><td>Kelajuan</td><td>Muat naik + giliran + muat turun</td><td>Saat, pada peranti</td></tr>
<tr><td>Tanpa internet</td><td>Tidak</td><td>Ya</td></tr>
<tr><td>Had saiz</td><td>Kerap pada pelan percuma</td><td>Hanya storan iPhone</td></tr>
<tr><td>Potongan</td><td>Kadang-kadang</td><td>Garis masa terbina dalam</td></tr>
<tr><td>Iklan dan tetingkap timbul</td><td>Kerap</td><td>Tiada iklan web</td></tr>
<tr><td>Harga</td><td>Percuma dengan had</td><td>Ciri asas percuma</td></tr>
</tbody></table>`
            },
            {
                h2: 'Bila perkhidmatan online masuk akal',
                html: '<p>Jika anda menggunakan komputer Windows dan video sudah ada di situ, penukar online yang dipercayai sudah memadai. Jangan muat naik perkara peribadi: video keluarga, mesyuarat kerja atau bahan pelanggan.</p>'
            },
            {
                h2: 'Bila apl lebih baik',
                html: '<p>Jika video ada di iPhone, apl menang: tidak perlu memuat naik melalui rangkaian mudah alih, menunggu dan memuat turun hasil, dan bahagian yang diperlukan boleh dipotong dengan tepat.</p>'
            }
        ],
        faq: [
            { q: 'Adakah selamat ekstrak audio video secara online?', a: 'Bergantung pada laman. Video dimuat naik ke pelayan pihak ketiga, jadi elakkan untuk rakaman peribadi. Apl yang berfungsi pada peranti tidak memuat naik apa-apa.' },
            { q: 'Bolehkah ekstrak audio secara percuma di iPhone tanpa muat naik?', a: `Boleh. ${APP} menukar video secara percuma terus pada peranti, dan video tidak dihantar ke mana-mana.` },
            { q: 'Kenapa penukaran online di telefon begitu perlahan?', a: 'Seluruh video perlu dimuat naik dahulu. Video daripada telefon bersaiz besar, dan kelajuan muat naik rangkaian mudah alih biasanya jauh lebih rendah daripada kelajuan muat turun.' }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-without-app-iphone', 'mp4-to-mp3-iphone'],
        card: { title: 'Online atau apl', text: 'Privasi, kelajuan dan had – perbandingan.' }
    },
    {
        slug: 'save-music-from-video-iphone',
        keyword: 'cara ambil lagu dari video di iphone',
        eyebrow: 'Muzik',
        title: 'Cara ambil lagu dari video di iPhone (MP3 atau M4A)',
        description: 'Simpan lagu atau muzik latar daripada video di iPhone sebagai MP3 atau M4A. Potong tepat mengikut lagu, dengar di luar talian dan kongsi. Panduan ringkas.',
        h1: 'Cara ambil lagu dari video di iPhone',
        answer: `Untuk mengambil lagu dari video di iPhone, buka video dalam Foto, ketik Kongsi → “Ekstrak Audio”, tandakan lagu dengan penanda dan ketik “Ekstrak Audio” dalam ${APP}. Muzik disimpan sebagai MP3 atau M4A – dengar di luar talian dalam Fail atau hantar ke mana-mana apl.`,
        intro: '<p>Lagu dari majlis perkahwinan, cover rakan, muzik daripada suntingan anda sendiri – kadangkala bahagian paling berharga dalam video ialah bunyinya. Begini cara menyimpannya sebagai fail muzik berasingan.</p>',
        steps: [STEP.share, { name: 'Tandakan lagu', text: 'Ketik “Potong Video” dan seret penanda kuning supaya hanya lagu yang tinggal. Dengar permulaan dan penghujungnya.', image: 3 }, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Cara mendapat bunyi terbaik',
                html: `<ul>
<li>Buang perbualan dan tepukan di awal dan akhir.</li>
<li>MP3 untuk kereta dan pemain lama, M4A untuk peranti Apple.</li>
<li>Namakan semula fail dalam Fail (tekan lama → “Namakan Semula”) supaya mudah dicari.</li>
</ul>`
            },
            {
                h2: 'Tentang hak cipta',
                html: '<p>Simpan muzik daripada video anda sendiri atau video yang anda ada hak. Lagu komersial dilindungi hak cipta: salinan peribadi rakaman anda sendiri tidak mengapa, menyiarkan muzik orang lain tidak dibenarkan.</p>'
            },
            {
                h2: 'Jadikan nada dering',
                html: '<p>Sudah jumpa 30 saat kegemaran anda? <a href="/ms/guides/video-to-ringtone-iphone/">Jadikannya nada dering</a>.</p>'
            }
        ],
        faq: [
            { q: 'Bagaimana ambil lagu dari video di iPhone?', a: `Hantar video ke ${APP}, tandakan lagu semasa memotong dan ketik “Ekstrak Audio”. Lagu disimpan sebagai fail audio.` },
            { q: 'Bolehkah lagu yang diekstrak ditambah ke Apple Music?', a: 'Apl Muzik di iPhone tidak mengimport fail tempatan secara terus. Simpan fail dalam Fail atau segerakkan melalui Mac atau PC.' },
            { q: 'Bolehkah ambil muzik dari video WhatsApp atau Mesej?', a: 'Boleh. Simpan video ke Foto atau Fail dahulu, kemudian ekstrak audionya.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-ringtone-iphone', 'mov-to-mp3-iphone'],
        card: { title: 'Ambil lagu dari video', text: 'Simpan lagunya, tinggalkan gambarnya.' }
    }
);

guides.push(
    {
        slug: 'trim-audio-from-video-iphone',
        keyword: 'cara potong audio daripada video di iphone',
        eyebrow: 'Potong',
        title: 'Cara potong sebahagian audio daripada video di iPhone',
        description: 'Hanya perlukan 10 saat audio? Potong video di iPhone dan simpan bahagian itu sahaja sebagai MP3 atau M4A. Penanda, pratonton dan eksport – percuma.',
        h1: 'Cara ambil sebahagian sahaja audio daripada video di iPhone',
        answer: `Untuk memotong sebahagian audio daripada video di iPhone, buka video dalam ${APP}, ketik “Potong Video”, seret penanda kuning mula dan akhir di sekitar bahagian yang dikehendaki, ketik “Simpan”, kemudian “Ekstrak Audio”. Hanya bahagian yang dipilih disimpan sebagai MP3 atau M4A.`,
        intro: '<p>Selalunya yang diperlukan bukan seluruh trek audio, tetapi satu petikan, korus atau kesan bunyi. Dengan memotong dahulu, anda mendapat klip yang kecil dan bersih.</p>',
        steps: [
            STEP.open,
            { name: 'Ketik “Potong Video”', text: 'Pada skrin ekstrak, ketik “Potong Video” untuk membuka garis masa.', image: 2 },
            { name: 'Seret penanda', text: 'Seret penanda kuning kiri ke titik mula dan kanan ke titik akhir. Masa pilihan dipaparkan di sebelahnya. Dengar, kemudian ketik “Simpan”.', image: 3 },
            { name: 'Ekstrak dan simpan', text: 'Ketik “Ekstrak Audio” – hanya bahagian yang dipotong dieksport. Hantar atau simpan ke Fail.', image: 4 }
        ],
        sections: [
            {
                h2: 'Petua memotong dengan tepat',
                html: `<ul>
<li>Tinggalkan setengah saat sebelum dan selepas percakapan supaya perkataan tidak terpotong.</li>
<li>Untuk nada dering, pilih maksimum 30 saat.</li>
<li>Perlukan beberapa bahagian daripada video yang sama? Ulang potongan untuk setiap bahagian – semua fail disimpan dalam pustaka.</li>
</ul>`
            },
            {
                h2: 'Apa yang biasanya dipotong',
                html: '<p>Satu ayat daripada ucapan, korus lagu, kesan bunyi untuk suntingan, perkataan pertama anak atau satu minit paling penting daripada rakaman mesyuarat yang panjang.</p>'
            }
        ],
        faq: [
            { q: 'Bolehkah memotong audio daripada video di iPhone?', a: `Boleh. Potong video kepada bahagian yang dikehendaki dalam ${APP} dan ekstrak audionya – hanya bahagian itu disimpan.` },
            { q: 'Adakah potongan mengubah video asal?', a: 'Tidak. Video asal dalam Foto kekal sama; hanya fail audio yang dieksport dipotong.' },
            { q: 'Bolehkah memotong beberapa bahagian daripada satu video?', a: 'Boleh. Potong dan ekstrak semula untuk setiap bahagian yang diperlukan.' }
        ],
        related: ['video-to-ringtone-iphone', 'save-music-from-video-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Potong sebahagian audio', text: 'Potongan tepat sehingga ke saat.' }
    },
    {
        slug: 'screen-recording-to-audio-iphone',
        keyword: 'ambil bunyi daripada rakaman skrin iphone',
        eyebrow: 'Rakaman skrin',
        title: 'Cara simpan bunyi daripada rakaman skrin iPhone (MP3/M4A)',
        description: 'Tukar rakaman skrin iPhone kepada fail MP3 atau M4A. Kenapa rakaman tiada bunyi, cara memotong bahagian yang betul dan menyimpan audionya. Langkah mudah.',
        h1: 'Cara simpan bunyi daripada rakaman skrin di iPhone',
        answer: `Rakaman skrin iPhone disimpan dalam Foto sebagai video. Untuk mendapatkan bunyinya, buka rakaman, ketik Kongsi → “Ekstrak Audio”, potong jika perlu dan ketik “Ekstrak Audio” dalam ${APP}. Jika fail tiada bunyi, bunyi memang tidak dirakam – hidupkan mikrofon sebelum merakam.`,
        intro: '<p>Rakaman skrin sering digunakan untuk menyimpan mesej suara, panggilan pembesar suara atau klip daripada apl. Begini cara menyimpan bunyinya sahaja.</p>',
        steps: [
            { name: 'Cari rakaman dalam Foto', text: 'Rakaman skrin ada dalam Foto → Jenis Media → Rakaman Skrin.', image: 2 },
            { name: 'Hantar ke “Ekstrak Audio”', text: 'Buka rakaman, ketik Kongsi dan pilih “Ekstrak Audio”.', image: 2 },
            STEP.trim,
            { name: 'Ekstrak dan simpan', text: 'Ketik “Ekstrak Audio” dan simpan MP3 atau M4A ke Fail.', image: 4 }
        ],
        sections: [
            {
                h2: 'Kenapa rakaman skrin tiada bunyi?',
                html: `<ul>
<li><strong>Mikrofon dimatikan:</strong> dalam Pusat Kawalan, tekan lama butang Rakaman Skrin dan hidupkan “Mikrofon” supaya suara anda turut dirakam.</li>
<li><strong>Mod senyap:</strong> sesetengah apl mematikan bunyinya dalam mod senyap.</li>
<li><strong>Kandungan dilindungi:</strong> banyak perkhidmatan penstriman menyekat bunyi semasa rakaman skrin – ini sekatan yang tidak boleh dielakkan.</li>
</ul>`
            },
            {
                h2: 'Hormati privasi',
                html: '<p>Rakam dan simpan panggilan atau perbualan hanya dengan persetujuan semua pihak dan mengikut undang-undang di tempat anda.</p>'
            }
        ],
        faq: [
            { q: 'Bolehkah rakaman skrin ditukar ke MP3?', a: 'Boleh. Rakaman skrin ialah video biasa, jadi bunyinya boleh disimpan sebagai MP3 atau M4A.' },
            { q: 'Di mana rakaman skrin disimpan di iPhone?', a: 'Dalam apl Foto, bahagian Jenis Media → Rakaman Skrin.' },
            { q: 'Kenapa rakaman skrin tiada bunyi?', a: 'Mikrofon dimatikan atau apl menyekat rakaman bunyi. Sebelum mengekstrak, pastikan rakaman berbunyi semasa dimainkan.' }
        ],
        related: ['extract-audio-from-video-iphone', 'trim-audio-from-video-iphone', 'lecture-video-to-audio-iphone'],
        card: { title: 'Bunyi daripada rakaman skrin', text: 'Simpan bunyinya dan ketahui kenapa ia hilang.' }
    }
);

guides.push(
    {
        slug: 'lecture-video-to-audio-iphone',
        keyword: 'tukar video kuliah kepada audio',
        eyebrow: 'Pembelajaran',
        title: 'Cara tukar video kuliah kepada audio (MP3) di iPhone',
        description: 'Tukar rakaman kuliah, webinar dan ceramah kepada MP3 di iPhone dan belajar semasa dalam perjalanan. Fail kecil, dengar di luar talian, mudah dikongsi.',
        h1: 'Cara tukar video kuliah kepada audio di iPhone',
        answer: `Untuk menukar video kuliah kepada audio, buka rakaman dalam Foto atau Fail, ketik Kongsi → “Ekstrak Audio”, kemudian ketik “Ekstrak Audio” dalam ${APP}. Simpan MP3 ke Fail dan dengar di luar talian – dalam perjalanan, di gim atau dengan skrin dimatikan, dengan saiz fail yang jauh lebih kecil.`,
        intro: '<p>Dalam kuliah, yang penting ialah apa yang disampaikan, bukan apa yang ditunjukkan. Dengan menukar video kuliah kepada audio, anda mendapat podcast yang boleh didengar semula di mana-mana.</p>',
        steps: [
            STEP.share,
            { name: 'Buang pembukaan dan rehat (pilihan)', text: 'Ketik “Potong Video” untuk membuang masa menunggu sebelum bermula dan sesi soal jawab yang tidak diperlukan.', image: 3 },
            STEP.extract,
            { name: 'Simpan ke folder “Kuliah”', text: 'Ketik Kongsi → Simpan ke Fail dan cipta folder untuk setiap kursus supaya rakaman mudah dicari.', image: 4 }
        ],
        sections: [
            {
                h2: 'Kenapa belajar melalui audio lebih praktikal',
                html: `<ul>
<li><strong>Fail kecil:</strong> sejam audio jauh lebih kecil daripada sejam video.</li>
<li><strong>Skrin dimatikan:</strong> dengar dengan telefon dikunci dan jimatkan bateri.</li>
<li><strong>Di mana-mana:</strong> dalam LRT, semasa berjalan, di gim – tanpa Wi‑Fi.</li>
</ul>`
            },
            {
                h2: 'Jadikan nota',
                html: '<p>Perlukan teks? Import audio ke apl transkripsi yang anda gunakan dan cari dalam teksnya.</p>'
            },
            {
                h2: 'Semak peraturan',
                html: '<p>Banyak universiti membenarkan rakaman kuliah untuk kegunaan peribadi tetapi tidak untuk diedarkan. Semak peraturan kursus sebelum merakam atau berkongsi kuliah.</p>'
            }
        ],
        faq: [
            { q: 'Bolehkah mendengar video di iPhone dengan skrin dimatikan?', a: 'Kebanyakan pemain video berhenti apabila telefon dikunci. Jika video ditukar ke MP3, anda boleh mendengarnya dengan skrin dimatikan dalam Fail atau mana-mana pemain audio.' },
            { q: 'Bolehkah untuk kuliah sejam?', a: 'Boleh. Rakaman panjang diproses dengan cara yang sama, cuma lebih lama sedikit.' },
            { q: 'Bolehkah menukar rakaman Zoom dan webinar?', a: 'Boleh, selagi rakaman MP4 sudah berada dalam Foto atau Fail di iPhone.' }
        ],
        related: ['screen-recording-to-audio-iphone', 'mp4-to-mp3-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Video kuliah kepada audio', text: 'Belajar dalam perjalanan dengan MP3 yang padat.' }
    },
    {
        slug: 'video-to-ringtone-iphone',
        keyword: 'cara buat nada dering daripada video di iphone',
        eyebrow: 'Nada dering',
        title: 'Cara buat nada dering daripada video di iPhone (iOS 26)',
        description: 'Jadikan mana-mana video nada dering iPhone: potong audio kepada 30 saat, simpan ke Fail dan ketik Kongsi → “Guna sebagai Nada Dering”. iOS 26 dan GarageBand.',
        h1: 'Cara buat nada dering daripada video di iPhone',
        answer: `Untuk membuat nada dering daripada video, buka video dalam ${APP}, potong kepada maksimum 30 saat, ekstrak audio ke M4A atau MP3 dan simpan ke Fail. Dalam iOS 26, tekan lama fail dalam Fail dan ketik Kongsi → “Guna sebagai Nada Dering”. Pada iOS lama, import audio ke GarageBand dan eksport sebagai nada dering.`,
        intro: '<p>Gelak ketawa, lagu dari parti, salakan anjing – apa-apa bunyi daripada video anda boleh menjadi nada dering. Dalam iOS 26 caranya mudah, asalkan ada fail audio.</p>',
        steps: [
            STEP.share,
            { name: 'Potong kepada 30 saat', text: 'Ketik “Potong Video” dan pilih maksimum 30 saat – itulah had untuk nada dering.', image: 3 },
            { name: 'Ekstrak dan simpan ke Fail', text: 'Ketik “Ekstrak Audio” (M4A atau MP3), kemudian Kongsi → Simpan ke Fail.', image: 4 },
            { name: 'Guna sebagai Nada Dering', text: 'Dalam Fail, tekan lama fail audio dan ketik Kongsi → “Guna sebagai Nada Dering” (iOS 26). Semak dalam Seting → Bunyi & Haptik → Nada Dering.', image: 4 }
        ],
        sections: [
            {
                h2: 'Pada iOS 18: cara dengan GarageBand',
                html: `<ol>
<li>Ekstrak dan potong audio seperti di atas, kemudian simpan ke Fail.</li>
<li>Buka GarageBand, cipta projek “Perakam Audio” dan tukar ke paparan trek.</li>
<li>Buka pelayar gelung → Fail → “Layari item daripada apl Fail” dan seret audio ke trek.</li>
<li>Kembali ke “Lagu Saya”, tekan lama projek → Kongsi → Nada Dering → Eksport.</li>
</ol>`
            },
            {
                h2: 'Kenapa “Guna sebagai Nada Dering” tiada',
                html: `<ul>
<li>Fail lebih panjang daripada 30 saat – potong semula.</li>
<li>Fail bukan dalam format MP3 atau M4A.</li>
<li>iPhone belum menggunakan iOS 26 – gunakan GarageBand.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Berapa panjang nada dering di iPhone?', a: 'Nada dering sendiri daripada fail audio boleh mencapai maksimum 30 saat.' },
            { q: 'Format apa yang diperlukan untuk nada dering iPhone?', a: 'Dalam iOS 26, melalui “Guna sebagai Nada Dering” anda boleh menggunakan fail MP3 atau M4A kurang daripada 30 saat.' },
            { q: 'Bolehkah video terus dijadikan nada dering?', a: 'Tidak. Ekstrak audio daripada video dahulu, kemudian jadikan fail audio itu nada dering.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-m4a-iphone', 'save-music-from-video-iphone'],
        card: { title: 'Nada dering daripada video', text: '“Guna sebagai Nada Dering” dalam iOS 26 – empat langkah.' }
    }
);
