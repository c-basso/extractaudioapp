/**
 * České návody → /cs/guides/<slug>/
 * Slugy se shodují s anglickými (build/guides/en.js), aby se stránky propojily přes hreflang.
 * Klíčová slova — viz sekce „Čeština (CS)“ v /keywords.md. Struktura polí — jako v en.js.
 * Snímky: 1 obálka · 2 obrazovka extrakce · 3 ořez · 4 nabídka Sdílet · 5 knihovna
 */

const APP = 'Extrahovat zvuk z videa⁺';

const STEP = {
    open: {
        name: 'Otevřete aplikaci a vyberte video',
        text: `Spusťte ${APP} a vyberte video z Fotek nebo Souborů. Rychleji: ve Fotkách klepněte u videa na Sdílet a zvolte „Extrahovat zvuk“.`,
        image: 2
    },
    share: {
        name: 'Pošlete video do aplikace',
        text: 'Otevřete video ve Fotkách nebo Souborech, klepněte na Sdílet a zvolte „Extrahovat zvuk“. Aplikace se otevře s již načteným videem.',
        image: 2
    },
    trim: {
        name: 'Ořízněte potřebný úsek (volitelné)',
        text: 'Klepněte na „Oříznout video“, posuňte žluté značky na začátek a konec potřebné části, poslechněte si ji a klepněte na „Uložit“.',
        image: 3
    },
    extract: {
        name: 'Klepněte na „Extrahovat zvuk“',
        text: 'Klepněte na „Extrahovat zvuk“ – zvuková stopa se převede přímo na iPhonu během pár sekund, nic se nenahrává na internet.',
        image: 2
    },
    save: {
        name: 'Uložte nebo pošlete soubor',
        text: 'Hotový zvukový soubor se objeví v knihovně. Klepnutím na Sdílet ho uložíte do Souborů, pošlete přes AirDrop nebo do libovolné aplikace.',
        image: 4
    }
};

const guides = [];
module.exports = guides;

