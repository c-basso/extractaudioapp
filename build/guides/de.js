/**
 * Deutsche Anleitungen → /de/guides/<slug>/
 * Slugs identisch mit build/guides/en.js (hreflang-Verknüpfung). Keywords: Abschnitt „Deutsch (DE)“ in /keywords.md.
 * Screenshots: 1 Cover · 2 Extrahieren · 3 Zuschneiden · 4 Teilen-Menü · 5 Mediathek
 */

const APP = 'Audio aus Video – MP3 & M4A';

const STEP = {
    open: {
        name: 'App öffnen und Video wählen',
        text: `Starten Sie ${APP} und wählen Sie ein Video aus Fotos oder Dateien. Schneller: In Fotos beim Video auf „Teilen“ tippen und die App wählen.`,
        image: 2
    },
    share: {
        name: 'Video an die App senden',
        text: 'Öffnen Sie das Video in Fotos oder Dateien, tippen Sie auf „Teilen“ und wählen Sie die App. Das Video ist dann bereits geladen.',
        image: 2
    },
    trim: {
        name: 'Gewünschten Teil zuschneiden (optional)',
        text: 'Tippen Sie auf „Video zuschneiden“, ziehen Sie die gelben Marker an Anfang und Ende des gewünschten Teils, hören Sie kurz rein und tippen Sie auf „Sichern“.',
        image: 3
    },
    extract: {
        name: 'Auf „Audio extrahieren“ tippen',
        text: 'Tippen Sie auf „Audio extrahieren“. Die Tonspur wird in Sekunden direkt auf dem iPhone umgewandelt – nichts wird hochgeladen.',
        image: 2
    },
    save: {
        name: 'Audiodatei sichern oder teilen',
        text: 'Die neue Audiodatei erscheint in der Mediathek. Tippen Sie auf „Teilen“, um sie in Dateien zu sichern, per AirDrop zu senden oder an jede App weiterzugeben.',
        image: 4
    }
};

const guides = [];
module.exports = guides;

