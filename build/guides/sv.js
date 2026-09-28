/**
 * Svenska guider → /sv/guides/<slug>/
 * Sluggarna är desamma som de engelska (build/guides/en.js) så att sidorna kopplas via hreflang.
 * Sökord — se avsnittet ”Svenska (SV)” i /keywords.md. Fältstruktur — som i en.js.
 * Skärmbilder: 1 omslag · 2 extraheringsskärm · 3 trimning · 4 Dela-meny · 5 bibliotek
 */

const APP = 'Extrahera ljud från video⁺';

const STEP = {
    open: {
        name: 'Öppna appen och välj en video',
        text: `Öppna ${APP} och välj en video från Bilder eller Filer. Snabbare: tryck på Dela på videon i Bilder och välj ”Extrahera ljud”.`,
        image: 2
    },
    share: {
        name: 'Skicka videon till appen',
        text: 'Öppna videon i Bilder eller Filer, tryck på Dela och välj ”Extrahera ljud”. Appen öppnas med videon redan inläst.',
        image: 2
    },
    trim: {
        name: 'Trimma önskad del (valfritt)',
        text: 'Tryck på ”Trimma video”, dra de gula markörerna till början och slutet av delen du vill ha, lyssna och tryck på ”Spara”.',
        image: 3
    },
    extract: {
        name: 'Tryck på ”Extrahera ljud”',
        text: 'Tryck på ”Extrahera ljud” – ljudspåret konverteras direkt på iPhone på några sekunder och inget laddas upp till internet.',
        image: 2
    },
    save: {
        name: 'Spara eller skicka filen',
        text: 'Den färdiga ljudfilen visas i biblioteket. Tryck på Dela för att spara den i Filer, skicka den med AirDrop eller till vilken app som helst.',
        image: 4
    }
};

const guides = [];
module.exports = guides;

