/**
 * Slovenski vodiči → /sl/guides/<slug>/
 * Slugi so enaki angleškim (build/guides/en.js), da se strani povežejo prek hreflang.
 * Ključne besede — glejte razdelek „Slovenščina (SL)“ v /keywords.md. Struktura polj — kot v en.js.
 * Aplikacija nima slovenskega vmesnika, zato so gumbi v njej v angleščini („Extract Audio“, „Trim Video“, „Save“).
 * Posnetki zaslona: 1 naslovnica · 2 zaslon za izvlek · 3 obrezovanje · 4 meni Deli · 5 knjižnica
 */

const APP = 'Extract Audio from Video⁺';

const STEP = {
    open: {
        name: 'Odprite aplikacijo in izberite video',
        text: `Odprite ${APP} in izberite video iz Fotografij ali Datotek. Hitreje: v Fotografijah se pri videu dotaknite Deli in izberite „Extract Audio“.`,
        image: 2
    },
    share: {
        name: 'Pošljite video v aplikacijo',
        text: 'Odprite video v Fotografijah ali Datotekah, se dotaknite Deli in izberite „Extract Audio“. Aplikacija se odpre z že naloženim videom.',
        image: 2
    },
    trim: {
        name: 'Obrežite želeni del (neobvezno)',
        text: 'Dotaknite se „Trim Video“, povlecite rumeni oznaki na začetek in konec želenega dela, ga poslušajte in se dotaknite „Save“.',
        image: 3
    },
    extract: {
        name: 'Dotaknite se „Extract Audio“',
        text: 'Dotaknite se „Extract Audio“ – zvočni posnetek se v nekaj sekundah pretvori neposredno v iPhonu in nič se ne naloži na splet.',
        image: 2
    },
    save: {
        name: 'Shranite ali pošljite datoteko',
        text: 'Končana zvočna datoteka se prikaže v knjižnici. Dotaknite se Deli, da jo shranite v Datoteke, pošljete prek AirDropa ali v katero koli aplikacijo.',
        image: 4
    }
};

const guides = [];
module.exports = guides;

