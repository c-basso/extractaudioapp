/**
 * Suomenkieliset oppaat → /fi/guides/<slug>/
 * Slugit ovat samat kuin englanninkielisissä (build/guides/en.js), jotta sivut linkittyvät hreflangilla.
 * Hakusanat — katso osio ”Suomi (FI)” tiedostossa /keywords.md. Kenttärakenne — kuten en.js.
 * Näyttökuvat: 1 kansi · 2 irrotusnäkymä · 3 rajaus · 4 Jaa-valikko · 5 kirjasto
 */

const APP = 'Irrota ääni videosta⁺';

const STEP = {
    open: {
        name: 'Avaa sovellus ja valitse video',
        text: `Avaa ${APP} ja valitse video Kuvista tai Tiedostoista. Nopeammin: napauta Kuvissa videon Jaa-painiketta ja valitse ”Irrota ääni”.`,
        image: 2
    },
    share: {
        name: 'Lähetä video sovellukseen',
        text: 'Avaa video Kuvissa tai Tiedostoissa, napauta Jaa ja valitse ”Irrota ääni”. Sovellus avautuu video valmiiksi ladattuna.',
        image: 2
    },
    trim: {
        name: 'Rajaa haluamasi kohta (valinnainen)',
        text: 'Napauta ”Rajaa video”, vedä keltaiset merkit halutun osan alkuun ja loppuun, kuuntele ja napauta ”Tallenna”.',
        image: 3
    },
    extract: {
        name: 'Napauta ”Irrota ääni”',
        text: 'Napauta ”Irrota ääni” – ääniraita muunnetaan suoraan iPhonella sekunneissa, eikä mitään ladata internetiin.',
        image: 2
    },
    save: {
        name: 'Tallenna tai lähetä tiedosto',
        text: 'Valmis äänitiedosto näkyy kirjastossa. Napauta Jaa tallentaaksesi sen Tiedostoihin, lähettääksesi AirDropilla tai mihin tahansa sovellukseen.',
        image: 4
    }
};

const guides = [];
module.exports = guides;