guides.push(
    {
        slug: 'extract-audio-from-video-iphone',
        keyword: 'extrahera ljud från video iphone',
        eyebrow: 'Grunderna',
        title: 'Så extraherar du ljud från video på iPhone – steg för steg',
        description: 'Extrahera ljudet från vilken video som helst på iPhone med fyra tryck: välj video, trimma, tryck på ”Extrahera ljud” och spara som MP3 eller M4A. Gratis.',
        h1: 'Så extraherar du ljud från video på iPhone',
        answer: `För att extrahera ljud från en video på iPhone öppnar du ${APP}, väljer videon från Bilder, trimmar vid behov och trycker på ”Extrahera ljud”. Appen sparar ljudspåret som MP3 eller M4A på iPhone på några sekunder. Det är gratis och fungerar utan internet.`,
        intro: '<p>Bilder på iPhone har ingen knapp för ”spara bara ljudet”. Du kan bygga en genväg (se <a href="/sv/guides/extract-audio-without-app-iphone/">metoden utan app</a>) eller ladda upp videon till en webbplats, men båda är långsamma när du bara behöver ljudet. Här är det snabbaste sättet: en gratis app som fungerar direkt från Dela-menyn.</p>',
        steps: [STEP.open, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Det här behöver du',
                html: `<ul>
<li>En iPhone med iOS 18.6 eller senare.</li>
<li>${APP} – gratis på App Store (ca 23 MB).</li>
<li>En video med ljud: kamerainspelningar (MOV), nedladdade videor (MP4), skärminspelningar, videor från Meddelanden.</li>
</ul>`
            },
            {
                h2: 'Det snabbaste sättet – via Dela',
                html: '<p>Du behöver inte ens öppna appen. Öppna videon i <strong>Bilder</strong> eller <strong>Filer</strong>, tryck på <strong>Dela</strong>, bläddra i raden med appar och välj <strong>”Extrahera ljud”</strong>. Syns den inte, tryck på ”Mer” och lägg till den bland favoriterna – då finns den alltid till hands.</p>'
            },
            {
                h2: 'MP3 eller M4A – vad ska du välja?',
                html: '<p><strong>MP3</strong> spelas upp överallt: Windows, Android, bilstereo, webbplatser och videoredigerare. <strong>M4A</strong> (AAC) är Apples eget format: mindre vid samma kvalitet och perfekt för ringsignaler, GarageBand och iMovie. Är du osäker, välj MP3. Läs mer: <a href="/sv/guides/convert-video-to-mp3-iphone/">video till MP3</a> och <a href="/sv/guides/video-to-m4a-iphone/">video till M4A</a>.</p>'
            },
            {
                h2: 'Var sparas ljudet?',
                html: '<p>Varje extraherad fil visas i appens bibliotek med längd, storlek och datum. Därifrån trycker du på <strong>Dela → Spara i Filer</strong> för att lägga den i iCloud Drive eller ”På min iPhone”, eller skickar den till Messenger, WhatsApp, Anteckningar, GarageBand eller med AirDrop till datorn.</p>'
            },
            {
                h2: 'Om något går fel',
                html: `<ul>
<li><strong>Filen saknar ljud.</strong> Själva videon har inget ljudspår – det händer med skärminspelningar utan mikrofon. Kontrollera videon i Bilder först.</li>
<li><strong>Videon ligger i iCloud.</strong> Bilder hämtar originalet först – vänta tills det är klart.</li>
<li><strong>Du behöver bara 20 sekunder.</strong> Trimma före extraheringen – se <a href="/sv/guides/trim-audio-from-video-iphone/">så klipper du ut en del av ljudet</a>.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Kan man extrahera ljud från video på iPhone gratis?', a: `Ja. ${APP} är gratis att ladda ner och den grundläggande ljudextraheringen är också gratis. Extra funktioner finns via köp i appen.` },
            { q: 'Försämras kvaliteten när ljudet extraheras?', a: 'Appen sparar videons ljudspår som MP3 eller M4A i hög kvalitet. Ljudet blir inte bättre än originalet, men låter som när du spelar upp videon.' },
            { q: 'Kan man extrahera ljud från en lång video?', a: 'Ja. Föreläsningar, konserter och möten hanteras på samma sätt, det tar bara lite längre tid. Behöver du bara en del, trimma först.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'trim-audio-from-video-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Extrahera ljud från video på iPhone', text: 'Metoden med fyra tryck – från Bilder eller via Dela.' }
    },
    {
        slug: 'convert-video-to-mp3-iphone',
        keyword: 'konvertera video till mp3 iphone',
        eyebrow: 'Video till MP3',
        title: 'Så konverterar du video till MP3 på iPhone – gratis',
        description: 'Konvertera vilken iPhone-video som helst till MP3 på sekunder. Fungerar från Bilder, filerna stannar på enheten och du kan trimma före export.',
        h1: 'Så konverterar du video till MP3 på iPhone',
        answer: `Öppna videon i Bilder, tryck på Dela och välj ”Extrahera ljud” (${APP}). Trimma vid behov, tryck på ”Extrahera ljud” och spara som MP3. Filen stannar på iPhone – du kan skicka den till Filer, med AirDrop eller till vilken app som helst. Ingen dator eller konto behövs.`,
        intro: '<p>MP3 är det mest kompatibla ljudformatet: det spelas upp i alla bilar, på alla datorer och i alla redigeringsprogram. Så här konverterar du video till MP3 utan att släppa iPhonen.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Extrahera som MP3', text: 'Tryck på ”Extrahera ljud” och välj formatet MP3. Konverteringen från video till MP3 sker direkt på iPhone.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'Varför en app och inte en onlinekonverterare?',
                html: '<p>Onlinekonverterare kräver att du laddar upp hela videon, väntar i kö och laddar ner MP3-filen igen – långsamt på mobildata och riskabelt för privata videor. Appen fungerar offline, behåller filen på enheten och låter dig trimma inspelningen före konvertering. Utförlig jämförelse: <a href="/sv/guides/extract-audio-online-vs-app/">online eller app</a>.</p>'
            },
            {
                h2: 'Vilka videor kan konverteras till MP3?',
                html: '<p>Allt som iPhone kan spela upp: kamerainspelningar (<a href="/sv/guides/mov-to-mp3-iphone/">MOV</a>), nedladdade videor (<a href="/sv/guides/mp4-to-mp3-iphone/">MP4</a>), <a href="/sv/guides/screen-recording-to-audio-iphone/">skärminspelningar</a> och videor från Meddelanden, Messenger, WhatsApp och AirDrop.</p>'
            },
            {
                h2: 'Vad du kan göra med MP3-filen',
                html: `<ul>
<li>Spara den i <strong>Filer</strong> och lyssna offline.</li>
<li>Skicka den till datorn med <strong>AirDrop</strong>.</li>
<li>Göra om 30 sekunder till en <a href="/sv/guides/video-to-ringtone-iphone/">ringsignal</a>.</li>
<li>Lägga till den i GarageBand, CapCut eller en poddredigerare.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Kan iPhone konvertera video till MP3 utan app?', a: 'Inte direkt. Genvägar kan bara spara ljud som M4A. För MP3 på iPhone behövs en app eller en webbplats.' },
            { q: 'Är konvertering till MP3 gratis?', a: `Ja, den grundläggande konverteringen i ${APP} är gratis. Extra funktioner via köp i appen.` },
            { q: 'Behövs internet för att konvertera video till MP3?', a: 'Nej. Konverteringen sker på iPhone och fungerar offline. Bara videor som ligger i iCloud måste hämtas först.' }
        ],
        related: ['mp4-to-mp3-iphone', 'mov-to-mp3-iphone', 'video-to-m4a-iphone'],
        card: { title: 'Video till MP3 på iPhone', text: 'Vilken video som helst till universell MP3.' }
    }
);