guides.push(
    {
        slug: 'extract-audio-from-video-iphone',
        keyword: 'audio aus video extrahieren iphone',
        eyebrow: 'Grundlagen',
        title: 'Audio aus Video extrahieren auf dem iPhone – Anleitung',
        description: 'Ton aus jedem Video auf dem iPhone extrahieren – in 4 Tipps: Video wählen, zuschneiden, „Audio extrahieren“, als MP3 oder M4A sichern. Kostenlos, ohne Upload.',
        h1: 'Audio aus Video extrahieren auf dem iPhone',
        answer: `Um auf dem iPhone Audio aus einem Video zu extrahieren, öffnen Sie ${APP}, wählen das Video aus Fotos, schneiden es bei Bedarf zu und tippen auf „Audio extrahieren“. Die App sichert die Tonspur in Sekunden als MP3 oder M4A auf dem iPhone. Kostenlos und offline – nichts wird hochgeladen.`,
        intro: '<p>In der Fotos-App gibt es keinen Knopf „nur Ton speichern“. Sie können einen Kurzbefehl bauen (siehe <a href="/de/guides/extract-audio-without-app-iphone/">Methode ohne App</a>) oder das Video auf eine Website hochladen – beides ist langsam, wenn Sie einfach nur den Ton wollen. Hier der schnellste Weg: eine kostenlose App, die direkt im „Teilen“-Menü steckt.</p>',
        steps: [STEP.open, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Was Sie brauchen',
                html: `<ul>
<li>Ein iPhone mit iOS 18.6 oder neuer.</li>
<li>${APP} – kostenlos im App Store (ca. 23 MB).</li>
<li>Ein Video mit Ton: Kameraaufnahmen (MOV), Downloads (MP4), Bildschirmaufnahmen oder Videos aus Nachrichten.</li>
</ul>`
            },
            {
                h2: 'Am schnellsten: über „Teilen“',
                html: '<p>Sie müssen die App nicht einmal öffnen. Öffnen Sie das Video in <strong>Fotos</strong> oder <strong>Dateien</strong>, tippen Sie auf <strong>„Teilen“</strong>, scrollen Sie durch die App-Reihe und wählen Sie die App. Fehlt sie, tippen Sie auf „Mehr“ und fügen Sie sie einmal zu den Favoriten hinzu.</p>'
            },
            {
                h2: 'MP3 oder M4A – was wählen?',
                html: '<p><strong>MP3</strong> läuft überall: Windows, Android, Autoradio, Webseiten und Schnittprogramme. <strong>M4A</strong> (AAC) ist Apples eigenes Format – bei gleicher Qualität kleiner und ideal für Klingeltöne, GarageBand und iMovie. Im Zweifel: MP3. Mehr dazu: <a href="/de/guides/convert-video-to-mp3-iphone/">Video in MP3 umwandeln</a> und <a href="/de/guides/video-to-m4a-iphone/">Video in M4A</a>.</p>'
            },
            {
                h2: 'Wo landet die Audiodatei?',
                html: '<p>Jede extrahierte Datei steht mit Dauer, Größe und Datum in der Mediathek der App. Von dort tippen Sie auf <strong>„Teilen“ → „In Dateien sichern“</strong> (iCloud Drive oder „Auf meinem iPhone“) oder senden sie an WhatsApp, Mail, Notizen, GarageBand oder per AirDrop an Ihren Mac.</p>'
            },
            {
                h2: 'Probleme lösen',
                html: `<ul>
<li><strong>Die Datei ist stumm.</strong> Das Video hat keine Tonspur – typisch für Bildschirmaufnahmen ohne Mikrofon. Spielen Sie das Video vorher in Fotos ab.</li>
<li><strong>Das Video liegt in iCloud.</strong> Fotos lädt zuerst das Original – warten Sie, bis der Fortschrittskreis fertig ist.</li>
<li><strong>Ich brauche nur 20 Sekunden.</strong> Vorher zuschneiden – siehe <a href="/de/guides/trim-audio-from-video-iphone/">nur einen Teil extrahieren</a>.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Ist das Extrahieren von Audio auf dem iPhone kostenlos?', a: `Ja. ${APP} ist kostenlos, und die Grundfunktion zum Extrahieren ist gratis. Optionale In-App-Käufe schalten Extras frei.` },
            { q: 'Verliert der Ton beim Extrahieren an Qualität?', a: 'Die App wandelt die vorhandene Tonspur in eine hochwertige MP3- oder M4A-Datei um. Besser als das Original wird es nicht, aber es klingt so wie beim Abspielen des Videos.' },
            { q: 'Funktioniert das auch bei langen Videos?', a: 'Ja. Vorlesungen, Konzerte und Meetings funktionieren genauso, dauern nur etwas länger. Brauchen Sie nur einen Teil, schneiden Sie vorher zu.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'trim-audio-from-video-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Audio aus Video extrahieren', text: 'Die Methode in 4 Tipps – aus Fotos oder per „Teilen“.' }
    },
    {
        slug: 'convert-video-to-mp3-iphone',
        keyword: 'video in mp3 umwandeln iphone',
        eyebrow: 'Video in MP3',
        title: 'Video in MP3 umwandeln auf dem iPhone – schnell & gratis',
        description: 'Jedes iPhone-Video in Sekunden in MP3 umwandeln – mit einem kostenlosen Video-zu-MP3-Konverter. Direkt aus Fotos, ohne Upload, mit Zuschneiden. So geht’s.',
        h1: 'Video in MP3 umwandeln auf dem iPhone',
        answer: `Öffnen Sie das Video in Fotos, tippen Sie auf „Teilen“ und wählen Sie ${APP}. Schneiden Sie bei Bedarf zu, tippen Sie auf „Audio extrahieren“ und exportieren Sie als MP3. Die MP3 bleibt auf dem iPhone und lässt sich in Dateien sichern, per AirDrop oder an jede App senden – ohne Computer und ohne Konto.`,
        intro: '<p>MP3 ist das kompatibelste Audioformat überhaupt – es läuft in jedem Auto, auf jedem Computer und in jedem Schnittprogramm. So wandeln Sie jedes iPhone-Video in MP3 um, ohne das Handy aus der Hand zu legen.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Als MP3 extrahieren', text: 'Tippen Sie auf „Audio extrahieren“ und wählen Sie MP3. Die Umwandlung läuft direkt auf dem iPhone.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'Warum eine App statt eines Online-Konverters?',
                html: '<p>Online-Konverter verlangen, dass Sie das ganze Video hochladen, warten und die MP3 wieder herunterladen – langsam im Mobilfunknetz und riskant bei privaten Videos. Die App arbeitet offline, behält die Datei auf dem Gerät und schneidet vorher zu. Vergleich: <a href="/de/guides/extract-audio-online-vs-app/">online oder App</a>.</p>'
            },
            {
                h2: 'Welche Videos kann ich in MP3 umwandeln?',
                html: '<p>Alles, was Ihr iPhone abspielt: Kameraaufnahmen (<a href="/de/guides/mov-to-mp3-iphone/">MOV</a>), heruntergeladene Clips (<a href="/de/guides/mp4-to-mp3-iphone/">MP4</a>), <a href="/de/guides/screen-recording-to-audio-iphone/">Bildschirmaufnahmen</a> und Videos aus Nachrichten, WhatsApp oder AirDrop.</p>'
            },
            {
                h2: 'Was Sie mit der MP3 machen können',
                html: `<ul>
<li>In <strong>Dateien</strong> sichern und offline hören.</li>
<li>Per <strong>AirDrop</strong> an den Mac senden.</li>
<li>30 Sekunden davon als <a href="/de/guides/video-to-ringtone-iphone/">Klingelton</a> nutzen.</li>
<li>In GarageBand, CapCut oder einen Podcast-Editor importieren.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Kann das iPhone Videos ohne App in MP3 umwandeln?', a: 'Nicht direkt. Kurzbefehle können Ton nur als M4A speichern, nicht als MP3. Für MP3 auf dem iPhone brauchen Sie eine Konverter-App oder eine Website.' },
            { q: 'Ist die Umwandlung in MP3 kostenlos?', a: `Ja, die Grundumwandlung in ${APP} ist kostenlos. Optionale In-App-Käufe bieten Extras.` },
            { q: 'Brauche ich WLAN, um ein Video in MP3 umzuwandeln?', a: 'Nein. Die Umwandlung läuft auf dem iPhone und funktioniert offline. Nur Videos in iCloud müssen vorher geladen werden.' }
        ],
        related: ['mp4-to-mp3-iphone', 'mov-to-mp3-iphone', 'video-to-m4a-iphone'],
        card: { title: 'Video in MP3 umwandeln', text: 'Jedes iPhone-Video als universelle MP3.' }
    },
    {
        slug: 'mp4-to-mp3-iphone',
        keyword: 'mp4 in mp3 umwandeln iphone',
        eyebrow: 'MP4 in MP3',
        title: 'MP4 in MP3 umwandeln auf dem iPhone – kostenlos, ohne Upload',
        description: 'MP4 in MP3 umwandeln auf dem iPhone – kostenlos: Datei in Dateien oder Fotos öffnen, „Teilen“ tippen, App wählen. Offline, mit Zuschneiden. In 4 Schritten.',
        h1: 'MP4 in MP3 umwandeln auf dem iPhone',
        answer: `Um MP4 auf dem iPhone in MP3 umzuwandeln, öffnen Sie die Datei in Dateien oder Fotos, tippen auf „Teilen“ und wählen ${APP}. Schneiden Sie bei Bedarf zu, tippen Sie auf „Audio extrahieren“, wählen Sie MP3 und sichern Sie. Kostenlos, auf dem Gerät, ohne Internet.`,
        intro: '<p>MP4-Dateien kommen meist als Download, Mail-Anhang oder per AirDrop – und liegen deshalb oft in der App <strong>Dateien</strong> statt in Fotos. Die App kommt mit beidem klar.</p>',
        steps: [
            { name: 'MP4-Datei finden', text: 'Öffnen Sie Dateien (Downloads, iCloud Drive oder „Auf meinem iPhone“) oder Fotos und suchen Sie die MP4.', image: 2 },
            { name: 'An die App senden', text: 'Datei gedrückt halten, „Teilen“ tippen und die App wählen. Die MP4 öffnet sich in der App.', image: 2 },
            STEP.trim,
            { name: 'Als MP3 sichern', text: 'Tippen Sie auf „Audio extrahieren“, wählen Sie MP3 und dann „Teilen“ → „In Dateien sichern“, um die MP3 neben der MP4 abzulegen.', image: 4 }
        ],
        sections: [
            {
                h2: 'MP4 vs. MP3 in einem Satz',
                html: '<p>MP4 ist ein Container mit Bild <em>und</em> Ton; MP3 ist nur Ton. Beim Umwandeln bleibt die Tonspur, das Bild fällt weg – die Datei wird viel kleiner und läuft in jedem Player.</p>'
            },
            {
                h2: 'MP4 aus WhatsApp, Telegram und Mail',
                html: '<p>Sichern Sie den Anhang zuerst: im Chat Video öffnen → „Teilen“ → „Video sichern“ (in Fotos) oder „In Dateien sichern“. Dann wie oben vorgehen. Wandeln Sie nur Videos um, die Ihnen gehören oder für die Sie die Rechte haben.</p>'
            },
            {
                h2: 'Lieber M4A?',
                html: '<p>Für Klingeltöne und Apple-Apps ist M4A die bessere Wahl. Siehe <a href="/de/guides/video-to-m4a-iphone/">Video in M4A umwandeln</a>.</p>'
            }
        ],
        faq: [
            { q: 'Kann ich MP4 auf dem iPhone kostenlos in MP3 umwandeln?', a: `Ja. ${APP} wandelt MP4 kostenlos direkt auf dem Gerät in MP3 um. In-App-Käufe schalten Extras frei.` },
            { q: 'Ist die MP3 kleiner als die MP4?', a: 'Ja, meist deutlich, weil die Videospur entfernt wird und nur der Ton bleibt.' },
            { q: 'Kann ich mehrere MP4-Dateien umwandeln?', a: 'Ja. Wandeln Sie sie nacheinander um – jede MP3 bleibt in der Mediathek der App.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'mov-to-mp3-iphone', 'extract-audio-online-vs-app'],
        card: { title: 'MP4 in MP3 umwandeln', text: 'Heruntergeladene MP4 aus Dateien oder Fotos.' }
    },
    {
        slug: 'mov-to-mp3-iphone',
        keyword: 'mov in mp3 umwandeln iphone',
        eyebrow: 'MOV in MP3',
        title: 'MOV in MP3 umwandeln auf dem iPhone – Kameravideos zu Audio',
        description: 'iPhone-Kameravideos sind MOV-Dateien. So wandeln Sie MOV direkt auf dem iPhone in MP3 um: Clip wählen, zuschneiden, „Audio extrahieren“. Gratis und offline.',
        h1: 'MOV in MP3 umwandeln auf dem iPhone',
        answer: `Jedes Video der iPhone-Kamera ist eine MOV-Datei. Um MOV in MP3 umzuwandeln, öffnen Sie den Clip in Fotos, tippen auf „Teilen“, wählen ${APP}, schneiden bei Bedarf zu und tippen auf „Audio extrahieren“. Die MP3 liegt danach auf dem iPhone – ganz ohne Computer.`,
        intro: '<p>MOV ist Apples Videoformat – und das, was Ihre Kamera aufnimmt: Konzerte, Reden, ein Freund mit Gitarre, eine Stimme, die Sie behalten möchten. Als MP3 können Sie es überall hören.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Wofür MOV in MP3 praktisch ist',
                html: `<ul>
<li>Den Ton eines gefilmten Konzerts oder Auftritts behalten.</li>
<li>Eine gefilmte Rede oder einen Toast als Audio-Erinnerung sichern.</li>
<li>Eine Bandprobe ohne riesige Videodatei an die Band schicken.</li>
<li>Eine aufgenommene <a href="/de/guides/lecture-video-to-audio-iphone/">Vorlesung</a> unterwegs hören.</li>
</ul>`
            },
            {
                h2: 'HEVC, 4K und Kinomodus',
                html: '<p>HEVC- und 4K-Aufnahmen werden genauso umgewandelt. Verarbeitet wird nur der Ton – selbst riesige MOV-Dateien ergeben kleine Audiodateien.</p>'
            },
            {
                h2: 'Warum nicht am Computer?',
                html: '<p>Eine mehrere Gigabyte große MOV auf den Computer zu kopieren, nur um den Ton abzutrennen, dauert länger als die Umwandlung auf dem iPhone. Die App erledigt es dort, wo das Video schon liegt.</p>'
            }
        ],
        faq: [
            { q: 'In welchem Format nimmt das iPhone Videos auf?', a: 'Die iPhone-Kamera speichert MOV-Dateien, meist mit HEVC- oder H.264-Video und AAC-Ton.' },
            { q: 'Kann ich MOV ohne Qualitätsverlust in MP3 umwandeln?', a: 'Die App behält die Qualität der Aufnahme bei. Die MP3 klingt so wie das Video beim Abspielen.' },
            { q: 'Kann ich MOV stattdessen als M4A speichern?', a: 'Ja, wählen Sie M4A als Format – ideal für Klingeltöne und Apple-Apps.' }
        ],
        related: ['mp4-to-mp3-iphone', 'convert-video-to-mp3-iphone', 'save-music-from-video-iphone'],
        card: { title: 'MOV in MP3', text: 'Kameraaufnahmen als Audiodatei.' }
    }
);

