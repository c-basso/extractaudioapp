/**
 * Hrvatski vodiči → /hr/guides/<slug>/
 * Slugovi su isti kao engleski (build/guides/en.js) kako bi se stranice povezale preko hreflanga.
 * Ključne riječi — vidi odjeljak „Hrvatski (HR)” u /keywords.md. Struktura polja — kao u en.js.
 * Snimke zaslona: 1 naslovna · 2 zaslon izdvajanja · 3 skraćivanje · 4 izbornik Dijeli · 5 knjižnica
 */

const APP = 'Izdvoji zvuk iz videa⁺';

const STEP = {
    open: {
        name: 'Otvorite aplikaciju i odaberite video',
        text: `Otvorite ${APP} i odaberite video iz aplikacije Foto ili Datoteke. Brže: u aplikaciji Foto dodirnite Dijeli na videu i odaberite „Izdvoji zvuk”.`,
        image: 2
    },
    share: {
        name: 'Pošaljite video u aplikaciju',
        text: 'Otvorite video u aplikaciji Foto ili Datoteke, dodirnite Dijeli i odaberite „Izdvoji zvuk”. Aplikacija se otvara s već učitanim videom.',
        image: 2
    },
    trim: {
        name: 'Skratite željeni dio (nije obavezno)',
        text: 'Dodirnite „Skrati video”, povucite žute oznake na početak i kraj željenog dijela, preslušajte i dodirnite „Spremi”.',
        image: 3
    },
    extract: {
        name: 'Dodirnite „Izdvoji zvuk”',
        text: 'Dodirnite „Izdvoji zvuk” – zvučni zapis pretvara se izravno na iPhoneu za nekoliko sekundi i ništa se ne šalje na internet.',
        image: 2
    },
    save: {
        name: 'Spremite ili pošaljite datoteku',
        text: 'Gotova audiodatoteka pojavljuje se u knjižnici. Dodirnite Dijeli da biste je spremili u Datoteke, poslali putem AirDropa ili u bilo koju aplikaciju.',
        image: 4
    }
};

const guides = [];
module.exports = guides;