guides.push(
    {
        slug: 'extract-audio-from-video-iphone',
        keyword: 'irrota ääni videosta iphone',
        eyebrow: 'Perusteet',
        title: 'Näin irrotat äänen videosta iPhonella – vaihe vaiheelta',
        description: 'Irrota ääni mistä tahansa videosta iPhonella neljällä napautuksella: valitse video, rajaa, napauta ”Irrota ääni” ja tallenna MP3:na tai M4A:na. Ilmainen.',
        h1: 'Näin irrotat äänen videosta iPhonella',
        answer: `Irrottaaksesi äänen videosta iPhonella avaa ${APP}, valitse video Kuvista, rajaa tarvittaessa ja napauta ”Irrota ääni”. Sovellus tallentaa ääniraidan MP3- tai M4A-muodossa iPhonelle sekunneissa. Se on ilmaista ja toimii ilman internetiä.`,
        intro: '<p>iPhonen Kuvissa ei ole painiketta ”tallenna vain ääni”. Voit tehdä pikakomennon (katso <a href="/fi/guides/extract-audio-without-app-iphone/">tapa ilman sovellusta</a>) tai ladata videon verkkosivulle, mutta molemmat ovat hitaita, kun tarvitset vain äänen. Tässä nopein tapa: ilmainen sovellus, joka toimii suoraan Jaa-valikosta.</p>',
        steps: [STEP.open, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Mitä tarvitset',
                html: `<ul>
<li>iPhonen, jossa on iOS 18.6 tai uudempi.</li>
<li>${APP} – ilmainen App Storessa (noin 23 Mt).</li>
<li>Videon, jossa on ääni: kameran tallenteet (MOV), ladatut videot (MP4), näyttötallenteet, videot Viesteistä.</li>
</ul>`
            },
            {
                h2: 'Nopein tapa – Jaa-valikosta',
                html: '<p>Sovellusta ei tarvitse edes avata. Avaa video <strong>Kuvissa</strong> tai <strong>Tiedostoissa</strong>, napauta <strong>Jaa</strong>, selaa sovellusriviä ja valitse <strong>”Irrota ääni”</strong>. Jos et näe sitä, napauta ”Lisää” ja lisää se suosikkeihin – silloin se on aina käsillä.</p>'
            },
            {
                h2: 'MP3 vai M4A – kumpi valita?',
                html: '<p><strong>MP3</strong> soi kaikkialla: Windows, Android, autostereot, verkkosivut ja videoeditorit. <strong>M4A</strong> (AAC) on Applen oma muoto: pienempi samalla laadulla, ihanteellinen soittoääniin, GarageBandiin ja iMovieen. Jos epäröit, valitse MP3. Lisää: <a href="/fi/guides/convert-video-to-mp3-iphone/">video MP3:ksi</a> ja <a href="/fi/guides/video-to-m4a-iphone/">video M4A:ksi</a>.</p>'
            },
            {
                h2: 'Mihin ääni tallentuu?',
                html: '<p>Jokainen irrotettu tiedosto näkyy sovelluksen kirjastossa kestoineen, kokoineen ja päivämäärineen. Napauta siellä <strong>Jaa → Tallenna Tiedostoihin</strong> tallentaaksesi sen iCloud Driveen tai ”iPhonessa”-kansioon, tai lähetä se WhatsAppiin, Messengeriin, Muistiinpanoihin, GarageBandiin tai AirDropilla tietokoneelle.</p>'
            },
            {
                h2: 'Jos jokin menee pieleen',
                html: `<ul>
<li><strong>Tiedostossa ei ole ääntä.</strong> Videossa itsessään ei ole ääniraitaa – näin käy näyttötallenteissa ilman mikrofonia. Tarkista video ensin Kuvissa.</li>
<li><strong>Video on iCloudissa.</strong> Kuvat lataa ensin alkuperäisen – odota, että lataus valmistuu.</li>
<li><strong>Tarvitset vain 20 sekuntia.</strong> Rajaa ennen irrotusta – katso <a href="/fi/guides/trim-audio-from-video-iphone/">miten leikkaat osan äänestä</a>.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Voiko äänen irrottaa videosta iPhonella ilmaiseksi?', a: `Kyllä. ${APP} on ilmainen ladata, ja perusirrotus on myös ilmainen. Lisäominaisuudet saa sovelluksen sisäisillä ostoilla.` },
            { q: 'Heikkeneekö laatu irrotuksessa?', a: 'Sovellus tallentaa videon ääniraidan laadukkaana MP3- tai M4A-tiedostona. Ääni ei parane alkuperäisestä, mutta kuulostaa samalta kuin videota toistettaessa.' },
            { q: 'Voiko äänen irrottaa pitkästä videosta?', a: 'Kyllä. Luennot, konsertit ja kokoukset käsitellään samalla tavalla, vain hieman hitaammin. Jos tarvitset vain osan, rajaa ensin.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'trim-audio-from-video-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Irrota ääni videosta iPhonella', text: 'Neljän napautuksen tapa – Kuvista tai Jaa-valikosta.' }
    },
    {
        slug: 'convert-video-to-mp3-iphone',
        keyword: 'video mp3:ksi iphone',
        eyebrow: 'Video MP3:ksi',
        title: 'Näin muunnat videon MP3:ksi iPhonella – ilmaiseksi',
        description: 'Muunna mikä tahansa iPhonen video MP3:ksi sekunneissa. Toimii Kuvista, tiedostot pysyvät laitteella ja voit rajata ennen vientiä. Vaiheittainen opas.',
        h1: 'Näin muunnat videon MP3:ksi iPhonella',
        answer: `Avaa video Kuvissa, napauta Jaa ja valitse ”Irrota ääni” (${APP}). Rajaa tarvittaessa, napauta ”Irrota ääni” ja tallenna MP3:na. Tiedosto jää iPhonelle – voit lähettää sen Tiedostoihin, AirDropilla tai mihin tahansa sovellukseen. Tietokonetta tai tiliä ei tarvita.`,
        intro: '<p>MP3 on yhteensopivin äänimuoto: se soi jokaisessa autossa, tietokoneessa ja editorissa. Näin muunnat videon MP3:ksi laskematta iPhonea kädestä.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Irrota MP3:ksi', text: 'Napauta ”Irrota ääni” ja valitse MP3-muoto. Videon muunnos MP3:ksi tapahtuu suoraan iPhonella.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'Miksi sovellus eikä verkkomuunnin?',
                html: '<p>Verkkomuuntimet vaativat koko videon lataamisen, jonottamisen ja MP3:n noutamisen takaisin – hidasta mobiilidatalla ja riskialtista henkilökohtaisille videoille. Sovellus toimii ilman verkkoa, pitää tiedoston laitteella ja antaa rajata tallenteen ennen muunnosta. Tarkka vertailu: <a href="/fi/guides/extract-audio-online-vs-app/">verkossa vai sovelluksella</a>.</p>'
            },
            {
                h2: 'Mitkä videot voi muuntaa MP3:ksi?',
                html: '<p>Kaikki, mitä iPhone toistaa: kameran tallenteet (<a href="/fi/guides/mov-to-mp3-iphone/">MOV</a>), ladatut videot (<a href="/fi/guides/mp4-to-mp3-iphone/">MP4</a>), <a href="/fi/guides/screen-recording-to-audio-iphone/">näyttötallenteet</a> sekä videot Viesteistä, WhatsAppista, Messengeristä ja AirDropista.</p>'
            },
            {
                h2: 'Mitä MP3:lla voi tehdä',
                html: `<ul>
<li>Tallentaa <strong>Tiedostoihin</strong> ja kuunnella ilman verkkoa.</li>
<li>Lähettää tietokoneelle <strong>AirDropilla</strong>.</li>
<li>Tehdä 30 sekunnista <a href="/fi/guides/video-to-ringtone-iphone/">soittoäänen</a>.</li>
<li>Lisätä GarageBandiin, CapCutiin tai podcast-editoriin.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Voiko iPhone muuntaa videon MP3:ksi ilman sovellusta?', a: 'Ei suoraan. Pikakomennot tallentavat äänen vain M4A-muodossa. MP3:ta varten iPhonella tarvitaan sovellus tai verkkosivu.' },
            { q: 'Onko MP3-muunnos ilmainen?', a: `Kyllä, perusmuunnos ${APP}-sovelluksessa on ilmainen. Lisäominaisuudet sovelluksen sisäisillä ostoilla.` },
            { q: 'Tarvitaanko internetiä videon muuntamiseen MP3:ksi?', a: 'Ei. Muunnos tapahtuu iPhonella ja toimii ilman verkkoa. Vain iCloudissa olevat videot pitää ladata ensin.' }
        ],
        related: ['mp4-to-mp3-iphone', 'mov-to-mp3-iphone', 'video-to-m4a-iphone'],
        card: { title: 'Video MP3:ksi iPhonella', text: 'Mikä tahansa video yleiseksi MP3:ksi.' }
    }
);

