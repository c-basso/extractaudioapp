/**
 * Danske guides → /da/guides/<slug>/
 * Slugs er de samme som de engelske (build/guides/en.js), så siderne forbindes via hreflang.
 * Søgeord — se afsnittet »Dansk (DA)« i /keywords.md. Feltstruktur — som i en.js.
 * Skærmbilleder: 1 forside · 2 udtræksskærm · 3 beskæring · 4 Del-menu · 5 bibliotek
 */

const APP = 'Udtræk lyd fra video⁺';

const STEP = {
    open: {
        name: 'Åbn appen, og vælg en video',
        text: `Åbn ${APP}, og vælg en video fra Fotos eller Filer. Hurtigere: Tryk på Del på videoen i Fotos, og vælg »Udtræk lyd«.`,
        image: 2
    },
    share: {
        name: 'Send videoen til appen',
        text: 'Åbn videoen i Fotos eller Filer, tryk på Del, og vælg »Udtræk lyd«. Appen åbner med videoen allerede indlæst.',
        image: 2
    },
    trim: {
        name: 'Beskær det ønskede stykke (valgfrit)',
        text: 'Tryk på »Beskær video«, træk de gule markører til starten og slutningen af den ønskede del, lyt, og tryk på »Gem«.',
        image: 3
    },
    extract: {
        name: 'Tryk på »Udtræk lyd«',
        text: 'Tryk på »Udtræk lyd« – lydsporet konverteres direkte på iPhone på få sekunder, og intet uploades til internettet.',
        image: 2
    },
    save: {
        name: 'Gem eller send filen',
        text: 'Den færdige lydfil vises i biblioteket. Tryk på Del for at gemme den i Filer, sende den med AirDrop eller til en hvilken som helst app.',
        image: 4
    }
};

const guides = [];
module.exports = guides;

