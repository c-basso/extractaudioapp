/**
 * Slovenské návody → /sk/guides/<slug>/
 * Slugy sa zhodujú s anglickými (build/guides/en.js), aby sa stránky prepojili cez hreflang.
 * Kľúčové slová — pozri časť „Slovenčina (SK)“ v /keywords.md. Štruktúra polí — ako v en.js.
 * Snímky: 1 obálka · 2 obrazovka extrakcie · 3 orezanie · 4 ponuka Zdieľať · 5 knižnica
 */

const APP = 'Extrahovať zvuk z videa⁺';

const STEP = {
    open: {
        name: 'Otvorte aplikáciu a vyberte video',
        text: `Spustite ${APP} a vyberte video z Fotiek alebo Súborov. Rýchlejšie: vo Fotkách pri videu ťuknite na Zdieľať a zvoľte „Extrahovať zvuk“.`,
        image: 2
    },
    share: {
        name: 'Pošlite video do aplikácie',
        text: 'Otvorte video vo Fotkách alebo Súboroch, ťuknite na Zdieľať a zvoľte „Extrahovať zvuk“. Aplikácia sa otvorí s už načítaným videom.',
        image: 2
    },
    trim: {
        name: 'Orežte potrebný úsek (nepovinné)',
        text: 'Ťuknite na „Orezať video“, posuňte žlté značky na začiatok a koniec požadovanej časti, vypočujte si ju a ťuknite na „Uložiť“.',
        image: 3
    },
    extract: {
        name: 'Ťuknite na „Extrahovať zvuk“',
        text: 'Ťuknite na „Extrahovať zvuk“ – zvuková stopa sa prevedie priamo v iPhone za pár sekúnd a nič sa neodosiela na internet.',
        image: 2
    },
    save: {
        name: 'Uložte alebo pošlite súbor',
        text: 'Hotový zvukový súbor sa zobrazí v knižnici. Ťuknutím na Zdieľať ho uložíte do Súborov, pošlete cez AirDrop alebo do ľubovoľnej aplikácie.',
        image: 4
    }
};

const guides = [];
module.exports = guides;

