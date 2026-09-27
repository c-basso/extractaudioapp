/**
 * Ghiduri în română → /ro/guides/<slug>/
 * Slug-uri identice cu build/guides/en.js (legate prin hreflang). Cuvinte-cheie: secțiunea „Română (RO)” din /keywords.md.
 * Capturi: 1 copertă · 2 extragere · 3 decupare · 4 meniul Partajează · 5 bibliotecă
 */

const APP = 'Extract Audio from Video⁺';

const STEP = {
    open: {
        name: 'Deschide aplicația și alege un video',
        text: `Pornește ${APP} și alege un video din Poze sau Fișiere. Mai rapid: în Poze, atinge Partajează la videoclip și alege aplicația.`,
        image: 2
    },
    share: {
        name: 'Trimite videoclipul în aplicație',
        text: 'Deschide videoclipul în Poze sau Fișiere, atinge Partajează și alege aplicația. Se deschide cu videoclipul deja încărcat.',
        image: 2
    },
    trim: {
        name: 'Decupează porțiunea dorită (opțional)',
        text: 'Atinge „Decupează video”, trage marcajele galbene la începutul și sfârșitul porțiunii dorite, ascult-o și atinge „Salvează”.',
        image: 3
    },
    extract: {
        name: 'Atinge „Extrage audio”',
        text: 'Atinge „Extrage audio”. Pista audio este convertită pe iPhone în câteva secunde — nu se încarcă nimic pe internet.',
        image: 2
    },
    save: {
        name: 'Salvează sau partajează fișierul audio',
        text: 'Noul fișier audio apare în bibliotecă. Atinge Partajează pentru a-l salva în Fișiere, a-l trimite prin AirDrop sau în orice aplicație.',
        image: 4
    }
};

const guides = [];
module.exports = guides;

