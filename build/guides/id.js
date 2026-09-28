/**
 * Panduan bahasa Indonesia → /id/guides/<slug>/
 * Slug sama dengan versi Inggris (build/guides/en.js) agar halaman terhubung lewat hreflang.
 * Kata kunci — lihat bagian “Bahasa Indonesia (ID)” di /keywords.md. Struktur field — seperti en.js.
 * Tangkapan layar: 1 sampul · 2 layar ekstrak · 3 potong · 4 menu Bagikan · 5 pustaka
 */

const APP = 'Ekstrak Audio dari Video⁺';

const STEP = {
    open: {
        name: 'Buka aplikasi dan pilih video',
        text: `Buka ${APP} dan pilih video dari Foto atau File. Lebih cepat: di Foto, ketuk Bagikan pada video lalu pilih “Ekstrak Audio”.`,
        image: 2
    },
    share: {
        name: 'Kirim video ke aplikasi',
        text: 'Buka video di Foto atau File, ketuk Bagikan, lalu pilih “Ekstrak Audio”. Aplikasi terbuka dengan video yang sudah dimuat.',
        image: 2
    },
    trim: {
        name: 'Potong bagian yang diinginkan (opsional)',
        text: 'Ketuk “Potong Video”, geser penanda kuning ke awal dan akhir bagian yang diinginkan, dengarkan, lalu ketuk “Simpan”.',
        image: 3
    },
    extract: {
        name: 'Ketuk “Ekstrak Audio”',
        text: 'Ketuk “Ekstrak Audio” – trek audio dikonversi langsung di iPhone dalam hitungan detik, tanpa ada yang diunggah ke internet.',
        image: 2
    },
    save: {
        name: 'Simpan atau kirim file',
        text: 'File audio yang sudah jadi muncul di pustaka. Ketuk Bagikan untuk menyimpannya ke File, mengirimnya lewat AirDrop, atau ke aplikasi apa pun.',
        image: 4
    }
};

const guides = [];
module.exports = guides;

