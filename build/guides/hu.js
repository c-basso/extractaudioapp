/**
 * Magyar útmutatók → /hu/guides/<slug>/
 * A slugok megegyeznek az angolokkal (build/guides/en.js), így az oldalak hreflanggal kapcsolódnak.
 * Kulcsszavak — lásd a „Magyar (HU)” részt a /keywords.md fájlban. Mezőszerkezet — mint az en.js-ben.
 * Képernyőképek: 1 borító · 2 kinyerés képernyő · 3 vágás · 4 Megosztás menü · 5 könyvtár
 */

const APP = 'Hang kinyerése videóból⁺';

const STEP = {
    open: {
        name: 'Nyissa meg az alkalmazást, és válasszon videót',
        text: `Indítsa el a(z) ${APP} alkalmazást, és válasszon videót a Fotókból vagy a Fájlokból. Gyorsabban: a Fotókban koppintson a videón a Megosztásra, és válassza a „Hang kinyerése” lehetőséget.`,
        image: 2
    },
    share: {
        name: 'Küldje a videót az alkalmazásba',
        text: 'Nyissa meg a videót a Fotókban vagy a Fájlokban, koppintson a Megosztásra, és válassza a „Hang kinyerése” lehetőséget. Az alkalmazás a már betöltött videóval nyílik meg.',
        image: 2
    },
    trim: {
        name: 'Vágja ki a kívánt részt (nem kötelező)',
        text: 'Koppintson a „Videó vágása” gombra, húzza a sárga jelölőket a kívánt rész elejére és végére, hallgassa meg, majd koppintson a „Mentés” gombra.',
        image: 3
    },
    extract: {
        name: 'Koppintson a „Hang kinyerése” gombra',
        text: 'Koppintson a „Hang kinyerése” gombra – a hangsáv közvetlenül az iPhone-on konvertálódik másodpercek alatt, és semmi sem kerül fel az internetre.',
        image: 2
    },
    save: {
        name: 'Mentse vagy küldje el a fájlt',
        text: 'A kész hangfájl megjelenik a könyvtárban. Koppintson a Megosztásra, hogy a Fájlokba mentse, AirDroppal vagy bármely alkalmazásba küldje.',
        image: 4
    }
};

const guides = [];
module.exports = guides;

