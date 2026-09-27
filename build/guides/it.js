/**
 * Guide in italiano → /it/guides/<slug>/
 * Slug identici a build/guides/en.js (collegati con hreflang). Keyword: sezione «Italiano (IT)» in /keywords.md.
 * Solo apostrofi tipografici (’) nelle stringhe.
 * Screenshot: 1 copertina · 2 estrazione · 3 taglio · 4 menu Condividi · 5 libreria
 */

const APP = 'Estrarre Audio da Video⁺';

const STEP = {
    open: {
        name: 'Apri l’app e scegli un video',
        text: `Avvia ${APP} e scegli un video da Foto o da File. Più veloce: in Foto tocca Condividi sul video e scegli l’app.`,
        image: 2
    },
    share: {
        name: 'Invia il video all’app',
        text: 'Apri il video in Foto o File, tocca Condividi e scegli l’app. Si apre con il video già caricato.',
        image: 2
    },
    trim: {
        name: 'Taglia la parte che ti serve (facoltativo)',
        text: 'Tocca «Taglia video», trascina i marcatori gialli all’inizio e alla fine della parte che vuoi, ascoltala e tocca «Salva».',
        image: 3
    },
    extract: {
        name: 'Tocca «Estrai audio»',
        text: 'Tocca «Estrai audio». La traccia audio viene convertita sul tuo iPhone in pochi secondi: non viene caricato nulla online.',
        image: 2
    },
    save: {
        name: 'Salva o condividi il file audio',
        text: 'Il nuovo file audio compare nella libreria. Tocca Condividi per salvarlo su File, inviarlo con AirDrop o a qualsiasi app.',
        image: 4
    }
};

const guides = [];
module.exports = guides;