guides.push(
    {
        slug: 'mp4-to-mp3-iphone',
        keyword: 'mp4 till mp3 iphone',
        eyebrow: 'MP4 till MP3',
        title: 'MP4 till MP3 på iPhone: gratis konverterare utan uppladdning',
        description: 'Konvertera MP4 till MP3 på iPhone gratis: öppna filen i Filer eller Bilder och tryck på Dela → ”Extrahera ljud”. Fungerar offline, med trimning.',
        h1: 'Så konverterar du MP4 till MP3 på iPhone',
        answer: `För att konvertera MP4 till MP3 på iPhone öppnar du filen i Filer eller Bilder, trycker på Dela och väljer ”Extrahera ljud”. Trimma eventuellt i ${APP}, tryck på ”Extrahera ljud”, välj MP3 och spara. Gratis, på enheten, utan internet.`,
        intro: '<p>MP4-filer kommer ofta som nedladdningar, e-postbilagor eller via AirDrop och ligger därför ofta i appen <strong>Filer</strong> i stället för Bilder. Appen fungerar med båda.</p>',
        steps: [
            { name: 'Hitta MP4-filen', text: 'Öppna Filer (Hämtade filer, iCloud Drive eller ”På min iPhone”) eller Bilder och leta upp MP4-filen.', image: 2 },
            { name: 'Skicka till ”Extrahera ljud”', text: 'Håll fingret på filen och välj Dela → ”Extrahera ljud”. MP4-filen öppnas i appen.', image: 2 },
            STEP.trim,
            { name: 'Spara som MP3', text: 'Tryck på ”Extrahera ljud”, välj MP3 och sedan Dela → Spara i Filer, så att MP3-filen hamnar bredvid den ursprungliga MP4-filen.', image: 4 }
        ],
        sections: [
            {
                h2: 'Skillnaden mellan MP4 och MP3',
                html: '<p>MP4 är en behållare med både bild och ljud; MP3 innehåller bara ljud. När MP4 konverteras till MP3 behålls ljudspåret och bilden tas bort: filen blir mycket mindre och kan spelas upp i alla spelare.</p>'
            },
            {
                h2: 'MP4 från Messenger, WhatsApp och e-post',
                html: '<p>Spara först bilagan: öppna videon i chatten → Dela → ”Spara video” (i Bilder) eller ”Spara i Filer”. Följ sedan stegen ovan. Konvertera bara dina egna videor eller videor du har rättigheter till.</p>'
            },
            {
                h2: 'Behöver du M4A?',
                html: '<p>För ringsignaler och Apples appar passar M4A bättre. Se <a href="/sv/guides/video-to-m4a-iphone/">så sparar du video som M4A på iPhone</a>.</p>'
            }
        ],
        faq: [
            { q: 'Kan man konvertera MP4 till MP3 gratis på iPhone?', a: `Ja. ${APP} konverterar MP4 till MP3 gratis direkt på enheten. Köp i appen låser upp extra funktioner.` },
            { q: 'Blir MP3-filen mindre än MP4-filen?', a: 'Ja, oftast mycket mindre: videospåret tas bort och bara ljudet finns kvar.' },
            { q: 'Kan man konvertera flera MP4-filer?', a: 'Ja. Konvertera dem en i taget – alla MP3-filer sparas i appens bibliotek.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'mov-to-mp3-iphone', 'extract-audio-online-vs-app'],
        card: { title: 'MP4 till MP3 på iPhone', text: 'Nedladdade MP4-filer från Filer och Bilder till MP3.' }
    },
    {
        slug: 'mov-to-mp3-iphone',
        keyword: 'mov till mp3 iphone',
        eyebrow: 'MOV till MP3',
        title: 'MOV till MP3 på iPhone – ljud från iPhone-kamerans videor',
        description: 'Videor från iPhone-kameran är MOV-filer. Konvertera MOV till MP3 direkt i telefonen: välj videon, trimma och tryck på ”Extrahera ljud”. Gratis och offline.',
        h1: 'Så konverterar du MOV till MP3 på iPhone',
        answer: `Alla videor från iPhone-kameran sparas i MOV-format. För att få en MP3 öppnar du videon i Bilder, trycker på Dela → ”Extrahera ljud”, trimmar vid behov och trycker på ”Extrahera ljud” i ${APP}. MP3-filen sparas på iPhone – ingen dator behövs.`,
        intro: '<p>MOV är Apples videoformat, som iPhone-kameran spelar in i: konserter, tal, en vän med gitarr, en röst du vill spara. Som MP3 kan du lyssna på ljudet var som helst.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'När MOV till MP3 är användbart',
                html: `<ul>
<li>Spara ljudet från en konsert eller ett uppträdande du filmat.</li>
<li>Gör ett tal eller en skål till ett ljudminne.</li>
<li>Skicka en repetitionsinspelning till bandet utan en jättestor video.</li>
<li>Lyssna på en <a href="/sv/guides/lecture-video-to-audio-iphone/">inspelad föreläsning</a> när du är på språng.</li>
</ul>`
            },
            {
                h2: 'HEVC, 4K och Filmiskt läge',
                html: '<p>HEVC- och 4K-videor hanteras på samma sätt. Bara ljudet konverteras, så även mycket stora MOV-filer ger kompakta ljudfiler.</p>'
            },
            {
                h2: 'Varför du inte behöver en dator',
                html: '<p>Att föra över en MOV-fil på flera gigabyte till datorn för ljudets skull tar längre tid än att konvertera den i telefonen. Appen gör det där videon redan finns.</p>'
            }
        ],
        faq: [
            { q: 'Vilket format spelar iPhone in video i?', a: 'iPhone-kameran spelar in MOV-filer, oftast med HEVC- eller H.264-video och AAC-ljud.' },
            { q: 'Kan man konvertera MOV till MP3 utan kvalitetsförlust?', a: 'Appen behåller kvaliteten från originalinspelningen: MP3-filen låter som videon vid uppspelning.' },
            { q: 'Kan man spara MOV som M4A?', a: 'Ja, välj formatet M4A. Det är praktiskt för ringsignaler och Apples appar.' }
        ],
        related: ['mp4-to-mp3-iphone', 'convert-video-to-mp3-iphone', 'save-music-from-video-iphone'],
        card: { title: 'MOV till MP3', text: 'Ljud från iPhone-kamerans videor.' }
    },
    {
        slug: 'video-to-m4a-iphone',
        keyword: 'video till m4a iphone',
        eyebrow: 'Video till M4A',
        title: 'Video till M4A på iPhone – MP4 och MOV till M4A gratis',
        description: 'Spara ljudet från en video som M4A på iPhone för ringsignaler, GarageBand och Apples appar. Gratis, på enheten, med trimning – MP4 eller MOV till M4A.',
        h1: 'Så sparar du ljudet från en video som M4A på iPhone',
        answer: `För att konvertera video till M4A på iPhone skickar du videon från Bilder eller Filer till ”Extrahera ljud”, trimmar om du vill, trycker på ”Extrahera ljud” och väljer M4A. ${APP} sparar en M4A-fil (AAC) som passar för GarageBand, iMovie, musikspelare och ringsignaler.`,
        intro: '<p>M4A är Apples eget ljudformat. Vid liknande kvalitet är det mindre än MP3, och det är just det format iPhone förväntar sig för ringsignaler och GarageBand-projekt.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Extrahera som M4A', text: 'Tryck på ”Extrahera ljud” och välj formatet M4A.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'M4A eller MP3 – när du ska välja M4A',
                html: `<table class="guide-table"><thead><tr><th></th><th>M4A (AAC)</th><th>MP3</th></tr></thead><tbody>
<tr><td>Bäst för</td><td>iPhone, Mac, ringsignaler, GarageBand</td><td>Allt annat – Windows, Android, bil</td></tr>
<tr><td>Filstorlek</td><td>Mindre vid samma kvalitet</td><td>Lite större</td></tr>
<tr><td>Kompatibilitet</td><td>Mycket bra</td><td>Universell</td></tr>
</tbody></table>`
            },
            {
                h2: 'Använd M4A som ringsignal',
                html: '<p>I iOS 26 kan en M4A-fil på under 30 sekunder ställas in som ringsignal direkt från Filer. Läs mer: <a href="/sv/guides/video-to-ringtone-iphone/">så gör du en ringsignal från en video</a>.</p>'
            },
            {
                h2: 'Öppna i GarageBand eller iMovie',
                html: '<p>Spara M4A-filen i Filer och importera den via filbläddraren i GarageBand eller iMovie – som bakgrundsmusik, speakerröst eller ljudeffekt.</p>'
            }
        ],
        faq: [
            { q: 'Är M4A bättre än MP3?', a: 'Vid samma bithastighet låter M4A (AAC) oftast lika bra eller bättre och tar mindre plats. MP3 är kompatibelt med fler enheter.' },
            { q: 'Kan man skapa M4A med Genvägar?', a: 'Ja, åtgärden ”Koda media” med alternativet ”Endast ljud” skapar M4A. Men då kan man inte trimma ljudet eller spara som MP3 – det kan appen.' },
            { q: 'Är det gratis att spara som M4A?', a: `Ja, den grundläggande extraheringen i ${APP} är gratis, inklusive export till M4A.` }
        ],
        related: ['video-to-ringtone-iphone', 'convert-video-to-mp3-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Video till M4A', text: 'Apples format för ringsignaler och GarageBand.' }
    }
);