guides.push(
    {
        slug: 'extract-audio-from-video-iphone',
        keyword: 'cara mengambil audio dari video di iphone',
        eyebrow: 'Dasar',
        title: 'Cara mengambil audio dari video di iPhone – panduan lengkap',
        description: 'Ambil audio dari video apa pun di iPhone dengan empat ketukan: pilih video, potong, ketuk “Ekstrak Audio”, lalu simpan sebagai MP3 atau M4A. Gratis.',
        h1: 'Cara mengambil audio dari video di iPhone',
        answer: `Untuk mengambil audio dari video di iPhone, buka ${APP}, pilih video dari Foto, potong jika perlu, lalu ketuk “Ekstrak Audio”. Aplikasi menyimpan trek audio sebagai MP3 atau M4A di iPhone dalam hitungan detik. Gratis dan bisa dipakai tanpa internet.`,
        intro: '<p>Aplikasi Foto di iPhone tidak punya tombol “simpan audionya saja”. Anda bisa membuat pintasan (lihat <a href="/id/guides/extract-audio-without-app-iphone/">cara tanpa aplikasi</a>) atau mengunggah video ke situs web, tapi keduanya lambat kalau yang dibutuhkan hanya audionya. Berikut cara tercepat: aplikasi gratis yang bekerja langsung dari menu Bagikan.</p>',
        steps: [STEP.open, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Yang Anda perlukan',
                html: `<ul>
<li>iPhone dengan iOS 18.6 atau lebih baru.</li>
<li>${APP} – gratis di App Store (sekitar 23 MB).</li>
<li>Video bersuara: rekaman kamera (MOV), video unduhan (MP4), rekaman layar, video dari Pesan atau WhatsApp.</li>
</ul>`
            },
            {
                h2: 'Cara tercepat – lewat Bagikan',
                html: '<p>Anda bahkan tidak perlu membuka aplikasinya. Di <strong>Foto</strong> atau <strong>File</strong>, buka video, ketuk <strong>Bagikan</strong>, geser deretan aplikasi, lalu pilih <strong>“Ekstrak Audio”</strong>. Jika tidak terlihat, ketuk “Lainnya” dan tambahkan ke favorit – setelah itu selalu siap dipakai.</p>'
            },
            {
                h2: 'MP3 atau M4A – pilih yang mana?',
                html: '<p><strong>MP3</strong> bisa diputar di mana saja: Windows, Android, audio mobil, situs web, dan editor video. <strong>M4A</strong> (AAC) adalah format bawaan Apple: lebih kecil dengan kualitas yang sama, ideal untuk nada dering, GarageBand, dan iMovie. Kalau ragu, pilih MP3. Selengkapnya: <a href="/id/guides/convert-video-to-mp3-iphone/">video ke MP3</a> dan <a href="/id/guides/video-to-m4a-iphone/">video ke M4A</a>.</p>'
            },
            {
                h2: 'Di mana audio disimpan?',
                html: '<p>Setiap file hasil ekstrak muncul di pustaka aplikasi beserta durasi, ukuran, dan tanggalnya. Dari sana ketuk <strong>Bagikan → Simpan ke File</strong> untuk menyimpannya di iCloud Drive atau “Di iPhone Saya”, atau kirim ke WhatsApp, Telegram, Catatan, GarageBand, atau lewat AirDrop ke komputer.</p>'
            },
            {
                h2: 'Jika ada masalah',
                html: `<ul>
<li><strong>File tidak ada suaranya.</strong> Video itu sendiri tidak punya trek audio – ini terjadi pada rekaman layar tanpa mikrofon. Periksa dulu videonya di Foto.</li>
<li><strong>Video ada di iCloud.</strong> Foto akan mengunduh aslinya dulu – tunggu sampai selesai.</li>
<li><strong>Hanya butuh 20 detik.</strong> Potong sebelum mengekstrak – lihat <a href="/id/guides/trim-audio-from-video-iphone/">cara memotong sebagian audio</a>.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Bisakah mengambil audio dari video di iPhone secara gratis?', a: `Bisa. ${APP} gratis diunduh, dan ekstrak audio dasar juga gratis. Fitur tambahan tersedia lewat pembelian di dalam aplikasi.` },
            { q: 'Apakah kualitas turun saat audio diambil?', a: 'Aplikasi menyimpan trek audio video sebagai MP3 atau M4A berkualitas tinggi. Suaranya tidak akan lebih baik dari aslinya, tapi sama seperti saat video diputar.' },
            { q: 'Bisakah mengambil audio dari video yang panjang?', a: 'Bisa. Kuliah, konser, dan rapat diproses dengan cara yang sama, hanya sedikit lebih lama. Jika hanya perlu sebagian, potong dulu.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'trim-audio-from-video-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Mengambil audio dari video di iPhone', text: 'Cara empat ketukan – dari Foto atau lewat Bagikan.' }
    },
    {
        slug: 'convert-video-to-mp3-iphone',
        keyword: 'cara mengubah video ke mp3 di iphone',
        eyebrow: 'Video ke MP3',
        title: 'Cara mengubah video ke MP3 di iPhone – cepat dan gratis',
        description: 'Ubah video apa pun di iPhone ke MP3 dalam hitungan detik. Bisa dari Foto, file tetap di perangkat, dan bisa dipotong sebelum ekspor.',
        h1: 'Cara mengubah video ke MP3 di iPhone',
        answer: `Buka video di Foto, ketuk Bagikan, lalu pilih “Ekstrak Audio” (${APP}). Potong jika perlu, ketuk “Ekstrak Audio”, dan simpan sebagai MP3. File tetap ada di iPhone – bisa dikirim ke File, lewat AirDrop, atau ke aplikasi apa pun. Tidak perlu komputer atau akun.`,
        intro: '<p>MP3 adalah format audio paling kompatibel: bisa diputar di mobil, komputer, dan editor mana pun. Berikut cara mengubah video ke MP3 tanpa melepas iPhone dari tangan.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Ekstrak ke MP3', text: 'Ketuk “Ekstrak Audio” lalu pilih format MP3. Konversi video ke MP3 berlangsung langsung di iPhone.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'Kenapa aplikasi, bukan konverter online?',
                html: '<p>Konverter online mengharuskan Anda mengunggah seluruh video, menunggu antrean, lalu mengunduh MP3-nya lagi – lambat dengan kuota seluler dan berisiko untuk video pribadi. Aplikasi bekerja offline, menyimpan file di perangkat, dan bisa memotong rekaman sebelum dikonversi. Perbandingan lengkap: <a href="/id/guides/extract-audio-online-vs-app/">online atau aplikasi</a>.</p>'
            },
            {
                h2: 'Video apa saja yang bisa diubah ke MP3?',
                html: '<p>Semua yang bisa diputar iPhone: rekaman kamera (<a href="/id/guides/mov-to-mp3-iphone/">MOV</a>), video unduhan (<a href="/id/guides/mp4-to-mp3-iphone/">MP4</a>), <a href="/id/guides/screen-recording-to-audio-iphone/">rekaman layar</a>, serta video dari Pesan, WhatsApp, Telegram, dan AirDrop.</p>'
            },
            {
                h2: 'Apa yang bisa dilakukan dengan MP3',
                html: `<ul>
<li>Simpan ke <strong>File</strong> dan dengarkan offline.</li>
<li>Kirim ke komputer lewat <strong>AirDrop</strong>.</li>
<li>Jadikan 30 detik sebagai <a href="/id/guides/video-to-ringtone-iphone/">nada dering</a>.</li>
<li>Tambahkan ke GarageBand, CapCut, atau editor podcast.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Bisakah iPhone mengubah video ke MP3 tanpa aplikasi?', a: 'Tidak secara langsung. Pintasan hanya bisa menyimpan audio sebagai M4A. Untuk MP3 di iPhone, Anda butuh aplikasi atau situs web.' },
            { q: 'Apakah konversi ke MP3 gratis?', a: `Ya, konversi dasar di ${APP} gratis. Fitur tambahan lewat pembelian di dalam aplikasi.` },
            { q: 'Perlukah internet untuk mengubah video ke MP3?', a: 'Tidak. Konversi dilakukan di iPhone dan bisa offline. Hanya video yang tersimpan di iCloud yang perlu diunduh dulu.' }
        ],
        related: ['mp4-to-mp3-iphone', 'mov-to-mp3-iphone', 'video-to-m4a-iphone'],
        card: { title: 'Video ke MP3 di iPhone', text: 'Video apa pun jadi MP3 universal.' }
    }
);