guides.push(
    {
        slug: 'extract-audio-from-video-iphone',
        keyword: 'udtræk lyd fra video iphone',
        eyebrow: 'Grundlæggende',
        title: 'Sådan udtrækker du lyd fra video på iPhone – trin for trin',
        description: 'Udtræk lyden fra enhver video på iPhone med fire tryk: vælg videoen, beskær, tryk på »Udtræk lyd«, og gem som MP3 eller M4A. Gratis og uden skyen.',
        h1: 'Sådan udtrækker du lyd fra video på iPhone',
        answer: `For at udtrække lyd fra en video på iPhone skal du åbne ${APP}, vælge videoen fra Fotos, beskære den efter behov og trykke på »Udtræk lyd«. Appen gemmer lydsporet som MP3 eller M4A på iPhone på få sekunder. Det er gratis og virker uden internet.`,
        intro: '<p>Fotos på iPhone har ingen knap til »gem kun lyden«. Du kan bygge en genvej (se <a href="/da/guides/extract-audio-without-app-iphone/">metoden uden app</a>) eller uploade videoen til et website, men begge dele er langsomme, når du bare skal bruge lyden. Her er den hurtigste vej: en gratis app, der virker direkte fra Del-menuen.</p>',
        steps: [STEP.open, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Det skal du bruge',
                html: `<ul>
<li>En iPhone med iOS 18.6 eller nyere.</li>
<li>${APP} – gratis i App Store (ca. 23 MB).</li>
<li>En video med lyd: optagelser fra kameraet (MOV), hentede videoer (MP4), skærmoptagelser, videoer fra Beskeder.</li>
</ul>`
            },
            {
                h2: 'Den hurtigste måde – via Del',
                html: '<p>Du behøver ikke engang at åbne appen. Åbn videoen i <strong>Fotos</strong> eller <strong>Filer</strong>, tryk på <strong>Del</strong>, rul gennem rækken af apps, og vælg <strong>»Udtræk lyd«</strong>. Kan du ikke se den, så tryk på »Mere«, og føj den til favoritter – så er den altid lige ved hånden.</p>'
            },
            {
                h2: 'MP3 eller M4A – hvad skal du vælge?',
                html: '<p><strong>MP3</strong> afspilles overalt: Windows, Android, bilstereoanlæg, websites og videoredigering. <strong>M4A</strong> (AAC) er Apples eget format: mindre ved samme kvalitet og ideelt til ringetoner, GarageBand og iMovie. Er du i tvivl, så vælg MP3. Læs mere: <a href="/da/guides/convert-video-to-mp3-iphone/">video til MP3</a> og <a href="/da/guides/video-to-m4a-iphone/">video til M4A</a>.</p>'
            },
            {
                h2: 'Hvor gemmes lyden?',
                html: '<p>Hver udtrukket fil vises i appens bibliotek med længde, størrelse og dato. Derfra trykker du på <strong>Del → Gem i Filer</strong> for at lægge den i iCloud Drive eller »På min iPhone«, eller du sender den til Messenger, WhatsApp, Noter, GarageBand eller med AirDrop til computeren.</p>'
            },
            {
                h2: 'Hvis noget går galt',
                html: `<ul>
<li><strong>Filen har ingen lyd.</strong> Selve videoen har intet lydspor – det sker med skærmoptagelser uden mikrofon. Tjek videoen i Fotos først.</li>
<li><strong>Videoen ligger i iCloud.</strong> Fotos henter originalen først – vent, til det er færdigt.</li>
<li><strong>Du skal kun bruge 20 sekunder.</strong> Beskær før udtræk – se <a href="/da/guides/trim-audio-from-video-iphone/">sådan klipper du en del af lyden</a>.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Kan man udtrække lyd fra video på iPhone gratis?', a: `Ja. ${APP} er gratis at hente, og det grundlæggende lydudtræk er også gratis. Ekstra funktioner fås via køb i appen.` },
            { q: 'Mister man kvalitet, når man udtrækker lyden?', a: 'Appen gemmer videoens lydspor som MP3 eller M4A i høj kvalitet. Lyden bliver ikke bedre end originalen, men den lyder som når du afspiller videoen.' },
            { q: 'Kan man udtrække lyd fra en lang video?', a: 'Ja. Forelæsninger, koncerter og møder behandles på samme måde, det tager bare lidt længere. Skal du kun bruge en del, så beskær først.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'trim-audio-from-video-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Udtræk lyd fra video på iPhone', text: 'Metoden med fire tryk – fra Fotos eller via Del.' }
    },
    {
        slug: 'convert-video-to-mp3-iphone',
        keyword: 'konverter video til mp3 iphone',
        eyebrow: 'Video til MP3',
        title: 'Sådan konverterer du video til MP3 på iPhone – gratis',
        description: 'Konverter enhver video fra iPhone til MP3 på få sekunder. Virker fra Fotos, filerne bliver på enheden, og du kan beskære før eksport. Trin-for-trin-guide.',
        h1: 'Sådan konverterer du video til MP3 på iPhone',
        answer: `Åbn videoen i Fotos, tryk på Del, og vælg »Udtræk lyd« (${APP}). Beskær efter behov, tryk på »Udtræk lyd«, og gem som MP3. Filen bliver på iPhone – du kan sende den til Filer, med AirDrop eller til en hvilken som helst app. Ingen computer eller konto er nødvendig.`,
        intro: '<p>MP3 er det mest kompatible lydformat: det afspilles i enhver bil, på enhver computer og i ethvert redigeringsprogram. Sådan konverterer du video til MP3 uden at slippe iPhone.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Udtræk som MP3', text: 'Tryk på »Udtræk lyd«, og vælg formatet MP3. Konverteringen fra video til MP3 sker direkte på iPhone.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'Hvorfor en app og ikke en onlinekonverter?',
                html: '<p>Onlinekonvertere kræver, at du uploader hele videoen, venter i kø og henter MP3-filen igen – langsomt på mobildata og risikabelt for private videoer. Appen virker offline, beholder filen på enheden og lader dig beskære optagelsen før konvertering. Detaljeret sammenligning: <a href="/da/guides/extract-audio-online-vs-app/">online eller app</a>.</p>'
            },
            {
                h2: 'Hvilke videoer kan konverteres til MP3?',
                html: '<p>Alt, som iPhone kan afspille: optagelser fra kameraet (<a href="/da/guides/mov-to-mp3-iphone/">MOV</a>), hentede videoer (<a href="/da/guides/mp4-to-mp3-iphone/">MP4</a>), <a href="/da/guides/screen-recording-to-audio-iphone/">skærmoptagelser</a> og videoer fra Beskeder, Messenger, WhatsApp og AirDrop.</p>'
            },
            {
                h2: 'Hvad du kan gøre med MP3-filen',
                html: `<ul>
<li>Gemme den i <strong>Filer</strong> og lytte offline.</li>
<li>Sende den til computeren med <strong>AirDrop</strong>.</li>
<li>Lave 30 sekunder om til en <a href="/da/guides/video-to-ringtone-iphone/">ringetone</a>.</li>
<li>Føje den til GarageBand, CapCut eller et podcastprogram.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Kan iPhone konvertere video til MP3 uden en app?', a: 'Ikke direkte. Genveje kan kun gemme lyd som M4A. Til MP3 på iPhone skal du bruge en app eller et website.' },
            { q: 'Er konvertering til MP3 gratis?', a: `Ja, den grundlæggende konvertering i ${APP} er gratis. Ekstra funktioner fås via køb i appen.` },
            { q: 'Skal man have internet for at konvertere video til MP3?', a: 'Nej. Konverteringen sker på iPhone og virker offline. Kun videoer, der ligger i iCloud, skal hentes først.' }
        ],
        related: ['mp4-to-mp3-iphone', 'mov-to-mp3-iphone', 'video-to-m4a-iphone'],
        card: { title: 'Video til MP3 på iPhone', text: 'Enhver video til universel MP3.' }
    }
);

