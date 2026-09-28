/**
 * Norske guider (bokmål) → /no/guides/<slug>/
 * Slugene er de samme som de engelske (build/guides/en.js), slik at sidene kobles via hreflang.
 * Søkeord — se avsnittet «Norsk (NO)» i /keywords.md. Feltstruktur — som i en.js.
 * Skjermbilder: 1 forside · 2 uttrekksskjerm · 3 klipping · 4 Del-meny · 5 bibliotek
 */

const APP = 'Trekk ut lyd fra video⁺';

const STEP = {
    open: {
        name: 'Åpne appen og velg en video',
        text: `Åpne ${APP} og velg en video fra Bilder eller Filer. Raskere: I Bilder trykker du på Del på videoen og velger «Trekk ut lyd».`,
        image: 2
    },
    share: {
        name: 'Send videoen til appen',
        text: 'Åpne videoen i Bilder eller Filer, trykk på Del og velg «Trekk ut lyd». Appen åpnes med videoen allerede lastet inn.',
        image: 2
    },
    trim: {
        name: 'Klipp ut ønsket del (valgfritt)',
        text: 'Trykk på «Klipp video», dra de gule markørene til start og slutt på delen du vil ha, lytt og trykk på «Lagre».',
        image: 3
    },
    extract: {
        name: 'Trykk på «Trekk ut lyd»',
        text: 'Trykk på «Trekk ut lyd» – lydsporet konverteres rett på iPhone på sekunder, og ingenting lastes opp til internett.',
        image: 2
    },
    save: {
        name: 'Arkiver eller send filen',
        text: 'Den ferdige lydfilen vises i biblioteket. Trykk på Del for å arkivere den i Filer, sende den med AirDrop eller til hvilken som helst app.',
        image: 4
    }
};

const guides = [];
module.exports = guides;

