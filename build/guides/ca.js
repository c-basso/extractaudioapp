/**
 * Guies en català → /ca/guides/<slug>/
 * Els slugs són els mateixos que en anglès (build/guides/en.js) perquè les pàgines s’enllacin amb hreflang.
 * Paraules clau — vegeu la secció «Català (CA)» de /keywords.md. Estructura dels camps — com a en.js.
 * L’app no té interfície en català, així que els botons de l’app queden en anglès («Extract Audio», «Trim Video», «Save»).
 * Captures: 1 portada · 2 pantalla d’extracció · 3 retallada · 4 menú Compartir · 5 biblioteca
 */

const APP = 'Extract Audio from Video⁺';

const STEP = {
    open: {
        name: 'Obre l’app i tria un vídeo',
        text: `Obre ${APP} i tria un vídeo de Fotos o Arxius. Més ràpid: a Fotos, toca Compartir en un vídeo i tria «Extract Audio».`,
        image: 2
    },
    share: {
        name: 'Envia el vídeo a l’app',
        text: 'Obre el vídeo a Fotos o Arxius, toca Compartir i tria «Extract Audio». L’app s’obre amb el vídeo ja carregat.',
        image: 2
    },
    trim: {
        name: 'Retalla la part que vols (opcional)',
        text: 'Toca «Trim Video», arrossega els marcadors grocs a l’inici i al final de la part que vols, escolta-la i toca «Save».',
        image: 3
    },
    extract: {
        name: 'Toca «Extract Audio»',
        text: 'Toca «Extract Audio» – la pista d’àudio es converteix en segons directament a l’iPhone i no es puja res a internet.',
        image: 2
    },
    save: {
        name: 'Desa o comparteix l’arxiu',
        text: 'L’arxiu d’àudio acabat apareix a la biblioteca. Toca Compartir per desar-lo a Arxius, enviar-lo per AirDrop o a qualsevol app.',
        image: 4
    }
};

const guides = [];
module.exports = guides;