guides.push(
    {
        slug: 'extract-audio-from-video-iphone',
        keyword: 'kako izdvojiti zvuk iz videa na iphoneu',
        eyebrow: 'Osnove',
        title: 'Kako izdvojiti zvuk iz videa na iPhoneu – korak po korak',
        description: 'Izdvojite zvuk iz bilo kojeg videa na iPhoneu s četiri dodira: odaberite video, skratite, dodirnite „Izdvoji zvuk” i spremite kao MP3 ili M4A. Besplatno.',
        h1: 'Kako izdvojiti zvuk iz videa na iPhoneu',
        answer: `Da biste izdvojili zvuk iz videa na iPhoneu, otvorite ${APP}, odaberite video iz aplikacije Foto, po potrebi ga skratite i dodirnite „Izdvoji zvuk”. Aplikacija za nekoliko sekundi sprema zvučni zapis kao MP3 ili M4A na iPhone. Besplatno je i radi bez interneta.`,
        intro: '<p>Aplikacija Foto na iPhoneu nema tipku „spremi samo zvuk”. Možete napraviti prečac (vidi <a href="/hr/guides/extract-audio-without-app-iphone/">način bez aplikacije</a>) ili prenijeti video na web-stranicu, ali oboje je sporo kad vam treba samo zvuk. Evo najbržeg načina: besplatna aplikacija koja radi izravno iz izbornika Dijeli.</p>',
        steps: [STEP.open, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Što vam treba',
                html: `<ul>
<li>iPhone s iOS‑om 18.6 ili novijim.</li>
<li>${APP} – besplatno u App Storeu (oko 23 MB).</li>
<li>Video sa zvukom: snimke kamere (MOV), preuzeti videozapisi (MP4), snimanja zaslona, videozapisi iz Poruka.</li>
</ul>`
            },
            {
                h2: 'Najbrži način – putem Dijeli',
                html: '<p>Aplikaciju ne morate ni otvarati. U aplikaciji <strong>Foto</strong> ili <strong>Datoteke</strong> otvorite video, dodirnite <strong>Dijeli</strong>, pomaknite red aplikacija i odaberite <strong>„Izdvoji zvuk”</strong>. Ako ga ne vidite, dodirnite „Više” i dodajte ga u favorite – tako će uvijek biti pri ruci.</p>'
            },
            {
                h2: 'MP3 ili M4A – što odabrati?',
                html: '<p><strong>MP3</strong> se reproducira posvuda: Windows, Android, auto-radio, web-stranice i uređivači videa. <strong>M4A</strong> (AAC) je Appleov format: manji uz istu kvalitetu, idealan za melodije zvona, GarageBand i iMovie. Ako niste sigurni, odaberite MP3. Više: <a href="/hr/guides/convert-video-to-mp3-iphone/">video u MP3</a> i <a href="/hr/guides/video-to-m4a-iphone/">video u M4A</a>.</p>'
            },
            {
                h2: 'Gdje se sprema zvuk?',
                html: '<p>Svaka izdvojena datoteka pojavljuje se u knjižnici aplikacije s trajanjem, veličinom i datumom. Odatle dodirnite <strong>Dijeli → Spremi u Datoteke</strong> da je spremite na iCloud Drive ili „Na mom iPhoneu”, ili je pošaljite u WhatsApp, Viber, Bilješke, GarageBand ili putem AirDropa na računalo.</p>'
            },
            {
                h2: 'Ako nešto ne radi',
                html: `<ul>
<li><strong>Datoteka nema zvuka.</strong> Sam video nema zvučni zapis – to se događa kod snimanja zaslona bez mikrofona. Najprije provjerite video u aplikaciji Foto.</li>
<li><strong>Video je na iCloudu.</strong> Foto najprije preuzima original – pričekajte da završi.</li>
<li><strong>Treba vam samo 20 sekundi.</strong> Skratite prije izdvajanja – vidi <a href="/hr/guides/trim-audio-from-video-iphone/">kako izrezati dio zvuka</a>.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Može li se zvuk iz videa na iPhoneu izdvojiti besplatno?', a: `Da. ${APP} se besplatno preuzima, a osnovno izdvajanje zvuka također je besplatno. Dodatne funkcije dostupne su putem kupnje unutar aplikacije.` },
            { q: 'Gubi li se kvaliteta pri izdvajanju?', a: 'Aplikacija sprema zvučni zapis videa kao kvalitetan MP3 ili M4A. Zvuk neće biti bolji od originala, ali zvučat će kao kad reproducirate video.' },
            { q: 'Može li se zvuk izdvojiti iz dugog videa?', a: 'Da. Predavanja, koncerti i sastanci obrađuju se na isti način, samo malo dulje. Ako vam treba samo dio, najprije skratite.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'trim-audio-from-video-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Izdvojite zvuk iz videa na iPhoneu', text: 'Način s četiri dodira – iz aplikacije Foto ili putem Dijeli.' }
    },
    {
        slug: 'convert-video-to-mp3-iphone',
        keyword: 'pretvoriti video u mp3 iphone',
        eyebrow: 'Video u MP3',
        title: 'Kako pretvoriti video u MP3 na iPhoneu – brzo i besplatno',
        description: 'Pretvorite bilo koji video s iPhonea u MP3 za nekoliko sekundi. Radi iz aplikacije Foto, datoteke ostaju na uređaju, a prije izvoza možete skratiti.',
        h1: 'Kako pretvoriti video u MP3 na iPhoneu',
        answer: `Otvorite video u aplikaciji Foto, dodirnite Dijeli i odaberite „Izdvoji zvuk” (${APP}). Skratite po potrebi, dodirnite „Izdvoji zvuk” i spremite kao MP3. Datoteka ostaje na iPhoneu – možete je poslati u Datoteke, putem AirDropa ili u bilo koju aplikaciju. Ne treba vam računalo ni račun.`,
        intro: '<p>MP3 je najkompatibilniji audioformat: reproducira se u svakom autu, na svakom računalu i u svakom uređivaču. Evo kako pretvoriti video u MP3 bez ispuštanja iPhonea iz ruke.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Izdvojite u MP3', text: 'Dodirnite „Izdvoji zvuk” i odaberite format MP3. Pretvorba videa u MP3 odvija se izravno na iPhoneu.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'Zašto aplikacija, a ne online pretvarač?',
                html: '<p>Online pretvarači traže da prenesete cijeli video, pričekate u redu i ponovno preuzmete MP3 – sporo na mobilnim podacima i rizično za osobne videozapise. Aplikacija radi bez interneta, datoteku drži na uređaju i omogućuje skraćivanje prije pretvorbe. Detaljna usporedba: <a href="/hr/guides/extract-audio-online-vs-app/">online ili aplikacija</a>.</p>'
            },
            {
                h2: 'Koje se videozapise može pretvoriti u MP3?',
                html: '<p>Sve što iPhone reproducira: snimke kamere (<a href="/hr/guides/mov-to-mp3-iphone/">MOV</a>), preuzete videozapise (<a href="/hr/guides/mp4-to-mp3-iphone/">MP4</a>), <a href="/hr/guides/screen-recording-to-audio-iphone/">snimanja zaslona</a> te videozapise iz Poruka, WhatsAppa, Vibera i AirDropa.</p>'
            },
            {
                h2: 'Što napraviti s MP3-om',
                html: `<ul>
<li>Spremiti ga u <strong>Datoteke</strong> i slušati bez interneta.</li>
<li>Poslati ga na računalo putem <strong>AirDropa</strong>.</li>
<li>Od 30 sekundi napraviti <a href="/hr/guides/video-to-ringtone-iphone/">melodiju zvona</a>.</li>
<li>Dodati ga u GarageBand, CapCut ili uređivač podcasta.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Može li iPhone pretvoriti video u MP3 bez aplikacije?', a: 'Ne izravno. Prečaci spremaju zvuk samo kao M4A. Za MP3 na iPhoneu treba vam aplikacija ili web-stranica.' },
            { q: 'Je li pretvorba u MP3 besplatna?', a: `Da, osnovna pretvorba u aplikaciji ${APP} je besplatna. Dodatne funkcije putem kupnje unutar aplikacije.` },
            { q: 'Treba li internet za pretvorbu videa u MP3?', a: 'Ne. Pretvorba se odvija na iPhoneu i radi bez interneta. Samo videozapise pohranjene na iCloudu treba najprije preuzeti.' }
        ],
        related: ['mp4-to-mp3-iphone', 'mov-to-mp3-iphone', 'video-to-m4a-iphone'],
        card: { title: 'Video u MP3 na iPhoneu', text: 'Bilo koji video u univerzalni MP3.' }
    }
);