guides.push(
    {
        slug: 'extract-audio-from-video-iphone',
        keyword: 'trekk ut lyd fra video iphone',
        eyebrow: 'Grunnleggende',
        title: 'Slik trekker du ut lyd fra video på iPhone – trinn for trinn',
        description: 'Trekk ut lyden fra hvilken som helst video på iPhone med fire trykk: velg video, klipp, trykk på «Trekk ut lyd» og lagre som MP3 eller M4A. Gratis, uten sky.',
        h1: 'Slik trekker du ut lyd fra video på iPhone',
        answer: `For å trekke ut lyd fra en video på iPhone åpner du ${APP}, velger videoen fra Bilder, klipper ved behov og trykker på «Trekk ut lyd». Appen lagrer lydsporet som MP3 eller M4A på iPhone på sekunder. Det er gratis og fungerer uten internett.`,
        intro: '<p>Bilder på iPhone har ingen knapp for «lagre bare lyden». Du kan lage en snarvei (se <a href="/no/guides/extract-audio-without-app-iphone/">metoden uten app</a>) eller laste opp videoen til et nettsted, men begge deler er tregt når du bare trenger lyden. Her er den raskeste veien: en gratis app som virker rett fra Del-menyen.</p>',
        steps: [STEP.open, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Dette trenger du',
                html: `<ul>
<li>En iPhone med iOS 18.6 eller nyere.</li>
<li>${APP} – gratis i App Store (ca. 23 MB).</li>
<li>En video med lyd: kameraopptak (MOV), nedlastede videoer (MP4), skjermopptak, videoer fra Meldinger.</li>
</ul>`
            },
            {
                h2: 'Den raskeste måten – via Del',
                html: '<p>Du trenger ikke engang åpne appen. Åpne videoen i <strong>Bilder</strong> eller <strong>Filer</strong>, trykk på <strong>Del</strong>, bla gjennom raden med apper og velg <strong>«Trekk ut lyd»</strong>. Ser du den ikke, trykker du på «Mer» og legger den til i favoritter – da er den alltid for hånden.</p>'
            },
            {
                h2: 'MP3 eller M4A – hva skal du velge?',
                html: '<p><strong>MP3</strong> spilles av overalt: Windows, Android, bilstereo, nettsteder og videoredigering. <strong>M4A</strong> (AAC) er Apples eget format: mindre ved samme kvalitet og ideelt for ringetoner, GarageBand og iMovie. Er du i tvil, velg MP3. Les mer: <a href="/no/guides/convert-video-to-mp3-iphone/">video til MP3</a> og <a href="/no/guides/video-to-m4a-iphone/">video til M4A</a>.</p>'
            },
            {
                h2: 'Hvor lagres lyden?',
                html: '<p>Hver uttrukne fil vises i appens bibliotek med lengde, størrelse og dato. Derfra trykker du på <strong>Del → Arkiver i Filer</strong> for å legge den i iCloud Drive eller «På min iPhone», eller sender den til Messenger, Snapchat, Notater, GarageBand eller med AirDrop til datamaskinen.</p>'
            },
            {
                h2: 'Hvis noe går galt',
                html: `<ul>
<li><strong>Filen har ingen lyd.</strong> Selve videoen har ikke noe lydspor – det skjer med skjermopptak uten mikrofon. Sjekk videoen i Bilder først.</li>
<li><strong>Videoen ligger i iCloud.</strong> Bilder laster ned originalen først – vent til det er ferdig.</li>
<li><strong>Du trenger bare 20 sekunder.</strong> Klipp før uttrekk – se <a href="/no/guides/trim-audio-from-video-iphone/">slik klipper du ut en del av lyden</a>.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Kan man trekke ut lyd fra video på iPhone gratis?', a: `Ja. ${APP} er gratis å laste ned, og det grunnleggende lyduttrekket er også gratis. Ekstra funksjoner får du via kjøp i appen.` },
            { q: 'Mister man kvalitet når lyden trekkes ut?', a: 'Appen lagrer videoens lydspor som MP3 eller M4A i høy kvalitet. Lyden blir ikke bedre enn originalen, men den høres ut som når du spiller av videoen.' },
            { q: 'Kan man trekke ut lyd fra en lang video?', a: 'Ja. Forelesninger, konserter og møter behandles på samme måte, det tar bare litt lenger tid. Trenger du bare en del, klipper du først.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'trim-audio-from-video-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Trekk ut lyd fra video på iPhone', text: 'Metoden med fire trykk – fra Bilder eller via Del.' }
    },
    {
        slug: 'convert-video-to-mp3-iphone',
        keyword: 'konverter video til mp3 iphone',
        eyebrow: 'Video til MP3',
        title: 'Slik konverterer du video til MP3 på iPhone – gratis',
        description: 'Konverter hvilken som helst video fra iPhone til MP3 på sekunder. Virker fra Bilder, filene blir på enheten, og du kan klippe før eksport. Trinnvis guide.',
        h1: 'Slik konverterer du video til MP3 på iPhone',
        answer: `Åpne videoen i Bilder, trykk på Del og velg «Trekk ut lyd» (${APP}). Klipp ved behov, trykk på «Trekk ut lyd» og lagre som MP3. Filen blir på iPhone – du kan sende den til Filer, med AirDrop eller til hvilken som helst app. Ingen datamaskin eller konto trengs.`,
        intro: '<p>MP3 er det mest kompatible lydformatet: det spilles av i alle biler, på alle datamaskiner og i alle redigeringsprogrammer. Slik konverterer du video til MP3 uten å legge fra deg iPhonen.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Trekk ut som MP3', text: 'Trykk på «Trekk ut lyd» og velg formatet MP3. Konverteringen fra video til MP3 skjer rett på iPhone.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'Hvorfor en app og ikke en nettkonverter?',
                html: '<p>Nettkonvertere krever at du laster opp hele videoen, venter i kø og laster ned MP3-filen igjen – tregt på mobildata og risikabelt for private videoer. Appen fungerer uten nett, beholder filen på enheten og lar deg klippe opptaket før konvertering. Grundig sammenligning: <a href="/no/guides/extract-audio-online-vs-app/">på nett eller app</a>.</p>'
            },
            {
                h2: 'Hvilke videoer kan konverteres til MP3?',
                html: '<p>Alt iPhone kan spille av: kameraopptak (<a href="/no/guides/mov-to-mp3-iphone/">MOV</a>), nedlastede videoer (<a href="/no/guides/mp4-to-mp3-iphone/">MP4</a>), <a href="/no/guides/screen-recording-to-audio-iphone/">skjermopptak</a> og videoer fra Meldinger, Messenger, Snapchat og AirDrop.</p>'
            },
            {
                h2: 'Hva du kan gjøre med MP3-filen',
                html: `<ul>
<li>Arkivere den i <strong>Filer</strong> og lytte uten nett.</li>
<li>Sende den til datamaskinen med <strong>AirDrop</strong>.</li>
<li>Gjøre 30 sekunder om til en <a href="/no/guides/video-to-ringtone-iphone/">ringetone</a>.</li>
<li>Legge den til i GarageBand, CapCut eller et podkastprogram.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Kan iPhone konvertere video til MP3 uten app?', a: 'Ikke direkte. Snarveier kan bare lagre lyd som M4A. For MP3 på iPhone trenger du en app eller et nettsted.' },
            { q: 'Er konvertering til MP3 gratis?', a: `Ja, den grunnleggende konverteringen i ${APP} er gratis. Ekstra funksjoner via kjøp i appen.` },
            { q: 'Trenger man internett for å konvertere video til MP3?', a: 'Nei. Konverteringen skjer på iPhone og fungerer uten nett. Bare videoer som ligger i iCloud, må lastes ned først.' }
        ],
        related: ['mp4-to-mp3-iphone', 'mov-to-mp3-iphone', 'video-to-m4a-iphone'],
        card: { title: 'Video til MP3 på iPhone', text: 'Hvilken som helst video til universell MP3.' }
    }
);