guides.push(
    {
        slug: 'mp4-to-mp3-iphone',
        keyword: 'mp4 ke mp3 iphone',
        eyebrow: 'MP4 ke MP3',
        title: 'MP4 ke MP3 di iPhone: konverter gratis tanpa upload',
        description: 'Ubah MP4 ke MP3 di iPhone secara gratis: buka file di File atau Foto, lalu ketuk Bagikan → “Ekstrak Audio”. Bisa offline, dengan fitur potong.',
        h1: 'Cara mengubah MP4 ke MP3 di iPhone',
        answer: `Untuk mengubah MP4 ke MP3 di iPhone, buka file di File atau Foto, ketuk Bagikan, lalu pilih “Ekstrak Audio”. Di ${APP}, potong jika mau, ketuk “Ekstrak Audio”, pilih MP3, dan simpan. Gratis, di perangkat, tanpa internet.`,
        intro: '<p>File MP4 biasanya datang sebagai unduhan, lampiran email, atau lewat AirDrop, jadi sering ada di aplikasi <strong>File</strong>, bukan di Foto. Aplikasi ini bisa bekerja dengan keduanya.</p>',
        steps: [
            { name: 'Temukan file MP4', text: 'Buka File (Unduhan, iCloud Drive, atau “Di iPhone Saya”) atau Foto dan cari MP4-nya.', image: 2 },
            { name: 'Kirim ke “Ekstrak Audio”', text: 'Tekan lama file, lalu pilih Bagikan → “Ekstrak Audio”. MP4 terbuka di aplikasi.', image: 2 },
            STEP.trim,
            { name: 'Simpan sebagai MP3', text: 'Ketuk “Ekstrak Audio”, pilih MP3, lalu Bagikan → Simpan ke File agar MP3 berada di samping MP4 aslinya.', image: 4 }
        ],
        sections: [
            {
                h2: 'Perbedaan MP4 dan MP3',
                html: '<p>MP4 adalah wadah yang berisi gambar dan suara; MP3 hanya berisi suara. Saat MP4 diubah ke MP3, trek audio dipertahankan dan gambarnya dibuang: file jadi jauh lebih kecil dan bisa diputar di pemutar mana pun.</p>'
            },
            {
                h2: 'MP4 dari WhatsApp, Telegram, dan email',
                html: '<p>Simpan dulu lampirannya: di chat, buka video → Bagikan → “Simpan Video” (ke Foto) atau “Simpan ke File”. Lalu ikuti langkah di atas. Konversikan hanya video milik Anda sendiri atau yang Anda punya haknya.</p>'
            },
            {
                h2: 'Butuh M4A?',
                html: '<p>Untuk nada dering dan aplikasi Apple, M4A lebih cocok. Lihat <a href="/id/guides/video-to-m4a-iphone/">cara menyimpan video sebagai M4A di iPhone</a>.</p>'
            }
        ],
        faq: [
            { q: 'Bisakah MP4 diubah ke MP3 gratis di iPhone?', a: `Bisa. ${APP} mengubah MP4 ke MP3 secara gratis langsung di perangkat. Pembelian di dalam aplikasi membuka fitur tambahan.` },
            { q: 'Apakah MP3 lebih kecil dari MP4?', a: 'Ya, biasanya jauh lebih kecil: trek video dibuang dan hanya suara yang tersisa.' },
            { q: 'Bisakah mengubah banyak MP4?', a: 'Bisa. Ubah satu per satu – semua MP3 tersimpan di pustaka aplikasi.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'mov-to-mp3-iphone', 'extract-audio-online-vs-app'],
        card: { title: 'MP4 ke MP3 di iPhone', text: 'MP4 unduhan dari File dan Foto jadi MP3.' }
    },
    {
        slug: 'mov-to-mp3-iphone',
        keyword: 'mov ke mp3 iphone',
        eyebrow: 'MOV ke MP3',
        title: 'MOV ke MP3 di iPhone – suara dari video kamera iPhone',
        description: 'Video dari kamera iPhone adalah file MOV. Ubah MOV ke MP3 langsung di ponsel: pilih video, potong, lalu ketuk “Ekstrak Audio”. Gratis dan bisa dipakai offline.',
        h1: 'Cara mengubah MOV ke MP3 di iPhone',
        answer: `Semua video dari kamera iPhone disimpan dalam format MOV. Untuk mendapatkan MP3, buka video di Foto, ketuk Bagikan → “Ekstrak Audio”, potong jika perlu, lalu ketuk “Ekstrak Audio” di ${APP}. MP3 tersimpan di iPhone – tidak perlu komputer.`,
        intro: '<p>MOV adalah format video Apple yang dipakai kamera iPhone: konser, pidato, teman yang main gitar, suara yang ingin Anda simpan. Sebagai MP3, suara itu bisa didengarkan di mana saja.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Kapan MOV ke MP3 berguna',
                html: `<ul>
<li>Menyimpan suara konser atau pertunjukan yang Anda rekam.</li>
<li>Menjadikan ucapan atau pidato sebagai kenangan dalam bentuk audio.</li>
<li>Mengirim rekaman latihan ke band tanpa video yang besar.</li>
<li>Mendengarkan <a href="/id/guides/lecture-video-to-audio-iphone/">rekaman kuliah</a> di perjalanan.</li>
</ul>`
            },
            {
                h2: 'HEVC, 4K, dan mode Sinematik',
                html: '<p>Video HEVC dan 4K diproses dengan cara yang sama. Hanya audionya yang dikonversi, jadi file MOV yang sangat besar pun menghasilkan file audio yang kecil.</p>'
            },
            {
                h2: 'Kenapa tidak perlu komputer',
                html: '<p>Memindahkan MOV berukuran beberapa gigabyte ke komputer hanya demi audionya lebih lama daripada mengonversinya di ponsel. Aplikasi melakukannya di tempat video sudah berada.</p>'
            }
        ],
        faq: [
            { q: 'Dalam format apa iPhone merekam video?', a: 'Kamera iPhone merekam file MOV, biasanya dengan video HEVC atau H.264 dan audio AAC.' },
            { q: 'Bisakah MOV diubah ke MP3 tanpa kehilangan kualitas?', a: 'Aplikasi mempertahankan kualitas rekaman asli: MP3 terdengar sama seperti saat video diputar.' },
            { q: 'Bisakah MOV disimpan sebagai M4A?', a: 'Bisa, pilih format M4A. Praktis untuk nada dering dan aplikasi Apple.' }
        ],
        related: ['mp4-to-mp3-iphone', 'convert-video-to-mp3-iphone', 'save-music-from-video-iphone'],
        card: { title: 'MOV ke MP3', text: 'Suara dari video kamera iPhone.' }
    },
    {
        slug: 'video-to-m4a-iphone',
        keyword: 'video ke m4a iphone',
        eyebrow: 'Video ke M4A',
        title: 'Video ke M4A di iPhone – MP4 dan MOV ke M4A gratis',
        description: 'Simpan audio video sebagai M4A di iPhone untuk nada dering, GarageBand, dan aplikasi Apple. Gratis, di perangkat, dengan fitur potong – MP4 atau MOV ke M4A.',
        h1: 'Cara menyimpan audio video sebagai M4A di iPhone',
        answer: `Untuk mengubah video ke M4A di iPhone, kirim video dari Foto atau File ke “Ekstrak Audio”, potong jika mau, ketuk “Ekstrak Audio”, lalu pilih M4A. ${APP} menyimpan file M4A (AAC) yang cocok untuk GarageBand, iMovie, pemutar musik, dan nada dering.`,
        intro: '<p>M4A adalah format audio bawaan Apple. Dengan kualitas serupa, ukurannya lebih kecil dari MP3, dan format inilah yang dibutuhkan iPhone untuk nada dering serta proyek GarageBand.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Ekstrak ke M4A', text: 'Ketuk “Ekstrak Audio” lalu pilih format M4A.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'M4A atau MP3 – kapan memilih M4A',
                html: `<table class="guide-table"><thead><tr><th></th><th>M4A (AAC)</th><th>MP3</th></tr></thead><tbody>
<tr><td>Paling cocok untuk</td><td>iPhone, Mac, nada dering, GarageBand</td><td>Sisanya – Windows, Android, mobil</td></tr>
<tr><td>Ukuran file</td><td>Lebih kecil di kualitas yang sama</td><td>Sedikit lebih besar</td></tr>
<tr><td>Kompatibilitas</td><td>Sangat baik</td><td>Universal</td></tr>
</tbody></table>`
            },
            {
                h2: 'Jadikan M4A nada dering',
                html: '<p>Di iOS 26, file M4A yang kurang dari 30 detik bisa dijadikan nada dering langsung dari File. Selengkapnya: <a href="/id/guides/video-to-ringtone-iphone/">cara membuat nada dering dari video</a>.</p>'
            },
            {
                h2: 'Buka di GarageBand atau iMovie',
                html: '<p>Simpan M4A ke File, lalu impor lewat penjelajah file di GarageBand atau iMovie – sebagai musik latar, narasi, atau efek suara.</p>'
            }
        ],
        faq: [
            { q: 'Apakah M4A lebih baik dari MP3?', a: 'Pada bitrate yang sama, M4A (AAC) biasanya terdengar sama bagus atau lebih baik dan lebih hemat ruang. MP3 kompatibel dengan lebih banyak perangkat.' },
            { q: 'Bisakah membuat M4A dengan Pintasan?', a: 'Bisa, tindakan “Enkode Media” dengan opsi “Hanya Audio” menghasilkan M4A. Tapi cara itu tidak bisa memotong audio atau menyimpan MP3 – aplikasi bisa.' },
            { q: 'Apakah menyimpan sebagai M4A gratis?', a: `Ya, ekstrak dasar di ${APP} gratis, termasuk ekspor ke M4A.` }
        ],
        related: ['video-to-ringtone-iphone', 'convert-video-to-mp3-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Video ke M4A', text: 'Format Apple untuk nada dering dan GarageBand.' }
    }
);