guides.push(
    {
        slug: 'mp4-to-mp3-iphone',
        keyword: 'mp4 til mp3 iphone',
        eyebrow: 'MP4 til MP3',
        title: 'MP4 til MP3 på iPhone: gratis konverter uden upload',
        description: 'Konverter MP4 til MP3 på iPhone gratis: åbn filen i Filer eller Fotos, og tryk på Del → »Udtræk lyd«. Offline, med beskæring. Kun fire enkle trin.',
        h1: 'Sådan konverterer du MP4 til MP3 på iPhone',
        answer: `For at konvertere MP4 til MP3 på iPhone skal du åbne filen i Filer eller Fotos, trykke på Del og vælge »Udtræk lyd«. Beskær eventuelt optagelsen i ${APP}, tryk på »Udtræk lyd«, vælg MP3, og gem. Gratis, på enheden, uden internet.`,
        intro: '<p>MP4-filer kommer typisk som overførsler, vedhæftede filer i mails eller via AirDrop og ligger derfor ofte i appen <strong>Filer</strong> i stedet for Fotos. Appen virker med begge.</p>',
        steps: [
            { name: 'Find MP4-filen', text: 'Åbn Filer (Overførsler, iCloud Drive eller »På min iPhone«) eller Fotos, og find MP4-filen.', image: 2 },
            { name: 'Send til »Udtræk lyd«', text: 'Hold fingeren på filen, og vælg Del → »Udtræk lyd«. MP4-filen åbner i appen.', image: 2 },
            STEP.trim,
            { name: 'Gem som MP3', text: 'Tryk på »Udtræk lyd«, vælg MP3, og derefter Del → Gem i Filer, så MP3-filen ligger ved siden af den oprindelige MP4.', image: 4 }
        ],
        sections: [
            {
                h2: 'Forskellen på MP4 og MP3',
                html: '<p>MP4 er en container med både billede og lyd; MP3 indeholder kun lyd. Når MP4 konverteres til MP3, bevares lydsporet, og billedet fjernes: filen bliver meget mindre og kan afspilles i enhver afspiller.</p>'
            },
            {
                h2: 'MP4 fra Messenger, WhatsApp og mail',
                html: '<p>Gem først den vedhæftede fil: Åbn videoen i chatten → Del → »Gem video« (i Fotos) eller »Gem i Filer«. Følg derefter trinene ovenfor. Konverter kun dine egne videoer eller videoer, du har rettigheder til.</p>'
            },
            {
                h2: 'Skal du bruge M4A?',
                html: '<p>Til ringetoner og Apples apps passer M4A bedre. Se <a href="/da/guides/video-to-m4a-iphone/">sådan gemmer du video som M4A på iPhone</a>.</p>'
            }
        ],
        faq: [
            { q: 'Kan man konvertere MP4 til MP3 gratis på iPhone?', a: `Ja. ${APP} konverterer MP4 til MP3 gratis direkte på enheden. Køb i appen låser op for ekstra funktioner.` },
            { q: 'Bliver MP3-filen mindre end MP4-filen?', a: 'Ja, som regel meget mindre: videosporet fjernes, og kun lyden er tilbage.' },
            { q: 'Kan man konvertere flere MP4-filer?', a: 'Ja. Konverter dem én ad gangen – alle MP3-filer gemmes i appens bibliotek.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'mov-to-mp3-iphone', 'extract-audio-online-vs-app'],
        card: { title: 'MP4 til MP3 på iPhone', text: 'Hentede MP4-filer fra Filer og Fotos til MP3.' }
    },
    {
        slug: 'mov-to-mp3-iphone',
        keyword: 'mov til mp3 iphone',
        eyebrow: 'MOV til MP3',
        title: 'MOV til MP3 på iPhone – lyd fra videoer fra iPhone-kameraet',
        description: 'Videoer fra iPhone-kameraet er MOV-filer. Konverter MOV til MP3 direkte på telefonen: vælg videoen, beskær, og tryk på »Udtræk lyd«. Gratis og offline.',
        h1: 'Sådan konverterer du MOV til MP3 på iPhone',
        answer: `Alle videoer fra iPhone-kameraet gemmes i MOV-format. For at få en MP3 skal du åbne videoen i Fotos, trykke på Del → »Udtræk lyd«, beskære efter behov og trykke på »Udtræk lyd« i ${APP}. MP3-filen gemmes på iPhone – ingen computer nødvendig.`,
        intro: '<p>MOV er Apples videoformat, som iPhone-kameraet optager i: koncerter, taler, en ven med guitaren, en stemme du vil gemme. Som MP3 kan du lytte til lyden hvor som helst.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Hvornår MOV til MP3 er nyttigt',
                html: `<ul>
<li>Gem lyden fra en koncert eller optræden, du har filmet.</li>
<li>Gør en skåltale eller tale til et lydminde.</li>
<li>Send en øveoptagelse til bandet uden en kæmpe video.</li>
<li>Lyt til en <a href="/da/guides/lecture-video-to-audio-iphone/">optaget forelæsning</a> på farten.</li>
</ul>`
            },
            {
                h2: 'HEVC, 4K og Filmisk-tilstand',
                html: '<p>Videoer i HEVC og 4K behandles på samme måde. Kun lyden konverteres, så selv meget store MOV-filer giver kompakte lydfiler.</p>'
            },
            {
                h2: 'Hvorfor du ikke behøver en computer',
                html: '<p>At overføre en MOV-fil på flere gigabyte til computeren for lydens skyld tager længere tid end at konvertere den på telefonen. Appen gør det dér, hvor videoen allerede ligger.</p>'
            }
        ],
        faq: [
            { q: 'Hvilket format optager iPhone video i?', a: 'iPhone-kameraet optager MOV-filer, typisk med HEVC- eller H.264-video og AAC-lyd.' },
            { q: 'Kan man konvertere MOV til MP3 uden kvalitetstab?', a: 'Appen bevarer kvaliteten fra den oprindelige optagelse: MP3-filen lyder som videoen, når den afspilles.' },
            { q: 'Kan man gemme MOV som M4A?', a: 'Ja, vælg formatet M4A. Det er praktisk til ringetoner og Apples apps.' }
        ],
        related: ['mp4-to-mp3-iphone', 'convert-video-to-mp3-iphone', 'save-music-from-video-iphone'],
        card: { title: 'MOV til MP3', text: 'Lyd fra videoer fra iPhone-kameraet.' }
    },
    {
        slug: 'video-to-m4a-iphone',
        keyword: 'video til m4a iphone',
        eyebrow: 'Video til M4A',
        title: 'Video til M4A på iPhone – MP4 og MOV til M4A gratis',
        description: 'Gem lyden fra en video som M4A på iPhone til ringetoner, GarageBand og Apples apps. Gratis, på enheden, med beskæring. MP4 eller MOV til M4A med fire tryk.',
        h1: 'Sådan gemmer du lyden fra en video som M4A på iPhone',
        answer: `For at konvertere video til M4A på iPhone skal du sende videoen fra Fotos eller Filer til »Udtræk lyd«, beskære efter ønske, trykke på »Udtræk lyd« og vælge M4A. ${APP} gemmer en M4A-fil (AAC), der passer til GarageBand, iMovie, musikafspillere og ringetoner.`,
        intro: '<p>M4A er Apples eget lydformat. Ved sammenlignelig kvalitet er det mindre end MP3, og det er netop det format, iPhone forventer til ringetoner og GarageBand-projekter.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Udtræk som M4A', text: 'Tryk på »Udtræk lyd«, og vælg formatet M4A.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'M4A eller MP3 – hvornår skal du vælge M4A',
                html: `<table class="guide-table"><thead><tr><th></th><th>M4A (AAC)</th><th>MP3</th></tr></thead><tbody>
<tr><td>Bedst til</td><td>iPhone, Mac, ringetoner, GarageBand</td><td>Alt andet – Windows, Android, bil</td></tr>
<tr><td>Filstørrelse</td><td>Mindre ved samme kvalitet</td><td>Lidt større</td></tr>
<tr><td>Kompatibilitet</td><td>Meget god</td><td>Universel</td></tr>
</tbody></table>`
            },
            {
                h2: 'Brug M4A som ringetone',
                html: '<p>I iOS 26 kan en M4A-fil på under 30 sekunder sættes som ringetone direkte fra Filer. Læs mere: <a href="/da/guides/video-to-ringtone-iphone/">sådan laver du en ringetone fra en video</a>.</p>'
            },
            {
                h2: 'Åbn i GarageBand eller iMovie',
                html: '<p>Gem M4A-filen i Filer, og importér den via filbrowseren i GarageBand eller iMovie – som baggrundsmusik, speak eller lydeffekt.</p>'
            }
        ],
        faq: [
            { q: 'Er M4A bedre end MP3?', a: 'Ved samme bitrate lyder M4A (AAC) som regel lige så godt eller bedre og fylder mindre. MP3 er kompatibel med flere enheder.' },
            { q: 'Kan man lave M4A med Genveje?', a: 'Ja, handlingen »Indkod medie« med indstillingen »Kun lyd« laver M4A. Men man kan ikke beskære lyden eller gemme som MP3 på den måde – det kan appen.' },
            { q: 'Er det gratis at gemme som M4A?', a: `Ja, det grundlæggende udtræk i ${APP} er gratis, inklusive eksport til M4A.` }
        ],
        related: ['video-to-ringtone-iphone', 'convert-video-to-mp3-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Video til M4A', text: 'Apples format til ringetoner og GarageBand.' }
    }
);