guides.push(
    {
        slug: 'mp4-to-mp3-iphone',
        keyword: 'mp4 til mp3 iphone',
        eyebrow: 'MP4 til MP3',
        title: 'MP4 til MP3 på iPhone: gratis konverter uten opplasting',
        description: 'Konverter MP4 til MP3 på iPhone gratis: åpne filen i Filer eller Bilder, og trykk på Del → «Trekk ut lyd». Fungerer uten nett, med klipping. Bare fire trinn.',
        h1: 'Slik konverterer du MP4 til MP3 på iPhone',
        answer: `For å konvertere MP4 til MP3 på iPhone åpner du filen i Filer eller Bilder, trykker på Del og velger «Trekk ut lyd». Klipp eventuelt i ${APP}, trykk på «Trekk ut lyd», velg MP3 og lagre. Gratis, på enheten, uten internett.`,
        intro: '<p>MP4-filer kommer ofte som nedlastinger, e-postvedlegg eller via AirDrop og ligger derfor ofte i appen <strong>Filer</strong> i stedet for Bilder. Appen fungerer med begge.</p>',
        steps: [
            { name: 'Finn MP4-filen', text: 'Åpne Filer (Nedlastinger, iCloud Drive eller «På min iPhone») eller Bilder og finn MP4-filen.', image: 2 },
            { name: 'Send til «Trekk ut lyd»', text: 'Hold fingeren på filen og velg Del → «Trekk ut lyd». MP4-filen åpnes i appen.', image: 2 },
            STEP.trim,
            { name: 'Lagre som MP3', text: 'Trykk på «Trekk ut lyd», velg MP3 og deretter Del → Arkiver i Filer, slik at MP3-filen ligger ved siden av den opprinnelige MP4-filen.', image: 4 }
        ],
        sections: [
            {
                h2: 'Forskjellen på MP4 og MP3',
                html: '<p>MP4 er en beholder med både bilde og lyd; MP3 inneholder bare lyd. Når MP4 konverteres til MP3, beholdes lydsporet og bildet fjernes: filen blir mye mindre og kan spilles av i alle spillere.</p>'
            },
            {
                h2: 'MP4 fra Messenger, Snapchat og e-post',
                html: '<p>Lagre først vedlegget: Åpne videoen i chatten → Del → «Lagre video» (i Bilder) eller «Arkiver i Filer». Følg deretter trinnene ovenfor. Konverter bare dine egne videoer eller videoer du har rettigheter til.</p>'
            },
            {
                h2: 'Trenger du M4A?',
                html: '<p>Til ringetoner og Apples apper passer M4A bedre. Se <a href="/no/guides/video-to-m4a-iphone/">slik lagrer du video som M4A på iPhone</a>.</p>'
            }
        ],
        faq: [
            { q: 'Kan man konvertere MP4 til MP3 gratis på iPhone?', a: `Ja. ${APP} konverterer MP4 til MP3 gratis rett på enheten. Kjøp i appen låser opp ekstra funksjoner.` },
            { q: 'Blir MP3-filen mindre enn MP4-filen?', a: 'Ja, som regel mye mindre: videosporet fjernes, og bare lyden blir igjen.' },
            { q: 'Kan man konvertere flere MP4-filer?', a: 'Ja. Konverter dem én om gangen – alle MP3-filene lagres i appens bibliotek.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'mov-to-mp3-iphone', 'extract-audio-online-vs-app'],
        card: { title: 'MP4 til MP3 på iPhone', text: 'Nedlastede MP4-filer fra Filer og Bilder til MP3.' }
    },
    {
        slug: 'mov-to-mp3-iphone',
        keyword: 'mov til mp3 iphone',
        eyebrow: 'MOV til MP3',
        title: 'MOV til MP3 på iPhone – lyd fra videoer fra iPhone-kameraet',
        description: 'Videoer fra iPhone-kameraet er MOV-filer. Konverter MOV til MP3 rett på telefonen: velg videoen, klipp og trykk på «Trekk ut lyd». Gratis og uten nett.',
        h1: 'Slik konverterer du MOV til MP3 på iPhone',
        answer: `Alle videoer fra iPhone-kameraet lagres i MOV-format. For å få en MP3 åpner du videoen i Bilder, trykker på Del → «Trekk ut lyd», klipper ved behov og trykker på «Trekk ut lyd» i ${APP}. MP3-filen lagres på iPhone – ingen datamaskin trengs.`,
        intro: '<p>MOV er Apples videoformat, som iPhone-kameraet tar opp i: konserter, taler, en venn med gitar, en stemme du vil ta vare på. Som MP3 kan du høre lyden hvor som helst.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Når MOV til MP3 er nyttig',
                html: `<ul>
<li>Ta vare på lyden fra en konsert eller opptreden du har filmet.</li>
<li>Gjør en skåltale eller tale om til et lydminne.</li>
<li>Send et øvingsopptak til bandet uten en enorm video.</li>
<li>Lytt til en <a href="/no/guides/lecture-video-to-audio-iphone/">innspilt forelesning</a> på farten.</li>
</ul>`
            },
            {
                h2: 'HEVC, 4K og Kino-modus',
                html: '<p>HEVC- og 4K-videoer behandles på samme måte. Bare lyden konverteres, så selv svært store MOV-filer gir kompakte lydfiler.</p>'
            },
            {
                h2: 'Hvorfor du ikke trenger datamaskin',
                html: '<p>Å overføre en MOV-fil på flere gigabyte til datamaskinen for lydens skyld tar lengre tid enn å konvertere den på telefonen. Appen gjør det der videoen allerede ligger.</p>'
            }
        ],
        faq: [
            { q: 'Hvilket format tar iPhone opp video i?', a: 'iPhone-kameraet tar opp MOV-filer, vanligvis med HEVC- eller H.264-video og AAC-lyd.' },
            { q: 'Kan man konvertere MOV til MP3 uten kvalitetstap?', a: 'Appen beholder kvaliteten fra det opprinnelige opptaket: MP3-filen høres ut som videoen ved avspilling.' },
            { q: 'Kan man lagre MOV som M4A?', a: 'Ja, velg formatet M4A. Det er praktisk til ringetoner og Apples apper.' }
        ],
        related: ['mp4-to-mp3-iphone', 'convert-video-to-mp3-iphone', 'save-music-from-video-iphone'],
        card: { title: 'MOV til MP3', text: 'Lyd fra videoer fra iPhone-kameraet.' }
    },
    {
        slug: 'video-to-m4a-iphone',
        keyword: 'video til m4a iphone',
        eyebrow: 'Video til M4A',
        title: 'Video til M4A på iPhone – MP4 og MOV til M4A gratis',
        description: 'Lagre lyden fra en video som M4A på iPhone for ringetoner, GarageBand og Apples apper. Gratis, på enheten, med klipping. MP4 eller MOV til M4A med fire trykk.',
        h1: 'Slik lagrer du lyden fra en video som M4A på iPhone',
        answer: `For å konvertere video til M4A på iPhone sender du videoen fra Bilder eller Filer til «Trekk ut lyd», klipper om du vil, trykker på «Trekk ut lyd» og velger M4A. ${APP} lagrer en M4A-fil (AAC) som passer til GarageBand, iMovie, musikkspillere og ringetoner.`,
        intro: '<p>M4A er Apples eget lydformat. Ved lignende kvalitet er det mindre enn MP3, og det er nettopp formatet iPhone forventer for ringetoner og GarageBand-prosjekter.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Trekk ut som M4A', text: 'Trykk på «Trekk ut lyd» og velg formatet M4A.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'M4A eller MP3 – når du bør velge M4A',
                html: `<table class="guide-table"><thead><tr><th></th><th>M4A (AAC)</th><th>MP3</th></tr></thead><tbody>
<tr><td>Best til</td><td>iPhone, Mac, ringetoner, GarageBand</td><td>Alt annet – Windows, Android, bil</td></tr>
<tr><td>Filstørrelse</td><td>Mindre ved samme kvalitet</td><td>Litt større</td></tr>
<tr><td>Kompatibilitet</td><td>Svært god</td><td>Universell</td></tr>
</tbody></table>`
            },
            {
                h2: 'Bruk M4A som ringetone',
                html: '<p>I iOS 26 kan en M4A-fil på under 30 sekunder settes som ringetone rett fra Filer. Les mer: <a href="/no/guides/video-to-ringtone-iphone/">slik lager du en ringetone fra en video</a>.</p>'
            },
            {
                h2: 'Åpne i GarageBand eller iMovie',
                html: '<p>Arkiver M4A-filen i Filer og importer den via filnavigeringen i GarageBand eller iMovie – som bakgrunnsmusikk, voiceover eller lydeffekt.</p>'
            }
        ],
        faq: [
            { q: 'Er M4A bedre enn MP3?', a: 'Ved samme bitrate høres M4A (AAC) som regel like bra eller bedre ut og tar mindre plass. MP3 er kompatibelt med flere enheter.' },
            { q: 'Kan man lage M4A med Snarveier?', a: 'Ja, handlingen «Kod medier» med valget «Kun lyd» lager M4A. Men da kan man ikke klippe lyden eller lagre som MP3 – det kan appen.' },
            { q: 'Er det gratis å lagre som M4A?', a: `Ja, det grunnleggende uttrekket i ${APP} er gratis, inkludert eksport til M4A.` }
        ],
        related: ['video-to-ringtone-iphone', 'convert-video-to-mp3-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Video til M4A', text: 'Apples format for ringetoner og GarageBand.' }
    }
);