guides.push(
    {
        slug: 'mp4-to-mp3-iphone',
        keyword: 'mp4 mp3 iphone',
        eyebrow: 'MP4 MP3:ksi',
        title: 'MP4 MP3:ksi iPhonella: ilmainen muunnin ilman lataamista',
        description: 'Muunna MP4 MP3:ksi iPhonella ilmaiseksi: avaa tiedosto Tiedostoissa tai Kuvissa ja napauta Jaa → ”Irrota ääni”. Toimii ilman verkkoa, rajauksella.',
        h1: 'Näin muunnat MP4:n MP3:ksi iPhonella',
        answer: `Muuntaaksesi MP4:n MP3:ksi iPhonella avaa tiedosto Tiedostoissa tai Kuvissa, napauta Jaa ja valitse ”Irrota ääni”. Rajaa halutessasi ${APP}-sovelluksessa, napauta ”Irrota ääni”, valitse MP3 ja tallenna. Ilmainen, laitteella, ilman internetiä.`,
        intro: '<p>MP4-tiedostot tulevat yleensä latauksina, sähköpostin liitteinä tai AirDropilla, joten ne ovat usein <strong>Tiedostot</strong>-sovelluksessa eivätkä Kuvissa. Sovellus toimii molempien kanssa.</p>',
        steps: [
            { name: 'Etsi MP4-tiedosto', text: 'Avaa Tiedostot (Lataukset, iCloud Drive tai ”iPhonessa”) tai Kuvat ja etsi MP4.', image: 2 },
            { name: 'Lähetä ”Irrota ääni” -sovellukseen', text: 'Paina tiedostoa pitkään ja valitse Jaa → ”Irrota ääni”. MP4 avautuu sovelluksessa.', image: 2 },
            STEP.trim,
            { name: 'Tallenna MP3:na', text: 'Napauta ”Irrota ääni”, valitse MP3 ja sitten Jaa → Tallenna Tiedostoihin, jolloin MP3 on alkuperäisen MP4:n vieressä.', image: 4 }
        ],
        sections: [
            {
                h2: 'MP4:n ja MP3:n ero',
                html: '<p>MP4 on säiliö, jossa on sekä kuva että ääni; MP3 sisältää vain äänen. Kun MP4 muunnetaan MP3:ksi, ääniraita säilyy ja kuva poistetaan: tiedosto pienenee huomattavasti ja soi missä tahansa soittimessa.</p>'
            },
            {
                h2: 'MP4 WhatsAppista, Messengeristä ja sähköpostista',
                html: '<p>Tallenna ensin liite: avaa video keskustelussa → Jaa → ”Tallenna video” (Kuviin) tai ”Tallenna Tiedostoihin”. Noudata sitten yllä olevia vaiheita. Muunna vain omia videoitasi tai videoita, joihin sinulla on oikeudet.</p>'
            },
            {
                h2: 'Tarvitsetko M4A:n?',
                html: '<p>Soittoääniin ja Applen sovelluksiin M4A sopii paremmin. Katso <a href="/fi/guides/video-to-m4a-iphone/">miten tallennat videon M4A:na iPhonella</a>.</p>'
            }
        ],
        faq: [
            { q: 'Voiko MP4:n muuntaa MP3:ksi ilmaiseksi iPhonella?', a: `Kyllä. ${APP} muuntaa MP4:n MP3:ksi ilmaiseksi suoraan laitteella. Sovelluksen sisäiset ostot avaavat lisäominaisuuksia.` },
            { q: 'Onko MP3 pienempi kuin MP4?', a: 'Kyllä, yleensä paljon pienempi: videoraita poistetaan ja vain ääni jää.' },
            { q: 'Voiko useita MP4-tiedostoja muuntaa?', a: 'Kyllä. Muunna ne yksi kerrallaan – kaikki MP3:t tallentuvat sovelluksen kirjastoon.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'mov-to-mp3-iphone', 'extract-audio-online-vs-app'],
        card: { title: 'MP4 MP3:ksi iPhonella', text: 'Ladatut MP4:t Tiedostoista ja Kuvista MP3:ksi.' }
    },
    {
        slug: 'mov-to-mp3-iphone',
        keyword: 'mov mp3 iphone',
        eyebrow: 'MOV MP3:ksi',
        title: 'MOV MP3:ksi iPhonella – ääni iPhonen kameran videoista',
        description: 'iPhonen kameran videot ovat MOV-tiedostoja. Muunna MOV MP3:ksi suoraan puhelimessa: valitse video, rajaa ja napauta ”Irrota ääni”. Ilmainen ja offline.',
        h1: 'Näin muunnat MOV:n MP3:ksi iPhonella',
        answer: `Kaikki iPhonen kameran videot tallentuvat MOV-muodossa. Saadaksesi MP3:n avaa video Kuvissa, napauta Jaa → ”Irrota ääni”, rajaa tarvittaessa ja napauta ”Irrota ääni” ${APP}-sovelluksessa. MP3 tallentuu iPhonelle – tietokonetta ei tarvita.`,
        intro: '<p>MOV on Applen videomuoto, jolla iPhonen kamera tallentaa: konsertit, puheet, ystävä kitaran kanssa, ääni jonka haluat säilyttää. MP3:na kuuntelet äänen missä tahansa.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Milloin MOV MP3:ksi on hyödyllinen',
                html: `<ul>
<li>Säilytä kuvaamasi konsertin tai esityksen ääni.</li>
<li>Tee maljapuheesta tai puheesta äänimuisto.</li>
<li>Lähetä treeninauhoitus bändille ilman valtavaa videota.</li>
<li>Kuuntele <a href="/fi/guides/lecture-video-to-audio-iphone/">tallennettua luentoa</a> liikkeellä.</li>
</ul>`
            },
            {
                h2: 'HEVC, 4K ja Elokuvatila',
                html: '<p>HEVC- ja 4K-videot käsitellään samoin. Vain ääni muunnetaan, joten hyvin suuristakin MOV-tiedostoista tulee pieniä äänitiedostoja.</p>'
            },
            {
                h2: 'Miksi tietokonetta ei tarvita',
                html: '<p>Usean gigatavun MOV-tiedoston siirtäminen tietokoneelle äänen takia kestää kauemmin kuin muuntaminen puhelimessa. Sovellus tekee sen siellä, missä video jo on.</p>'
            }
        ],
        faq: [
            { q: 'Missä muodossa iPhone tallentaa videota?', a: 'iPhonen kamera tallentaa MOV-tiedostoja, yleensä HEVC- tai H.264-videolla ja AAC-äänellä.' },
            { q: 'Voiko MOV:n muuntaa MP3:ksi laadun kärsimättä?', a: 'Sovellus säilyttää alkuperäisen tallenteen laadun: MP3 kuulostaa samalta kuin video toistettaessa.' },
            { q: 'Voiko MOV:n tallentaa M4A:na?', a: 'Kyllä, valitse M4A-muoto. Se on kätevä soittoääniin ja Applen sovelluksiin.' }
        ],
        related: ['mp4-to-mp3-iphone', 'convert-video-to-mp3-iphone', 'save-music-from-video-iphone'],
        card: { title: 'MOV MP3:ksi', text: 'Ääni iPhonen kameran videoista.' }
    },
    {
        slug: 'video-to-m4a-iphone',
        keyword: 'video m4a iphone',
        eyebrow: 'Video M4A:ksi',
        title: 'Video M4A:ksi iPhonella – MP4 ja MOV M4A:ksi ilmaiseksi',
        description: 'Tallenna videon ääni M4A-muodossa iPhonella soittoääniin, GarageBandiin ja Applen sovelluksiin. Ilmainen, laitteella ja rajauksella – MP4 tai MOV M4A:ksi.',
        h1: 'Näin tallennat videon äänen M4A-muodossa iPhonella',
        answer: `Muuntaaksesi videon M4A:ksi iPhonella lähetä video Kuvista tai Tiedostoista ”Irrota ääni” -sovellukseen, rajaa halutessasi, napauta ”Irrota ääni” ja valitse M4A. ${APP} tallentaa M4A-tiedoston (AAC), joka sopii GarageBandiin, iMovieen, soittimiin ja soittoääniksi.`,
        intro: '<p>M4A on Applen oma äänimuoto. Vastaavalla laadulla se on MP3:a pienempi, ja juuri sitä iPhone odottaa soittoääniin ja GarageBand-projekteihin.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Irrota M4A:ksi', text: 'Napauta ”Irrota ääni” ja valitse M4A-muoto.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'M4A vai MP3 – milloin valita M4A',
                html: `<table class="guide-table"><thead><tr><th></th><th>M4A (AAC)</th><th>MP3</th></tr></thead><tbody>
<tr><td>Paras käyttöön</td><td>iPhone, Mac, soittoäänet, GarageBand</td><td>Kaikki muu – Windows, Android, auto</td></tr>
<tr><td>Tiedostokoko</td><td>Pienempi samalla laadulla</td><td>Hieman suurempi</td></tr>
<tr><td>Yhteensopivuus</td><td>Erittäin hyvä</td><td>Yleinen</td></tr>
</tbody></table>`
            },
            {
                h2: 'Aseta M4A soittoääneksi',
                html: '<p>iOS 26:ssa alle 30 sekunnin M4A-tiedoston voi asettaa soittoääneksi suoraan Tiedostoista. Lisää: <a href="/fi/guides/video-to-ringtone-iphone/">näin teet soittoäänen videosta</a>.</p>'
            },
            {
                h2: 'Avaa GarageBandissa tai iMoviessa',
                html: '<p>Tallenna M4A Tiedostoihin ja tuo se GarageBandin tai iMovien tiedostoselaimen kautta – taustamusiikiksi, selostukseksi tai ääniefektiksi.</p>'
            }
        ],
        faq: [
            { q: 'Onko M4A parempi kuin MP3?', a: 'Samalla bittinopeudella M4A (AAC) kuulostaa yleensä yhtä hyvältä tai paremmalta ja vie vähemmän tilaa. MP3 on yhteensopiva useampien laitteiden kanssa.' },
            { q: 'Voiko M4A:n tehdä Pikakomennoilla?', a: 'Kyllä, toiminto ”Koodaa media” valinnalla ”Vain ääni” luo M4A:n. Ääntä ei kuitenkaan voi rajata eikä tallentaa MP3:na näin – sovelluksessa voi.' },
            { q: 'Onko M4A-tallennus ilmainen?', a: `Kyllä, perusirrotus ${APP}-sovelluksessa on ilmainen, mukaan lukien M4A-vienti.` }
        ],
        related: ['video-to-ringtone-iphone', 'convert-video-to-mp3-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Video M4A:ksi', text: 'Applen muoto soittoääniin ja GarageBandiin.' }
    }
);