guides.push(
    {
        slug: 'mp4-to-mp3-iphone',
        keyword: 'mp4 u mp3 iphone',
        eyebrow: 'MP4 u MP3',
        title: 'MP4 u MP3 na iPhoneu: besplatan pretvarač bez prijenosa',
        description: 'Pretvorite MP4 u MP3 na iPhoneu besplatno: otvorite datoteku u aplikaciji Datoteke ili Foto i dodirnite Dijeli → „Izdvoji zvuk”. Bez interneta, sa skraćivanjem.',
        h1: 'Kako pretvoriti MP4 u MP3 na iPhoneu',
        answer: `Da biste pretvorili MP4 u MP3 na iPhoneu, otvorite datoteku u aplikaciji Datoteke ili Foto, dodirnite Dijeli i odaberite „Izdvoji zvuk”. U aplikaciji ${APP} skratite ako želite, dodirnite „Izdvoji zvuk”, odaberite MP3 i spremite. Besplatno, na uređaju, bez interneta.`,
        intro: '<p>MP4 datoteke obično stižu kao preuzimanja, privitci e-pošte ili putem AirDropa, pa se često nalaze u aplikaciji <strong>Datoteke</strong>, a ne u aplikaciji Foto. Aplikacija radi s obje.</p>',
        steps: [
            { name: 'Pronađite MP4 datoteku', text: 'Otvorite Datoteke (Preuzimanja, iCloud Drive ili „Na mom iPhoneu”) ili Foto i pronađite MP4.', image: 2 },
            { name: 'Pošaljite u „Izdvoji zvuk”', text: 'Dugo pritisnite datoteku i odaberite Dijeli → „Izdvoji zvuk”. MP4 se otvara u aplikaciji.', image: 2 },
            STEP.trim,
            { name: 'Spremite kao MP3', text: 'Dodirnite „Izdvoji zvuk”, odaberite MP3, a zatim Dijeli → Spremi u Datoteke kako bi MP3 bio pokraj izvornog MP4-a.', image: 4 }
        ],
        sections: [
            {
                h2: 'Razlika između MP4 i MP3',
                html: '<p>MP4 je spremnik sa slikom i zvukom; MP3 sadrži samo zvuk. Pri pretvorbi MP4 u MP3 zvučni zapis ostaje, a slika se uklanja: datoteka postaje mnogo manja i reproducira se u bilo kojem playeru.</p>'
            },
            {
                h2: 'MP4 iz WhatsAppa, Vibera i e-pošte',
                html: '<p>Najprije spremite privitak: u razgovoru otvorite video → Dijeli → „Spremi video” (u Foto) ili „Spremi u Datoteke”. Zatim slijedite korake iznad. Pretvarajte samo svoje videozapise ili one za koje imate prava.</p>'
            },
            {
                h2: 'Treba vam M4A?',
                html: '<p>Za melodije zvona i Appleove aplikacije bolji je M4A. Pogledajte <a href="/hr/guides/video-to-m4a-iphone/">kako spremiti video kao M4A na iPhoneu</a>.</p>'
            }
        ],
        faq: [
            { q: 'Može li se MP4 besplatno pretvoriti u MP3 na iPhoneu?', a: `Da. ${APP} besplatno pretvara MP4 u MP3 izravno na uređaju. Kupnje unutar aplikacije otključavaju dodatne funkcije.` },
            { q: 'Hoće li MP3 biti manji od MP4-a?', a: 'Da, obično mnogo manji: video zapis se uklanja i ostaje samo zvuk.' },
            { q: 'Može li se pretvoriti više MP4 datoteka?', a: 'Da. Pretvarajte ih jednu po jednu – svi MP3-i spremaju se u knjižnicu aplikacije.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'mov-to-mp3-iphone', 'extract-audio-online-vs-app'],
        card: { title: 'MP4 u MP3 na iPhoneu', text: 'Preuzeti MP4 iz Datoteka i aplikacije Foto u MP3.' }
    },
    {
        slug: 'mov-to-mp3-iphone',
        keyword: 'mov u mp3 iphone',
        eyebrow: 'MOV u MP3',
        title: 'MOV u MP3 na iPhoneu – zvuk iz videa snimljenih kamerom',
        description: 'Videozapisi s kamere iPhonea su MOV datoteke. Pretvorite MOV u MP3 izravno na telefonu: odaberite video, skratite i dodirnite „Izdvoji zvuk”. Besplatno.',
        h1: 'Kako pretvoriti MOV u MP3 na iPhoneu',
        answer: `Svi videozapisi s kamere iPhonea spremaju se u formatu MOV. Za MP3 otvorite video u aplikaciji Foto, dodirnite Dijeli → „Izdvoji zvuk”, skratite po potrebi i dodirnite „Izdvoji zvuk” u aplikaciji ${APP}. MP3 se sprema na iPhone – računalo nije potrebno.`,
        intro: '<p>MOV je Appleov videoformat u kojem snima kamera iPhonea: koncerti, govori, prijatelj s gitarom, glas koji želite sačuvati. Kao MP3 taj zvuk možete slušati bilo gdje.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Kada je MOV u MP3 koristan',
                html: `<ul>
<li>Sačuvajte zvuk koncerta ili nastupa koji ste snimili.</li>
<li>Pretvorite zdravicu ili govor u zvučnu uspomenu.</li>
<li>Pošaljite snimku probe bendu bez golemog videa.</li>
<li>Slušajte <a href="/hr/guides/lecture-video-to-audio-iphone/">snimljeno predavanje</a> u pokretu.</li>
</ul>`
            },
            {
                h2: 'HEVC, 4K i Filmski način',
                html: '<p>HEVC i 4K videozapisi obrađuju se na isti način. Pretvara se samo zvuk, pa i vrlo velike MOV datoteke daju male audiodatoteke.</p>'
            },
            {
                h2: 'Zašto računalo nije potrebno',
                html: '<p>Prebacivanje MOV datoteke od nekoliko gigabajta na računalo zbog zvuka traje dulje od pretvorbe na telefonu. Aplikacija to radi tamo gdje je video već spremljen.</p>'
            }
        ],
        faq: [
            { q: 'U kojem formatu iPhone snima video?', a: 'Kamera iPhonea snima MOV datoteke, obično s HEVC ili H.264 videom i AAC zvukom.' },
            { q: 'Može li se MOV pretvoriti u MP3 bez gubitka kvalitete?', a: 'Aplikacija čuva kvalitetu izvorne snimke: MP3 zvuči kao video pri reprodukciji.' },
            { q: 'Može li se MOV spremiti kao M4A?', a: 'Da, odaberite format M4A. Praktičan je za melodije zvona i Appleove aplikacije.' }
        ],
        related: ['mp4-to-mp3-iphone', 'convert-video-to-mp3-iphone', 'save-music-from-video-iphone'],
        card: { title: 'MOV u MP3', text: 'Zvuk iz videa snimljenih kamerom iPhonea.' }
    },
    {
        slug: 'video-to-m4a-iphone',
        keyword: 'video u m4a iphone',
        eyebrow: 'Video u M4A',
        title: 'Video u M4A na iPhoneu – MP4 i MOV u M4A besplatno',
        description: 'Spremite zvuk iz videa kao M4A na iPhoneu za melodije zvona, GarageBand i Appleove aplikacije. Besplatno, na uređaju, sa skraćivanjem – u četiri dodira.',
        h1: 'Kako spremiti zvuk iz videa kao M4A na iPhoneu',
        answer: `Da biste pretvorili video u M4A na iPhoneu, pošaljite video iz aplikacije Foto ili Datoteke u „Izdvoji zvuk”, skratite ako želite, dodirnite „Izdvoji zvuk” i odaberite M4A. ${APP} sprema M4A (AAC) datoteku prikladnu za GarageBand, iMovie, playere i melodije zvona.`,
        intro: '<p>M4A je Appleov vlastiti audioformat. Uz sličnu kvalitetu manji je od MP3-a i upravo ga iPhone očekuje za melodije zvona i GarageBand projekte.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Izdvojite u M4A', text: 'Dodirnite „Izdvoji zvuk” i odaberite format M4A.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'M4A ili MP3 – kada odabrati M4A',
                html: `<table class="guide-table"><thead><tr><th></th><th>M4A (AAC)</th><th>MP3</th></tr></thead><tbody>
<tr><td>Najbolje za</td><td>iPhone, Mac, melodije zvona, GarageBand</td><td>Sve ostalo – Windows, Android, auto</td></tr>
<tr><td>Veličina datoteke</td><td>Manja uz istu kvalitetu</td><td>Nešto veća</td></tr>
<tr><td>Kompatibilnost</td><td>Vrlo dobra</td><td>Univerzalna</td></tr>
</tbody></table>`
            },
            {
                h2: 'Postavite M4A kao melodiju zvona',
                html: '<p>U iOS‑u 26 M4A datoteka kraća od 30 sekundi može se postaviti kao melodija zvona izravno iz Datoteka. Detaljno: <a href="/hr/guides/video-to-ringtone-iphone/">kako napraviti melodiju zvona iz videa</a>.</p>'
            },
            {
                h2: 'Otvorite u GarageBandu ili iMovieju',
                html: '<p>Spremite M4A u Datoteke, a zatim ga uvezite putem preglednika datoteka u GarageBandu ili iMovieju – kao pozadinsku glazbu, naraciju ili zvučni efekt.</p>'
            }
        ],
        faq: [
            { q: 'Je li M4A bolji od MP3-a?', a: 'Uz istu brzinu prijenosa M4A (AAC) obično zvuči jednako dobro ili bolje i zauzima manje prostora. MP3 je kompatibilan s više uređaja.' },
            { q: 'Može li se M4A napraviti Prečacima?', a: 'Da, radnja „Kodiraj medij” s opcijom „Samo zvuk” stvara M4A. No tako ne možete skratiti zvuk ni spremiti MP3 – u aplikaciji možete.' },
            { q: 'Je li spremanje kao M4A besplatno?', a: `Da, osnovno izdvajanje u aplikaciji ${APP} je besplatno, uključujući izvoz u M4A.` }
        ],
        related: ['video-to-ringtone-iphone', 'convert-video-to-mp3-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Video u M4A', text: 'Appleov format za melodije zvona i GarageBand.' }
    }
);