guides.push(
    {
        slug: 'extract-audio-without-app-iphone',
        keyword: 'udtræk lyd fra video iphone uden app',
        eyebrow: 'Genveje eller app',
        title: 'Sådan udtrækker du lyd fra video på iPhone uden en app',
        description: 'Lyd fra video på iPhone kan fås uden app – via Genveje og handlingen »Indkod medie«. Komplet opsætning, metodens begrænsninger og et hurtigere alternativ.',
        h1: 'Sådan udtrækker du lyd fra video på iPhone uden en app',
        answer: 'Uden tredjepartsapps kan lyden udtrækkes med Genveje: tilføj handlingen »Indkod medie«, slå »Kun lyd« til, tilføj »Gem fil«, og slå visning i Del-menuen til. Send derefter videoen til genvejen. Resultatet er kun M4A og uden beskæring; til MP3 og korte klip er appen hurtigere.',
        intro: '<p>Apples gratis app Genveje kan skille lyden fra videoen. Opsætningen tager et par minutter. Her er den præcise opskrift – og dens begrænsninger.</p>',
        steps: [
            { name: 'Opret en ny genvej', text: 'Åbn Genveje, tryk på +, og kald genvejen »Lyd fra video«.', image: 2 },
            { name: 'Tilføj »Indkod medie«', text: 'Tryk på »Tilføj handling«, søg efter »Indkod medie«, tilføj den, fold indstillingerne ud med pilen, og slå »Kun lyd« til.', image: 2 },
            { name: 'Tilføj »Gem fil«', text: 'Tilføj handlingen »Gem fil«, så resultatet havner i Filer.', image: 4 },
            { name: 'Vis i Del-menuen', text: 'Åbn genvejens detaljer (i-ikonet), slå »Vis på delingsark« til, og tillad typen »Medier«. Send nu en video fra Fotos, og vælg genvejen.', image: 4 }
        ],
        sections: [
            {
                h2: 'Begrænsninger ved metoden med Genveje',
                html: `<ul>
<li><strong>Kun M4A</strong> – du kan ikke få MP3.</li>
<li><strong>Ingen beskæring</strong> – hele lydsporet gemmes altid.</li>
<li><strong>Intet bibliotek</strong> – filerne havner i Filer og skal findes og omdøbes manuelt.</li>
<li>Ved lange videoer kan genvejen stoppe uden en forståelig fejl.</li>
</ul>`
            },
            {
                h2: 'Alternativet med ét tryk',
                html: `<p>${APP} gør det samme, men med beskæring, valg mellem MP3 og M4A og et bibliotek med alle udtrukne filer. Appen ligger også direkte i Del-menuen, så det er ikke langsommere – og du skal ikke bygge noget.</p>`
            },
            {
                h2: 'Andre metoder uden app',
                html: '<p>Du kan også skille lyden fra i iMovie eller GarageBand, men der er flere trin og færre eksportformater. Websites virker også, men så skal videoen uploades – se <a href="/da/guides/extract-audio-online-vs-app/">online eller app</a>.</p>'
            }
        ],
        faq: [
            { q: 'Har iPhone en indbygget måde at udtrække lyd på?', a: 'Fotos har ingen særskilt knap. Den nærmeste indbyggede mulighed er handlingen »Indkod medie« med indstillingen »Kun lyd« i appen Genveje.' },
            { q: 'Hvilket format gemmer genvejen lyden i?', a: 'M4A. Det er ikke muligt at gemme som MP3 med Genveje.' },
            { q: 'Kan man beskære lyden med en genvej?', a: `Ikke på en nem måde. Brug en app med tidslinje til beskæring, for eksempel ${APP}.` }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-online-vs-app', 'video-to-m4a-iphone'],
        card: { title: 'Uden app (Genveje)', text: 'Den gratis opskrift og dens grænser.' }
    },
    {
        slug: 'extract-audio-online-vs-app',
        keyword: 'udtræk lyd fra video online',
        eyebrow: 'Online eller app',
        title: 'Udtræk lyd fra video online eller med en app på iPhone?',
        description: 'Udtræk lyd fra video online eller med en app? Vi sammenligner privatliv, hastighed, grænser og beskæring på iPhone – og hvad du vælger, når videoen er på telefonen.',
        h1: 'Udtræk lyd fra video online eller med en app: hvad skal du vælge på iPhone',
        answer: `Onlinetjenester virker på alle enheder, men kræver, at du uploader hele videoen, venter på behandlingen og henter resultatet – langsomt på mobildata og usikkert for private optagelser. På iPhone er en app som ${APP} hurtigere, virker offline, beholder videoen på enheden og kan beskære lyden.`,
        intro: '<p>Søger du på »udtræk lyd fra video online«, finder du snesevis af gratis websites. På en bærbar med hurtigt internet er de praktiske. På iPhone ser det anderledes ud.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Sammenligning',
                html: `<table class="guide-table"><thead><tr><th></th><th>Onlinetjeneste</th><th>${APP}</th></tr></thead><tbody>
<tr><td>Privatliv</td><td>Videoen uploades til en fremmed server</td><td>Bliver på iPhone</td></tr>
<tr><td>Hastighed</td><td>Upload + kø + download</td><td>Sekunder, på enheden</td></tr>
<tr><td>Uden internet</td><td>Nej</td><td>Ja</td></tr>
<tr><td>Størrelsesgrænser</td><td>Ofte på gratisplaner</td><td>Kun iPhones lagerplads</td></tr>
<tr><td>Beskæring</td><td>Nogle gange</td><td>Indbygget tidslinje</td></tr>
<tr><td>Reklamer og pop op-vinduer</td><td>Ofte</td><td>Ingen webreklamer</td></tr>
<tr><td>Pris</td><td>Gratis med begrænsninger</td><td>Grundfunktioner gratis</td></tr>
</tbody></table>`
            },
            {
                h2: 'Hvornår en onlinetjeneste giver mening',
                html: '<p>Sidder du ved en Windows-computer, og videoen allerede ligger der, er en pålidelig onlinekonverter fin. Upload ikke noget privat: familievideoer, arbejdsmøder eller kundemateriale.</p>'
            },
            {
                h2: 'Hvornår appen er bedre',
                html: '<p>Når videoen ligger på iPhone, vinder appen: Du skal ikke uploade den over mobilnettet, vente og hente resultatet, og du kan klippe præcis det stykke ud, du skal bruge.</p>'
            }
        ],
        faq: [
            { q: 'Er det sikkert at udtrække lyd fra video online?', a: 'Det afhænger af websitet. Videoen uploades til en tredjepartsserver, så undgå det med private optagelser. Apps, der arbejder på enheden, uploader ingenting.' },
            { q: 'Kan man udtrække lyd gratis på iPhone uden at uploade?', a: `Ja. ${APP} konverterer videoer gratis direkte på enheden, og videoen sendes ingen steder hen.` },
            { q: 'Hvorfor er onlinekonvertering på telefonen så langsom?', a: 'Hele videoen skal uploades først. Videoer fra telefonen er store, og uploadhastigheden på mobilnettet er typisk meget lavere end downloadhastigheden.' }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-without-app-iphone', 'mp4-to-mp3-iphone'],
        card: { title: 'Online eller app', text: 'Privatliv, hastighed og grænser – sammenlignet.' }
    },
    {
        slug: 'save-music-from-video-iphone',
        keyword: 'udtræk musik fra video iphone',
        eyebrow: 'Musik',
        title: 'Sådan udtrækker du musik fra video på iPhone (MP3, M4A)',
        description: 'Gem en sang eller baggrundsmusik fra en video på iPhone som MP3 eller M4A. Beskær præcist efter nummeret, lyt offline, del. Kort guide med skærmbilleder.',
        h1: 'Sådan udtrækker du musik fra en video på iPhone',
        answer: `For at udtrække musik fra en video på iPhone skal du åbne videoen i Fotos, trykke på Del → »Udtræk lyd«, markere sangen med markørerne og trykke på »Udtræk lyd« i ${APP}. Musikken gemmes som MP3 eller M4A – lyt offline i Filer, eller send den til en hvilken som helst app.`,
        intro: '<p>Sangen fra brylluppet, en vens cover, musikken fra din egen redigering – nogle gange er lyden det mest værdifulde i en video. Sådan gemmer du den som en separat musikfil.</p>',
        steps: [STEP.share, { name: 'Markér sangen', text: 'Tryk på »Beskær video«, og træk de gule markører, så kun sangen er tilbage. Lyt til starten og slutningen.', image: 3 }, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Sådan får du den bedste lyd',
                html: `<ul>
<li>Klip snak og klapsalver af i starten og slutningen.</li>
<li>MP3 til bilen og ældre afspillere, M4A til Apple-enheder.</li>
<li>Omdøb filen i Filer (hold fingeren på den → »Omdøb«), så du nemt finder den igen.</li>
</ul>`
            },
            {
                h2: 'Om ophavsret',
                html: '<p>Gem musik fra dine egne videoer eller videoer, du har rettigheder til. Kommercielle sange er beskyttet af ophavsret: en privat kopi af din egen optagelse er i orden, at offentliggøre andres musik er ikke.</p>'
            },
            {
                h2: 'Brug den som ringetone',
                html: '<p>Har du fundet dine yndlings-30 sekunder? <a href="/da/guides/video-to-ringtone-iphone/">Lav dem til en ringetone</a>.</p>'
            }
        ],
        faq: [
            { q: 'Hvordan får man en sang ud af en video på iPhone?', a: `Send videoen til ${APP}, markér sangen ved beskæringen, og tryk på »Udtræk lyd«. Sangen gemmes som lydfil.` },
            { q: 'Kan man føje den udtrukne sang til Apple Music?', a: 'Appen Musik på iPhone importerer ikke lokale filer direkte. Behold filen i Filer, eller synkroniser via Mac eller pc.' },
            { q: 'Kan man udtrække musik fra en video fra Messenger eller Beskeder?', a: 'Ja. Gem først videoen i Fotos eller Filer, og udtræk så lyden.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-ringtone-iphone', 'mov-to-mp3-iphone'],
        card: { title: 'Udtræk musik fra video', text: 'Behold sangen, drop billedet.' }
    }
);