guides.push(
    {
        slug: 'extract-audio-without-app-iphone',
        keyword: 'extrahera ljud från video iphone utan app',
        eyebrow: 'Genvägar eller app',
        title: 'Så extraherar du ljud från video på iPhone utan app',
        description: 'Ljudet från en video på iPhone kan tas ut utan app – med Genvägar och åtgärden ”Koda media”. Fullständig inställning, begränsningar och ett snabbare alternativ.',
        h1: 'Så extraherar du ljud från video på iPhone utan app',
        answer: 'Utan appar från tredje part kan ljudet extraheras med Genvägar: lägg till åtgärden ”Koda media”, slå på ”Endast ljud”, lägg till ”Spara fil” och slå på visning i Dela-menyn. Skicka sedan videon till genvägen. Resultatet blir bara M4A och utan trimning; för MP3 och korta klipp är appen snabbare.',
        intro: '<p>Apples gratisapp Genvägar kan skilja ljudet från videon. Inställningen tar några minuter. Här är det exakta receptet – och dess begränsningar.</p>',
        steps: [
            { name: 'Skapa en ny genväg', text: 'Öppna Genvägar, tryck på + och döp genvägen till ”Ljud från video”.', image: 2 },
            { name: 'Lägg till ”Koda media”', text: 'Tryck på ”Lägg till åtgärd”, sök efter ”Koda media”, lägg till den, fäll ut alternativen med pilen och slå på ”Endast ljud”.', image: 2 },
            { name: 'Lägg till ”Spara fil”', text: 'Lägg till åtgärden ”Spara fil” så att resultatet hamnar i Filer.', image: 4 },
            { name: 'Visa i Dela-menyn', text: 'Öppna genvägens detaljer (i-ikonen), slå på ”Visa i delningsbladet” och tillåt typen ”Media”. Skicka nu en video från Bilder och välj genvägen.', image: 4 }
        ],
        sections: [
            {
                h2: 'Begränsningar med Genvägar-metoden',
                html: `<ul>
<li><strong>Bara M4A</strong> – du får ingen MP3.</li>
<li><strong>Ingen trimning</strong> – hela ljudspåret sparas alltid.</li>
<li><strong>Inget bibliotek</strong> – filerna hamnar i Filer och måste letas upp och döpas om manuellt.</li>
<li>Med långa videor kan genvägen stanna utan begripligt felmeddelande.</li>
</ul>`
            },
            {
                h2: 'Alternativet med ett tryck',
                html: `<p>${APP} gör samma sak, men med trimning, val mellan MP3 och M4A och ett bibliotek med alla extraherade filer. Appen finns också direkt i Dela-menyn, så det går inte långsammare – och du behöver inte bygga något.</p>`
            },
            {
                h2: 'Andra sätt utan app',
                html: '<p>Du kan också skilja ljudet i iMovie eller GarageBand, men det kräver fler steg och ger färre exportformat. Webbplatser fungerar också, men då måste videon laddas upp – se <a href="/sv/guides/extract-audio-online-vs-app/">online eller app</a>.</p>'
            }
        ],
        faq: [
            { q: 'Har iPhone ett inbyggt sätt att extrahera ljud?', a: 'Bilder har ingen egen knapp. Det närmaste inbyggda alternativet är åtgärden ”Koda media” med ”Endast ljud” i appen Genvägar.' },
            { q: 'Vilket format sparar genvägen ljudet i?', a: 'M4A. Det går inte att spara som MP3 med Genvägar.' },
            { q: 'Kan man trimma ljudet med en genväg?', a: `Inte på ett enkelt sätt. Använd en app med tidslinje för trimning, till exempel ${APP}.` }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-online-vs-app', 'video-to-m4a-iphone'],
        card: { title: 'Utan app (Genvägar)', text: 'Det kostnadsfria receptet och dess gränser.' }
    },
    {
        slug: 'extract-audio-online-vs-app',
        keyword: 'extrahera ljud från video online',
        eyebrow: 'Online eller app',
        title: 'Extrahera ljud från video online eller med app på iPhone?',
        description: 'Extrahera ljud från video online eller med en app? Vi jämför integritet, hastighet, begränsningar och trimning på iPhone – och vad du ska välja.',
        h1: 'Extrahera ljud från video online eller med app: vad väljer du på iPhone',
        answer: `Onlinetjänster fungerar på alla enheter men kräver att du laddar upp hela videon, väntar på bearbetningen och laddar ner resultatet – långsamt på mobildata och osäkert för privata inspelningar. På iPhone är en app som ${APP} snabbare, fungerar offline, behåller videon på enheten och kan trimma ljudet.`,
        intro: '<p>Söker du på ”extrahera ljud från video online” hittar du dussintals gratiswebbplatser. På en laptop med snabbt internet är de smidiga. På iPhone ser det annorlunda ut.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Jämförelse',
                html: `<table class="guide-table"><thead><tr><th></th><th>Onlinetjänst</th><th>${APP}</th></tr></thead><tbody>
<tr><td>Integritet</td><td>Videon laddas upp till någon annans server</td><td>Stannar på iPhone</td></tr>
<tr><td>Hastighet</td><td>Uppladdning + kö + nedladdning</td><td>Sekunder, på enheten</td></tr>
<tr><td>Utan internet</td><td>Nej</td><td>Ja</td></tr>
<tr><td>Storleksgränser</td><td>Vanliga på gratisnivåer</td><td>Bara iPhones lagring</td></tr>
<tr><td>Trimning</td><td>Ibland</td><td>Inbyggd tidslinje</td></tr>
<tr><td>Annonser och popup-fönster</td><td>Ofta</td><td>Inga webbannonser</td></tr>
<tr><td>Pris</td><td>Gratis med begränsningar</td><td>Grundfunktioner gratis</td></tr>
</tbody></table>`
            },
            {
                h2: 'När en onlinetjänst är rimlig',
                html: '<p>Sitter du vid en Windows-dator och videon redan ligger där räcker en pålitlig onlinekonverterare. Ladda inte upp något privat: familjevideor, jobbmöten eller kundmaterial.</p>'
            },
            {
                h2: 'När appen är bättre',
                html: '<p>När videon ligger på iPhone vinner appen: du slipper ladda upp den via mobilnätet, vänta och ladda ner resultatet, och du kan klippa ut precis den del du behöver.</p>'
            }
        ],
        faq: [
            { q: 'Är det säkert att extrahera ljud från video online?', a: 'Det beror på webbplatsen. Videon laddas upp till en tredjepartsserver, så undvik det för privata inspelningar. Appar som arbetar på enheten laddar inte upp något.' },
            { q: 'Kan man extrahera ljud gratis på iPhone utan uppladdning?', a: `Ja. ${APP} konverterar videor gratis direkt på enheten, och videon skickas ingenstans.` },
            { q: 'Varför är onlinekonvertering på mobilen så långsam?', a: 'Hela videon måste laddas upp först. Videor från mobilen är stora och uppladdningshastigheten i mobilnätet är oftast mycket lägre än nedladdningshastigheten.' }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-without-app-iphone', 'mp4-to-mp3-iphone'],
        card: { title: 'Online eller app', text: 'Integritet, hastighet och gränser – jämförelse.' }
    },
    {
        slug: 'save-music-from-video-iphone',
        keyword: 'ta musik från video iphone',
        eyebrow: 'Musik',
        title: 'Så tar du musik från en video på iPhone (MP3 eller M4A)',
        description: 'Spara en låt eller bakgrundsmusik från en video på iPhone som MP3 eller M4A. Trimma exakt efter låten, lyssna offline och dela. Kort guide med skärmbilder.',
        h1: 'Så tar du musik från en video på iPhone',
        answer: `För att ta musik från en video på iPhone öppnar du videon i Bilder, trycker på Dela → ”Extrahera ljud”, markerar låten med markörerna och trycker på ”Extrahera ljud” i ${APP}. Musiken sparas som MP3 eller M4A – lyssna offline i Filer eller skicka den till vilken app som helst.`,
        intro: '<p>Låten från bröllopet, en väns cover, musiken från din egen redigering – ibland är ljudet det mest värdefulla i en video. Så sparar du det som en egen musikfil.</p>',
        steps: [STEP.share, { name: 'Markera låten', text: 'Tryck på ”Trimma video” och dra de gula markörerna så att bara låten finns kvar. Lyssna på början och slutet.', image: 3 }, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Så får du bästa ljud',
                html: `<ul>
<li>Klipp bort prat och applåder i början och slutet.</li>
<li>MP3 för bilen och äldre spelare, M4A för Apple-enheter.</li>
<li>Byt namn på filen i Filer (håll fingret på den → ”Byt namn”) så hittar du den lätt.</li>
</ul>`
            },
            {
                h2: 'Om upphovsrätt',
                html: '<p>Spara musik från dina egna videor eller videor du har rättigheter till. Kommersiella låtar skyddas av upphovsrätt: en privat kopia av din egen inspelning är okej, att publicera andras musik är det inte.</p>'
            },
            {
                h2: 'Använd den som ringsignal',
                html: '<p>Har du hittat dina favoritsekunder? <a href="/sv/guides/video-to-ringtone-iphone/">Gör dem till en ringsignal</a>.</p>'
            }
        ],
        faq: [
            { q: 'Hur får man ut en låt ur en video på iPhone?', a: `Skicka videon till ${APP}, markera låten vid trimningen och tryck på ”Extrahera ljud”. Låten sparas som ljudfil.` },
            { q: 'Kan man lägga till den extraherade låten i Apple Music?', a: 'Musik-appen på iPhone importerar inte lokala filer direkt. Behåll filen i Filer eller synka via Mac eller PC.' },
            { q: 'Kan man ta musik från en video från Messenger eller Meddelanden?', a: 'Ja. Spara först videon i Bilder eller Filer och extrahera sedan ljudet.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-ringtone-iphone', 'mov-to-mp3-iphone'],
        card: { title: 'Ta musik från video', text: 'Behåll låten, släpp bilden.' }
    }
);