guides.push(
    {
        slug: 'extract-audio-from-video-iphone',
        keyword: 'com extreure l’àudio d’un vídeo a l’iphone',
        eyebrow: 'Bàsic',
        title: 'Com extreure l’àudio d’un vídeo a l’iPhone – pas a pas',
        description: 'Extreu l’àudio de qualsevol vídeo a l’iPhone amb quatre tocs: tria el vídeo, retalla, toca «Extract Audio» i desa’l com a MP3 o M4A. Gratis i sense núvol.',
        h1: 'Com extreure l’àudio d’un vídeo a l’iPhone',
        answer: `Per extreure l’àudio d’un vídeo a l’iPhone, obre ${APP}, tria el vídeo de Fotos, retalla’l si cal i toca «Extract Audio». En pocs segons l’app desa la pista d’àudio com a MP3 o M4A a l’iPhone. És gratuïta i funciona sense internet.`,
        intro: '<p>L’app Fotos de l’iPhone no té cap botó per «desar només l’àudio». Pots crear una drecera (vegeu <a href="/ca/guides/extract-audio-without-app-iphone/">el mètode sense app</a>) o pujar el vídeo a una web, però totes dues opcions són lentes si només vols el so. Aquí tens el camí més ràpid: una app gratuïta que funciona directament des del menú Compartir.</p>',
        steps: [STEP.open, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Què necessites',
                html: `<ul>
<li>Un iPhone amb iOS 18.6 o posterior.</li>
<li>${APP} – gratis a l’App Store (uns 23 MB).</li>
<li>Un vídeo amb so: gravacions de la càmera (MOV), vídeos descarregats (MP4), gravacions de pantalla, vídeos de Missatges.</li>
</ul>`
            },
            {
                h2: 'La manera més ràpida – amb Compartir',
                html: '<p>No cal ni obrir l’app. A <strong>Fotos</strong> o <strong>Arxius</strong>, obre el vídeo, toca <strong>Compartir</strong>, desplaça’t per la fila d’apps i tria <strong>«Extract Audio»</strong>. Si no la veus, toca «Més» i afegeix-la als favorits perquè la tinguis sempre a mà.</p>'
            },
            {
                h2: 'MP3 o M4A – quin tries?',
                html: '<p>L’<strong>MP3</strong> es reprodueix a tot arreu: Windows, Android, ràdios de cotxe, webs i editors de vídeo. L’<strong>M4A</strong> (AAC) és el format propi d’Apple: més petit amb la mateixa qualitat, ideal per a tons de trucada, GarageBand i iMovie. Si dubtes, tria MP3. Més informació: <a href="/ca/guides/convert-video-to-mp3-iphone/">vídeo a MP3</a> i <a href="/ca/guides/video-to-m4a-iphone/">vídeo a M4A</a>.</p>'
            },
            {
                h2: 'On es desa l’àudio?',
                html: '<p>Cada arxiu extret apareix a la biblioteca de l’app amb la durada, la mida i la data. Des d’allà, toca <strong>Compartir → Desar a Arxius</strong> per guardar-lo a iCloud Drive o «Al meu iPhone», o envia’l a WhatsApp, Telegram, Notes, GarageBand o per AirDrop a l’ordinador.</p>'
            },
            {
                h2: 'Si alguna cosa no funciona',
                html: `<ul>
<li><strong>L’arxiu no té so.</strong> El vídeo mateix no té pista d’àudio – passa amb gravacions de pantalla sense micròfon. Comprova primer el vídeo a Fotos.</li>
<li><strong>El vídeo és a iCloud.</strong> Fotos primer descarrega l’original – espera que acabi la descàrrega.</li>
<li><strong>Només necessites 20 segons.</strong> Retalla abans d’extreure – vegeu <a href="/ca/guides/trim-audio-from-video-iphone/">com retallar una part de l’àudio</a>.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Puc extreure l’àudio d’un vídeo a l’iPhone gratis?', a: `Sí. ${APP} és gratuïta per descarregar i l’extracció bàsica d’àudio també és gratuïta. Les funcions extra estan disponibles amb compres dins l’app.` },
            { q: 'Es perd qualitat en extreure l’àudio?', a: 'L’app desa la pista d’àudio del vídeo com a MP3 o M4A d’alta qualitat. El so no serà millor que l’original, però sonarà igual que en reproduir el vídeo.' },
            { q: 'Puc extreure l’àudio d’un vídeo llarg?', a: 'Sí. Classes, concerts i reunions es processen igual, només triguen una mica més. Si només en necessites una part, retalla-la primer.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'trim-audio-from-video-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Àudio d’un vídeo a l’iPhone', text: 'El mètode de quatre tocs – des de Fotos o amb Compartir.' }
    },
    {
        slug: 'convert-video-to-mp3-iphone',
        keyword: 'convertir vídeo a mp3 iphone',
        eyebrow: 'Vídeo a MP3',
        title: 'Com convertir un vídeo a MP3 a l’iPhone – ràpid i gratis',
        description: 'Converteix qualsevol vídeo de l’iPhone a MP3 en segons. Funciona des de Fotos, els arxius es queden al dispositiu i pots retallar abans d’exportar.',
        h1: 'Com convertir un vídeo a MP3 a l’iPhone',
        answer: `Obre el vídeo a Fotos, toca Compartir i tria «Extract Audio» (${APP}). Retalla si cal, toca «Extract Audio» i desa’l com a MP3. L’arxiu es queda a l’iPhone – el pots enviar a Arxius, per AirDrop o a qualsevol app. No cal ordinador ni compte.`,
        intro: '<p>L’MP3 és el format d’àudio més compatible: es reprodueix a qualsevol cotxe, ordinador i editor. Així converteixes un vídeo a MP3 sense deixar l’iPhone.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Extreu a MP3', text: 'Toca «Extract Audio» i tria el format MP3. La conversió de vídeo a MP3 es fa directament a l’iPhone.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'Per què una app i no un convertidor en línia?',
                html: '<p>Els convertidors en línia et fan pujar tot el vídeo, esperar a la cua i tornar a descarregar l’MP3 – lent amb dades mòbils i arriscat per a vídeos personals. L’app funciona sense connexió, guarda l’arxiu al dispositiu i et deixa retallar abans de convertir. Comparativa detallada: <a href="/ca/guides/extract-audio-online-vs-app/">en línia o app</a>.</p>'
            },
            {
                h2: 'Quins vídeos puc convertir a MP3?',
                html: '<p>Tot el que reprodueix l’iPhone: gravacions de la càmera (<a href="/ca/guides/mov-to-mp3-iphone/">MOV</a>), vídeos descarregats (<a href="/ca/guides/mp4-to-mp3-iphone/">MP4</a>), <a href="/ca/guides/screen-recording-to-audio-iphone/">gravacions de pantalla</a> i vídeos de Missatges, WhatsApp, Telegram i AirDrop.</p>'
            },
            {
                h2: 'Què pots fer amb l’MP3',
                html: `<ul>
<li>Desar-lo a <strong>Arxius</strong> i escoltar-lo sense connexió.</li>
<li>Enviar-lo a l’ordinador per <strong>AirDrop</strong>.</li>
<li>Fer-ne un <a href="/ca/guides/video-to-ringtone-iphone/">to de trucada</a> de 30 segons.</li>
<li>Afegir-lo a GarageBand, CapCut o un editor de pòdcasts.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'L’iPhone pot convertir un vídeo a MP3 sense app?', a: 'Directament, no. Dreceres només desa l’àudio com a M4A. Per a MP3 a l’iPhone necessites una app o una web.' },
            { q: 'La conversió a MP3 és gratuïta?', a: `Sí, la conversió bàsica a ${APP} és gratuïta. Funcions extra amb compres dins l’app.` },
            { q: 'Cal internet per convertir un vídeo a MP3?', a: 'No. La conversió es fa a l’iPhone i funciona sense connexió. Només cal descarregar abans els vídeos desats a iCloud.' }
        ],
        related: ['mp4-to-mp3-iphone', 'mov-to-mp3-iphone', 'video-to-m4a-iphone'],
        card: { title: 'Vídeo a MP3 a l’iPhone', text: 'Qualsevol vídeo a l’universal MP3.' }
    }
);

