/**
 * Nederlandse handleidingen → /nl/guides/<slug>/
 * Slugs gelijk aan build/guides/en.js (gekoppeld via hreflang). Zoekwoorden: sectie ‘Nederlands (NL)’ in /keywords.md.
 * Gebruik in strings alleen de typografische apostrof (’), bijv. video’s, Foto’s.
 * Screenshots: 1 cover · 2 extractie · 3 bijsnijden · 4 deelmenu · 5 bibliotheek
 */

const APP = 'Audio uit Video naar MP3⁺';

const STEP = {
    open: {
        name: 'Open de app en kies een video',
        text: `Start ${APP} en kies een video uit Foto’s of Bestanden. Sneller: tik in Foto’s bij de video op Deel en kies de app.`,
        image: 2
    },
    share: {
        name: 'Stuur de video naar de app',
        text: 'Open de video in Foto’s of Bestanden, tik op Deel en kies de app. De app opent met de video al geladen.',
        image: 2
    },
    trim: {
        name: 'Snijd het gewenste stuk bij (optioneel)',
        text: 'Tik op ‘Video bijsnijden’, sleep de gele markeringen naar het begin en einde van het stuk dat je wilt, luister even en tik op ‘Bewaar’.',
        image: 3
    },
    extract: {
        name: 'Tik op ‘Audio extraheren’',
        text: 'Tik op ‘Audio extraheren’. Het geluidsspoor wordt in seconden op je iPhone omgezet — er wordt niets geüpload.',
        image: 2
    },
    save: {
        name: 'Bewaar of deel het audiobestand',
        text: 'Het nieuwe audiobestand verschijnt in je bibliotheek. Tik op Deel om het in Bestanden te bewaren, via AirDrop te versturen of naar elke app te sturen.',
        image: 4
    }
};

const guides = [];
module.exports = guides;