guides.push(
    {
        slug: 'trim-audio-from-video-iphone',
        keyword: 'klip lyd fra video iphone',
        eyebrow: 'Beskæring',
        title: 'Sådan klipper du en del af lyden fra en video på iPhone',
        description: 'Skal du kun bruge 10 sekunders lyd? Beskær videoen på iPhone, og gem kun det stykke som MP3 eller M4A. Markører, forhåndslytning og eksport – gratis.',
        h1: 'Sådan udtrækker du kun en del af lyden fra en video på iPhone',
        answer: `For at klippe en del af lyden fra en video på iPhone skal du åbne den i ${APP}, trykke på »Beskær video«, trække de gule start- og slutmarkører rundt om det ønskede stykke, trykke på »Gem« og derefter på »Udtræk lyd«. Kun det valgte stykke gemmes som MP3 eller M4A.`,
        intro: '<p>Oftest skal du ikke bruge hele lydsporet, men et citat, et omkvæd eller en lydeffekt. Beskærer du først, får du et lille og rent klip.</p>',
        steps: [
            STEP.open,
            { name: 'Tryk på »Beskær video«', text: 'Tryk på »Beskær video« på udtræksskærmen for at åbne tidslinjen.', image: 2 },
            { name: 'Træk markørerne', text: 'Træk den venstre gule markør til starten og den højre til slutningen. Tiden for markeringen vises ved siden af. Lyt, og tryk på »Gem«.', image: 3 },
            { name: 'Udtræk og gem', text: 'Tryk på »Udtræk lyd« – kun den beskårne del eksporteres. Send den, eller gem den i Filer.', image: 4 }
        ],
        sections: [
            {
                h2: 'Tips til præcis beskæring',
                html: `<ul>
<li>Lad et halvt sekund være før og efter talen, så du ikke klipper ord af.</li>
<li>Til en ringetone skal du højst vælge 30 sekunder.</li>
<li>Skal du bruge flere stykker fra samme video? Gentag beskæringen for hvert – alle filer gemmes i biblioteket.</li>
</ul>`
            },
            {
                h2: 'Det klipper folk typisk ud',
                html: '<p>En enkelt sætning fra en tale, omkvædet i en sang, en lydeffekt til redigering, et barns første ord eller det vigtigste minut fra en lang mødeoptagelse.</p>'
            }
        ],
        faq: [
            { q: 'Kan man beskære lyden fra en video på iPhone?', a: `Ja. Beskær videoen til det ønskede stykke i ${APP}, og udtræk lyden – kun det stykke gemmes.` },
            { q: 'Ændrer beskæringen den oprindelige video?', a: 'Nej. Originalen i Fotos forbliver uændret, kun den eksporterede lydfil beskæres.' },
            { q: 'Kan man klippe flere stykker fra samme video?', a: 'Ja. Beskær og udtræk lyden igen for hvert stykke, du skal bruge.' }
        ],
        related: ['video-to-ringtone-iphone', 'save-music-from-video-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Klip en del af lyden', text: 'Beskær præcist på sekundet.' }
    },
    {
        slug: 'screen-recording-to-audio-iphone',
        keyword: 'lyd fra skærmoptagelse iphone',
        eyebrow: 'Skærmoptagelse',
        title: 'Sådan gemmer du lyden fra en skærmoptagelse på iPhone',
        description: 'Gør en skærmoptagelse fra iPhone til en MP3- eller M4A-lydfil. Hvorfor optagelsen er uden lyd, hvordan du klipper den rigtige del ud og gemmer lyden.',
        h1: 'Sådan gemmer du lyden fra en skærmoptagelse på iPhone',
        answer: `Skærmoptagelser fra iPhone gemmes i Fotos som videoer. For at få lyden skal du åbne optagelsen, trykke på Del → »Udtræk lyd«, beskære efter behov og trykke på »Udtræk lyd« i ${APP}. Er filen uden lyd, blev lyden aldrig optaget – slå mikrofonen til, før du optager.`,
        intro: '<p>Skærmoptagelse er en almindelig måde at gemme en talebesked, et opkald på højttaler eller et klip fra en app. Sådan beholder du kun lyden.</p>',
        steps: [
            { name: 'Find optagelsen i Fotos', text: 'Skærmoptagelser findes i Fotos → Medietyper → Skærmoptagelser.', image: 2 },
            { name: 'Send til »Udtræk lyd«', text: 'Åbn optagelsen, tryk på Del, og vælg »Udtræk lyd«.', image: 2 },
            STEP.trim,
            { name: 'Udtræk og gem', text: 'Tryk på »Udtræk lyd«, og gem MP3- eller M4A-filen i Filer.', image: 4 }
        ],
        sections: [
            {
                h2: 'Hvorfor er skærmoptagelsen uden lyd?',
                html: `<ul>
<li><strong>Mikrofonen er slået fra:</strong> Hold fingeren på knappen Skærmoptagelse i Kontrolcenter, og slå »Mikrofon« til, så din stemme optages.</li>
<li><strong>Lydløs tilstand:</strong> Nogle apps slår lyden fra i lydløs tilstand.</li>
<li><strong>Beskyttet indhold:</strong> Mange streamingtjenester blokerer lyden ved skærmoptagelse – det er en begrænsning, der ikke kan omgås.</li>
</ul>`
            },
            {
                h2: 'Respektér privatlivet',
                html: '<p>Optag og gem kun opkald og samtaler med samtykke fra alle deltagere og i overensstemmelse med lovgivningen, hvor du bor.</p>'
            }
        ],
        faq: [
            { q: 'Kan man konvertere en skærmoptagelse til MP3?', a: 'Ja. En skærmoptagelse er en almindelig video, så lyden kan gemmes som MP3 eller M4A.' },
            { q: 'Hvor ligger skærmoptagelser på iPhone?', a: 'I appen Fotos under Medietyper → Skærmoptagelser.' },
            { q: 'Hvorfor har skærmoptagelsen ingen lyd?', a: 'Mikrofonen var slået fra, eller appen blokerer lydoptagelse. Tjek, at optagelsen afspilles med lyd, før du udtrækker.' }
        ],
        related: ['extract-audio-from-video-iphone', 'trim-audio-from-video-iphone', 'lecture-video-to-audio-iphone'],
        card: { title: 'Lyd fra skærmoptagelse', text: 'Gem lyden, og find ud af, hvorfor den mangler.' }
    }
);