guides.push(
    {
        slug: 'extract-audio-from-video-iphone',
        keyword: 'come estrarre audio da un video su iphone',
        eyebrow: 'Guida base',
        title: 'Come estrarre l’audio da un video su iPhone (guida 2026)',
        description: 'Estrai l’audio da qualsiasi video su iPhone in 4 tocchi: scegli il video, taglia, tocca «Estrai audio» e salva in MP3 o M4A. Gratis, senza caricare nulla.',
        h1: 'Come estrarre l’audio da un video su iPhone',
        answer: `Per estrarre l’audio da un video su iPhone, apri ${APP}, scegli il video da Foto, taglialo se vuoi e tocca «Estrai audio». L’app salva la traccia audio in MP3 o M4A sul tuo iPhone in pochi secondi. È gratis per iniziare e funziona offline: non viene caricato nulla.`,
        intro: '<p>L’app Foto non ha un pulsante «salva solo l’audio». Puoi creare un comando rapido (vedi <a href="/it/guides/extract-audio-without-app-iphone/">il metodo senza app</a>) o caricare il video su un sito, ma entrambe le strade sono lente quando ti serve solo l’audio. Ecco la via più rapida: un’app gratuita che funziona direttamente da Condividi.</p>',
        steps: [STEP.open, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Cosa ti serve',
                html: `<ul>
<li>Un iPhone con iOS 18.6 o successivo.</li>
<li>${APP}, gratis su App Store (circa 23 MB).</li>
<li>Un video con audio: riprese della fotocamera (MOV), download (MP4), registrazioni schermo o video ricevuti in Messaggi.</li>
</ul>`
            },
            {
                h2: 'Il modo più veloce: da Condividi',
                html: '<p>Non devi nemmeno aprire l’app. In <strong>Foto</strong> o <strong>File</strong> apri il video, tocca <strong>Condividi</strong>, scorri la fila di app e scegli l’app. Se non compare, tocca «Altro» e aggiungila ai preferiti una volta: da lì sarà sempre a portata di mano.</p>'
            },
            {
                h2: 'MP3 o M4A: quale scegliere?',
                html: '<p><strong>MP3</strong> si riproduce ovunque: Windows, Android, autoradio, siti web e programmi di montaggio. <strong>M4A</strong> (AAC) è il formato di Apple: più leggero a parità di qualità, ideale per suonerie, GarageBand e iMovie. Nel dubbio, scegli MP3. Approfondisci: <a href="/it/guides/convert-video-to-mp3-iphone/">video in MP3</a> e <a href="/it/guides/video-to-m4a-iphone/">video in M4A</a>.</p>'
            },
            {
                h2: 'Dove viene salvato l’audio?',
                html: '<p>Ogni file estratto compare nella libreria dell’app con durata, dimensioni e data. Da lì tocca <strong>Condividi → Salva su File</strong> per metterlo in iCloud Drive o «Sul mio iPhone», oppure invialo a WhatsApp, Mail, Note, GarageBand o al Mac con AirDrop.</p>'
            },
            {
                h2: 'Se qualcosa non va',
                html: `<ul>
<li><strong>Il file è muto.</strong> Il video non ha una traccia audio: succede con le registrazioni schermo senza microfono. Riproduci prima il video in Foto.</li>
<li><strong>Il video è su iCloud.</strong> Foto scarica prima l’originale: attendi che il cerchio di avanzamento finisca.</li>
<li><strong>Mi servono solo 20 secondi.</strong> Taglia prima di estrarre: vedi <a href="/it/guides/trim-audio-from-video-iphone/">estrarre solo una parte dell’audio</a>.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'È gratis estrarre l’audio da un video su iPhone?', a: `Sì. ${APP} si scarica gratis e l’estrazione di base è gratuita. Gli acquisti in-app facoltativi sbloccano funzioni extra.` },
            { q: 'Si perde qualità estraendo l’audio?', a: 'L’app converte la traccia audio del video in un MP3 o M4A di alta qualità. Non suonerà meglio dell’originale, ma identico a quando riproduci il video.' },
            { q: 'Posso estrarre l’audio da un video lungo?', a: 'Sì. Lezioni, concerti e riunioni funzionano allo stesso modo, solo un po’ più lentamente. Se ti serve una parte, taglia prima.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'trim-audio-from-video-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Estrarre l’audio da un video su iPhone', text: 'Il metodo in 4 tocchi, da Foto o da Condividi.' }
    },
    {
        slug: 'convert-video-to-mp3-iphone',
        keyword: 'convertire video in mp3 iphone',
        eyebrow: 'Video in MP3',
        title: 'Come convertire un video in MP3 su iPhone — veloce e gratis',
        description: 'Converti qualsiasi video dell’iPhone in MP3 in pochi secondi con un convertitore gratuito. Da Foto, senza caricare file e con taglio prima dell’esportazione.',
        h1: 'Come convertire un video in MP3 su iPhone',
        answer: `Apri il video in Foto, tocca Condividi e scegli ${APP}. Taglia se serve, tocca «Estrai audio» ed esporta in MP3. L’MP3 resta sul tuo iPhone: puoi salvarlo su File, inviarlo con AirDrop o a qualsiasi app. Senza computer, senza caricamenti e senza account.`,
        intro: '<p>L’MP3 è il formato audio più compatibile: si riproduce in qualsiasi auto, computer e programma. Ecco come convertire qualsiasi video dell’iPhone in MP3 senza lasciare il telefono.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Estrai in MP3', text: 'Tocca «Estrai audio» e scegli MP3. La conversione avviene sul tuo iPhone.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'Perché un’app e non un convertitore online?',
                html: '<p>I convertitori online ti obbligano a caricare tutto il video, aspettare e poi riscaricare l’MP3: lento con i dati mobili e rischioso per i video privati. L’app funziona offline, lascia il file sul dispositivo e taglia prima di convertire. Confronto: <a href="/it/guides/extract-audio-online-vs-app/">online o app</a>.</p>'
            },
            {
                h2: 'Quali video posso convertire in MP3?',
                html: '<p>Tutto ciò che l’iPhone riproduce: riprese della fotocamera (<a href="/it/guides/mov-to-mp3-iphone/">MOV</a>), clip scaricati (<a href="/it/guides/mp4-to-mp3-iphone/">MP4</a>), <a href="/it/guides/screen-recording-to-audio-iphone/">registrazioni schermo</a> e video ricevuti da Messaggi, WhatsApp o AirDrop.</p>'
            },
            {
                h2: 'Cosa fare con l’MP3',
                html: `<ul>
<li>Salvarlo su <strong>File</strong> e ascoltarlo offline.</li>
<li>Inviarlo al Mac con <strong>AirDrop</strong>.</li>
<li>Trasformare 30 secondi in una <a href="/it/guides/video-to-ringtone-iphone/">suoneria</a>.</li>
<li>Importarlo in GarageBand, CapCut o in un editor di podcast.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'L’iPhone può convertire un video in MP3 senza app?', a: 'Non direttamente. Comandi salva l’audio solo in M4A, non in MP3. Per un MP3 su iPhone serve un’app di conversione o un sito web.' },
            { q: 'La conversione in MP3 è gratuita?', a: `Sì, la conversione di base in ${APP} è gratuita. Gli acquisti in-app aggiungono funzioni extra.` },
            { q: 'Serve il Wi-Fi per convertire un video in MP3?', a: 'No. La conversione avviene sull’iPhone e funziona offline. Solo i video archiviati su iCloud vanno scaricati prima.' }
        ],
        related: ['mp4-to-mp3-iphone', 'mov-to-mp3-iphone', 'video-to-m4a-iphone'],
        card: { title: 'Convertire video in MP3', text: 'Qualsiasi video dell’iPhone in un MP3 universale.' }
    },
    {
        slug: 'mp4-to-mp3-iphone',
        keyword: 'estrarre audio da mp4 iphone',
        eyebrow: 'MP4 in MP3',
        title: 'Estrarre l’audio da un MP4 su iPhone: MP4 in MP3 gratis',
        description: 'Estrai l’audio da un MP4 su iPhone gratis: apri il file in File o Foto, tocca Condividi e scegli l’app. Offline, con taglio, in soli 4 passaggi.',
        h1: 'Come estrarre l’audio da un MP4 su iPhone (MP4 in MP3)',
        answer: `Per estrarre l’audio da un MP4 su iPhone, apri il file in File o Foto, tocca Condividi e scegli ${APP}. Taglia se vuoi, tocca «Estrai audio», scegli MP3 e salva. Gratis, sul dispositivo e senza connessione.`,
        intro: '<p>Gli MP4 arrivano spesso come download, allegati email o via AirDrop, quindi si trovano più spesso nell’app <strong>File</strong> che in Foto. L’app gestisce entrambi.</p>',
        steps: [
            { name: 'Trova il file MP4', text: 'Apri File (Download, iCloud Drive o «Sul mio iPhone») o Foto e individua l’MP4.', image: 2 },
            { name: 'Invialo all’app', text: 'Tieni premuto il file, tocca Condividi e scegli l’app. L’MP4 si apre nell’app.', image: 2 },
            STEP.trim,
            { name: 'Salva come MP3', text: 'Tocca «Estrai audio», scegli MP3 e poi Condividi → Salva su File per mettere l’MP3 accanto all’MP4 originale.', image: 4 }
        ],
        sections: [
            {
                h2: 'MP4 e MP3 in una frase',
                html: '<p>L’MP4 è un contenitore con immagine <em>e</em> audio; l’MP3 contiene solo l’audio. Convertendo si conserva la traccia audio e si elimina l’immagine: il file diventa molto più leggero e si riproduce in qualsiasi player.</p>'
            },
            {
                h2: 'MP4 da WhatsApp, Telegram ed email',
                html: '<p>Salva prima l’allegato: nella chat apri il video → Condividi → «Salva video» (va in Foto) o «Salva su File». Poi segui i passaggi sopra. Converti solo video tuoi o di cui hai i diritti.</p>'
            },
            {
                h2: 'Meglio M4A?',
                html: '<p>Per suonerie e app Apple l’M4A è la scelta migliore. Vedi <a href="/it/guides/video-to-m4a-iphone/">come convertire un video in M4A su iPhone</a>.</p>'
            }
        ],
        faq: [
            { q: 'Posso convertire un MP4 in MP3 gratis su iPhone?', a: `Sì. ${APP} converte gratis un MP4 in MP3 direttamente sul dispositivo. Gli acquisti in-app sbloccano funzioni extra.` },
            { q: 'L’MP3 sarà più leggero dell’MP4?', a: 'Sì, di solito molto più leggero, perché la traccia video viene eliminata e resta solo l’audio.' },
            { q: 'Posso convertire più MP4?', a: 'Sì. Convertili uno dopo l’altro: ogni MP3 resta nella libreria dell’app.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'mov-to-mp3-iphone', 'extract-audio-online-vs-app'],
        card: { title: 'Estrarre audio da MP4', text: 'Gli MP4 di File o Foto in MP3.' }
    },
    {
        slug: 'mov-to-mp3-iphone',
        keyword: 'mov in mp3 iphone',
        eyebrow: 'MOV in MP3',
        title: 'MOV in MP3 su iPhone: l’audio dei video della fotocamera',
        description: 'I video registrati con l’iPhone sono MOV. Convertili in MP3 direttamente sul telefono: scegli il clip, taglia e tocca «Estrai audio». Gratis e offline.',
        h1: 'Come convertire un video MOV in MP3 su iPhone',
        answer: `Tutti i video della fotocamera dell’iPhone sono file MOV. Per convertire un MOV in MP3, apri il clip in Foto, tocca Condividi, scegli ${APP}, taglia se serve e tocca «Estrai audio». L’MP3 viene salvato sul tuo iPhone, senza bisogno del computer.`,
        intro: '<p>MOV è il formato video di Apple ed è quello che usa la tua fotocamera: concerti, discorsi, un amico con la chitarra, una voce che vuoi conservare. In MP3 puoi ascoltarlo ovunque.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'A cosa serve convertire MOV in MP3',
                html: `<ul>
<li>Conservare l’audio di un concerto o di uno spettacolo che hai ripreso.</li>
<li>Tenere un discorso o un brindisi come ricordo audio.</li>
<li>Mandare una prova alla band senza un video enorme.</li>
<li>Ascoltare una <a href="/it/guides/lecture-video-to-audio-iphone/">lezione registrata</a> sui mezzi.</li>
</ul>`
            },
            {
                h2: 'HEVC, 4K e modalità Cinema',
                html: '<p>I video HEVC e 4K si convertono allo stesso modo. Viene elaborato solo l’audio, quindi anche MOV molto grandi producono file audio piccoli.</p>'
            },
            {
                h2: 'Perché non dal computer?',
                html: '<p>Trasferire un MOV di diversi gigabyte sul computer solo per togliere l’audio richiede più tempo che convertirlo sull’iPhone. L’app lo fa dove il video si trova già.</p>'
            }
        ],
        faq: [
            { q: 'In che formato registra i video l’iPhone?', a: 'La fotocamera dell’iPhone registra file MOV, di solito con video HEVC o H.264 e audio AAC.' },
            { q: 'Si perde qualità passando da MOV a MP3?', a: 'L’app mantiene la qualità della registrazione originale: l’MP3 suona come il video in riproduzione.' },
            { q: 'Posso convertire un MOV in M4A?', a: 'Sì, scegli il formato M4A. È ottimo per suonerie e app Apple.' }
        ],
        related: ['mp4-to-mp3-iphone', 'convert-video-to-mp3-iphone', 'save-music-from-video-iphone'],
        card: { title: 'MOV in MP3', text: 'I video della fotocamera trasformati in audio.' }
    }
);