guides.push(
    {
        slug: 'extract-audio-from-video-iphone',
        keyword: 'cum extragi audio din video pe iphone',
        eyebrow: 'Ghid de bază',
        title: 'Cum extragi audio dintr-un video pe iPhone (ghid 2026)',
        description: 'Extrage sunetul din orice video pe iPhone în 4 atingeri: alege videoclipul, decupează, atinge „Extrage audio” și salvează ca MP3 sau M4A. Gratuit, fără upload.',
        h1: 'Cum extragi audio dintr-un video pe iPhone',
        answer: `Ca să extragi audio dintr-un video pe iPhone, deschide ${APP}, alege videoclipul din Poze, decupează-l dacă vrei și atinge „Extrage audio”. Aplicația salvează pista audio ca MP3 sau M4A pe iPhone în câteva secunde. E gratuită pentru început, funcționează offline și nu încarcă nimic.`,
        intro: '<p>Aplicația Poze nu are un buton „salvează doar sunetul”. Poți crea o scurtătură (vezi <a href="/ro/guides/extract-audio-without-app-iphone/">metoda fără aplicație</a>) sau poți încărca videoclipul pe un site, dar ambele sunt greoaie când vrei doar sunetul. Iată calea cea mai rapidă: o aplicație gratuită care funcționează direct din Partajează.</p>',
        steps: [STEP.open, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'De ce ai nevoie',
                html: `<ul>
<li>Un iPhone cu iOS 18.6 sau mai nou.</li>
<li>${APP}, gratuit în App Store (aproximativ 23 MB).</li>
<li>Un video cu sunet: filmări cu camera (MOV), descărcări (MP4), înregistrări de ecran sau videoclipuri din Mesaje.</li>
</ul>`
            },
            {
                h2: 'Cel mai rapid: din Partajează',
                html: '<p>Nici nu trebuie să deschizi aplicația. În <strong>Poze</strong> sau <strong>Fișiere</strong>, deschide videoclipul, atinge <strong>Partajează</strong>, derulează rândul de aplicații și alege aplicația. Dacă nu o vezi, atinge „Mai multe” și adaug-o o dată la favorite — de acum va fi mereu la îndemână.</p>'
            },
            {
                h2: 'MP3 sau M4A — ce alegi?',
                html: '<p><strong>MP3</strong> merge oriunde: Windows, Android, radioul mașinii, site-uri și programe de editare. <strong>M4A</strong> (AAC) este formatul Apple: mai mic la aceeași calitate, ideal pentru tonuri de apel, GarageBand și iMovie. Dacă nu ești sigur, alege MP3. Detalii în <a href="/ro/guides/convert-video-to-mp3-iphone/">video în MP3</a> și <a href="/ro/guides/video-to-m4a-iphone/">video în M4A</a>.</p>'
            },
            {
                h2: 'Unde ajunge fișierul audio?',
                html: '<p>Fiecare fișier extras apare în biblioteca aplicației cu durata, dimensiunea și data. De acolo atinge <strong>Partajează → Salvează în Fișiere</strong> ca să-l pui în iCloud Drive sau „Pe iPhone”, ori trimite-l pe WhatsApp, Mail, Notițe, GarageBand sau prin AirDrop pe Mac.</p>'
            },
            {
                h2: 'Rezolvarea problemelor',
                html: `<ul>
<li><strong>Fișierul e mut.</strong> Videoclipul nu are pistă audio — des întâlnit la înregistrările de ecran fără microfon. Redă mai întâi videoclipul în Poze.</li>
<li><strong>Videoclipul e în iCloud.</strong> Poze descarcă întâi originalul; așteaptă să se termine cercul de progres.</li>
<li><strong>Am nevoie doar de 20 de secunde.</strong> Decupează înainte de extragere — vezi <a href="/ro/guides/trim-audio-from-video-iphone/">cum extragi doar o parte din sunet</a>.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Extragerea audio din video pe iPhone e gratuită?', a: `Da. ${APP} se descarcă gratuit, iar extragerea de bază este gratuită. Achizițiile opționale din aplicație deblochează funcții extra.` },
            { q: 'Scade calitatea sunetului la extragere?', a: 'Aplicația convertește pista audio a videoclipului într-un MP3 sau M4A de calitate înaltă. Nu va suna mai bine decât originalul, dar la fel ca atunci când redai videoclipul.' },
            { q: 'Funcționează și cu videoclipuri lungi?', a: 'Da. Cursurile, concertele și ședințele merg la fel, doar durează puțin mai mult. Dacă ai nevoie de o parte, decupează întâi.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'trim-audio-from-video-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Extrage audio din video pe iPhone', text: 'Metoda în 4 atingeri, din Poze sau Partajează.' }
    },
    {
        slug: 'convert-video-to-mp3-iphone',
        keyword: 'video în mp3 iphone',
        eyebrow: 'Video în MP3',
        title: 'Cum transformi un video în MP3 pe iPhone — rapid și gratuit',
        description: 'Transformă orice video de pe iPhone în MP3 în câteva secunde cu un convertor gratuit. Direct din Poze, fără upload, cu decupare înainte de export. Vezi pașii.',
        h1: 'Cum transformi un video în MP3 pe iPhone',
        answer: `Deschide videoclipul în Poze, atinge Partajează și alege ${APP}. Decupează dacă e nevoie, atinge „Extrage audio” și exportă ca MP3. MP3-ul rămâne pe iPhone și îl poți salva în Fișiere, trimite prin AirDrop sau în orice aplicație. Fără calculator, fără upload, fără cont.`,
        intro: '<p>MP3 este cel mai compatibil format audio: merge în orice mașină, pe orice calculator și în orice program. Iată cum transformi orice video de pe iPhone în MP3 fără să lași telefonul din mână.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Extrage ca MP3', text: 'Atinge „Extrage audio” și alege MP3. Conversia are loc pe iPhone.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'De ce o aplicație și nu un convertor online?',
                html: '<p>Convertoarele online te obligă să încarci tot videoclipul, să aștepți și apoi să descarci din nou MP3-ul — lent pe date mobile și riscant pentru videoclipuri private. Aplicația funcționează offline, păstrează fișierul pe dispozitiv și decupează înainte de conversie. Comparație: <a href="/ro/guides/extract-audio-online-vs-app/">online sau aplicație</a>.</p>'
            },
            {
                h2: 'Ce videoclipuri poți transforma în MP3?',
                html: '<p>Tot ce redă iPhone-ul: filmări cu camera (<a href="/ro/guides/mov-to-mp3-iphone/">MOV</a>), clipuri descărcate (<a href="/ro/guides/mp4-to-mp3-iphone/">MP4</a>), <a href="/ro/guides/screen-recording-to-audio-iphone/">înregistrări de ecran</a> și videoclipuri primite prin Mesaje, WhatsApp sau AirDrop.</p>'
            },
            {
                h2: 'Ce faci cu MP3-ul',
                html: `<ul>
<li>Îl salvezi în <strong>Fișiere</strong> și îl asculți offline.</li>
<li>Îl trimiți pe Mac prin <strong>AirDrop</strong>.</li>
<li>Faci din 30 de secunde un <a href="/ro/guides/video-to-ringtone-iphone/">ton de apel</a>.</li>
<li>Îl imporți în GarageBand, CapCut sau un editor de podcast.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Poate iPhone-ul să transforme un video în MP3 fără aplicație?', a: 'Nu direct. Scurtăturile salvează sunetul doar ca M4A, nu MP3. Pentru MP3 pe iPhone ai nevoie de o aplicație de conversie sau de un site.' },
            { q: 'Conversia în MP3 este gratuită?', a: `Da, conversia de bază în ${APP} este gratuită. Achizițiile din aplicație adaugă funcții extra.` },
            { q: 'Am nevoie de Wi-Fi pentru a transforma un video în MP3?', a: 'Nu. Conversia are loc pe iPhone și funcționează offline. Doar videoclipurile din iCloud trebuie descărcate întâi.' }
        ],
        related: ['mp4-to-mp3-iphone', 'mov-to-mp3-iphone', 'video-to-m4a-iphone'],
        card: { title: 'Video în MP3', text: 'Orice video de pe iPhone ca MP3 universal.' }
    },
    {
        slug: 'mp4-to-mp3-iphone',
        keyword: 'mp4 în mp3 iphone',
        eyebrow: 'MP4 în MP3',
        title: 'Cum convertești MP4 în MP3 pe iPhone — gratuit, fără upload',
        description: 'Convertește gratuit MP4 în MP3 pe iPhone: deschide fișierul în Fișiere sau Poze, atinge Partajează și alege aplicația. Offline, cu decupare, în 4 pași.',
        h1: 'Cum convertești MP4 în MP3 pe iPhone',
        answer: `Ca să convertești MP4 în MP3 pe iPhone, deschide fișierul în Fișiere sau Poze, atinge Partajează și alege ${APP}. Decupează dacă vrei, atinge „Extrage audio”, alege MP3 și salvează. Gratuit, pe dispozitiv și fără internet.`,
        intro: '<p>Fișierele MP4 vin de obicei ca descărcări, atașamente de e-mail sau prin AirDrop, așa că stau adesea în aplicația <strong>Fișiere</strong>, nu în Poze. Aplicația lucrează cu ambele.</p>',
        steps: [
            { name: 'Găsește fișierul MP4', text: 'Deschide Fișiere (Descărcări, iCloud Drive sau „Pe iPhone”) sau Poze și găsește MP4-ul.', image: 2 },
            { name: 'Trimite-l în aplicație', text: 'Ține apăsat pe fișier, atinge Partajează și alege aplicația. MP4-ul se deschide în ea.', image: 2 },
            STEP.trim,
            { name: 'Salvează ca MP3', text: 'Atinge „Extrage audio”, alege MP3, apoi Partajează → Salvează în Fișiere ca să pui MP3-ul lângă MP4-ul original.', image: 4 }
        ],
        sections: [
            {
                h2: 'MP4 și MP3 într-o propoziție',
                html: '<p>MP4 este un container cu imagine <em>și</em> sunet; MP3 conține doar sunet. La conversie rămâne pista audio și dispare imaginea — fișierul devine mult mai mic și merge în orice player.</p>'
            },
            {
                h2: 'MP4 din WhatsApp, Telegram și e-mail',
                html: '<p>Salvează mai întâi atașamentul: în conversație deschide videoclipul → Partajează → „Salvează video” (în Poze) sau „Salvează în Fișiere”. Apoi urmează pașii de mai sus. Convertește doar videoclipuri care îți aparțin sau la care ai drepturi.</p>'
            },
            {
                h2: 'Preferi M4A?',
                html: '<p>Pentru tonuri de apel și aplicații Apple, M4A e alegerea mai bună. Vezi <a href="/ro/guides/video-to-m4a-iphone/">cum transformi un video în M4A pe iPhone</a>.</p>'
            }
        ],
        faq: [
            { q: 'Pot converti gratuit MP4 în MP3 pe iPhone?', a: `Da. ${APP} convertește gratuit MP4 în MP3 direct pe dispozitiv. Achizițiile din aplicație deblochează funcții extra.` },
            { q: 'Va fi MP3-ul mai mic decât MP4-ul?', a: 'Da, de obicei mult mai mic, pentru că pista video este eliminată și rămâne doar sunetul.' },
            { q: 'Pot converti mai multe fișiere MP4?', a: 'Da. Convertește-le pe rând — fiecare MP3 rămâne în biblioteca aplicației.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'mov-to-mp3-iphone', 'extract-audio-online-vs-app'],
        card: { title: 'MP4 în MP3', text: 'MP4 descărcate din Fișiere sau Poze în MP3.' }
    },
    {
        slug: 'mov-to-mp3-iphone',
        keyword: 'mov în mp3 iphone',
        eyebrow: 'MOV în MP3',
        title: 'MOV în MP3 pe iPhone — sunetul din filmările cu camera',
        description: 'Videoclipurile filmate cu iPhone-ul sunt fișiere MOV. Convertește MOV în MP3 direct pe telefon: alege clipul, decupează, atinge „Extrage audio”. Gratuit.',
        h1: 'Cum convertești MOV în MP3 pe iPhone',
        answer: `Orice video filmat cu camera iPhone-ului este un fișier MOV. Ca să-l convertești în MP3, deschide clipul în Poze, atinge Partajează, alege ${APP}, decupează dacă e nevoie și atinge „Extrage audio”. MP3-ul se salvează pe iPhone — fără calculator.`,
        intro: '<p>MOV este formatul video Apple și cel în care filmează camera ta: concerte, discursuri, un prieten la chitară, o voce pe care vrei s-o păstrezi. Ca MP3 îl asculți oriunde.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'La ce e bun MOV în MP3',
                html: `<ul>
<li>Păstrezi sunetul unui concert sau spectacol pe care l-ai filmat.</li>
<li>Salvezi un discurs sau un toast ca amintire audio.</li>
<li>Trimiți o repetiție trupei fără un fișier video uriaș.</li>
<li>Asculți un <a href="/ro/guides/lecture-video-to-audio-iphone/">curs înregistrat</a> pe drum.</li>
</ul>`
            },
            {
                h2: 'HEVC, 4K și modul Cinematic',
                html: '<p>Înregistrările HEVC și 4K se convertesc la fel. Se procesează doar sunetul, așa că și fișierele MOV foarte mari devin fișiere audio mici.</p>'
            },
            {
                h2: 'De ce nu pe calculator?',
                html: '<p>Să muți un MOV de câțiva gigabytes pe calculator doar ca să-i scoți sunetul durează mai mult decât conversia pe iPhone. Aplicația o face acolo unde e deja videoclipul.</p>'
            }
        ],
        faq: [
            { q: 'În ce format filmează iPhone-ul?', a: 'Camera iPhone-ului salvează fișiere MOV, de obicei cu video HEVC sau H.264 și audio AAC.' },
            { q: 'Pierd calitate când convertesc MOV în MP3?', a: 'Aplicația păstrează calitatea înregistrării originale — MP3-ul sună ca videoclipul la redare.' },
            { q: 'Pot converti MOV în M4A?', a: 'Da, alege formatul M4A. E potrivit pentru tonuri de apel și aplicații Apple.' }
        ],
        related: ['mp4-to-mp3-iphone', 'convert-video-to-mp3-iphone', 'save-music-from-video-iphone'],
        card: { title: 'MOV în MP3', text: 'Filmările cu camera, transformate în audio.' }
    }
);