guides.push(
    {
        slug: 'extract-audio-without-app-iphone',
        keyword: 'izdvojiti zvuk iz videa iphone bez aplikacije',
        eyebrow: 'Prečaci ili aplikacija',
        title: 'Kako izdvojiti zvuk iz videa na iPhoneu bez aplikacije',
        description: 'Zvuk iz videa na iPhoneu možete dobiti i bez aplikacije – pomoću Prečaca i radnje „Kodiraj medij”. Potpuno postavljanje, ograničenja i brža alternativa.',
        h1: 'Kako izdvojiti zvuk iz videa na iPhoneu bez aplikacije',
        answer: 'Bez aplikacija trećih strana zvuk se izdvaja Prečacima: dodajte radnju „Kodiraj medij”, uključite „Samo zvuk”, dodajte „Spremi datoteku” i uključite prikaz u izborniku Dijeli. Zatim pošaljite video u prečac. Rezultat je samo M4A i bez skraćivanja; za MP3 i kratke isječke aplikacija je brža.',
        intro: '<p>Appleova besplatna aplikacija Prečaci može odvojiti zvuk od videa. Postavljanje traje nekoliko minuta. Evo točnog recepta – i njegovih ograničenja.</p>',
        steps: [
            { name: 'Napravite novi prečac', text: 'Otvorite Prečace, dodirnite + i nazovite prečac „Zvuk iz videa”.', image: 2 },
            { name: 'Dodajte „Kodiraj medij”', text: 'Dodirnite „Dodaj radnju”, potražite „Kodiraj medij”, dodajte je, proširite opcije strelicom i uključite „Samo zvuk”.', image: 2 },
            { name: 'Dodajte „Spremi datoteku”', text: 'Dodajte radnju „Spremi datoteku” kako bi rezultat završio u Datotekama.', image: 4 },
            { name: 'Prikaz u izborniku Dijeli', text: 'Otvorite pojedinosti prečaca (ikona i), uključite „Prikaži u listu za dijeljenje” i dopustite vrstu „Mediji”. Sada pošaljite video iz aplikacije Foto i odaberite prečac.', image: 4 }
        ],
        sections: [
            {
                h2: 'Ograničenja načina s Prečacima',
                html: `<ul>
<li><strong>Samo M4A</strong> – MP3 nije moguć.</li>
<li><strong>Bez skraćivanja</strong> – uvijek se sprema cijeli zvučni zapis.</li>
<li><strong>Bez knjižnice</strong> – datoteke završavaju u Datotekama i morate ih ručno pronaći i preimenovati.</li>
<li>Kod dugih videa prečac se može zaustaviti bez jasne pogreške.</li>
</ul>`
            },
            {
                h2: 'Rješenje jednim dodirom',
                html: `<p>${APP} radi isto, ali sa skraćivanjem, izborom između MP3 i M4A te knjižnicom svih izdvojenih datoteka. Aplikacija je također u izborniku Dijeli, pa nije sporija – i ništa ne morate slagati.</p>`
            },
            {
                h2: 'Drugi načini bez aplikacije',
                html: '<p>Zvuk možete odvojiti i u iMovieju ili GarageBandu, ali uz više koraka i manje formata izvoza. Rade i web-stranice, ali video morate prenijeti na internet – vidi <a href="/hr/guides/extract-audio-online-vs-app/">online ili aplikacija</a>.</p>'
            }
        ],
        faq: [
            { q: 'Ima li iPhone ugrađen način za izdvajanje zvuka?', a: 'Foto nema posebnu tipku. Najbliža ugrađena mogućnost je radnja „Kodiraj medij” s opcijom „Samo zvuk” u aplikaciji Prečaci.' },
            { q: 'U kojem formatu prečac sprema zvuk?', a: 'U M4A. Spremanje u MP3 putem Prečaca nije moguće.' },
            { q: 'Može li se zvuk skratiti prečacem?', a: `Ne na jednostavan način. Za skraćivanje koristite aplikaciju s vremenskom crtom, primjerice ${APP}.` }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-online-vs-app', 'video-to-m4a-iphone'],
        card: { title: 'Bez aplikacije (Prečaci)', text: 'Besplatni recept i njegova ograničenja.' }
    },
    {
        slug: 'extract-audio-online-vs-app',
        keyword: 'izdvojiti zvuk iz videa online',
        eyebrow: 'Online ili aplikacija',
        title: 'Izdvojiti zvuk iz videa online ili aplikacijom na iPhoneu?',
        description: 'Izdvojiti zvuk iz videa online ili aplikacijom? Uspoređujemo privatnost, brzinu, ograničenja i skraćivanje na iPhoneu – i što odabrati kad je video na mobitelu.',
        h1: 'Izdvojiti zvuk iz videa online ili aplikacijom: što odabrati na iPhoneu',
        answer: `Online usluge rade na svakom uređaju, ali traže prijenos cijelog videa, čekanje obrade i preuzimanje rezultata – sporo na mobilnim podacima i nesigurno za osobne snimke. Na iPhoneu je aplikacija poput ${APP} brža, radi bez interneta, drži video na uređaju i može skratiti zvuk.`,
        intro: '<p>Pretraga „izdvojiti zvuk iz videa online” vraća desetke besplatnih stranica. Na laptopu s brzim internetom praktične su. Na iPhoneu je slika drukčija.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Usporedba',
                html: `<table class="guide-table"><thead><tr><th></th><th>Online usluga</th><th>${APP}</th></tr></thead><tbody>
<tr><td>Privatnost</td><td>Video se prenosi na tuđi server</td><td>Ostaje na iPhoneu</td></tr>
<tr><td>Brzina</td><td>Prijenos + red + preuzimanje</td><td>Sekunde, na uređaju</td></tr>
<tr><td>Bez interneta</td><td>Ne</td><td>Da</td></tr>
<tr><td>Ograničenja veličine</td><td>Česta u besplatnim paketima</td><td>Samo prostor na iPhoneu</td></tr>
<tr><td>Skraćivanje</td><td>Ponekad</td><td>Ugrađena vremenska crta</td></tr>
<tr><td>Oglasi i skočni prozori</td><td>Često</td><td>Bez web-oglasa</td></tr>
<tr><td>Cijena</td><td>Besplatno s ograničenjima</td><td>Osnovne funkcije besplatne</td></tr>
</tbody></table>`
            },
            {
                h2: 'Kada se online usluga isplati',
                html: '<p>Ako ste za računalom s Windowsom i video je već ondje, pouzdan online pretvarač je dovoljan. Ne prenosite ništa osobno: obiteljske videozapise, poslovne sastanke ni materijale klijenata.</p>'
            },
            {
                h2: 'Kada je aplikacija bolja',
                html: '<p>Kad je video na iPhoneu, aplikacija pobjeđuje: ne morate ga prenositi mobilnom mrežom, čekati ni preuzimati rezultat, a potreban dio možete precizno izrezati.</p>'
            }
        ],
        faq: [
            { q: 'Je li sigurno izdvajati zvuk iz videa online?', a: 'Ovisi o stranici. Video se prenosi na server treće strane, pa to kod osobnih snimaka bolje izbjegavajte. Aplikacije koje rade na uređaju ništa ne prenose.' },
            { q: 'Može li se na iPhoneu besplatno izdvojiti zvuk bez prijenosa?', a: `Da. ${APP} besplatno pretvara videozapise izravno na uređaju, a video se nikamo ne šalje.` },
            { q: 'Zašto je online pretvorba na mobitelu tako spora?', a: 'Najprije se mora prenijeti cijeli video. Videozapisi s mobitela su veliki, a brzina slanja na mobilnoj mreži obično je mnogo niža od brzine preuzimanja.' }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-without-app-iphone', 'mp4-to-mp3-iphone'],
        card: { title: 'Online ili aplikacija', text: 'Privatnost, brzina i ograničenja – usporedba.' }
    },
    {
        slug: 'save-music-from-video-iphone',
        keyword: 'izvući pjesmu iz videa iphone',
        eyebrow: 'Glazba',
        title: 'Kako izvući pjesmu iz videa na iPhoneu (MP3 ili M4A)',
        description: 'Spremite pjesmu ili pozadinsku glazbu iz videa na iPhoneu kao MP3 ili M4A. Skratite točno po pjesmi, slušajte bez interneta i dijelite. Kratak vodič sa slikama.',
        h1: 'Kako izvući pjesmu iz videa na iPhoneu',
        answer: `Da biste izvukli pjesmu iz videa na iPhoneu, otvorite video u aplikaciji Foto, dodirnite Dijeli → „Izdvoji zvuk”, oznakama odaberite pjesmu i dodirnite „Izdvoji zvuk” u aplikaciji ${APP}. Glazba se sprema kao MP3 ili M4A – slušajte je bez interneta u Datotekama ili je pošaljite u bilo koju aplikaciju.`,
        intro: '<p>Pjesma s vjenčanja, obrada prijatelja, glazba iz vaše montaže – ponekad je zvuk najvrjedniji dio videa. Evo kako ga spremiti kao zasebnu glazbenu datoteku.</p>',
        steps: [STEP.share, { name: 'Odaberite pjesmu', text: 'Dodirnite „Skrati video” i povucite žute oznake tako da ostane samo pjesma. Preslušajte početak i kraj.', image: 3 }, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Kako dobiti najbolji zvuk',
                html: `<ul>
<li>Odrežite razgovor i pljesak na početku i kraju.</li>
<li>MP3 za auto i starije playere, M4A za Appleove uređaje.</li>
<li>Preimenujte datoteku u Datotekama (dugi pritisak → „Preimenuj”) kako biste je lako pronašli.</li>
</ul>`
            },
            {
                h2: 'O autorskim pravima',
                html: '<p>Spremajte glazbu iz svojih videa ili onih za koje imate prava. Komercijalne pjesme zaštićene su autorskim pravom: osobna kopija vlastite snimke je u redu, objavljivanje tuđe glazbe nije.</p>'
            },
            {
                h2: 'Postavite kao melodiju zvona',
                html: '<p>Pronašli ste omiljenih 30 sekundi? <a href="/hr/guides/video-to-ringtone-iphone/">Napravite od njih melodiju zvona</a>.</p>'
            }
        ],
        faq: [
            { q: 'Kako izvući pjesmu iz videa na iPhoneu?', a: `Pošaljite video u ${APP}, pri skraćivanju odaberite pjesmu i dodirnite „Izdvoji zvuk”. Pjesma se sprema kao audiodatoteka.` },
            { q: 'Može li se izdvojena pjesma dodati u Apple Music?', a: 'Aplikacija Glazba na iPhoneu ne uvozi lokalne datoteke izravno. Držite datoteku u Datotekama ili sinkronizirajte putem Maca ili računala.' },
            { q: 'Može li se izvući glazba iz videa iz WhatsAppa ili Poruka?', a: 'Da. Najprije spremite video u Foto ili Datoteke, a zatim izdvojite zvuk.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-ringtone-iphone', 'mov-to-mp3-iphone'],
        card: { title: 'Izvucite pjesmu iz videa', text: 'Zadržite pjesmu, bez slike.' }
    }
);