guides.push(
    {
        slug: 'extract-audio-from-video-iphone',
        keyword: 'audio uit video halen iphone',
        eyebrow: 'Basis',
        title: 'Audio uit een video halen op je iPhone (handleiding 2026)',
        description: 'Haal in 4 tikken het geluid uit elke video op je iPhone: kies de video, snijd bij, tik op ‘Audio extraheren’ en bewaar als MP3 of M4A. Gratis, zonder upload.',
        h1: 'Zo haal je audio uit een video op je iPhone',
        answer: `Om audio uit een video te halen op je iPhone, open je ${APP}, kies je de video in Foto’s, snijd je hem eventueel bij en tik je op ‘Audio extraheren’. De app bewaart het geluidsspoor binnen seconden als MP3 of M4A op je iPhone. Gratis om te beginnen, werkt offline en er wordt niets geüpload.`,
        intro: '<p>In de Foto’s-app zit geen knop ‘alleen geluid bewaren’. Je kunt een opdracht maken (zie <a href="/nl/guides/extract-audio-without-app-iphone/">de methode zonder app</a>) of de video naar een website uploaden, maar allebei is dat omslachtig als je alleen het geluid wilt. Dit is de snelste manier: een gratis app die direct vanuit Deel werkt.</p>',
        steps: [STEP.open, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Wat heb je nodig',
                html: `<ul>
<li>Een iPhone met iOS 18.6 of nieuwer.</li>
<li>${APP}, gratis in de App Store (ongeveer 23 MB).</li>
<li>Een video met geluid: camera-opnamen (MOV), downloads (MP4), schermopnamen of video’s uit Berichten.</li>
</ul>`
            },
            {
                h2: 'Het snelst: via Deel',
                html: '<p>Je hoeft de app niet eens te openen. Open de video in <strong>Foto’s</strong> of <strong>Bestanden</strong>, tik op <strong>Deel</strong>, scrol door de rij apps en kies de app. Zie je hem niet? Tik op ‘Meer’ en voeg hem één keer toe aan je favorieten — dan staat hij voortaan klaar.</p>'
            },
            {
                h2: 'MP3 of M4A: wat kies je?',
                html: '<p><strong>MP3</strong> speelt overal af: Windows, Android, autoradio, websites en montageprogramma’s. <strong>M4A</strong> (AAC) is Apples eigen formaat: kleiner bij dezelfde kwaliteit en ideaal voor beltonen, GarageBand en iMovie. Twijfel je, kies dan MP3. Meer in <a href="/nl/guides/convert-video-to-mp3-iphone/">video naar MP3</a> en <a href="/nl/guides/video-to-m4a-iphone/">video naar M4A</a>.</p>'
            },
            {
                h2: 'Waar komt het audiobestand terecht?',
                html: '<p>Elk bestand verschijnt met duur, grootte en datum in de bibliotheek van de app. Tik daar op <strong>Deel → Bewaar in Bestanden</strong> om het in iCloud Drive of ‘Op mijn iPhone’ te zetten, of stuur het naar WhatsApp, Mail, Notities, GarageBand of via AirDrop naar je Mac.</p>'
            },
            {
                h2: 'Problemen oplossen',
                html: `<ul>
<li><strong>Het bestand is stil.</strong> De video heeft zelf geen geluidsspoor — vaak bij schermopnamen zonder microfoon. Speel de video eerst af in Foto’s.</li>
<li><strong>De video staat in iCloud.</strong> Foto’s downloadt eerst het origineel; wacht tot het voortgangsrondje klaar is.</li>
<li><strong>Ik heb maar 20 seconden nodig.</strong> Snijd eerst bij — zie <a href="/nl/guides/trim-audio-from-video-iphone/">een deel van het geluid extraheren</a>.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Is audio uit een video halen op iPhone gratis?', a: `Ja. ${APP} is gratis te downloaden en de basisfunctie is gratis. Optionele in-app aankopen ontgrendelen extra functies.` },
            { q: 'Gaat de kwaliteit achteruit bij het extraheren?', a: 'De app zet het bestaande geluidsspoor om naar een MP3 of M4A van hoge kwaliteit. Beter dan het origineel wordt het niet, maar het klinkt zoals wanneer je de video afspeelt.' },
            { q: 'Werkt het ook met lange video’s?', a: 'Ja. Colleges, concerten en vergaderingen werken hetzelfde, het duurt alleen iets langer. Heb je maar een stuk nodig, snijd dan eerst bij.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'trim-audio-from-video-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Audio uit video halen op iPhone', text: 'De methode in 4 tikken, vanuit Foto’s of Deel.' }
    },
    {
        slug: 'convert-video-to-mp3-iphone',
        keyword: 'video naar mp3 iphone',
        eyebrow: 'Video naar MP3',
        title: 'Video naar MP3 omzetten op je iPhone — snel en gratis',
        description: 'Zet elke iPhone-video in seconden om naar MP3 met een gratis converter. Direct vanuit Foto’s, zonder upload en met bijsnijden vóór het exporteren. Zo werkt het.',
        h1: 'Zo zet je een video om naar MP3 op je iPhone',
        answer: `Open de video in Foto’s, tik op Deel en kies ${APP}. Snijd bij als dat nodig is, tik op ‘Audio extraheren’ en exporteer als MP3. De MP3 blijft op je iPhone en kun je bewaren in Bestanden, via AirDrop versturen of naar elke app sturen. Zonder computer, upload of account.`,
        intro: '<p>MP3 is het meest compatibele audioformaat dat er is: het speelt in elke auto, op elke computer en in elk programma. Zo zet je elke iPhone-video om naar MP3 zonder je telefoon weg te leggen.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Extraheer als MP3', text: 'Tik op ‘Audio extraheren’ en kies MP3. De omzetting gebeurt op je iPhone.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'Waarom een app in plaats van een online converter?',
                html: '<p>Online converters laten je de hele video uploaden, wachten en de MP3 weer downloaden — traag via mobiele data en riskant voor privévideo’s. De app werkt offline, houdt het bestand op je toestel en snijdt bij vóór het omzetten. Vergelijking: <a href="/nl/guides/extract-audio-online-vs-app/">online of app</a>.</p>'
            },
            {
                h2: 'Welke video’s kun je naar MP3 omzetten?',
                html: '<p>Alles wat je iPhone afspeelt: camera-opnamen (<a href="/nl/guides/mov-to-mp3-iphone/">MOV</a>), gedownloade clips (<a href="/nl/guides/mp4-to-mp3-iphone/">MP4</a>), <a href="/nl/guides/screen-recording-to-audio-iphone/">schermopnamen</a> en video’s uit Berichten, WhatsApp of AirDrop.</p>'
            },
            {
                h2: 'Wat doe je met de MP3?',
                html: `<ul>
<li>Bewaren in <strong>Bestanden</strong> en offline luisteren.</li>
<li>Via <strong>AirDrop</strong> naar je Mac sturen.</li>
<li>30 seconden gebruiken als <a href="/nl/guides/video-to-ringtone-iphone/">beltoon</a>.</li>
<li>Importeren in GarageBand, CapCut of een podcast-editor.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Kan een iPhone zonder app een video naar MP3 omzetten?', a: 'Niet direct. Opdrachten kan audio alleen als M4A bewaren, niet als MP3. Voor MP3 op je iPhone heb je een converter-app of een website nodig.' },
            { q: 'Is omzetten naar MP3 gratis?', a: `Ja, de basisconversie in ${APP} is gratis. In-app aankopen voegen extra functies toe.` },
            { q: 'Heb ik wifi nodig om een video naar MP3 om te zetten?', a: 'Nee. De omzetting gebeurt op je iPhone en werkt offline. Alleen video’s in iCloud moeten eerst gedownload worden.' }
        ],
        related: ['mp4-to-mp3-iphone', 'mov-to-mp3-iphone', 'video-to-m4a-iphone'],
        card: { title: 'Video naar MP3', text: 'Elke iPhone-video als universele MP3.' }
    },
    {
        slug: 'mp4-to-mp3-iphone',
        keyword: 'mp4 naar mp3 iphone',
        eyebrow: 'MP4 naar MP3',
        title: 'MP4 naar MP3 op je iPhone — gratis en zonder upload',
        description: 'Zet een MP4 gratis om naar MP3 op je iPhone: open het bestand in Bestanden of Foto’s, tik op Deel en kies de app. Offline, met bijsnijden, in 4 stappen.',
        h1: 'Zo zet je MP4 om naar MP3 op je iPhone',
        answer: `Om MP4 naar MP3 om te zetten op je iPhone, open je het bestand in Bestanden of Foto’s, tik je op Deel en kies je ${APP}. Snijd eventueel bij, tik op ‘Audio extraheren’, kies MP3 en bewaar. Gratis, op je toestel en zonder internet.`,
        intro: '<p>MP4-bestanden komen meestal binnen als download, e-mailbijlage of via AirDrop, en staan daarom vaak in de app <strong>Bestanden</strong> in plaats van in Foto’s. De app werkt met allebei.</p>',
        steps: [
            { name: 'Zoek het MP4-bestand', text: 'Open Bestanden (Downloads, iCloud Drive of ‘Op mijn iPhone’) of Foto’s en zoek de MP4.', image: 2 },
            { name: 'Stuur hem naar de app', text: 'Houd het bestand ingedrukt, tik op Deel en kies de app. De MP4 opent in de app.', image: 2 },
            STEP.trim,
            { name: 'Bewaar als MP3', text: 'Tik op ‘Audio extraheren’, kies MP3 en daarna Deel → Bewaar in Bestanden om de MP3 naast de originele MP4 te zetten.', image: 4 }
        ],
        sections: [
            {
                h2: 'MP4 en MP3 in één zin',
                html: '<p>MP4 is een container met beeld <em>én</em> geluid; MP3 bevat alleen geluid. Bij het omzetten blijft het geluidsspoor over en verdwijnt het beeld — het bestand wordt veel kleiner en speelt in elke speler.</p>'
            },
            {
                h2: 'MP4 uit WhatsApp, Telegram en e-mail',
                html: '<p>Bewaar eerst de bijlage: open in de chat de video → Deel → ‘Bewaar video’ (naar Foto’s) of ‘Bewaar in Bestanden’. Volg daarna de stappen hierboven. Zet alleen video’s om die van jou zijn of waarvan je de rechten hebt.</p>'
            },
            {
                h2: 'Liever M4A?',
                html: '<p>Voor beltonen en Apple-apps is M4A de betere keuze. Zie <a href="/nl/guides/video-to-m4a-iphone/">video naar M4A op je iPhone</a>.</p>'
            }
        ],
        faq: [
            { q: 'Kan ik MP4 gratis naar MP3 omzetten op mijn iPhone?', a: `Ja. ${APP} zet MP4 gratis om naar MP3, direct op je toestel. In-app aankopen ontgrendelen extra’s.` },
            { q: 'Wordt de MP3 kleiner dan de MP4?', a: 'Ja, meestal veel kleiner, omdat het beeldspoor wegvalt en alleen het geluid overblijft.' },
            { q: 'Kan ik meerdere MP4’s omzetten?', a: 'Ja. Zet ze een voor een om — elke MP3 blijft in de bibliotheek van de app.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'mov-to-mp3-iphone', 'extract-audio-online-vs-app'],
        card: { title: 'MP4 naar MP3', text: 'Gedownloade MP4’s uit Bestanden of Foto’s.' }
    },
    {
        slug: 'mov-to-mp3-iphone',
        keyword: 'mov naar mp3 iphone',
        eyebrow: 'MOV naar MP3',
        title: 'MOV naar MP3 op je iPhone — geluid uit je camera-video’s',
        description: 'Video’s van je iPhone-camera zijn MOV-bestanden. Zet MOV direct op je telefoon om naar MP3: kies de clip, snijd bij, tik op ‘Audio extraheren’. Gratis, offline.',
        h1: 'Zo zet je MOV om naar MP3 op je iPhone',
        answer: `Elke video die je met de iPhone-camera maakt, is een MOV-bestand. Om MOV naar MP3 om te zetten, open je de clip in Foto’s, tik je op Deel, kies je ${APP}, snijd je eventueel bij en tik je op ‘Audio extraheren’. De MP3 staat daarna op je iPhone — geen computer nodig.`,
        intro: '<p>MOV is Apples videoformaat en het formaat van je camera: concerten, speeches, een vriend met een gitaar, een stem die je wilt bewaren. Als MP3 luister je het overal.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Waarvoor MOV naar MP3 handig is',
                html: `<ul>
<li>Het geluid van een gefilmd concert of optreden bewaren.</li>
<li>Een gefilmde speech of toost als audioherinnering bewaren.</li>
<li>Een bandrepetitie delen zonder enorm videobestand.</li>
<li>Een opgenomen <a href="/nl/guides/lecture-video-to-audio-iphone/">college</a> onderweg luisteren.</li>
</ul>`
            },
            {
                h2: 'HEVC, 4K en filmmodus',
                html: '<p>HEVC- en 4K-opnamen worden op dezelfde manier omgezet. Alleen het geluid wordt verwerkt, dus zelfs enorme MOV-bestanden leveren kleine audiobestanden op.</p>'
            },
            {
                h2: 'Waarom niet op de computer?',
                html: '<p>Een MOV van een paar gigabyte naar je computer kopiëren alleen om het geluid eraf te halen, duurt langer dan omzetten op je iPhone. De app doet het waar de video al staat.</p>'
            }
        ],
        faq: [
            { q: 'In welk formaat filmt de iPhone?', a: 'De iPhone-camera maakt MOV-bestanden, meestal met HEVC- of H.264-video en AAC-audio.' },
            { q: 'Kan ik MOV zonder kwaliteitsverlies naar MP3 omzetten?', a: 'De app behoudt de kwaliteit van de opname: de MP3 klinkt zoals de video bij het afspelen.' },
            { q: 'Kan ik MOV ook naar M4A omzetten?', a: 'Ja, kies M4A als formaat. Handig voor beltonen en Apple-apps.' }
        ],
        related: ['mp4-to-mp3-iphone', 'convert-video-to-mp3-iphone', 'save-music-from-video-iphone'],
        card: { title: 'MOV naar MP3', text: 'Camera-opnamen omgezet naar audio.' }
    }
);