guides.push(
    {
        slug: 'video-to-m4a-iphone',
        keyword: 'convertire video in m4a iphone',
        eyebrow: 'Video in M4A',
        title: 'Convertire un video in M4A su iPhone — MP4 e MOV in M4A',
        description: 'Salva l’audio dei tuoi video in M4A per suonerie, GarageBand e app Apple. Gratis, sul dispositivo e con taglio. Da MP4 o MOV a M4A in 4 tocchi.',
        h1: 'Come convertire un video in M4A su iPhone',
        answer: `Per convertire un video in M4A su iPhone, invialo da Foto o File con Condividi a ${APP}, taglia se vuoi, tocca «Estrai audio» e scegli M4A. Otterrai un file M4A (AAC) compatibile con GarageBand, iMovie, lettori audio e suonerie.`,
        intro: '<p>L’M4A è il formato audio di Apple. A parità di qualità è più leggero dell’MP3 ed è proprio il formato che l’iPhone si aspetta per suonerie e progetti GarageBand.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Estrai in M4A', text: 'Tocca «Estrai audio» e scegli M4A.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'M4A o MP3: quando scegliere M4A',
                html: `<table class="guide-table"><thead><tr><th></th><th>M4A (AAC)</th><th>MP3</th></tr></thead><tbody>
<tr><td>Ideale per</td><td>iPhone, Mac, suonerie, GarageBand</td><td>Tutto il resto: Windows, Android, auto</td></tr>
<tr><td>Dimensioni</td><td>Più leggero a parità di qualità</td><td>Un po’ più pesante</td></tr>
<tr><td>Compatibilità</td><td>Ottima</td><td>Universale</td></tr>
</tbody></table>`
            },
            {
                h2: 'Usa l’M4A come suoneria',
                html: '<p>Con iOS 26 un M4A di meno di 30 secondi può diventare suoneria direttamente da File. Guida completa: <a href="/it/guides/video-to-ringtone-iphone/">creare una suoneria da un video</a>.</p>'
            },
            {
                h2: 'Aprilo in GarageBand o iMovie',
                html: '<p>Salva l’M4A su File e importalo dal browser file di GarageBand o iMovie come base musicale, voce fuori campo o effetto sonoro.</p>'
            }
        ],
        faq: [
            { q: 'L’M4A è meglio dell’MP3?', a: 'A parità di bitrate l’M4A (AAC) suona in genere uguale o meglio e occupa meno spazio. L’MP3 è compatibile con più dispositivi.' },
            { q: 'Posso ottenere un M4A con Comandi?', a: 'Sì, l’azione «Codifica contenuto multimediale» con «Solo audio» produce un M4A. Ma non taglia e non esporta in MP3: l’app sì.' },
            { q: 'La conversione in M4A è gratuita?', a: `Sì, l’estrazione di base di ${APP} è gratuita, esportazione M4A inclusa.` }
        ],
        related: ['video-to-ringtone-iphone', 'convert-video-to-mp3-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Video in M4A', text: 'Il formato Apple per suonerie e GarageBand.' }
    },
    {
        slug: 'extract-audio-without-app-iphone',
        keyword: 'estrarre audio da video iphone senza app',
        eyebrow: 'Comandi o app',
        title: 'Estrarre l’audio da un video su iPhone senza app (Comandi)',
        description: 'Puoi estrarre l’audio su iPhone senza installare nulla, con Comandi e «Codifica contenuto multimediale». Configurazione, limiti (solo M4A) e alternativa rapida.',
        h1: 'Come estrarre l’audio da un video su iPhone senza app',
        answer: 'Senza app aggiuntive si usa un comando rapido: aggiungi l’azione «Codifica contenuto multimediale», attiva «Solo audio», aggiungi «Salva file» e attiva «Mostra nel foglio di condivisione». Poi condividi il video con il comando. Esporta solo M4A e non taglia: per MP3 o brevi estratti un’app è più veloce.',
        intro: '<p>L’app gratuita Comandi di Apple sa separare l’audio da un video. La configurazione richiede circa due minuti. Ecco la ricetta esatta, con i suoi limiti.</p>',
        steps: [
            { name: 'Crea un nuovo comando', text: 'Apri Comandi, tocca + e chiamalo «Audio dal video».', image: 2 },
            { name: 'Aggiungi «Codifica contenuto multimediale»', text: 'Tocca «Aggiungi azione», cerca «Codifica contenuto multimediale», aggiungila, espandi le opzioni e attiva «Solo audio».', image: 2 },
            { name: 'Aggiungi «Salva file»', text: 'Aggiungi l’azione «Salva file» così il risultato finisce in File.', image: 4 },
            { name: 'Mostralo in Condividi', text: 'Apri le impostazioni del comando (icona i), attiva «Mostra nel foglio di condivisione» e consenti «Contenuto multimediale». Ora condividi un video da Foto e scegli il comando.', image: 4 }
        ],
        sections: [
            {
                h2: 'I limiti del metodo con Comandi',
                html: `<ul>
<li><strong>Solo M4A</strong>: niente MP3.</li>
<li><strong>Nessun taglio</strong>: viene sempre salvata tutta la traccia.</li>
<li><strong>Nessuna libreria</strong>: i file finiscono in File e vanno cercati e rinominati a mano.</li>
<li>Con video lunghi il comando può fermarsi senza un errore chiaro.</li>
</ul>`
            },
            {
                h2: 'L’alternativa in un tocco',
                html: `<p>${APP} fa la stessa cosa con taglio, scelta tra MP3 e M4A e una libreria con tutto ciò che estrai. Anche l’app è nel menu Condividi, quindi è altrettanto veloce — e non c’è nulla da configurare.</p>`
            },
            {
                h2: 'Altre soluzioni senza app',
                html: '<p>Anche iMovie e GarageBand possono separare l’audio, ma con più passaggi e formati di esportazione limitati. I siti web funzionano, ma devi caricare il video: vedi <a href="/it/guides/extract-audio-online-vs-app/">online o app</a>.</p>'
            }
        ],
        faq: [
            { q: 'L’iPhone ha un estrattore audio integrato?', a: 'Non come pulsante in Foto. Il più vicino è l’azione «Codifica contenuto multimediale» con «Solo audio» nell’app Comandi.' },
            { q: 'In che formato salva il comando?', a: 'In M4A. Con Comandi non si può salvare in MP3.' },
            { q: 'Il comando può tagliare l’audio?', a: `Non in modo comodo. Per tagliare usa un’app con timeline come ${APP}.` }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-online-vs-app', 'video-to-m4a-iphone'],
        card: { title: 'Senza app (Comandi)', text: 'La ricetta gratuita di Comandi e i suoi limiti.' }
    },
    {
        slug: 'extract-audio-online-vs-app',
        keyword: 'estrarre audio da video online gratis',
        eyebrow: 'Online o app',
        title: 'Estrarre audio da video online gratis o con un’app iPhone',
        description: 'Estrarre l’audio da un video online o con un’app? Confronto su privacy, velocità, limiti e taglio su iPhone — e perché sul telefono vince l’app.',
        h1: 'Estrarre audio da video online (gratis) o con un’app per iPhone',
        answer: `I siti online funzionano su qualsiasi dispositivo, ma richiedono di caricare tutto il video, aspettare e scaricare il risultato: lento con i dati mobili e poco riservato. Su iPhone, un’app come ${APP} è più veloce, funziona offline, lascia i video sul dispositivo e taglia prima di esportare.`,
        intro: '<p>Cercando «estrarre audio da video online gratis» trovi decine di siti. Su un computer con una buona connessione sono comodi. Su iPhone il conto è diverso.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Confronto',
                html: `<table class="guide-table"><thead><tr><th></th><th>Sito online</th><th>${APP}</th></tr></thead><tbody>
<tr><td>Privacy</td><td>Video caricato su un server esterno</td><td>Resta sull’iPhone</td></tr>
<tr><td>Velocità</td><td>Caricamento + coda + download</td><td>Pochi secondi, sul dispositivo</td></tr>
<tr><td>Offline</td><td>No</td><td>Sì</td></tr>
<tr><td>Limiti di dimensione</td><td>Frequenti nei piani gratuiti</td><td>Solo lo spazio del telefono</td></tr>
<tr><td>Taglio</td><td>A volte</td><td>Timeline integrata</td></tr>
<tr><td>Pubblicità e pop-up</td><td>Frequenti</td><td>Nessun pop-up web</td></tr>
<tr><td>Prezzo</td><td>Gratis con limiti</td><td>Funzioni base gratis</td></tr>
</tbody></table>`
            },
            {
                h2: 'Quando un sito online ha senso',
                html: '<p>Se sei su un PC Windows e il video è già lì, un sito affidabile va bene. Ma non caricare nulla di personale: video di famiglia, riunioni, materiale di clienti.</p>'
            },
            {
                h2: 'Quando è meglio l’app',
                html: '<p>Se il video è sul tuo iPhone vince l’app: nessun caricamento con i dati mobili, nessuna attesa, nessun download, e tagli esattamente la parte che ti serve.</p>'
            }
        ],
        faq: [
            { q: 'È sicuro estrarre l’audio da un video online?', a: 'Dipende dal sito. Il video finisce su un server di terzi: meglio evitarlo per contenuti privati. Le app che lavorano sul dispositivo non caricano nulla.' },
            { q: 'C’è un modo gratis su iPhone senza caricare il video?', a: `Sì. ${APP} è gratis per iniziare e converte sul dispositivo: il video non viene mai caricato.` },
            { q: 'Perché la conversione online è così lenta sul telefono?', a: 'Perché prima bisogna caricare tutto il video. I video del telefono sono pesanti e l’upload con i dati mobili è molto più lento del download.' }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-without-app-iphone', 'mp4-to-mp3-iphone'],
        card: { title: 'Online o app', text: 'Privacy, velocità e limiti a confronto.' }
    },
    {
        slug: 'save-music-from-video-iphone',
        keyword: 'estrarre musica da un video iphone',
        eyebrow: 'Musica',
        title: 'Come estrarre la musica da un video su iPhone (MP3 o M4A)',
        description: 'Salva la canzone o la musica di sottofondo di un video su iPhone in MP3 o M4A. Taglia sul brano, ascolta offline e condividi ovunque. Guida rapida.',
        h1: 'Come estrarre la musica da un video su iPhone',
        answer: `Per estrarre la musica da un video su iPhone, aprilo in Foto, tocca Condividi, scegli ${APP}, posiziona i marcatori di taglio attorno alla canzone e tocca «Estrai audio». La musica viene salvata in MP3 o M4A da ascoltare offline in File o condividere con qualsiasi app.`,
        intro: '<p>Una canzone al matrimonio, la cover di un amico, la musica del tuo montaggio: a volte la cosa più importante di un video è il suono. Ecco come salvarlo come file musicale a sé.</p>',
        steps: [STEP.share, { name: 'Taglia attorno alla canzone', text: 'Tocca «Taglia video» e trascina i marcatori gialli in modo che resti solo la canzone. Ascolta inizio e fine.', image: 3 }, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Consigli per il suono migliore',
                html: `<ul>
<li>Togli chiacchiere e applausi all’inizio e alla fine.</li>
<li>MP3 per l’autoradio e i lettori più vecchi, M4A per i dispositivi Apple.</li>
<li>Rinomina il file in File (tieni premuto → Rinomina) per ritrovarlo facilmente.</li>
</ul>`
            },
            {
                h2: 'Una nota sul diritto d’autore',
                html: '<p>Salva musica solo dai tuoi video o da quelli di cui hai i diritti. Le canzoni commerciali sono protette: una copia personale della tua registrazione va bene, ripubblicare musica altrui no.</p>'
            },
            {
                h2: 'Usala come suoneria',
                html: '<p>Hai trovato i tuoi 30 secondi preferiti? <a href="/it/guides/video-to-ringtone-iphone/">Trasformali in suoneria</a>.</p>'
            }
        ],
        faq: [
            { q: 'Come prendo la canzone da un video sul mio iPhone?', a: `Invia il video a ${APP}, taglia attorno alla canzone e tocca «Estrai audio». La canzone viene salvata come file audio.` },
            { q: 'Posso aggiungere la canzone ad Apple Music?', a: 'L’app Musica dell’iPhone non importa direttamente i file locali. Tieni il file in File o sincronizzalo da un Mac o PC.' },
            { q: 'Funziona con i video di WhatsApp o Messaggi?', a: 'Sì. Salva prima il video in Foto o File, poi estrai l’audio.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-ringtone-iphone', 'mov-to-mp3-iphone'],
        card: { title: 'Estrarre musica da un video', text: 'Tieni la canzone, lascia l’immagine.' }
    }
);