guides.push(
    {
        slug: 'extract-audio-from-video-iphone',
        keyword: 'hang kinyerése videóból iphone',
        eyebrow: 'Alapok',
        title: 'Hang kinyerése videóból iPhone-on – lépésről lépésre',
        description: 'Nyerje ki a hangot bármely videóból iPhone-on négy koppintással: válasszon videót, vágja meg, koppintson a „Hang kinyerése” gombra, és mentse MP3-ként.',
        h1: 'Hogyan lehet hangot kinyerni videóból iPhone-on',
        answer: `A hang videóból való kinyeréséhez iPhone-on nyissa meg a(z) ${APP} alkalmazást, válassza ki a videót a Fotókból, szükség esetén vágja meg, és koppintson a „Hang kinyerése” gombra. Az alkalmazás másodpercek alatt MP3-ként vagy M4A-ként menti a hangsávot az iPhone-ra. Ingyenes, és internet nélkül is működik.`,
        intro: '<p>Az iPhone Fotók alkalmazásában nincs „csak a hang mentése” gomb. Készíthet parancsot (lásd <a href="/hu/guides/extract-audio-without-app-iphone/">az alkalmazás nélküli módszert</a>), vagy feltöltheti a videót egy weboldalra, de mindkettő lassú, ha csak a hangra van szüksége. Íme a leggyorsabb út: egy ingyenes alkalmazás, amely közvetlenül a Megosztás menüből működik.</p>',
        steps: [STEP.open, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Amire szüksége lesz',
                html: `<ul>
<li>iPhone iOS 18.6 vagy újabb rendszerrel.</li>
<li>${APP} – ingyenes az App Store-ban (kb. 23 MB).</li>
<li>Hangos videó: kamerás felvételek (MOV), letöltött videók (MP4), képernyőfelvételek, videók az Üzenetekből.</li>
</ul>`
            },
            {
                h2: 'A leggyorsabb mód – a Megosztáson keresztül',
                html: '<p>Még meg sem kell nyitnia az alkalmazást. A <strong>Fotókban</strong> vagy a <strong>Fájlokban</strong> nyissa meg a videót, koppintson a <strong>Megosztásra</strong>, görgesse az alkalmazások sorát, és válassza a <strong>„Hang kinyerése”</strong> lehetőséget. Ha nem látja, koppintson a „Továbbiak” elemre, és adja hozzá a kedvencekhez – így mindig kéznél lesz.</p>'
            },
            {
                h2: 'MP3 vagy M4A – melyiket válassza?',
                html: '<p>Az <strong>MP3</strong> mindenhol lejátszható: Windows, Android, autórádiók, weboldalak és videószerkesztők. Az <strong>M4A</strong> (AAC) az Apple saját formátuma: azonos minőségben kisebb, ideális csengőhangokhoz, GarageBandhez és iMovie-hoz. Ha bizonytalan, válassza az MP3-at. Bővebben: <a href="/hu/guides/convert-video-to-mp3-iphone/">videó MP3-ba</a> és <a href="/hu/guides/video-to-m4a-iphone/">videó M4A-ba</a>.</p>'
            },
            {
                h2: 'Hová kerül a hang?',
                html: '<p>Minden kinyert fájl megjelenik az alkalmazás könyvtárában hosszal, mérettel és dátummal. Innen koppintson a <strong>Megosztás → Mentés a Fájlokba</strong> lehetőségre, hogy az iCloud Drive-ra vagy az „iPhone-omon” mappába mentse, vagy küldje Messengerre, Viberre, a Jegyzetekbe, GarageBandbe vagy AirDroppal a számítógépre.</p>'
            },
            {
                h2: 'Ha valami nem működik',
                html: `<ul>
<li><strong>A fájl néma.</strong> Magának a videónak nincs hangsávja – ez mikrofon nélküli képernyőfelvételeknél fordul elő. Először ellenőrizze a videót a Fotókban.</li>
<li><strong>A videó az iCloudban van.</strong> A Fotók először letölti az eredetit – várja meg, amíg végez.</li>
<li><strong>Csak 20 másodpercre van szüksége.</strong> Vágja meg kinyerés előtt – lásd <a href="/hu/guides/trim-audio-from-video-iphone/">hogyan vághat ki egy részt a hangból</a>.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Ingyen kinyerhető a hang videóból iPhone-on?', a: `Igen. A(z) ${APP} ingyenesen letölthető, és az alapszintű hangkinyerés is ingyenes. További funkciók alkalmazáson belüli vásárlással érhetők el.` },
            { q: 'Romlik a minőség a kinyeréskor?', a: 'Az alkalmazás a videó hangsávját jó minőségű MP3-ként vagy M4A-ként menti. A hang nem lesz jobb az eredetinél, de ugyanúgy szól, mint a videó lejátszásakor.' },
            { q: 'Hosszú videóból is kinyerhető a hang?', a: 'Igen. Az előadások, koncertek és megbeszélések ugyanígy dolgozhatók fel, csak kicsit tovább tart. Ha csak egy részre van szüksége, előbb vágja meg.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'trim-audio-from-video-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Hang kinyerése videóból iPhone-on', text: 'Négy koppintásos módszer – a Fotókból vagy a Megosztásból.' }
    },
    {
        slug: 'convert-video-to-mp3-iphone',
        keyword: 'videó mp3 konvertálás iphone',
        eyebrow: 'Videó MP3-ba',
        title: 'Videó konvertálása MP3-ba iPhone-on – gyorsan és ingyen',
        description: 'Alakítson bármely iPhone-videót MP3-má másodpercek alatt. A Fotókból indítható, a fájlok a készüléken maradnak, és exportálás előtt vághat. Lépésről lépésre.',
        h1: 'Hogyan lehet videót MP3-ba konvertálni iPhone-on',
        answer: `Nyissa meg a videót a Fotókban, koppintson a Megosztásra, és válassza a „Hang kinyerése” lehetőséget (${APP}). Vágja meg szükség szerint, koppintson a „Hang kinyerése” gombra, és mentse MP3-ként. A fájl az iPhone-on marad – elküldheti a Fájlokba, AirDroppal vagy bármely alkalmazásba. Nincs szükség számítógépre vagy fiókra.`,
        intro: '<p>Az MP3 a legkompatibilisebb hangformátum: minden autóban, számítógépen és szerkesztőben lejátszható. Így alakíthatja a videót MP3-má anélkül, hogy letenné az iPhone-t.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Kinyerés MP3-ba', text: 'Koppintson a „Hang kinyerése” gombra, és válassza az MP3 formátumot. A videó MP3-má alakítása közvetlenül az iPhone-on történik.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'Miért alkalmazás, és miért nem online konverter?',
                html: '<p>Az online konvertereknél fel kell tölteni a teljes videót, sorban kell állni, majd újra letölteni az MP3-at – mobilneten lassú, személyes videóknál kockázatos. Az alkalmazás internet nélkül működik, a fájlt a készüléken tartja, és konvertálás előtt vághat. Részletes összehasonlítás: <a href="/hu/guides/extract-audio-online-vs-app/">online vagy alkalmazás</a>.</p>'
            },
            {
                h2: 'Milyen videók alakíthatók MP3-má?',
                html: '<p>Minden, amit az iPhone lejátszik: kamerás felvételek (<a href="/hu/guides/mov-to-mp3-iphone/">MOV</a>), letöltött videók (<a href="/hu/guides/mp4-to-mp3-iphone/">MP4</a>), <a href="/hu/guides/screen-recording-to-audio-iphone/">képernyőfelvételek</a>, valamint videók az Üzenetekből, Messengerből, Viberről és AirDropból.</p>'
            },
            {
                h2: 'Mit kezdhet az MP3-mal',
                html: `<ul>
<li>Mentse a <strong>Fájlokba</strong>, és hallgassa internet nélkül.</li>
<li>Küldje a számítógépre <strong>AirDroppal</strong>.</li>
<li>Készítsen 30 másodpercből <a href="/hu/guides/video-to-ringtone-iphone/">csengőhangot</a>.</li>
<li>Adja hozzá GarageBandhez, CapCuthoz vagy podcastszerkesztőhöz.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Tud az iPhone videót MP3-ba konvertálni alkalmazás nélkül?', a: 'Közvetlenül nem. A Parancsok csak M4A-ként mentik a hangot. MP3-hoz iPhone-on alkalmazás vagy weboldal kell.' },
            { q: 'Ingyenes az MP3-konvertálás?', a: `Igen, a(z) ${APP} alapszintű konvertálása ingyenes. További funkciók alkalmazáson belüli vásárlással.` },
            { q: 'Kell internet a videó MP3-má alakításához?', a: 'Nem. A konvertálás az iPhone-on történik, és internet nélkül is működik. Csak az iCloudban tárolt videókat kell előbb letölteni.' }
        ],
        related: ['mp4-to-mp3-iphone', 'mov-to-mp3-iphone', 'video-to-m4a-iphone'],
        card: { title: 'Videó MP3-ba iPhone-on', text: 'Bármely videóból univerzális MP3.' }
    }
);