guides.push(
    {
        slug: 'mp4-to-mp3-iphone',
        keyword: 'mp4 a mp3 iphone',
        eyebrow: 'MP4 a MP3',
        title: 'MP4 a MP3 a l’iPhone: convertidor gratuït sense pujades',
        description: 'Converteix MP4 a MP3 a l’iPhone gratis: obre l’arxiu a Arxius o Fotos i toca Compartir → «Extract Audio». Sense connexió i amb retallada inclosa.',
        h1: 'Com convertir MP4 a MP3 a l’iPhone',
        answer: `Per convertir MP4 a MP3 a l’iPhone, obre l’arxiu a Arxius o Fotos, toca Compartir i tria «Extract Audio». A ${APP}, retalla si vols, toca «Extract Audio», tria MP3 i desa. Gratis, al dispositiu i sense internet.`,
        intro: '<p>Els arxius MP4 solen arribar com a descàrregues, adjunts de correu o per AirDrop, així que sovint són a l’app <strong>Arxius</strong> i no a Fotos. L’app funciona amb totes dues.</p>',
        steps: [
            { name: 'Troba l’arxiu MP4', text: 'Obre Arxius (Descàrregues, iCloud Drive o «Al meu iPhone») o Fotos i busca l’MP4.', image: 2 },
            { name: 'Envia’l a «Extract Audio»', text: 'Mantén premut l’arxiu i tria Compartir → «Extract Audio». L’MP4 s’obre a l’app.', image: 2 },
            STEP.trim,
            { name: 'Desa’l com a MP3', text: 'Toca «Extract Audio», tria MP3 i després Compartir → Desar a Arxius perquè l’MP3 quedi al costat de l’MP4 original.', image: 4 }
        ],
        sections: [
            {
                h2: 'Diferència entre MP4 i MP3',
                html: '<p>L’MP4 és un contenidor amb imatge i so; l’MP3 només conté so. En convertir MP4 a MP3, la pista d’àudio es manté i la imatge s’elimina: l’arxiu és molt més petit i es reprodueix a qualsevol reproductor.</p>'
            },
            {
                h2: 'MP4 de WhatsApp, Telegram i el correu',
                html: '<p>Primer desa l’adjunt: al xat, obre el vídeo → Compartir → «Desar el vídeo» (a Fotos) o «Desar a Arxius». Després segueix els passos d’amunt. Converteix només vídeos teus o sobre els quals tinguis drets.</p>'
            },
            {
                h2: 'Necessites M4A?',
                html: '<p>Per a tons de trucada i apps d’Apple és millor l’M4A. Vegeu <a href="/ca/guides/video-to-m4a-iphone/">com desar un vídeo com a M4A a l’iPhone</a>.</p>'
            }
        ],
        faq: [
            { q: 'Puc convertir MP4 a MP3 gratis a l’iPhone?', a: `Sí. ${APP} converteix MP4 a MP3 gratis directament al dispositiu. Les compres dins l’app desbloquegen funcions extra.` },
            { q: 'L’MP3 serà més petit que l’MP4?', a: 'Sí, normalment molt més petit: s’elimina la pista de vídeo i només queda el so.' },
            { q: 'Puc convertir diversos arxius MP4?', a: 'Sí. Converteix-los un rere l’altre – tots els MP3 es desen a la biblioteca de l’app.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'mov-to-mp3-iphone', 'extract-audio-online-vs-app'],
        card: { title: 'MP4 a MP3 a l’iPhone', text: 'MP4 descarregats d’Arxius i Fotos a MP3.' }
    },
    {
        slug: 'mov-to-mp3-iphone',
        keyword: 'mov a mp3 iphone',
        eyebrow: 'MOV a MP3',
        title: 'MOV a MP3 a l’iPhone – l’àudio dels vídeos de la càmera',
        description: 'Els vídeos gravats amb la càmera de l’iPhone són arxius MOV. Converteix MOV a MP3 al mateix mòbil: tria el vídeo, retalla i toca «Extract Audio». Gratis.',
        h1: 'Com convertir MOV a MP3 a l’iPhone',
        answer: `Tots els vídeos gravats amb la càmera de l’iPhone es desen en format MOV. Per obtenir un MP3, obre el vídeo a Fotos, toca Compartir → «Extract Audio», retalla si cal i, a ${APP}, toca «Extract Audio». L’MP3 es desa a l’iPhone – no cal ordinador.`,
        intro: '<p>El MOV és el format de vídeo d’Apple amb què grava la càmera de l’iPhone: concerts, discursos, un amic amb la guitarra, una veu que vols conservar. Com a MP3, aquest so el pots escoltar a qualsevol lloc.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Quan és útil passar de MOV a MP3',
                html: `<ul>
<li>Conservar el so d’un concert o una actuació que has gravat.</li>
<li>Convertir un brindis o un discurs en un record sonor.</li>
<li>Enviar la gravació d’un assaig al grup sense un vídeo enorme.</li>
<li>Escoltar <a href="/ca/guides/lecture-video-to-audio-iphone/">una classe gravada</a> mentre et desplaces.</li>
</ul>`
            },
            {
                h2: 'HEVC, 4K i mode Cinema',
                html: '<p>Els vídeos en HEVC i 4K es processen igual. Només es converteix el so, de manera que fins i tot els MOV molt grans donen arxius d’àudio petits.</p>'
            },
            {
                h2: 'Per què no necessites ordinador',
                html: '<p>Passar un MOV de diversos gigues a l’ordinador per treure’n el so triga més que convertir-lo al mòbil. L’app ho fa allà on ja és el vídeo.</p>'
            }
        ],
        faq: [
            { q: 'En quin format grava vídeo l’iPhone?', a: 'La càmera de l’iPhone grava arxius MOV, normalment amb vídeo HEVC o H.264 i àudio AAC.' },
            { q: 'Puc convertir MOV a MP3 sense perdre qualitat?', a: 'L’app manté la qualitat de la pista original: l’MP3 sona igual que el vídeo en reproduir-lo.' },
            { q: 'Puc desar un MOV com a M4A?', a: 'Sí, tria el format M4A. És ideal per a tons de trucada i apps d’Apple.' }
        ],
        related: ['mp4-to-mp3-iphone', 'convert-video-to-mp3-iphone', 'save-music-from-video-iphone'],
        card: { title: 'MOV a MP3', text: 'L’àudio dels vídeos gravats amb l’iPhone.' }
    },
    {
        slug: 'video-to-m4a-iphone',
        keyword: 'vídeo a m4a iphone',
        eyebrow: 'Vídeo a M4A',
        title: 'Vídeo a M4A a l’iPhone – MP4 i MOV a M4A gratis',
        description: 'Desa l’àudio d’un vídeo com a M4A a l’iPhone per a tons de trucada, GarageBand i apps d’Apple. Gratis, al dispositiu i amb retallada – en quatre tocs.',
        h1: 'Com desar l’àudio d’un vídeo com a M4A a l’iPhone',
        answer: `Per convertir un vídeo a M4A a l’iPhone, envia’l de Fotos o Arxius a «Extract Audio», retalla si vols, toca «Extract Audio» i tria M4A. ${APP} desa un arxiu M4A (AAC) apte per a GarageBand, iMovie, reproductors i tons de trucada.`,
        intro: '<p>L’M4A és el format d’àudio propi d’Apple. Amb una qualitat similar, ocupa menys que l’MP3 i és justament el format que l’iPhone espera per als tons de trucada i els projectes de GarageBand.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Extreu a M4A', text: 'Toca «Extract Audio» i tria el format M4A.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'M4A o MP3 – quan triar M4A',
                html: `<table class="guide-table"><thead><tr><th></th><th>M4A (AAC)</th><th>MP3</th></tr></thead><tbody>
<tr><td>Millor per a</td><td>iPhone, Mac, tons de trucada, GarageBand</td><td>Tota la resta – Windows, Android, cotxe</td></tr>
<tr><td>Mida de l’arxiu</td><td>Més petit amb la mateixa qualitat</td><td>Una mica més gran</td></tr>
<tr><td>Compatibilitat</td><td>Molt bona</td><td>Universal</td></tr>
</tbody></table>`
            },
            {
                h2: 'Posa l’M4A com a to de trucada',
                html: '<p>A iOS 26 pots definir un M4A de menys de 30 segons com a to de trucada directament des d’Arxius. Detalls: <a href="/ca/guides/video-to-ringtone-iphone/">com fer un to de trucada a partir d’un vídeo</a>.</p>'
            },
            {
                h2: 'Obre’l a GarageBand o iMovie',
                html: '<p>Desa l’M4A a Arxius i importa’l amb el navegador d’arxius de GarageBand o iMovie – com a música de fons, narració o efecte de so.</p>'
            }
        ],
        faq: [
            { q: 'L’M4A és millor que l’MP3?', a: 'Amb la mateixa taxa de bits, l’M4A (AAC) sol sonar igual o millor i ocupa menys. L’MP3 és compatible amb més dispositius.' },
            { q: 'Puc crear un M4A amb Dreceres?', a: 'Sí, l’acció «Codificar multimèdia» amb l’opció «Només àudio» crea un M4A. Però així no pots retallar l’àudio ni desar MP3 – a l’app, sí.' },
            { q: 'Desar com a M4A és gratuït?', a: `Sí, l’extracció bàsica a ${APP} és gratuïta, inclosa l’exportació a M4A.` }
        ],
        related: ['video-to-ringtone-iphone', 'convert-video-to-mp3-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Vídeo a M4A', text: 'El format d’Apple per a tons de trucada i GarageBand.' }
    }
);