guides.push(
    {
        slug: 'extract-audio-from-video-iphone',
        keyword: 'jak extrahovat zvuk z videa na iphonu',
        eyebrow: 'Základy',
        title: 'Jak extrahovat zvuk z videa na iPhonu – postup (2026)',
        description: 'Vyjměte zvuk z jakéhokoli videa na iPhonu čtyřmi klepnutími: vyberte video, ořízněte, klepněte na „Extrahovat zvuk“, uložte jako MP3 či M4A. Zdarma, bez cloudu.',
        h1: 'Jak extrahovat zvuk z videa na iPhonu',
        answer: `Chcete-li extrahovat zvuk z videa na iPhonu, otevřete ${APP}, vyberte video z Fotek, podle potřeby ho ořízněte a klepněte na „Extrahovat zvuk“. Aplikace během pár sekund uloží zvukovou stopu jako MP3 nebo M4A na iPhonu. Je to zdarma a funguje to bez internetu.`,
        intro: '<p>Fotky na iPhonu nemají tlačítko „uložit jen zvuk“. Můžete si sestavit zkratku (viz <a href="/cs/guides/extract-audio-without-app-iphone/">postup bez aplikace</a>) nebo nahrát video na web, ale obojí je pomalé, když potřebujete jen zvuk. Níže je nejrychlejší cesta: bezplatná aplikace, která funguje přímo z nabídky Sdílet.</p>',
        steps: [STEP.open, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Co budete potřebovat',
                html: `<ul>
<li>iPhone se systémem iOS 18.6 nebo novějším.</li>
<li>${APP} – zdarma v App Storu (asi 23 MB).</li>
<li>Video se zvukem: záznam z fotoaparátu (MOV), stažená videa (MP4), záznamy obrazovky, videa ze Zpráv.</li>
</ul>`
            },
            {
                h2: 'Nejrychlejší způsob – přes Sdílet',
                html: '<p>Aplikaci ani nemusíte otevírat. Ve <strong>Fotkách</strong> nebo <strong>Souborech</strong> otevřete video, klepněte na <strong>Sdílet</strong>, posuňte řadu aplikací a zvolte <strong>„Extrahovat zvuk“</strong>. Pokud ji nevidíte, klepněte na „Další“ a přidejte ji do oblíbených – pak ji budete mít vždy po ruce.</p>'
            },
            {
                h2: 'MP3, nebo M4A?',
                html: '<p><strong>MP3</strong> přehraje cokoli: Windows, Android, autorádia, weby i střihové programy. <strong>M4A</strong> (AAC) je nativní formát Applu: menší při stejné kvalitě, ideální pro vyzvánění, GarageBand a iMovie. Pokud váháte, zvolte MP3. Více: <a href="/cs/guides/convert-video-to-mp3-iphone/">video na MP3</a> a <a href="/cs/guides/video-to-m4a-iphone/">video na M4A</a>.</p>'
            },
            {
                h2: 'Kam se zvuk uloží?',
                html: '<p>Každý extrahovaný soubor se objeví v knihovně aplikace s délkou, velikostí a datem. Odtud klepněte na <strong>Sdílet → Uložit do Souborů</strong> a uložte ho na iCloud Drive nebo „Na iPhonu“, případně ho pošlete do WhatsAppu, Messengeru, Poznámek, GarageBandu nebo přes AirDrop do počítače.</p>'
            },
            {
                h2: 'Když něco nefunguje',
                html: `<ul>
<li><strong>Soubor je bez zvuku.</strong> Samotné video nemá zvukovou stopu – to se stává u záznamů obrazovky bez mikrofonu. Nejdřív video zkontrolujte ve Fotkách.</li>
<li><strong>Video je na iCloudu.</strong> Fotky nejprve stáhnou originál – počkejte, až se dokončí.</li>
<li><strong>Potřebujete jen 20 sekund.</strong> Ořízněte před extrakcí – viz <a href="/cs/guides/trim-audio-from-video-iphone/">jak vystřihnout část zvuku</a>.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Dá se zvuk z videa na iPhonu extrahovat zdarma?', a: `Ano. ${APP} si stáhnete zdarma a základní extrakce zvuku je také zdarma. Další funkce jsou dostupné přes nákupy v aplikaci.` },
            { q: 'Ztrácí se při extrakci kvalita?', a: 'Aplikace uloží zvukovou stopu videa jako kvalitní MP3 nebo M4A. Lepší než originál zvuk nebude, ale bude stejný jako při přehrávání videa.' },
            { q: 'Dá se extrahovat zvuk z dlouhého videa?', a: 'Ano. Přednášky, koncerty i schůzky se zpracují stejně, jen o něco déle. Pokud potřebujete jen část, ořízněte ji předem.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'trim-audio-from-video-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Jak extrahovat zvuk z videa na iPhonu', text: 'Postup na 4 klepnutí – z Fotek nebo přes Sdílet.' }
    },
    {
        slug: 'convert-video-to-mp3-iphone',
        keyword: 'jak převést video na mp3 na iphonu',
        eyebrow: 'Video na MP3',
        title: 'Jak převést video na MP3 na iPhonu – rychle a zdarma',
        description: 'Převeďte jakékoli video z iPhonu na MP3 během pár sekund. Funguje z Fotek, soubory zůstávají v zařízení a před exportem můžete ořezávat. Návod krok za krokem.',
        h1: 'Jak převést video na MP3 na iPhonu',
        answer: `Otevřete video ve Fotkách, klepněte na Sdílet a zvolte „Extrahovat zvuk“ (${APP}). Podle potřeby ořízněte, klepněte na „Extrahovat zvuk“ a uložte jako MP3. Soubor zůstane na iPhonu – můžete ho poslat do Souborů, přes AirDrop nebo do libovolné aplikace. Počítač ani registrace nejsou potřeba.`,
        intro: '<p>MP3 je nejkompatibilnější zvukový formát: přehraje ho každé auto, každý počítač i každý editor. Takhle převedete video na MP3, aniž byste pustili iPhone z ruky.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Extrahujte do MP3', text: 'Klepněte na „Extrahovat zvuk“ a zvolte formát MP3. Převod videa na MP3 probíhá přímo na iPhonu.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'Proč aplikace, a ne webový převodník?',
                html: '<p>Online převodníky vás nutí nahrát celé video, čekat ve frontě a pak MP3 znovu stáhnout – na mobilních datech je to pomalé a u osobních videí riskantní. Aplikace funguje offline, soubor drží v zařízení a umožní záznam před převodem oříznout. Podrobné srovnání: <a href="/cs/guides/extract-audio-online-vs-app/">online, nebo aplikace</a>.</p>'
            },
            {
                h2: 'Která videa lze převést na MP3?',
                html: '<p>Vše, co iPhone přehraje: záznamy z fotoaparátu (<a href="/cs/guides/mov-to-mp3-iphone/">MOV</a>), stažená videa (<a href="/cs/guides/mp4-to-mp3-iphone/">MP4</a>), <a href="/cs/guides/screen-recording-to-audio-iphone/">záznamy obrazovky</a>, videa ze Zpráv, WhatsAppu, Messengeru a AirDropu.</p>'
            },
            {
                h2: 'Co s MP3 dál',
                html: `<ul>
<li>Uložit do <strong>Souborů</strong> a poslouchat offline.</li>
<li>Poslat do počítače přes <strong>AirDrop</strong>.</li>
<li>Udělat z 30 sekund <a href="/cs/guides/video-to-ringtone-iphone/">vyzvánění</a>.</li>
<li>Přidat do GarageBandu, CapCutu nebo editoru podcastů.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Umí iPhone převést video na MP3 bez aplikace?', a: 'Přímo ne. Zkratky umí uložit zvuk jen jako M4A. Pro MP3 na iPhonu potřebujete aplikaci nebo web.' },
            { q: 'Je převod na MP3 zdarma?', a: `Ano, základní převod v ${APP} je zdarma. Další funkce přes nákupy v aplikaci.` },
            { q: 'Potřebuji k převodu videa na MP3 internet?', a: 'Ne. Převod probíhá na iPhonu a funguje offline. Předem stačí stáhnout jen videa uložená na iCloudu.' }
        ],
        related: ['mp4-to-mp3-iphone', 'mov-to-mp3-iphone', 'video-to-m4a-iphone'],
        card: { title: 'Video na MP3 na iPhonu', text: 'Jakékoli video do univerzálního MP3.' }
    }
);