guides.push(
    {
        slug: 'video-to-m4a-iphone',
        keyword: 'video naar m4a iphone',
        eyebrow: 'Video naar M4A',
        title: 'Video naar M4A omzetten op je iPhone — MP4 en MOV naar M4A',
        description: 'Bewaar het geluid van je video’s als M4A voor beltonen, GarageBand en Apple-apps. Gratis, op je toestel en met bijsnijden. Van MP4 of MOV naar M4A in 4 tikken.',
        h1: 'Zo zet je een video om naar M4A op je iPhone',
        answer: `Om een video naar M4A om te zetten op je iPhone, stuur je hem vanuit Foto’s of Bestanden via Deel naar ${APP}, snijd je eventueel bij, tik je op ‘Audio extraheren’ en kies je M4A. Je krijgt een M4A-bestand (AAC) dat werkt in GarageBand, iMovie, audiospelers en als beltoon.`,
        intro: '<p>M4A is Apples eigen audioformaat. Bij vergelijkbare kwaliteit is het kleiner dan MP3 — en het is precies het formaat dat de iPhone verwacht voor beltonen en GarageBand-projecten.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Extraheer als M4A', text: 'Tik op ‘Audio extraheren’ en kies M4A.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'M4A of MP3: wanneer kies je M4A?',
                html: `<table class="guide-table"><thead><tr><th></th><th>M4A (AAC)</th><th>MP3</th></tr></thead><tbody>
<tr><td>Ideaal voor</td><td>iPhone, Mac, beltonen, GarageBand</td><td>Al het andere: Windows, Android, auto</td></tr>
<tr><td>Bestandsgrootte</td><td>Kleiner bij dezelfde kwaliteit</td><td>Iets groter</td></tr>
<tr><td>Compatibiliteit</td><td>Zeer goed</td><td>Universeel</td></tr>
</tbody></table>`
            },
            {
                h2: 'Gebruik de M4A als beltoon',
                html: '<p>In iOS 26 kun je een M4A van minder dan 30 seconden direct vanuit Bestanden als beltoon instellen. Volledige uitleg: <a href="/nl/guides/video-to-ringtone-iphone/">een beltoon maken van een video</a>.</p>'
            },
            {
                h2: 'Open hem in GarageBand of iMovie',
                html: '<p>Bewaar de M4A in Bestanden en importeer hem via de bestandsbrowser van GarageBand of iMovie als achtergrondmuziek, voice-over of geluidseffect.</p>'
            }
        ],
        faq: [
            { q: 'Is M4A beter dan MP3?', a: 'Bij dezelfde bitrate klinkt M4A (AAC) meestal even goed of beter en is het kleiner. MP3 werkt op meer apparaten.' },
            { q: 'Kan ik M4A maken met Opdrachten?', a: 'Ja, de actie ‘Codeer media’ met ‘Alleen audio’ maakt een M4A. Maar die kan niet bijsnijden of MP3 exporteren — de app kan dat wel.' },
            { q: 'Is omzetten naar M4A gratis?', a: `Ja, de basisfunctie van ${APP} is gratis, inclusief export naar M4A.` }
        ],
        related: ['video-to-ringtone-iphone', 'convert-video-to-mp3-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Video naar M4A', text: 'Apples formaat voor beltonen en GarageBand.' }
    },
    {
        slug: 'extract-audio-without-app-iphone',
        keyword: 'audio uit video halen iphone zonder app',
        eyebrow: 'Opdrachten of app',
        title: 'Audio uit video halen op iPhone zonder app (met Opdrachten)',
        description: 'Je kunt op je iPhone zonder extra app audio uit video halen met Opdrachten en ‘Codeer media’. Instellen, beperkingen (alleen M4A) en een snellere optie.',
        h1: 'Zo haal je audio uit een video op je iPhone zonder app',
        answer: 'Zonder extra app gebruik je een opdracht: voeg de actie ‘Codeer media’ toe, zet ‘Alleen audio’ aan, voeg ‘Bewaar bestand’ toe en zet ‘Toon in deelpaneel’ aan. Deel daarna de video met de opdracht. Die maakt alleen M4A en kan niet bijsnijden — voor MP3 of korte stukjes is een app sneller.',
        intro: '<p>Apples gratis app Opdrachten kan het geluid van een video scheiden. Het instellen duurt zo’n twee minuten. Dit is het exacte recept — en de beperkingen ervan.</p>',
        steps: [
            { name: 'Maak een nieuwe opdracht', text: 'Open Opdrachten, tik op + en noem hem ‘Geluid uit video’.', image: 2 },
            { name: 'Voeg ‘Codeer media’ toe', text: 'Tik op ‘Voeg actie toe’, zoek ‘Codeer media’, voeg die toe, klap de opties open en zet ‘Alleen audio’ aan.', image: 2 },
            { name: 'Voeg ‘Bewaar bestand’ toe', text: 'Voeg de actie ‘Bewaar bestand’ toe zodat het resultaat in Bestanden terechtkomt.', image: 4 },
            { name: 'Toon hem in Deel', text: 'Open de instellingen van de opdracht (i-symbool), zet ‘Toon in deelpaneel’ aan en sta ‘Media’ toe. Deel nu een video vanuit Foto’s en kies de opdracht.', image: 4 }
        ],
        sections: [
            {
                h2: 'Beperkingen van de Opdrachten-methode',
                html: `<ul>
<li><strong>Alleen M4A</strong> — geen MP3.</li>
<li><strong>Niet bijsnijden</strong> — je krijgt altijd het hele geluidsspoor.</li>
<li><strong>Geen bibliotheek</strong> — bestanden komen in Bestanden en je moet ze zelf zoeken en hernoemen.</li>
<li>Bij lange video’s stopt de opdracht soms zonder duidelijke foutmelding.</li>
</ul>`
            },
            {
                h2: 'Het alternatief in één tik',
                html: `<p>${APP} doet hetzelfde, maar met bijsnijden, keuze tussen MP3 en M4A en een bibliotheek met alles wat je hebt geëxtraheerd. De app zit ook in het Deel-menu, dus het is net zo snel — en er valt niets in te stellen.</p>`
            },
            {
                h2: 'Andere opties zonder app',
                html: '<p>Ook iMovie en GarageBand kunnen geluid scheiden, maar met meer stappen en beperkte exportformaten. Websites werken ook, maar dan moet je je video uploaden — zie <a href="/nl/guides/extract-audio-online-vs-app/">online of app</a>.</p>'
            }
        ],
        faq: [
            { q: 'Heeft de iPhone een ingebouwde audio-extractor?', a: 'Niet als knop in Foto’s. Het dichtst in de buurt komt de actie ‘Codeer media’ met ‘Alleen audio’ in de app Opdrachten.' },
            { q: 'In welk formaat bewaart de opdracht?', a: 'Als M4A. Met Opdrachten kun je niet als MP3 bewaren.' },
            { q: 'Kan de opdracht het geluid bijsnijden?', a: `Niet handig. Om bij te snijden gebruik je een app met tijdlijn, zoals ${APP}.` }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-online-vs-app', 'video-to-m4a-iphone'],
        card: { title: 'Zonder app (Opdrachten)', text: 'Het gratis Opdrachten-recept en de beperkingen.' }
    },
    {
        slug: 'extract-audio-online-vs-app',
        keyword: 'audio uit video halen online',
        eyebrow: 'Online of app',
        title: 'Audio uit video halen: online gratis of met een iPhone-app?',
        description: 'Audio uit video halen online of met een app? We vergelijken privacy, snelheid, limieten en bijsnijden op de iPhone — en waarom de app op je telefoon wint.',
        h1: 'Audio uit video halen: online (gratis) of met een iPhone-app',
        answer: `Online tools werken op elk apparaat, maar je moet de hele video uploaden, wachten en het resultaat downloaden — traag via mobiele data en niet privé. Op de iPhone is een app als ${APP} sneller, werkt offline, houdt je video’s op je toestel en snijdt bij vóór het exporteren.`,
        intro: '<p>Wie zoekt op ‘audio uit video halen online’ vindt tientallen gratis websites. Op een laptop met snel internet zijn die handig. Op de iPhone ligt dat anders.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Vergelijking',
                html: `<table class="guide-table"><thead><tr><th></th><th>Online tool</th><th>${APP}</th></tr></thead><tbody>
<tr><td>Privacy</td><td>Video wordt naar een externe server geüpload</td><td>Blijft op je iPhone</td></tr>
<tr><td>Snelheid</td><td>Upload + wachtrij + download</td><td>Seconden, op je toestel</td></tr>
<tr><td>Offline</td><td>Nee</td><td>Ja</td></tr>
<tr><td>Groottelimiet</td><td>Vaak bij gratis versies</td><td>Alleen je opslag</td></tr>
<tr><td>Bijsnijden</td><td>Soms</td><td>Ingebouwde tijdlijn</td></tr>
<tr><td>Advertenties en pop-ups</td><td>Vaak</td><td>Geen web-pop-ups</td></tr>
<tr><td>Prijs</td><td>Gratis met limieten</td><td>Basisfuncties gratis</td></tr>
</tbody></table>`
            },
            {
                h2: 'Wanneer een online tool zinvol is',
                html: '<p>Zit je achter een Windows-pc en staat de video daar al, dan is een betrouwbare website prima. Upload alleen niets persoonlijks: familievideo’s, vergaderingen of klantmateriaal.</p>'
            },
            {
                h2: 'Wanneer de app beter is',
                html: '<p>Staat de video op je iPhone, dan wint de app: geen upload via mobiele data, geen wachten, geen download — en je knipt precies het stuk dat je nodig hebt.</p>'
            }
        ],
        faq: [
            { q: 'Is het veilig om online audio uit een video te halen?', a: 'Dat hangt van de website af. Je video komt op een server van derden, dus vermijd het voor privémateriaal. Apps die op je toestel werken, uploaden niets.' },
            { q: 'Is er een gratis manier op iPhone zonder upload?', a: `Ja. ${APP} is gratis om te beginnen en zet om op je toestel — je video wordt nooit geüpload.` },
            { q: 'Waarom is online omzetten zo traag op je telefoon?', a: 'Omdat eerst de hele video geüpload moet worden. Telefoonvideo’s zijn groot en uploaden via mobiele data is meestal veel trager dan downloaden.' }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-without-app-iphone', 'mp4-to-mp3-iphone'],
        card: { title: 'Online of app', text: 'Privacy, snelheid en limieten vergeleken.' }
    },
    {
        slug: 'save-music-from-video-iphone',
        keyword: 'muziek uit video halen iphone',
        eyebrow: 'Muziek',
        title: 'Muziek uit een video halen op je iPhone (MP3 of M4A)',
        description: 'Bewaar het nummer of de achtergrondmuziek uit een video op je iPhone als MP3 of M4A. Knip precies het nummer, luister offline en deel overal. Korte handleiding.',
        h1: 'Zo haal je muziek uit een video op je iPhone',
        answer: `Om muziek uit een video te halen op je iPhone, open je de video in Foto’s, tik je op Deel, kies je ${APP}, zet je de bijsnijmarkeringen rond het nummer en tik je op ‘Audio extraheren’. De muziek wordt bewaard als MP3 of M4A om offline te luisteren in Bestanden of te delen met elke app.`,
        intro: '<p>Een nummer op een bruiloft, een cover van een vriend, de muziek uit je eigen montage — soms is het geluid het belangrijkste. Zo bewaar je het als los muziekbestand.</p>',
        steps: [STEP.share, { name: 'Snijd bij rond het nummer', text: 'Tik op ‘Video bijsnijden’ en sleep de gele markeringen zodat alleen het nummer overblijft. Luister even naar begin en einde.', image: 3 }, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Tips voor het beste geluid',
                html: `<ul>
<li>Knip gepraat en applaus aan het begin en einde weg.</li>
<li>MP3 voor de autoradio en oudere spelers, M4A voor Apple-apparaten.</li>
<li>Geef het bestand een naam in Bestanden (ingedrukt houden → Wijzig naam) zodat je het terugvindt.</li>
</ul>`
            },
            {
                h2: 'Over auteursrecht',
                html: '<p>Bewaar alleen muziek uit je eigen video’s of video’s waarvan je de rechten hebt. Commerciële nummers zijn auteursrechtelijk beschermd: een privékopie van je eigen opname is prima, andermans muziek opnieuw publiceren niet.</p>'
            },
            {
                h2: 'Maak er je beltoon van',
                html: '<p>Je favoriete 30 seconden gevonden? <a href="/nl/guides/video-to-ringtone-iphone/">Maak er een beltoon van</a>.</p>'
            }
        ],
        faq: [
            { q: 'Hoe krijg ik het nummer uit een video op mijn iPhone?', a: `Stuur de video naar ${APP}, snijd bij rond het nummer en tik op ‘Audio extraheren’. Het nummer wordt als audiobestand bewaard.` },
            { q: 'Kan ik het nummer aan Apple Music toevoegen?', a: 'De Muziek-app op de iPhone kan lokale bestanden niet direct importeren. Bewaar het bestand in Bestanden of synchroniseer vanaf een Mac of pc.' },
            { q: 'Werkt het ook met video’s uit WhatsApp of Berichten?', a: 'Ja. Bewaar de video eerst in Foto’s of Bestanden en haal daarna het geluid eruit.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-ringtone-iphone', 'mov-to-mp3-iphone'],
        card: { title: 'Muziek uit video halen', text: 'Houd het nummer, laat het beeld weg.' }
    }
);