guides.push(
    {
        slug: 'extract-audio-from-video-iphone',
        keyword: 'ako vytiahnuť zvuk z videa na iphone',
        eyebrow: 'Základy',
        title: 'Ako vytiahnuť zvuk z videa na iPhone – krok za krokom',
        description: 'Vytiahnite zvuk z akéhokoľvek videa na iPhone štyrmi ťuknutiami: vyberte video, orežte, ťuknite na „Extrahovať zvuk“ a uložte ako MP3 či M4A. Zadarmo.',
        h1: 'Ako vytiahnuť zvuk z videa na iPhone',
        answer: `Ak chcete vytiahnuť zvuk z videa na iPhone, otvorte ${APP}, vyberte video z Fotiek, podľa potreby ho orežte a ťuknite na „Extrahovať zvuk“. Aplikácia za pár sekúnd uloží zvukovú stopu ako MP3 alebo M4A do iPhonu. Je to zadarmo a funguje to aj bez internetu.`,
        intro: '<p>Fotky v iPhone nemajú tlačidlo „uložiť len zvuk“. Môžete si vytvoriť skratku (pozri <a href="/sk/guides/extract-audio-without-app-iphone/">postup bez aplikácie</a>) alebo nahrať video na web, no obe možnosti sú pomalé, keď potrebujete len zvuk. Tu je najrýchlejšia cesta: bezplatná aplikácia, ktorá funguje priamo z ponuky Zdieľať.</p>',
        steps: [STEP.open, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Čo budete potrebovať',
                html: `<ul>
<li>iPhone so systémom iOS 18.6 alebo novším.</li>
<li>${APP} – zadarmo v App Store (asi 23 MB).</li>
<li>Video so zvukom: záznamy z fotoaparátu (MOV), stiahnuté videá (MP4), záznamy obrazovky, videá zo Správ.</li>
</ul>`
            },
            {
                h2: 'Najrýchlejší spôsob – cez Zdieľať',
                html: '<p>Aplikáciu nemusíte ani otvárať. Vo <strong>Fotkách</strong> alebo <strong>Súboroch</strong> otvorte video, ťuknite na <strong>Zdieľať</strong>, posuňte rad aplikácií a zvoľte <strong>„Extrahovať zvuk“</strong>. Ak ju nevidíte, ťuknite na „Viac“ a pridajte ju medzi obľúbené – potom ju budete mať vždy po ruke.</p>'
            },
            {
                h2: 'MP3, alebo M4A?',
                html: '<p><strong>MP3</strong> prehrá čokoľvek: Windows, Android, autorádiá, weby aj strihové programy. <strong>M4A</strong> (AAC) je vlastný formát Apple: menší pri rovnakej kvalite, ideálny na zvonenia, GarageBand a iMovie. Ak váhate, zvoľte MP3. Viac: <a href="/sk/guides/convert-video-to-mp3-iphone/">video na MP3</a> a <a href="/sk/guides/video-to-m4a-iphone/">video na M4A</a>.</p>'
            },
            {
                h2: 'Kam sa zvuk uloží?',
                html: '<p>Každý extrahovaný súbor sa zobrazí v knižnici aplikácie s dĺžkou, veľkosťou a dátumom. Odtiaľ ťuknite na <strong>Zdieľať → Uložiť do Súborov</strong> a uložte ho na iCloud Drive alebo „V iPhone“, prípadne ho pošlite do WhatsAppu, Messengeru, Poznámok, GarageBandu alebo cez AirDrop do počítača.</p>'
            },
            {
                h2: 'Keď niečo nefunguje',
                html: `<ul>
<li><strong>Súbor je bez zvuku.</strong> Samotné video nemá zvukovú stopu – stáva sa to pri záznamoch obrazovky bez mikrofónu. Najprv video skontrolujte vo Fotkách.</li>
<li><strong>Video je v iCloude.</strong> Fotky najprv stiahnu originál – počkajte, kým sa to dokončí.</li>
<li><strong>Potrebujete len 20 sekúnd.</strong> Orežte pred extrakciou – pozri <a href="/sk/guides/trim-audio-from-video-iphone/">ako vystrihnúť časť zvuku</a>.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Dá sa zvuk z videa na iPhone vytiahnuť zadarmo?', a: `Áno. ${APP} si stiahnete zadarmo a základná extrakcia zvuku je tiež zadarmo. Ďalšie funkcie sú dostupné cez nákupy v aplikácii.` },
            { q: 'Stráca sa pri extrakcii kvalita?', a: 'Aplikácia uloží zvukovú stopu videa ako kvalitné MP3 alebo M4A. Lepší ako originál zvuk nebude, no bude znieť rovnako ako pri prehrávaní videa.' },
            { q: 'Dá sa vytiahnuť zvuk z dlhého videa?', a: 'Áno. Prednášky, koncerty aj stretnutia sa spracujú rovnako, len o niečo dlhšie. Ak potrebujete len časť, orežte ju vopred.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'trim-audio-from-video-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Ako vytiahnuť zvuk z videa na iPhone', text: 'Postup na 4 ťuknutia – z Fotiek alebo cez Zdieľať.' }
    },
    {
        slug: 'convert-video-to-mp3-iphone',
        keyword: 'ako previesť video na mp3 na iphone',
        eyebrow: 'Video na MP3',
        title: 'Ako previesť video na MP3 na iPhone – rýchlo a zadarmo',
        description: 'Preveďte akékoľvek video z iPhonu na MP3 za pár sekúnd. Funguje z Fotiek, súbory zostávajú v zariadení a pred exportom môžete orezávať. Návod krok za krokom.',
        h1: 'Ako previesť video na MP3 na iPhone',
        answer: `Otvorte video vo Fotkách, ťuknite na Zdieľať a zvoľte „Extrahovať zvuk“ (${APP}). Podľa potreby orežte, ťuknite na „Extrahovať zvuk“ a uložte ako MP3. Súbor zostane v iPhone – môžete ho poslať do Súborov, cez AirDrop alebo do ľubovoľnej aplikácie. Počítač ani registrácia nie sú potrebné.`,
        intro: '<p>MP3 je najkompatibilnejší zvukový formát: prehrá ho každé auto, každý počítač aj každý editor. Takto prevediete video na MP3 bez toho, aby ste pustili iPhone z ruky.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Extrahujte do MP3', text: 'Ťuknite na „Extrahovať zvuk“ a zvoľte formát MP3. Prevod videa na MP3 prebieha priamo v iPhone.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'Prečo aplikácia, a nie online prevodník?',
                html: '<p>Online prevodníky vás nútia nahrať celé video, čakať v poradí a potom MP3 znova stiahnuť – na mobilných dátach je to pomalé a pri osobných videách riskantné. Aplikácia funguje offline, súbor drží v zariadení a umožní záznam pred prevodom orezať. Podrobné porovnanie: <a href="/sk/guides/extract-audio-online-vs-app/">online, alebo aplikácia</a>.</p>'
            },
            {
                h2: 'Ktoré videá sa dajú previesť na MP3?',
                html: '<p>Všetko, čo iPhone prehrá: záznamy z fotoaparátu (<a href="/sk/guides/mov-to-mp3-iphone/">MOV</a>), stiahnuté videá (<a href="/sk/guides/mp4-to-mp3-iphone/">MP4</a>), <a href="/sk/guides/screen-recording-to-audio-iphone/">záznamy obrazovky</a> a videá zo Správ, WhatsAppu, Messengeru a AirDropu.</p>'
            },
            {
                h2: 'Čo s MP3 ďalej',
                html: `<ul>
<li>Uložiť do <strong>Súborov</strong> a počúvať offline.</li>
<li>Poslať do počítača cez <strong>AirDrop</strong>.</li>
<li>Urobiť z 30 sekúnd <a href="/sk/guides/video-to-ringtone-iphone/">zvonenie</a>.</li>
<li>Pridať do GarageBandu, CapCutu alebo editora podcastov.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Vie iPhone previesť video na MP3 bez aplikácie?', a: 'Priamo nie. Skratky vedia uložiť zvuk len ako M4A. Na MP3 v iPhone potrebujete aplikáciu alebo web.' },
            { q: 'Je prevod na MP3 zadarmo?', a: `Áno, základný prevod v ${APP} je zadarmo. Ďalšie funkcie cez nákupy v aplikácii.` },
            { q: 'Potrebujem na prevod videa na MP3 internet?', a: 'Nie. Prevod prebieha v iPhone a funguje offline. Vopred stačí stiahnuť len videá uložené v iCloude.' }
        ],
        related: ['mp4-to-mp3-iphone', 'mov-to-mp3-iphone', 'video-to-m4a-iphone'],
        card: { title: 'Video na MP3 na iPhone', text: 'Akékoľvek video do univerzálneho MP3.' }
    }
);