guides.push(
    {
        slug: 'extract-audio-without-app-iphone',
        keyword: 'trekk ut lyd fra video iphone uten app',
        eyebrow: 'Snarveier eller app',
        title: 'Slik trekker du ut lyd fra video på iPhone uten app',
        description: 'Lyden fra en video på iPhone kan hentes ut uten app – med Snarveier og handlingen «Kod medier». Komplett oppsett, begrensninger og et raskere alternativ.',
        h1: 'Slik trekker du ut lyd fra video på iPhone uten app',
        answer: 'Uten tredjepartsapper kan lyden trekkes ut med Snarveier: legg til handlingen «Kod medier», slå på «Kun lyd», legg til «Arkiver fil» og slå på visning i Del-menyen. Send deretter videoen til snarveien. Resultatet blir bare M4A og uten klipping; for MP3 og korte klipp er appen raskere.',
        intro: '<p>Apples gratis app Snarveier kan skille lyden fra videoen. Oppsettet tar noen minutter. Her er den nøyaktige oppskriften – og begrensningene.</p>',
        steps: [
            { name: 'Lag en ny snarvei', text: 'Åpne Snarveier, trykk på + og kall snarveien «Lyd fra video».', image: 2 },
            { name: 'Legg til «Kod medier»', text: 'Trykk på «Legg til handling», søk etter «Kod medier», legg den til, åpne valgene med pilen og slå på «Kun lyd».', image: 2 },
            { name: 'Legg til «Arkiver fil»', text: 'Legg til handlingen «Arkiver fil», slik at resultatet havner i Filer.', image: 4 },
            { name: 'Vis i Del-menyen', text: 'Åpne detaljene for snarveien (i-ikonet), slå på «Vis i delingsark» og tillat typen «Medier». Send nå en video fra Bilder og velg snarveien.', image: 4 }
        ],
        sections: [
            {
                h2: 'Begrensninger ved Snarveier-metoden',
                html: `<ul>
<li><strong>Bare M4A</strong> – du får ikke MP3.</li>
<li><strong>Ingen klipping</strong> – hele lydsporet lagres alltid.</li>
<li><strong>Intet bibliotek</strong> – filene havner i Filer og må finnes og gis nytt navn manuelt.</li>
<li>Ved lange videoer kan snarveien stoppe uten en forståelig feilmelding.</li>
</ul>`
            },
            {
                h2: 'Alternativet med ett trykk',
                html: `<p>${APP} gjør det samme, men med klipping, valg mellom MP3 og M4A og et bibliotek med alle uttrukne filer. Appen ligger også rett i Del-menyen, så det er ikke tregere – og du trenger ikke bygge noe.</p>`
            },
            {
                h2: 'Andre metoder uten app',
                html: '<p>Du kan også skille ut lyden i iMovie eller GarageBand, men det krever flere trinn og gir færre eksportformater. Nettsteder fungerer også, men da må videoen lastes opp – se <a href="/no/guides/extract-audio-online-vs-app/">på nett eller app</a>.</p>'
            }
        ],
        faq: [
            { q: 'Har iPhone en innebygd måte å trekke ut lyd på?', a: 'Bilder har ingen egen knapp. Det nærmeste innebygde valget er handlingen «Kod medier» med «Kun lyd» i appen Snarveier.' },
            { q: 'Hvilket format lagrer snarveien lyden i?', a: 'M4A. Det er ikke mulig å lagre som MP3 med Snarveier.' },
            { q: 'Kan man klippe lyden med en snarvei?', a: `Ikke på en enkel måte. Bruk en app med tidslinje til klipping, for eksempel ${APP}.` }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-online-vs-app', 'video-to-m4a-iphone'],
        card: { title: 'Uten app (Snarveier)', text: 'Den gratis oppskriften og begrensningene.' }
    },
    {
        slug: 'extract-audio-online-vs-app',
        keyword: 'trekk ut lyd fra video online',
        eyebrow: 'På nett eller app',
        title: 'Trekk ut lyd fra video på nett eller med app på iPhone?',
        description: 'Trekke ut lyd fra video på nett eller med app? Vi sammenligner personvern, hastighet, begrensninger og klipping på iPhone – og hva du bør velge.',
        h1: 'Trekk ut lyd fra video på nett eller med app: hva velger du på iPhone',
        answer: `Nettjenester fungerer på alle enheter, men krever at du laster opp hele videoen, venter på behandling og laster ned resultatet – tregt på mobildata og utrygt for private opptak. På iPhone er en app som ${APP} raskere, fungerer uten nett, beholder videoen på enheten og kan klippe lyden.`,
        intro: '<p>Søker du på «trekk ut lyd fra video online», finner du dusinvis av gratis nettsteder. På en bærbar med raskt nett er de praktiske. På iPhone er det annerledes.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Sammenligning',
                html: `<table class="guide-table"><thead><tr><th></th><th>Nettjeneste</th><th>${APP}</th></tr></thead><tbody>
<tr><td>Personvern</td><td>Videoen lastes opp til en fremmed server</td><td>Blir på iPhone</td></tr>
<tr><td>Hastighet</td><td>Opplasting + kø + nedlasting</td><td>Sekunder, på enheten</td></tr>
<tr><td>Uten internett</td><td>Nei</td><td>Ja</td></tr>
<tr><td>Størrelsesgrenser</td><td>Ofte på gratisversjoner</td><td>Bare iPhones lagring</td></tr>
<tr><td>Klipping</td><td>Noen ganger</td><td>Innebygd tidslinje</td></tr>
<tr><td>Reklame og popup-vinduer</td><td>Ofte</td><td>Ingen nettreklame</td></tr>
<tr><td>Pris</td><td>Gratis med begrensninger</td><td>Grunnfunksjoner gratis</td></tr>
</tbody></table>`
            },
            {
                h2: 'Når en nettjeneste gir mening',
                html: '<p>Sitter du ved en Windows-PC og videoen allerede ligger der, holder en pålitelig nettkonverter. Ikke last opp noe privat: familievideoer, jobbmøter eller kundemateriale.</p>'
            },
            {
                h2: 'Når appen er bedre',
                html: '<p>Når videoen ligger på iPhone, vinner appen: Du slipper å laste den opp over mobilnettet, vente og laste ned resultatet, og du kan klippe ut akkurat den delen du trenger.</p>'
            }
        ],
        faq: [
            { q: 'Er det trygt å trekke ut lyd fra video på nett?', a: 'Det avhenger av nettstedet. Videoen lastes opp til en tredjepartsserver, så unngå det med private opptak. Apper som jobber på enheten, laster ikke opp noe.' },
            { q: 'Kan man trekke ut lyd gratis på iPhone uten opplasting?', a: `Ja. ${APP} konverterer videoer gratis rett på enheten, og videoen sendes ingen steder.` },
            { q: 'Hvorfor er nettkonvertering på mobilen så treg?', a: 'Hele videoen må lastes opp først. Videoer fra mobilen er store, og opplastingshastigheten på mobilnettet er vanligvis mye lavere enn nedlastingshastigheten.' }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-without-app-iphone', 'mp4-to-mp3-iphone'],
        card: { title: 'På nett eller app', text: 'Personvern, hastighet og grenser – sammenlignet.' }
    },
    {
        slug: 'save-music-from-video-iphone',
        keyword: 'hente musikk fra video iphone',
        eyebrow: 'Musikk',
        title: 'Slik henter du musikk fra en video på iPhone (MP3, M4A)',
        description: 'Lagre en sang eller bakgrunnsmusikk fra en video på iPhone som MP3 eller M4A. Klipp nøyaktig etter låten, lytt uten nett og del. Kort guide med skjermbilder.',
        h1: 'Slik henter du musikk fra en video på iPhone',
        answer: `For å hente musikk fra en video på iPhone åpner du videoen i Bilder, trykker på Del → «Trekk ut lyd», markerer sangen med markørene og trykker på «Trekk ut lyd» i ${APP}. Musikken lagres som MP3 eller M4A – lytt uten nett i Filer, eller send den til hvilken som helst app.`,
        intro: '<p>Sangen fra bryllupet, en venns coverlåt, musikken fra din egen redigering – noen ganger er lyden det mest verdifulle i en video. Slik lagrer du den som en egen musikkfil.</p>',
        steps: [STEP.share, { name: 'Marker sangen', text: 'Trykk på «Klipp video» og dra de gule markørene så bare sangen står igjen. Lytt til starten og slutten.', image: 3 }, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Slik får du den beste lyden',
                html: `<ul>
<li>Klipp bort prat og applaus i starten og slutten.</li>
<li>MP3 til bilen og eldre spillere, M4A til Apple-enheter.</li>
<li>Gi filen nytt navn i Filer (hold fingeren på den → «Endre navn»), så finner du den lett igjen.</li>
</ul>`
            },
            {
                h2: 'Om opphavsrett',
                html: '<p>Lagre musikk fra dine egne videoer eller videoer du har rettigheter til. Kommersielle sanger er beskyttet av opphavsrett: en privat kopi av ditt eget opptak er greit, å publisere andres musikk er det ikke.</p>'
            },
            {
                h2: 'Bruk den som ringetone',
                html: '<p>Har du funnet favoritt-30-sekundene dine? <a href="/no/guides/video-to-ringtone-iphone/">Gjør dem til en ringetone</a>.</p>'
            }
        ],
        faq: [
            { q: 'Hvordan får man en sang ut av en video på iPhone?', a: `Send videoen til ${APP}, marker sangen ved klipping og trykk på «Trekk ut lyd». Sangen lagres som lydfil.` },
            { q: 'Kan man legge den uttrukne sangen til i Apple Music?', a: 'Musikk-appen på iPhone importerer ikke lokale filer direkte. Behold filen i Filer, eller synkroniser via Mac eller PC.' },
            { q: 'Kan man hente musikk fra en video fra Snapchat eller Meldinger?', a: 'Ja. Lagre først videoen i Bilder eller Filer, og trekk deretter ut lyden.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-ringtone-iphone', 'mov-to-mp3-iphone'],
        card: { title: 'Hent musikk fra video', text: 'Behold sangen, dropp bildet.' }
    }
);