guides.push(
    {
        slug: 'mp4-to-mp3-iphone',
        keyword: 'mp4 mp3 iphone',
        eyebrow: 'MP4 MP3-ba',
        title: 'MP4 MP3-ba iPhone-on: ingyenes konverter feltöltés nélkül',
        description: 'Alakítsa az MP4-et MP3-má iPhone-on ingyen: nyissa meg a fájlt a Fájlokban vagy a Fotókban, és koppintson a Megosztás → „Hang kinyerése” lehetőségre. Offline.',
        h1: 'Hogyan lehet MP4-et MP3-ba konvertálni iPhone-on',
        answer: `Az MP4 MP3-ba konvertálásához iPhone-on nyissa meg a fájlt a Fájlokban vagy a Fotókban, koppintson a Megosztásra, és válassza a „Hang kinyerése” lehetőséget. A(z) ${APP} alkalmazásban vágja meg, ha szeretné, koppintson a „Hang kinyerése” gombra, válassza az MP3-at, és mentse. Ingyen, a készüléken, internet nélkül.`,
        intro: '<p>Az MP4-fájlok általában letöltésként, e-mail-mellékletként vagy AirDroppal érkeznek, ezért gyakran a <strong>Fájlok</strong> alkalmazásban vannak, nem a Fotókban. Az alkalmazás mindkettővel működik.</p>',
        steps: [
            { name: 'Keresse meg az MP4-fájlt', text: 'Nyissa meg a Fájlokat (Letöltések, iCloud Drive vagy „iPhone-omon”) vagy a Fotókat, és keresse meg az MP4-et.', image: 2 },
            { name: 'Küldje a „Hang kinyerése” alkalmazásba', text: 'Tartsa lenyomva a fájlt, és válassza a Megosztás → „Hang kinyerése” lehetőséget. Az MP4 megnyílik az alkalmazásban.', image: 2 },
            STEP.trim,
            { name: 'Mentse MP3-ként', text: 'Koppintson a „Hang kinyerése” gombra, válassza az MP3-at, majd a Megosztás → Mentés a Fájlokba lehetőséget, hogy az MP3 az eredeti MP4 mellé kerüljön.', image: 4 }
        ],
        sections: [
            {
                h2: 'Az MP4 és az MP3 különbsége',
                html: '<p>Az MP4 egy tároló, amelyben kép és hang is van; az MP3 csak hangot tartalmaz. Az MP4 MP3-ba alakításakor a hangsáv megmarad, a kép pedig eltűnik: a fájl sokkal kisebb lesz, és bármilyen lejátszóban megszólal.</p>'
            },
            {
                h2: 'MP4 Messengerből, Viberről és e-mailből',
                html: '<p>Először mentse a mellékletet: a csevegésben nyissa meg a videót → Megosztás → „Videó mentése” (a Fotókba) vagy „Mentés a Fájlokba”. Ezután kövesse a fenti lépéseket. Csak saját videóit vagy olyanokat konvertáljon, amelyekhez joga van.</p>'
            },
            {
                h2: 'M4A-ra van szüksége?',
                html: '<p>Csengőhangokhoz és az Apple alkalmazásaihoz az M4A jobb. Lásd: <a href="/hu/guides/video-to-m4a-iphone/">videó mentése M4A-ként iPhone-on</a>.</p>'
            }
        ],
        faq: [
            { q: 'Ingyen konvertálható az MP4 MP3-ba iPhone-on?', a: `Igen. A(z) ${APP} ingyen alakítja az MP4-et MP3-má közvetlenül a készüléken. Az alkalmazáson belüli vásárlások további funkciókat nyitnak meg.` },
            { q: 'Kisebb lesz az MP3, mint az MP4?', a: 'Igen, általában sokkal kisebb: a videósáv eltűnik, csak a hang marad.' },
            { q: 'Több MP4 is konvertálható?', a: 'Igen. Konvertálja őket egymás után – minden MP3 az alkalmazás könyvtárába kerül.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'mov-to-mp3-iphone', 'extract-audio-online-vs-app'],
        card: { title: 'MP4 MP3-ba iPhone-on', text: 'Letöltött MP4-ek a Fájlokból és a Fotókból MP3-ba.' }
    },
    {
        slug: 'mov-to-mp3-iphone',
        keyword: 'mov mp3 iphone',
        eyebrow: 'MOV MP3-ba',
        title: 'MOV MP3-ba iPhone-on – hang az iPhone kamerás videóiból',
        description: 'Az iPhone kamerájával készült videók MOV-fájlok. Alakítsa a MOV-ot MP3-má a telefonon: válasszon videót, vágja meg, és koppintson a „Hang kinyerése” gombra.',
        h1: 'Hogyan lehet MOV-ot MP3-ba konvertálni iPhone-on',
        answer: `Az iPhone kamerájával készült összes videó MOV formátumban mentődik. MP3-hoz nyissa meg a videót a Fotókban, koppintson a Megosztás → „Hang kinyerése” lehetőségre, szükség esetén vágja meg, és koppintson a „Hang kinyerése” gombra a(z) ${APP} alkalmazásban. Az MP3 az iPhone-ra mentődik – számítógép nem kell.`,
        intro: '<p>A MOV az Apple videóformátuma, ebben rögzít az iPhone kamerája: koncertek, beszédek, egy barát gitárral, egy hang, amelyet meg szeretne őrizni. MP3-ként bárhol meghallgathatja.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Mikor hasznos a MOV MP3-ba alakítása',
                html: `<ul>
<li>Megőrizni egy felvett koncert vagy fellépés hangját.</li>
<li>Egy pohárköszöntőt vagy beszédet hangos emlékké alakítani.</li>
<li>Próbafelvételt küldeni a zenekarnak hatalmas videó nélkül.</li>
<li>Útközben hallgatni egy <a href="/hu/guides/lecture-video-to-audio-iphone/">felvett előadást</a>.</li>
</ul>`
            },
            {
                h2: 'HEVC, 4K és Filmes mód',
                html: '<p>A HEVC és a 4K videók ugyanígy dolgozhatók fel. Csak a hang konvertálódik, így a nagyon nagy MOV-fájlokból is kis hangfájlok lesznek.</p>'
            },
            {
                h2: 'Miért nincs szükség számítógépre',
                html: '<p>Egy több gigabájtos MOV átvitele a számítógépre a hang miatt tovább tart, mint a telefonon konvertálni. Az alkalmazás ott végzi el, ahol a videó már van.</p>'
            }
        ],
        faq: [
            { q: 'Milyen formátumban rögzít videót az iPhone?', a: 'Az iPhone kamerája MOV-fájlokat rögzít, általában HEVC vagy H.264 videóval és AAC hanggal.' },
            { q: 'Konvertálható a MOV MP3-ba minőségromlás nélkül?', a: 'Az alkalmazás megőrzi az eredeti felvétel minőségét: az MP3 úgy szól, mint a videó lejátszáskor.' },
            { q: 'Menthető a MOV M4A-ként?', a: 'Igen, válassza az M4A formátumot. Csengőhangokhoz és az Apple alkalmazásaihoz praktikus.' }
        ],
        related: ['mp4-to-mp3-iphone', 'convert-video-to-mp3-iphone', 'save-music-from-video-iphone'],
        card: { title: 'MOV MP3-ba', text: 'Hang az iPhone kamerás videóiból.' }
    },
    {
        slug: 'video-to-m4a-iphone',
        keyword: 'videó m4a iphone',
        eyebrow: 'Videó M4A-ba',
        title: 'Videó M4A-ba iPhone-on – MP4 és MOV M4A-ba ingyen',
        description: 'Mentse a videó hangját M4A-ként iPhone-on csengőhangokhoz, GarageBandhez és az Apple alkalmazásaihoz. Ingyen, a készüléken, vágással – négy koppintással.',
        h1: 'Hogyan lehet a videó hangját M4A-ként menteni iPhone-on',
        answer: `A videó M4A-ba alakításához iPhone-on küldje a videót a Fotókból vagy a Fájlokból a „Hang kinyerése” alkalmazásba, vágja meg, ha szeretné, koppintson a „Hang kinyerése” gombra, és válassza az M4A-t. A(z) ${APP} M4A (AAC) fájlt ment, amely GarageBandhez, iMovie-hoz, lejátszókhoz és csengőhangnak is megfelel.`,
        intro: '<p>Az M4A az Apple saját hangformátuma. Hasonló minőség mellett kisebb az MP3-nál, és pontosan ezt várja az iPhone csengőhangokhoz és GarageBand-projektekhez.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Kinyerés M4A-ba', text: 'Koppintson a „Hang kinyerése” gombra, és válassza az M4A formátumot.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'M4A vagy MP3 – mikor válassza az M4A-t',
                html: `<table class="guide-table"><thead><tr><th></th><th>M4A (AAC)</th><th>MP3</th></tr></thead><tbody>
<tr><td>Legjobb erre</td><td>iPhone, Mac, csengőhangok, GarageBand</td><td>Minden másra – Windows, Android, autó</td></tr>
<tr><td>Fájlméret</td><td>Kisebb azonos minőségben</td><td>Kicsit nagyobb</td></tr>
<tr><td>Kompatibilitás</td><td>Nagyon jó</td><td>Univerzális</td></tr>
</tbody></table>`
            },
            {
                h2: 'Állítsa be az M4A-t csengőhangnak',
                html: '<p>iOS 26-ban egy 30 másodpercnél rövidebb M4A-fájl közvetlenül a Fájlokból beállítható csengőhangnak. Részletesen: <a href="/hu/guides/video-to-ringtone-iphone/">csengőhang készítése videóból</a>.</p>'
            },
            {
                h2: 'Megnyitás GarageBandben vagy iMovie-ban',
                html: '<p>Mentse az M4A-t a Fájlokba, majd importálja a GarageBand vagy az iMovie fájlböngészőjén keresztül – háttérzenének, narrációnak vagy hangeffektusnak.</p>'
            }
        ],
        faq: [
            { q: 'Jobb az M4A az MP3-nál?', a: 'Azonos bitsebességnél az M4A (AAC) általában ugyanolyan jól vagy jobban szól, és kevesebb helyet foglal. Az MP3 több eszközzel kompatibilis.' },
            { q: 'Készíthető M4A a Parancsokkal?', a: 'Igen, a „Média kódolása” művelet a „Csak hang” beállítással M4A-t hoz létre. Így viszont nem vághatja a hangot, és nem menthet MP3-at – az alkalmazásban igen.' },
            { q: 'Ingyenes az M4A-ként mentés?', a: `Igen, a(z) ${APP} alapszintű kinyerése ingyenes, az M4A-exporttal együtt.` }
        ],
        related: ['video-to-ringtone-iphone', 'convert-video-to-mp3-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Videó M4A-ba', text: 'Az Apple formátuma csengőhangokhoz és GarageBandhez.' }
    }
);