guides.push(
    {
        slug: 'mp4-to-mp3-iphone',
        keyword: 'mp4 na mp3 iphone',
        eyebrow: 'MP4 na MP3',
        title: 'MP4 na MP3 na iPhone: bezplatný prevodník bez nahrávania',
        description: 'Preveďte MP4 na MP3 na iPhone zadarmo: otvorte súbor v Súboroch alebo Fotkách a ťuknite na Zdieľať → „Extrahovať zvuk“. Bez internetu, s orezaním.',
        h1: 'Ako previesť MP4 na MP3 na iPhone',
        answer: `Ak chcete previesť MP4 na MP3 na iPhone, otvorte súbor v Súboroch alebo Fotkách, ťuknite na Zdieľať a zvoľte „Extrahovať zvuk“. V ${APP} záznam prípadne orežte, ťuknite na „Extrahovať zvuk“, zvoľte MP3 a uložte. Zadarmo, v zariadení, bez internetu.`,
        intro: '<p>Súbory MP4 zvyčajne prichádzajú ako stiahnuté súbory, prílohy e-mailov alebo cez AirDrop, a preto často ležia v aplikácii <strong>Súbory</strong>, nie vo Fotkách. Aplikácia pracuje s oboma.</p>',
        steps: [
            { name: 'Nájdite súbor MP4', text: 'Otvorte Súbory (Stiahnuté, iCloud Drive alebo „V iPhone“) alebo Fotky a nájdite MP4.', image: 2 },
            { name: 'Pošlite do „Extrahovať zvuk“', text: 'Podržte súbor a zvoľte Zdieľať → „Extrahovať zvuk“. MP4 sa otvorí v aplikácii.', image: 2 },
            STEP.trim,
            { name: 'Uložte ako MP3', text: 'Ťuknite na „Extrahovať zvuk“, zvoľte MP3 a potom Zdieľať → Uložiť do Súborov, aby bolo MP3 vedľa pôvodného MP4.', image: 4 }
        ],
        sections: [
            {
                h2: 'Rozdiel medzi MP4 a MP3',
                html: '<p>MP4 je kontajner s obrazom aj zvukom; MP3 obsahuje len zvuk. Pri prevode MP4 na MP3 zostane zvuková stopa a obraz sa odstráni: súbor je oveľa menší a prehrá ho akýkoľvek prehrávač.</p>'
            },
            {
                h2: 'MP4 z WhatsAppu, Messengeru a e-mailu',
                html: '<p>Najprv prílohu uložte: v čete otvorte video → Zdieľať → „Uložiť video“ (do Fotiek) alebo „Uložiť do Súborov“. Potom postupujte podľa krokov vyššie. Prevádzajte len vlastné videá alebo tie, ku ktorým máte práva.</p>'
            },
            {
                h2: 'Potrebujete M4A?',
                html: '<p>Na zvonenia a aplikácie Apple sa hodí skôr M4A. Pozri <a href="/sk/guides/video-to-m4a-iphone/">ako uložiť video ako M4A na iPhone</a>.</p>'
            }
        ],
        faq: [
            { q: 'Dá sa na iPhone zadarmo previesť MP4 na MP3?', a: `Áno. ${APP} prevádza MP4 na MP3 zadarmo priamo v zariadení. Nákupy v aplikácii odomykajú ďalšie funkcie.` },
            { q: 'Bude MP3 menšie ako MP4?', a: 'Áno, zvyčajne oveľa menšie: obrazová stopa sa odstráni a zostane len zvuk.' },
            { q: 'Môžem previesť viac súborov MP4?', a: 'Áno. Prevádzajte ich postupne – všetky MP3 sa ukladajú do knižnice aplikácie.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'mov-to-mp3-iphone', 'extract-audio-online-vs-app'],
        card: { title: 'MP4 na MP3 na iPhone', text: 'Stiahnuté MP4 zo Súborov a Fotiek do MP3.' }
    },
    {
        slug: 'mov-to-mp3-iphone',
        keyword: 'mov na mp3 iphone',
        eyebrow: 'MOV na MP3',
        title: 'MOV na MP3 na iPhone – zvuk z videí z fotoaparátu iPhonu',
        description: 'Videá z fotoaparátu iPhonu sú súbory MOV. Preveďte MOV na MP3 priamo v telefóne: vyberte video, orežte a ťuknite na „Extrahovať zvuk“. Zadarmo a offline.',
        h1: 'Ako previesť MOV na MP3 na iPhone',
        answer: `Všetky videá z fotoaparátu iPhonu sa ukladajú vo formáte MOV. Ak chcete MP3, otvorte video vo Fotkách, ťuknite na Zdieľať → „Extrahovať zvuk“, podľa potreby orežte a ťuknite na „Extrahovať zvuk“ v ${APP}. MP3 sa uloží do iPhonu – počítač nie je potrebný.`,
        intro: '<p>MOV je videoformát Apple, v ktorom nahráva fotoaparát iPhonu: koncerty, prejavy, kamaráta s gitarou, hlas, ktorý si chcete uchovať. Ako MP3 si tento zvuk pustíte kdekoľvek.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Kedy sa hodí MOV na MP3',
                html: `<ul>
<li>Uchovať zvuk koncertu alebo vystúpenia, ktoré ste natočili.</li>
<li>Premeniť prípitok alebo prejav na zvukovú spomienku.</li>
<li>Poslať nahrávku skúšky kapele bez obrovského videa.</li>
<li>Počúvať <a href="/sk/guides/lecture-video-to-audio-iphone/">nahranú prednášku</a> na cestách.</li>
</ul>`
            },
            {
                h2: 'HEVC, 4K a filmový režim',
                html: '<p>Videá v HEVC a 4K sa spracujú rovnako. Prevádza sa len zvuk, takže aj veľmi veľké súbory MOV dajú kompaktné zvukové súbory.</p>'
            },
            {
                h2: 'Prečo sa zaobísť bez počítača',
                html: '<p>Preniesť niekoľkogigabajtový MOV do počítača kvôli zvuku trvá dlhšie ako ho previesť v telefóne. Aplikácia to urobí tam, kde video už je.</p>'
            }
        ],
        faq: [
            { q: 'V akom formáte nahráva iPhone video?', a: 'Fotoaparát iPhonu nahráva súbory MOV, zvyčajne s videom HEVC alebo H.264 a zvukom AAC.' },
            { q: 'Dá sa previesť MOV na MP3 bez straty kvality?', a: 'Aplikácia zachová kvalitu pôvodnej nahrávky: MP3 znie rovnako ako video pri prehrávaní.' },
            { q: 'Môžem MOV uložiť ako M4A?', a: 'Áno, zvoľte formát M4A. Hodí sa na zvonenia a aplikácie Apple.' }
        ],
        related: ['mp4-to-mp3-iphone', 'convert-video-to-mp3-iphone', 'save-music-from-video-iphone'],
        card: { title: 'MOV na MP3', text: 'Zvuk z videí z fotoaparátu iPhonu.' }
    },
    {
        slug: 'video-to-m4a-iphone',
        keyword: 'video na m4a iphone',
        eyebrow: 'Video na M4A',
        title: 'Video na M4A na iPhone – MP4 a MOV na M4A zadarmo',
        description: 'Uložte zvuk z videa ako M4A na iPhone pre zvonenia, GarageBand a aplikácie Apple. Zadarmo, v zariadení, s orezaním – MP4 alebo MOV na M4A štyrmi ťuknutiami.',
        h1: 'Ako uložiť zvuk z videa ako M4A na iPhone',
        answer: `Ak chcete previesť video na M4A na iPhone, pošlite ho z Fotiek alebo Súborov do „Extrahovať zvuk“, prípadne orežte, ťuknite na „Extrahovať zvuk“ a zvoľte M4A. ${APP} uloží súbor M4A (AAC) vhodný pre GarageBand, iMovie, prehrávače aj zvonenia.`,
        intro: '<p>M4A je vlastný zvukový formát Apple. Pri porovnateľnej kvalite je menší ako MP3 a práve ten iPhone očakáva pri zvoneniach a projektoch GarageBandu.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Extrahujte do M4A', text: 'Ťuknite na „Extrahovať zvuk“ a zvoľte formát M4A.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'M4A, alebo MP3 – kedy zvoliť M4A',
                html: `<table class="guide-table"><thead><tr><th></th><th>M4A (AAC)</th><th>MP3</th></tr></thead><tbody>
<tr><td>Najlepšie pre</td><td>iPhone, Mac, zvonenia, GarageBand</td><td>Všetko ostatné – Windows, Android, auto</td></tr>
<tr><td>Veľkosť súboru</td><td>Menší pri rovnakej kvalite</td><td>O niečo väčší</td></tr>
<tr><td>Kompatibilita</td><td>Veľmi dobrá</td><td>Univerzálna</td></tr>
</tbody></table>`
            },
            {
                h2: 'Nastavte M4A ako zvonenie',
                html: '<p>V iOS 26 sa dá súbor M4A kratší ako 30 sekúnd nastaviť ako zvonenie priamo zo Súborov. Podrobne: <a href="/sk/guides/video-to-ringtone-iphone/">ako urobiť zvonenie z videa</a>.</p>'
            },
            {
                h2: 'Otvorte v GarageBande alebo iMovie',
                html: '<p>Uložte M4A do Súborov a potom ho importujte cez prehliadač súborov v GarageBande alebo iMovie – ako podkres, komentár alebo zvukový efekt.</p>'
            }
        ],
        faq: [
            { q: 'Je M4A lepšie ako MP3?', a: 'Pri rovnakom dátovom toku znie M4A (AAC) zvyčajne rovnako dobre alebo lepšie a zaberie menej miesta. MP3 je kompatibilné s viacerými zariadeniami.' },
            { q: 'Dá sa M4A vytvoriť cez Skratky?', a: 'Áno, akcia „Kódovať médiá“ s voľbou „Iba zvuk“ vytvorí M4A. Orezať zvuk ani uložiť MP3 sa však takto nedá – v aplikácii áno.' },
            { q: 'Je uloženie ako M4A zadarmo?', a: `Áno, základná extrakcia v ${APP} je zadarmo vrátane exportu do M4A.` }
        ],
        related: ['video-to-ringtone-iphone', 'convert-video-to-mp3-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Video na M4A', text: 'Formát Apple na zvonenia a GarageBand.' }
    }
);