guides.push(
    {
        slug: 'trim-audio-from-video-iphone',
        keyword: 'klippa ljud från video iphone',
        eyebrow: 'Trimning',
        title: 'Så klipper du ut en del av ljudet från en video på iPhone',
        description: 'Behöver du bara 10 sekunder ljud? Trimma videon på iPhone och spara bara den delen som MP3 eller M4A. Markörer, förhandslyssning och export – gratis.',
        h1: 'Så extraherar du bara en del av ljudet från en video på iPhone',
        answer: `För att klippa ut en del av ljudet från en video på iPhone öppnar du den i ${APP}, trycker på ”Trimma video”, drar de gula start- och slutmarkörerna runt önskad del, trycker på ”Spara” och sedan på ”Extrahera ljud”. Bara den valda delen sparas som MP3 eller M4A.`,
        intro: '<p>Oftast behöver du inte hela ljudspåret utan ett citat, en refräng eller en ljudeffekt. Trimmar du först får du ett litet och rent klipp.</p>',
        steps: [
            STEP.open,
            { name: 'Tryck på ”Trimma video”', text: 'Tryck på ”Trimma video” på extraheringsskärmen för att öppna tidslinjen.', image: 2 },
            { name: 'Dra markörerna', text: 'Dra den vänstra gula markören till början och den högra till slutet. Tiden för urvalet visas bredvid. Lyssna och tryck på ”Spara”.', image: 3 },
            { name: 'Extrahera och spara', text: 'Tryck på ”Extrahera ljud” – bara den trimmade delen exporteras. Skicka den eller spara den i Filer.', image: 4 }
        ],
        sections: [
            {
                h2: 'Tips för exakt trimning',
                html: `<ul>
<li>Lämna en halv sekund före och efter talet så att du inte klipper av ord.</li>
<li>För en ringsignal väljer du högst 30 sekunder.</li>
<li>Behöver du flera delar ur samma video? Upprepa trimningen för varje – alla filer sparas i biblioteket.</li>
</ul>`
            },
            {
                h2: 'Det här brukar man klippa ut',
                html: '<p>En mening ur ett tal, refrängen i en låt, en ljudeffekt för redigering, ett barns första ord eller den viktigaste minuten ur en lång mötesinspelning.</p>'
            }
        ],
        faq: [
            { q: 'Kan man trimma ljudet från en video på iPhone?', a: `Ja. Trimma videon till önskad del i ${APP} och extrahera ljudet – bara den delen sparas.` },
            { q: 'Ändrar trimningen originalvideon?', a: 'Nej. Originalet i Bilder förblir oförändrat; bara den exporterade ljudfilen trimmas.' },
            { q: 'Kan man klippa ut flera delar ur samma video?', a: 'Ja. Trimma och extrahera ljudet igen för varje del du behöver.' }
        ],
        related: ['video-to-ringtone-iphone', 'save-music-from-video-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Klipp ut en del av ljudet', text: 'Trimning på sekunden.' }
    },
    {
        slug: 'screen-recording-to-audio-iphone',
        keyword: 'ljud från skärminspelning iphone',
        eyebrow: 'Skärminspelning',
        title: 'Så sparar du ljudet från en skärminspelning på iPhone',
        description: 'Gör om en skärminspelning från iPhone till en MP3- eller M4A-ljudfil. Varför inspelningen saknar ljud, hur du klipper ut rätt del och sparar ljudet.',
        h1: 'Så sparar du ljudet från en skärminspelning på iPhone',
        answer: `Skärminspelningar från iPhone sparas i Bilder som videor. För att få ljudet öppnar du inspelningen, trycker på Dela → ”Extrahera ljud”, trimmar vid behov och trycker på ”Extrahera ljud” i ${APP}. Saknar filen ljud spelades ljudet aldrig in – slå på mikrofonen innan du spelar in.`,
        intro: '<p>Skärminspelning är ett vanligt sätt att spara ett röstmeddelande, ett samtal på högtalare eller ett klipp från en app. Så behåller du bara ljudet.</p>',
        steps: [
            { name: 'Hitta inspelningen i Bilder', text: 'Skärminspelningar finns i Bilder → Medietyper → Skärminspelningar.', image: 2 },
            { name: 'Skicka till ”Extrahera ljud”', text: 'Öppna inspelningen, tryck på Dela och välj ”Extrahera ljud”.', image: 2 },
            STEP.trim,
            { name: 'Extrahera och spara', text: 'Tryck på ”Extrahera ljud” och spara MP3- eller M4A-filen i Filer.', image: 4 }
        ],
        sections: [
            {
                h2: 'Varför saknar skärminspelningen ljud?',
                html: `<ul>
<li><strong>Mikrofonen är av:</strong> håll fingret på knappen Skärminspelning i Kontrollcenter och slå på ”Mikrofon” så att din röst spelas in.</li>
<li><strong>Ljudlöst läge:</strong> vissa appar stänger av sitt ljud i ljudlöst läge.</li>
<li><strong>Skyddat innehåll:</strong> många streamingtjänster blockerar ljudet vid skärminspelning – det är en begränsning som inte går att kringgå.</li>
</ul>`
            },
            {
                h2: 'Respektera integriteten',
                html: '<p>Spela in och spara samtal bara med samtycke från alla deltagare och i enlighet med lagarna där du bor.</p>'
            }
        ],
        faq: [
            { q: 'Kan man konvertera en skärminspelning till MP3?', a: 'Ja. En skärminspelning är en vanlig video, så ljudet kan sparas som MP3 eller M4A.' },
            { q: 'Var finns skärminspelningar på iPhone?', a: 'I appen Bilder under Medietyper → Skärminspelningar.' },
            { q: 'Varför har skärminspelningen inget ljud?', a: 'Mikrofonen var avstängd eller appen blockerar ljudinspelning. Kontrollera att inspelningen spelas upp med ljud innan du extraherar.' }
        ],
        related: ['extract-audio-from-video-iphone', 'trim-audio-from-video-iphone', 'lecture-video-to-audio-iphone'],
        card: { title: 'Ljud från skärminspelning', text: 'Spara ljudet och ta reda på varför det saknas.' }
    }
);