guides.push(
    {
        slug: 'extract-audio-without-app-iphone',
        keyword: 'cara mengambil audio dari video di iphone tanpa aplikasi',
        eyebrow: 'Pintasan atau aplikasi',
        title: 'Cara mengambil audio dari video di iPhone tanpa aplikasi',
        description: 'Audio video di iPhone bisa diambil tanpa aplikasi – dengan Pintasan dan tindakan “Enkode Media”. Pengaturan lengkap, keterbatasan, dan alternatif lebih cepat.',
        h1: 'Cara mengambil audio dari video di iPhone tanpa aplikasi',
        answer: 'Tanpa aplikasi pihak ketiga, audio bisa diambil dengan Pintasan: tambahkan tindakan “Enkode Media”, aktifkan “Hanya Audio”, tambahkan “Simpan File”, dan aktifkan tampilan di menu Bagikan. Lalu kirim video ke pintasan itu. Hasilnya hanya M4A dan tanpa potong; untuk MP3 dan klip pendek, aplikasi lebih cepat.',
        intro: '<p>Aplikasi Pintasan gratis dari Apple bisa memisahkan suara dari video. Pengaturannya hanya beberapa menit. Berikut resep lengkapnya – beserta keterbatasannya.</p>',
        steps: [
            { name: 'Buat pintasan baru', text: 'Buka Pintasan, ketuk +, lalu beri nama pintasan “Audio dari video”.', image: 2 },
            { name: 'Tambahkan “Enkode Media”', text: 'Ketuk “Tambah Tindakan”, cari “Enkode Media”, tambahkan, buka opsinya dengan panah, lalu aktifkan “Hanya Audio”.', image: 2 },
            { name: 'Tambahkan “Simpan File”', text: 'Tambahkan tindakan “Simpan File” agar hasilnya masuk ke File.', image: 4 },
            { name: 'Tampilkan di menu Bagikan', text: 'Buka detail pintasan (ikon i), aktifkan “Tampilkan di Lembar Bagikan”, dan izinkan jenis “Media”. Sekarang kirim video dari Foto dan pilih pintasannya.', image: 4 }
        ],
        sections: [
            {
                h2: 'Keterbatasan cara Pintasan',
                html: `<ul>
<li><strong>Hanya M4A</strong> – tidak bisa MP3.</li>
<li><strong>Tanpa potong</strong> – selalu menyimpan seluruh trek audio.</li>
<li><strong>Tanpa pustaka</strong> – file masuk ke File, dan harus dicari serta diganti namanya secara manual.</li>
<li>Pada video panjang, pintasan bisa berhenti tanpa pesan kesalahan yang jelas.</li>
</ul>`
            },
            {
                h2: 'Pilihan satu ketukan',
                html: `<p>${APP} melakukan hal yang sama, tapi dengan fitur potong, pilihan MP3 atau M4A, dan pustaka berisi semua file hasil ekstrak. Aplikasi ini juga ada di menu Bagikan, jadi tidak lebih lambat – dan tidak perlu merakit apa pun.</p>`
            },
            {
                h2: 'Cara lain tanpa aplikasi',
                html: '<p>Suara juga bisa dipisahkan di iMovie atau GarageBand, tapi langkahnya lebih banyak dan format ekspornya terbatas. Situs web juga bisa, tapi video harus diunggah ke internet – lihat <a href="/id/guides/extract-audio-online-vs-app/">online atau aplikasi</a>.</p>'
            }
        ],
        faq: [
            { q: 'Apakah iPhone punya cara bawaan untuk mengambil audio?', a: 'Foto tidak punya tombol khusus. Opsi bawaan terdekat adalah tindakan “Enkode Media” dengan opsi “Hanya Audio” di aplikasi Pintasan.' },
            { q: 'Dalam format apa pintasan menyimpan audio?', a: 'M4A. Tidak bisa menyimpan MP3 lewat Pintasan.' },
            { q: 'Bisakah memotong audio dengan pintasan?', a: `Tidak dengan mudah. Untuk memotong, gunakan aplikasi dengan timeline, misalnya ${APP}.` }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-online-vs-app', 'video-to-m4a-iphone'],
        card: { title: 'Tanpa aplikasi (Pintasan)', text: 'Resep gratis dan keterbatasannya.' }
    },
    {
        slug: 'extract-audio-online-vs-app',
        keyword: 'ekstrak audio dari video online',
        eyebrow: 'Online atau aplikasi',
        title: 'Ekstrak audio dari video online atau pakai aplikasi iPhone?',
        description: 'Ekstrak audio dari video secara online atau pakai aplikasi? Kami bandingkan privasi, kecepatan, batasan, dan fitur potong di iPhone.',
        h1: 'Ekstrak audio dari video online atau pakai aplikasi: mana yang cocok di iPhone',
        answer: `Layanan online bisa dipakai di perangkat apa pun, tapi Anda harus mengunggah seluruh video, menunggu proses, lalu mengunduh hasilnya – lambat dengan kuota seluler dan tidak aman untuk rekaman pribadi. Di iPhone, aplikasi seperti ${APP} lebih cepat, bisa offline, menyimpan video di perangkat, dan bisa memotong audio.`,
        intro: '<p>Mencari “ekstrak audio dari video online” akan menampilkan puluhan situs gratis. Di laptop dengan internet cepat, situs itu praktis. Di iPhone, ceritanya lain.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Perbandingan',
                html: `<table class="guide-table"><thead><tr><th></th><th>Layanan online</th><th>${APP}</th></tr></thead><tbody>
<tr><td>Privasi</td><td>Video diunggah ke server orang lain</td><td>Tetap di iPhone</td></tr>
<tr><td>Kecepatan</td><td>Upload + antre + unduh</td><td>Detik, di perangkat</td></tr>
<tr><td>Tanpa internet</td><td>Tidak</td><td>Ya</td></tr>
<tr><td>Batas ukuran</td><td>Sering ada di paket gratis</td><td>Hanya penyimpanan iPhone</td></tr>
<tr><td>Potong</td><td>Kadang-kadang</td><td>Timeline bawaan</td></tr>
<tr><td>Iklan dan pop-up</td><td>Sering</td><td>Tanpa iklan web</td></tr>
<tr><td>Harga</td><td>Gratis dengan batasan</td><td>Fitur dasar gratis</td></tr>
</tbody></table>`
            },
            {
                h2: 'Kapan layanan online masuk akal',
                html: '<p>Jika Anda sedang di komputer Windows dan videonya sudah ada di sana, konverter online yang tepercaya sudah cukup. Jangan unggah hal pribadi: video keluarga, rapat kerja, atau materi klien.</p>'
            },
            {
                h2: 'Kapan aplikasi lebih baik',
                html: '<p>Jika videonya ada di iPhone, aplikasi menang: tidak perlu mengunggah lewat jaringan seluler, menunggu, dan mengunduh hasilnya, dan bagian yang dibutuhkan bisa dipotong dengan tepat.</p>'
            }
        ],
        faq: [
            { q: 'Amankah ekstrak audio dari video secara online?', a: 'Tergantung situsnya. Video diunggah ke server pihak ketiga, jadi sebaiknya hindari untuk rekaman pribadi. Aplikasi yang bekerja di perangkat tidak mengunggah apa pun.' },
            { q: 'Bisakah mengambil audio gratis di iPhone tanpa upload?', a: `Bisa. ${APP} mengonversi video secara gratis langsung di perangkat, dan video tidak dikirim ke mana pun.` },
            { q: 'Kenapa konversi online di ponsel begitu lambat?', a: 'Seluruh video harus diunggah dulu. Video dari ponsel berukuran besar, dan kecepatan upload jaringan seluler biasanya jauh lebih rendah daripada kecepatan unduh.' }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-without-app-iphone', 'mp4-to-mp3-iphone'],
        card: { title: 'Online atau aplikasi', text: 'Privasi, kecepatan, dan batasan – perbandingan.' }
    },
    {
        slug: 'save-music-from-video-iphone',
        keyword: 'cara mengambil lagu dari video di iphone',
        eyebrow: 'Musik',
        title: 'Cara mengambil lagu dari video di iPhone (MP3 atau M4A)',
        description: 'Simpan lagu atau musik latar dari video di iPhone sebagai MP3 atau M4A. Potong tepat sesuai lagu, dengarkan offline, dan bagikan. Panduan singkat.',
        h1: 'Cara mengambil lagu dari video di iPhone',
        answer: `Untuk mengambil lagu dari video di iPhone, buka video di Foto, ketuk Bagikan → “Ekstrak Audio”, tandai lagunya dengan penanda, lalu ketuk “Ekstrak Audio” di ${APP}. Musik tersimpan sebagai MP3 atau M4A – dengarkan offline di File atau kirim ke aplikasi apa pun.`,
        intro: '<p>Lagu dari pernikahan, cover teman, musik dari hasil edit Anda – terkadang bagian paling berharga dari video adalah suaranya. Berikut cara menyimpannya sebagai file musik terpisah.</p>',
        steps: [STEP.share, { name: 'Tandai lagunya', text: 'Ketuk “Potong Video” lalu geser penanda kuning agar hanya lagu yang tersisa. Dengarkan awal dan akhirnya.', image: 3 }, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Cara mendapat suara terbaik',
                html: `<ul>
<li>Buang obrolan dan tepuk tangan di awal dan akhir.</li>
<li>MP3 untuk mobil dan pemutar lama, M4A untuk perangkat Apple.</li>
<li>Ganti nama file di File (tekan lama → “Ubah Nama”) agar mudah ditemukan nanti.</li>
</ul>`
            },
            {
                h2: 'Tentang hak cipta',
                html: '<p>Simpan musik dari video Anda sendiri atau video yang Anda punya haknya. Lagu komersial dilindungi hak cipta: salinan pribadi dari rekaman Anda boleh, menyebarkan musik orang lain tidak.</p>'
            },
            {
                h2: 'Jadikan nada dering',
                html: '<p>Sudah menemukan 30 detik favorit? <a href="/id/guides/video-to-ringtone-iphone/">Jadikan nada dering</a>.</p>'
            }
        ],
        faq: [
            { q: 'Bagaimana cara mengambil lagu dari video di iPhone?', a: `Kirim video ke ${APP}, tandai lagunya saat memotong, lalu ketuk “Ekstrak Audio”. Lagu tersimpan sebagai file audio.` },
            { q: 'Bisakah lagu hasil ekstrak ditambahkan ke Apple Music?', a: 'Aplikasi Musik di iPhone tidak bisa mengimpor file lokal secara langsung. Simpan file di File atau sinkronkan lewat Mac atau PC.' },
            { q: 'Bisakah mengambil musik dari video WhatsApp atau Pesan?', a: 'Bisa. Simpan dulu videonya ke Foto atau File, lalu ekstrak audionya.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-ringtone-iphone', 'mov-to-mp3-iphone'],
        card: { title: 'Ambil lagu dari video', text: 'Simpan lagunya, tinggalkan gambarnya.' }
    }
);