guides.push(
    {
        slug: 'extract-audio-without-app-iphone',
        keyword: 'ako vytiahnuť zvuk z videa na iphone bez aplikácie',
        eyebrow: 'Skratky, alebo aplikácia',
        title: 'Ako vytiahnuť zvuk z videa na iPhone bez aplikácie',
        description: 'Zvuk z videa na iPhone získate aj bez aplikácie – cez Skratky a akciu „Kódovať médiá“. Kompletné nastavenie, obmedzenia tohto postupu a rýchlejšia alternatíva.',
        h1: 'Ako vytiahnuť zvuk z videa na iPhone bez aplikácie',
        answer: 'Bez aplikácií tretích strán sa zvuk dá vytiahnuť cez Skratky: pridajte akciu „Kódovať médiá“, zapnite „Iba zvuk“, pridajte „Uložiť súbor“ a zapnite zobrazenie v ponuke Zdieľať. Potom do skratky pošlite video. Výsledok je len M4A a bez orezania; pre MP3 a krátke úseky je aplikácia rýchlejšia.',
        intro: '<p>Bezplatná aplikácia Skratky od Apple vie oddeliť zvuk od videa. Nastavenie zaberie pár minút. Tu je presný recept – aj jeho obmedzenia.</p>',
        steps: [
            { name: 'Vytvorte novú skratku', text: 'Otvorte Skratky, ťuknite na + a pomenujte skratku „Zvuk z videa“.', image: 2 },
            { name: 'Pridajte „Kódovať médiá“', text: 'Ťuknite na „Pridať akciu“, vyhľadajte „Kódovať médiá“, pridajte ju, rozbaľte voľby šípkou a zapnite „Iba zvuk“.', image: 2 },
            { name: 'Pridajte „Uložiť súbor“', text: 'Pridajte akciu „Uložiť súbor“, aby sa výsledok ukladal do Súborov.', image: 4 },
            { name: 'Zapnite zobrazenie v Zdieľať', text: 'Otvorte podrobnosti skratky (ikona i), zapnite „Zobraziť v hárku zdieľania“ a povoľte typ „Médiá“. Teraz pošlite video z Fotiek a zvoľte skratku.', image: 4 }
        ],
        sections: [
            {
                h2: 'Obmedzenia postupu so Skratkami',
                html: `<ul>
<li><strong>Len M4A</strong> – MP3 nezískate.</li>
<li><strong>Bez orezania</strong> – vždy sa uloží celá zvuková stopa.</li>
<li><strong>Žiadna knižnica</strong> – súbory končia v Súboroch a hľadať či premenovávať ich musíte ručne.</li>
<li>Pri dlhých videách sa skratka môže zastaviť bez zrozumiteľnej chyby.</li>
</ul>`
            },
            {
                h2: 'Variant na jedno ťuknutie',
                html: `<p>${APP} robí to isté, ale s orezaním, voľbou MP3 alebo M4A a knižnicou všetkých extrahovaných súborov. Aplikácia je tiež priamo v ponuke Zdieľať, takže to nie je pomalšie – a nič nemusíte skladať.</p>`
            },
            {
                h2: 'Ďalšie spôsoby bez aplikácie',
                html: '<p>Zvuk sa dá oddeliť aj v iMovie alebo GarageBande, ale krokov je viac a formáty exportu sú obmedzené. Fungujú aj weby, no video musíte nahrať na internet – pozri <a href="/sk/guides/extract-audio-online-vs-app/">online, alebo aplikácia</a>.</p>'
            }
        ],
        faq: [
            { q: 'Má iPhone zabudovaný spôsob, ako extrahovať zvuk?', a: 'Fotky samostatné tlačidlo nemajú. Najbližšia zabudovaná možnosť je akcia „Kódovať médiá“ s voľbou „Iba zvuk“ v aplikácii Skratky.' },
            { q: 'V akom formáte skratka ukladá zvuk?', a: 'V M4A. Uložiť MP3 cez Skratky nejde.' },
            { q: 'Dá sa zvuk orezať skratkou?', a: `Pohodlne nie. Na orezanie použite aplikáciu s časovou osou, napríklad ${APP}.` }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-online-vs-app', 'video-to-m4a-iphone'],
        card: { title: 'Bez aplikácie (Skratky)', text: 'Bezplatný recept a jeho obmedzenia.' }
    },
    {
        slug: 'extract-audio-online-vs-app',
        keyword: 'extrahovať zvuk z videa online',
        eyebrow: 'Online, alebo aplikácia',
        title: 'Extrahovať zvuk z videa online, alebo v aplikácii na iPhone?',
        description: 'Extrahovať zvuk z videa online, alebo aplikáciou? Porovnávame súkromie, rýchlosť, obmedzenia a orezanie na iPhone – a čo zvoliť, keď máte video v telefóne.',
        h1: 'Extrahovať zvuk z videa online, alebo v aplikácii: čo zvoliť na iPhone',
        answer: `Online služby fungujú na každom zariadení, ale vyžadujú nahrať celé video, čakať na spracovanie a stiahnuť výsledok – na mobilných dátach pomalé a pri osobných nahrávkach nebezpečné. Na iPhone je aplikácia ako ${APP} rýchlejšia, funguje offline, video nepustí zo zariadenia a vie zvuk orezať.`,
        intro: '<p>Na dopyt „extrahovať zvuk z videa online“ nájdete desiatky bezplatných webov. Na notebooku s rýchlym internetom sú pohodlné. Na iPhone je situácia iná.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Porovnanie',
                html: `<table class="guide-table"><thead><tr><th></th><th>Online služba</th><th>${APP}</th></tr></thead><tbody>
<tr><td>Súkromie</td><td>Video sa nahráva na cudzí server</td><td>Zostáva v iPhone</td></tr>
<tr><td>Rýchlosť</td><td>Nahratie + poradie + stiahnutie</td><td>Sekundy, v zariadení</td></tr>
<tr><td>Bez internetu</td><td>Nie</td><td>Áno</td></tr>
<tr><td>Obmedzenia veľkosti</td><td>Časté pri bezplatných tarifách</td><td>Len úložisko iPhonu</td></tr>
<tr><td>Orezanie</td><td>Niekedy</td><td>Zabudovaná časová os</td></tr>
<tr><td>Reklamy a vyskakovacie okná</td><td>Často</td><td>Žiadne webové reklamy</td></tr>
<tr><td>Cena</td><td>Zadarmo s obmedzeniami</td><td>Základné funkcie zadarmo</td></tr>
</tbody></table>`
            },
            {
                h2: 'Kedy má online služba zmysel',
                html: '<p>Ak sedíte pri počítači s Windows a video už je tam, spoľahlivý online prevodník postačí. Nenahrávajte tam nič osobné: rodinné videá, pracovné stretnutia, materiály klientov.</p>'
            },
            {
                h2: 'Kedy je lepšia aplikácia',
                html: '<p>Keď je video v iPhone, vyhráva aplikácia: nemusíte ho nahrávať cez mobilnú sieť, čakať a sťahovať výsledok a potrebný úsek vystrihnete presne.</p>'
            }
        ],
        faq: [
            { q: 'Je bezpečné extrahovať zvuk z videa online?', a: 'Záleží na webe. Video sa nahráva na server tretej strany, takže pri osobných nahrávkach sa tomu radšej vyhnite. Aplikácie pracujúce v zariadení nič nenahrávajú.' },
            { q: 'Dá sa na iPhone zadarmo extrahovať zvuk bez nahrávania na internet?', a: `Áno. ${APP} prevádza videá zadarmo priamo v zariadení, video sa nikam neposiela.` },
            { q: 'Prečo je online prevod v telefóne taký pomalý?', a: 'Najprv sa musí nahrať celé video. Videá z telefónu sú veľké a rýchlosť nahrávania v mobilnej sieti býva oveľa nižšia ako rýchlosť sťahovania.' }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-without-app-iphone', 'mp4-to-mp3-iphone'],
        card: { title: 'Online, alebo aplikácia', text: 'Súkromie, rýchlosť a obmedzenia – porovnanie.' }
    },
    {
        slug: 'save-music-from-video-iphone',
        keyword: 'ako vytiahnuť hudbu z videa na iphone',
        eyebrow: 'Hudba',
        title: 'Ako vytiahnuť hudbu z videa na iPhone (MP3 alebo M4A)',
        description: 'Uložte pieseň alebo hudbu v pozadí z videa na iPhone ako MP3 alebo M4A. Orežte presne podľa skladby, počúvajte offline, zdieľajte. Krátky návod so snímkami.',
        h1: 'Ako vytiahnuť hudbu z videa na iPhone',
        answer: `Ak chcete vytiahnuť hudbu z videa na iPhone, otvorte video vo Fotkách, ťuknite na Zdieľať → „Extrahovať zvuk“, značkami vyberte skladbu a ťuknite na „Extrahovať zvuk“ v ${APP}. Hudba sa uloží ako MP3 alebo M4A – počúvajte ju offline v Súboroch alebo ju pošlite do ľubovoľnej aplikácie.`,
        intro: '<p>Pieseň zo svadby, cover od kamaráta, hudba z vášho strihu – niekedy je na videu najcennejší zvuk. Takto ho uložíte ako samostatný hudobný súbor.</p>',
        steps: [STEP.share, { name: 'Vyberte skladbu', text: 'Ťuknite na „Orezať video“ a posuňte žlté značky tak, aby zostala len skladba. Vypočujte si začiatok aj koniec.', image: 3 }, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Ako dosiahnuť najlepší zvuk',
                html: `<ul>
<li>Odstrihnite rozprávanie a potlesk na začiatku a na konci.</li>
<li>MP3 do auta a starších prehrávačov, M4A pre zariadenia Apple.</li>
<li>Premenujte súbor v Súboroch (podržte → „Premenovať“), aby ste ho neskôr ľahko našli.</li>
</ul>`
            },
            {
                h2: 'Autorské práva',
                html: '<p>Ukladajte hudbu z vlastných videí alebo z tých, ku ktorým máte práva. Komerčné piesne sú chránené autorským právom: osobná kópia vlastnej nahrávky je v poriadku, zverejňovať cudziu hudbu nie.</p>'
            },
            {
                h2: 'Nastavte ako zvonenie',
                html: '<p>Našli ste svojich obľúbených 30 sekúnd? <a href="/sk/guides/video-to-ringtone-iphone/">Urobte z nich zvonenie</a>.</p>'
            }
        ],
        faq: [
            { q: 'Ako dostať pieseň z videa na iPhone?', a: `Pošlite video do ${APP}, pri orezaní vyberte pieseň a ťuknite na „Extrahovať zvuk“. Pieseň sa uloží ako zvukový súbor.` },
            { q: 'Dá sa extrahovaná pieseň pridať do Apple Music?', a: 'Aplikácia Hudba v iPhone neimportuje lokálne súbory priamo. Uchovávajte súbor v Súboroch alebo synchronizujte cez Mac či PC.' },
            { q: 'Dá sa vytiahnuť hudba z videa z WhatsAppu alebo Správ?', a: 'Áno. Najprv uložte video do Fotiek alebo Súborov a potom z neho extrahujte zvuk.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-ringtone-iphone', 'mov-to-mp3-iphone'],
        card: { title: 'Vytiahnuť hudbu z videa', text: 'Nechajte si pieseň, obraz zahoďte.' }
    }
);