guides.push(
    {
        slug: 'trim-audio-from-video-iphone',
        keyword: 'izrezati zvuk iz videa iphone',
        eyebrow: 'Skraćivanje',
        title: 'Kako izrezati samo dio zvuka iz videa na iPhoneu',
        description: 'Treba vam samo 10 sekundi zvuka? Skratite video na iPhoneu i spremite samo taj dio kao MP3 ili M4A. Oznake, preslušavanje i izvoz – besplatno, na telefonu.',
        h1: 'Kako izdvojiti samo dio zvuka iz videa na iPhoneu',
        answer: `Da biste izrezali dio zvuka iz videa na iPhoneu, otvorite ga u aplikaciji ${APP}, dodirnite „Skrati video”, povucite žute oznake početka i kraja oko željenog dijela, dodirnite „Spremi”, a zatim „Izdvoji zvuk”. Samo odabrani dio sprema se kao MP3 ili M4A.`,
        intro: '<p>Najčešće vam ne treba cijeli zvučni zapis nego citat, refren ili zvučni efekt. Ako najprije skratite, dobit ćete mali i čist isječak.</p>',
        steps: [
            STEP.open,
            { name: 'Dodirnite „Skrati video”', text: 'Na zaslonu izdvajanja dodirnite „Skrati video” da otvorite vremensku crtu.', image: 2 },
            { name: 'Povucite oznake', text: 'Povucite lijevu žutu oznaku na početak, a desnu na kraj. Vrijeme odabira prikazano je pokraj njih. Preslušajte i dodirnite „Spremi”.', image: 3 },
            { name: 'Izdvojite i spremite', text: 'Dodirnite „Izdvoji zvuk” – izvozi se samo skraćeni dio. Pošaljite ga ili spremite u Datoteke.', image: 4 }
        ],
        sections: [
            {
                h2: 'Savjeti za precizno skraćivanje',
                html: `<ul>
<li>Ostavite pola sekunde prije i poslije govora kako ne biste odrezali riječi.</li>
<li>Za melodiju zvona odaberite najviše 30 sekundi.</li>
<li>Treba vam više dijelova iz istog videa? Ponovite skraćivanje za svaki – sve se datoteke spremaju u knjižnicu.</li>
</ul>`
            },
            {
                h2: 'Što se obično izrezuje',
                html: '<p>Jedna rečenica iz govora, refren pjesme, zvučni efekt za montažu, prve riječi djeteta ili najvažnija minuta iz duge snimke sastanka.</p>'
            }
        ],
        faq: [
            { q: 'Može li se zvuk iz videa skratiti na iPhoneu?', a: `Da. Skratite video na željeni dio u aplikaciji ${APP} i izdvojite zvuk – sprema se samo taj dio.` },
            { q: 'Mijenja li skraćivanje izvorni video?', a: 'Ne. Original u aplikaciji Foto ostaje nepromijenjen; skraćuje se samo izvezena audiodatoteka.' },
            { q: 'Može li se iz jednog videa izrezati više dijelova?', a: 'Da. Skratite i izdvojite zvuk ponovno za svaki dio koji vam treba.' }
        ],
        related: ['video-to-ringtone-iphone', 'save-music-from-video-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Izrežite dio zvuka', text: 'Skraćivanje s točnošću od sekunde.' }
    },
    {
        slug: 'screen-recording-to-audio-iphone',
        keyword: 'zvuk iz snimke zaslona iphone',
        eyebrow: 'Snimanje zaslona',
        title: 'Kako spremiti zvuk iz snimke zaslona na iPhoneu',
        description: 'Pretvorite snimku zaslona s iPhonea u MP3 ili M4A datoteku. Zašto snimka nema zvuka, kako izrezati pravi dio i spremiti zvuk. Jednostavni koraci.',
        h1: 'Kako spremiti zvuk iz snimke zaslona na iPhoneu',
        answer: `Snimanja zaslona na iPhoneu spremaju se u aplikaciju Foto kao videozapisi. Za zvuk otvorite snimku, dodirnite Dijeli → „Izdvoji zvuk”, skratite po potrebi i dodirnite „Izdvoji zvuk” u aplikaciji ${APP}. Ako datoteka nema zvuka, zvuk uopće nije snimljen – uključite mikrofon prije snimanja.`,
        intro: '<p>Snimanje zaslona čest je način za spremanje glasovne poruke, poziva na zvučniku ili isječka iz aplikacije. Evo kako zadržati samo zvuk.</p>',
        steps: [
            { name: 'Pronađite snimku u aplikaciji Foto', text: 'Snimanja zaslona nalaze se u Foto → Vrste medija → Snimanja zaslona.', image: 2 },
            { name: 'Pošaljite u „Izdvoji zvuk”', text: 'Otvorite snimku, dodirnite Dijeli i odaberite „Izdvoji zvuk”.', image: 2 },
            STEP.trim,
            { name: 'Izdvojite i spremite', text: 'Dodirnite „Izdvoji zvuk” i spremite MP3 ili M4A u Datoteke.', image: 4 }
        ],
        sections: [
            {
                h2: 'Zašto snimka zaslona nema zvuka?',
                html: `<ul>
<li><strong>Mikrofon je isključen:</strong> u Kontrolnom centru dugo pritisnite tipku Snimanje zaslona i uključite „Mikrofon” kako bi se snimao vaš glas.</li>
<li><strong>Utišani način:</strong> neke aplikacije isključuju svoje zvukove u utišanom načinu.</li>
<li><strong>Zaštićeni sadržaj:</strong> mnoge usluge za streaming blokiraju zvuk pri snimanju zaslona – to je ograničenje koje se ne može zaobići.</li>
</ul>`
            },
            {
                h2: 'Poštujte privatnost',
                html: '<p>Snimajte i spremajte pozive i razgovore samo uz pristanak svih sudionika i u skladu sa zakonima svoje zemlje.</p>'
            }
        ],
        faq: [
            { q: 'Može li se snimka zaslona pretvoriti u MP3?', a: 'Da. Snimka zaslona je običan video, pa se njezin zvuk može spremiti kao MP3 ili M4A.' },
            { q: 'Gdje su snimanja zaslona na iPhoneu?', a: 'U aplikaciji Foto, pod Vrste medija → Snimanja zaslona.' },
            { q: 'Zašto snimka zaslona nema zvuka?', a: 'Mikrofon je bio isključen ili aplikacija blokira snimanje zvuka. Prije izdvajanja provjerite reproducira li se snimka sa zvukom.' }
        ],
        related: ['extract-audio-from-video-iphone', 'trim-audio-from-video-iphone', 'lecture-video-to-audio-iphone'],
        card: { title: 'Zvuk iz snimke zaslona', text: 'Spremite zvuk i saznajte zašto nedostaje.' }
    }
);