guides.push(
    {
        slug: 'video-to-m4a-iphone',
        keyword: 'video în m4a iphone',
        eyebrow: 'Video în M4A',
        title: 'Cum transformi un video în M4A pe iPhone — MP4 și MOV în M4A',
        description: 'Salvează sunetul videoclipurilor ca M4A pentru tonuri de apel, GarageBand și aplicații Apple. Gratuit, pe dispozitiv, cu decupare, în 4 atingeri.',
        h1: 'Cum transformi un video în M4A pe iPhone',
        answer: `Ca să transformi un video în M4A pe iPhone, trimite-l din Poze sau Fișiere prin Partajează în ${APP}, decupează dacă vrei, atinge „Extrage audio” și alege M4A. Obții un fișier M4A (AAC) care merge în GarageBand, iMovie, playere audio și ca ton de apel.`,
        intro: '<p>M4A este formatul audio Apple. La o calitate asemănătoare e mai mic decât MP3 — și e exact formatul pe care iPhone-ul îl așteaptă pentru tonuri de apel și proiecte GarageBand.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Extrage ca M4A', text: 'Atinge „Extrage audio” și alege M4A.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'M4A sau MP3 — când alegi M4A',
                html: `<table class="guide-table"><thead><tr><th></th><th>M4A (AAC)</th><th>MP3</th></tr></thead><tbody>
<tr><td>Ideal pentru</td><td>iPhone, Mac, tonuri de apel, GarageBand</td><td>Restul: Windows, Android, mașină</td></tr>
<tr><td>Dimensiune</td><td>Mai mic la aceeași calitate</td><td>Puțin mai mare</td></tr>
<tr><td>Compatibilitate</td><td>Foarte bună</td><td>Universală</td></tr>
</tbody></table>`
            },
            {
                h2: 'Folosește M4A ca ton de apel',
                html: '<p>În iOS 26, un M4A mai scurt de 30 de secunde poate deveni ton de apel direct din Fișiere. Ghid complet: <a href="/ro/guides/video-to-ringtone-iphone/">ton de apel dintr-un video</a>.</p>'
            },
            {
                h2: 'Deschide-l în GarageBand sau iMovie',
                html: '<p>Salvează M4A-ul în Fișiere și importă-l din browserul de fișiere al GarageBand sau iMovie ca fundal muzical, voce din off sau efect sonor.</p>'
            }
        ],
        faq: [
            { q: 'Este M4A mai bun decât MP3?', a: 'La același bitrate, M4A (AAC) sună de obicei la fel sau mai bine și ocupă mai puțin. MP3 merge pe mai multe dispozitive.' },
            { q: 'Pot obține M4A cu Scurtături?', a: 'Da, acțiunea „Codifică media” cu „Doar audio” creează un M4A. Dar nu decupează și nu exportă MP3 — aplicația le face pe amândouă.' },
            { q: 'Conversia în M4A este gratuită?', a: `Da, extragerea de bază în ${APP} este gratuită, inclusiv exportul M4A.` }
        ],
        related: ['video-to-ringtone-iphone', 'convert-video-to-mp3-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Video în M4A', text: 'Formatul Apple pentru tonuri și GarageBand.' }
    },
    {
        slug: 'extract-audio-without-app-iphone',
        keyword: 'extrage audio din video iphone fără aplicație',
        eyebrow: 'Scurtături sau aplicație',
        title: 'Audio din video pe iPhone fără aplicație (Scurtături)',
        description: 'Poți extrage sunetul din video pe iPhone fără să instalezi nimic, cu Scurtături și „Codifică media”. Configurare, limite (doar M4A) și o metodă mai rapidă.',
        h1: 'Cum extragi audio din video pe iPhone fără aplicație',
        answer: 'Fără o aplicație în plus folosești o scurtătură: adaugă acțiunea „Codifică media”, activează „Doar audio”, adaugă „Salvează fișierul” și activează „Afișează în foaia de partajare”. Apoi partajează videoclipul cu scurtătura. Salvează doar M4A și nu decupează — pentru MP3 sau fragmente scurte, o aplicație e mai rapidă.',
        intro: '<p>Aplicația gratuită Scurtături de la Apple poate separa sunetul de un videoclip. Configurarea durează cam două minute. Iată rețeta exactă — și limitele ei.</p>',
        steps: [
            { name: 'Creează o scurtătură nouă', text: 'Deschide Scurtături, atinge + și numește-o „Sunet din video”.', image: 2 },
            { name: 'Adaugă „Codifică media”', text: 'Atinge „Adaugă o acțiune”, caută „Codifică media”, adaug-o, extinde opțiunile și activează „Doar audio”.', image: 2 },
            { name: 'Adaugă „Salvează fișierul”', text: 'Adaugă acțiunea „Salvează fișierul” ca rezultatul să ajungă în Fișiere.', image: 4 },
            { name: 'Afișeaz-o în Partajează', text: 'Deschide setările scurtăturii (pictograma i), activează „Afișează în foaia de partajare” și permite „Media”. Acum partajează un video din Poze și alege scurtătura.', image: 4 }
        ],
        sections: [
            {
                h2: 'Limitele metodei cu Scurtături',
                html: `<ul>
<li><strong>Doar M4A</strong> — fără MP3.</li>
<li><strong>Fără decupare</strong> — se salvează mereu toată pista.</li>
<li><strong>Fără bibliotecă</strong> — fișierele ajung în Fișiere și trebuie să le cauți și să le redenumești singur.</li>
<li>La videoclipuri lungi, scurtătura se poate opri fără un mesaj clar.</li>
</ul>`
            },
            {
                h2: 'Alternativa dintr-o atingere',
                html: `<p>${APP} face același lucru, dar cu decupare, alegere între MP3 și M4A și o bibliotecă cu tot ce ai extras. Aplicația e și ea în meniul Partajează, deci e la fel de rapidă — și nu ai nimic de configurat.</p>`
            },
            {
                h2: 'Alte metode fără aplicație',
                html: '<p>Și iMovie sau GarageBand pot separa sunetul, dar cu mai mulți pași și formate de export limitate. Site-urile funcționează, dar trebuie să încarci videoclipul — vezi <a href="/ro/guides/extract-audio-online-vs-app/">online sau aplicație</a>.</p>'
            }
        ],
        faq: [
            { q: 'Are iPhone-ul un extractor audio integrat?', a: 'Nu ca buton în Poze. Cel mai aproape este acțiunea „Codifică media” cu „Doar audio” din aplicația Scurtături.' },
            { q: 'În ce format salvează scurtătura?', a: 'În M4A. Cu Scurtături nu poți salva MP3.' },
            { q: 'Poate scurtătura să decupeze sunetul?', a: `Nu comod. Pentru decupare folosește o aplicație cu cronologie, precum ${APP}.` }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-online-vs-app', 'video-to-m4a-iphone'],
        card: { title: 'Fără aplicație (Scurtături)', text: 'Rețeta gratuită cu Scurtături și limitele ei.' }
    },
    {
        slug: 'extract-audio-online-vs-app',
        keyword: 'extrage audio din video online',
        eyebrow: 'Online sau aplicație',
        title: 'Audio din video: online gratuit sau aplicație pe iPhone?',
        description: 'Extragi audio din video online sau cu o aplicație? Comparăm confidențialitatea, viteza, limitele și decuparea pe iPhone — și de ce pe telefon câștigă aplicația.',
        h1: 'Extrage audio din video online (gratuit) sau cu o aplicație iPhone',
        answer: `Serviciile online merg pe orice dispozitiv, dar cer să încarci tot videoclipul, să aștepți și să descarci rezultatul — lent pe date mobile și deloc privat. Pe iPhone, o aplicație ca ${APP} e mai rapidă, funcționează offline, păstrează videoclipurile pe dispozitiv și decupează înainte de export.`,
        intro: '<p>Dacă cauți „extrage audio din video online”, găsești zeci de site-uri gratuite. Pe un laptop cu internet rapid sunt comode. Pe iPhone, socoteala e alta.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Comparație',
                html: `<table class="guide-table"><thead><tr><th></th><th>Serviciu online</th><th>${APP}</th></tr></thead><tbody>
<tr><td>Confidențialitate</td><td>Videoclipul ajunge pe serverul altcuiva</td><td>Rămâne pe iPhone</td></tr>
<tr><td>Viteză</td><td>Upload + coadă + descărcare</td><td>Secunde, pe dispozitiv</td></tr>
<tr><td>Offline</td><td>Nu</td><td>Da</td></tr>
<tr><td>Limită de dimensiune</td><td>Frecventă la planurile gratuite</td><td>Doar spațiul de stocare</td></tr>
<tr><td>Decupare</td><td>Uneori</td><td>Cronologie integrată</td></tr>
<tr><td>Reclame și pop-up-uri</td><td>Frecvente</td><td>Fără pop-up-uri web</td></tr>
<tr><td>Preț</td><td>Gratuit cu limite</td><td>Funcții de bază gratuite</td></tr>
</tbody></table>`
            },
            {
                h2: 'Când are sens un serviciu online',
                html: '<p>Dacă ești la un PC cu Windows și videoclipul e deja acolo, un site de încredere e în regulă. Nu încărca însă nimic personal: videoclipuri de familie, ședințe sau materiale ale clienților.</p>'
            },
            {
                h2: 'Când e mai bună aplicația',
                html: '<p>Dacă videoclipul e pe iPhone, câștigă aplicația: fără upload pe date mobile, fără așteptare, fără descărcare — și decupezi exact porțiunea de care ai nevoie.</p>'
            }
        ],
        faq: [
            { q: 'Este sigur să extragi audio din video online?', a: 'Depinde de site. Videoclipul ajunge pe serverul unei terțe părți, așa că evită asta pentru conținut privat. Aplicațiile care lucrează pe dispozitiv nu încarcă nimic.' },
            { q: 'Există o variantă gratuită pe iPhone fără upload?', a: `Da. ${APP} e gratuit pentru început și convertește pe dispozitiv — videoclipul tău nu este încărcat niciodată.` },
            { q: 'De ce e atât de lentă conversia online pe telefon?', a: 'Pentru că mai întâi trebuie încărcat tot videoclipul. Videoclipurile de pe telefon sunt mari, iar uploadul pe date mobile e de obicei mult mai lent decât descărcarea.' }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-without-app-iphone', 'mp4-to-mp3-iphone'],
        card: { title: 'Online sau aplicație', text: 'Confidențialitate, viteză și limite comparate.' }
    },
    {
        slug: 'save-music-from-video-iphone',
        keyword: 'extrage muzica din video iphone',
        eyebrow: 'Muzică',
        title: 'Cum extragi muzica dintr-un video pe iPhone (MP3 sau M4A)',
        description: 'Salvează melodia sau muzica de fundal dintr-un video pe iPhone ca MP3 sau M4A. Decupează exact melodia, ascult-o offline și partajeaz-o oriunde. Ghid scurt.',
        h1: 'Cum extragi muzica dintr-un video pe iPhone',
        answer: `Ca să extragi muzica dintr-un video pe iPhone, deschide-l în Poze, atinge Partajează, alege ${APP}, pune marcajele de decupare în jurul melodiei și atinge „Extrage audio”. Muzica se salvează ca MP3 sau M4A, gata de ascultat offline în Fișiere sau de trimis în orice aplicație.`,
        intro: '<p>O melodie de la o nuntă, cover-ul unui prieten, muzica din propriul montaj — uneori cel mai important lucru dintr-un video e sunetul. Iată cum îl salvezi ca fișier muzical separat.</p>',
        steps: [STEP.share, { name: 'Decupează în jurul melodiei', text: 'Atinge „Decupează video” și trage marcajele galbene astfel încât să rămână doar melodia. Ascultă începutul și sfârșitul.', image: 3 }, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Sfaturi pentru cel mai bun sunet',
                html: `<ul>
<li>Taie discuțiile și aplauzele de la început și de la sfârșit.</li>
<li>MP3 pentru radioul mașinii și playere mai vechi, M4A pentru dispozitive Apple.</li>
<li>Redenumește fișierul în Fișiere (ține apăsat → Redenumește) ca să-l găsești ușor.</li>
</ul>`
            },
            {
                h2: 'Despre drepturile de autor',
                html: '<p>Salvează muzică doar din videoclipurile tale sau din cele la care ai drepturi. Melodiile comerciale sunt protejate: o copie personală a propriei înregistrări e în regulă, republicarea muzicii altcuiva nu.</p>'
            },
            {
                h2: 'Fă din ea ton de apel',
                html: '<p>Ai găsit cele 30 de secunde preferate? <a href="/ro/guides/video-to-ringtone-iphone/">Fă din ele un ton de apel</a>.</p>'
            }
        ],
        faq: [
            { q: 'Cum iau melodia dintr-un video pe iPhone?', a: `Trimite videoclipul în ${APP}, decupează în jurul melodiei și atinge „Extrage audio”. Melodia se salvează ca fișier audio.` },
            { q: 'Pot adăuga melodia în Apple Music?', a: 'Aplicația Muzică de pe iPhone nu importă direct fișiere locale. Păstrează fișierul în Fișiere sau sincronizează-l de pe un Mac sau PC.' },
            { q: 'Merge și cu videoclipuri din WhatsApp sau Mesaje?', a: 'Da. Salvează mai întâi videoclipul în Poze sau Fișiere, apoi extrage sunetul.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-ringtone-iphone', 'mov-to-mp3-iphone'],
        card: { title: 'Muzică dintr-un video', text: 'Păstrează melodia, lasă imaginea.' }
    }
);