guides.push(
    {
        slug: 'trim-audio-from-video-iphone',
        keyword: 'tagliare audio di un video iphone',
        eyebrow: 'Taglio',
        title: 'Estrarre solo una parte dell’audio di un video su iPhone',
        description: 'Ti servono solo 10 secondi di audio? Taglia il video su iPhone ed estrai solo quel tratto in MP3 o M4A. Trascina i marcatori, ascolta, esporta. Gratis.',
        h1: 'Come estrarre solo una parte dell’audio di un video su iPhone',
        answer: `Per estrarre solo una parte dell’audio di un video su iPhone, aprilo in ${APP}, tocca «Taglia video», trascina i marcatori gialli di inizio e fine attorno al tratto che vuoi, tocca «Salva» e poi «Estrai audio». Viene esportata solo la parte selezionata, in MP3 o M4A.`,
        intro: '<p>Quasi mai serve l’intera traccia: basta una frase, un ritornello o un effetto sonoro. Tagliando prima ottieni un file piccolo e pulito.</p>',
        steps: [
            STEP.open,
            { name: 'Tocca «Taglia video»', text: 'Nella schermata di estrazione tocca «Taglia video» per aprire la timeline.', image: 2 },
            { name: 'Trascina i marcatori', text: 'Porta il marcatore giallo di sinistra all’inizio e quello di destra alla fine. I tempi mostrano la selezione esatta. Ascolta e tocca «Salva».', image: 3 },
            { name: 'Estrai e salva il frammento', text: 'Tocca «Estrai audio». Viene esportata solo la parte tagliata: condividila o salvala su File.', image: 4 }
        ],
        sections: [
            {
                h2: 'Consigli per un taglio preciso',
                html: `<ul>
<li>Lascia mezzo secondo prima e dopo la voce per non tagliare le parole.</li>
<li>Per una suoneria seleziona al massimo 30 secondi.</li>
<li>Più frammenti dallo stesso video? Ripeti il taglio per ognuno: tutto resta nella libreria.</li>
</ul>`
            },
            {
                h2: 'Cosa si taglia più spesso',
                html: '<p>Una frase di un discorso, il ritornello di una canzone, un effetto per un montaggio, le prime parole di tuo figlio o il minuto importante di una lunga riunione.</p>'
            }
        ],
        faq: [
            { q: 'Si può tagliare l’audio di un video su iPhone?', a: `Sì. Taglia il video al tratto che ti serve in ${APP} ed estrai: viene salvata come audio solo quella parte.` },
            { q: 'Il taglio modifica il video originale?', a: 'No. L’originale in Foto resta intatto; viene tagliato solo il file audio esportato.' },
            { q: 'Posso estrarre più parti dallo stesso video?', a: 'Sì. Taglia ed estrai di nuovo per ogni parte.' }
        ],
        related: ['video-to-ringtone-iphone', 'save-music-from-video-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Estrarre solo una parte', text: 'Taglia al secondo esatto.' }
    },
    {
        slug: 'screen-recording-to-audio-iphone',
        keyword: 'audio registrazione schermo iphone',
        eyebrow: 'Registrazione schermo',
        title: 'Come salvare l’audio di una registrazione schermo su iPhone',
        description: 'Trasforma una registrazione schermo dell’iPhone in un file MP3 o M4A. Scopri perché è muta, taglia la parte che ti serve e salva l’audio. Passaggi semplici.',
        h1: 'Come salvare l’audio di una registrazione schermo su iPhone',
        answer: `Le registrazioni schermo dell’iPhone vengono salvate come video in Foto. Per salvarne l’audio, apri la registrazione, tocca Condividi, scegli ${APP}, taglia se serve e tocca «Estrai audio». Se il file è muto, la registrazione non ha catturato suono: attiva il microfono prima di registrare.`,
        intro: '<p>La registrazione schermo è un modo comune per conservare un messaggio vocale, una chiamata in vivavoce o un clip da un’app. Ecco come tenere solo l’audio.</p>',
        steps: [
            { name: 'Trova la registrazione in Foto', text: 'Le registrazioni schermo sono in Foto → «Tipi di media» → «Registrazioni schermo».', image: 2 },
            { name: 'Inviala all’app', text: 'Apri la registrazione, tocca Condividi e scegli l’app.', image: 2 },
            STEP.trim,
            { name: 'Estrai e salva', text: 'Tocca «Estrai audio» e salva l’MP3 o l’M4A su File.', image: 4 }
        ],
        sections: [
            {
                h2: 'Perché la mia registrazione schermo è muta?',
                html: `<ul>
<li><strong>Microfono spento:</strong> nel Centro di Controllo tieni premuto il pulsante di registrazione schermo e attiva «Microfono» per registrare la tua voce.</li>
<li><strong>Modalità silenziosa:</strong> alcune app non emettono suoni in modalità silenziosa.</li>
<li><strong>Contenuti protetti:</strong> molte app di streaming bloccano l’audio nelle registrazioni schermo: è voluto e non si può aggirare.</li>
</ul>`
            },
            {
                h2: 'Rispetta la privacy',
                html: '<p>Registra e conserva chiamate o conversazioni solo con il consenso di tutti i partecipanti e nel rispetto delle leggi del tuo Paese.</p>'
            }
        ],
        faq: [
            { q: 'Posso convertire una registrazione schermo in MP3?', a: 'Sì. Le registrazioni schermo sono normali video, quindi il loro audio si può salvare in MP3 o M4A.' },
            { q: 'Dove salva l’iPhone le registrazioni schermo?', a: 'Nell’app Foto, in «Tipi di media» → «Registrazioni schermo».' },
            { q: 'Perché non si sente nulla nella mia registrazione schermo?', a: 'Il microfono era spento oppure l’app registrata blocca l’audio. Verifica che la registrazione abbia l’audio prima di estrarre.' }
        ],
        related: ['extract-audio-from-video-iphone', 'trim-audio-from-video-iphone', 'lecture-video-to-audio-iphone'],
        card: { title: 'Audio di una registrazione schermo', text: 'Salva l’audio e capisci perché manca.' }
    },
    {
        slug: 'lecture-video-to-audio-iphone',
        keyword: 'convertire video lezione in audio',
        eyebrow: 'Studio',
        title: 'Convertire il video di una lezione in audio su iPhone (MP3)',
        description: 'Trasforma lezioni registrate, webinar e conferenze in MP3 su iPhone e studia ovunque. File leggeri, ascolto offline, condivisione facile. Guida passo passo.',
        h1: 'Come convertire il video di una lezione in audio su iPhone',
        answer: `Per convertire una lezione in video in audio, apri la registrazione in Foto o File, tocca Condividi, scegli ${APP} e tocca «Estrai audio». Salva l’MP3 su File e ascoltalo offline — sui mezzi, in palestra o a schermo spento — occupando una frazione dello spazio.`,
        intro: '<p>In una lezione conta quello che si dice, non quello che si vede. In audio la lezione diventa un podcast da riascoltare dove vuoi.</p>',
        steps: [
            STEP.share,
            { name: 'Togli attese e pause (facoltativo)', text: 'Tocca «Taglia video» per eliminare l’attesa prima dell’inizio e le domande che non ti servono.', image: 3 },
            STEP.extract,
            { name: 'Salvala in una cartella Lezioni', text: 'Tocca Condividi → Salva su File e crea una cartella per ogni corso per ritrovare tutto subito.', image: 4 }
        ],
        sections: [
            {
                h2: 'Perché studiare con l’audio',
                html: `<ul>
<li><strong>File leggeri:</strong> un’ora di audio occupa una frazione di un’ora di video.</li>
<li><strong>Schermo spento:</strong> ascolta con il telefono bloccato e risparmia batteria.</li>
<li><strong>Ovunque:</strong> mezzi, passeggiata, palestra — senza Wi-Fi.</li>
</ul>`
            },
            {
                h2: 'Trasformala in appunti',
                html: '<p>Ti serve il testo? Importa l’audio nell’app di trascrizione che usi già e cerca nella trascrizione in seguito.</p>'
            },
            {
                h2: 'Controlla le regole',
                html: '<p>Molte università consentono di registrare per uso personale, ma non di diffondere le registrazioni. Verifica le regole del tuo corso prima di registrare o condividere una lezione.</p>'
            }
        ],
        faq: [
            { q: 'Posso ascoltare un video su iPhone a schermo spento?', a: 'La maggior parte dei lettori video va in pausa quando blocchi il telefono. Convertito in MP3, puoi ascoltarlo a schermo spento in File o in qualsiasi lettore audio.' },
            { q: 'Funziona con una lezione di un’ora?', a: 'Sì. Le registrazioni lunghe funzionano allo stesso modo, richiedono solo un po’ più di tempo.' },
            { q: 'Posso convertire registrazioni di Zoom o webinar?', a: 'Sì, appena la registrazione MP4 si trova in Foto o File sul tuo iPhone.' }
        ],
        related: ['screen-recording-to-audio-iphone', 'mp4-to-mp3-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Lezione video in audio', text: 'Studia ovunque con MP3 leggeri.' }
    },
    {
        slug: 'video-to-ringtone-iphone',
        keyword: 'suoneria da video iphone',
        eyebrow: 'Suonerie',
        title: 'Come creare una suoneria da un video su iPhone (iOS 26)',
        description: 'Trasforma un video in suoneria per iPhone: taglia l’audio a 30 s, salvalo su File e tocca Condividi → «Usa come suoneria». iOS 26, con GarageBand per iOS 18.',
        h1: 'Come creare una suoneria da un video su iPhone',
        answer: `Per creare una suoneria da un video, aprilo in ${APP}, taglia a massimo 30 secondi, estrai in M4A o MP3 e salva su File. Con iOS 26, tieni premuto il file in File, tocca Condividi e scegli «Usa come suoneria». Nelle versioni precedenti di iOS importa l’audio in GarageBand ed esportalo come suoneria.`,
        intro: '<p>Una risata, una canzone di una festa, l’abbaiare del tuo cane: qualsiasi suono dei tuoi video può diventare la tua suoneria. Con iOS 26 è semplicissimo, appena hai un file audio.</p>',
        steps: [
            STEP.share,
            { name: 'Taglia a 30 secondi', text: 'Tocca «Taglia video» e seleziona al massimo 30 secondi: è il limite per le suonerie.', image: 3 },
            { name: 'Estrai e salva su File', text: 'Tocca «Estrai audio» (M4A o MP3), poi Condividi → Salva su File.', image: 4 },
            { name: 'Usa come suoneria', text: 'In File tieni premuto il file audio, tocca Condividi → «Usa come suoneria» (iOS 26). Controlla in Impostazioni → Suoni e feedback aptico → Suoneria.', image: 4 }
        ],
        sections: [
            {
                h2: 'Con iOS 18: il metodo GarageBand',
                html: `<ol>
<li>Estrai e taglia l’audio come sopra e salvalo su File.</li>
<li>Apri GarageBand, crea un progetto «Registratore audio» e passa alla vista Tracce.</li>
<li>Apri il browser dei loop → «File» → «Sfoglia gli elementi dall’app File» e trascina l’audio su una traccia.</li>
<li>Torna a «I miei brani», tieni premuto il progetto → Condividi → Suoneria → Esporta.</li>
</ol>`
            },
            {
                h2: 'Perché non compare «Usa come suoneria»',
                html: `<ul>
<li>Il file dura più di 30 secondi: taglialo di nuovo.</li>
<li>Il file non è né MP3 né M4A.</li>
<li>Il tuo iPhone non ha ancora iOS 26: usa GarageBand.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Quanto può durare una suoneria per iPhone?', a: 'Fino a 30 secondi per le suonerie personalizzate create da file audio.' },
            { q: 'Che formato serve per una suoneria iPhone?', a: 'Con iOS 26 puoi impostare file MP3 o M4A di meno di 30 secondi con «Usa come suoneria».' },
            { q: 'Posso usare direttamente un video come suoneria?', a: 'No. Prima estrai l’audio dal video, poi imposta il file audio come suoneria.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-m4a-iphone', 'save-music-from-video-iphone'],
        card: { title: 'Suoneria da un video', text: '«Usa come suoneria» su iOS 26, in 4 passaggi.' }
    }
);