guides.push(
    {
        slug: 'lecture-video-to-audio-iphone',
        keyword: 'forelæsning video til lyd',
        eyebrow: 'Studier',
        title: 'Sådan gør du en videoforelæsning til lyd (MP3) på iPhone',
        description: 'Gør optagede forelæsninger, webinarer og oplæg til MP3 på iPhone, og lær på farten. Små filer, offline lytning, nem deling. Trin-for-trin-guide.',
        h1: 'Sådan gør du en videoforelæsning til lyd på iPhone',
        answer: `For at gøre en videoforelæsning til lyd skal du åbne optagelsen i Fotos eller Filer, trykke på Del → »Udtræk lyd« og derefter på »Udtræk lyd« i ${APP}. Gem MP3-filen i Filer, og lyt offline – på farten, i fitnesscentret eller med slukket skærm, og den fylder langt mindre.`,
        intro: '<p>Ved en forelæsning er det vigtigste, hvad der bliver sagt, ikke hvad der bliver vist. Laver du forelæsningsvideoen om til lyd, får du en podcast, du kan genhøre hvor som helst.</p>',
        steps: [
            STEP.share,
            { name: 'Fjern intro og pauser (valgfrit)', text: 'Tryk på »Beskær video« for at fjerne ventetiden før start og den spørgerunde, du ikke har brug for.', image: 3 },
            STEP.extract,
            { name: 'Gem i mappen »Forelæsninger«', text: 'Tryk på Del → Gem i Filer, og opret en mappe til hvert fag, så du hurtigt finder optagelserne.', image: 4 }
        ],
        sections: [
            {
                h2: 'Hvorfor det er praktisk at lære med lyd',
                html: `<ul>
<li><strong>Små filer:</strong> En time lyd fylder langt mindre end en time video.</li>
<li><strong>Slukket skærm:</strong> Lyt med låst telefon, og spar batteri.</li>
<li><strong>Hvor som helst:</strong> I toget, på en gåtur, i fitnesscentret – intet Wi‑Fi nødvendigt.</li>
</ul>`
            },
            {
                h2: 'Lav det om til noter',
                html: '<p>Har du brug for tekst? Importér lyden i den transskriptionsapp, du allerede bruger, og søg i teksten.</p>'
            },
            {
                h2: 'Tjek reglerne',
                html: '<p>Mange uddannelser tillader, at man optager forelæsninger til eget brug, men ikke at man deler dem. Tjek fagets regler, før du optager eller deler en forelæsning.</p>'
            }
        ],
        faq: [
            { q: 'Kan man lytte til video på iPhone med slukket skærm?', a: 'De fleste videoafspillere sætter på pause, når telefonen låses. Konverterer du videoen til MP3, kan du lytte med slukket skærm i Filer eller en hvilken som helst lydafspiller.' },
            { q: 'Kan en forelæsning på en time bruges?', a: 'Ja. Lange optagelser behandles på samme måde, det tager bare lidt længere.' },
            { q: 'Kan man konvertere optagelser fra Zoom og webinarer?', a: 'Ja, så snart MP4-optagelsen ligger i Fotos eller Filer på iPhone.' }
        ],
        related: ['screen-recording-to-audio-iphone', 'mp4-to-mp3-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Videoforelæsning til lyd', text: 'Lær på farten med kompakte MP3-filer.' }
    },
    {
        slug: 'video-to-ringtone-iphone',
        keyword: 'lav ringetone fra video iphone',
        eyebrow: 'Ringetoner',
        title: 'Sådan laver du en ringetone fra video på iPhone (iOS 26)',
        description: 'Gør enhver video til en ringetone til iPhone: beskær lyden til 30 sekunder, gem i Filer, og tryk på Del → »Brug som ringetone«. iOS 26 og GarageBand.',
        h1: 'Sådan laver du en ringetone fra en video på iPhone',
        answer: `For at lave en ringetone fra en video skal du åbne den i ${APP}, beskære til højst 30 sekunder, udtrække lyden som M4A eller MP3 og gemme den i Filer. I iOS 26 holder du fingeren på filen i Filer og trykker på Del → »Brug som ringetone«. På ældre iOS-versioner importerer du lyden i GarageBand og eksporterer den som ringetone.`,
        intro: '<p>Latter, en sang fra festen, en hund der gør – enhver lyd fra dine videoer kan blive en ringetone. I iOS 26 er det nemt, når du har en lydfil.</p>',
        steps: [
            STEP.share,
            { name: 'Beskær til 30 sekunder', text: 'Tryk på »Beskær video«, og vælg højst 30 sekunder – det er grænsen for en ringetone.', image: 3 },
            { name: 'Udtræk og gem i Filer', text: 'Tryk på »Udtræk lyd« (M4A eller MP3), og derefter Del → Gem i Filer.', image: 4 },
            { name: 'Brug som ringetone', text: 'Hold fingeren på lydfilen i Filer, og tryk på Del → »Brug som ringetone« (iOS 26). Tjek det i Indstillinger → Lyde og haptik → Ringetone.', image: 4 }
        ],
        sections: [
            {
                h2: 'På iOS 18: metoden med GarageBand',
                html: `<ol>
<li>Udtræk og beskær lyden som beskrevet ovenfor, og gem den i Filer.</li>
<li>Åbn GarageBand, opret et projekt med »Lydoptager«, og skift til sporoversigten.</li>
<li>Åbn loopbrowseren → Filer → »Gennemse emner fra appen Filer«, og træk lyden ind på sporet.</li>
<li>Gå tilbage til »Mine sange«, hold fingeren på projektet → Del → Ringetone → Eksporter.</li>
</ol>`
            },
            {
                h2: 'Hvorfor »Brug som ringetone« mangler',
                html: `<ul>
<li>Filen er længere end 30 sekunder – beskær den igen.</li>
<li>Filen er ikke i MP3- eller M4A-format.</li>
<li>iPhone kører endnu ikke iOS 26 – brug GarageBand.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Hvor lang kan en ringetone på iPhone være?', a: 'Egne ringetoner fra lydfiler kan højst vare 30 sekunder.' },
            { q: 'Hvilket format skal en ringetone på iPhone have?', a: 'I iOS 26 kan MP3- eller M4A-filer på under 30 sekunder sættes som ringetone via »Brug som ringetone«.' },
            { q: 'Kan man sætte en video direkte som ringetone?', a: 'Nej. Udtræk først lyden fra videoen, og sæt derefter lydfilen som ringetone.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-m4a-iphone', 'save-music-from-video-iphone'],
        card: { title: 'Ringetone fra video', text: '»Brug som ringetone« i iOS 26 – i fire trin.' }
    }
);