guides.push(
    {
        slug: 'extract-audio-without-app-iphone',
        keyword: 'extreure àudio de vídeo iphone sense app',
        eyebrow: 'Dreceres o app',
        title: 'Com extreure l’àudio d’un vídeo a l’iPhone sense app',
        description: 'Pots treure l’àudio d’un vídeo a l’iPhone sense app – amb Dreceres i l’acció «Codificar multimèdia». Configuració completa, limitacions i l’opció més ràpida.',
        h1: 'Com extreure l’àudio d’un vídeo a l’iPhone sense app',
        answer: 'Sense apps de tercers, pots extreure l’àudio amb Dreceres: afegeix l’acció «Codificar multimèdia», activa «Només àudio», afegeix «Desar l’arxiu» i activa que es mostri al full de compartir. Després envia el vídeo a la drecera. El resultat és només M4A i sense retallada; per a MP3 i fragments curts, l’app és més ràpida.',
        intro: '<p>L’app gratuïta Dreceres d’Apple sap separar el so del vídeo. La configuració triga uns minuts. Aquí tens la recepta exacta – i les seves limitacions.</p>',
        steps: [
            { name: 'Crea una drecera nova', text: 'Obre Dreceres, toca + i posa-li el nom «Àudio del vídeo».', image: 2 },
            { name: 'Afegeix «Codificar multimèdia»', text: 'Toca «Afegir una acció», busca «Codificar multimèdia», afegeix-la, obre les opcions amb la fletxa i activa «Només àudio».', image: 2 },
            { name: 'Afegeix «Desar l’arxiu»', text: 'Afegeix l’acció «Desar l’arxiu» perquè el resultat vagi a Arxius.', image: 4 },
            { name: 'Mostra-la al menú Compartir', text: 'Obre els detalls de la drecera (icona i), activa «Mostrar al full de compartir» i permet el tipus «Multimèdia». Ara envia un vídeo des de Fotos i tria la drecera.', image: 4 }
        ],
        sections: [
            {
                h2: 'Limitacions del mètode amb Dreceres',
                html: `<ul>
<li><strong>Només M4A</strong> – no pots fer MP3.</li>
<li><strong>Sense retallada</strong> – sempre es desa la pista d’àudio sencera.</li>
<li><strong>Sense biblioteca</strong> – els arxius van a Arxius i els has de buscar i canviar de nom a mà.</li>
<li>Amb vídeos llargs, la drecera es pot aturar sense cap error clar.</li>
</ul>`
            },
            {
                h2: 'L’opció d’un sol toc',
                html: `<p>${APP} fa el mateix, però amb retallada, elecció entre MP3 i M4A i una biblioteca de tots els arxius extrets. L’app també és al menú Compartir, així que no és més lenta – i no has de muntar res.</p>`
            },
            {
                h2: 'Altres mètodes sense app',
                html: '<p>També pots separar el so a iMovie o GarageBand, però hi ha més passos i menys formats d’exportació. Les webs també funcionen, però has de pujar el vídeo a internet – vegeu <a href="/ca/guides/extract-audio-online-vs-app/">en línia o app</a>.</p>'
            }
        ],
        faq: [
            { q: 'L’iPhone té una manera integrada d’extreure l’àudio?', a: 'Fotos no té cap botó específic. L’opció integrada més propera és l’acció «Codificar multimèdia» amb «Només àudio» a l’app Dreceres.' },
            { q: 'En quin format desa l’àudio la drecera?', a: 'En M4A. No és possible desar en MP3 amb Dreceres.' },
            { q: 'Puc retallar l’àudio amb una drecera?', a: `No de manera senzilla. Per retallar, fes servir una app amb línia de temps, com ${APP}.` }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-online-vs-app', 'video-to-m4a-iphone'],
        card: { title: 'Sense app (Dreceres)', text: 'Una recepta gratuïta i les seves limitacions.' }
    },
    {
        slug: 'extract-audio-online-vs-app',
        keyword: 'extreure àudio de vídeo en línia',
        eyebrow: 'En línia o app',
        title: 'Extreure l’àudio d’un vídeo en línia o amb una app a l’iPhone?',
        description: 'Extreure l’àudio d’un vídeo en línia o amb una app? Comparem privacitat, velocitat, límits i retallada a l’iPhone – i què triar quan el vídeo és al mòbil.',
        h1: 'Extreure l’àudio d’un vídeo en línia o amb una app: què triar a l’iPhone',
        answer: `Els serveis en línia funcionen a qualsevol dispositiu, però cal pujar tot el vídeo, esperar el processament i descarregar el resultat – lent amb dades mòbils i arriscat per a gravacions personals. A l’iPhone, una app com ${APP} és més ràpida, funciona sense connexió, manté el vídeo al dispositiu i pot retallar l’àudio.`,
        intro: '<p>Si cerques «extreure àudio de vídeo en línia» trobaràs desenes de webs gratuïtes. En un portàtil amb bona connexió són pràctiques. A l’iPhone, la cosa canvia.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Comparativa',
                html: `<table class="guide-table"><thead><tr><th></th><th>Servei en línia</th><th>${APP}</th></tr></thead><tbody>
<tr><td>Privacitat</td><td>El vídeo es puja a un servidor aliè</td><td>Es queda a l’iPhone</td></tr>
<tr><td>Velocitat</td><td>Pujada + cua + descàrrega</td><td>Segons, al dispositiu</td></tr>
<tr><td>Sense internet</td><td>No</td><td>Sí</td></tr>
<tr><td>Límits de mida</td><td>Habituals en plans gratuïts</td><td>Només l’espai de l’iPhone</td></tr>
<tr><td>Retallada</td><td>De vegades</td><td>Línia de temps integrada</td></tr>
<tr><td>Anuncis i finestres emergents</td><td>Sovint</td><td>Sense anuncis web</td></tr>
<tr><td>Preu</td><td>Gratis amb límits</td><td>Funcions bàsiques gratis</td></tr>
</tbody></table>`
            },
            {
                h2: 'Quan té sentit un servei en línia',
                html: '<p>Si ets davant d’un ordinador amb Windows i el vídeo ja hi és, n’hi ha prou amb un convertidor en línia fiable. No pugis res personal: vídeos familiars, reunions de feina o material de clients.</p>'
            },
            {
                h2: 'Quan és millor l’app',
                html: '<p>Quan el vídeo és a l’iPhone, guanya l’app: no cal pujar-lo per la xarxa mòbil, ni esperar, ni descarregar el resultat, i retalles el fragment exacte que necessites.</p>'
            }
        ],
        faq: [
            { q: 'És segur extreure l’àudio d’un vídeo en línia?', a: 'Depèn de la web. El vídeo es puja al servidor d’un tercer, així que amb gravacions personals és millor evitar-ho. Les apps que treballen al dispositiu no pugen res.' },
            { q: 'Puc extreure l’àudio gratis a l’iPhone sense pujar res?', a: `Sí. ${APP} converteix vídeos gratis directament al dispositiu i el vídeo no va enlloc.` },
            { q: 'Per què la conversió en línia és tan lenta al mòbil?', a: 'Primer s’ha de pujar tot el vídeo. Els vídeos del mòbil són grans i la velocitat de pujada a la xarxa mòbil sol ser molt més baixa que la de baixada.' }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-without-app-iphone', 'mp4-to-mp3-iphone'],
        card: { title: 'En línia o app', text: 'Privacitat, velocitat i límits – comparativa.' }
    }
);