guides.push(
    {
        slug: 'lecture-video-to-audio-iphone',
        keyword: 'video predavanje u zvuk',
        eyebrow: 'Učenje',
        title: 'Kako pretvoriti video predavanje u zvuk (MP3) na iPhoneu',
        description: 'Pretvorite snimljena predavanja, webinare i govore u MP3 na iPhoneu i učite u pokretu. Male datoteke, slušanje bez interneta, jednostavno dijeljenje.',
        h1: 'Kako pretvoriti video predavanje u zvuk na iPhoneu',
        answer: `Da biste video predavanje pretvorili u zvuk, otvorite snimku u aplikaciji Foto ili Datoteke, dodirnite Dijeli → „Izdvoji zvuk”, a zatim „Izdvoji zvuk” u aplikaciji ${APP}. Spremite MP3 u Datoteke i slušajte bez interneta – u prijevozu, u teretani ili s isključenim zaslonom, uz mnogo manju datoteku.`,
        intro: '<p>Na predavanju je važno ono što se govori, a ne ono što se vidi. Kad video predavanje pretvorite u zvuk, dobivate podcast koji možete ponovno slušati bilo gdje.</p>',
        steps: [
            STEP.share,
            { name: 'Uklonite uvod i pauze (nije obavezno)', text: 'Dodirnite „Skrati video” da uklonite čekanje prije početka i nepotreban dio s pitanjima.', image: 3 },
            STEP.extract,
            { name: 'Spremite u mapu „Predavanja”', text: 'Dodirnite Dijeli → Spremi u Datoteke i napravite mapu za svaki kolegij kako biste brzo pronašli snimke.', image: 4 }
        ],
        sections: [
            {
                h2: 'Zašto je učenje uz zvuk praktično',
                html: `<ul>
<li><strong>Male datoteke:</strong> sat zvuka zauzima mnogo manje od sata videa.</li>
<li><strong>Isključen zaslon:</strong> slušajte sa zaključanim mobitelom i štedite bateriju.</li>
<li><strong>Bilo gdje:</strong> u tramvaju, u šetnji, u teretani – Wi‑Fi nije potreban.</li>
</ul>`
            },
            {
                h2: 'Pretvorite u bilješke',
                html: '<p>Treba vam tekst? Uvezite zvuk u aplikaciju za transkripciju koju već koristite i pretražujte tekst.</p>'
            },
            {
                h2: 'Provjerite pravila',
                html: '<p>Mnogi fakulteti dopuštaju snimanje predavanja za osobnu upotrebu, ali ne i njihovo dijeljenje. Provjerite pravila kolegija prije snimanja ili dijeljenja predavanja.</p>'
            }
        ],
        faq: [
            { q: 'Može li se video na iPhoneu slušati s isključenim zaslonom?', a: 'Većina video playera zaustavi se kad zaključate mobitel. Ako video pretvorite u MP3, možete ga slušati s isključenim zaslonom u Datotekama ili bilo kojem audio playeru.' },
            { q: 'Radi li to s predavanjem od sat vremena?', a: 'Da. Duge snimke obrađuju se na isti način, samo malo dulje.' },
            { q: 'Mogu li se pretvoriti snimke sa Zooma i webinara?', a: 'Da, čim se MP4 snimka nađe u aplikaciji Foto ili Datoteke na iPhoneu.' }
        ],
        related: ['screen-recording-to-audio-iphone', 'mp4-to-mp3-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Video predavanje u zvuk', text: 'Učite u pokretu uz male MP3 datoteke.' }
    },
    {
        slug: 'video-to-ringtone-iphone',
        keyword: 'melodija zvona iz videa iphone',
        eyebrow: 'Melodije zvona',
        title: 'Kako napraviti melodiju zvona iz videa na iPhoneu (iOS 26)',
        description: 'Pretvorite bilo koji video u melodiju zvona za iPhone: skratite zvuk na 30 sekundi, spremite u Datoteke i dodirnite Dijeli → „Koristi kao melodiju zvona”.',
        h1: 'Kako napraviti melodiju zvona iz videa na iPhoneu',
        answer: `Da biste napravili melodiju zvona iz videa, otvorite ga u aplikaciji ${APP}, skratite na najviše 30 sekundi, izdvojite zvuk u M4A ili MP3 i spremite u Datoteke. U iOS‑u 26 dugo pritisnite datoteku u Datotekama i dodirnite Dijeli → „Koristi kao melodiju zvona”. Na starijim verzijama iOS‑a uvezite zvuk u GarageBand i izvezite ga kao melodiju zvona.`,
        intro: '<p>Smijeh, pjesma s zabave, lavež psa – bilo koji zvuk iz vaših videa može postati melodija zvona. U iOS‑u 26 to je jednostavno ako imate audiodatoteku.</p>',
        steps: [
            STEP.share,
            { name: 'Skratite na 30 sekundi', text: 'Dodirnite „Skrati video” i odaberite najviše 30 sekundi – to je ograničenje za melodiju zvona.', image: 3 },
            { name: 'Izdvojite i spremite u Datoteke', text: 'Dodirnite „Izdvoji zvuk” (M4A ili MP3), zatim Dijeli → Spremi u Datoteke.', image: 4 },
            { name: 'Koristi kao melodiju zvona', text: 'U Datotekama dugo pritisnite audiodatoteku i dodirnite Dijeli → „Koristi kao melodiju zvona” (iOS 26). Provjerite u Postavke → Zvukovi i haptika → Melodija zvona.', image: 4 }
        ],
        sections: [
            {
                h2: 'Na iOS‑u 18: način s GarageBandom',
                html: `<ol>
<li>Izdvojite i skratite zvuk kako je opisano iznad i spremite ga u Datoteke.</li>
<li>Otvorite GarageBand, napravite projekt „Snimač zvuka” i prijeđite u prikaz zapisa.</li>
<li>Otvorite preglednik petlji → Datoteke → „Pregledaj stavke iz aplikacije Datoteke” i povucite zvuk na zapis.</li>
<li>Vratite se na „Moje pjesme”, dugo pritisnite projekt → Dijeli → Melodija zvona → Izvezi.</li>
</ol>`
            },
            {
                h2: 'Zašto nema opcije „Koristi kao melodiju zvona”',
                html: `<ul>
<li>Datoteka je dulja od 30 sekundi – skratite je ponovno.</li>
<li>Datoteka nije u formatu MP3 ili M4A.</li>
<li>iPhone još nema iOS 26 – koristite GarageBand.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Koliko duga može biti melodija zvona na iPhoneu?', a: 'Vlastite melodije zvona iz audiodatoteka mogu trajati najviše 30 sekundi.' },
            { q: 'Koji format treba melodija zvona za iPhone?', a: 'U iOS‑u 26 putem „Koristi kao melodiju zvona” mogu se postaviti MP3 ili M4A datoteke kraće od 30 sekundi.' },
            { q: 'Može li se video izravno postaviti kao melodija zvona?', a: 'Ne. Najprije izdvojite zvuk iz videa, a zatim audiodatoteku postavite kao melodiju zvona.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-m4a-iphone', 'save-music-from-video-iphone'],
        card: { title: 'Melodija zvona iz videa', text: '„Koristi kao melodiju zvona” u iOS‑u 26 – u četiri koraka.' }
    }
);