guides.push(
    {
        slug: 'trim-audio-from-video-iphone',
        keyword: 'cara memotong audio dari video di iphone',
        eyebrow: 'Potong',
        title: 'Cara memotong sebagian audio dari video di iPhone',
        description: 'Hanya butuh 10 detik audio? Potong video di iPhone dan simpan hanya bagian itu sebagai MP3 atau M4A. Penanda, pratinjau, dan ekspor – gratis.',
        h1: 'Cara mengambil hanya sebagian audio dari video di iPhone',
        answer: `Untuk memotong sebagian audio dari video di iPhone, buka video di ${APP}, ketuk “Potong Video”, geser penanda kuning awal dan akhir di sekitar bagian yang diinginkan, ketuk “Simpan”, lalu ketuk “Ekstrak Audio”. Hanya bagian yang dipilih yang disimpan sebagai MP3 atau M4A.`,
        intro: '<p>Biasanya yang dibutuhkan bukan seluruh trek audio, melainkan satu kutipan, reff lagu, atau efek suara. Dengan memotong dulu, Anda mendapat klip yang kecil dan bersih.</p>',
        steps: [
            STEP.open,
            { name: 'Ketuk “Potong Video”', text: 'Di layar ekstrak, ketuk “Potong Video” untuk membuka timeline.', image: 2 },
            { name: 'Geser penandanya', text: 'Geser penanda kuning kiri ke titik awal dan kanan ke titik akhir. Waktu pilihan ditampilkan di sampingnya. Dengarkan, lalu ketuk “Simpan”.', image: 3 },
            { name: 'Ekstrak dan simpan', text: 'Ketuk “Ekstrak Audio” – hanya bagian yang dipotong yang diekspor. Kirim atau simpan ke File.', image: 4 }
        ],
        sections: [
            {
                h2: 'Tips memotong dengan tepat',
                html: `<ul>
<li>Sisakan setengah detik sebelum dan sesudah ucapan agar kata tidak terpotong.</li>
<li>Untuk nada dering, pilih maksimal 30 detik.</li>
<li>Butuh beberapa bagian dari video yang sama? Ulangi pemotongan untuk tiap bagian – semua file tersimpan di pustaka.</li>
</ul>`
            },
            {
                h2: 'Yang biasanya dipotong',
                html: '<p>Satu kalimat dari pidato, reff lagu, efek suara untuk editing, kata-kata pertama anak, atau satu menit terpenting dari rekaman rapat yang panjang.</p>'
            }
        ],
        faq: [
            { q: 'Bisakah memotong audio dari video di iPhone?', a: `Bisa. Potong video ke bagian yang diinginkan di ${APP} lalu ekstrak audionya – hanya bagian itu yang disimpan.` },
            { q: 'Apakah pemotongan mengubah video asli?', a: 'Tidak. Video asli di Foto tetap utuh; hanya file audio yang diekspor yang dipotong.' },
            { q: 'Bisakah memotong beberapa bagian dari satu video?', a: 'Bisa. Potong dan ekstrak lagi untuk setiap bagian yang dibutuhkan.' }
        ],
        related: ['video-to-ringtone-iphone', 'save-music-from-video-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Potong sebagian audio', text: 'Pemotongan tepat hingga ke detik.' }
    },
    {
        slug: 'screen-recording-to-audio-iphone',
        keyword: 'cara mengambil suara dari rekaman layar iphone',
        eyebrow: 'Rekaman layar',
        title: 'Cara menyimpan suara dari rekaman layar iPhone (MP3/M4A)',
        description: 'Ubah rekaman layar iPhone menjadi file MP3 atau M4A. Kenapa rekaman tidak ada suaranya, cara memotong bagian yang tepat, dan menyimpan audionya. Langkah mudah.',
        h1: 'Cara menyimpan suara dari rekaman layar di iPhone',
        answer: `Rekaman layar iPhone tersimpan di Foto sebagai video. Untuk mengambil suaranya, buka rekaman, ketuk Bagikan → “Ekstrak Audio”, potong jika perlu, lalu ketuk “Ekstrak Audio” di ${APP}. Jika file tidak ada suaranya, suaranya memang tidak terekam – nyalakan mikrofon sebelum merekam.`,
        intro: '<p>Rekaman layar sering dipakai untuk menyimpan pesan suara, panggilan dengan speaker, atau cuplikan dari aplikasi. Berikut cara menyimpan suaranya saja.</p>',
        steps: [
            { name: 'Cari rekaman di Foto', text: 'Rekaman layar ada di Foto → Jenis Media → Rekaman Layar.', image: 2 },
            { name: 'Kirim ke “Ekstrak Audio”', text: 'Buka rekaman, ketuk Bagikan, lalu pilih “Ekstrak Audio”.', image: 2 },
            STEP.trim,
            { name: 'Ekstrak dan simpan', text: 'Ketuk “Ekstrak Audio” lalu simpan MP3 atau M4A ke File.', image: 4 }
        ],
        sections: [
            {
                h2: 'Kenapa rekaman layar tidak ada suaranya?',
                html: `<ul>
<li><strong>Mikrofon mati:</strong> di Pusat Kontrol, tekan lama tombol Perekaman Layar lalu nyalakan “Mikrofon” agar suara Anda ikut terekam.</li>
<li><strong>Mode senyap:</strong> beberapa aplikasi mematikan suaranya dalam mode senyap.</li>
<li><strong>Konten terlindungi:</strong> banyak layanan streaming memblokir suara saat perekaman layar – ini pembatasan yang tidak bisa diakali.</li>
</ul>`
            },
            {
                h2: 'Hormati privasi',
                html: '<p>Rekam dan simpan panggilan atau percakapan hanya dengan persetujuan semua pihak dan sesuai hukum yang berlaku di tempat Anda.</p>'
            }
        ],
        faq: [
            { q: 'Bisakah rekaman layar diubah ke MP3?', a: 'Bisa. Rekaman layar adalah video biasa, jadi suaranya bisa disimpan sebagai MP3 atau M4A.' },
            { q: 'Di mana rekaman layar tersimpan di iPhone?', a: 'Di aplikasi Foto, bagian Jenis Media → Rekaman Layar.' },
            { q: 'Kenapa rekaman layar tidak ada suaranya?', a: 'Mikrofon mati atau aplikasi memblokir perekaman suara. Sebelum mengekstrak, pastikan rekaman berbunyi saat diputar.' }
        ],
        related: ['extract-audio-from-video-iphone', 'trim-audio-from-video-iphone', 'lecture-video-to-audio-iphone'],
        card: { title: 'Suara dari rekaman layar', text: 'Simpan suaranya dan cari tahu kenapa hilang.' }
    }
);