guides.push(
    {
        slug: 'save-music-from-video-iphone',
        keyword: 'extreure música de vídeo iphone',
        eyebrow: 'Música',
        title: 'Com extreure la música d’un vídeo a l’iPhone (MP3 o M4A)',
        description: 'Desa una cançó o la música de fons d’un vídeo a l’iPhone com a MP3 o M4A. Retalla just la cançó, escolta-la sense connexió i comparteix-la. Guia amb imatges.',
        h1: 'Com extreure la música d’un vídeo a l’iPhone',
        answer: `Per extreure la música d’un vídeo a l’iPhone, obre el vídeo a Fotos, toca Compartir → «Extract Audio», tria la cançó amb els marcadors i, a ${APP}, toca «Extract Audio». La música es desa com a MP3 o M4A – escolta-la sense connexió a Arxius o envia-la a qualsevol app.`,
        intro: '<p>La cançó d’un casament, la versió d’un amic, la música del teu muntatge – de vegades el so és el més valuós d’un vídeo. Així el desas com a arxiu de música a part.</p>',
        steps: [STEP.share, { name: 'Tria la cançó', text: 'Toca «Trim Video» i arrossega els marcadors grocs perquè quedi només la cançó. Escolta’n l’inici i el final.', image: 3 }, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Com aconseguir el millor so',
                html: `<ul>
<li>Talla les converses i els aplaudiments del principi i del final.</li>
<li>MP3 per al cotxe i reproductors antics, M4A per a dispositius d’Apple.</li>
<li>Canvia el nom de l’arxiu a Arxius (mantén premut → «Canviar el nom») per trobar-lo fàcilment.</li>
</ul>`
            },
            {
                h2: 'Sobre els drets d’autor',
                html: '<p>Desa música dels teus vídeos o d’aquells sobre els quals tens drets. Les cançons comercials estan protegides per drets d’autor: una còpia personal de la teva gravació és correcta; publicar música d’altres, no.</p>'
            },
            {
                h2: 'Fes-ne un to de trucada',
                html: '<p>Has trobat els teus 30 segons preferits? <a href="/ca/guides/video-to-ringtone-iphone/">Converteix-los en un to de trucada</a>.</p>'
            }
        ],
        faq: [
            { q: 'Com trec una cançó d’un vídeo a l’iPhone?', a: `Envia el vídeo a ${APP}, tria la cançó en retallar i toca «Extract Audio». La cançó es desa com a arxiu d’àudio.` },
            { q: 'Puc afegir la cançó extreta a Apple Music?', a: 'L’app Música de l’iPhone no importa arxius locals directament. Guarda l’arxiu a Arxius o sincronitza’l des d’un Mac o un ordinador.' },
            { q: 'Puc extreure música d’un vídeo de WhatsApp o Missatges?', a: 'Sí. Primer desa el vídeo a Fotos o Arxius i després extreu-ne l’àudio.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-ringtone-iphone', 'mov-to-mp3-iphone'],
        card: { title: 'Música d’un vídeo', text: 'Queda’t la cançó, sense la imatge.' }
    },
    {
        slug: 'trim-audio-from-video-iphone',
        keyword: 'retallar àudio de vídeo iphone',
        eyebrow: 'Retallada',
        title: 'Com retallar només una part de l’àudio d’un vídeo a l’iPhone',
        description: 'Només necessites 10 segons de so? Retalla el vídeo a l’iPhone i desa només aquesta part com a MP3 o M4A. Marcadors, previsualització i exportació – gratis.',
        h1: 'Com extreure només una part de l’àudio d’un vídeo a l’iPhone',
        answer: `Per retallar una part de l’àudio d’un vídeo a l’iPhone, obre’l a ${APP}, toca «Trim Video», arrossega els marcadors grocs d’inici i final al voltant de la part que vols, toca «Save» i després «Extract Audio». Només es desa la part triada, com a MP3 o M4A.`,
        intro: '<p>Sovint no necessites tota la pista d’àudio, sinó una cita, una tornada o un efecte de so. Si retalles primer, obtens un fragment petit i net.</p>',
        steps: [
            STEP.open,
            { name: 'Toca «Trim Video»', text: 'A la pantalla d’extracció, toca «Trim Video» per obrir la línia de temps.', image: 2 },
            { name: 'Arrossega els marcadors', text: 'Arrossega els marcadors grocs a l’inici i al final de la part que vols. El temps seleccionat apareix al costat. Escolta-ho i toca «Save».', image: 3 },
            { name: 'Extreu i desa', text: 'Toca «Extract Audio» – només s’exporta la part retallada. Envia-la o desa-la a Arxius.', image: 4 }
        ],
        sections: [
            {
                h2: 'Consells per retallar amb precisió',
                html: `<ul>
<li>Deixa mig segon abans i després de la veu perquè no talles paraules.</li>
<li>Per a un to de trucada, tria 30 segons com a màxim.</li>
<li>Necessites diverses parts del mateix vídeo? Repeteix la retallada per a cadascuna – tots els arxius es desen a la biblioteca.</li>
</ul>`
            },
            {
                h2: 'Què es retalla més sovint',
                html: '<p>Una frase d’un discurs, la tornada d’una cançó, un efecte de so per a un muntatge, les primeres paraules d’un nadó o el minut clau d’una reunió llarga.</p>'
            }
        ],
        faq: [
            { q: 'Puc retallar l’àudio d’un vídeo a l’iPhone?', a: `Sí. A ${APP}, retalla el vídeo a la part que vols i extreu-ne l’àudio – només es desa aquesta part.` },
            { q: 'La retallada canvia el vídeo original?', a: 'No. L’original de Fotos no canvia; només es retalla l’arxiu d’àudio exportat.' },
            { q: 'Puc retallar diverses parts d’un mateix vídeo?', a: 'Sí. Retalla i extreu l’àudio de nou per a cada part que necessitis.' }
        ],
        related: ['video-to-ringtone-iphone', 'save-music-from-video-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Retalla una part de l’àudio', text: 'Retallada precisa al segon.' }
    }
);