guides.push(
    {
        slug: 'trim-audio-from-video-iphone',
        keyword: 'deel van geluid uit video halen iphone',
        eyebrow: 'Bijsnijden',
        title: 'Alleen een deel van het geluid uit een video halen (iPhone)',
        description: 'Heb je maar 10 seconden geluid nodig? Snijd de video op je iPhone bij en haal alleen dat stuk eruit als MP3 of M4A. Sleep de markeringen en exporteer. Gratis.',
        h1: 'Zo haal je alleen een deel van het geluid uit een video op je iPhone',
        answer: `Om maar een deel van het geluid uit een video te halen, open je hem in ${APP}, tik je op ‘Video bijsnijden’, sleep je de gele begin- en eindmarkering rond het stuk dat je wilt, tik je op ‘Bewaar’ en daarna op ‘Audio extraheren’. Alleen het geselecteerde deel wordt geëxporteerd als MP3 of M4A.`,
        intro: '<p>Meestal heb je niet het hele geluidsspoor nodig — alleen een quote, een refrein of een geluidseffect. Wie eerst bijsnijdt, krijgt een klein en schoon bestand.</p>',
        steps: [
            STEP.open,
            { name: 'Tik op ‘Video bijsnijden’', text: 'Tik in het extractiescherm op ‘Video bijsnijden’ om de tijdlijn te openen.', image: 2 },
            { name: 'Sleep de markeringen', text: 'Sleep de linker gele markering naar het begin en de rechter naar het einde. De tijden tonen de exacte selectie. Luister en tik op ‘Bewaar’.', image: 3 },
            { name: 'Extraheer en bewaar het fragment', text: 'Tik op ‘Audio extraheren’. Alleen het bijgesneden deel wordt geëxporteerd — deel het of bewaar het in Bestanden.', image: 4 }
        ],
        sections: [
            {
                h2: 'Tips voor precies bijsnijden',
                html: `<ul>
<li>Laat een halve seconde ruimte voor en na spraak, zodat je geen woorden afkapt.</li>
<li>Voor een beltoon kies je maximaal 30 seconden.</li>
<li>Meerdere stukken uit één video? Herhaal het bijsnijden per stuk — alles blijft in de bibliotheek.</li>
</ul>`
            },
            {
                h2: 'Wat mensen vaak bijsnijden',
                html: '<p>Eén zin uit een speech, het refrein van een nummer, een geluidseffect voor een montage, de eerste woordjes van je kind of die ene belangrijke minuut uit een lange vergadering.</p>'
            }
        ],
        faq: [
            { q: 'Kan ik het geluid van een video knippen op mijn iPhone?', a: `Ja. Snijd de video in ${APP} bij tot het stuk dat je nodig hebt en extraheer — alleen dat deel wordt als audio bewaard.` },
            { q: 'Verandert bijsnijden mijn originele video?', a: 'Nee. Het origineel in Foto’s blijft onveranderd; alleen het geëxporteerde audiobestand wordt bijgesneden.' },
            { q: 'Kan ik meerdere stukken uit één video halen?', a: 'Ja. Snijd bij en extraheer opnieuw voor elk stuk.' }
        ],
        related: ['video-to-ringtone-iphone', 'save-music-from-video-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Alleen een deel extraheren', text: 'Knip tot op de seconde.' }
    },
    {
        slug: 'screen-recording-to-audio-iphone',
        keyword: 'geluid uit schermopname halen iphone',
        eyebrow: 'Schermopname',
        title: 'Geluid uit een schermopname halen op je iPhone (MP3)',
        description: 'Zet een schermopname van je iPhone om naar een MP3- of M4A-bestand. Ontdek waarom een opname stil is, knip het juiste stuk en bewaar het geluid.',
        h1: 'Zo haal je het geluid uit een schermopname op je iPhone',
        answer: `Schermopnamen van de iPhone worden als video in Foto’s bewaard. Om het geluid eruit te halen, open je de opname, tik je op Deel, kies je ${APP}, snijd je eventueel bij en tik je op ‘Audio extraheren’. Is het bestand stil, dan is er geen geluid opgenomen — zet de microfoon aan vóór het opnemen.`,
        intro: '<p>Een schermopname is een veelgebruikte manier om een spraakbericht, een gesprek op de luidspreker of een fragment uit een app vast te leggen. Zo houd je alleen het geluid over.</p>',
        steps: [
            { name: 'Zoek de opname in Foto’s', text: 'Schermopnamen staan in Foto’s → ‘Mediatypen’ → ‘Schermopnamen’.', image: 2 },
            { name: 'Stuur hem naar de app', text: 'Open de opname, tik op Deel en kies de app.', image: 2 },
            STEP.trim,
            { name: 'Extraheer en bewaar', text: 'Tik op ‘Audio extraheren’ en bewaar de MP3 of M4A in Bestanden.', image: 4 }
        ],
        sections: [
            {
                h2: 'Waarom is mijn schermopname stil?',
                html: `<ul>
<li><strong>Microfoon uit:</strong> houd in het bedieningspaneel de schermopnameknop ingedrukt en zet ‘Microfoon’ aan om je stem op te nemen.</li>
<li><strong>Stille modus:</strong> sommige apps maken geen geluid in de stille modus.</li>
<li><strong>Beschermde content:</strong> veel streamingapps blokkeren geluid in schermopnamen — dat is zo bedoeld en niet te omzeilen.</li>
</ul>`
            },
            {
                h2: 'Respecteer privacy',
                html: '<p>Neem gesprekken en telefoontjes alleen op en bewaar ze alleen met toestemming van iedereen die meedoet, en houd je aan de wetgeving in jouw land.</p>'
            }
        ],
        faq: [
            { q: 'Kan ik een schermopname naar MP3 omzetten?', a: 'Ja. Schermopnamen zijn gewone video’s, dus het geluid kan als MP3 of M4A worden bewaard.' },
            { q: 'Waar bewaart de iPhone schermopnamen?', a: 'In de Foto’s-app, onder ‘Mediatypen’ → ‘Schermopnamen’.' },
            { q: 'Waarom hoor ik niets in mijn schermopname?', a: 'De microfoon stond uit of de opgenomen app blokkeert geluid. Controleer vóór het extraheren of de opname met geluid afspeelt.' }
        ],
        related: ['extract-audio-from-video-iphone', 'trim-audio-from-video-iphone', 'lecture-video-to-audio-iphone'],
        card: { title: 'Geluid uit schermopname', text: 'Bewaar het geluid en ontdek waarom het ontbreekt.' }
    },
    {
        slug: 'lecture-video-to-audio-iphone',
        keyword: 'college video omzetten naar audio',
        eyebrow: 'Studie',
        title: 'Een college-video omzetten naar audio op je iPhone (MP3)',
        description: 'Zet opgenomen colleges, webinars en lezingen op je iPhone om naar MP3 en studeer overal. Kleine bestanden, offline luisteren en makkelijk delen. Stap voor stap.',
        h1: 'Zo zet je een college-video om naar audio op je iPhone',
        answer: `Om een college-video om te zetten naar audio, open je de opname in Foto’s of Bestanden, tik je op Deel, kies je ${APP} en tik je op ‘Audio extraheren’. Bewaar de MP3 in Bestanden en luister offline — in de trein, in de sportschool of met het scherm uit — voor een fractie van de opslag.`,
        intro: '<p>Bij een college gaat het om wat er gezegd wordt, niet om wat je ziet. Als audio wordt het college een podcast die je overal kunt terugluisteren.</p>',
        steps: [
            STEP.share,
            { name: 'Knip wachttijd en pauzes weg (optioneel)', text: 'Tik op ‘Video bijsnijden’ om de wachttijd voor het begin en een vragenronde die je niet nodig hebt weg te knippen.', image: 3 },
            STEP.extract,
            { name: 'Bewaar in een map Colleges', text: 'Tik op Deel → Bewaar in Bestanden en maak per vak een map, zodat je alles snel terugvindt.', image: 4 }
        ],
        sections: [
            {
                h2: 'Waarom studeren met audio',
                html: `<ul>
<li><strong>Kleine bestanden:</strong> een uur audio neemt een fractie in van een uur video.</li>
<li><strong>Scherm uit:</strong> luister met je telefoon vergrendeld en spaar je batterij.</li>
<li><strong>Overal:</strong> trein, wandeling, sportschool — geen wifi nodig.</li>
</ul>`
            },
            {
                h2: 'Maak er aantekeningen van',
                html: '<p>Wil je tekst? Importeer de audio in de transcriptie-app die je al gebruikt en doorzoek later de transcriptie.</p>'
            },
            {
                h2: 'Check de regels',
                html: '<p>Veel universiteiten staan opnemen voor eigen gebruik toe, maar niet het delen ervan. Check de regels van je vak voordat je een college opneemt of deelt.</p>'
            }
        ],
        faq: [
            { q: 'Kan ik een video op mijn iPhone luisteren met het scherm uit?', a: 'De meeste videospelers pauzeren als je vergrendelt. Als MP3 kun je met het scherm uit luisteren in Bestanden of elke audiospeler.' },
            { q: 'Werkt het met een college van een uur?', a: 'Ja. Lange opnamen werken hetzelfde, ze duren alleen iets langer.' },
            { q: 'Kan ik Zoom- of webinaropnamen omzetten?', a: 'Ja, zodra de MP4-opname in Foto’s of Bestanden op je iPhone staat.' }
        ],
        related: ['screen-recording-to-audio-iphone', 'mp4-to-mp3-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'College-video naar audio', text: 'Studeer overal met kleine MP3’s.' }
    },
    {
        slug: 'video-to-ringtone-iphone',
        keyword: 'beltoon van video maken iphone',
        eyebrow: 'Beltonen',
        title: 'Een beltoon maken van een video op je iPhone (iOS 26)',
        description: 'Maak van elke video een iPhone-beltoon: snijd het geluid bij tot 30 sec, bewaar het in Bestanden en tik op Deel → ‘Gebruik als beltoon’. Ook iOS 18.',
        h1: 'Zo maak je een beltoon van een video op je iPhone',
        answer: `Om een beltoon van een video te maken, open je hem in ${APP}, snijd je hem bij tot maximaal 30 seconden, extraheer je als M4A of MP3 en bewaar je in Bestanden. In iOS 26 houd je het bestand in Bestanden ingedrukt, tik je op Deel en kies je ‘Gebruik als beltoon’. In oudere iOS-versies importeer je het geluid in GarageBand en exporteer je het als beltoon.`,
        intro: '<p>Een lach, een nummer van een feestje, het blaffen van je hond — elk geluid uit je video’s kan je beltoon worden. Met iOS 26 is dat makkelijk zodra je een audiobestand hebt.</p>',
        steps: [
            STEP.share,
            { name: 'Snijd bij tot 30 seconden', text: 'Tik op ‘Video bijsnijden’ en kies maximaal 30 seconden — de limiet voor beltonen.', image: 3 },
            { name: 'Extraheer en bewaar in Bestanden', text: 'Tik op ‘Audio extraheren’ (M4A of MP3) en daarna op Deel → Bewaar in Bestanden.', image: 4 },
            { name: 'Gebruik als beltoon', text: 'Houd in Bestanden het audiobestand ingedrukt, tik op Deel → ‘Gebruik als beltoon’ (iOS 26). Controleer in Instellingen → Horen en voelen → Beltoon.', image: 4 }
        ],
        sections: [
            {
                h2: 'In iOS 18: via GarageBand',
                html: `<ol>
<li>Extraheer en snijd het geluid bij zoals hierboven en bewaar het in Bestanden.</li>
<li>Open GarageBand, start een project met ‘Audiorecorder’ en schakel naar de sporenweergave.</li>
<li>Open de loopbrowser → ‘Bestanden’ → ‘Blader door onderdelen in de Bestanden-app’ en sleep de audio naar een spoor.</li>
<li>Ga terug naar ‘Mijn nummers’, houd het project ingedrukt → Deel → Beltoon → Exporteer.</li>
</ol>`
            },
            {
                h2: 'Waarom ‘Gebruik als beltoon’ ontbreekt',
                html: `<ul>
<li>Het bestand is langer dan 30 seconden — snijd opnieuw bij.</li>
<li>Het bestand is geen MP3 of M4A.</li>
<li>Je iPhone heeft nog geen iOS 26 — gebruik GarageBand.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Hoe lang mag een iPhone-beltoon zijn?', a: 'Eigen beltonen uit audiobestanden mogen maximaal 30 seconden duren.' },
            { q: 'Welk formaat heeft een iPhone-beltoon nodig?', a: 'In iOS 26 kun je MP3- of M4A-bestanden van minder dan 30 seconden instellen met ‘Gebruik als beltoon’.' },
            { q: 'Kan ik een video direct als beltoon gebruiken?', a: 'Nee. Haal eerst het geluid uit de video en stel dan het audiobestand in als beltoon.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-m4a-iphone', 'save-music-from-video-iphone'],
        card: { title: 'Beltoon van een video', text: '‘Gebruik als beltoon’ in iOS 26, in 4 stappen.' }
    }
);