guides.push(
    {
        slug: 'lecture-video-to-audio-iphone',
        keyword: 'mengubah video kuliah jadi audio',
        eyebrow: 'Belajar',
        title: 'Cara mengubah video kuliah jadi audio (MP3) di iPhone',
        description: 'Ubah rekaman kuliah, webinar, dan seminar jadi MP3 di iPhone agar bisa belajar di perjalanan. File kecil, didengar offline, mudah dibagikan.',
        h1: 'Cara mengubah video kuliah jadi audio di iPhone',
        answer: `Untuk mengubah video kuliah jadi audio, buka rekaman di Foto atau File, ketuk Bagikan → “Ekstrak Audio”, lalu ketuk “Ekstrak Audio” di ${APP}. Simpan MP3 ke File dan dengarkan offline – di perjalanan, di gym, atau dengan layar mati, dengan ukuran file yang jauh lebih kecil.`,
        intro: '<p>Dalam kuliah, yang penting adalah apa yang dikatakan, bukan yang ditampilkan. Dengan mengubah video kuliah jadi audio, Anda punya podcast yang bisa diputar ulang di mana saja.</p>',
        steps: [
            STEP.share,
            { name: 'Buang pembukaan dan jeda (opsional)', text: 'Ketuk “Potong Video” untuk membuang waktu tunggu sebelum mulai dan sesi tanya jawab yang tidak dibutuhkan.', image: 3 },
            STEP.extract,
            { name: 'Simpan ke folder “Kuliah”', text: 'Ketuk Bagikan → Simpan ke File dan buat folder untuk setiap mata kuliah agar rekaman mudah ditemukan.', image: 4 }
        ],
        sections: [
            {
                h2: 'Kenapa belajar lewat audio lebih praktis',
                html: `<ul>
<li><strong>File kecil:</strong> satu jam audio jauh lebih kecil daripada satu jam video.</li>
<li><strong>Layar mati:</strong> dengarkan dengan ponsel terkunci dan hemat baterai.</li>
<li><strong>Di mana saja:</strong> di KRL, saat jalan kaki, di gym – tanpa Wi‑Fi.</li>
</ul>`
            },
            {
                h2: 'Jadikan catatan',
                html: '<p>Butuh teks? Impor audio ke aplikasi transkripsi yang sudah Anda gunakan dan cari di dalam teksnya.</p>'
            },
            {
                h2: 'Periksa aturannya',
                html: '<p>Banyak kampus mengizinkan merekam kuliah untuk keperluan pribadi, tapi tidak untuk disebarkan. Periksa aturan mata kuliah sebelum merekam atau membagikan kuliah.</p>'
            }
        ],
        faq: [
            { q: 'Bisakah mendengarkan video di iPhone dengan layar mati?', a: 'Sebagian besar pemutar video berhenti saat ponsel dikunci. Jika video diubah ke MP3, Anda bisa mendengarkannya dengan layar mati di File atau pemutar audio mana pun.' },
            { q: 'Apakah bisa untuk kuliah satu jam?', a: 'Bisa. Rekaman panjang diproses dengan cara yang sama, hanya sedikit lebih lama.' },
            { q: 'Bisakah mengonversi rekaman Zoom dan webinar?', a: 'Bisa, selama rekaman MP4-nya sudah ada di Foto atau File di iPhone.' }
        ],
        related: ['screen-recording-to-audio-iphone', 'mp4-to-mp3-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Video kuliah jadi audio', text: 'Belajar di perjalanan dengan MP3 yang ringkas.' }
    },
    {
        slug: 'video-to-ringtone-iphone',
        keyword: 'cara membuat nada dering dari video di iphone',
        eyebrow: 'Nada dering',
        title: 'Cara membuat nada dering dari video di iPhone (iOS 26)',
        description: 'Jadikan video apa pun nada dering iPhone: potong audio ke 30 detik, simpan ke File, lalu ketuk Bagikan → “Gunakan sebagai Nada Dering”. iOS 26 dan GarageBand.',
        h1: 'Cara membuat nada dering dari video di iPhone',
        answer: `Untuk membuat nada dering dari video, buka video di ${APP}, potong maksimal 30 detik, ekstrak audionya ke M4A atau MP3, lalu simpan ke File. Di iOS 26, tekan lama file di File lalu ketuk Bagikan → “Gunakan sebagai Nada Dering”. Di iOS yang lebih lama, impor audio ke GarageBand dan ekspor sebagai nada dering.`,
        intro: '<p>Tawa, lagu dari pesta, gonggongan anjing – suara apa pun dari video Anda bisa jadi nada dering. Di iOS 26 caranya mudah, asalkan ada file audionya.</p>',
        steps: [
            STEP.share,
            { name: 'Potong ke 30 detik', text: 'Ketuk “Potong Video” dan pilih maksimal 30 detik – itu batas untuk nada dering.', image: 3 },
            { name: 'Ekstrak dan simpan ke File', text: 'Ketuk “Ekstrak Audio” (M4A atau MP3), lalu Bagikan → Simpan ke File.', image: 4 },
            { name: 'Gunakan sebagai Nada Dering', text: 'Di File, tekan lama file audio lalu ketuk Bagikan → “Gunakan sebagai Nada Dering” (iOS 26). Periksa di Pengaturan → Suara & Haptik → Nada Dering.', image: 4 }
        ],
        sections: [
            {
                h2: 'Di iOS 18: cara dengan GarageBand',
                html: `<ol>
<li>Ekstrak dan potong audio seperti di atas, lalu simpan ke File.</li>
<li>Buka GarageBand, buat proyek “Perekam Audio”, lalu beralih ke tampilan trek.</li>
<li>Buka penelusur loop → File → “Telusuri item dari app File”, lalu seret audio ke trek.</li>
<li>Kembali ke “Lagu Saya”, tekan lama proyek → Bagikan → Nada Dering → Ekspor.</li>
</ol>`
            },
            {
                h2: 'Kenapa “Gunakan sebagai Nada Dering” tidak muncul',
                html: `<ul>
<li>File lebih dari 30 detik – potong lagi.</li>
<li>File tidak berformat MP3 atau M4A.</li>
<li>iPhone belum memakai iOS 26 – gunakan GarageBand.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Berapa panjang maksimal nada dering di iPhone?', a: 'Nada dering buatan sendiri dari file audio maksimal 30 detik.' },
            { q: 'Format apa yang dibutuhkan untuk nada dering iPhone?', a: 'Di iOS 26, lewat “Gunakan sebagai Nada Dering” Anda bisa memakai file MP3 atau M4A yang kurang dari 30 detik.' },
            { q: 'Bisakah video langsung dijadikan nada dering?', a: 'Tidak. Ekstrak dulu audio dari video, lalu jadikan file audionya nada dering.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-m4a-iphone', 'save-music-from-video-iphone'],
        card: { title: 'Nada dering dari video', text: '“Gunakan sebagai Nada Dering” di iOS 26 – empat langkah.' }
    }
);