guides.push(
    {
        slug: 'screen-recording-to-audio-iphone',
        keyword: 'àudio de gravació de pantalla iphone',
        eyebrow: 'Gravació de pantalla',
        title: 'Com desar l’àudio d’una gravació de pantalla a l’iPhone',
        description: 'Converteix una gravació de pantalla de l’iPhone en un arxiu MP3 o M4A. Per què no té so, com retallar la part justa i desar l’àudio. Passos senzills.',
        h1: 'Com desar l’àudio d’una gravació de pantalla a l’iPhone',
        answer: `Les gravacions de pantalla de l’iPhone es desen a Fotos com a vídeos. Per obtenir-ne l’àudio, obre la gravació, toca Compartir → «Extract Audio», retalla si cal i, a ${APP}, toca «Extract Audio». Si l’arxiu no té so, és que no es va gravar – activa el micròfon abans de gravar.`,
        intro: '<p>Gravar la pantalla és una manera habitual de desar un missatge de veu, una trucada amb altaveu o un fragment d’una app. Així et quedes només amb el so.</p>',
        steps: [
            { name: 'Troba la gravació a Fotos', text: 'Les gravacions de pantalla són a Fotos → Tipus de multimèdia → Gravacions de pantalla.', image: 2 },
            { name: 'Envia-la a «Extract Audio»', text: 'Obre la gravació, toca Compartir i tria «Extract Audio».', image: 2 },
            STEP.trim,
            { name: 'Extreu i desa', text: 'Toca «Extract Audio» i desa l’MP3 o l’M4A a Arxius.', image: 4 }
        ],
        sections: [
            {
                h2: 'Per què la gravació de pantalla no té so?',
                html: `<ul>
<li><strong>Micròfon desactivat:</strong> al Centre de control, mantén premut el botó Gravació de pantalla i activa «Micròfon» perquè es gravi la teva veu.</li>
<li><strong>Mode silenci:</strong> algunes apps silencien els seus sons en mode silenci.</li>
<li><strong>Contingut protegit:</strong> molts serveis de streaming bloquegen l’àudio en gravar la pantalla – és una limitació que no es pot evitar.</li>
</ul>`
            },
            {
                h2: 'Respecta la privacitat',
                html: '<p>Grava i desa trucades i converses només amb el consentiment de tots els participants i d’acord amb les lleis del teu país.</p>'
            }
        ],
        faq: [
            { q: 'Puc convertir una gravació de pantalla a MP3?', a: 'Sí. Una gravació de pantalla és un vídeo normal, així que en pots desar l’àudio com a MP3 o M4A.' },
            { q: 'On són les gravacions de pantalla a l’iPhone?', a: 'A Fotos, a Tipus de multimèdia → Gravacions de pantalla.' },
            { q: 'Per què la gravació de pantalla no té so?', a: 'El micròfon estava desactivat o l’app bloqueja la gravació d’àudio. Abans d’extreure, comprova que la gravació es reprodueix amb so.' }
        ],
        related: ['extract-audio-from-video-iphone', 'trim-audio-from-video-iphone', 'lecture-video-to-audio-iphone'],
        card: { title: 'Àudio d’una gravació de pantalla', text: 'Desa el so i descobreix per què falta.' }
    },
    {
        slug: 'lecture-video-to-audio-iphone',
        keyword: 'classe en vídeo a àudio',
        eyebrow: 'Estudi',
        title: 'Com convertir una classe en vídeo a àudio (MP3) a l’iPhone',
        description: 'Converteix classes gravades, webinars i conferències a MP3 a l’iPhone i estudia en moviment. Arxius petits, escolta sense connexió i fàcils de compartir.',
        h1: 'Com convertir una classe en vídeo a àudio a l’iPhone',
        answer: `Per convertir una classe en vídeo a àudio, obre la gravació a Fotos o Arxius, toca Compartir → «Extract Audio» i després «Extract Audio» a ${APP}. Desa l’MP3 a Arxius i escolta’l sense connexió – al bus, al gimnàs o amb la pantalla apagada, amb un arxiu molt més petit.`,
        intro: '<p>En una classe importa el que es diu, no el que es veu. Si converteixes el vídeo de la classe en àudio, tens un pòdcast que pots tornar a escoltar on vulguis.</p>',
        steps: [
            STEP.share,
            { name: 'Treu la introducció i les pauses (opcional)', text: 'Toca «Trim Video» per eliminar l’espera abans de començar i la part de preguntes que no necessites.', image: 3 },
            STEP.extract,
            { name: 'Desa-la a una carpeta «Classes»', text: 'Toca Compartir → Desar a Arxius i crea una carpeta per a cada assignatura per trobar les gravacions de seguida.', image: 4 }
        ],
        sections: [
            {
                h2: 'Per què estudiar amb àudio és pràctic',
                html: `<ul>
<li><strong>Arxius petits:</strong> una hora d’àudio ocupa molt menys que una hora de vídeo.</li>
<li><strong>Pantalla apagada:</strong> escolta amb el mòbil bloquejat i estalvia bateria.</li>
<li><strong>A qualsevol lloc:</strong> al tren, passejant, al gimnàs – no cal wifi.</li>
</ul>`
            },
            {
                h2: 'Converteix-ho en apunts',
                html: '<p>Necessites el text? Importa l’àudio a l’app de transcripció que ja facis servir i cerca dins del text.</p>'
            },
            {
                h2: 'Revisa les normes',
                html: '<p>Moltes universitats permeten gravar classes per a ús personal, però no compartir-les. Consulta les normes de l’assignatura abans de gravar o compartir una classe.</p>'
            }
        ],
        faq: [
            { q: 'Puc escoltar un vídeo a l’iPhone amb la pantalla apagada?', a: 'La majoria de reproductors de vídeo s’aturen quan bloqueges el mòbil. Si converteixes el vídeo a MP3, el pots escoltar amb la pantalla apagada a Arxius o a qualsevol reproductor d’àudio.' },
            { q: 'Funciona amb una classe d’una hora?', a: 'Sí. Les gravacions llargues es processen igual, només triguen una mica més.' },
            { q: 'Puc convertir gravacions de Zoom i webinars?', a: 'Sí, un cop la gravació MP4 sigui a Fotos o Arxius de l’iPhone.' }
        ],
        related: ['screen-recording-to-audio-iphone', 'mp4-to-mp3-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Classe en vídeo a àudio', text: 'Estudia en moviment amb MP3 lleugers.' }
    },
    {
        slug: 'video-to-ringtone-iphone',
        keyword: 'to de trucada d’un vídeo iphone',
        eyebrow: 'Tons de trucada',
        title: 'Com fer un to de trucada a partir d’un vídeo a l’iPhone (iOS 26)',
        description: 'Converteix qualsevol vídeo en un to de trucada per a iPhone: retalla l’àudio a 30 segons, desa’l a Arxius i toca Compartir → «Utilitzar com a to de trucada».',
        h1: 'Com fer un to de trucada a partir d’un vídeo a l’iPhone',
        answer: `Per fer un to de trucada a partir d’un vídeo, obre’l a ${APP}, retalla’l a 30 segons com a màxim, extreu l’àudio en M4A o MP3 i desa’l a Arxius. A iOS 26, mantén premut l’arxiu a Arxius i toca Compartir → «Utilitzar com a to de trucada». En versions anteriors d’iOS, importa l’àudio a GarageBand i exporta’l com a to de trucada.`,
        intro: '<p>Una rialla, una cançó d’una festa, el lladruc del gos – qualsevol so dels teus vídeos pot ser un to de trucada. A iOS 26 és senzill si tens l’arxiu d’àudio.</p>',
        steps: [
            STEP.share,
            { name: 'Retalla a 30 segons', text: 'Toca «Trim Video» i tria 30 segons com a màxim – és el límit per a un to de trucada.', image: 3 },
            { name: 'Extreu i desa a Arxius', text: 'Toca «Extract Audio» (M4A o MP3) i després Compartir → Desar a Arxius.', image: 4 },
            { name: 'Utilitzar com a to de trucada', text: 'A Arxius, mantén premut l’arxiu d’àudio i toca Compartir → «Utilitzar com a to de trucada» (iOS 26). Comprova-ho a Configuració → Sons i vibracions → To de trucada.', image: 4 }
        ],
        sections: [
            {
                h2: 'A iOS 18: el mètode amb GarageBand',
                html: `<ol>
<li>Extreu i retalla l’àudio com s’ha descrit a dalt i desa’l a Arxius.</li>
<li>Obre GarageBand, crea un projecte «Gravadora d’àudio» i passa a la vista de pistes.</li>
<li>Obre el navegador de loops → Arxius → «Explorar ítems de l’app Arxius» i arrossega l’àudio a la pista.</li>
<li>Torna a «Les meves cançons», mantén premut el projecte → Compartir → To de trucada → Exportar.</li>
</ol>`
            },
            {
                h2: 'Per què no apareix «Utilitzar com a to de trucada»',
                html: `<ul>
<li>L’arxiu dura més de 30 segons – torna’l a retallar.</li>
<li>L’arxiu no és MP3 ni M4A.</li>
<li>L’iPhone encara no té iOS 26 – fes servir GarageBand.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Quant pot durar un to de trucada a l’iPhone?', a: 'Els tons de trucada propis creats a partir d’arxius d’àudio poden durar com a màxim 30 segons.' },
            { q: 'Quin format necessita un to de trucada per a iPhone?', a: 'A iOS 26, amb «Utilitzar com a to de trucada» pots definir arxius MP3 o M4A de menys de 30 segons.' },
            { q: 'Puc posar un vídeo directament com a to de trucada?', a: 'No. Primer extreu l’àudio del vídeo i després defineix l’arxiu d’àudio com a to de trucada.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-m4a-iphone', 'save-music-from-video-iphone'],
        card: { title: 'To de trucada d’un vídeo', text: '«Utilitzar com a to de trucada» a iOS 26 – en quatre passos.' }
    }
);