guides.push(
    {
        slug: 'mp4-to-mp3-iphone',
        keyword: 'mp4 na mp3 na iphonu',
        eyebrow: 'MP4 na MP3',
        title: 'MP4 na MP3 na iPhonu: bezplatný převodník bez nahrávání',
        description: 'Převeďte MP4 na MP3 na iPhonu zdarma: otevřete soubor v Souborech nebo Fotkách a klepněte na Sdílet → „Extrahovat zvuk“. Offline, s ořezem. Jen 4 kroky.',
        h1: 'Jak převést MP4 na MP3 na iPhonu',
        answer: `Chcete-li převést MP4 na MP3 na iPhonu, otevřete soubor v Souborech nebo Fotkách, klepněte na Sdílet a zvolte „Extrahovat zvuk“. V ${APP} záznam případně ořízněte, klepněte na „Extrahovat zvuk“, zvolte MP3 a uložte. Zdarma, v zařízení, bez internetu.`,
        intro: '<p>Soubory MP4 obvykle přicházejí jako stažené soubory, přílohy e-mailů nebo přes AirDrop, a proto často leží v aplikaci <strong>Soubory</strong>, ne ve Fotkách. Aplikace pracuje s oběma.</p>',
        steps: [
            { name: 'Najděte soubor MP4', text: 'Otevřete Soubory (Stažené, iCloud Drive nebo „Na iPhonu“) nebo Fotky a najděte MP4.', image: 2 },
            { name: 'Pošlete do „Extrahovat zvuk“', text: 'Podržte soubor, zvolte Sdílet → „Extrahovat zvuk“. MP4 se otevře v aplikaci.', image: 2 },
            STEP.trim,
            { name: 'Uložte jako MP3', text: 'Klepněte na „Extrahovat zvuk“, zvolte MP3 a pak Sdílet → Uložit do Souborů, aby MP3 leželo vedle původního MP4.', image: 4 }
        ],
        sections: [
            {
                h2: 'Rozdíl mezi MP4 a MP3',
                html: '<p>MP4 je kontejner s obrazem i zvukem; MP3 obsahuje jen zvuk. Při převodu MP4 na MP3 zůstane zvuková stopa a obraz se odstraní: soubor je mnohem menší a přehraje ho jakýkoli přehrávač.</p>'
            },
            {
                h2: 'MP4 z WhatsAppu, Messengeru a e-mailu',
                html: '<p>Nejdřív přílohu uložte: v chatu otevřete video → Sdílet → „Uložit video“ (do Fotek) nebo „Uložit do Souborů“. Pak postupujte podle kroků výše. Převádějte jen vlastní videa nebo ta, k nimž máte práva.</p>'
            },
            {
                h2: 'Potřebujete M4A?',
                html: '<p>Pro vyzvánění a aplikace Applu se hodí spíš M4A. Viz <a href="/cs/guides/video-to-m4a-iphone/">jak uložit video jako M4A na iPhonu</a>.</p>'
            }
        ],
        faq: [
            { q: 'Dá se na iPhonu zdarma převést MP4 na MP3?', a: `Ano. ${APP} převádí MP4 na MP3 zdarma přímo v zařízení. Nákupy v aplikaci odemykají další funkce.` },
            { q: 'Bude MP3 menší než MP4?', a: 'Ano, obvykle mnohem menší: obrazová stopa se odstraní a zůstane jen zvuk.' },
            { q: 'Můžu převést víc souborů MP4?', a: 'Ano. Převádějte je postupně – všechny MP3 se ukládají do knihovny aplikace.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'mov-to-mp3-iphone', 'extract-audio-online-vs-app'],
        card: { title: 'MP4 na MP3 na iPhonu', text: 'Stažená MP4 ze Souborů a Fotek do MP3.' }
    },
    {
        slug: 'mov-to-mp3-iphone',
        keyword: 'mov na mp3 na iphonu',
        eyebrow: 'MOV na MP3',
        title: 'MOV na MP3 na iPhonu – zvuk z videí z fotoaparátu iPhonu',
        description: 'Videa z fotoaparátu iPhonu jsou ve formátu MOV. Převeďte MOV na MP3 přímo v telefonu: vyberte video, ořízněte a klepněte na „Extrahovat zvuk“. Zdarma a offline.',
        h1: 'Jak převést MOV na MP3 na iPhonu',
        answer: `Všechna videa z fotoaparátu iPhonu se ukládají ve formátu MOV. Pro MP3 otevřete video ve Fotkách, klepněte na Sdílet → „Extrahovat zvuk“, podle potřeby ořízněte a klepněte na „Extrahovat zvuk“ v ${APP}. MP3 se uloží na iPhonu – počítač není potřeba.`,
        intro: '<p>MOV je videoformát Applu, ve kterém natáčí fotoaparát iPhonu: koncerty, proslovy, kamaráda s kytarou, hlas, který si chcete uchovat. Jako MP3 si ten zvuk pustíte kdekoli.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Kdy se hodí MOV na MP3',
                html: `<ul>
<li>Uchovat zvuk koncertu nebo vystoupení, které jste natočili.</li>
<li>Proměnit přípitek nebo proslov ve zvukovou vzpomínku.</li>
<li>Poslat záznam zkoušky kapele bez obřího videa.</li>
<li>Poslouchat <a href="/cs/guides/lecture-video-to-audio-iphone/">nahranou přednášku</a> na cestách.</li>
</ul>`
            },
            {
                h2: 'HEVC, 4K a filmový režim',
                html: '<p>Videa v HEVC a 4K se zpracují stejně. Převádí se jen zvuk, takže i velmi velké soubory MOV dají kompaktní zvukové soubory.</p>'
            },
            {
                h2: 'Proč se obejít bez počítače',
                html: '<p>Přenést několikagigabajtový MOV do počítače kvůli zvuku trvá déle, než ho převést v telefonu. Aplikace to udělá tam, kde video už je.</p>'
            }
        ],
        faq: [
            { q: 'V jakém formátu natáčí iPhone?', a: 'Fotoaparát iPhonu nahrává soubory MOV, obvykle s videem HEVC nebo H.264 a zvukem AAC.' },
            { q: 'Dá se převést MOV na MP3 bez ztráty kvality?', a: 'Aplikace zachová kvalitu původního záznamu: MP3 zní stejně jako video při přehrávání.' },
            { q: 'Můžu MOV uložit jako M4A?', a: 'Ano, zvolte formát M4A. Hodí se pro vyzvánění a aplikace Applu.' }
        ],
        related: ['mp4-to-mp3-iphone', 'convert-video-to-mp3-iphone', 'save-music-from-video-iphone'],
        card: { title: 'MOV na MP3', text: 'Zvuk z videí z fotoaparátu iPhonu.' }
    },
    {
        slug: 'video-to-m4a-iphone',
        keyword: 'video na m4a na iphonu',
        eyebrow: 'Video na M4A',
        title: 'Video na M4A na iPhonu – MP4 a MOV na M4A zdarma',
        description: 'Uložte zvuk z videa jako M4A na iPhonu pro vyzvánění, GarageBand a aplikace Applu. Zdarma, v zařízení, s ořezem. MP4 nebo MOV na M4A čtyřmi klepnutími.',
        h1: 'Jak uložit zvuk z videa jako M4A na iPhonu',
        answer: `Chcete-li převést video na M4A na iPhonu, pošlete ho z Fotek nebo Souborů do „Extrahovat zvuk“, případně ořízněte, klepněte na „Extrahovat zvuk“ a zvolte M4A. ${APP} uloží soubor M4A (AAC) vhodný pro GarageBand, iMovie, přehrávače i vyzvánění.`,
        intro: '<p>M4A je nativní zvukový formát Applu. Při srovnatelné kvalitě je menší než MP3 a právě ten iPhone očekává pro vyzvánění a projekty GarageBandu.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Extrahujte do M4A', text: 'Klepněte na „Extrahovat zvuk“ a zvolte formát M4A.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'M4A, nebo MP3 – kdy zvolit M4A',
                html: `<table class="guide-table"><thead><tr><th></th><th>M4A (AAC)</th><th>MP3</th></tr></thead><tbody>
<tr><td>Nejlepší pro</td><td>iPhone, Mac, vyzvánění, GarageBand</td><td>Vše ostatní – Windows, Android, auto</td></tr>
<tr><td>Velikost souboru</td><td>Menší při stejné kvalitě</td><td>O něco větší</td></tr>
<tr><td>Kompatibilita</td><td>Velmi dobrá</td><td>Univerzální</td></tr>
</tbody></table>`
            },
            {
                h2: 'Nastavte M4A jako vyzvánění',
                html: '<p>V iOS 26 lze soubor M4A kratší než 30 sekund nastavit jako vyzvánění přímo ze Souborů. Podrobně: <a href="/cs/guides/video-to-ringtone-iphone/">jak udělat vyzvánění z videa</a>.</p>'
            },
            {
                h2: 'Otevřete v GarageBandu nebo iMovie',
                html: '<p>Uložte M4A do Souborů a pak ho importujte přes prohlížeč souborů v GarageBandu nebo iMovie – jako podkres, komentář nebo zvukový efekt.</p>'
            }
        ],
        faq: [
            { q: 'Je M4A lepší než MP3?', a: 'Při stejném datovém toku zní M4A (AAC) obvykle stejně nebo lépe a zabere méně místa. MP3 je kompatibilní s více zařízeními.' },
            { q: 'Dá se M4A vytvořit přes Zkratky?', a: 'Ano, akce „Kódovat média“ s volbou „Pouze zvuk“ vytvoří M4A. Oříznout zvuk nebo uložit MP3 ale takto nejde – v aplikaci ano.' },
            { q: 'Je uložení jako M4A zdarma?', a: `Ano, základní extrakce v ${APP} je zdarma včetně exportu do M4A.` }
        ],
        related: ['video-to-ringtone-iphone', 'convert-video-to-mp3-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Video na M4A', text: 'Formát Applu pro vyzvánění a GarageBand.' }
    }
);