guides.push(
    {
        slug: 'trim-audio-from-video-iphone',
        keyword: 'klippe lyd fra video iphone',
        eyebrow: 'Klipping',
        title: 'Slik klipper du ut en del av lyden fra en video på iPhone',
        description: 'Trenger du bare 10 sekunder lyd? Klipp videoen på iPhone og lagre bare den delen som MP3 eller M4A. Markører, forhåndslytting og eksport – gratis på telefonen.',
        h1: 'Slik trekker du ut bare en del av lyden fra en video på iPhone',
        answer: `For å klippe ut en del av lyden fra en video på iPhone åpner du den i ${APP}, trykker på «Klipp video», drar de gule start- og sluttmarkørene rundt ønsket del, trykker på «Lagre» og deretter på «Trekk ut lyd». Bare den valgte delen lagres som MP3 eller M4A.`,
        intro: '<p>Som oftest trenger du ikke hele lydsporet, men et sitat, et refreng eller en lydeffekt. Klipper du først, får du et lite og rent klipp.</p>',
        steps: [
            STEP.open,
            { name: 'Trykk på «Klipp video»', text: 'Trykk på «Klipp video» på uttrekksskjermen for å åpne tidslinjen.', image: 2 },
            { name: 'Dra markørene', text: 'Dra den venstre gule markøren til starten og den høyre til slutten. Tiden for utvalget vises ved siden av. Lytt og trykk på «Lagre».', image: 3 },
            { name: 'Trekk ut og lagre', text: 'Trykk på «Trekk ut lyd» – bare den klipte delen eksporteres. Send den, eller arkiver den i Filer.', image: 4 }
        ],
        sections: [
            {
                h2: 'Tips for presis klipping',
                html: `<ul>
<li>La det være et halvt sekund før og etter talen, så du ikke klipper av ord.</li>
<li>Til en ringetone velger du maks 30 sekunder.</li>
<li>Trenger du flere deler fra samme video? Gjenta klippingen for hver – alle filer lagres i biblioteket.</li>
</ul>`
            },
            {
                h2: 'Dette klipper folk vanligvis ut',
                html: '<p>Én setning fra en tale, refrenget i en sang, en lydeffekt til redigering, et barns første ord eller det viktigste minuttet fra et langt møteopptak.</p>'
            }
        ],
        faq: [
            { q: 'Kan man klippe lyden fra en video på iPhone?', a: `Ja. Klipp videoen til ønsket del i ${APP} og trekk ut lyden – bare den delen lagres.` },
            { q: 'Endrer klippingen den opprinnelige videoen?', a: 'Nei. Originalen i Bilder forblir uendret; bare den eksporterte lydfilen klippes.' },
            { q: 'Kan man klippe ut flere deler fra samme video?', a: 'Ja. Klipp og trekk ut lyden på nytt for hver del du trenger.' }
        ],
        related: ['video-to-ringtone-iphone', 'save-music-from-video-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Klipp ut en del av lyden', text: 'Presis klipping på sekundet.' }
    },
    {
        slug: 'screen-recording-to-audio-iphone',
        keyword: 'lyd fra skjermopptak iphone',
        eyebrow: 'Skjermopptak',
        title: 'Slik lagrer du lyden fra et skjermopptak på iPhone',
        description: 'Gjør et skjermopptak fra iPhone om til en MP3- eller M4A-lydfil. Hvorfor opptaket mangler lyd, hvordan du klipper ut riktig del og lagrer lyden. Enkle trinn.',
        h1: 'Slik lagrer du lyden fra et skjermopptak på iPhone',
        answer: `Skjermopptak fra iPhone lagres i Bilder som videoer. For å få lyden åpner du opptaket, trykker på Del → «Trekk ut lyd», klipper ved behov og trykker på «Trekk ut lyd» i ${APP}. Er filen uten lyd, ble lyden aldri tatt opp – slå på mikrofonen før du tar opp.`,
        intro: '<p>Skjermopptak er en vanlig måte å ta vare på en talemelding, en samtale på høyttaler eller et klipp fra en app. Slik beholder du bare lyden.</p>',
        steps: [
            { name: 'Finn opptaket i Bilder', text: 'Skjermopptak finner du i Bilder → Medietyper → Skjermopptak.', image: 2 },
            { name: 'Send til «Trekk ut lyd»', text: 'Åpne opptaket, trykk på Del og velg «Trekk ut lyd».', image: 2 },
            STEP.trim,
            { name: 'Trekk ut og lagre', text: 'Trykk på «Trekk ut lyd» og arkiver MP3- eller M4A-filen i Filer.', image: 4 }
        ],
        sections: [
            {
                h2: 'Hvorfor mangler skjermopptaket lyd?',
                html: `<ul>
<li><strong>Mikrofonen er av:</strong> Hold fingeren på Skjermopptak-knappen i Kontrollsenter og slå på «Mikrofon» for å ta opp stemmen din.</li>
<li><strong>Lydløs modus:</strong> Noen apper slår av lyden sin i lydløs modus.</li>
<li><strong>Beskyttet innhold:</strong> Mange strømmetjenester blokkerer lyden ved skjermopptak – det er en begrensning som ikke kan omgås.</li>
</ul>`
            },
            {
                h2: 'Respekter personvernet',
                html: '<p>Ta opp og lagre samtaler bare med samtykke fra alle deltakerne og i tråd med lovene der du bor.</p>'
            }
        ],
        faq: [
            { q: 'Kan man konvertere et skjermopptak til MP3?', a: 'Ja. Et skjermopptak er en vanlig video, så lyden kan lagres som MP3 eller M4A.' },
            { q: 'Hvor ligger skjermopptak på iPhone?', a: 'I appen Bilder under Medietyper → Skjermopptak.' },
            { q: 'Hvorfor har skjermopptaket ingen lyd?', a: 'Mikrofonen var av, eller appen blokkerer lydopptak. Sjekk at opptaket spilles av med lyd før du trekker ut.' }
        ],
        related: ['extract-audio-from-video-iphone', 'trim-audio-from-video-iphone', 'lecture-video-to-audio-iphone'],
        card: { title: 'Lyd fra skjermopptak', text: 'Lagre lyden og finn ut hvorfor den mangler.' }
    }
);