guides.push(
    {
        slug: 'extract-audio-from-video-iphone',
        keyword: 'kako izvleči zvok iz videa na iphonu',
        eyebrow: 'Osnove',
        title: 'Kako izvleči zvok iz videa na iPhonu – korak za korakom',
        description: 'Izvlecite zvok iz katerega koli videa na iPhonu s štirimi dotiki: izberite video, obrežite, dotaknite se „Extract Audio“ in shranite kot MP3 ali M4A. Brezplačno.',
        h1: 'Kako izvleči zvok iz videa na iPhonu',
        answer: `Če želite izvleči zvok iz videa na iPhonu, odprite ${APP}, izberite video iz Fotografij, ga po potrebi obrežite in se dotaknite „Extract Audio“. Aplikacija v nekaj sekundah shrani zvočni posnetek kot MP3 ali M4A v iPhone. Je brezplačna in deluje brez interneta.`,
        intro: '<p>Fotografije na iPhonu nimajo gumba „shrani samo zvok“. Lahko ustvarite bližnjico (glejte <a href="/sl/guides/extract-audio-without-app-iphone/">način brez aplikacije</a>) ali video naložite na spletno stran, vendar sta oba načina počasna, ko potrebujete samo zvok. Tu je najhitrejša pot: brezplačna aplikacija, ki deluje neposredno iz menija Deli.</p>',
        steps: [STEP.open, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Kaj potrebujete',
                html: `<ul>
<li>iPhone z iOS 18.6 ali novejšim.</li>
<li>${APP} – brezplačno v App Storu (približno 23 MB).</li>
<li>Video z zvokom: posnetki kamere (MOV), preneseni videi (MP4), posnetki zaslona, videi iz Sporočil.</li>
</ul>`
            },
            {
                h2: 'Najhitrejši način – prek Deli',
                html: '<p>Aplikacije vam sploh ni treba odpreti. V <strong>Fotografijah</strong> ali <strong>Datotekah</strong> odprite video, se dotaknite <strong>Deli</strong>, pomaknite se po vrsti aplikacij in izberite <strong>„Extract Audio“</strong>. Če je ne vidite, se dotaknite „Več“ in jo dodajte med priljubljene – tako bo vedno pri roki.</p>'
            },
            {
                h2: 'MP3 ali M4A – kaj izbrati?',
                html: '<p><strong>MP3</strong> se predvaja povsod: Windows, Android, avtoradii, spletne strani in urejevalniki videa. <strong>M4A</strong> (AAC) je Applov lastni format: manjši pri enaki kakovosti, idealen za zvonjenja, GarageBand in iMovie. Če niste prepričani, izberite MP3. Več: <a href="/sl/guides/convert-video-to-mp3-iphone/">video v MP3</a> in <a href="/sl/guides/video-to-m4a-iphone/">video v M4A</a>.</p>'
            },
            {
                h2: 'Kam se shrani zvok?',
                html: '<p>Vsaka izvlečena datoteka se prikaže v knjižnici aplikacije z dolžino, velikostjo in datumom. Od tam se dotaknite <strong>Deli → Shrani v Datoteke</strong>, da jo shranite v iCloud Drive ali „V mojem iPhonu“, ali jo pošljite v Viber, WhatsApp, Beležke, GarageBand ali prek AirDropa v računalnik.</p>'
            },
            {
                h2: 'Če kaj ne deluje',
                html: `<ul>
<li><strong>Datoteka nima zvoka.</strong> Sam video nima zvočnega posnetka – to se zgodi pri posnetkih zaslona brez mikrofona. Najprej preverite video v Fotografijah.</li>
<li><strong>Video je v iCloudu.</strong> Fotografije najprej prenesejo izvirnik – počakajte, da se prenos konča.</li>
<li><strong>Potrebujete le 20 sekund.</strong> Obrežite pred izvlekom – glejte <a href="/sl/guides/trim-audio-from-video-iphone/">kako izrezati del zvoka</a>.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Ali lahko zvok iz videa na iPhonu izvlečem brezplačno?', a: `Da. ${APP} je brezplačna za prenos in tudi osnovni izvlek zvoka je brezplačen. Dodatne funkcije so na voljo prek nakupov v aplikaciji.` },
            { q: 'Ali se pri izvleku izgubi kakovost?', a: 'Aplikacija shrani zvočni posnetek videa kot kakovosten MP3 ali M4A. Zvok ne bo boljši od izvirnika, bo pa zvenel enako kot pri predvajanju videa.' },
            { q: 'Ali lahko izvlečem zvok iz dolgega videa?', a: 'Da. Predavanja, koncerti in sestanki se obdelajo enako, le nekoliko dlje. Če potrebujete samo del, ga najprej obrežite.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'trim-audio-from-video-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Zvok iz videa na iPhonu', text: 'Način s štirimi dotiki – iz Fotografij ali prek Deli.' }
    },
    {
        slug: 'convert-video-to-mp3-iphone',
        keyword: 'pretvori video v mp3 iphone',
        eyebrow: 'Video v MP3',
        title: 'Kako pretvoriti video v MP3 na iPhonu – hitro in brezplačno',
        description: 'Pretvorite kateri koli video z iPhona v MP3 v nekaj sekundah. Deluje iz Fotografij, datoteke ostanejo v napravi, pred izvozom pa lahko obrežete.',
        h1: 'Kako pretvoriti video v MP3 na iPhonu',
        answer: `Odprite video v Fotografijah, se dotaknite Deli in izberite „Extract Audio“ (${APP}). Po potrebi obrežite, se dotaknite „Extract Audio“ in shranite kot MP3. Datoteka ostane v iPhonu – lahko jo pošljete v Datoteke, prek AirDropa ali v katero koli aplikacijo. Računalnik ali račun ni potreben.`,
        intro: '<p>MP3 je najbolj združljiv zvočni format: predvaja se v vsakem avtu, na vsakem računalniku in v vsakem urejevalniku. Tako pretvorite video v MP3, ne da bi iPhone izpustili iz rok.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Izvlecite v MP3', text: 'Dotaknite se „Extract Audio“ in izberite format MP3. Pretvorba videa v MP3 poteka neposredno v iPhonu.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'Zakaj aplikacija in ne spletni pretvornik?',
                html: '<p>Spletni pretvorniki zahtevajo, da naložite celoten video, počakate v vrsti in MP3 znova prenesete – počasno z mobilnimi podatki in tvegano za osebne videe. Aplikacija deluje brez povezave, datoteko hrani v napravi in omogoča obrezovanje pred pretvorbo. Podrobna primerjava: <a href="/sl/guides/extract-audio-online-vs-app/">splet ali aplikacija</a>.</p>'
            },
            {
                h2: 'Katere videe lahko pretvorim v MP3?',
                html: '<p>Vse, kar predvaja iPhone: posnetke kamere (<a href="/sl/guides/mov-to-mp3-iphone/">MOV</a>), prenesene videe (<a href="/sl/guides/mp4-to-mp3-iphone/">MP4</a>), <a href="/sl/guides/screen-recording-to-audio-iphone/">posnetke zaslona</a> ter videe iz Sporočil, Vibra, WhatsAppa in AirDropa.</p>'
            },
            {
                h2: 'Kaj narediti z MP3',
                html: `<ul>
<li>Shraniti ga v <strong>Datoteke</strong> in poslušati brez povezave.</li>
<li>Poslati ga v računalnik prek <strong>AirDropa</strong>.</li>
<li>Iz 30 sekund narediti <a href="/sl/guides/video-to-ringtone-iphone/">zvonjenje</a>.</li>
<li>Dodati ga v GarageBand, CapCut ali urejevalnik podcastov.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Ali lahko iPhone pretvori video v MP3 brez aplikacije?', a: 'Neposredno ne. Bližnjice shranijo zvok samo kot M4A. Za MP3 na iPhonu potrebujete aplikacijo ali spletno stran.' },
            { q: 'Ali je pretvorba v MP3 brezplačna?', a: `Da, osnovna pretvorba v ${APP} je brezplačna. Dodatne funkcije prek nakupov v aplikaciji.` },
            { q: 'Ali za pretvorbo videa v MP3 potrebujem internet?', a: 'Ne. Pretvorba poteka v iPhonu in deluje brez povezave. Najprej je treba prenesti le videe, shranjene v iCloudu.' }
        ],
        related: ['mp4-to-mp3-iphone', 'mov-to-mp3-iphone', 'video-to-m4a-iphone'],
        card: { title: 'Video v MP3 na iPhonu', text: 'Kateri koli video v univerzalni MP3.' }
    }
);