guides.push(
    {
        slug: 'lecture-video-to-audio-iphone',
        keyword: 'föreläsning video till ljud',
        eyebrow: 'Studier',
        title: 'Så gör du om en videoföreläsning till ljud (MP3) på iPhone',
        description: 'Gör om inspelade föreläsningar, webbinarier och föredrag till MP3 på iPhone och plugga på språng. Små filer, lyssning offline och enkel delning.',
        h1: 'Så gör du om en videoföreläsning till ljud på iPhone',
        answer: `För att göra om en videoföreläsning till ljud öppnar du inspelningen i Bilder eller Filer, trycker på Dela → ”Extrahera ljud” och sedan på ”Extrahera ljud” i ${APP}. Spara MP3-filen i Filer och lyssna offline – på resan, på gymmet eller med skärmen avstängd, med en mycket mindre fil.`,
        intro: '<p>På en föreläsning är det viktigaste vad som sägs, inte vad som visas. Gör du om föreläsningsvideon till ljud får du en podd som du kan lyssna på igen var som helst.</p>',
        steps: [
            STEP.share,
            { name: 'Ta bort intro och pauser (valfritt)', text: 'Tryck på ”Trimma video” för att ta bort väntan före starten och frågestunden du inte behöver.', image: 3 },
            STEP.extract,
            { name: 'Spara i mappen ”Föreläsningar”', text: 'Tryck på Dela → Spara i Filer och skapa en mapp för varje kurs så hittar du inspelningarna snabbt.', image: 4 }
        ],
        sections: [
            {
                h2: 'Varför det är smidigt att plugga med ljud',
                html: `<ul>
<li><strong>Små filer:</strong> en timme ljud tar mycket mindre plats än en timme video.</li>
<li><strong>Skärmen av:</strong> lyssna med låst telefon och spara batteri.</li>
<li><strong>Var som helst:</strong> på tunnelbanan, på promenaden, på gymmet – inget wifi behövs.</li>
</ul>`
            },
            {
                h2: 'Gör om det till anteckningar',
                html: '<p>Behöver du text? Importera ljudet i den transkriberingsapp du redan använder och sök i texten.</p>'
            },
            {
                h2: 'Kontrollera reglerna',
                html: '<p>Många lärosäten tillåter att föreläsningar spelas in för eget bruk men inte att de sprids. Kontrollera kursens regler innan du spelar in eller delar en föreläsning.</p>'
            }
        ],
        faq: [
            { q: 'Kan man lyssna på video på iPhone med skärmen avstängd?', a: 'De flesta videospelare pausar när telefonen låses. Konverterar du videon till MP3 kan du lyssna med skärmen avstängd i Filer eller i valfri ljudspelare.' },
            { q: 'Fungerar det med en föreläsning på en timme?', a: 'Ja. Långa inspelningar hanteras på samma sätt, det tar bara lite längre tid.' },
            { q: 'Kan man konvertera inspelningar från Zoom och webbinarier?', a: 'Ja, så snart MP4-inspelningen ligger i Bilder eller Filer på iPhone.' }
        ],
        related: ['screen-recording-to-audio-iphone', 'mp4-to-mp3-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Videoföreläsning till ljud', text: 'Plugga på språng med kompakta MP3-filer.' }
    },
    {
        slug: 'video-to-ringtone-iphone',
        keyword: 'ringsignal från video iphone',
        eyebrow: 'Ringsignaler',
        title: 'Så gör du en ringsignal från en video på iPhone (iOS 26)',
        description: 'Gör vilken video som helst till ringsignal på iPhone: trimma ljudet till 30 sekunder, spara i Filer och tryck på Dela → ”Använd som ringsignal”. iOS 26.',
        h1: 'Så gör du en ringsignal från en video på iPhone',
        answer: `För att göra en ringsignal från en video öppnar du den i ${APP}, trimmar till högst 30 sekunder, extraherar ljudet som M4A eller MP3 och sparar det i Filer. I iOS 26 håller du fingret på filen i Filer och trycker på Dela → ”Använd som ringsignal”. I äldre iOS-versioner importerar du ljudet i GarageBand och exporterar det som ringsignal.`,
        intro: '<p>Skratt, en låt från festen, en hund som skäller – vilket ljud som helst från dina videor kan bli en ringsignal. I iOS 26 är det enkelt när du har en ljudfil.</p>',
        steps: [
            STEP.share,
            { name: 'Trimma till 30 sekunder', text: 'Tryck på ”Trimma video” och välj högst 30 sekunder – det är gränsen för en ringsignal.', image: 3 },
            { name: 'Extrahera och spara i Filer', text: 'Tryck på ”Extrahera ljud” (M4A eller MP3) och sedan Dela → Spara i Filer.', image: 4 },
            { name: 'Använd som ringsignal', text: 'Håll fingret på ljudfilen i Filer och tryck på Dela → ”Använd som ringsignal” (iOS 26). Kontrollera i Inställningar → Ljud och haptik → Ringsignal.', image: 4 }
        ],
        sections: [
            {
                h2: 'På iOS 18: metoden med GarageBand',
                html: `<ol>
<li>Extrahera och trimma ljudet enligt ovan och spara det i Filer.</li>
<li>Öppna GarageBand, skapa ett projekt med ”Ljudinspelare” och växla till spårvyn.</li>
<li>Öppna loopbläddraren → Filer → ”Bläddra bland objekt från appen Filer” och dra ljudet till spåret.</li>
<li>Gå tillbaka till ”Mina låtar”, håll fingret på projektet → Dela → Ringsignal → Exportera.</li>
</ol>`
            },
            {
                h2: 'Varför ”Använd som ringsignal” saknas',
                html: `<ul>
<li>Filen är längre än 30 sekunder – trimma den igen.</li>
<li>Filen är inte i MP3- eller M4A-format.</li>
<li>iPhonen har inte iOS 26 än – använd GarageBand.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Hur lång kan en ringsignal på iPhone vara?', a: 'Egna ringsignaler från ljudfiler kan vara högst 30 sekunder.' },
            { q: 'Vilket format behöver en ringsignal på iPhone?', a: 'I iOS 26 kan MP3- eller M4A-filer under 30 sekunder ställas in som ringsignal via ”Använd som ringsignal”.' },
            { q: 'Kan man ställa in en video direkt som ringsignal?', a: 'Nej. Extrahera först ljudet från videon och ställ sedan in ljudfilen som ringsignal.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-m4a-iphone', 'save-music-from-video-iphone'],
        card: { title: 'Ringsignal från video', text: '”Använd som ringsignal” i iOS 26 – i fyra steg.' }
    }
);