guides.push(
    {
        slug: 'lecture-video-to-audio-iphone',
        keyword: 'forelesning video til lyd',
        eyebrow: 'Studier',
        title: 'Slik gjør du en videoforelesning om til lyd (MP3) på iPhone',
        description: 'Gjør innspilte forelesninger, webinarer og foredrag om til MP3 på iPhone og lær på farten. Små filer, lytting uten nett og enkel deling. Trinnvis guide.',
        h1: 'Slik gjør du en videoforelesning om til lyd på iPhone',
        answer: `For å gjøre en videoforelesning om til lyd åpner du opptaket i Bilder eller Filer, trykker på Del → «Trekk ut lyd» og deretter på «Trekk ut lyd» i ${APP}. Arkiver MP3-filen i Filer og lytt uten nett – på farten, på treningssenteret eller med skjermen av, med en mye mindre fil.`,
        intro: '<p>I en forelesning er det viktigste hva som blir sagt, ikke hva som blir vist. Gjør du forelesningsvideoen om til lyd, får du en podkast du kan høre igjen hvor som helst.</p>',
        steps: [
            STEP.share,
            { name: 'Fjern intro og pauser (valgfritt)', text: 'Trykk på «Klipp video» for å fjerne ventetiden før start og spørsmålsrunden du ikke trenger.', image: 3 },
            STEP.extract,
            { name: 'Arkiver i mappen «Forelesninger»', text: 'Trykk på Del → Arkiver i Filer og lag en mappe for hvert fag, så finner du opptakene raskt.', image: 4 }
        ],
        sections: [
            {
                h2: 'Hvorfor det er praktisk å lære med lyd',
                html: `<ul>
<li><strong>Små filer:</strong> En time lyd tar mye mindre plass enn en time video.</li>
<li><strong>Skjermen av:</strong> Lytt med låst telefon og spar batteri.</li>
<li><strong>Hvor som helst:</strong> På bussen, på tur, på treningssenteret – ingen Wi‑Fi nødvendig.</li>
</ul>`
            },
            {
                h2: 'Gjør det om til notater',
                html: '<p>Trenger du tekst? Importer lyden i transkripsjonsappen du allerede bruker, og søk i teksten.</p>'
            },
            {
                h2: 'Sjekk reglene',
                html: '<p>Mange lærested tillater at forelesninger tas opp til eget bruk, men ikke at de deles. Sjekk reglene for faget før du tar opp eller deler en forelesning.</p>'
            }
        ],
        faq: [
            { q: 'Kan man høre på video på iPhone med skjermen av?', a: 'De fleste videospillere stopper når telefonen låses. Konverterer du videoen til MP3, kan du lytte med skjermen av i Filer eller i hvilken som helst lydspiller.' },
            { q: 'Fungerer det med en forelesning på en time?', a: 'Ja. Lange opptak behandles på samme måte, det tar bare litt lenger tid.' },
            { q: 'Kan man konvertere opptak fra Zoom og webinarer?', a: 'Ja, så snart MP4-opptaket ligger i Bilder eller Filer på iPhone.' }
        ],
        related: ['screen-recording-to-audio-iphone', 'mp4-to-mp3-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Videoforelesning til lyd', text: 'Lær på farten med kompakte MP3-filer.' }
    },
    {
        slug: 'video-to-ringtone-iphone',
        keyword: 'ringetone fra video iphone',
        eyebrow: 'Ringetoner',
        title: 'Slik lager du en ringetone fra en video på iPhone (iOS 26)',
        description: 'Gjør hvilken som helst video om til ringetone på iPhone: klipp lyden til 30 sekunder, arkiver i Filer og trykk på Del → «Bruk som ringetone». iOS 26.',
        h1: 'Slik lager du en ringetone fra en video på iPhone',
        answer: `For å lage en ringetone fra en video åpner du den i ${APP}, klipper til maks 30 sekunder, trekker ut lyden som M4A eller MP3 og arkiverer den i Filer. I iOS 26 holder du fingeren på filen i Filer og trykker på Del → «Bruk som ringetone». På eldre iOS-versjoner importerer du lyden i GarageBand og eksporterer den som ringetone.`,
        intro: '<p>Latter, en sang fra festen, en hund som bjeffer – hvilken som helst lyd fra videoene dine kan bli en ringetone. I iOS 26 er det enkelt når du har en lydfil.</p>',
        steps: [
            STEP.share,
            { name: 'Klipp til 30 sekunder', text: 'Trykk på «Klipp video» og velg maks 30 sekunder – det er grensen for en ringetone.', image: 3 },
            { name: 'Trekk ut og arkiver i Filer', text: 'Trykk på «Trekk ut lyd» (M4A eller MP3), og deretter Del → Arkiver i Filer.', image: 4 },
            { name: 'Bruk som ringetone', text: 'Hold fingeren på lydfilen i Filer og trykk på Del → «Bruk som ringetone» (iOS 26). Sjekk i Innstillinger → Lyder og haptikk → Ringetone.', image: 4 }
        ],
        sections: [
            {
                h2: 'På iOS 18: metoden med GarageBand',
                html: `<ol>
<li>Trekk ut og klipp lyden som beskrevet ovenfor, og arkiver den i Filer.</li>
<li>Åpne GarageBand, lag et prosjekt med «Lydopptaker» og bytt til sporvisning.</li>
<li>Åpne loop-oversikten → Filer → «Bla gjennom objekter fra Filer-appen», og dra lyden inn på sporet.</li>
<li>Gå tilbake til «Mine sanger», hold fingeren på prosjektet → Del → Ringetone → Eksporter.</li>
</ol>`
            },
            {
                h2: 'Hvorfor «Bruk som ringetone» mangler',
                html: `<ul>
<li>Filen er lengre enn 30 sekunder – klipp den igjen.</li>
<li>Filen er ikke i MP3- eller M4A-format.</li>
<li>iPhonen har ikke iOS 26 ennå – bruk GarageBand.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Hvor lang kan en ringetone på iPhone være?', a: 'Egne ringetoner fra lydfiler kan vare maks 30 sekunder.' },
            { q: 'Hvilket format må en ringetone på iPhone ha?', a: 'I iOS 26 kan MP3- eller M4A-filer på under 30 sekunder settes som ringetone via «Bruk som ringetone».' },
            { q: 'Kan man sette en video direkte som ringetone?', a: 'Nei. Trekk først ut lyden fra videoen, og sett deretter lydfilen som ringetone.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-m4a-iphone', 'save-music-from-video-iphone'],
        card: { title: 'Ringetone fra video', text: '«Bruk som ringetone» i iOS 26 – i fire trinn.' }
    }
);