guides.push(
    {
        slug: 'trim-audio-from-video-iphone',
        keyword: 'ako vystrihnúť časť zvuku z videa na iphone',
        eyebrow: 'Orezanie',
        title: 'Ako vystrihnúť len časť zvuku z videa na iPhone (orezanie)',
        description: 'Potrebujete len 10 sekúnd zvuku? Orežte video na iPhone a uložte len tento úsek ako MP3 alebo M4A. Značky, predpočúvanie a export – zadarmo priamo v telefóne.',
        h1: 'Ako extrahovať len časť zvuku z videa na iPhone',
        answer: `Ak chcete vystrihnúť časť zvuku z videa na iPhone, otvorte ho v ${APP}, ťuknite na „Orezať video“, posuňte žlté značky začiatku a konca okolo požadovaného úseku, ťuknite na „Uložiť“ a potom na „Extrahovať zvuk“. Ako MP3 alebo M4A sa uloží len vybraný úsek.`,
        intro: '<p>Najčastejšie nepotrebujete celú stopu, ale citát, refrén alebo zvukový efekt. Keď orežete vopred, získate malý a čistý klip.</p>',
        steps: [
            STEP.open,
            { name: 'Ťuknite na „Orezať video“', text: 'Na obrazovke extrakcie ťuknite na „Orezať video“ a otvorí sa časová os.', image: 2 },
            { name: 'Posuňte značky', text: 'Potiahnite ľavú žltú značku na začiatok a pravú na koniec. Čas výberu ukazujú popisky. Vypočujte si výber a ťuknite na „Uložiť“.', image: 3 },
            { name: 'Extrahujte a uložte', text: 'Ťuknite na „Extrahovať zvuk“ – exportuje sa len orezaná časť. Pošlite ju alebo uložte do Súborov.', image: 4 }
        ],
        sections: [
            {
                h2: 'Tipy na presné orezanie',
                html: `<ul>
<li>Nechajte pol sekundy pred rečou a po nej, aby ste neodrezali slová.</li>
<li>Na zvonenie vyberajte najviac 30 sekúnd.</li>
<li>Potrebujete z jedného videa viac úsekov? Orezanie zopakujte pre každý – všetky súbory sa ukladajú do knižnice.</li>
</ul>`
            },
            {
                h2: 'Čo sa zvyčajne vystrihuje',
                html: '<p>Jedna veta z prejavu, refrén piesne, zvukový efekt na strih, prvé slová dieťaťa alebo tá najdôležitejšia minúta z dlhého záznamu stretnutia.</p>'
            }
        ],
        faq: [
            { q: 'Dá sa na iPhone orezať zvuk z videa?', a: `Áno. Orežte video na požadovaný úsek v ${APP} a extrahujte zvuk – uloží sa len tento úsek.` },
            { q: 'Zmení orezanie pôvodné video?', a: 'Nie. Originál vo Fotkách zostane nezmenený, oreže sa len exportovaný zvukový súbor.' },
            { q: 'Môžem z jedného videa vystrihnúť viac úsekov?', a: 'Áno. Pre každý potrebný úsek orežte a extrahujte zvuk znova.' }
        ],
        related: ['video-to-ringtone-iphone', 'save-music-from-video-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Vystrihnúť časť zvuku', text: 'Orezanie na sekundu presne.' }
    },
    {
        slug: 'screen-recording-to-audio-iphone',
        keyword: 'zvuk zo záznamu obrazovky iphone',
        eyebrow: 'Záznam obrazovky',
        title: 'Ako uložiť zvuk zo záznamu obrazovky na iPhone (MP3, M4A)',
        description: 'Premeňte záznam obrazovky iPhonu na zvukový súbor MP3 alebo M4A. Prečo je záznam bez zvuku, ako vystrihnúť potrebnú časť a uložiť zvuk. Jednoduché kroky.',
        h1: 'Ako uložiť zvuk zo záznamu obrazovky na iPhone',
        answer: `Záznamy obrazovky iPhonu sa ukladajú do Fotiek ako videá. Ak chcete zvuk, otvorte záznam, ťuknite na Zdieľať → „Extrahovať zvuk“, podľa potreby orežte a ťuknite na „Extrahovať zvuk“ v ${APP}. Ak je súbor bez zvuku, zvuk sa vôbec nenahral – pred nahrávaním zapnite mikrofón.`,
        intro: '<p>Záznam obrazovky je častý spôsob, ako si uchovať hlasovú správu, hovor na hlasitý odposluch alebo úryvok z aplikácie. Takto z neho necháte len zvuk.</p>',
        steps: [
            { name: 'Nájdite záznam vo Fotkách', text: 'Záznamy obrazovky nájdete vo Fotkách → Typy médií → Záznamy obrazovky.', image: 2 },
            { name: 'Pošlite do „Extrahovať zvuk“', text: 'Otvorte záznam, ťuknite na Zdieľať a zvoľte „Extrahovať zvuk“.', image: 2 },
            STEP.trim,
            { name: 'Extrahujte a uložte', text: 'Ťuknite na „Extrahovať zvuk“ a uložte MP3 alebo M4A do Súborov.', image: 4 }
        ],
        sections: [
            {
                h2: 'Prečo je záznam obrazovky bez zvuku?',
                html: `<ul>
<li><strong>Vypnutý mikrofón:</strong> v Ovládacom centre podržte tlačidlo Nahrávanie obrazovky a zapnite „Mikrofón“, aby sa nahrával váš hlas.</li>
<li><strong>Tichý režim:</strong> zvuky niektorých aplikácií sa v tichom režime vypínajú.</li>
<li><strong>Chránený obsah:</strong> mnohé streamovacie služby pri nahrávaní obrazovky blokujú zvuk – je to obmedzenie, ktoré sa nedá obísť.</li>
</ul>`
            },
            {
                h2: 'Rešpektujte súkromie',
                html: '<p>Hovory a rozhovory nahrávajte a ukladajte len so súhlasom všetkých účastníkov a v súlade so zákonmi vašej krajiny.</p>'
            }
        ],
        faq: [
            { q: 'Dá sa záznam obrazovky previesť na MP3?', a: 'Áno. Záznam obrazovky je bežné video, takže jeho zvuk sa dá uložiť ako MP3 alebo M4A.' },
            { q: 'Kde sú záznamy obrazovky na iPhone?', a: 'V aplikácii Fotky, v sekcii Typy médií → Záznamy obrazovky.' },
            { q: 'Prečo záznam obrazovky nemá zvuk?', a: 'Mikrofón bol vypnutý alebo aplikácia blokuje nahrávanie zvuku. Pred extrakciou overte, že sa záznam prehráva so zvukom.' }
        ],
        related: ['extract-audio-from-video-iphone', 'trim-audio-from-video-iphone', 'lecture-video-to-audio-iphone'],
        card: { title: 'Zvuk zo záznamu obrazovky', text: 'Uložte zvuk a zistite, prečo chýba.' }
    }
);