guides.push(
    {
        slug: 'extract-audio-without-app-iphone',
        keyword: 'irrota ääni videosta iphone ilman sovellusta',
        eyebrow: 'Pikakomennot vai sovellus',
        title: 'Näin irrotat äänen videosta iPhonella ilman sovellusta',
        description: 'Videon äänen saa iPhonella irti ilman sovellusta – Pikakomennoilla ja toiminnolla ”Koodaa media”. Asetus, rajoitukset ja nopeampi vaihtoehto.',
        h1: 'Näin irrotat äänen videosta iPhonella ilman sovellusta',
        answer: 'Ilman kolmannen osapuolen sovelluksia ääni irrotetaan Pikakomennoilla: lisää toiminto ”Koodaa media”, laita ”Vain ääni” päälle, lisää ”Tallenna tiedosto” ja ota käyttöön näkyminen Jaa-valikossa. Lähetä sitten video pikakomentoon. Tulos on vain M4A eikä rajausta ole; MP3:lle ja lyhyille pätkille sovellus on nopeampi.',
        intro: '<p>Applen ilmainen Pikakomennot-sovellus osaa erottaa äänen videosta. Asetus vie muutaman minuutin. Tässä tarkka ohje – ja sen rajoitukset.</p>',
        steps: [
            { name: 'Luo uusi pikakomento', text: 'Avaa Pikakomennot, napauta + ja nimeä pikakomento ”Ääni videosta”.', image: 2 },
            { name: 'Lisää ”Koodaa media”', text: 'Napauta ”Lisää toiminto”, etsi ”Koodaa media”, lisää se, avaa valinnat nuolesta ja laita ”Vain ääni” päälle.', image: 2 },
            { name: 'Lisää ”Tallenna tiedosto”', text: 'Lisää toiminto ”Tallenna tiedosto”, jotta tulos päätyy Tiedostoihin.', image: 4 },
            { name: 'Näytä Jaa-valikossa', text: 'Avaa pikakomennon tiedot (i-kuvake), laita ”Näytä jakotaulukossa” päälle ja salli tyyppi ”Media”. Lähetä nyt video Kuvista ja valitse pikakomento.', image: 4 }
        ],
        sections: [
            {
                h2: 'Pikakomento-menetelmän rajoitukset',
                html: `<ul>
<li><strong>Vain M4A</strong> – MP3:ta ei saa.</li>
<li><strong>Ei rajausta</strong> – koko ääniraita tallentuu aina.</li>
<li><strong>Ei kirjastoa</strong> – tiedostot päätyvät Tiedostoihin, ja ne pitää etsiä ja nimetä käsin.</li>
<li>Pitkissä videoissa pikakomento voi pysähtyä ilman ymmärrettävää virheilmoitusta.</li>
</ul>`
            },
            {
                h2: 'Yhden napautuksen vaihtoehto',
                html: `<p>${APP} tekee saman, mutta rajauksella, MP3- tai M4A-valinnalla ja kirjastolla kaikille irrotetuille tiedostoille. Sovellus on myös suoraan Jaa-valikossa, joten se ei ole hitaampi – eikä mitään tarvitse rakentaa.</p>`
            },
            {
                h2: 'Muita tapoja ilman sovellusta',
                html: '<p>Äänen voi erottaa myös iMoviessa tai GarageBandissa, mutta vaiheita on enemmän ja vientimuotoja vähemmän. Verkkosivutkin toimivat, mutta video pitää ladata internetiin – katso <a href="/fi/guides/extract-audio-online-vs-app/">verkossa vai sovelluksella</a>.</p>'
            }
        ],
        faq: [
            { q: 'Onko iPhonessa sisäänrakennettu tapa irrottaa ääni?', a: 'Kuvissa ei ole erillistä painiketta. Lähin sisäänrakennettu vaihtoehto on Pikakomennot-sovelluksen toiminto ”Koodaa media” valinnalla ”Vain ääni”.' },
            { q: 'Missä muodossa pikakomento tallentaa äänen?', a: 'M4A-muodossa. MP3:na tallentaminen ei onnistu Pikakomennoilla.' },
            { q: 'Voiko ääntä rajata pikakomennolla?', a: `Ei kätevästi. Rajaukseen käytä sovellusta, jossa on aikajana, esimerkiksi ${APP}.` }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-online-vs-app', 'video-to-m4a-iphone'],
        card: { title: 'Ilman sovellusta (Pikakomennot)', text: 'Ilmainen ohje ja sen rajat.' }
    },
    {
        slug: 'extract-audio-online-vs-app',
        keyword: 'irrota ääni videosta netissä',
        eyebrow: 'Verkossa vai sovelluksella',
        title: 'Irrota ääni videosta netissä vai sovelluksella iPhonella?',
        description: 'Irrotatko äänen videosta netissä vai sovelluksella? Vertailemme yksityisyyttä, nopeutta, rajoja ja rajausta iPhonella – ja mitä valita, kun video on puhelimessa.',
        h1: 'Irrota ääni videosta netissä vai sovelluksella: kumpi iPhonella',
        answer: `Verkkopalvelut toimivat millä tahansa laitteella, mutta vaativat koko videon lataamisen, käsittelyn odottamisen ja tuloksen noutamisen – hidasta mobiilidatalla ja turvatonta henkilökohtaisille tallenteille. iPhonella ${APP} kaltainen sovellus on nopeampi, toimii ilman verkkoa, pitää videon laitteella ja osaa rajata äänen.`,
        intro: '<p>Haulla ”irrota ääni videosta netissä” löytyy kymmeniä ilmaisia sivustoja. Nopealla yhteydellä kannettavalla ne ovat käteviä. iPhonella tilanne on toinen.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Vertailu',
                html: `<table class="guide-table"><thead><tr><th></th><th>Verkkopalvelu</th><th>${APP}</th></tr></thead><tbody>
<tr><td>Yksityisyys</td><td>Video ladataan vieraalle palvelimelle</td><td>Pysyy iPhonella</td></tr>
<tr><td>Nopeus</td><td>Lataus + jono + nouto</td><td>Sekunteja, laitteella</td></tr>
<tr><td>Ilman internetiä</td><td>Ei</td><td>Kyllä</td></tr>
<tr><td>Kokorajoitukset</td><td>Usein ilmaisversioissa</td><td>Vain iPhonen tallennustila</td></tr>
<tr><td>Rajaus</td><td>Joskus</td><td>Sisäänrakennettu aikajana</td></tr>
<tr><td>Mainokset ja ponnahdusikkunat</td><td>Usein</td><td>Ei verkkomainoksia</td></tr>
<tr><td>Hinta</td><td>Ilmainen rajoituksin</td><td>Perustoiminnot ilmaisia</td></tr>
</tbody></table>`
            },
            {
                h2: 'Milloin verkkopalvelu kannattaa',
                html: '<p>Jos istut Windows-koneella ja video on jo siellä, luotettava verkkomuunnin riittää. Älä lataa sinne mitään henkilökohtaista: perhevideoita, työpalavereja tai asiakasmateriaalia.</p>'
            },
            {
                h2: 'Milloin sovellus on parempi',
                html: '<p>Kun video on iPhonella, sovellus voittaa: sitä ei tarvitse ladata mobiiliverkossa, odottaa eikä noutaa tulosta, ja tarvittavan kohdan voi leikata tarkasti.</p>'
            }
        ],
        faq: [
            { q: 'Onko äänen irrottaminen videosta netissä turvallista?', a: 'Riippuu sivustosta. Video ladataan kolmannen osapuolen palvelimelle, joten henkilökohtaisten tallenteiden kanssa se kannattaa välttää. Laitteella toimivat sovellukset eivät lataa mitään.' },
            { q: 'Voiko iPhonella irrottaa äänen ilmaiseksi lataamatta mitään nettiin?', a: `Kyllä. ${APP} muuntaa videot ilmaiseksi suoraan laitteella, eikä videota lähetetä minnekään.` },
            { q: 'Miksi verkkomuunnos puhelimella on niin hidas?', a: 'Koko video pitää ensin ladata palvelimelle. Puhelimen videot ovat suuria, ja mobiiliverkon lähetysnopeus on yleensä paljon latausnopeutta hitaampi.' }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-without-app-iphone', 'mp4-to-mp3-iphone'],
        card: { title: 'Verkossa vai sovelluksella', text: 'Yksityisyys, nopeus ja rajat – vertailu.' }
    },
    {
        slug: 'save-music-from-video-iphone',
        keyword: 'musiikki videosta iphone',
        eyebrow: 'Musiikki',
        title: 'Näin irrotat musiikin videosta iPhonella (MP3 tai M4A)',
        description: 'Tallenna kappale tai taustamusiikki videosta iPhonella MP3- tai M4A-muodossa. Rajaa tarkasti kappaleen mukaan, kuuntele ilman verkkoa, jaa. Lyhyt opas.',
        h1: 'Näin irrotat musiikin videosta iPhonella',
        answer: `Irrottaaksesi musiikin videosta iPhonella avaa video Kuvissa, napauta Jaa → ”Irrota ääni”, valitse merkeillä kappale ja napauta ”Irrota ääni” ${APP}-sovelluksessa. Musiikki tallentuu MP3:na tai M4A:na – kuuntele sitä ilman verkkoa Tiedostoissa tai lähetä mihin tahansa sovellukseen.`,
        intro: '<p>Häiden kappale, ystävän cover, musiikki omasta editoinnistasi – joskus videon arvokkain osa on ääni. Näin tallennat sen erilliseksi musiikkitiedostoksi.</p>',
        steps: [STEP.share, { name: 'Valitse kappale', text: 'Napauta ”Rajaa video” ja vedä keltaisia merkkejä niin, että vain kappale jää jäljelle. Kuuntele alku ja loppu.', image: 3 }, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Näin saat parhaan äänen',
                html: `<ul>
<li>Leikkaa puhe ja taputukset alusta ja lopusta.</li>
<li>MP3 autoon ja vanhempiin soittimiin, M4A Applen laitteisiin.</li>
<li>Nimeä tiedosto uudelleen Tiedostoissa (pitkä painallus → ”Nimeä uudelleen”), niin löydät sen helposti.</li>
</ul>`
            },
            {
                h2: 'Tekijänoikeuksista',
                html: '<p>Tallenna musiikkia omista videoistasi tai videoista, joihin sinulla on oikeudet. Kaupalliset kappaleet ovat tekijänoikeuden suojaamia: henkilökohtainen kopio omasta tallenteesta on ok, muiden musiikin julkaiseminen ei.</p>'
            },
            {
                h2: 'Aseta soittoääneksi',
                html: '<p>Löysitkö lempi-30 sekuntisi? <a href="/fi/guides/video-to-ringtone-iphone/">Tee niistä soittoääni</a>.</p>'
            }
        ],
        faq: [
            { q: 'Miten saan kappaleen irti videosta iPhonella?', a: `Lähetä video ${APP}-sovellukseen, valitse kappale rajauksessa ja napauta ”Irrota ääni”. Kappale tallentuu äänitiedostona.` },
            { q: 'Voiko irrotetun kappaleen lisätä Apple Musiciin?', a: 'iPhonen Musiikki-sovellus ei tuo paikallisia tiedostoja suoraan. Pidä tiedosto Tiedostoissa tai synkronoi Macin tai PC:n kautta.' },
            { q: 'Voiko musiikin irrottaa WhatsApp- tai Viestit-videosta?', a: 'Kyllä. Tallenna video ensin Kuviin tai Tiedostoihin ja irrota sitten ääni.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-ringtone-iphone', 'mov-to-mp3-iphone'],
        card: { title: 'Musiikki videosta', text: 'Pidä kappale, jätä kuva.' }
    }
);