guides.push(
    {
        slug: 'extract-audio-without-app-iphone',
        keyword: 'jak vyjmout zvuk z videa na iphonu bez aplikace',
        eyebrow: 'Zkratky, nebo aplikace',
        title: 'Jak vyjmout zvuk z videa na iPhonu bez aplikace',
        description: 'Zvuk z videa na iPhonu získáte i bez aplikace – přes Zkratky a akci „Kódovat média“. Kompletní nastavení, omezení tohoto postupu a rychlejší alternativa.',
        h1: 'Jak vyjmout zvuk z videa na iPhonu bez aplikace',
        answer: 'Bez aplikací třetích stran se zvuk dá vyjmout přes Zkratky: přidejte akci „Kódovat média“, zapněte „Pouze zvuk“, přidejte „Uložit soubor“ a zapněte zobrazení v nabídce Sdílet. Pak do zkratky pošlete video. Výsledek je jen M4A a bez ořezu; pro MP3 a krátké úseky je aplikace rychlejší.',
        intro: '<p>Bezplatná aplikace Zkratky od Applu umí oddělit zvuk od videa. Nastavení zabere pár minut. Tady je přesný recept – i jeho omezení.</p>',
        steps: [
            { name: 'Vytvořte novou zkratku', text: 'Otevřete Zkratky, klepněte na + a pojmenujte zkratku „Zvuk z videa“.', image: 2 },
            { name: 'Přidejte „Kódovat média“', text: 'Klepněte na „Přidat akci“, vyhledejte „Kódovat média“, přidejte ji, rozbalte volby šipkou a zapněte „Pouze zvuk“.', image: 2 },
            { name: 'Přidejte „Uložit soubor“', text: 'Přidejte akci „Uložit soubor“, aby se výsledek ukládal do Souborů.', image: 4 },
            { name: 'Zapněte zobrazení ve Sdílet', text: 'Otevřete podrobnosti zkratky (ikona i), zapněte „Zobrazit v listu sdílení“ a povolte typ „Média“. Teď pošlete video z Fotek a zvolte zkratku.', image: 4 }
        ],
        sections: [
            {
                h2: 'Omezení postupu se Zkratkami',
                html: `<ul>
<li><strong>Jen M4A</strong> – MP3 nezískáte.</li>
<li><strong>Bez ořezu</strong> – vždy se uloží celá zvuková stopa.</li>
<li><strong>Žádná knihovna</strong> – soubory končí v Souborech a hledat či přejmenovávat je musíte ručně.</li>
<li>U dlouhých videí se zkratka může zastavit bez srozumitelné chyby.</li>
</ul>`
            },
            {
                h2: 'Varianta na jedno klepnutí',
                html: `<p>${APP} dělá totéž, ale s ořezem, volbou MP3 nebo M4A a knihovnou všech extrahovaných souborů. Aplikace je také přímo v nabídce Sdílet, takže to není pomalejší – a nic nemusíte sestavovat.</p>`
            },
            {
                h2: 'Další způsoby bez aplikací',
                html: '<p>Zvuk lze oddělit i v iMovie nebo GarageBandu, ale kroků je víc a formáty exportu jsou omezené. Fungují i weby, ale video musíte nahrát na internet – viz <a href="/cs/guides/extract-audio-online-vs-app/">online, nebo aplikace</a>.</p>'
            }
        ],
        faq: [
            { q: 'Má iPhone vestavěný způsob, jak extrahovat zvuk?', a: 'Fotky samostatné tlačítko nemají. Nejbližší vestavěná možnost je akce „Kódovat média“ s volbou „Pouze zvuk“ v aplikaci Zkratky.' },
            { q: 'V jakém formátu zkratka ukládá zvuk?', a: 'V M4A. Uložit MP3 přes Zkratky nejde.' },
            { q: 'Dá se zvuk oříznout zkratkou?', a: `Pohodlně ne. Pro ořez použijte aplikaci s časovou osou, například ${APP}.` }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-online-vs-app', 'video-to-m4a-iphone'],
        card: { title: 'Bez aplikace (Zkratky)', text: 'Bezplatný recept a jeho omezení.' }
    },
    {
        slug: 'extract-audio-online-vs-app',
        keyword: 'extrahovat zvuk z videa online',
        eyebrow: 'Online, nebo aplikace',
        title: 'Extrahovat zvuk z videa online, nebo v aplikaci na iPhonu?',
        description: 'Extrahovat zvuk z videa online, nebo aplikací? Srovnáváme soukromí, rychlost, limity a ořez na iPhonu – a co zvolit, když máte video v telefonu.',
        h1: 'Extrahovat zvuk z videa online, nebo v aplikaci: co zvolit na iPhonu',
        answer: `Online služby fungují na každém zařízení, ale vyžadují nahrát celé video, počkat na zpracování a stáhnout výsledek – na mobilních datech pomalé a u osobních záznamů nebezpečné. Na iPhonu je aplikace jako ${APP} rychlejší, funguje offline, video nepustí ze zařízení a umí zvuk oříznout.`,
        intro: '<p>Na dotaz „extrahovat zvuk z videa online“ najdete desítky bezplatných webů. Na notebooku s rychlým internetem jsou pohodlné. Na iPhonu je situace jiná.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Srovnání',
                html: `<table class="guide-table"><thead><tr><th></th><th>Online služba</th><th>${APP}</th></tr></thead><tbody>
<tr><td>Soukromí</td><td>Video se nahrává na cizí server</td><td>Zůstává na iPhonu</td></tr>
<tr><td>Rychlost</td><td>Nahrání + fronta + stažení</td><td>Sekundy, v zařízení</td></tr>
<tr><td>Bez internetu</td><td>Ne</td><td>Ano</td></tr>
<tr><td>Limity velikosti</td><td>Často u bezplatných tarifů</td><td>Jen úložiště iPhonu</td></tr>
<tr><td>Ořez</td><td>Někdy</td><td>Vestavěná časová osa</td></tr>
<tr><td>Reklamy a vyskakovací okna</td><td>Často</td><td>Žádné webové reklamy</td></tr>
<tr><td>Cena</td><td>Zdarma s omezeními</td><td>Základní funkce zdarma</td></tr>
</tbody></table>`
            },
            {
                h2: 'Kdy má online služba smysl',
                html: '<p>Pokud sedíte u počítače s Windows a video už tam je, spolehlivý webový převodník postačí. Nenahrávejte tam nic osobního: rodinná videa, pracovní schůzky, materiály klientů.</p>'
            },
            {
                h2: 'Kdy je lepší aplikace',
                html: '<p>Když je video na iPhonu, vyhrává aplikace: nemusíte ho nahrávat přes mobilní síť, čekat a stahovat výsledek a potřebný úsek vystřihnete přesně.</p>'
            }
        ],
        faq: [
            { q: 'Je extrakce zvuku z videa online bezpečná?', a: 'Záleží na webu. Video se nahrává na server třetí strany, takže u osobních záznamů je lepší se tomu vyhnout. Aplikace pracující v zařízení nic nenahrávají.' },
            { q: 'Dá se na iPhonu zdarma extrahovat zvuk bez nahrávání na internet?', a: `Ano. ${APP} převádí videa zdarma přímo v zařízení, video se nikam neposílá.` },
            { q: 'Proč je online převod v telefonu tak pomalý?', a: 'Nejdřív se musí nahrát celé video. Videa z telefonu jsou velká a rychlost nahrávání v mobilní síti bývá mnohem nižší než rychlost stahování.' }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-without-app-iphone', 'mp4-to-mp3-iphone'],
        card: { title: 'Online, nebo aplikace', text: 'Soukromí, rychlost a limity – srovnání.' }
    },
    {
        slug: 'save-music-from-video-iphone',
        keyword: 'jak vyjmout hudbu z videa na iphonu',
        eyebrow: 'Hudba',
        title: 'Jak vyjmout hudbu z videa na iPhonu (MP3 nebo M4A)',
        description: 'Uložte píseň nebo hudbu na pozadí z videa na iPhonu jako MP3 nebo M4A. Ořízněte přesně podle skladby, poslouchejte offline, sdílejte. Krátký návod se snímky.',
        h1: 'Jak vyjmout hudbu z videa na iPhonu',
        answer: `Chcete-li vyjmout hudbu z videa na iPhonu, otevřete video ve Fotkách, klepněte na Sdílet → „Extrahovat zvuk“, označte značkami píseň a klepněte na „Extrahovat zvuk“ v ${APP}. Hudba se uloží jako MP3 nebo M4A – můžete ji poslouchat offline v Souborech nebo poslat do libovolné aplikace.`,
        intro: '<p>Píseň ze svatby, cover od kamaráda, hudba z vašeho sestřihu – někdy je na videu nejcennější zvuk. Takhle ho uložíte jako samostatný hudební soubor.</p>',
        steps: [STEP.share, { name: 'Označte píseň', text: 'Klepněte na „Oříznout video“ a posuňte žluté značky tak, aby zůstala jen píseň. Poslechněte si začátek i konec.', image: 3 }, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Jak dosáhnout nejlepšího zvuku',
                html: `<ul>
<li>Odstřihněte povídání a potlesk na začátku a na konci.</li>
<li>MP3 do auta a starších přehrávačů, M4A pro zařízení Apple.</li>
<li>Přejmenujte soubor v Souborech (podržte → „Přejmenovat“), ať ho později snadno najdete.</li>
</ul>`
            },
            {
                h2: 'Autorská práva',
                html: '<p>Ukládejte hudbu z vlastních videí nebo z těch, k nimž máte práva. Komerční písně jsou chráněny autorským právem: osobní kopie vlastního záznamu je v pořádku, zveřejňovat cizí hudbu ne.</p>'
            },
            {
                h2: 'Nastavte jako vyzvánění',
                html: '<p>Našli jste 30 oblíbených sekund? <a href="/cs/guides/video-to-ringtone-iphone/">Udělejte z nich vyzvánění</a>.</p>'
            }
        ],
        faq: [
            { q: 'Jak dostat píseň z videa na iPhonu?', a: `Pošlete video do ${APP}, při ořezu označte píseň a klepněte na „Extrahovat zvuk“. Píseň se uloží jako zvukový soubor.` },
            { q: 'Dá se extrahovaná píseň přidat do Apple Music?', a: 'Aplikace Hudba na iPhonu neimportuje místní soubory přímo. Uchovávejte soubor v Souborech nebo synchronizujte přes Mac či PC.' },
            { q: 'Dá se vyjmout hudba z videa z WhatsAppu nebo Zpráv?', a: 'Ano. Nejdřív video uložte do Fotek nebo Souborů a pak z něj extrahujte zvuk.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-ringtone-iphone', 'mov-to-mp3-iphone'],
        card: { title: 'Vyjmout hudbu z videa', text: 'Nechte si píseň, obraz zahoďte.' }
    }
);