guides.push(
    {
        slug: 'lecture-video-to-audio-iphone',
        keyword: 'previesť videoprednášku na zvuk',
        eyebrow: 'Štúdium',
        title: 'Ako previesť videoprednášku na zvuk (MP3) na iPhone',
        description: 'Preveďte nahrané prednášky, webináre a prejavy na MP3 na iPhone a učte sa na cestách. Malé súbory, počúvanie offline, jednoduché zdieľanie. Krok za krokom.',
        h1: 'Ako previesť videoprednášku na zvuk na iPhone',
        answer: `Ak chcete z videoprednášky urobiť zvuk, otvorte záznam vo Fotkách alebo Súboroch, ťuknite na Zdieľať → „Extrahovať zvuk“ a potom na „Extrahovať zvuk“ v ${APP}. Uložte MP3 do Súborov a počúvajte offline – na cestách, v posilňovni alebo so zhasnutou obrazovkou, a to s oveľa menším súborom.`,
        intro: '<p>Pri prednáške je dôležité, čo sa hovorí, nie čo sa ukazuje. Keď prevediete videoprednášku na zvuk, získate podcast, ktorý si pustíte znova kdekoľvek.</p>',
        steps: [
            STEP.share,
            { name: 'Odstráňte úvod a prestávky (nepovinné)', text: 'Ťuknite na „Orezať video“ a odstráňte čakanie pred začiatkom a nepotrebnú časť s otázkami.', image: 3 },
            STEP.extract,
            { name: 'Uložte do priečinka „Prednášky“', text: 'Ťuknite na Zdieľať → Uložiť do Súborov a pre každý predmet si založte priečinok, aby ste záznamy rýchlo našli.', image: 4 }
        ],
        sections: [
            {
                h2: 'Prečo sa učiť zo zvuku',
                html: `<ul>
<li><strong>Malé súbory:</strong> hodina zvuku zaberie oveľa menej ako hodina videa.</li>
<li><strong>Zhasnutá obrazovka:</strong> počúvajte so zamknutým telefónom a šetrite batériu.</li>
<li><strong>Kdekoľvek:</strong> v električke, na prechádzke, v posilňovni – Wi‑Fi netreba.</li>
</ul>`
            },
            {
                h2: 'Urobte z toho poznámky',
                html: '<p>Potrebujete text? Importujte zvuk do aplikácie na prepis, ktorú už používate, a vyhľadávajte v texte.</p>'
            },
            {
                h2: 'Overte si pravidlá',
                html: '<p>Mnohé vysoké školy dovoľujú nahrávať prednášky pre vlastnú potrebu, ale nie ich šíriť. Pred nahrávaním alebo zdieľaním si overte pravidlá predmetu.</p>'
            }
        ],
        faq: [
            { q: 'Dá sa na iPhone počúvať video so zhasnutou obrazovkou?', a: 'Väčšina videoprehrávačov sa pri zamknutí pozastaví. Keď video prevediete na MP3, môžete ho počúvať so zhasnutou obrazovkou v Súboroch alebo v akomkoľvek prehrávači.' },
            { q: 'Zvládne to hodinová prednáška?', a: 'Áno. Dlhé záznamy sa spracujú rovnako, len o niečo dlhšie.' },
            { q: 'Dajú sa previesť záznamy zo Zoomu a webinárov?', a: 'Áno, keď je záznam MP4 vo Fotkách alebo Súboroch v iPhone.' }
        ],
        related: ['screen-recording-to-audio-iphone', 'mp4-to-mp3-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Videoprednáška na zvuk', text: 'Učte sa na cestách s kompaktnými MP3.' }
    },
    {
        slug: 'video-to-ringtone-iphone',
        keyword: 'zvonenie z videa iphone',
        eyebrow: 'Zvonenia',
        title: 'Ako urobiť zvonenie z videa na iPhone (iOS 26 a 18)',
        description: 'Z akéhokoľvek videa zvonenie pre iPhone: orežte zvuk na 30 sekúnd, uložte do Súborov a ťuknite na Zdieľať → „Použiť ako zvonenie“. iOS 26 aj GarageBand.',
        h1: 'Ako urobiť zvonenie z videa na iPhone',
        answer: `Ak chcete urobiť zvonenie z videa, otvorte ho v ${APP}, orežte na najviac 30 sekúnd, extrahujte zvuk do M4A alebo MP3 a uložte do Súborov. V iOS 26 súbor v Súboroch podržte a ťuknite na Zdieľať → „Použiť ako zvonenie“. V starších verziách iOS importujte zvuk do GarageBandu a exportujte ho ako zvonenie.`,
        intro: '<p>Smiech, pieseň z večierka, štekot psa – akýkoľvek zvuk z vašich videí môže byť zvonením. V iOS 26 je to jednoduché, ak máte zvukový súbor.</p>',
        steps: [
            STEP.share,
            { name: 'Orežte na 30 sekúnd', text: 'Ťuknite na „Orezať video“ a vyberte najviac 30 sekúnd – to je limit pre zvonenie.', image: 3 },
            { name: 'Extrahujte a uložte do Súborov', text: 'Ťuknite na „Extrahovať zvuk“ (M4A alebo MP3) a potom Zdieľať → Uložiť do Súborov.', image: 4 },
            { name: 'Použiť ako zvonenie', text: 'V Súboroch podržte zvukový súbor a ťuknite na Zdieľať → „Použiť ako zvonenie“ (iOS 26). Skontrolujte v Nastaveniach → Zvuky a haptika → Zvonenie.', image: 4 }
        ],
        sections: [
            {
                h2: 'V iOS 18: postup cez GarageBand',
                html: `<ol>
<li>Extrahujte a orežte zvuk podľa postupu vyššie a uložte ho do Súborov.</li>
<li>Otvorte GarageBand, vytvorte projekt „Záznamník zvuku“ a prepnite do zobrazenia stôp.</li>
<li>Otvorte prehliadač slučiek → Súbory → „Prehľadávať položky z aplikácie Súbory“ a potiahnite zvuk na stopu.</li>
<li>Vráťte sa do „Mojich skladieb“, podržte projekt → Zdieľať → Zvonenie → Exportovať.</li>
</ol>`
            },
            {
                h2: 'Prečo chýba „Použiť ako zvonenie“',
                html: `<ul>
<li>Súbor je dlhší ako 30 sekúnd – orežte ho znova.</li>
<li>Súbor nie je vo formáte MP3 alebo M4A.</li>
<li>iPhone ešte nemá iOS 26 – použite GarageBand.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Aké dlhé môže byť zvonenie na iPhone?', a: 'Vlastné zvonenia zo zvukových súborov môžu mať najviac 30 sekúnd.' },
            { q: 'Aký formát potrebuje zvonenie na iPhone?', a: 'V iOS 26 sa cez „Použiť ako zvonenie“ dajú nastaviť súbory MP3 alebo M4A kratšie ako 30 sekúnd.' },
            { q: 'Dá sa video nastaviť ako zvonenie priamo?', a: 'Nie. Najprv z videa extrahujte zvuk a potom zvukový súbor nastavte ako zvonenie.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-m4a-iphone', 'save-music-from-video-iphone'],
        card: { title: 'Zvonenie z videa', text: '„Použiť ako zvonenie“ v iOS 26 – v 4 krokoch.' }
    }
);