guides.push(
    {
        slug: 'trim-audio-from-video-iphone',
        keyword: 'leikkaa ääni videosta iphone',
        eyebrow: 'Rajaus',
        title: 'Näin leikkaat osan äänestä videosta iPhonella (rajaus)',
        description: 'Tarvitsetko vain 10 sekuntia ääntä? Rajaa video iPhonella ja tallenna vain se kohta MP3- tai M4A-muodossa. Merkit, esikuuntelu ja vienti – ilmaiseksi.',
        h1: 'Näin irrotat vain osan videon äänestä iPhonella',
        answer: `Leikataksesi osan äänestä videosta iPhonella avaa se ${APP}-sovelluksessa, napauta ”Rajaa video”, vedä keltaiset alku- ja loppumerkit halutun kohdan ympärille, napauta ”Tallenna” ja sitten ”Irrota ääni”. Vain valittu kohta tallentuu MP3:na tai M4A:na.`,
        intro: '<p>Useimmiten et tarvitse koko ääniraitaa vaan lainauksen, kertosäkeen tai ääniefektin. Kun rajaat ensin, saat pienen ja siistin pätkän.</p>',
        steps: [
            STEP.open,
            { name: 'Napauta ”Rajaa video”', text: 'Napauta irrotusnäkymässä ”Rajaa video” avataksesi aikajanan.', image: 2 },
            { name: 'Vedä merkkejä', text: 'Vedä vasen keltainen merkki alkuun ja oikea loppuun. Valinnan aika näkyy vieressä. Kuuntele ja napauta ”Tallenna”.', image: 3 },
            { name: 'Irrota ja tallenna', text: 'Napauta ”Irrota ääni” – vain rajattu osa viedään. Lähetä se tai tallenna Tiedostoihin.', image: 4 }
        ],
        sections: [
            {
                h2: 'Vinkkejä tarkkaan rajaukseen',
                html: `<ul>
<li>Jätä puoli sekuntia ennen ja jälkeen puheen, ettei sanoja katkea.</li>
<li>Soittoääneen valitse enintään 30 sekuntia.</li>
<li>Tarvitsetko useita kohtia samasta videosta? Toista rajaus jokaiselle – kaikki tiedostot tallentuvat kirjastoon.</li>
</ul>`
            },
            {
                h2: 'Mitä yleensä leikataan',
                html: '<p>Yksi lause puheesta, kappaleen kertosäe, ääniefekti editointiin, lapsen ensimmäiset sanat tai pitkän palaveritallenteen tärkein minuutti.</p>'
            }
        ],
        faq: [
            { q: 'Voiko videon ääntä rajata iPhonella?', a: `Kyllä. Rajaa video haluttuun kohtaan ${APP}-sovelluksessa ja irrota ääni – vain se kohta tallentuu.` },
            { q: 'Muuttaako rajaus alkuperäistä videota?', a: 'Ei. Alkuperäinen Kuvissa pysyy ennallaan, vain vietävä äänitiedosto rajataan.' },
            { q: 'Voiko samasta videosta leikata useita kohtia?', a: 'Kyllä. Rajaa ja irrota ääni uudelleen jokaiselle tarvitsemallesi kohdalle.' }
        ],
        related: ['video-to-ringtone-iphone', 'save-music-from-video-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Leikkaa osa äänestä', text: 'Rajaus sekunnin tarkkuudella.' }
    },
    {
        slug: 'screen-recording-to-audio-iphone',
        keyword: 'ääni näyttötallenteesta iphone',
        eyebrow: 'Näyttötallenne',
        title: 'Näin tallennat äänen näyttötallenteesta iPhonella',
        description: 'Muuta iPhonen näyttötallenne MP3- tai M4A-äänitiedostoksi. Miksi tallenteessa ei ole ääntä, miten leikkaat oikean kohdan ja tallennat äänen.',
        h1: 'Näin tallennat äänen näyttötallenteesta iPhonella',
        answer: `iPhonen näyttötallenteet tallentuvat Kuviin videoina. Saadaksesi äänen avaa tallenne, napauta Jaa → ”Irrota ääni”, rajaa tarvittaessa ja napauta ”Irrota ääni” ${APP}-sovelluksessa. Jos tiedostossa ei ole ääntä, sitä ei alun perinkään tallennettu – laita mikrofoni päälle ennen tallennusta.`,
        intro: '<p>Näytön tallennus on yleinen tapa säilyttää ääniviesti, kaiutinpuhelu tai pätkä sovelluksesta. Näin säilytät vain äänen.</p>',
        steps: [
            { name: 'Etsi tallenne Kuvista', text: 'Näyttötallenteet löytyvät Kuvat → Mediatyypit → Näyttötallenteet.', image: 2 },
            { name: 'Lähetä ”Irrota ääni” -sovellukseen', text: 'Avaa tallenne, napauta Jaa ja valitse ”Irrota ääni”.', image: 2 },
            STEP.trim,
            { name: 'Irrota ja tallenna', text: 'Napauta ”Irrota ääni” ja tallenna MP3 tai M4A Tiedostoihin.', image: 4 }
        ],
        sections: [
            {
                h2: 'Miksi näyttötallenteessa ei ole ääntä?',
                html: `<ul>
<li><strong>Mikrofoni pois päältä:</strong> paina Ohjauskeskuksessa pitkään Näytön tallennus -painiketta ja laita ”Mikrofoni” päälle, jotta äänesi tallentuu.</li>
<li><strong>Äänetön tila:</strong> jotkin sovellukset mykistävät äänensä äänettömässä tilassa.</li>
<li><strong>Suojattu sisältö:</strong> monet suoratoistopalvelut estävät äänen näytön tallennuksessa – rajoitusta ei voi kiertää.</li>
</ul>`
            },
            {
                h2: 'Kunnioita yksityisyyttä',
                html: '<p>Tallenna puheluita ja keskusteluja vain kaikkien osapuolten suostumuksella ja maasi lakien mukaisesti.</p>'
            }
        ],
        faq: [
            { q: 'Voiko näyttötallenteen muuntaa MP3:ksi?', a: 'Kyllä. Näyttötallenne on tavallinen video, joten sen äänen voi tallentaa MP3:na tai M4A:na.' },
            { q: 'Missä iPhonen näyttötallenteet ovat?', a: 'Kuvat-sovelluksessa kohdassa Mediatyypit → Näyttötallenteet.' },
            { q: 'Miksi näyttötallenteessa ei ole ääntä?', a: 'Mikrofoni oli pois päältä tai sovellus estää äänen tallennuksen. Tarkista ennen irrotusta, että tallenne toistuu äänen kanssa.' }
        ],
        related: ['extract-audio-from-video-iphone', 'trim-audio-from-video-iphone', 'lecture-video-to-audio-iphone'],
        card: { title: 'Ääni näyttötallenteesta', text: 'Tallenna ääni ja selvitä, miksi se puuttuu.' }
    }
);