guides.push(
    {
        slug: 'extract-audio-without-app-iphone',
        keyword: 'hang kinyerése videóból iphone alkalmazás nélkül',
        eyebrow: 'Parancsok vagy alkalmazás',
        title: 'Hang kinyerése videóból iPhone-on alkalmazás nélkül',
        description: 'A videó hangja iPhone-on alkalmazás nélkül is kinyerhető – a Parancsokkal és a „Média kódolása” művelettel. Teljes beállítás, korlátok és egy gyorsabb megoldás.',
        h1: 'Hogyan lehet hangot kinyerni videóból iPhone-on alkalmazás nélkül',
        answer: 'Harmadik féltől származó alkalmazás nélkül a hang a Parancsokkal nyerhető ki: adja hozzá a „Média kódolása” műveletet, kapcsolja be a „Csak hang” beállítást, adja hozzá a „Fájl mentése” műveletet, és kapcsolja be a megjelenítést a Megosztás menüben. Ezután küldje a videót a parancsnak. Az eredmény csak M4A, vágás nélkül; MP3-hoz és rövid részletekhez az alkalmazás gyorsabb.',
        intro: '<p>Az Apple ingyenes Parancsok alkalmazása képes leválasztani a hangot a videóról. A beállítás néhány percet vesz igénybe. Íme a pontos recept – és a korlátai.</p>',
        steps: [
            { name: 'Hozzon létre új parancsot', text: 'Nyissa meg a Parancsokat, koppintson a + gombra, és nevezze el a parancsot „Hang videóból” néven.', image: 2 },
            { name: 'Adja hozzá a „Média kódolása” műveletet', text: 'Koppintson a „Művelet hozzáadása” elemre, keressen rá a „Média kódolása” kifejezésre, adja hozzá, nyissa ki a beállításokat a nyíllal, és kapcsolja be a „Csak hang” lehetőséget.', image: 2 },
            { name: 'Adja hozzá a „Fájl mentése” műveletet', text: 'Adja hozzá a „Fájl mentése” műveletet, hogy az eredmény a Fájlokba kerüljön.', image: 4 },
            { name: 'Megjelenítés a Megosztás menüben', text: 'Nyissa meg a parancs részleteit (i ikon), kapcsolja be a „Megjelenítés a megosztási lapon” lehetőséget, és engedélyezze a „Média” típust. Most küldjön egy videót a Fotókból, és válassza a parancsot.', image: 4 }
        ],
        sections: [
            {
                h2: 'A Parancsok módszer korlátai',
                html: `<ul>
<li><strong>Csak M4A</strong> – MP3 nem készíthető.</li>
<li><strong>Nincs vágás</strong> – mindig a teljes hangsáv mentődik.</li>
<li><strong>Nincs könyvtár</strong> – a fájlok a Fájlokba kerülnek, kézzel kell megkeresni és átnevezni őket.</li>
<li>Hosszú videóknál a parancs érthető hibaüzenet nélkül leállhat.</li>
</ul>`
            },
            {
                h2: 'Az egykoppintásos megoldás',
                html: `<p>A(z) ${APP} ugyanezt teszi, de vágással, MP3 vagy M4A választással és az összes kinyert fájl könyvtárával. Az alkalmazás is a Megosztás menüben van, így nem lassabb – és semmit sem kell összerakni.</p>`
            },
            {
                h2: 'Más módszerek alkalmazás nélkül',
                html: '<p>A hangot iMovie-ban vagy GarageBandben is leválaszthatja, de több lépéssel és kevesebb exportformátummal. Weboldalak is működnek, de a videót fel kell tölteni az internetre – lásd <a href="/hu/guides/extract-audio-online-vs-app/">online vagy alkalmazás</a>.</p>'
            }
        ],
        faq: [
            { q: 'Van az iPhone-on beépített mód a hang kinyerésére?', a: 'A Fotókban nincs külön gomb. A legközelebbi beépített lehetőség a Parancsok alkalmazás „Média kódolása” művelete a „Csak hang” beállítással.' },
            { q: 'Milyen formátumban menti a parancs a hangot?', a: 'M4A-ban. MP3-ként nem lehet menteni a Parancsokkal.' },
            { q: 'Vágható a hang paranccsal?', a: `Kényelmesen nem. A vágáshoz használjon idővonalas alkalmazást, például a(z) ${APP} alkalmazást.` }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-online-vs-app', 'video-to-m4a-iphone'],
        card: { title: 'Alkalmazás nélkül (Parancsok)', text: 'Az ingyenes recept és a korlátai.' }
    },
    {
        slug: 'extract-audio-online-vs-app',
        keyword: 'hang kinyerése videóból online',
        eyebrow: 'Online vagy alkalmazás',
        title: 'Hang kinyerése videóból online vagy alkalmazással iPhone-on?',
        description: 'Online nyerje ki a hangot a videóból, vagy alkalmazással? Összehasonlítjuk az adatvédelmet, a sebességet, a korlátokat és a vágást iPhone-on.',
        h1: 'Hang kinyerése videóból online vagy alkalmazással: mit válasszon iPhone-on',
        answer: `Az online szolgáltatások minden eszközön működnek, de fel kell tölteni a teljes videót, meg kell várni a feldolgozást, és le kell tölteni az eredményt – mobilneten lassú, személyes felvételeknél nem biztonságos. iPhone-on egy olyan alkalmazás, mint a(z) ${APP}, gyorsabb, internet nélkül működik, a videót a készüléken tartja, és vágni is tud.`,
        intro: '<p>A „hang kinyerése videóból online” keresésre tucatnyi ingyenes oldal jön fel. Gyors internettel laptopon kényelmesek. iPhone-on más a helyzet.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Összehasonlítás',
                html: `<table class="guide-table"><thead><tr><th></th><th>Online szolgáltatás</th><th>${APP}</th></tr></thead><tbody>
<tr><td>Adatvédelem</td><td>A videó idegen szerverre kerül</td><td>Az iPhone-on marad</td></tr>
<tr><td>Sebesség</td><td>Feltöltés + várakozás + letöltés</td><td>Másodpercek, a készüléken</td></tr>
<tr><td>Internet nélkül</td><td>Nem</td><td>Igen</td></tr>
<tr><td>Méretkorlát</td><td>Gyakori az ingyenes csomagokban</td><td>Csak az iPhone tárhelye</td></tr>
<tr><td>Vágás</td><td>Néha</td><td>Beépített idővonal</td></tr>
<tr><td>Hirdetések és felugrók</td><td>Gyakran</td><td>Nincs webes hirdetés</td></tr>
<tr><td>Ár</td><td>Ingyenes korlátokkal</td><td>Alapfunkciók ingyen</td></tr>
</tbody></table>`
            },
            {
                h2: 'Mikor éri meg az online szolgáltatás',
                html: '<p>Ha Windowsos számítógépnél ül, és a videó már ott van, egy megbízható online konverter elég. Ne töltsön fel semmi személyeset: családi videókat, munkahelyi megbeszéléseket vagy ügyfélanyagokat.</p>'
            },
            {
                h2: 'Mikor jobb az alkalmazás',
                html: '<p>Ha a videó az iPhone-on van, az alkalmazás nyer: nem kell mobilhálózaton feltölteni, várni és letölteni az eredményt, és pontosan kivághatja a kívánt részt.</p>'
            }
        ],
        faq: [
            { q: 'Biztonságos online kinyerni a hangot videóból?', a: 'Az oldaltól függ. A videó harmadik fél szerverére kerül, ezért személyes felvételeknél jobb elkerülni. A készüléken dolgozó alkalmazások semmit sem töltenek fel.' },
            { q: 'Kinyerhető ingyen a hang iPhone-on feltöltés nélkül?', a: `Igen. A(z) ${APP} ingyen konvertál közvetlenül a készüléken, a videó sehová sem kerül.` },
            { q: 'Miért olyan lassú az online konvertálás telefonon?', a: 'Előbb a teljes videót fel kell tölteni. A telefonos videók nagyok, és a mobilhálózat feltöltési sebessége általában jóval kisebb a letöltésinél.' }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-without-app-iphone', 'mp4-to-mp3-iphone'],
        card: { title: 'Online vagy alkalmazás', text: 'Adatvédelem, sebesség és korlátok – összehasonlítás.' }
    },
    {
        slug: 'save-music-from-video-iphone',
        keyword: 'zene kinyerése videóból iphone',
        eyebrow: 'Zene',
        title: 'Zene kinyerése videóból iPhone-on (MP3 vagy M4A)',
        description: 'Mentse egy videó dalát vagy háttérzenéjét iPhone-on MP3-ként vagy M4A-ként. Vágjon pontosan a dalhoz, hallgassa internet nélkül, ossza meg. Rövid útmutató.',
        h1: 'Hogyan lehet zenét kinyerni videóból iPhone-on',
        answer: `A zene videóból való kinyeréséhez iPhone-on nyissa meg a videót a Fotókban, koppintson a Megosztás → „Hang kinyerése” lehetőségre, jelölje ki a dalt, és koppintson a „Hang kinyerése” gombra a(z) ${APP} alkalmazásban. A zene MP3-ként vagy M4A-ként mentődik – hallgassa internet nélkül a Fájlokban, vagy küldje bármely alkalmazásba.`,
        intro: '<p>Az esküvői dal, egy barát feldolgozása, a saját vágásának zenéje – néha a hang a videó legértékesebb része. Így mentheti külön zenefájlként.</p>',
        steps: [STEP.share, { name: 'Jelölje ki a dalt', text: 'Koppintson a „Videó vágása” gombra, és húzza a sárga jelölőket úgy, hogy csak a dal maradjon. Hallgassa meg az elejét és a végét.', image: 3 }, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Így lesz a legjobb a hang',
                html: `<ul>
<li>Vágja le a beszédet és a tapsot az elején és a végén.</li>
<li>MP3 az autóba és régebbi lejátszókra, M4A az Apple-eszközökre.</li>
<li>Nevezze át a fájlt a Fájlokban (hosszú nyomás → „Átnevezés”), hogy később könnyen megtalálja.</li>
</ul>`
            },
            {
                h2: 'A szerzői jogokról',
                html: '<p>Csak saját videóiból vagy olyanokból mentsen zenét, amelyekhez joga van. A kereskedelmi dalokat szerzői jog védi: a saját felvétel személyes másolata rendben van, mások zenéjének közzététele nem.</p>'
            },
            {
                h2: 'Állítsa be csengőhangnak',
                html: '<p>Megvan a kedvenc 30 másodperce? <a href="/hu/guides/video-to-ringtone-iphone/">Készítsen belőle csengőhangot</a>.</p>'
            }
        ],
        faq: [
            { q: 'Hogyan lehet egy dalt kinyerni videóból iPhone-on?', a: `Küldje a videót a(z) ${APP} alkalmazásba, vágáskor jelölje ki a dalt, és koppintson a „Hang kinyerése” gombra. A dal hangfájlként mentődik.` },
            { q: 'Hozzáadható a kinyert dal az Apple Musichoz?', a: 'Az iPhone Zene alkalmazása nem importál közvetlenül helyi fájlokat. Tartsa a fájlt a Fájlokban, vagy szinkronizálja Macen vagy PC-n keresztül.' },
            { q: 'Kinyerhető a zene Messenger- vagy Üzenetek-videóból?', a: 'Igen. Először mentse a videót a Fotókba vagy a Fájlokba, majd nyerje ki a hangot.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-ringtone-iphone', 'mov-to-mp3-iphone'],
        card: { title: 'Zene kinyerése videóból', text: 'A dal marad, a kép nem.' }
    }
);