guides.push(
    {
        slug: 'trim-audio-from-video-iphone',
        keyword: 'extrage doar o parte din sunetul unui video iphone',
        eyebrow: 'Decupare',
        title: 'Cum extragi doar o parte din sunetul unui video pe iPhone',
        description: 'Ai nevoie doar de 10 secunde de sunet? Decupează videoclipul pe iPhone și extrage doar acea porțiune ca MP3 sau M4A. Trage marcajele, ascultă, exportă. Gratuit.',
        h1: 'Cum extragi doar o parte din sunetul unui video pe iPhone',
        answer: `Ca să extragi doar o parte din sunetul unui video, deschide-l în ${APP}, atinge „Decupează video”, trage marcajele galbene de început și sfârșit în jurul porțiunii dorite, atinge „Salvează” și apoi „Extrage audio”. Se exportă doar partea selectată, ca MP3 sau M4A.`,
        intro: '<p>De obicei nu ai nevoie de toată pista — doar de un citat, un refren sau un efect sonor. Dacă decupezi întâi, obții un fișier mic și curat.</p>',
        steps: [
            STEP.open,
            { name: 'Atinge „Decupează video”', text: 'Pe ecranul de extragere, atinge „Decupează video” ca să deschizi cronologia.', image: 2 },
            { name: 'Trage marcajele', text: 'Mută marcajul galben din stânga la început și pe cel din dreapta la sfârșit. Timpii afișați arată selecția exactă. Ascultă și atinge „Salvează”.', image: 3 },
            { name: 'Extrage și salvează fragmentul', text: 'Atinge „Extrage audio”. Se exportă doar partea decupată — partajeaz-o sau salveaz-o în Fișiere.', image: 4 }
        ],
        sections: [
            {
                h2: 'Sfaturi pentru o decupare precisă',
                html: `<ul>
<li>Lasă o jumătate de secundă înainte și după vorbire, ca să nu tai cuvinte.</li>
<li>Pentru un ton de apel selectează cel mult 30 de secunde.</li>
<li>Mai multe fragmente din același video? Repetă decuparea pentru fiecare — totul rămâne în bibliotecă.</li>
</ul>`
            },
            {
                h2: 'Ce se decupează cel mai des',
                html: '<p>O frază dintr-un discurs, refrenul unei melodii, un efect pentru montaj, primele cuvinte ale copilului tău sau acel minut important dintr-o ședință lungă.</p>'
            }
        ],
        faq: [
            { q: 'Pot tăia sunetul unui video pe iPhone?', a: `Da. Decupează videoclipul în ${APP} la porțiunea de care ai nevoie și extrage — se salvează ca audio doar acea parte.` },
            { q: 'Decuparea modifică videoclipul original?', a: 'Nu. Originalul din Poze rămâne neschimbat; se decupează doar fișierul audio exportat.' },
            { q: 'Pot extrage mai multe părți din același video?', a: 'Da. Decupează și extrage din nou pentru fiecare parte.' }
        ],
        related: ['video-to-ringtone-iphone', 'save-music-from-video-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Doar o parte din sunet', text: 'Decupare la secundă.' }
    },
    {
        slug: 'screen-recording-to-audio-iphone',
        keyword: 'sunet din înregistrare ecran iphone',
        eyebrow: 'Înregistrare ecran',
        title: 'Cum scoți sunetul dintr-o înregistrare de ecran pe iPhone',
        description: 'Transformă o înregistrare de ecran de pe iPhone într-un fișier MP3 sau M4A. Află de ce e mută, decupează porțiunea potrivită și salvează sunetul. Pași simpli.',
        h1: 'Cum scoți sunetul dintr-o înregistrare de ecran pe iPhone',
        answer: `Înregistrările de ecran de pe iPhone se salvează ca videoclipuri în Poze. Ca să scoți sunetul, deschide înregistrarea, atinge Partajează, alege ${APP}, decupează dacă e nevoie și atinge „Extrage audio”. Dacă fișierul e mut, înregistrarea nu a prins sunet — pornește microfonul înainte de înregistrare.`,
        intro: '<p>Înregistrarea ecranului e o metodă des folosită pentru a păstra un mesaj vocal, un apel pe difuzor sau un fragment dintr-o aplicație. Iată cum păstrezi doar sunetul.</p>',
        steps: [
            { name: 'Găsește înregistrarea în Poze', text: 'Înregistrările de ecran sunt în Poze → „Tipuri de media” → „Înregistrări ecran”.', image: 2 },
            { name: 'Trimite-o în aplicație', text: 'Deschide înregistrarea, atinge Partajează și alege aplicația.', image: 2 },
            STEP.trim,
            { name: 'Extrage și salvează', text: 'Atinge „Extrage audio” și salvează MP3-ul sau M4A-ul în Fișiere.', image: 4 }
        ],
        sections: [
            {
                h2: 'De ce e mută înregistrarea mea de ecran?',
                html: `<ul>
<li><strong>Microfon oprit:</strong> în Centrul de control ține apăsat butonul de înregistrare a ecranului și activează „Microfon” ca să-ți înregistrezi vocea.</li>
<li><strong>Modul silențios:</strong> unele aplicații nu scot sunet în modul silențios.</li>
<li><strong>Conținut protejat:</strong> multe aplicații de streaming blochează sunetul în înregistrările de ecran — e intenționat și nu poate fi ocolit.</li>
</ul>`
            },
            {
                h2: 'Respectă confidențialitatea',
                html: '<p>Înregistrează și păstrează apeluri sau conversații doar cu acordul tuturor participanților și respectând legea din țara ta.</p>'
            }
        ],
        faq: [
            { q: 'Pot transforma o înregistrare de ecran în MP3?', a: 'Da. Înregistrările de ecran sunt videoclipuri obișnuite, așa că sunetul lor poate fi salvat ca MP3 sau M4A.' },
            { q: 'Unde salvează iPhone-ul înregistrările de ecran?', a: 'În aplicația Poze, la „Tipuri de media” → „Înregistrări ecran”.' },
            { q: 'De ce nu se aude nimic în înregistrarea mea de ecran?', a: 'Microfonul era oprit sau aplicația înregistrată blochează sunetul. Verifică înainte de extragere că înregistrarea are sunet.' }
        ],
        related: ['extract-audio-from-video-iphone', 'trim-audio-from-video-iphone', 'lecture-video-to-audio-iphone'],
        card: { title: 'Sunet din înregistrare ecran', text: 'Salvează sunetul și află de ce lipsește.' }
    },
    {
        slug: 'lecture-video-to-audio-iphone',
        keyword: 'curs video în audio',
        eyebrow: 'Studiu',
        title: 'Cum transformi un curs video în audio pe iPhone (MP3)',
        description: 'Transformă cursuri înregistrate, webinarii și prezentări în MP3 pe iPhone și învață oriunde. Fișiere mici, ascultare offline, partajare ușoară. Ghid pas cu pas.',
        h1: 'Cum transformi un curs video în audio pe iPhone',
        answer: `Ca să transformi un curs video în audio, deschide înregistrarea în Poze sau Fișiere, atinge Partajează, alege ${APP} și atinge „Extrage audio”. Salvează MP3-ul în Fișiere și ascultă-l offline — în autobuz, la sală sau cu ecranul stins — ocupând o fracțiune din spațiu.`,
        intro: '<p>La un curs contează ce se spune, nu ce se vede. Ca audio, cursul devine un podcast pe care îl reasculți oriunde.</p>',
        steps: [
            STEP.share,
            { name: 'Taie așteptarea și pauzele (opțional)', text: 'Atinge „Decupează video” ca să elimini așteptarea de la început și întrebările de care nu ai nevoie.', image: 3 },
            STEP.extract,
            { name: 'Salvează într-un dosar Cursuri', text: 'Atinge Partajează → Salvează în Fișiere și creează câte un dosar pe materie, ca să găsești totul repede.', image: 4 }
        ],
        sections: [
            {
                h2: 'De ce să înveți cu audio',
                html: `<ul>
<li><strong>Fișiere mici:</strong> o oră de audio ocupă o fracțiune dintr-o oră de video.</li>
<li><strong>Ecran stins:</strong> ascultă cu telefonul blocat și economisește bateria.</li>
<li><strong>Oriunde:</strong> pe drum, la plimbare, la sală — fără Wi-Fi.</li>
</ul>`
            },
            {
                h2: 'Transformă-l în notițe',
                html: '<p>Ai nevoie de text? Importă audio în aplicația de transcriere pe care o folosești deja și caută mai târziu în transcriere.</p>'
            },
            {
                h2: 'Verifică regulile',
                html: '<p>Multe universități permit înregistrarea pentru uz personal, dar nu distribuirea ei. Verifică regulile cursului înainte să înregistrezi sau să partajezi.</p>'
            }
        ],
        faq: [
            { q: 'Pot asculta un video pe iPhone cu ecranul stins?', a: 'Majoritatea playerelor video se opresc la blocare. Convertit în MP3, îl poți asculta cu ecranul stins în Fișiere sau în orice player audio.' },
            { q: 'Merge cu un curs de o oră?', a: 'Da. Înregistrările lungi merg la fel, doar durează puțin mai mult.' },
            { q: 'Pot converti înregistrări Zoom sau webinarii?', a: 'Da, imediat ce înregistrarea MP4 se află în Poze sau Fișiere pe iPhone.' }
        ],
        related: ['screen-recording-to-audio-iphone', 'mp4-to-mp3-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Curs video în audio', text: 'Învață oriunde cu MP3-uri mici.' }
    },
    {
        slug: 'video-to-ringtone-iphone',
        keyword: 'ton de apel din video iphone',
        eyebrow: 'Tonuri de apel',
        title: 'Cum faci un ton de apel dintr-un video pe iPhone (iOS 26)',
        description: 'Fă din orice video un ton de apel: decupează sunetul la 30 s, salvează-l în Fișiere și atinge Partajează → „Folosește ca ton de apel”. iOS 26, GarageBand.',
        h1: 'Cum faci un ton de apel dintr-un video pe iPhone',
        answer: `Ca să faci un ton de apel dintr-un video, deschide-l în ${APP}, decupează-l la cel mult 30 de secunde, extrage ca M4A sau MP3 și salvează în Fișiere. În iOS 26, ține apăsat pe fișier în Fișiere, atinge Partajează și alege „Folosește ca ton de apel”. În versiunile mai vechi de iOS, importă sunetul în GarageBand și exportă-l ca ton de apel.`,
        intro: '<p>Un râs, o melodie de la o petrecere, lătratul câinelui tău — orice sunet din videoclipurile tale poate deveni ton de apel. Cu iOS 26 e simplu, de îndată ce ai un fișier audio.</p>',
        steps: [
            STEP.share,
            { name: 'Decupează la 30 de secunde', text: 'Atinge „Decupează video” și selectează cel mult 30 de secunde — limita pentru tonuri de apel.', image: 3 },
            { name: 'Extrage și salvează în Fișiere', text: 'Atinge „Extrage audio” (M4A sau MP3), apoi Partajează → Salvează în Fișiere.', image: 4 },
            { name: 'Folosește ca ton de apel', text: 'În Fișiere ține apăsat pe fișierul audio, atinge Partajează → „Folosește ca ton de apel” (iOS 26). Verifică în Configurări → Sunete și haptică → Ton de apel.', image: 4 }
        ],
        sections: [
            {
                h2: 'În iOS 18: metoda cu GarageBand',
                html: `<ol>
<li>Extrage și decupează sunetul ca mai sus și salvează-l în Fișiere.</li>
<li>Deschide GarageBand, creează un proiect cu „Înregistrator audio” și treci la vizualizarea piste.</li>
<li>Deschide browserul de bucle → „Fișiere” → „Explorează articolele din aplicația Fișiere” și trage audio pe o pistă.</li>
<li>Întoarce-te la „Melodiile mele”, ține apăsat pe proiect → Partajează → Ton de apel → Exportă.</li>
</ol>`
            },
            {
                h2: 'De ce lipsește „Folosește ca ton de apel”',
                html: `<ul>
<li>Fișierul are peste 30 de secunde — decupează-l din nou.</li>
<li>Fișierul nu e MP3 sau M4A.</li>
<li>iPhone-ul tău nu are încă iOS 26 — folosește GarageBand.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Cât de lung poate fi un ton de apel pe iPhone?', a: 'Tonurile personalizate create din fișiere audio pot avea până la 30 de secunde.' },
            { q: 'Ce format trebuie să aibă un ton de apel pe iPhone?', a: 'În iOS 26 poți seta fișiere MP3 sau M4A mai scurte de 30 de secunde cu „Folosește ca ton de apel”.' },
            { q: 'Pot folosi direct un video ca ton de apel?', a: 'Nu. Extrage mai întâi sunetul din video, apoi setează fișierul audio ca ton de apel.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-m4a-iphone', 'save-music-from-video-iphone'],
        card: { title: 'Ton de apel din video', text: '„Folosește ca ton de apel” în iOS 26, în 4 pași.' }
    }
);