guides.push(
    {
        slug: 'mp4-to-mp3-iphone',
        keyword: 'mp4 v mp3 iphone',
        eyebrow: 'MP4 v MP3',
        title: 'MP4 v MP3 na iPhonu: brezplačen pretvornik brez nalaganja',
        description: 'Pretvorite MP4 v MP3 na iPhonu brezplačno: odprite datoteko v Datotekah ali Fotografijah in se dotaknite Deli → „Extract Audio“. Brez povezave, z obrezovanjem.',
        h1: 'Kako pretvoriti MP4 v MP3 na iPhonu',
        answer: `Če želite pretvoriti MP4 v MP3 na iPhonu, odprite datoteko v Datotekah ali Fotografijah, se dotaknite Deli in izberite „Extract Audio“. V ${APP} po želji obrežite, se dotaknite „Extract Audio“, izberite MP3 in shranite. Brezplačno, v napravi, brez interneta.`,
        intro: '<p>Datoteke MP4 običajno pridejo kot prenosi, priponke e-pošte ali prek AirDropa, zato so pogosto v aplikaciji <strong>Datoteke</strong> in ne v Fotografijah. Aplikacija deluje z obema.</p>',
        steps: [
            { name: 'Poiščite datoteko MP4', text: 'Odprite Datoteke (Prenosi, iCloud Drive ali „V mojem iPhonu“) ali Fotografije in poiščite MP4.', image: 2 },
            { name: 'Pošljite v „Extract Audio“', text: 'Pridržite datoteko in izberite Deli → „Extract Audio“. MP4 se odpre v aplikaciji.', image: 2 },
            STEP.trim,
            { name: 'Shranite kot MP3', text: 'Dotaknite se „Extract Audio“, izberite MP3 in nato Deli → Shrani v Datoteke, da bo MP3 ob izvirnem MP4.', image: 4 }
        ],
        sections: [
            {
                h2: 'Razlika med MP4 in MP3',
                html: '<p>MP4 je vsebnik s sliko in zvokom; MP3 vsebuje samo zvok. Pri pretvorbi MP4 v MP3 zvočni posnetek ostane, slika pa se odstrani: datoteka postane precej manjša in se predvaja v katerem koli predvajalniku.</p>'
            },
            {
                h2: 'MP4 iz Vibra, WhatsAppa in e-pošte',
                html: '<p>Najprej shranite priponko: v klepetu odprite video → Deli → „Shrani video“ (v Fotografije) ali „Shrani v Datoteke“. Nato sledite zgornjim korakom. Pretvarjajte samo svoje videe ali tiste, za katere imate pravice.</p>'
            },
            {
                h2: 'Potrebujete M4A?',
                html: '<p>Za zvonjenja in Applove aplikacije je primernejši M4A. Glejte <a href="/sl/guides/video-to-m4a-iphone/">kako shraniti video kot M4A na iPhonu</a>.</p>'
            }
        ],
        faq: [
            { q: 'Ali lahko MP4 brezplačno pretvorim v MP3 na iPhonu?', a: `Da. ${APP} brezplačno pretvori MP4 v MP3 neposredno v napravi. Nakupi v aplikaciji odklenejo dodatne funkcije.` },
            { q: 'Ali bo MP3 manjši od MP4?', a: 'Da, običajno precej manjši: video posnetek se odstrani, ostane le zvok.' },
            { q: 'Ali lahko pretvorim več datotek MP4?', a: 'Da. Pretvorite jih eno za drugo – vse datoteke MP3 se shranijo v knjižnico aplikacije.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'mov-to-mp3-iphone', 'extract-audio-online-vs-app'],
        card: { title: 'MP4 v MP3 na iPhonu', text: 'Prenesene datoteke MP4 iz Datotek in Fotografij v MP3.' }
    },
    {
        slug: 'mov-to-mp3-iphone',
        keyword: 'mov v mp3 iphone',
        eyebrow: 'MOV v MP3',
        title: 'MOV v MP3 na iPhonu – zvok iz videov, posnetih s kamero',
        description: 'Videi, posneti s kamero iPhona, so datoteke MOV. Pretvorite MOV v MP3 neposredno v telefonu: izberite video, obrežite in se dotaknite „Extract Audio“. Brezplačno.',
        h1: 'Kako pretvoriti MOV v MP3 na iPhonu',
        answer: `Vsi videi, posneti s kamero iPhona, se shranijo v formatu MOV. Za MP3 odprite video v Fotografijah, se dotaknite Deli → „Extract Audio“, po potrebi obrežite in se v ${APP} dotaknite „Extract Audio“. MP3 se shrani v iPhone – računalnik ni potreben.`,
        intro: '<p>MOV je Applov video format, v katerem snema kamera iPhona: koncerti, govori, prijatelj s kitaro, glas, ki ga želite ohraniti. Kot MP3 lahko ta zvok poslušate kjer koli.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Kdaj je MOV v MP3 uporaben',
                html: `<ul>
<li>Ohranite zvok koncerta ali nastopa, ki ste ga posneli.</li>
<li>Zdravico ali govor spremenite v zvočni spomin.</li>
<li>Posnetek vaje pošljite skupini brez ogromnega videa.</li>
<li>Poslušajte <a href="/sl/guides/lecture-video-to-audio-iphone/">posneto predavanje</a> na poti.</li>
</ul>`
            },
            {
                h2: 'HEVC, 4K in filmski način',
                html: '<p>Videi v HEVC in 4K se obdelajo enako. Pretvori se samo zvok, zato tudi zelo velike datoteke MOV dajo majhne zvočne datoteke.</p>'
            },
            {
                h2: 'Zakaj ne potrebujete računalnika',
                html: '<p>Prenos večgigabajtne datoteke MOV v računalnik zaradi zvoka traja dlje kot pretvorba v telefonu. Aplikacija to naredi tam, kjer je video že shranjen.</p>'
            }
        ],
        faq: [
            { q: 'V katerem formatu snema iPhone video?', a: 'Kamera iPhona snema datoteke MOV, običajno z videom HEVC ali H.264 in zvokom AAC.' },
            { q: 'Ali lahko MOV pretvorim v MP3 brez izgube kakovosti?', a: 'Aplikacija ohrani kakovost izvirnega posnetka: MP3 zveni enako kot video med predvajanjem.' },
            { q: 'Ali lahko MOV shranim kot M4A?', a: 'Da, izberite format M4A. Primeren je za zvonjenja in Applove aplikacije.' }
        ],
        related: ['mp4-to-mp3-iphone', 'convert-video-to-mp3-iphone', 'save-music-from-video-iphone'],
        card: { title: 'MOV v MP3', text: 'Zvok iz videov, posnetih s kamero iPhona.' }
    },
    {
        slug: 'video-to-m4a-iphone',
        keyword: 'video v m4a iphone',
        eyebrow: 'Video v M4A',
        title: 'Video v M4A na iPhonu – MP4 in MOV v M4A brezplačno',
        description: 'Shranite zvok iz videa kot M4A na iPhonu za zvonjenja, GarageBand in Applove aplikacije. Brezplačno, v napravi, z obrezovanjem – s štirimi dotiki.',
        h1: 'Kako shraniti zvok iz videa kot M4A na iPhonu',
        answer: `Če želite pretvoriti video v M4A na iPhonu, ga iz Fotografij ali Datotek pošljite v „Extract Audio“, po želji obrežite, se dotaknite „Extract Audio“ in izberite M4A. ${APP} shrani datoteko M4A (AAC), primerno za GarageBand, iMovie, predvajalnike in zvonjenja.`,
        intro: '<p>M4A je Applov lastni zvočni format. Pri podobni kakovosti je manjši od MP3 in prav ta format iPhone pričakuje za zvonjenja in projekte GarageBand.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Izvlecite v M4A', text: 'Dotaknite se „Extract Audio“ in izberite format M4A.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'M4A ali MP3 – kdaj izbrati M4A',
                html: `<table class="guide-table"><thead><tr><th></th><th>M4A (AAC)</th><th>MP3</th></tr></thead><tbody>
<tr><td>Najboljše za</td><td>iPhone, Mac, zvonjenja, GarageBand</td><td>Vse ostalo – Windows, Android, avto</td></tr>
<tr><td>Velikost datoteke</td><td>Manjša pri enaki kakovosti</td><td>Nekoliko večja</td></tr>
<tr><td>Združljivost</td><td>Zelo dobra</td><td>Univerzalna</td></tr>
</tbody></table>`
            },
            {
                h2: 'Nastavite M4A kot zvonjenje',
                html: '<p>V iOS 26 lahko datoteko M4A, krajšo od 30 sekund, nastavite kot zvonjenje neposredno iz Datotek. Podrobno: <a href="/sl/guides/video-to-ringtone-iphone/">kako narediti zvonjenje iz videa</a>.</p>'
            },
            {
                h2: 'Odprite v GarageBandu ali iMovieju',
                html: '<p>Shranite M4A v Datoteke, nato ga uvozite prek brskalnika datotek v GarageBandu ali iMovieju – kot glasbeno podlago, pripoved ali zvočni učinek.</p>'
            }
        ],
        faq: [
            { q: 'Ali je M4A boljši od MP3?', a: 'Pri enaki bitni hitrosti M4A (AAC) običajno zveni enako dobro ali bolje in zasede manj prostora. MP3 je združljiv z več napravami.' },
            { q: 'Ali lahko M4A ustvarim z Bližnjicami?', a: 'Da, dejanje „Kodiraj predstavnost“ z možnostjo „Samo zvok“ ustvari M4A. A tako ne morete obrezati zvoka ali shraniti MP3 – v aplikaciji lahko.' },
            { q: 'Ali je shranjevanje kot M4A brezplačno?', a: `Da, osnovni izvlek v ${APP} je brezplačen, vključno z izvozom v M4A.` }
        ],
        related: ['video-to-ringtone-iphone', 'convert-video-to-mp3-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Video v M4A', text: 'Applov format za zvonjenja in GarageBand.' }
    }
);