guides.push(
    {
        slug: 'trim-audio-from-video-iphone',
        keyword: 'hang vágása videóból iphone',
        eyebrow: 'Vágás',
        title: 'Hogyan vágható ki a videó hangjának egy része iPhone-on',
        description: 'Csak 10 másodpercnyi hangra van szüksége? Vágja meg a videót iPhone-on, és csak azt a részt mentse MP3-ként vagy M4A-ként. Jelölők, előhallgatás, export.',
        h1: 'Hogyan lehet a videó hangjának csak egy részét kinyerni iPhone-on',
        answer: `A videó hangjának egy részét úgy vághatja ki iPhone-on, hogy megnyitja a(z) ${APP} alkalmazásban, koppint a „Videó vágása” gombra, a sárga kezdő- és végjelölőt a kívánt rész köré húzza, a „Mentés”, majd a „Hang kinyerése” gombra koppint. Csak a kijelölt rész mentődik MP3-ként vagy M4A-ként.`,
        intro: '<p>Legtöbbször nem a teljes hangsávra, hanem egy idézetre, refrénre vagy hangeffektusra van szükség. Ha előbb vág, kicsi és tiszta részletet kap.</p>',
        steps: [
            STEP.open,
            { name: 'Koppintson a „Videó vágása” gombra', text: 'A kinyerés képernyőn koppintson a „Videó vágása” gombra az idővonal megnyitásához.', image: 2 },
            { name: 'Húzza a jelölőket', text: 'Húzza a bal oldali sárga jelölőt a kezdőpontra, a jobb oldalit a végpontra. A kijelölés ideje mellettük látható. Hallgassa meg, és koppintson a „Mentés” gombra.', image: 3 },
            { name: 'Nyerje ki és mentse', text: 'Koppintson a „Hang kinyerése” gombra – csak a megvágott rész exportálódik. Küldje el, vagy mentse a Fájlokba.', image: 4 }
        ],
        sections: [
            {
                h2: 'Tippek a pontos vágáshoz',
                html: `<ul>
<li>Hagyjon fél másodpercet a beszéd előtt és után, hogy ne vágjon bele a szavakba.</li>
<li>Csengőhanghoz legfeljebb 30 másodpercet jelöljön ki.</li>
<li>Több rész kell ugyanabból a videóból? Ismételje meg a vágást mindegyikhez – minden fájl a könyvtárba kerül.</li>
</ul>`
            },
            {
                h2: 'Mit szoktak kivágni',
                html: '<p>Egy mondatot egy beszédből, egy dal refrénjét, hangeffektust vágáshoz, egy gyerek első szavait vagy egy hosszú megbeszélés-felvétel legfontosabb percét.</p>'
            }
        ],
        faq: [
            { q: 'Vágható a videó hangja iPhone-on?', a: `Igen. Vágja a videót a kívánt részre a(z) ${APP} alkalmazásban, és nyerje ki a hangot – csak az a rész mentődik.` },
            { q: 'Megváltoztatja a vágás az eredeti videót?', a: 'Nem. Az eredeti a Fotókban változatlan marad; csak az exportált hangfájl lesz rövidebb.' },
            { q: 'Kivágható több rész egy videóból?', a: 'Igen. Minden szükséges részhez vágjon és nyerjen ki újra.' }
        ],
        related: ['video-to-ringtone-iphone', 'save-music-from-video-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'A hang egy részének kivágása', text: 'Vágás másodpercre pontosan.' }
    },
    {
        slug: 'screen-recording-to-audio-iphone',
        keyword: 'képernyőfelvétel hangja iphone',
        eyebrow: 'Képernyőfelvétel',
        title: 'Hogyan menthető a képernyőfelvétel hangja iPhone-on',
        description: 'Alakítsa az iPhone képernyőfelvételét MP3- vagy M4A-fájllá. Miért néma a felvétel, hogyan vághatja ki a megfelelő részt és mentheti a hangot. Egyszerű lépések.',
        h1: 'Hogyan menthető a képernyőfelvétel hangja iPhone-on',
        answer: `Az iPhone képernyőfelvételei videóként kerülnek a Fotókba. A hanghoz nyissa meg a felvételt, koppintson a Megosztás → „Hang kinyerése” lehetőségre, szükség esetén vágja meg, és koppintson a „Hang kinyerése” gombra a(z) ${APP} alkalmazásban. Ha a fájl néma, a hang eleve nem lett rögzítve – kapcsolja be a mikrofont felvétel előtt.`,
        intro: '<p>A képernyőfelvétel gyakori módja egy hangüzenet, kihangosított hívás vagy alkalmazásrészlet megőrzésének. Így tarthatja meg csak a hangot.</p>',
        steps: [
            { name: 'Keresse meg a felvételt a Fotókban', text: 'A képernyőfelvételek itt vannak: Fotók → Médiatípusok → Képernyőfelvételek.', image: 2 },
            { name: 'Küldje a „Hang kinyerése” alkalmazásba', text: 'Nyissa meg a felvételt, koppintson a Megosztásra, és válassza a „Hang kinyerése” lehetőséget.', image: 2 },
            STEP.trim,
            { name: 'Nyerje ki és mentse', text: 'Koppintson a „Hang kinyerése” gombra, és mentse az MP3-at vagy M4A-t a Fájlokba.', image: 4 }
        ],
        sections: [
            {
                h2: 'Miért néma a képernyőfelvétel?',
                html: `<ul>
<li><strong>Ki van kapcsolva a mikrofon:</strong> a Vezérlőközpontban tartsa lenyomva a Képernyőfelvétel gombot, és kapcsolja be a „Mikrofon” lehetőséget, hogy a hangja is rögzüljön.</li>
<li><strong>Néma mód:</strong> egyes alkalmazások néma módban elnémítják a hangjukat.</li>
<li><strong>Védett tartalom:</strong> sok streamingszolgáltatás blokkolja a hangot képernyőfelvételkor – ez korlátozás, amely nem kerülhető meg.</li>
</ul>`
            },
            {
                h2: 'Tartsa tiszteletben a magánszférát',
                html: '<p>Hívásokat és beszélgetéseket csak minden résztvevő beleegyezésével és a helyi jogszabályoknak megfelelően rögzítsen és mentsen.</p>'
            }
        ],
        faq: [
            { q: 'Átalakítható a képernyőfelvétel MP3-má?', a: 'Igen. A képernyőfelvétel sima videó, így a hangja MP3-ként vagy M4A-ként menthető.' },
            { q: 'Hol vannak a képernyőfelvételek iPhone-on?', a: 'A Fotók alkalmazásban, a Médiatípusok → Képernyőfelvételek alatt.' },
            { q: 'Miért nincs hang a képernyőfelvételen?', a: 'A mikrofon ki volt kapcsolva, vagy az alkalmazás blokkolja a hangrögzítést. Kinyerés előtt ellenőrizze, hogy a felvétel hanggal játszódik-e le.' }
        ],
        related: ['extract-audio-from-video-iphone', 'trim-audio-from-video-iphone', 'lecture-video-to-audio-iphone'],
        card: { title: 'Képernyőfelvétel hangja', text: 'Mentse a hangot, és derítse ki, miért hiányzik.' }
    }
);

guides.push(
    {
        slug: 'lecture-video-to-audio-iphone',
        keyword: 'videós előadás hanggá alakítása',
        eyebrow: 'Tanulás',
        title: 'Videós előadás hanggá (MP3) alakítása iPhone-on',
        description: 'Alakítsa a felvett előadásokat, webináriumokat és beszédeket MP3-má iPhone-on, és tanuljon útközben. Kis fájlok, internet nélküli hallgatás, egyszerű megosztás.',
        h1: 'Hogyan alakítható egy videós előadás hanggá iPhone-on',
        answer: `Egy videós előadás hanggá alakításához nyissa meg a felvételt a Fotókban vagy a Fájlokban, koppintson a Megosztás → „Hang kinyerése” lehetőségre, majd a „Hang kinyerése” gombra a(z) ${APP} alkalmazásban. Mentse az MP3-at a Fájlokba, és hallgassa internet nélkül – útközben, edzés közben vagy kikapcsolt képernyővel, jóval kisebb fájllal.`,
        intro: '<p>Egy előadásnál az számít, ami elhangzik, nem az, ami látszik. Ha a videós előadást hanggá alakítja, olyan podcastot kap, amelyet bárhol újrahallgathat.</p>',
        steps: [
            STEP.share,
            { name: 'Vágja le a bevezetőt és a szüneteket (nem kötelező)', text: 'Koppintson a „Videó vágása” gombra, hogy eltávolítsa a kezdés előtti várakozást és a felesleges kérdés-válasz részt.', image: 3 },
            STEP.extract,
            { name: 'Mentse az „Előadások” mappába', text: 'Koppintson a Megosztás → Mentés a Fájlokba lehetőségre, és hozzon létre mappát minden tárgyhoz, hogy gyorsan megtalálja a felvételeket.', image: 4 }
        ],
        sections: [
            {
                h2: 'Miért kényelmes hangból tanulni',
                html: `<ul>
<li><strong>Kis fájlok:</strong> egy óra hang sokkal kevesebb helyet foglal, mint egy óra videó.</li>
<li><strong>Kikapcsolt képernyő:</strong> hallgassa zárolt telefonnal, és kímélje az akkumulátort.</li>
<li><strong>Bárhol:</strong> villamoson, sétán, edzőteremben – Wi‑Fi nélkül.</li>
</ul>`
            },
            {
                h2: 'Készítsen belőle jegyzetet',
                html: '<p>Szövegre van szüksége? Importálja a hangot a már használt átíró alkalmazásba, és keressen a szövegben.</p>'
            },
            {
                h2: 'Nézze meg a szabályokat',
                html: '<p>Sok egyetem engedi az előadások rögzítését saját használatra, de a terjesztésüket nem. Rögzítés vagy megosztás előtt nézze meg a kurzus szabályait.</p>'
            }
        ],
        faq: [
            { q: 'Hallgatható videó iPhone-on kikapcsolt képernyővel?', a: 'A legtöbb videólejátszó megáll a telefon zárolásakor. Ha a videót MP3-má alakítja, kikapcsolt képernyővel hallgathatja a Fájlokban vagy bármely lejátszóban.' },
            { q: 'Működik egy egyórás előadással is?', a: 'Igen. A hosszú felvételek ugyanígy dolgozhatók fel, csak kicsit tovább tart.' },
            { q: 'Konvertálhatók a Zoom- és webináriumfelvételek?', a: 'Igen, amint az MP4-felvétel a Fotókban vagy a Fájlokban van az iPhone-on.' }
        ],
        related: ['screen-recording-to-audio-iphone', 'mp4-to-mp3-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Videós előadás hanggá', text: 'Tanuljon útközben kis MP3-fájlokkal.' }
    },
    {
        slug: 'video-to-ringtone-iphone',
        keyword: 'csengőhang videóból iphone',
        eyebrow: 'Csengőhangok',
        title: 'Csengőhang készítése videóból iPhone-on (iOS 26 és 18)',
        description: 'Készítsen bármely videóból iPhone-csengőhangot: vágja a hangot 30 másodpercre, mentse a Fájlokba, és koppintson: Megosztás → „Használat csengőhangként”.',
        h1: 'Hogyan készíthető csengőhang videóból iPhone-on',
        answer: `Csengőhang készítéséhez nyissa meg a videót a(z) ${APP} alkalmazásban, vágja legfeljebb 30 másodpercre, nyerje ki a hangot M4A-ba vagy MP3-ba, és mentse a Fájlokba. iOS 26-ban tartsa lenyomva a fájlt a Fájlokban, és koppintson a Megosztás → „Használat csengőhangként” lehetőségre. Régebbi iOS-en importálja a hangot a GarageBandbe, és exportálja csengőhangként.`,
        intro: '<p>Nevetés, egy dal a buliról, kutyaugatás – a videói bármely hangjából lehet csengőhang. iOS 26-ban ez egyszerű, ha van hangfájlja.</p>',
        steps: [
            STEP.share,
            { name: 'Vágja 30 másodpercre', text: 'Koppintson a „Videó vágása” gombra, és jelöljön ki legfeljebb 30 másodpercet – ez a csengőhang korlátja.', image: 3 },
            { name: 'Nyerje ki és mentse a Fájlokba', text: 'Koppintson a „Hang kinyerése” gombra (M4A vagy MP3), majd a Megosztás → Mentés a Fájlokba lehetőségre.', image: 4 },
            { name: 'Használat csengőhangként', text: 'A Fájlokban tartsa lenyomva a hangfájlt, és koppintson a Megosztás → „Használat csengőhangként” lehetőségre (iOS 26). Ellenőrizze: Beállítások → Hangok és haptika → Csengőhang.', image: 4 }
        ],
        sections: [
            {
                h2: 'iOS 18-on: a GarageBand-módszer',
                html: `<ol>
<li>Nyerje ki és vágja meg a hangot a fentiek szerint, és mentse a Fájlokba.</li>
<li>Nyissa meg a GarageBandet, hozzon létre „Hangrögzítő” projektet, és váltson sávnézetre.</li>
<li>Nyissa meg a hurokböngészőt → Fájlok → „Elemek tallózása a Fájlok appból”, és húzza a hangot a sávra.</li>
<li>Térjen vissza a „Dalaim” részhez, tartsa lenyomva a projektet → Megosztás → Csengőhang → Exportálás.</li>
</ol>`
            },
            {
                h2: 'Miért nincs „Használat csengőhangként” lehetőség',
                html: `<ul>
<li>A fájl hosszabb 30 másodpercnél – vágja újra.</li>
<li>A fájl nem MP3 vagy M4A formátumú.</li>
<li>Az iPhone-on még nincs iOS 26 – használja a GarageBandet.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Milyen hosszú lehet egy csengőhang iPhone-on?', a: 'A hangfájlokból készült egyéni csengőhangok legfeljebb 30 másodpercesek lehetnek.' },
            { q: 'Milyen formátum kell az iPhone-csengőhanghoz?', a: 'iOS 26-ban a „Használat csengőhangként” funkcióval 30 másodpercnél rövidebb MP3- vagy M4A-fájlok állíthatók be.' },
            { q: 'Beállítható közvetlenül egy videó csengőhangnak?', a: 'Nem. Előbb nyerje ki a hangot a videóból, majd a hangfájlt állítsa be csengőhangnak.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-m4a-iphone', 'save-music-from-video-iphone'],
        card: { title: 'Csengőhang videóból', text: '„Használat csengőhangként” iOS 26-ban – négy lépésben.' }
    }
);