guides.push(
    {
        slug: 'video-to-m4a-iphone',
        keyword: 'video in m4a umwandeln iphone',
        eyebrow: 'Video in M4A',
        title: 'Video in M4A umwandeln auf dem iPhone – MP4 & MOV zu M4A',
        description: 'Ton aus Videos als M4A speichern – für Klingeltöne, GarageBand und Apple-Apps. Kostenlos, auf dem Gerät, mit Zuschneiden. MP4 oder MOV zu M4A in 4 Tipps.',
        h1: 'Video in M4A umwandeln auf dem iPhone',
        answer: `Um ein Video auf dem iPhone in M4A umzuwandeln, senden Sie es aus Fotos oder Dateien über „Teilen“ an ${APP}, schneiden bei Bedarf zu, tippen auf „Audio extrahieren“ und wählen M4A. Die M4A-Datei (AAC) funktioniert in GarageBand, iMovie, Audio-Playern und als Klingelton.`,
        intro: '<p>M4A ist Apples eigenes Audioformat. Es ist bei ähnlicher Qualität kleiner als MP3 – und genau das Format, das das iPhone für Klingeltöne und GarageBand erwartet.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Als M4A extrahieren', text: 'Tippen Sie auf „Audio extrahieren“ und wählen Sie M4A.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'M4A oder MP3 – wann M4A?',
                html: `<table class="guide-table"><thead><tr><th></th><th>M4A (AAC)</th><th>MP3</th></tr></thead><tbody>
<tr><td>Ideal für</td><td>iPhone, Mac, Klingeltöne, GarageBand</td><td>Alles andere – Windows, Android, Auto</td></tr>
<tr><td>Dateigröße</td><td>Kleiner bei gleicher Qualität</td><td>Etwas größer</td></tr>
<tr><td>Kompatibilität</td><td>Sehr gut</td><td>Universell</td></tr>
</tbody></table>`
            },
            {
                h2: 'M4A als Klingelton',
                html: '<p>Unter iOS 26 lässt sich eine M4A unter 30 Sekunden direkt aus Dateien als Klingelton festlegen. Ausführlich: <a href="/de/guides/video-to-ringtone-iphone/">Klingelton aus Video erstellen</a>.</p>'
            },
            {
                h2: 'In GarageBand oder iMovie öffnen',
                html: '<p>Sichern Sie die M4A in Dateien und importieren Sie sie in GarageBand oder iMovie über den Dateibrowser – als Hintergrundmusik, Sprecherstimme oder Soundeffekt.</p>'
            }
        ],
        faq: [
            { q: 'Ist M4A besser als MP3?', a: 'Bei gleicher Bitrate klingt M4A (AAC) meist gleich gut oder besser und ist kleiner. MP3 ist dafür auf mehr Geräten kompatibel.' },
            { q: 'Kann ich M4A auch mit Kurzbefehlen erstellen?', a: 'Ja, die Aktion „Medien codieren“ mit „Nur Audio“ erzeugt M4A. Zuschneiden oder MP3 geht damit aber nicht – mit der App schon.' },
            { q: 'Ist die Umwandlung in M4A kostenlos?', a: `Ja, die Grundfunktion von ${APP} ist kostenlos, inklusive M4A-Export.` }
        ],
        related: ['video-to-ringtone-iphone', 'convert-video-to-mp3-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Video in M4A', text: 'Apple-Format für Klingeltöne und GarageBand.' }
    },
    {
        slug: 'extract-audio-without-app-iphone',
        keyword: 'audio aus video extrahieren iphone ohne app',
        eyebrow: 'Kurzbefehle vs. App',
        title: 'Audio aus Video extrahieren am iPhone ohne App (Kurzbefehle)',
        description: 'Ton aus Videos geht auf dem iPhone auch ohne App – mit Kurzbefehlen und „Medien codieren“. Komplette Einrichtung, Grenzen (nur M4A) und der schnellere Weg.',
        h1: 'Audio aus Video extrahieren auf dem iPhone ohne App',
        answer: 'Ohne zusätzliche App klappt es mit einem Kurzbefehl: Aktion „Medien codieren“ hinzufügen, „Nur Audio“ aktivieren, „Datei sichern“ ergänzen und „Im Share-Sheet anzeigen“ einschalten. Dann das Video an den Kurzbefehl teilen. Ergebnis: nur M4A, ohne Zuschneiden – für MP3 oder kurze Ausschnitte ist eine App schneller.',
        intro: '<p>Apples kostenlose App Kurzbefehle kann den Ton von einem Video trennen. Die Einrichtung dauert etwa zwei Minuten. Hier das genaue Rezept – und seine Grenzen.</p>',
        steps: [
            { name: 'Neuen Kurzbefehl anlegen', text: 'Öffnen Sie Kurzbefehle, tippen Sie auf + und nennen Sie ihn „Ton aus Video“.', image: 2 },
            { name: '„Medien codieren“ mit „Nur Audio“', text: 'Tippen Sie auf „Aktion hinzufügen“, suchen Sie „Medien codieren“, fügen Sie sie hinzu, klappen Sie die Optionen auf und aktivieren Sie „Nur Audio“.', image: 2 },
            { name: '„Datei sichern“ hinzufügen', text: 'Ergänzen Sie die Aktion „Datei sichern“, damit das Ergebnis in Dateien landet.', image: 4 },
            { name: 'Im Share-Sheet anzeigen', text: 'Öffnen Sie die Kurzbefehl-Einstellungen (i-Symbol), aktivieren Sie „Im Share-Sheet anzeigen“ und erlauben Sie „Medien“. Jetzt ein Video aus Fotos teilen und den Kurzbefehl wählen.', image: 4 }
        ],
        sections: [
            {
                h2: 'Grenzen der Kurzbefehl-Methode',
                html: `<ul>
<li><strong>Nur M4A</strong> – kein MP3.</li>
<li><strong>Kein Zuschneiden</strong> – es wird immer die ganze Tonspur gesichert.</li>
<li><strong>Keine Mediathek</strong> – Dateien landen in Dateien und müssen manuell gefunden und umbenannt werden.</li>
<li>Bei langen Videos bricht der Kurzbefehl mitunter ohne klare Fehlermeldung ab.</li>
</ul>`
            },
            {
                h2: 'Die Ein-Tipp-Alternative',
                html: `<p>${APP} erledigt dasselbe – mit Zuschneiden, MP3 oder M4A und einer Mediathek aller extrahierten Dateien. Die App steckt ebenfalls im „Teilen“-Menü, ist also genauso schnell – und es gibt nichts einzurichten.</p>`
            },
            {
                h2: 'Weitere Wege ohne App',
                html: '<p>Auch iMovie und GarageBand können Ton trennen, brauchen aber mehr Schritte und exportieren nur eingeschränkt. Websites funktionieren ebenfalls, dafür müssen Sie Ihr Video hochladen – siehe <a href="/de/guides/extract-audio-online-vs-app/">online oder App</a>.</p>'
            }
        ],
        faq: [
            { q: 'Hat das iPhone einen eingebauten Audio-Extraktor?', a: 'Nicht als Knopf in Fotos. Am nächsten kommt die Aktion „Medien codieren“ mit „Nur Audio“ in der App Kurzbefehle.' },
            { q: 'In welchem Format speichert der Kurzbefehl?', a: 'Als M4A. MP3 ist mit Kurzbefehlen nicht möglich.' },
            { q: 'Kann der Kurzbefehl den Ton zuschneiden?', a: `Nicht komfortabel. Zum Zuschneiden nutzen Sie eine App mit Zeitleiste wie ${APP}.` }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-online-vs-app', 'video-to-m4a-iphone'],
        card: { title: 'Ohne App (Kurzbefehle)', text: 'Das kostenlose Kurzbefehl-Rezept und seine Grenzen.' }
    },
    {
        slug: 'extract-audio-online-vs-app',
        keyword: 'video in mp3 umwandeln online',
        eyebrow: 'Online vs. App',
        title: 'Video in MP3 umwandeln online oder per App? iPhone-Vergleich',
        description: 'Video online in MP3 umwandeln oder per App? Datenschutz, Tempo, Limits und Zuschneiden auf dem iPhone im Vergleich – und warum die App auf dem Handy gewinnt.',
        h1: 'Video in MP3 umwandeln: online oder per App auf dem iPhone?',
        answer: `Online-Konverter funktionieren auf jedem Gerät, verlangen aber, dass Sie das ganze Video hochladen, warten und das Ergebnis herunterladen – langsam im Mobilfunknetz und nicht privat. Auf dem iPhone ist eine App wie ${APP} schneller, arbeitet offline, behält Videos auf dem Gerät und schneidet vor dem Export zu.`,
        intro: '<p>Wer „Video in MP3 umwandeln online“ sucht, findet Dutzende kostenlose Websites. Am Laptop mit schnellem Internet sind sie praktisch. Auf dem iPhone sieht die Rechnung anders aus.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Direkter Vergleich',
                html: `<table class="guide-table"><thead><tr><th></th><th>Online-Konverter</th><th>${APP}</th></tr></thead><tbody>
<tr><td>Datenschutz</td><td>Video wird auf fremden Server geladen</td><td>Bleibt auf dem iPhone</td></tr>
<tr><td>Tempo</td><td>Upload + Warteschlange + Download</td><td>Sekunden, auf dem Gerät</td></tr>
<tr><td>Offline</td><td>Nein</td><td>Ja</td></tr>
<tr><td>Größenlimits</td><td>Bei Gratis-Tarifen üblich</td><td>Nur durch Speicher begrenzt</td></tr>
<tr><td>Zuschneiden</td><td>Manchmal</td><td>Eingebaute Zeitleiste</td></tr>
<tr><td>Werbung &amp; Pop-ups</td><td>Häufig</td><td>Keine Web-Pop-ups</td></tr>
<tr><td>Preis</td><td>Gratis mit Limits</td><td>Grundfunktion gratis</td></tr>
</tbody></table>`
            },
            {
                h2: 'Wann ein Online-Tool sinnvoll ist',
                html: '<p>Sitzen Sie am Windows-PC und liegt das Video schon dort, ist ein seriöser Web-Konverter in Ordnung. Laden Sie aber nichts Privates hoch – Familienvideos, Meetings, Kundenmaterial.</p>'
            },
            {
                h2: 'Wann die App besser ist',
                html: '<p>Liegt das Video auf dem iPhone, gewinnt die App: kein Upload übers Mobilfunknetz, kein Warten, kein Download – und Sie schneiden genau den Teil zu, den Sie brauchen.</p>'
            }
        ],
        faq: [
            { q: 'Ist es sicher, Videos online in MP3 umzuwandeln?', a: 'Das hängt von der Website ab. Ihr Video landet auf einem fremden Server – für private Inhalte besser vermeiden. Apps, die auf dem Gerät arbeiten, laden nichts hoch.' },
            { q: 'Gibt es eine kostenlose Möglichkeit ohne Upload auf dem iPhone?', a: `Ja. ${APP} ist kostenlos und wandelt direkt auf dem Gerät um – Ihr Video wird nie hochgeladen.` },
            { q: 'Warum ist die Online-Umwandlung auf dem Handy so langsam?', a: 'Weil zuerst das ganze Video hochgeladen werden muss. Handyvideos sind groß, und der Upload im Mobilfunknetz ist meist viel langsamer als der Download.' }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-without-app-iphone', 'mp4-to-mp3-iphone'],
        card: { title: 'Online oder App', text: 'Datenschutz, Tempo und Limits im Vergleich.' }
    },
    {
        slug: 'save-music-from-video-iphone',
        keyword: 'musik aus video extrahieren iphone',
        eyebrow: 'Musik',
        title: 'Musik aus Video extrahieren auf dem iPhone (MP3 oder M4A)',
        description: 'Song oder Hintergrundmusik aus einem Video auf dem iPhone als MP3 oder M4A speichern. Genau zuschneiden, offline hören, überall teilen. Kurzanleitung.',
        h1: 'Musik aus Video extrahieren auf dem iPhone',
        answer: `Um Musik aus einem Video auf dem iPhone zu speichern, öffnen Sie es in Fotos, tippen auf „Teilen“, wählen ${APP}, setzen die Zuschneide-Marker um den Song und tippen auf „Audio extrahieren“. Die Musik wird als MP3 oder M4A gesichert – offline in Dateien hörbar oder an jede App teilbar.`,
        intro: '<p>Ein Lied auf der Hochzeit, das Cover eines Freundes, die Musik aus Ihrem eigenen Schnitt – manchmal ist der Ton das Wichtigste. So sichern Sie ihn als eigene Musikdatei.</p>',
        steps: [STEP.share, { name: 'Um den Song zuschneiden', text: 'Tippen Sie auf „Video zuschneiden“ und ziehen Sie die gelben Marker so, dass nur der Song ausgewählt ist. Anfang und Ende kurz anhören.', image: 3 }, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Tipps für den besten Klang',
                html: `<ul>
<li>Gespräche und Applaus am Anfang und Ende wegschneiden.</li>
<li>MP3 für Autoradio und ältere Player, M4A für Apple-Geräte.</li>
<li>Datei in Dateien umbenennen (gedrückt halten → „Umbenennen“), damit Sie sie wiederfinden.</li>
</ul>`
            },
            {
                h2: 'Hinweis zum Urheberrecht',
                html: '<p>Speichern Sie Musik aus eigenen Videos oder aus solchen, an denen Sie die Rechte haben. Kommerzielle Songs sind urheberrechtlich geschützt – eine private Kopie Ihrer eigenen Aufnahme ist in Ordnung, fremde Musik zu veröffentlichen nicht.</p>'
            },
            {
                h2: 'Als Klingelton nutzen',
                html: '<p>30 Lieblingssekunden gefunden? <a href="/de/guides/video-to-ringtone-iphone/">Machen Sie daraus einen Klingelton</a>.</p>'
            }
        ],
        faq: [
            { q: 'Wie bekomme ich den Song aus einem Video auf mein iPhone?', a: `Senden Sie das Video an ${APP}, schneiden Sie um den Song zu und tippen Sie auf „Audio extrahieren“. Der Song wird als Audiodatei gesichert.` },
            { q: 'Kann ich den Song zu Apple Music hinzufügen?', a: 'Die Musik-App auf dem iPhone importiert keine lokalen Dateien direkt. Behalten Sie die Datei in Dateien oder synchronisieren Sie sie vom Mac oder PC.' },
            { q: 'Geht das auch mit Videos aus WhatsApp oder Nachrichten?', a: 'Ja. Sichern Sie das Video zuerst in Fotos oder Dateien und extrahieren Sie dann den Ton.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-ringtone-iphone', 'mov-to-mp3-iphone'],
        card: { title: 'Musik aus Video extrahieren', text: 'Den Song behalten, das Bild weglassen.' }
    }
);