guides.push(
    {
        slug: 'trim-audio-from-video-iphone',
        keyword: 'jak vystřihnout část zvuku z videa na iphonu',
        eyebrow: 'Ořez',
        title: 'Jak vystřihnout část zvuku z videa na iPhonu (ořez)',
        description: 'Potřebujete jen 10 sekund zvuku? Ořízněte video na iPhonu a uložte jen tento úsek jako MP3 nebo M4A. Značky, předposlech a export – vše zdarma přímo v telefonu.',
        h1: 'Jak extrahovat jen část zvuku z videa na iPhonu',
        answer: `Chcete-li vystřihnout část zvuku z videa na iPhonu, otevřete ho v ${APP}, klepněte na „Oříznout video“, posuňte žluté značky začátku a konce kolem potřebného úseku, klepněte na „Uložit“ a pak na „Extrahovat zvuk“. Jako MP3 nebo M4A se uloží jen vybraný úsek.`,
        intro: '<p>Nejčastěji nepotřebujete celou stopu, ale citát, refrén nebo zvukový efekt. Když ořízněte předem, získáte malý a čistý klip.</p>',
        steps: [
            STEP.open,
            { name: 'Klepněte na „Oříznout video“', text: 'Na obrazovce extrakce klepněte na „Oříznout video“ a otevře se časová osa.', image: 2 },
            { name: 'Posuňte značky', text: 'Přetáhněte levou žlutou značku na začátek a pravou na konec. Čas výběru ukazují popisky. Poslechněte si výběr a klepněte na „Uložit“.', image: 3 },
            { name: 'Extrahujte a uložte', text: 'Klepněte na „Extrahovat zvuk“ – exportuje se jen oříznutá část. Pošlete ji nebo uložte do Souborů.', image: 4 }
        ],
        sections: [
            {
                h2: 'Tipy pro přesný ořez',
                html: `<ul>
<li>Nechte půl sekundy před a po řeči, ať neuříznete slova.</li>
<li>Pro vyzvánění vybírejte nejvýše 30 sekund.</li>
<li>Potřebujete z jednoho videa víc úseků? Ořez opakujte pro každý – všechny soubory se ukládají do knihovny.</li>
</ul>`
            },
            {
                h2: 'Co se obvykle stříhá',
                html: '<p>Jedna věta z projevu, refrén písně, zvukový efekt pro střih, první slova dítěte nebo ta nejdůležitější minuta z dlouhého záznamu schůzky.</p>'
            }
        ],
        faq: [
            { q: 'Dá se na iPhonu oříznout zvuk z videa?', a: `Ano. Ořízněte video na potřebný úsek v ${APP} a extrahujte zvuk – uloží se jen tento úsek.` },
            { q: 'Změní ořez původní video?', a: 'Ne. Originál ve Fotkách zůstane beze změny, ořízne se jen exportovaný zvukový soubor.' },
            { q: 'Můžu z jednoho videa vystřihnout víc úseků?', a: 'Ano. Pro každý potřebný úsek ořízněte a extrahujte zvuk znovu.' }
        ],
        related: ['video-to-ringtone-iphone', 'save-music-from-video-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Vystřihnout část zvuku', text: 'Ořez na sekundu přesně.' }
    },
    {
        slug: 'screen-recording-to-audio-iphone',
        keyword: 'jak uložit zvuk ze záznamu obrazovky na iphonu',
        eyebrow: 'Záznam obrazovky',
        title: 'Jak uložit zvuk ze záznamu obrazovky na iPhonu (MP3, M4A)',
        description: 'Proměňte záznam obrazovky iPhonu ve zvukový soubor MP3 nebo M4A. Proč je záznam bez zvuku, jak vystřihnout potřebnou část a uložit zvuk. Jednoduché kroky.',
        h1: 'Jak uložit zvuk ze záznamu obrazovky na iPhonu',
        answer: `Záznamy obrazovky iPhonu se ukládají do Fotek jako videa. Pro zvuk záznam otevřete, klepněte na Sdílet → „Extrahovat zvuk“, podle potřeby ořízněte a klepněte na „Extrahovat zvuk“ v ${APP}. Pokud je soubor bez zvuku, zvuk se vůbec nenahrál – před nahráváním zapněte mikrofon.`,
        intro: '<p>Záznam obrazovky je častý způsob, jak uchovat hlasovou zprávu, hovor na hlasitý odposlech nebo úryvek z aplikace. Takhle z něj necháte jen zvuk.</p>',
        steps: [
            { name: 'Najděte záznam ve Fotkách', text: 'Záznamy obrazovky najdete ve Fotkách → Typy médií → Záznamy obrazovky.', image: 2 },
            { name: 'Pošlete do „Extrahovat zvuk“', text: 'Otevřete záznam, klepněte na Sdílet a zvolte „Extrahovat zvuk“.', image: 2 },
            STEP.trim,
            { name: 'Extrahujte a uložte', text: 'Klepněte na „Extrahovat zvuk“ a uložte MP3 nebo M4A do Souborů.', image: 4 }
        ],
        sections: [
            {
                h2: 'Proč je záznam obrazovky bez zvuku?',
                html: `<ul>
<li><strong>Vypnutý mikrofon:</strong> v Ovládacím centru podržte tlačítko Nahrávání obrazovky a zapněte „Mikrofon“, aby se nahrával váš hlas.</li>
<li><strong>Tichý režim:</strong> zvuky některých aplikací se v tichém režimu vypínají.</li>
<li><strong>Chráněný obsah:</strong> mnoho streamovacích služeb při nahrávání obrazovky blokuje zvuk – je to omezení a obejít ho nelze.</li>
</ul>`
            },
            {
                h2: 'Respektujte soukromí',
                html: '<p>Hovory a rozhovory nahrávejte a ukládejte jen se souhlasem všech účastníků a v souladu se zákony vaší země.</p>'
            }
        ],
        faq: [
            { q: 'Dá se záznam obrazovky převést na MP3?', a: 'Ano. Záznam obrazovky je běžné video, takže jeho zvuk lze uložit jako MP3 nebo M4A.' },
            { q: 'Kde jsou záznamy obrazovky na iPhonu?', a: 'V aplikaci Fotky, v sekci Typy médií → Záznamy obrazovky.' },
            { q: 'Proč záznam obrazovky nemá zvuk?', a: 'Byl vypnutý mikrofon nebo aplikace blokuje nahrávání zvuku. Před extrakcí ověřte, že se záznam přehrává se zvukem.' }
        ],
        related: ['extract-audio-from-video-iphone', 'trim-audio-from-video-iphone', 'lecture-video-to-audio-iphone'],
        card: { title: 'Zvuk ze záznamu obrazovky', text: 'Uložte zvuk a zjistěte, proč chybí.' }
    }
);