guides.push(
    {
        slug: 'extract-audio-without-app-iphone',
        keyword: 'izvleči zvok iz videa iphone brez aplikacije',
        eyebrow: 'Bližnjice ali aplikacija',
        title: 'Kako izvleči zvok iz videa na iPhonu brez aplikacije',
        description: 'Zvok iz videa na iPhonu lahko dobite tudi brez aplikacije – z Bližnjicami in dejanjem „Kodiraj predstavnost“. Celotna nastavitev, omejitve in hitrejša možnost.',
        h1: 'Kako izvleči zvok iz videa na iPhonu brez aplikacije',
        answer: 'Brez aplikacij tretjih oseb zvok izvlečete z Bližnjicami: dodajte dejanje „Kodiraj predstavnost“, vklopite „Samo zvok“, dodajte „Shrani datoteko“ in vklopite prikaz v meniju Deli. Nato video pošljite bližnjici. Rezultat je samo M4A in brez obrezovanja; za MP3 in kratke odlomke je aplikacija hitrejša.',
        intro: '<p>Applova brezplačna aplikacija Bližnjice zna ločiti zvok od videa. Nastavitev traja nekaj minut. Tu je natančen recept – in njegove omejitve.</p>',
        steps: [
            { name: 'Ustvarite novo bližnjico', text: 'Odprite Bližnjice, se dotaknite + in bližnjico poimenujte „Zvok iz videa“.', image: 2 },
            { name: 'Dodajte „Kodiraj predstavnost“', text: 'Dotaknite se „Dodaj dejanje“, poiščite „Kodiraj predstavnost“, ga dodajte, s puščico razširite možnosti in vklopite „Samo zvok“.', image: 2 },
            { name: 'Dodajte „Shrani datoteko“', text: 'Dodajte dejanje „Shrani datoteko“, da rezultat pristane v Datotekah.', image: 4 },
            { name: 'Prikaz v meniju Deli', text: 'Odprite podrobnosti bližnjice (ikona i), vklopite „Pokaži na listu za deljenje“ in dovolite vrsto „Predstavnost“. Zdaj pošljite video iz Fotografij in izberite bližnjico.', image: 4 }
        ],
        sections: [
            {
                h2: 'Omejitve načina z Bližnjicami',
                html: `<ul>
<li><strong>Samo M4A</strong> – MP3 ni mogoč.</li>
<li><strong>Brez obrezovanja</strong> – vedno se shrani celoten zvočni posnetek.</li>
<li><strong>Brez knjižnice</strong> – datoteke končajo v Datotekah, poiskati in preimenovati jih morate ročno.</li>
<li>Pri dolgih videih se bližnjica lahko ustavi brez jasne napake.</li>
</ul>`
            },
            {
                h2: 'Možnost z enim dotikom',
                html: `<p>${APP} naredi isto, a z obrezovanjem, izbiro med MP3 in M4A ter knjižnico vseh izvlečenih datotek. Aplikacija je prav tako v meniju Deli, zato ni počasnejša – in ničesar vam ni treba sestavljati.</p>`
            },
            {
                h2: 'Drugi načini brez aplikacije',
                html: '<p>Zvok lahko ločite tudi v iMovieju ali GarageBandu, vendar je korakov več, formatov za izvoz pa manj. Delujejo tudi spletne strani, a video morate naložiti na splet – glejte <a href="/sl/guides/extract-audio-online-vs-app/">splet ali aplikacija</a>.</p>'
            }
        ],
        faq: [
            { q: 'Ali ima iPhone vgrajen način za izvlek zvoka?', a: 'Fotografije nimajo posebnega gumba. Najbližja vgrajena možnost je dejanje „Kodiraj predstavnost“ z možnostjo „Samo zvok“ v aplikaciji Bližnjice.' },
            { q: 'V katerem formatu bližnjica shrani zvok?', a: 'V M4A. Shranjevanje v MP3 prek Bližnjic ni mogoče.' },
            { q: 'Ali lahko zvok obrežem z bližnjico?', a: `Ne na preprost način. Za obrezovanje uporabite aplikacijo s časovnico, na primer ${APP}.` }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-online-vs-app', 'video-to-m4a-iphone'],
        card: { title: 'Brez aplikacije (Bližnjice)', text: 'Brezplačen recept in njegove omejitve.' }
    },
    {
        slug: 'extract-audio-online-vs-app',
        keyword: 'izvleči zvok iz videa online',
        eyebrow: 'Splet ali aplikacija',
        title: 'Izvleči zvok iz videa na spletu ali z aplikacijo na iPhonu?',
        description: 'Izvlek zvoka iz videa na spletu ali z aplikacijo? Primerjamo zasebnost, hitrost, omejitve in obrezovanje na iPhonu – in kaj izbrati, ko je video v telefonu.',
        h1: 'Izvlek zvoka iz videa na spletu ali z aplikacijo: kaj izbrati na iPhonu',
        answer: `Spletne storitve delujejo na vsaki napravi, a zahtevajo nalaganje celotnega videa, čakanje na obdelavo in prenos rezultata – počasi z mobilnimi podatki in nevarno za osebne posnetke. Na iPhonu je aplikacija, kot je ${APP}, hitrejša, deluje brez povezave, video obdrži v napravi in zna obrezati zvok.`,
        intro: '<p>Iskanje „izvleči zvok iz videa online“ vrne na desetine brezplačnih strani. Na prenosniku s hitrim internetom so priročne. Na iPhonu je drugače.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Primerjava',
                html: `<table class="guide-table"><thead><tr><th></th><th>Spletna storitev</th><th>${APP}</th></tr></thead><tbody>
<tr><td>Zasebnost</td><td>Video se naloži na tuj strežnik</td><td>Ostane v iPhonu</td></tr>
<tr><td>Hitrost</td><td>Nalaganje + vrsta + prenos</td><td>Sekunde, v napravi</td></tr>
<tr><td>Brez interneta</td><td>Ne</td><td>Da</td></tr>
<tr><td>Omejitve velikosti</td><td>Pogoste pri brezplačnih paketih</td><td>Samo prostor v iPhonu</td></tr>
<tr><td>Obrezovanje</td><td>Včasih</td><td>Vgrajena časovnica</td></tr>
<tr><td>Oglasi in pojavna okna</td><td>Pogosto</td><td>Brez spletnih oglasov</td></tr>
<tr><td>Cena</td><td>Brezplačno z omejitvami</td><td>Osnovne funkcije brezplačne</td></tr>
</tbody></table>`
            },
            {
                h2: 'Kdaj je spletna storitev smiselna',
                html: '<p>Če sedite za računalnikom z Windows in je video že tam, zadošča zanesljiv spletni pretvornik. Ne nalagajte ničesar osebnega: družinskih videov, delovnih sestankov ali gradiva strank.</p>'
            },
            {
                h2: 'Kdaj je aplikacija boljša',
                html: '<p>Ko je video v iPhonu, zmaga aplikacija: ni ga treba nalagati prek mobilnega omrežja, čakati in prenašati rezultata, potrebni odlomek pa izrežete natančno.</p>'
            }
        ],
        faq: [
            { q: 'Ali je izvlek zvoka iz videa na spletu varen?', a: 'Odvisno od strani. Video se naloži na strežnik tretje osebe, zato se pri osebnih posnetkih temu raje izognite. Aplikacije, ki delujejo v napravi, ne nalagajo ničesar.' },
            { q: 'Ali lahko na iPhonu brezplačno izvlečem zvok brez nalaganja?', a: `Da. ${APP} brezplačno pretvarja videe neposredno v napravi in video ne gre nikamor.` },
            { q: 'Zakaj je spletna pretvorba na telefonu tako počasna?', a: 'Najprej je treba naložiti celoten video. Videi s telefona so veliki, hitrost nalaganja v mobilnem omrežju pa je običajno precej nižja od hitrosti prenosa.' }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-without-app-iphone', 'mp4-to-mp3-iphone'],
        card: { title: 'Splet ali aplikacija', text: 'Zasebnost, hitrost in omejitve – primerjava.' }
    },
    {
        slug: 'save-music-from-video-iphone',
        keyword: 'izvleči glasbo iz videa iphone',
        eyebrow: 'Glasba',
        title: 'Kako izvleči glasbo iz videa na iPhonu (MP3 ali M4A)',
        description: 'Shranite pesem ali glasbeno podlago iz videa na iPhonu kot MP3 ali M4A. Obrežite natančno po pesmi, poslušajte brez povezave, delite. Kratek vodič s slikami.',
        h1: 'Kako izvleči glasbo iz videa na iPhonu',
        answer: `Če želite izvleči glasbo iz videa na iPhonu, odprite video v Fotografijah, se dotaknite Deli → „Extract Audio“, z oznakama izberite pesem in se v ${APP} dotaknite „Extract Audio“. Glasba se shrani kot MP3 ali M4A – poslušajte jo brez povezave v Datotekah ali jo pošljite v katero koli aplikacijo.`,
        intro: '<p>Pesem s poroke, priredba prijatelja, glasba iz vaše montaže – včasih je v videu najdragocenejši zvok. Tako ga shranite kot ločeno glasbeno datoteko.</p>',
        steps: [STEP.share, { name: 'Izberite pesem', text: 'Dotaknite se „Trim Video“ in povlecite rumeni oznaki, da ostane samo pesem. Poslušajte začetek in konec.', image: 3 }, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Kako dobiti najboljši zvok',
                html: `<ul>
<li>Odrežite govorjenje in ploskanje na začetku in koncu.</li>
<li>MP3 za avto in starejše predvajalnike, M4A za Applove naprave.</li>
<li>Preimenujte datoteko v Datotekah (pridržite → „Preimenuj“), da jo boste zlahka našli.</li>
</ul>`
            },
            {
                h2: 'O avtorskih pravicah',
                html: '<p>Shranjujte glasbo iz svojih videov ali tistih, za katere imate pravice. Komercialne pesmi so zaščitene z avtorsko pravico: osebna kopija lastnega posnetka je v redu, objavljanje tuje glasbe ni.</p>'
            },
            {
                h2: 'Nastavite kot zvonjenje',
                html: '<p>Ste našli svojih najljubših 30 sekund? <a href="/sl/guides/video-to-ringtone-iphone/">Naredite iz njih zvonjenje</a>.</p>'
            }
        ],
        faq: [
            { q: 'Kako dobiti pesem iz videa na iPhonu?', a: `Pošljite video v ${APP}, pri obrezovanju izberite pesem in se dotaknite „Extract Audio“. Pesem se shrani kot zvočna datoteka.` },
            { q: 'Ali lahko izvlečeno pesem dodam v Apple Music?', a: 'Aplikacija Glasba na iPhonu ne uvaža lokalnih datotek neposredno. Datoteko hranite v Datotekah ali jo sinhronizirajte prek Maca ali računalnika.' },
            { q: 'Ali lahko izvlečem glasbo iz videa iz Vibra ali Sporočil?', a: 'Da. Najprej shranite video v Fotografije ali Datoteke, nato izvlecite zvok.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-ringtone-iphone', 'mov-to-mp3-iphone'],
        card: { title: 'Glasba iz videa', text: 'Obdržite pesem, brez slike.' }
    }
);