guides.push(
    {
        slug: 'trim-audio-from-video-iphone',
        keyword: 'audio aus video ausschneiden iphone',
        eyebrow: 'Zuschneiden',
        title: 'Nur einen Teil des Tons aus Video ausschneiden (iPhone)',
        description: 'Nur 10 Sekunden Ton nötig? Video auf dem iPhone zuschneiden und genau diesen Teil als MP3 oder M4A extrahieren. Marker ziehen, anhören, exportieren – gratis.',
        h1: 'Nur einen Teil des Tons aus einem Video extrahieren (iPhone)',
        answer: `Um nur einen Teil des Tons aus einem Video zu extrahieren, öffnen Sie es in ${APP}, tippen auf „Video zuschneiden“, ziehen die gelben Start- und Endmarker um den gewünschten Abschnitt, tippen auf „Sichern“ und dann auf „Audio extrahieren“. Nur der gewählte Teil wird als MP3 oder M4A exportiert.`,
        intro: '<p>Meist brauchen Sie nicht die ganze Tonspur – nur ein Zitat, einen Refrain oder einen Soundeffekt. Wer vorher zuschneidet, bekommt eine kleine, saubere Datei.</p>',
        steps: [
            STEP.open,
            { name: '„Video zuschneiden“ tippen', text: 'Tippen Sie im Extrahieren-Bildschirm auf „Video zuschneiden“, um die Zeitleiste zu öffnen.', image: 2 },
            { name: 'Marker ziehen', text: 'Ziehen Sie den linken gelben Marker an den Anfang und den rechten an das Ende. Die Zeitangaben zeigen die genaue Auswahl. Anhören, dann „Sichern“.', image: 3 },
            { name: 'Ausschnitt extrahieren und sichern', text: 'Tippen Sie auf „Audio extrahieren“. Nur der zugeschnittene Teil wird exportiert – teilen oder in Dateien sichern.', image: 4 }
        ],
        sections: [
            {
                h2: 'Tipps für präzises Zuschneiden',
                html: `<ul>
<li>Vor und nach Sprache eine halbe Sekunde Luft lassen, damit keine Wörter abgeschnitten werden.</li>
<li>Für Klingeltöne höchstens 30 Sekunden auswählen.</li>
<li>Mehrere Ausschnitte aus einem Video? Einfach für jeden Teil wiederholen – alle Exporte bleiben in der Mediathek.</li>
</ul>`
            },
            {
                h2: 'Typische Ausschnitte',
                html: '<p>Ein Satz aus einer Rede, der Refrain eines Songs, ein Soundeffekt für den Schnitt, die ersten Worte Ihres Kindes oder die eine wichtige Minute aus einer langen Meeting-Aufnahme.</p>'
            }
        ],
        faq: [
            { q: 'Kann ich den Ton aus einem Video auf dem iPhone schneiden?', a: `Ja. Schneiden Sie das Video in ${APP} auf den gewünschten Abschnitt zu und extrahieren Sie – nur dieser Teil wird als Audio gesichert.` },
            { q: 'Verändert das Zuschneiden mein Originalvideo?', a: 'Nein. Das Original in Fotos bleibt unverändert, zugeschnitten wird nur die exportierte Audiodatei.' },
            { q: 'Kann ich mehrere Teile aus einem Video extrahieren?', a: 'Ja. Für jeden Teil erneut zuschneiden und extrahieren.' }
        ],
        related: ['video-to-ringtone-iphone', 'save-music-from-video-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Nur einen Teil extrahieren', text: 'Auf die Sekunde genau zuschneiden.' }
    },
    {
        slug: 'screen-recording-to-audio-iphone',
        keyword: 'ton aus bildschirmaufnahme speichern iphone',
        eyebrow: 'Bildschirmaufnahme',
        title: 'Ton aus einer Bildschirmaufnahme speichern auf dem iPhone',
        description: 'Bildschirmaufnahme vom iPhone in eine MP3- oder M4A-Datei umwandeln. Stumme Aufnahmen verstehen, den richtigen Teil zuschneiden, Ton sichern. Einfache Schritte.',
        h1: 'Ton aus einer Bildschirmaufnahme auf dem iPhone speichern',
        answer: `Bildschirmaufnahmen landen als Videos in Fotos. Um den Ton zu speichern, öffnen Sie die Aufnahme, tippen auf „Teilen“, wählen ${APP}, schneiden bei Bedarf zu und tippen auf „Audio extrahieren“. Ist die Datei stumm, wurde gar kein Ton aufgenommen – schalten Sie vor der Aufnahme das Mikrofon ein.`,
        intro: '<p>Bildschirmaufnahmen sind ein beliebter Weg, eine Sprachnachricht, ein Telefonat auf Lautsprecher oder einen Clip aus einer App festzuhalten. So behalten Sie nur den Ton.</p>',
        steps: [
            { name: 'Aufnahme in Fotos finden', text: 'Bildschirmaufnahmen finden Sie in Fotos unter „Medientypen“ → „Bildschirmaufnahmen“.', image: 2 },
            { name: 'An die App senden', text: 'Aufnahme öffnen, auf „Teilen“ tippen und die App wählen.', image: 2 },
            STEP.trim,
            { name: 'Extrahieren und sichern', text: 'Tippen Sie auf „Audio extrahieren“ und sichern Sie die MP3 oder M4A in Dateien.', image: 4 }
        ],
        sections: [
            {
                h2: 'Warum ist meine Bildschirmaufnahme stumm?',
                html: `<ul>
<li><strong>Mikrofon aus:</strong> Im Kontrollzentrum die Taste „Bildschirmaufnahme“ gedrückt halten und „Mikrofon“ aktivieren, damit Ihre Stimme aufgenommen wird.</li>
<li><strong>Stummmodus:</strong> Manche App-Töne sind im Stummmodus aus.</li>
<li><strong>Geschützte Inhalte:</strong> Viele Streaming-Apps blockieren Ton in Bildschirmaufnahmen – das ist so gewollt und lässt sich nicht umgehen.</li>
</ul>`
            },
            {
                h2: 'Privatsphäre respektieren',
                html: '<p>Nehmen Sie Gespräche und Telefonate nur mit Zustimmung aller Beteiligten auf und beachten Sie die geltenden Gesetze – in Deutschland ist das heimliche Aufnehmen nichtöffentlich gesprochener Worte strafbar.</p>'
            }
        ],
        faq: [
            { q: 'Kann ich eine Bildschirmaufnahme in MP3 umwandeln?', a: 'Ja. Bildschirmaufnahmen sind normale Videos – der Ton lässt sich als MP3 oder M4A extrahieren.' },
            { q: 'Wo speichert das iPhone Bildschirmaufnahmen?', a: 'In der Fotos-App unter „Medientypen“ → „Bildschirmaufnahmen“.' },
            { q: 'Warum höre ich in meiner Bildschirmaufnahme keinen Ton?', a: 'Das Mikrofon war aus oder die aufgenommene App blockiert Ton. Prüfen Sie vor dem Extrahieren, ob die Aufnahme mit Ton abspielt.' }
        ],
        related: ['extract-audio-from-video-iphone', 'trim-audio-from-video-iphone', 'lecture-video-to-audio-iphone'],
        card: { title: 'Ton aus Bildschirmaufnahme', text: 'Ton sichern und stumme Aufnahmen verstehen.' }
    },
    {
        slug: 'lecture-video-to-audio-iphone',
        keyword: 'vorlesung video in audio umwandeln',
        eyebrow: 'Studium',
        title: 'Vorlesungsvideo in Audio umwandeln auf dem iPhone (MP3)',
        description: 'Aufgezeichnete Vorlesungen, Webinare und Vorträge auf dem iPhone in MP3 umwandeln und unterwegs lernen. Kleine Dateien, offline hören, leicht teilen. Anleitung.',
        h1: 'Vorlesungsvideo in Audio umwandeln auf dem iPhone',
        answer: `Um ein Vorlesungsvideo in Audio umzuwandeln, öffnen Sie die Aufnahme in Fotos oder Dateien, tippen auf „Teilen“, wählen ${APP} und tippen auf „Audio extrahieren“. Sichern Sie die MP3 in Dateien und hören Sie offline – in der Bahn, im Fitnessstudio oder mit ausgeschaltetem Bildschirm, bei einem Bruchteil des Speichers.`,
        intro: '<p>Bei Vorlesungen zählt, was gesagt wird – nicht, was man sieht. Als Audio wird die Vorlesung zum Podcast, den Sie überall wiederholen können.</p>',
        steps: [
            STEP.share,
            { name: 'Vorlauf und Pausen wegschneiden (optional)', text: 'Tippen Sie auf „Video zuschneiden“, um Wartezeit vor Beginn und nicht benötigte Fragerunden zu entfernen.', image: 3 },
            STEP.extract,
            { name: 'In einem Vorlesungs-Ordner sichern', text: 'Tippen Sie auf „Teilen“ → „In Dateien sichern“ und legen Sie pro Kurs einen Ordner an.', image: 4 }
        ],
        sections: [
            {
                h2: 'Warum mit Audio lernen',
                html: `<ul>
<li><strong>Kleine Dateien:</strong> Eine Stunde Audio braucht nur einen Bruchteil des Platzes einer Stunde Video.</li>
<li><strong>Bildschirm aus:</strong> Mit gesperrtem Handy hören und Akku sparen.</li>
<li><strong>Überall:</strong> Pendeln, Spaziergang, Fitnessstudio – kein WLAN nötig.</li>
</ul>`
            },
            {
                h2: 'Zu Notizen machen',
                html: '<p>Sie wollen Text? Importieren Sie das Audio in Ihre gewohnte Transkriptions-App und durchsuchen Sie später das Transkript.</p>'
            },
            {
                h2: 'Regeln beachten',
                html: '<p>Viele Hochschulen erlauben Aufnahmen für den Eigengebrauch, aber keine Weitergabe. Prüfen Sie die Regeln Ihres Kurses, bevor Sie eine Vorlesung aufnehmen oder teilen.</p>'
            }
        ],
        faq: [
            { q: 'Kann ich ein Video auf dem iPhone mit ausgeschaltetem Bildschirm hören?', a: 'Die meisten Video-Player pausieren beim Sperren. Als MP3 können Sie mit ausgeschaltetem Bildschirm in Dateien oder jedem Audio-Player hören.' },
            { q: 'Funktioniert eine einstündige Vorlesung?', a: 'Ja. Lange Aufnahmen funktionieren genauso, sie dauern nur etwas länger.' },
            { q: 'Kann ich Zoom- oder Webinar-Aufzeichnungen umwandeln?', a: 'Ja, sobald die MP4-Aufzeichnung in Fotos oder Dateien auf dem iPhone liegt.' }
        ],
        related: ['screen-recording-to-audio-iphone', 'mp4-to-mp3-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Vorlesungsvideo in Audio', text: 'Unterwegs lernen mit kleinen MP3-Dateien.' }
    },
    {
        slug: 'video-to-ringtone-iphone',
        keyword: 'klingelton aus video iphone',
        eyebrow: 'Klingeltöne',
        title: 'Klingelton aus Video erstellen auf dem iPhone (iOS 26 & 18)',
        description: 'Jedes Video als iPhone-Klingelton: Ton auf 30 Sekunden kürzen, in Dateien sichern, „Teilen“ → „Als Klingelton verwenden“. iOS 26, plus GarageBand für iOS 18.',
        h1: 'Klingelton aus einem Video erstellen auf dem iPhone',
        answer: `Für einen Klingelton aus einem Video öffnen Sie es in ${APP}, kürzen auf höchstens 30 Sekunden, extrahieren als M4A oder MP3 und sichern in Dateien. Unter iOS 26 halten Sie die Datei in Dateien gedrückt, tippen auf „Teilen“ und wählen „Als Klingelton verwenden“. Unter älteren iOS-Versionen geht es über GarageBand.`,
        intro: '<p>Ein Lachen, ein Song von der Party, das Bellen Ihres Hundes – jeder Ton aus Ihren Videos kann Ihr Klingelton werden. Mit iOS 26 ist das einfach geworden, sobald Sie eine Audiodatei haben.</p>',
        steps: [
            STEP.share,
            { name: 'Auf 30 Sekunden kürzen', text: 'Tippen Sie auf „Video zuschneiden“ und wählen Sie höchstens 30 Sekunden – das Limit für Klingeltöne.', image: 3 },
            { name: 'Extrahieren und in Dateien sichern', text: 'Tippen Sie auf „Audio extrahieren“ (M4A oder MP3), dann „Teilen“ → „In Dateien sichern“.', image: 4 },
            { name: 'Als Klingelton verwenden', text: 'Halten Sie die Audiodatei in Dateien gedrückt, tippen Sie auf „Teilen“ → „Als Klingelton verwenden“ (iOS 26). Prüfen unter Einstellungen → Töne & Haptik → Klingelton.', image: 4 }
        ],
        sections: [
            {
                h2: 'Unter iOS 18: der Weg über GarageBand',
                html: `<ol>
<li>Ton wie oben extrahieren, zuschneiden und in Dateien sichern.</li>
<li>GarageBand öffnen, ein Projekt mit „Audio-Recorder“ starten und zur Spurenansicht wechseln.</li>
<li>Loop-Browser → „Dateien“ → „Objekte aus der App ‚Dateien‘ durchsuchen“ und das Audio auf eine Spur ziehen.</li>
<li>Zurück zu „Meine Songs“, Projekt gedrückt halten → „Teilen“ → „Klingelton“ → „Exportieren“.</li>
</ol>`
            },
            {
                h2: 'Warum „Als Klingelton verwenden“ fehlt',
                html: `<ul>
<li>Die Datei ist länger als 30 Sekunden – erneut zuschneiden.</li>
<li>Die Datei ist kein MP3 oder M4A.</li>
<li>Ihr iPhone hat noch nicht iOS 26 – nutzen Sie GarageBand.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Wie lang darf ein iPhone-Klingelton sein?', a: 'Eigene Klingeltöne aus Audiodateien dürfen bis zu 30 Sekunden lang sein.' },
            { q: 'Welches Format braucht ein iPhone-Klingelton?', a: 'Unter iOS 26 lassen sich MP3- oder M4A-Dateien unter 30 Sekunden mit „Als Klingelton verwenden“ festlegen.' },
            { q: 'Kann ich ein Video direkt als Klingelton nutzen?', a: 'Nein. Extrahieren Sie zuerst den Ton aus dem Video und legen Sie dann die Audiodatei als Klingelton fest.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-m4a-iphone', 'save-music-from-video-iphone'],
        card: { title: 'Klingelton aus Video', text: '„Als Klingelton verwenden“ in iOS 26 – in 4 Schritten.' }
    }
);