guides.push(
    {
        slug: 'lecture-video-to-audio-iphone',
        keyword: 'jak převést videopřednášku na zvuk',
        eyebrow: 'Studium',
        title: 'Jak převést videopřednášku na zvuk MP3 na iPhonu',
        description: 'Převeďte nahrané přednášky, webináře a projevy na MP3 na iPhonu a učte se na cestách. Malé soubory, poslech offline, snadné sdílení. Návod krok za krokem.',
        h1: 'Jak převést videopřednášku na zvuk na iPhonu',
        answer: `Chcete-li z videopřednášky udělat zvuk, otevřete záznam ve Fotkách nebo Souborech, klepněte na Sdílet → „Extrahovat zvuk“ a pak na „Extrahovat zvuk“ v ${APP}. Uložte MP3 do Souborů a poslouchejte offline – na cestách, v posilovně nebo se zhasnutým displejem, a to s mnohem menší velikostí.`,
        intro: '<p>U přednášky je důležité, co se říká, ne co se ukazuje. Když převedete videopřednášku na zvuk, získáte podcast, který si pustíte znovu kdekoli.</p>',
        steps: [
            STEP.share,
            { name: 'Odstraňte úvod a přestávky (volitelné)', text: 'Klepněte na „Oříznout video“ a odstraňte čekání před začátkem a nepotřebnou část s dotazy.', image: 3 },
            STEP.extract,
            { name: 'Uložte do složky „Přednášky“', text: 'Klepněte na Sdílet → Uložit do Souborů a pro každý předmět si založte složku, ať záznamy rychle najdete.', image: 4 }
        ],
        sections: [
            {
                h2: 'Proč se učit ze zvuku',
                html: `<ul>
<li><strong>Malé soubory:</strong> hodina zvuku zabere mnohem méně než hodina videa.</li>
<li><strong>Zhasnutý displej:</strong> poslouchejte se zamčeným telefonem a šetřete baterii.</li>
<li><strong>Kdekoli:</strong> v tramvaji, na procházce, v posilovně – Wi‑Fi není potřeba.</li>
</ul>`
            },
            {
                h2: 'Udělejte z toho poznámky',
                html: '<p>Potřebujete text? Importujte zvuk do aplikace pro přepis, kterou už používáte, a hledejte v textu.</p>'
            },
            {
                h2: 'Ověřte si pravidla',
                html: '<p>Mnoho vysokých škol dovoluje nahrávat přednášky pro vlastní potřebu, ale ne je šířit. Před nahráváním nebo sdílením si ověřte pravidla předmětu.</p>'
            }
        ],
        faq: [
            { q: 'Dá se na iPhonu poslouchat video se zhasnutým displejem?', a: 'Většina videopřehrávačů se při zamčení pozastaví. Když video převedete na MP3, můžete ho poslouchat se zhasnutým displejem v Souborech nebo v jakémkoli přehrávači.' },
            { q: 'Zvládne to hodinová přednáška?', a: 'Ano. Dlouhé záznamy se zpracují stejně, jen o něco déle.' },
            { q: 'Dají se převést záznamy ze Zoomu a webinářů?', a: 'Ano, jakmile je záznam MP4 ve Fotkách nebo Souborech na iPhonu.' }
        ],
        related: ['screen-recording-to-audio-iphone', 'mp4-to-mp3-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Videopřednáška na zvuk', text: 'Učte se na cestách s kompaktními MP3.' }
    },
    {
        slug: 'video-to-ringtone-iphone',
        keyword: 'jak udělat vyzvánění z videa na iphonu',
        eyebrow: 'Vyzvánění',
        title: 'Jak udělat vyzvánění z videa na iPhonu (iOS 26 a 18)',
        description: 'Z jakéhokoli videa vyzvánění pro iPhone: ořízněte zvuk na 30 sekund, uložte do Souborů a klepněte na Sdílet → „Použít jako vyzvánění“. iOS 26 i GarageBand.',
        h1: 'Jak udělat vyzvánění z videa na iPhonu',
        answer: `Chcete-li udělat vyzvánění z videa, otevřete ho v ${APP}, ořízněte na 30 sekund, extrahujte zvuk do M4A nebo MP3 a uložte do Souborů. V iOS 26 soubor v Souborech podržte a klepněte na Sdílet → „Použít jako vyzvánění“. Ve starších verzích iOS importujte zvuk do GarageBandu a exportujte ho jako vyzvánění.`,
        intro: '<p>Smích, píseň z večírku, štěkot psa – jakýkoli zvuk z vašich videí může být vyzváněním. V iOS 26 je to jednoduché, pokud máte zvukový soubor.</p>',
        steps: [
            STEP.share,
            { name: 'Ořízněte na 30 sekund', text: 'Klepněte na „Oříznout video“ a vyberte nejvýše 30 sekund – to je limit pro vyzvánění.', image: 3 },
            { name: 'Extrahujte a uložte do Souborů', text: 'Klepněte na „Extrahovat zvuk“ (M4A nebo MP3) a pak Sdílet → Uložit do Souborů.', image: 4 },
            { name: 'Použít jako vyzvánění', text: 'V Souborech podržte zvukový soubor a klepněte na Sdílet → „Použít jako vyzvánění“ (iOS 26). Zkontrolujte v Nastavení → Zvuky a haptika → Vyzvánění.', image: 4 }
        ],
        sections: [
            {
                h2: 'V iOS 18: postup přes GarageBand',
                html: `<ol>
<li>Extrahujte a ořízněte zvuk podle postupu výše a uložte ho do Souborů.</li>
<li>Otevřete GarageBand, vytvořte projekt „Záznamník zvuku“ a přepněte do zobrazení stop.</li>
<li>Otevřete prohlížeč smyček → Soubory → „Procházet položky z aplikace Soubory“ a přetáhněte zvuk na stopu.</li>
<li>Vraťte se do „Mých skladeb“, podržte projekt → Sdílet → Vyzvánění → Exportovat.</li>
</ol>`
            },
            {
                h2: 'Proč chybí „Použít jako vyzvánění“',
                html: `<ul>
<li>Soubor je delší než 30 sekund – ořízněte ho znovu.</li>
<li>Soubor není ve formátu MP3 nebo M4A.</li>
<li>iPhone ještě nemá iOS 26 – použijte GarageBand.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Jak dlouhé může být vyzvánění na iPhonu?', a: 'Vlastní vyzvánění ze zvukových souborů mohou mít nejvýše 30 sekund.' },
            { q: 'Jaký formát potřebuje vyzvánění na iPhonu?', a: 'V iOS 26 lze přes „Použít jako vyzvánění“ nastavit soubory MP3 nebo M4A kratší než 30 sekund.' },
            { q: 'Dá se video nastavit jako vyzvánění přímo?', a: 'Ne. Nejdřív z videa extrahujte zvuk a pak zvukový soubor nastavte jako vyzvánění.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-m4a-iphone', 'save-music-from-video-iphone'],
        card: { title: 'Vyzvánění z videa', text: '„Použít jako vyzvánění“ v iOS 26 – ve 4 krocích.' }
    }
);