guides.push(
    {
        slug: 'trim-audio-from-video-iphone',
        keyword: 'kako izrezati zvok iz videa iphone',
        eyebrow: 'Obrezovanje',
        title: 'Kako izrezati samo del zvoka iz videa na iPhonu',
        description: 'Potrebujete le 10 sekund zvoka? Obrežite video na iPhonu in shranite samo ta del kot MP3 ali M4A. Oznake, predposlušanje in izvoz – brezplačno, na telefonu.',
        h1: 'Kako izvleči samo del zvoka iz videa na iPhonu',
        answer: `Če želite izrezati del zvoka iz videa na iPhonu, ga odprite v ${APP}, se dotaknite „Trim Video“, povlecite rumeni oznaki začetka in konca okoli želenega dela, se dotaknite „Save“ in nato „Extract Audio“. Shrani se samo izbrani del kot MP3 ali M4A.`,
        intro: '<p>Največkrat ne potrebujete celotnega zvočnega posnetka, ampak citat, refren ali zvočni učinek. Če najprej obrežete, dobite majhen in čist izsek.</p>',
        steps: [
            STEP.open,
            { name: 'Dotaknite se „Trim Video“', text: 'Na zaslonu za izvlečenje se dotaknite „Trim Video“, da odprete časovnico.', image: 2 },
            { name: 'Povlecite oznaki', text: 'Povlecite rumeni oznaki na začetek in konec želenega dela. Čas izbire je prikazan poleg njiju. Poslušajte in se dotaknite „Save“.', image: 3 },
            { name: 'Izvlecite in shranite', text: 'Dotaknite se „Extract Audio“ – izvozi se samo obrezani del. Pošljite ga ali shranite v Datoteke.', image: 4 }
        ],
        sections: [
            {
                h2: 'Nasveti za natančno obrezovanje',
                html: `<ul>
<li>Pustite pol sekunde pred govorom in po njem, da ne odrežete besed.</li>
<li>Za zvonjenje izberite največ 30 sekund.</li>
<li>Potrebujete več delov iz istega videa? Obrezovanje ponovite za vsakega – vse datoteke se shranijo v knjižnico.</li>
</ul>`
            },
            {
                h2: 'Kaj ljudje najpogosteje izrežejo',
                html: '<p>En stavek iz govora, refren pesmi, zvočni učinek za montažo, prve besede otroka ali najpomembnejšo minuto iz dolgega posnetka sestanka.</p>'
            }
        ],
        faq: [
            { q: 'Ali lahko zvok iz videa obrežem na iPhonu?', a: `Da. V ${APP} obrežite video na želeni del in izvlecite zvok – shrani se samo ta del.` },
            { q: 'Ali obrezovanje spremeni izvirni video?', a: 'Ne. Izvirnik v Fotografijah ostane nespremenjen; obreže se samo izvožena zvočna datoteka.' },
            { q: 'Ali lahko iz enega videa izrežem več delov?', a: 'Da. Za vsak del, ki ga potrebujete, znova obrežite in izvlecite zvok.' }
        ],
        related: ['video-to-ringtone-iphone', 'save-music-from-video-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Izrežite del zvoka', text: 'Obrezovanje na sekundo natančno.' }
    },
    {
        slug: 'screen-recording-to-audio-iphone',
        keyword: 'zvok iz posnetka zaslona iphone',
        eyebrow: 'Snemanje zaslona',
        title: 'Kako shraniti zvok iz posnetka zaslona na iPhonu',
        description: 'Pretvorite posnetek zaslona z iPhona v datoteko MP3 ali M4A. Zakaj posnetek nima zvoka, kako izrezati pravi del in shraniti zvok. Preprosti koraki.',
        h1: 'Kako shraniti zvok iz posnetka zaslona na iPhonu',
        answer: `Posnetki zaslona na iPhonu se shranijo v Fotografije kot videi. Za zvok odprite posnetek, se dotaknite Deli → „Extract Audio“, po potrebi obrežite in se v ${APP} dotaknite „Extract Audio“. Če datoteka nima zvoka, zvok sploh ni bil posnet – pred snemanjem vklopite mikrofon.`,
        intro: '<p>Snemanje zaslona je pogost način za shranjevanje glasovnega sporočila, klica na zvočniku ali izseka iz aplikacije. Tako obdržite samo zvok.</p>',
        steps: [
            { name: 'Poiščite posnetek v Fotografijah', text: 'Posnetki zaslona so v Fotografije → Vrste predstavnosti → Posnetki zaslona.', image: 2 },
            { name: 'Pošljite v „Extract Audio“', text: 'Odprite posnetek, se dotaknite Deli in izberite „Extract Audio“.', image: 2 },
            STEP.trim,
            { name: 'Izvlecite in shranite', text: 'Dotaknite se „Extract Audio“ in shranite MP3 ali M4A v Datoteke.', image: 4 }
        ],
        sections: [
            {
                h2: 'Zakaj posnetek zaslona nima zvoka?',
                html: `<ul>
<li><strong>Mikrofon je izklopljen:</strong> v Nadzornem središču pridržite gumb Snemanje zaslona in vklopite „Mikrofon“, da se posname vaš glas.</li>
<li><strong>Tihi način:</strong> nekatere aplikacije v tihem načinu utišajo svoje zvoke.</li>
<li><strong>Zaščitena vsebina:</strong> številne pretočne storitve blokirajo zvok pri snemanju zaslona – te omejitve ni mogoče zaobiti.</li>
</ul>`
            },
            {
                h2: 'Spoštujte zasebnost',
                html: '<p>Klice in pogovore snemajte in shranjujte samo s privolitvijo vseh udeležencev in v skladu z zakoni svoje države.</p>'
            }
        ],
        faq: [
            { q: 'Ali lahko posnetek zaslona pretvorim v MP3?', a: 'Da. Posnetek zaslona je navaden video, zato lahko njegov zvok shranite kot MP3 ali M4A.' },
            { q: 'Kje so posnetki zaslona na iPhonu?', a: 'V Fotografijah, pod Vrste predstavnosti → Posnetki zaslona.' },
            { q: 'Zakaj posnetek zaslona nima zvoka?', a: 'Mikrofon je bil izklopljen ali pa aplikacija blokira snemanje zvoka. Pred izvlečenjem preverite, ali se posnetek predvaja z zvokom.' }
        ],
        related: ['extract-audio-from-video-iphone', 'trim-audio-from-video-iphone', 'lecture-video-to-audio-iphone'],
        card: { title: 'Zvok iz posnetka zaslona', text: 'Shranite zvok in ugotovite, zakaj manjka.' }
    }
);