guides.push(
    {
        slug: 'lecture-video-to-audio-iphone',
        keyword: 'luentovideo ääneksi',
        eyebrow: 'Opiskelu',
        title: 'Näin muutat luentovideon ääneksi (MP3) iPhonella',
        description: 'Muunna tallennetut luennot, webinaarit ja esitelmät MP3:ksi iPhonella ja opiskele liikkeellä. Pienet tiedostot, kuuntelu ilman verkkoa, helppo jakaminen.',
        h1: 'Näin muutat luentovideon ääneksi iPhonella',
        answer: `Muuttaaksesi luentovideon ääneksi avaa tallenne Kuvissa tai Tiedostoissa, napauta Jaa → ”Irrota ääni” ja sitten ”Irrota ääni” ${APP}-sovelluksessa. Tallenna MP3 Tiedostoihin ja kuuntele ilman verkkoa – matkalla, salilla tai näyttö sammutettuna, paljon pienemmällä tiedostokoolla.`,
        intro: '<p>Luennossa tärkeää on se, mitä sanotaan, ei mitä näytetään. Kun muutat luentovideon ääneksi, saat podcastin, jonka voit kuunnella uudelleen missä vain.</p>',
        steps: [
            STEP.share,
            { name: 'Poista alku ja tauot (valinnainen)', text: 'Napauta ”Rajaa video” poistaaksesi odottelun ennen alkua ja tarpeettoman kysymysosuuden.', image: 3 },
            STEP.extract,
            { name: 'Tallenna ”Luennot”-kansioon', text: 'Napauta Jaa → Tallenna Tiedostoihin ja luo kansio jokaiselle kurssille, niin löydät tallenteet nopeasti.', image: 4 }
        ],
        sections: [
            {
                h2: 'Miksi äänellä opiskelu on kätevää',
                html: `<ul>
<li><strong>Pienet tiedostot:</strong> tunti ääntä vie paljon vähemmän kuin tunti videota.</li>
<li><strong>Näyttö sammutettuna:</strong> kuuntele puhelin lukittuna ja säästä akkua.</li>
<li><strong>Missä vain:</strong> ratikassa, kävelyllä, salilla – Wi‑Fiä ei tarvita.</li>
</ul>`
            },
            {
                h2: 'Tee siitä muistiinpanot',
                html: '<p>Tarvitsetko tekstiä? Tuo ääni käyttämääsi litterointisovellukseen ja hae tekstistä.</p>'
            },
            {
                h2: 'Tarkista säännöt',
                html: '<p>Monet oppilaitokset sallivat luentojen tallentamisen omaan käyttöön mutta eivät niiden jakamista. Tarkista kurssin säännöt ennen kuin tallennat tai jaat luennon.</p>'
            }
        ],
        faq: [
            { q: 'Voiko iPhonella kuunnella videota näyttö sammutettuna?', a: 'Useimmat videosoittimet pysähtyvät, kun puhelin lukitaan. Kun muunnat videon MP3:ksi, voit kuunnella sitä näyttö sammutettuna Tiedostoissa tai missä tahansa äänisoittimessa.' },
            { q: 'Toimiiko tunnin mittainen luento?', a: 'Kyllä. Pitkät tallenteet käsitellään samalla tavalla, vain hieman hitaammin.' },
            { q: 'Voiko Zoom- ja webinaaritallenteita muuntaa?', a: 'Kyllä, kunhan MP4-tallenne on iPhonen Kuvissa tai Tiedostoissa.' }
        ],
        related: ['screen-recording-to-audio-iphone', 'mp4-to-mp3-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Luentovideo ääneksi', text: 'Opiskele liikkeellä pienillä MP3-tiedostoilla.' }
    },
    {
        slug: 'video-to-ringtone-iphone',
        keyword: 'soittoääni videosta iphone',
        eyebrow: 'Soittoäänet',
        title: 'Näin teet soittoäänen videosta iPhonella (iOS 26 ja 18)',
        description: 'Tee mistä tahansa videosta iPhonen soittoääni: rajaa ääni 30 sekuntiin, tallenna Tiedostoihin ja napauta Jaa → ”Käytä soittoäänenä”. iOS 26 ja GarageBand.',
        h1: 'Näin teet soittoäänen videosta iPhonella',
        answer: `Tehdäksesi soittoäänen videosta avaa se ${APP}-sovelluksessa, rajaa enintään 30 sekuntiin, irrota ääni M4A- tai MP3-muotoon ja tallenna Tiedostoihin. iOS 26:ssa paina tiedostoa pitkään Tiedostoissa ja napauta Jaa → ”Käytä soittoäänenä”. Vanhemmissa iOS-versioissa tuo ääni GarageBandiin ja vie se soittoäänenä.`,
        intro: '<p>Nauru, kappale juhlista, koiran haukku – mikä tahansa ääni videoistasi voi olla soittoääni. iOS 26:ssa se on helppoa, kun sinulla on äänitiedosto.</p>',
        steps: [
            STEP.share,
            { name: 'Rajaa 30 sekuntiin', text: 'Napauta ”Rajaa video” ja valitse enintään 30 sekuntia – se on soittoäänen yläraja.', image: 3 },
            { name: 'Irrota ja tallenna Tiedostoihin', text: 'Napauta ”Irrota ääni” (M4A tai MP3) ja sitten Jaa → Tallenna Tiedostoihin.', image: 4 },
            { name: 'Käytä soittoäänenä', text: 'Paina Tiedostoissa äänitiedostoa pitkään ja napauta Jaa → ”Käytä soittoäänenä” (iOS 26). Tarkista kohdasta Asetukset → Äänet ja haptiikka → Soittoääni.', image: 4 }
        ],
        sections: [
            {
                h2: 'iOS 18:ssa: GarageBand-menetelmä',
                html: `<ol>
<li>Irrota ja rajaa ääni yllä kuvatulla tavalla ja tallenna se Tiedostoihin.</li>
<li>Avaa GarageBand, luo ”Äänitallennin”-projekti ja siirry raitanäkymään.</li>
<li>Avaa silmukkaselain → Tiedostot → ”Selaa kohteita Tiedostot-sovelluksesta” ja vedä ääni raidalle.</li>
<li>Palaa kohtaan ”Omat kappaleet”, paina projektia pitkään → Jaa → Soittoääni → Vie.</li>
</ol>`
            },
            {
                h2: 'Miksi ”Käytä soittoäänenä” puuttuu',
                html: `<ul>
<li>Tiedosto on yli 30 sekuntia pitkä – rajaa se uudelleen.</li>
<li>Tiedosto ei ole MP3- tai M4A-muodossa.</li>
<li>iPhonessa ei ole vielä iOS 26:ta – käytä GarageBandia.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Kuinka pitkä iPhonen soittoääni voi olla?', a: 'Omat soittoäänet äänitiedostoista voivat olla enintään 30 sekuntia pitkiä.' },
            { q: 'Missä muodossa iPhonen soittoäänen pitää olla?', a: 'iOS 26:ssa ”Käytä soittoäänenä” -toiminnolla voi asettaa alle 30 sekunnin MP3- tai M4A-tiedostoja.' },
            { q: 'Voiko videon asettaa suoraan soittoääneksi?', a: 'Ei. Irrota ensin ääni videosta ja aseta sitten äänitiedosto soittoääneksi.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-m4a-iphone', 'save-music-from-video-iphone'],
        card: { title: 'Soittoääni videosta', text: '”Käytä soittoäänenä” iOS 26:ssa – neljässä vaiheessa.' }
    }
);