guides.push(
    {
        slug: 'lecture-video-to-audio-iphone',
        keyword: 'video predavanje v zvok',
        eyebrow: 'Učenje',
        title: 'Kako pretvoriti video predavanje v zvok (MP3) na iPhonu',
        description: 'Pretvorite posneta predavanja, spletne seminarje in govore v MP3 na iPhonu in se učite na poti. Majhne datoteke, poslušanje brez povezave, preprosto deljenje.',
        h1: 'Kako pretvoriti video predavanje v zvok na iPhonu',
        answer: `Če želite video predavanje pretvoriti v zvok, odprite posnetek v Fotografijah ali Datotekah, se dotaknite Deli → „Extract Audio“ in nato v ${APP} „Extract Audio“. MP3 shranite v Datoteke in ga poslušajte brez povezave – na avtobusu, v telovadnici ali z ugasnjenim zaslonom, ob precej manjši datoteki.`,
        intro: '<p>Pri predavanju je pomembno, kaj je povedano, ne kaj je videti. Ko video predavanje pretvorite v zvok, dobite podkast, ki ga lahko znova poslušate kjer koli.</p>',
        steps: [
            STEP.share,
            { name: 'Odstranite uvod in premore (neobvezno)', text: 'Dotaknite se „Trim Video“, da odstranite čakanje pred začetkom in nepotreben del z vprašanji.', image: 3 },
            STEP.extract,
            { name: 'Shranite v mapo „Predavanja“', text: 'Dotaknite se Deli → Shrani v Datoteke in ustvarite mapo za vsak predmet, da posnetke hitro najdete.', image: 4 }
        ],
        sections: [
            {
                h2: 'Zakaj je učenje z zvokom praktično',
                html: `<ul>
<li><strong>Majhne datoteke:</strong> ura zvoka zasede precej manj prostora kot ura videa.</li>
<li><strong>Ugasnjen zaslon:</strong> poslušajte z zaklenjenim telefonom in varčujte z baterijo.</li>
<li><strong>Kjer koli:</strong> na avtobusu, na sprehodu, v telovadnici – Wi‑Fi ni potreben.</li>
</ul>`
            },
            {
                h2: 'Pretvorite v zapiske',
                html: '<p>Potrebujete besedilo? Zvok uvozite v aplikacijo za prepis, ki jo že uporabljate, in iščite po besedilu.</p>'
            },
            {
                h2: 'Preverite pravila',
                html: '<p>Mnoge fakultete dovoljujejo snemanje predavanj za osebno uporabo, ne pa tudi njihovega deljenja. Pred snemanjem ali deljenjem preverite pravila predmeta.</p>'
            }
        ],
        faq: [
            { q: 'Ali lahko video na iPhonu poslušam z ugasnjenim zaslonom?', a: 'Večina predvajalnikov videa se ustavi, ko zaklenete telefon. Če video pretvorite v MP3, ga lahko poslušate z ugasnjenim zaslonom v Datotekah ali katerem koli zvočnem predvajalniku.' },
            { q: 'Ali to deluje z enournim predavanjem?', a: 'Da. Dolgi posnetki se obdelajo na enak način, le nekoliko dlje.' },
            { q: 'Ali lahko pretvorim posnetke iz Zooma in spletnih seminarjev?', a: 'Da, takoj ko je posnetek MP4 v Fotografijah ali Datotekah na iPhonu.' }
        ],
        related: ['screen-recording-to-audio-iphone', 'mp4-to-mp3-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Video predavanje v zvok', text: 'Učite se na poti z majhnimi datotekami MP3.' }
    },
    {
        slug: 'video-to-ringtone-iphone',
        keyword: 'zvonjenje iz videa iphone',
        eyebrow: 'Zvonjenja',
        title: 'Kako narediti zvonjenje iz videa na iPhonu (iOS 26)',
        description: 'Pretvorite kateri koli video v zvonjenje za iPhone: obrežite zvok na 30 sekund, shranite v Datoteke in se dotaknite Deli → «Uporabi kot zvonjenje».',
        h1: 'Kako narediti zvonjenje iz videa na iPhonu',
        answer: `Če želite narediti zvonjenje iz videa, ga odprite v ${APP}, obrežite na največ 30 sekund, izvlecite zvok v M4A ali MP3 in ga shranite v Datoteke. V iOS 26 v Datotekah pridržite datoteko in se dotaknite Deli → «Uporabi kot zvonjenje». V starejših različicah iOS zvok uvozite v GarageBand in ga izvozite kot zvonjenje.`,
        intro: '<p>Smeh, pesem z zabave, lajež psa – kateri koli zvok iz vaših videov lahko postane zvonjenje. V iOS 26 je to preprosto, če imate zvočno datoteko.</p>',
        steps: [
            STEP.share,
            { name: 'Obrežite na 30 sekund', text: 'Dotaknite se „Trim Video“ in izberite največ 30 sekund – to je omejitev za zvonjenje.', image: 3 },
            { name: 'Izvlecite in shranite v Datoteke', text: 'Dotaknite se „Extract Audio“ (M4A ali MP3), nato Deli → Shrani v Datoteke.', image: 4 },
            { name: 'Uporabi kot zvonjenje', text: 'V Datotekah pridržite zvočno datoteko in se dotaknite Deli → «Uporabi kot zvonjenje» (iOS 26). Preverite v Nastavitve → Zvoki in haptika → Zvonjenje.', image: 4 }
        ],
        sections: [
            {
                h2: 'V iOS 18: način z GarageBandom',
                html: `<ol>
<li>Izvlecite in obrežite zvok, kot je opisano zgoraj, ter ga shranite v Datoteke.</li>
<li>Odprite GarageBand, ustvarite projekt „Snemalnik zvoka“ in preklopite v pogled posnetkov.</li>
<li>Odprite brskalnik zank → Datoteke → „Brskaj po elementih iz aplikacije Datoteke“ in povlecite zvok na sled.</li>
<li>Vrnite se na „Moje skladbe“, pridržite projekt → Deli → Zvonjenje → Izvozi.</li>
</ol>`
            },
            {
                h2: 'Zakaj ni možnosti «Uporabi kot zvonjenje»',
                html: `<ul>
<li>Datoteka je daljša od 30 sekund – obrežite jo znova.</li>
<li>Datoteka ni v formatu MP3 ali M4A.</li>
<li>iPhone še nima iOS 26 – uporabite GarageBand.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Kako dolgo je lahko zvonjenje na iPhonu?', a: 'Lastna zvonjenja iz zvočnih datotek so lahko dolga največ 30 sekund.' },
            { q: 'Kakšen format potrebuje zvonjenje za iPhone?', a: 'V iOS 26 lahko prek «Uporabi kot zvonjenje» nastavite datoteke MP3 ali M4A, krajše od 30 sekund.' },
            { q: 'Ali lahko video neposredno nastavim kot zvonjenje?', a: 'Ne. Najprej iz videa izvlecite zvok, nato zvočno datoteko nastavite kot zvonjenje.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-m4a-iphone', 'save-music-from-video-iphone'],
        card: { title: 'Zvonjenje iz videa', text: '«Uporabi kot zvonjenje» v iOS 26 – v štirih korakih.' }
    }
);
