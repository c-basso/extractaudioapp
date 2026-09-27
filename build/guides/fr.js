/**
 * Guides en français → /fr/guides/<slug>/
 * Slugs identiques à build/guides/en.js (liés par hreflang). Mots-clés : section « Français (FR) » de /keywords.md.
 * Apostrophes typographiques (’) uniquement — ne pas utiliser ' dans les chaînes.
 * Captures : 1 couverture · 2 extraction · 3 coupe · 4 menu Partager · 5 bibliothèque
 */

const APP = 'Extraire Audio de Vidéo⁺';

const STEP = {
    open: {
        name: 'Ouvrez l’app et choisissez une vidéo',
        text: `Lancez ${APP} et choisissez une vidéo dans Photos ou Fichiers. Plus rapide : dans Photos, touchez Partager sur la vidéo et choisissez l’app.`,
        image: 2
    },
    share: {
        name: 'Envoyez la vidéo à l’app',
        text: 'Ouvrez la vidéo dans Photos ou Fichiers, touchez Partager et choisissez l’app. Elle s’ouvre avec la vidéo déjà chargée.',
        image: 2
    },
    trim: {
        name: 'Coupez le passage voulu (facultatif)',
        text: 'Touchez « Couper la vidéo », faites glisser les repères jaunes au début et à la fin du passage souhaité, écoutez et touchez « Enregistrer ».',
        image: 3
    },
    extract: {
        name: 'Touchez « Extraire l’audio »',
        text: 'Touchez « Extraire l’audio ». La piste son est convertie sur votre iPhone en quelques secondes — rien n’est envoyé en ligne.',
        image: 2
    },
    save: {
        name: 'Enregistrez ou partagez le fichier',
        text: 'Le nouveau fichier audio apparaît dans la bibliothèque. Touchez Partager pour l’enregistrer dans Fichiers, l’envoyer par AirDrop ou vers n’importe quelle app.',
        image: 4
    }
};

const guides = [];
module.exports = guides;

guides.push(
    {
        slug: 'extract-audio-from-video-iphone',
        keyword: 'comment extraire le son d’une vidéo sur iphone',
        eyebrow: 'Guide de base',
        title: 'Comment extraire le son d’une vidéo sur iPhone (2026)',
        description: 'Extrayez le son de n’importe quelle vidéo sur iPhone en 4 touches : choisissez, coupez, « Extraire l’audio », enregistrez en MP3 ou M4A. Gratuit, sans envoi.',
        h1: 'Comment extraire le son d’une vidéo sur iPhone',
        answer: `Pour extraire le son d’une vidéo sur iPhone, ouvrez ${APP}, choisissez la vidéo dans Photos, coupez-la si besoin et touchez « Extraire l’audio ». L’app enregistre la piste son en MP3 ou M4A sur votre iPhone en quelques secondes. C’est gratuit pour commencer et ça fonctionne hors ligne : rien n’est envoyé.`,
        intro: '<p>L’app Photos n’a pas de bouton « garder seulement le son ». Vous pouvez créer un raccourci (voir <a href="/fr/guides/extract-audio-without-app-iphone/">la méthode sans application</a>) ou envoyer la vidéo sur un site, mais les deux sont lents quand vous voulez juste l’audio. Voici la voie la plus rapide : une app gratuite qui fonctionne directement depuis Partager.</p>',
        steps: [STEP.open, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Ce qu’il vous faut',
                html: `<ul>
<li>Un iPhone sous iOS 18.6 ou plus récent.</li>
<li>${APP}, gratuit sur l’App Store (environ 23 Mo).</li>
<li>Une vidéo avec du son : vidéos de l’appareil photo (MOV), téléchargements (MP4), enregistrements d’écran ou vidéos reçues dans Messages.</li>
</ul>`
            },
            {
                h2: 'Le plus rapide : depuis Partager',
                html: '<p>Inutile même d’ouvrir l’app. Dans <strong>Photos</strong> ou <strong>Fichiers</strong>, ouvrez la vidéo, touchez <strong>Partager</strong>, faites défiler la rangée d’apps et choisissez l’app. Si elle n’apparaît pas, touchez « Plus » et ajoutez-la une fois aux favoris : elle sera toujours à portée de main.</p>'
            },
            {
                h2: 'MP3 ou M4A : lequel choisir ?',
                html: '<p><strong>MP3</strong> se lit partout : Windows, Android, autoradio, sites web et logiciels de montage. <strong>M4A</strong> (AAC) est le format d’Apple : plus léger à qualité égale, idéal pour les sonneries, GarageBand et iMovie. Dans le doute, prenez MP3. Plus de détails : <a href="/fr/guides/convert-video-to-mp3-iphone/">vidéo en MP3</a> et <a href="/fr/guides/video-to-m4a-iphone/">vidéo en M4A</a>.</p>'
            },
            {
                h2: 'Où est enregistré le fichier audio ?',
                html: '<p>Chaque fichier extrait apparaît dans la bibliothèque de l’app avec sa durée, sa taille et sa date. Touchez <strong>Partager → Enregistrer dans Fichiers</strong> pour le ranger dans iCloud Drive ou « Sur mon iPhone », ou envoyez-le vers WhatsApp, Mail, Notes, GarageBand ou votre Mac par AirDrop.</p>'
            },
            {
                h2: 'En cas de problème',
                html: `<ul>
<li><strong>Le fichier est muet.</strong> La vidéo n’a pas de piste son — fréquent avec les enregistrements d’écran sans micro. Lisez-la d’abord dans Photos.</li>
<li><strong>La vidéo est dans iCloud.</strong> Photos télécharge d’abord l’original : attendez la fin du cercle de progression.</li>
<li><strong>Je n’ai besoin que de 20 secondes.</strong> Coupez avant d’extraire — voir <a href="/fr/guides/trim-audio-from-video-iphone/">extraire une partie du son</a>.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Est-ce gratuit d’extraire le son d’une vidéo sur iPhone ?', a: `Oui. ${APP} est gratuit à télécharger et l’extraction de base est gratuite. Des achats intégrés facultatifs débloquent des options.` },
            { q: 'L’extraction fait-elle perdre de la qualité ?', a: 'L’app convertit la piste son de la vidéo en MP3 ou M4A de haute qualité. Le son ne sera pas meilleur que l’original, mais identique à ce que vous entendez en lisant la vidéo.' },
            { q: 'Peut-on extraire le son d’une longue vidéo ?', a: 'Oui. Cours, concerts et réunions fonctionnent de la même façon, c’est juste un peu plus long. Si vous n’avez besoin que d’un passage, coupez d’abord.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'trim-audio-from-video-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Extraire le son d’une vidéo sur iPhone', text: 'La méthode en 4 touches, depuis Photos ou Partager.' }
    },
    {
        slug: 'convert-video-to-mp3-iphone',
        keyword: 'convertir une vidéo en mp3 sur iphone',
        eyebrow: 'Vidéo en MP3',
        title: 'Convertir une vidéo en MP3 sur iPhone — rapide et gratuit',
        description: 'Convertissez n’importe quelle vidéo iPhone en MP3 en quelques secondes avec un convertisseur gratuit. Depuis Photos, sans envoi, avec coupe avant export.',
        h1: 'Comment convertir une vidéo en MP3 sur iPhone',
        answer: `Ouvrez la vidéo dans Photos, touchez Partager et choisissez ${APP}. Coupez si besoin, touchez « Extraire l’audio » et exportez en MP3. Le MP3 reste sur votre iPhone : enregistrez-le dans Fichiers, envoyez-le par AirDrop ou vers n’importe quelle app. Sans ordinateur, sans envoi, sans compte.`,
        intro: '<p>Le MP3 est le format audio le plus compatible : il se lit dans toutes les voitures, sur tous les ordinateurs et dans tous les logiciels. Voici comment convertir une vidéo en MP3 sans lâcher votre iPhone.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Extrayez en MP3', text: 'Touchez « Extraire l’audio » et choisissez MP3. La conversion se fait sur votre iPhone.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'Pourquoi une app plutôt qu’un convertisseur en ligne ?',
                html: '<p>Les convertisseurs en ligne vous obligent à envoyer toute la vidéo, attendre, puis retélécharger le MP3 : lent en 4G/5G et risqué pour les vidéos privées. L’app fonctionne hors ligne, garde le fichier sur l’appareil et coupe avant de convertir. Comparatif : <a href="/fr/guides/extract-audio-online-vs-app/">en ligne ou app</a>.</p>'
            },
            {
                h2: 'Quelles vidéos peut-on convertir en MP3 ?',
                html: '<p>Tout ce que lit votre iPhone : vidéos de l’appareil photo (<a href="/fr/guides/mov-to-mp3-iphone/">MOV</a>), clips téléchargés (<a href="/fr/guides/mp4-to-mp3-iphone/">MP4</a>), <a href="/fr/guides/screen-recording-to-audio-iphone/">enregistrements d’écran</a> et vidéos reçues par Messages, WhatsApp ou AirDrop.</p>'
            },
            {
                h2: 'Que faire du MP3 ?',
                html: `<ul>
<li>L’enregistrer dans <strong>Fichiers</strong> pour l’écouter hors ligne.</li>
<li>L’envoyer sur votre Mac par <strong>AirDrop</strong>.</li>
<li>En faire une <a href="/fr/guides/video-to-ringtone-iphone/">sonnerie</a> de 30 secondes.</li>
<li>L’importer dans GarageBand, CapCut ou un éditeur de podcast.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'L’iPhone peut-il convertir une vidéo en MP3 sans application ?', a: 'Pas directement. Raccourcis n’enregistre le son qu’en M4A, pas en MP3. Pour un MP3 sur iPhone, il faut une app de conversion ou un site web.' },
            { q: 'La conversion en MP3 est-elle gratuite ?', a: `Oui, la conversion de base dans ${APP} est gratuite. Les achats intégrés ajoutent des options.` },
            { q: 'Faut-il du Wi-Fi pour convertir une vidéo en MP3 ?', a: 'Non. La conversion se fait sur l’iPhone, hors ligne. Seules les vidéos stockées dans iCloud doivent d’abord être téléchargées.' }
        ],
        related: ['mp4-to-mp3-iphone', 'mov-to-mp3-iphone', 'video-to-m4a-iphone'],
        card: { title: 'Convertir une vidéo en MP3', text: 'N’importe quelle vidéo iPhone en MP3 universel.' }
    },
    {
        slug: 'mp4-to-mp3-iphone',
        keyword: 'transformer mp4 en mp3 iphone',
        eyebrow: 'MP4 en MP3',
        title: 'Transformer un MP4 en MP3 sur iPhone — gratuit, sans envoi',
        description: 'Transformez un MP4 en MP3 sur iPhone gratuitement : ouvrez le fichier dans Fichiers ou Photos, touchez Partager, choisissez l’app. Hors ligne, avec coupe.',
        h1: 'Comment transformer un MP4 en MP3 sur iPhone',
        answer: `Pour transformer un MP4 en MP3 sur iPhone, ouvrez le fichier dans Fichiers ou Photos, touchez Partager et choisissez ${APP}. Coupez si vous le souhaitez, touchez « Extraire l’audio », choisissez MP3 et enregistrez. Gratuit, sur l’appareil et sans connexion.`,
        intro: '<p>Les MP4 arrivent souvent en téléchargement, en pièce jointe ou par AirDrop : ils sont donc souvent dans l’app <strong>Fichiers</strong> plutôt que dans Photos. L’app gère les deux.</p>',
        steps: [
            { name: 'Trouvez le fichier MP4', text: 'Ouvrez Fichiers (Téléchargements, iCloud Drive ou « Sur mon iPhone ») ou Photos et repérez le MP4.', image: 2 },
            { name: 'Envoyez-le à l’app', text: 'Maintenez le doigt sur le fichier, touchez Partager et choisissez l’app. Le MP4 s’ouvre dedans.', image: 2 },
            STEP.trim,
            { name: 'Enregistrez en MP3', text: 'Touchez « Extraire l’audio », choisissez MP3, puis Partager → Enregistrer dans Fichiers pour placer le MP3 à côté du MP4.', image: 4 }
        ],
        sections: [
            {
                h2: 'MP4 ou MP3, en une phrase',
                html: '<p>Le MP4 est un conteneur avec image <em>et</em> son ; le MP3 ne contient que le son. La conversion garde la piste audio et supprime l’image : le fichier devient beaucoup plus léger et se lit dans n’importe quel lecteur.</p>'
            },
            {
                h2: 'MP4 reçus sur WhatsApp, Telegram ou par e-mail',
                html: '<p>Enregistrez d’abord la pièce jointe : dans la conversation, ouvrez la vidéo → Partager → « Enregistrer la vidéo » (dans Photos) ou « Enregistrer dans Fichiers ». Suivez ensuite les étapes ci-dessus. Ne convertissez que des vidéos qui vous appartiennent ou dont vous avez les droits.</p>'
            },
            {
                h2: 'Plutôt du M4A ?',
                html: '<p>Pour les sonneries et les apps Apple, le M4A est un meilleur choix. Voir <a href="/fr/guides/video-to-m4a-iphone/">convertir une vidéo en M4A sur iPhone</a>.</p>'
            }
        ],
        faq: [
            { q: 'Peut-on convertir un MP4 en MP3 gratuitement sur iPhone ?', a: `Oui. ${APP} convertit gratuitement un MP4 en MP3 directement sur l’appareil. Des achats intégrés débloquent des options.` },
            { q: 'Le MP3 sera-t-il plus léger que le MP4 ?', a: 'Oui, généralement beaucoup plus, car la piste vidéo est supprimée et seul le son est conservé.' },
            { q: 'Peut-on convertir plusieurs MP4 ?', a: 'Oui. Convertissez-les les uns après les autres : chaque MP3 est conservé dans la bibliothèque de l’app.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'mov-to-mp3-iphone', 'extract-audio-online-vs-app'],
        card: { title: 'Transformer un MP4 en MP3', text: 'Les MP4 de Fichiers ou Photos en MP3.' }
    },
    {
        slug: 'mov-to-mp3-iphone',
        keyword: 'convertir mov en mp3 iphone',
        eyebrow: 'MOV en MP3',
        title: 'Convertir un MOV en MP3 sur iPhone — vidéos de la caméra',
        description: 'Les vidéos filmées avec l’iPhone sont des MOV. Convertissez-les en MP3 sur le téléphone : choisissez le clip, coupez, « Extraire l’audio ». Gratuit, hors ligne.',
        h1: 'Comment convertir un MOV en MP3 sur iPhone',
        answer: `Toutes les vidéos filmées avec l’iPhone sont des fichiers MOV. Pour convertir un MOV en MP3, ouvrez le clip dans Photos, touchez Partager, choisissez ${APP}, coupez si besoin et touchez « Extraire l’audio ». Le MP3 est enregistré sur votre iPhone, sans ordinateur.`,
        intro: '<p>MOV est le format vidéo d’Apple, celui de votre appareil photo : concerts, discours, un ami à la guitare, une voix que vous voulez garder. En MP3, vous l’écoutez partout.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'À quoi sert la conversion MOV en MP3',
                html: `<ul>
<li>Garder le son d’un concert ou d’un spectacle filmé.</li>
<li>Conserver un discours ou un toast en souvenir audio.</li>
<li>Envoyer une répétition au groupe sans vidéo énorme.</li>
<li>Écouter un <a href="/fr/guides/lecture-video-to-audio-iphone/">cours filmé</a> dans les transports.</li>
</ul>`
            },
            {
                h2: 'HEVC, 4K et mode Cinématique',
                html: '<p>Les vidéos HEVC et 4K se convertissent de la même façon. Seul le son est traité : même un très gros MOV donne un petit fichier audio.</p>'
            },
            {
                h2: 'Pourquoi pas sur l’ordinateur ?',
                html: '<p>Transférer un MOV de plusieurs gigaoctets sur l’ordinateur juste pour en retirer le son prend plus de temps que de le convertir sur l’iPhone. L’app le fait là où se trouve déjà la vidéo.</p>'
            }
        ],
        faq: [
            { q: 'Dans quel format l’iPhone filme-t-il ?', a: 'L’appareil photo de l’iPhone enregistre des fichiers MOV, généralement avec une vidéo HEVC ou H.264 et un son AAC.' },
            { q: 'Peut-on convertir un MOV en MP3 sans perte de qualité ?', a: 'L’app conserve la qualité de l’enregistrement d’origine : le MP3 sonne comme la vidéo à la lecture.' },
            { q: 'Peut-on convertir un MOV en M4A ?', a: 'Oui, choisissez le format M4A. Il convient bien aux sonneries et aux apps Apple.' }
        ],
        related: ['mp4-to-mp3-iphone', 'convert-video-to-mp3-iphone', 'save-music-from-video-iphone'],
        card: { title: 'MOV en MP3', text: 'Les vidéos de l’appareil photo en audio.' }
    }
);

guides.push(
    {
        slug: 'video-to-m4a-iphone',
        keyword: 'convertir vidéo en m4a iphone',
        eyebrow: 'Vidéo en M4A',
        title: 'Convertir une vidéo en M4A sur iPhone — MP4 et MOV en M4A',
        description: 'Enregistrez le son de vos vidéos en M4A pour les sonneries, GarageBand et les apps Apple. Gratuit, sur l’appareil, avec coupe. MP4 ou MOV en M4A en 4 touches.',
        h1: 'Comment convertir une vidéo en M4A sur iPhone',
        answer: `Pour convertir une vidéo en M4A sur iPhone, envoyez-la depuis Photos ou Fichiers avec Partager vers ${APP}, coupez si besoin, touchez « Extraire l’audio » et choisissez M4A. Vous obtenez un fichier M4A (AAC) compatible avec GarageBand, iMovie, les lecteurs audio et les sonneries.`,
        intro: '<p>Le M4A est le format audio d’Apple. À qualité comparable, il est plus léger que le MP3 — et c’est le format attendu par l’iPhone pour les sonneries et les projets GarageBand.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Extrayez en M4A', text: 'Touchez « Extraire l’audio » et choisissez M4A.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'M4A ou MP3 : quand choisir le M4A',
                html: `<table class="guide-table"><thead><tr><th></th><th>M4A (AAC)</th><th>MP3</th></tr></thead><tbody>
<tr><td>Idéal pour</td><td>iPhone, Mac, sonneries, GarageBand</td><td>Tout le reste : Windows, Android, voiture</td></tr>
<tr><td>Taille</td><td>Plus léger à qualité égale</td><td>Un peu plus lourd</td></tr>
<tr><td>Compatibilité</td><td>Très bonne</td><td>Universelle</td></tr>
</tbody></table>`
            },
            {
                h2: 'Utilisez le M4A comme sonnerie',
                html: '<p>Sous iOS 26, un M4A de moins de 30 secondes peut devenir une sonnerie directement depuis Fichiers. Guide complet : <a href="/fr/guides/video-to-ringtone-iphone/">faire une sonnerie à partir d’une vidéo</a>.</p>'
            },
            {
                h2: 'Ouvrez-le dans GarageBand ou iMovie',
                html: '<p>Enregistrez le M4A dans Fichiers puis importez-le via le navigateur de fichiers de GarageBand ou d’iMovie comme musique de fond, voix off ou effet sonore.</p>'
            }
        ],
        faq: [
            { q: 'Le M4A est-il meilleur que le MP3 ?', a: 'À débit égal, le M4A (AAC) sonne généralement aussi bien ou mieux et prend moins de place. Le MP3 est compatible avec davantage d’appareils.' },
            { q: 'Peut-on obtenir un M4A avec Raccourcis ?', a: 'Oui, l’action « Encoder le contenu multimédia » avec « Audio uniquement » produit un M4A. Mais elle ne coupe pas et ne fait pas de MP3 — l’app, si.' },
            { q: 'La conversion en M4A est-elle gratuite ?', a: `Oui, l’extraction de base de ${APP} est gratuite, export M4A compris.` }
        ],
        related: ['video-to-ringtone-iphone', 'convert-video-to-mp3-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Vidéo en M4A', text: 'Le format Apple pour sonneries et GarageBand.' }
    },
    {
        slug: 'extract-audio-without-app-iphone',
        keyword: 'extraire le son d’une vidéo iphone sans application',
        eyebrow: 'Raccourcis ou app',
        title: 'Extraire le son d’une vidéo iPhone sans application',
        description: 'Extrayez le son d’une vidéo sur iPhone sans rien installer, avec Raccourcis et « Encoder le contenu multimédia ». Réglages, limites et alternative.',
        h1: 'Comment extraire le son d’une vidéo sur iPhone sans application',
        answer: 'Sans app supplémentaire, on passe par un raccourci : ajoutez l’action « Encoder le contenu multimédia », activez « Audio uniquement », ajoutez « Enregistrer le fichier » et activez « Afficher dans la feuille de partage ». Partagez ensuite la vidéo vers ce raccourci. Résultat : M4A uniquement, sans coupe — pour du MP3 ou un extrait, une app est plus rapide.',
        intro: '<p>L’app gratuite Raccourcis d’Apple sait séparer le son d’une vidéo. La configuration prend environ deux minutes. Voici la recette exacte — et ses limites.</p>',
        steps: [
            { name: 'Créez un nouveau raccourci', text: 'Ouvrez Raccourcis, touchez + et nommez-le « Son de la vidéo ».', image: 2 },
            { name: 'Ajoutez « Encoder le contenu multimédia »', text: 'Touchez « Ajouter une action », cherchez « Encoder le contenu multimédia », ajoutez-la, dépliez ses options et activez « Audio uniquement ».', image: 2 },
            { name: 'Ajoutez « Enregistrer le fichier »', text: 'Ajoutez l’action « Enregistrer le fichier » pour que le résultat aille dans Fichiers.', image: 4 },
            { name: 'Affichez-le dans Partager', text: 'Ouvrez les réglages du raccourci (icône i), activez « Afficher dans la feuille de partage » et autorisez « Contenu multimédia ». Partagez ensuite une vidéo depuis Photos et choisissez le raccourci.', image: 4 }
        ],
        sections: [
            {
                h2: 'Les limites de la méthode Raccourcis',
                html: `<ul>
<li><strong>M4A uniquement</strong> — pas de MP3.</li>
<li><strong>Pas de coupe</strong> — toute la piste son est enregistrée.</li>
<li><strong>Pas de bibliothèque</strong> — les fichiers vont dans Fichiers, à retrouver et renommer à la main.</li>
<li>Sur les longues vidéos, le raccourci peut s’arrêter sans message clair.</li>
</ul>`
            },
            {
                h2: 'L’alternative en une touche',
                html: `<p>${APP} fait la même chose avec la coupe, le choix MP3 ou M4A et une bibliothèque de tous vos fichiers extraits. L’app est aussi dans le menu Partager : c’est aussi rapide, et il n’y a rien à configurer.</p>`
            },
            {
                h2: 'Autres solutions sans application',
                html: '<p>iMovie et GarageBand peuvent aussi séparer le son, mais avec plus d’étapes et des formats d’export limités. Les sites web fonctionnent, mais il faut envoyer la vidéo — voir <a href="/fr/guides/extract-audio-online-vs-app/">en ligne ou app</a>.</p>'
            }
        ],
        faq: [
            { q: 'L’iPhone a-t-il un extracteur audio intégré ?', a: 'Pas sous forme de bouton dans Photos. Le plus proche est l’action « Encoder le contenu multimédia » avec « Audio uniquement » dans l’app Raccourcis.' },
            { q: 'Dans quel format le raccourci enregistre-t-il ?', a: 'En M4A. Raccourcis ne peut pas enregistrer en MP3.' },
            { q: 'Le raccourci peut-il couper le son ?', a: `Pas facilement. Pour couper, utilisez une app avec une timeline comme ${APP}.` }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-online-vs-app', 'video-to-m4a-iphone'],
        card: { title: 'Sans application (Raccourcis)', text: 'La recette gratuite de Raccourcis et ses limites.' }
    },
    {
        slug: 'extract-audio-online-vs-app',
        keyword: 'extraire son d’une vidéo en ligne',
        eyebrow: 'En ligne ou app',
        title: 'Extraire le son d’une vidéo en ligne ou avec une app iPhone',
        description: 'Extraire le son d’une vidéo en ligne ou avec une app ? Confidentialité, vitesse, limites et coupe sur iPhone comparées — et pourquoi l’app gagne sur mobile.',
        h1: 'Extraire le son d’une vidéo en ligne (gratuit) ou avec une app iPhone',
        answer: `Les sites en ligne fonctionnent sur tout appareil, mais exigent d’envoyer toute la vidéo, d’attendre puis de télécharger le résultat — lent en 4G/5G et peu confidentiel. Sur iPhone, une app comme ${APP} est plus rapide, fonctionne hors ligne, garde vos vidéos sur l’appareil et coupe avant l’export.`,
        intro: '<p>En cherchant « extraire son d’une vidéo en ligne », on trouve des dizaines de sites gratuits. Sur un ordinateur avec une bonne connexion, c’est pratique. Sur iPhone, le calcul est différent.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Comparatif',
                html: `<table class="guide-table"><thead><tr><th></th><th>Site en ligne</th><th>${APP}</th></tr></thead><tbody>
<tr><td>Confidentialité</td><td>Vidéo envoyée sur un serveur tiers</td><td>Reste sur l’iPhone</td></tr>
<tr><td>Vitesse</td><td>Envoi + file d’attente + téléchargement</td><td>Quelques secondes, sur l’appareil</td></tr>
<tr><td>Hors ligne</td><td>Non</td><td>Oui</td></tr>
<tr><td>Limite de taille</td><td>Fréquente en version gratuite</td><td>Seulement le stockage</td></tr>
<tr><td>Coupe</td><td>Parfois</td><td>Timeline intégrée</td></tr>
<tr><td>Publicités et pop-ups</td><td>Fréquents</td><td>Aucun pop-up web</td></tr>
<tr><td>Prix</td><td>Gratuit avec limites</td><td>Fonctions de base gratuites</td></tr>
</tbody></table>`
            },
            {
                h2: 'Quand un site en ligne est utile',
                html: '<p>Si vous êtes sur un PC Windows et que la vidéo s’y trouve déjà, un site fiable fera l’affaire. Mais n’y envoyez rien de personnel : vidéos de famille, réunions, documents clients.</p>'
            },
            {
                h2: 'Quand l’app est préférable',
                html: '<p>Si la vidéo est sur votre iPhone, l’app l’emporte : pas d’envoi en données mobiles, pas d’attente, pas de téléchargement, et vous coupez exactement le passage voulu.</p>'
            }
        ],
        faq: [
            { q: 'Est-il sûr d’extraire le son d’une vidéo en ligne ?', a: 'Cela dépend du site. Votre vidéo se retrouve sur un serveur tiers : à éviter pour les contenus privés. Les apps qui travaillent sur l’appareil n’envoient rien.' },
            { q: 'Existe-t-il une solution gratuite sur iPhone sans envoi ?', a: `Oui. ${APP} est gratuit pour commencer et convertit sur l’appareil : votre vidéo n’est jamais envoyée.` },
            { q: 'Pourquoi la conversion en ligne est-elle si lente sur mobile ?', a: 'Parce qu’il faut d’abord envoyer toute la vidéo. Les vidéos du téléphone sont lourdes et l’envoi en données mobiles est bien plus lent que le téléchargement.' }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-without-app-iphone', 'mp4-to-mp3-iphone'],
        card: { title: 'En ligne ou app', text: 'Confidentialité, vitesse et limites comparées.' }
    },
    {
        slug: 'save-music-from-video-iphone',
        keyword: 'extraire la musique d’une vidéo iphone',
        eyebrow: 'Musique',
        title: 'Extraire la musique d’une vidéo sur iPhone (MP3 ou M4A)',
        description: 'Enregistrez la chanson ou la musique de fond d’une vidéo sur iPhone en MP3 ou M4A. Coupez pile sur le morceau, écoutez hors ligne, partagez. Guide rapide.',
        h1: 'Comment extraire la musique d’une vidéo sur iPhone',
        answer: `Pour extraire la musique d’une vidéo sur iPhone, ouvrez-la dans Photos, touchez Partager, choisissez ${APP}, placez les repères de coupe autour de la chanson et touchez « Extraire l’audio ». La musique est enregistrée en MP3 ou M4A, à écouter hors ligne dans Fichiers ou à partager avec n’importe quelle app.`,
        intro: '<p>Une chanson de mariage, la reprise d’un ami, la musique de votre propre montage : parfois, c’est le son qui compte. Voici comment l’enregistrer comme fichier musical à part.</p>',
        steps: [STEP.share, { name: 'Coupez autour de la chanson', text: 'Touchez « Couper la vidéo » et faites glisser les repères jaunes pour ne garder que la chanson. Écoutez le début et la fin.', image: 3 }, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Astuces pour un meilleur son',
                html: `<ul>
<li>Coupez les discussions et applaudissements au début et à la fin.</li>
<li>MP3 pour l’autoradio et les anciens lecteurs, M4A pour les appareils Apple.</li>
<li>Renommez le fichier dans Fichiers (appui long → Renommer) pour le retrouver.</li>
</ul>`
            },
            {
                h2: 'À propos des droits d’auteur',
                html: '<p>N’enregistrez que la musique de vos propres vidéos ou de celles dont vous avez les droits. Les chansons commerciales sont protégées : une copie personnelle de votre propre enregistrement, oui ; republier la musique d’autrui, non.</p>'
            },
            {
                h2: 'Faites-en votre sonnerie',
                html: '<p>Vous avez trouvé vos 30 secondes préférées ? <a href="/fr/guides/video-to-ringtone-iphone/">Transformez-les en sonnerie</a>.</p>'
            }
        ],
        faq: [
            { q: 'Comment récupérer la chanson d’une vidéo sur mon iPhone ?', a: `Envoyez la vidéo à ${APP}, coupez autour de la chanson et touchez « Extraire l’audio ». La chanson est enregistrée comme fichier audio.` },
            { q: 'Peut-on ajouter la chanson à Apple Music ?', a: 'L’app Musique de l’iPhone n’importe pas directement les fichiers locaux. Gardez le fichier dans Fichiers ou synchronisez-le depuis un Mac ou un PC.' },
            { q: 'Ça marche avec les vidéos reçues sur WhatsApp ou Messages ?', a: 'Oui. Enregistrez d’abord la vidéo dans Photos ou Fichiers, puis extrayez le son.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-ringtone-iphone', 'mov-to-mp3-iphone'],
        card: { title: 'Extraire la musique d’une vidéo', text: 'Gardez la chanson, laissez l’image.' }
    }
);

guides.push(
    {
        slug: 'trim-audio-from-video-iphone',
        keyword: 'extraire une partie du son d’une vidéo iphone',
        eyebrow: 'Coupe',
        title: 'Extraire seulement une partie du son d’une vidéo sur iPhone',
        description: 'Besoin de 10 secondes de son seulement ? Coupez la vidéo sur iPhone et extrayez juste ce passage en MP3 ou M4A. Glissez les repères, écoutez, exportez. Gratuit.',
        h1: 'Comment extraire seulement une partie du son d’une vidéo sur iPhone',
        answer: `Pour extraire une partie du son d’une vidéo sur iPhone, ouvrez-la dans ${APP}, touchez « Couper la vidéo », faites glisser les repères jaunes de début et de fin autour du passage, touchez « Enregistrer » puis « Extraire l’audio ». Seule la partie sélectionnée est exportée en MP3 ou M4A.`,
        intro: '<p>La plupart du temps, vous n’avez pas besoin de toute la piste : juste une citation, un refrain ou un effet sonore. En coupant d’abord, vous obtenez un fichier court et propre.</p>',
        steps: [
            STEP.open,
            { name: 'Touchez « Couper la vidéo »', text: 'Sur l’écran d’extraction, touchez « Couper la vidéo » pour ouvrir la timeline.', image: 2 },
            { name: 'Faites glisser les repères', text: 'Amenez le repère jaune de gauche au début et celui de droite à la fin. Les durées affichent la sélection exacte. Écoutez, puis touchez « Enregistrer ».', image: 3 },
            { name: 'Extrayez et enregistrez l’extrait', text: 'Touchez « Extraire l’audio ». Seule la partie coupée est exportée ; partagez-la ou enregistrez-la dans Fichiers.', image: 4 }
        ],
        sections: [
            {
                h2: 'Conseils pour une coupe précise',
                html: `<ul>
<li>Laissez une demi-seconde avant et après la voix pour ne pas couper de mots.</li>
<li>Pour une sonnerie, sélectionnez 30 secondes au maximum.</li>
<li>Plusieurs extraits d’une même vidéo ? Recommencez la coupe pour chacun : tout reste dans la bibliothèque.</li>
</ul>`
            },
            {
                h2: 'Ce qu’on coupe le plus souvent',
                html: '<p>Une phrase d’un discours, le refrain d’une chanson, un effet sonore pour un montage, les premiers mots de votre enfant ou la minute importante d’une longue réunion.</p>'
            }
        ],
        faq: [
            { q: 'Peut-on couper le son d’une vidéo sur iPhone ?', a: `Oui. Coupez la vidéo au passage voulu dans ${APP}, puis extrayez : seule cette partie est enregistrée en audio.` },
            { q: 'La coupe modifie-t-elle la vidéo d’origine ?', a: 'Non. L’original dans Photos reste intact ; seul le fichier audio exporté est coupé.' },
            { q: 'Peut-on extraire plusieurs passages d’une même vidéo ?', a: 'Oui. Coupez et extrayez de nouveau pour chaque passage.' }
        ],
        related: ['video-to-ringtone-iphone', 'save-music-from-video-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Extraire une partie du son', text: 'Coupez à la seconde près.' }
    },
    {
        slug: 'screen-recording-to-audio-iphone',
        keyword: 'récupérer le son d’un enregistrement d’écran iphone',
        eyebrow: 'Enregistrement d’écran',
        title: 'Récupérer le son d’un enregistrement d’écran sur iPhone',
        description: 'Transformez un enregistrement d’écran iPhone en fichier MP3 ou M4A. Comprenez pourquoi il est muet, coupez le bon passage et enregistrez le son. Étapes simples.',
        h1: 'Comment récupérer le son d’un enregistrement d’écran sur iPhone',
        answer: `Les enregistrements d’écran de l’iPhone sont enregistrés comme vidéos dans Photos. Pour récupérer le son, ouvrez l’enregistrement, touchez Partager, choisissez ${APP}, coupez si besoin et touchez « Extraire l’audio ». Si le fichier est muet, aucun son n’a été capté : activez le micro avant d’enregistrer.`,
        intro: '<p>L’enregistrement d’écran est un moyen courant de garder un message vocal, un appel sur haut-parleur ou un extrait d’app. Voici comment ne garder que le son.</p>',
        steps: [
            { name: 'Trouvez l’enregistrement dans Photos', text: 'Les enregistrements d’écran se trouvent dans Photos → « Types de médias » → « Enregistrements de l’écran ».', image: 2 },
            { name: 'Envoyez-le à l’app', text: 'Ouvrez l’enregistrement, touchez Partager et choisissez l’app.', image: 2 },
            STEP.trim,
            { name: 'Extrayez et enregistrez', text: 'Touchez « Extraire l’audio » et enregistrez le MP3 ou M4A dans Fichiers.', image: 4 }
        ],
        sections: [
            {
                h2: 'Pourquoi mon enregistrement d’écran est-il muet ?',
                html: `<ul>
<li><strong>Micro coupé :</strong> dans le Centre de contrôle, maintenez le bouton d’enregistrement de l’écran et activez « Microphone » pour enregistrer votre voix.</li>
<li><strong>Mode silencieux :</strong> certaines apps ne produisent aucun son en mode silencieux.</li>
<li><strong>Contenu protégé :</strong> de nombreuses apps de streaming bloquent le son dans les enregistrements d’écran — c’est voulu et impossible à contourner.</li>
</ul>`
            },
            {
                h2: 'Respectez la vie privée',
                html: '<p>N’enregistrez et ne conservez des appels ou conversations qu’avec l’accord de toutes les personnes concernées, et dans le respect de la loi de votre pays.</p>'
            }
        ],
        faq: [
            { q: 'Peut-on convertir un enregistrement d’écran en MP3 ?', a: 'Oui. Un enregistrement d’écran est une vidéo normale : son audio peut être enregistré en MP3 ou M4A.' },
            { q: 'Où l’iPhone enregistre-t-il les enregistrements d’écran ?', a: 'Dans l’app Photos, sous « Types de médias » → « Enregistrements de l’écran ».' },
            { q: 'Pourquoi n’entend-on rien dans mon enregistrement d’écran ?', a: 'Le micro était coupé ou l’app enregistrée bloque le son. Vérifiez que l’enregistrement a du son avant d’extraire.' }
        ],
        related: ['extract-audio-from-video-iphone', 'trim-audio-from-video-iphone', 'lecture-video-to-audio-iphone'],
        card: { title: 'Son d’un enregistrement d’écran', text: 'Gardez le son et comprenez pourquoi il manque.' }
    },
    {
        slug: 'lecture-video-to-audio-iphone',
        keyword: 'convertir un cours vidéo en audio',
        eyebrow: 'Études',
        title: 'Convertir un cours vidéo en audio sur iPhone (MP3)',
        description: 'Transformez cours filmés, webinaires et conférences en MP3 sur iPhone pour réviser partout. Fichiers légers, écoute hors ligne, partage facile. Guide pas à pas.',
        h1: 'Comment convertir un cours vidéo en audio sur iPhone',
        answer: `Pour convertir un cours vidéo en audio, ouvrez l’enregistrement dans Photos ou Fichiers, touchez Partager, choisissez ${APP} puis touchez « Extraire l’audio ». Enregistrez le MP3 dans Fichiers et écoutez-le hors ligne — dans les transports, à la salle de sport ou écran éteint — en prenant une fraction de l’espace.`,
        intro: '<p>Dans un cours, c’est ce qui est dit qui compte, pas ce qu’on voit. En audio, le cours devient un podcast à réécouter n’importe où.</p>',
        steps: [
            STEP.share,
            { name: 'Retirez l’attente et les pauses (facultatif)', text: 'Touchez « Couper la vidéo » pour enlever l’attente avant le début et les questions dont vous n’avez pas besoin.', image: 3 },
            STEP.extract,
            { name: 'Rangez-le dans un dossier Cours', text: 'Touchez Partager → Enregistrer dans Fichiers et créez un dossier par matière pour tout retrouver facilement.', image: 4 }
        ],
        sections: [
            {
                h2: 'Pourquoi réviser en audio',
                html: `<ul>
<li><strong>Fichiers légers :</strong> une heure d’audio prend une fraction de l’espace d’une heure de vidéo.</li>
<li><strong>Écran éteint :</strong> écoutez téléphone verrouillé et économisez la batterie.</li>
<li><strong>Partout :</strong> transports, balade, salle de sport — sans Wi-Fi.</li>
</ul>`
            },
            {
                h2: 'Transformez-le en notes',
                html: '<p>Besoin de texte ? Importez l’audio dans l’app de transcription que vous utilisez déjà et faites des recherches dans la transcription.</p>'
            },
            {
                h2: 'Vérifiez le règlement',
                html: '<p>Beaucoup d’universités autorisent l’enregistrement pour usage personnel, mais pas sa diffusion. Vérifiez les règles de votre cours avant d’enregistrer ou de partager.</p>'
            }
        ],
        faq: [
            { q: 'Peut-on écouter une vidéo sur iPhone écran éteint ?', a: 'La plupart des lecteurs vidéo se mettent en pause au verrouillage. Convertie en MP3, la vidéo s’écoute écran éteint dans Fichiers ou n’importe quel lecteur audio.' },
            { q: 'Un cours d’une heure, ça marche ?', a: 'Oui. Les longs enregistrements fonctionnent pareil, c’est juste un peu plus long.' },
            { q: 'Peut-on convertir des enregistrements Zoom ou de webinaires ?', a: 'Oui, dès que l’enregistrement MP4 est dans Photos ou Fichiers sur votre iPhone.' }
        ],
        related: ['screen-recording-to-audio-iphone', 'mp4-to-mp3-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Cours vidéo en audio', text: 'Révisez partout avec des MP3 légers.' }
    },
    {
        slug: 'video-to-ringtone-iphone',
        keyword: 'faire une sonnerie avec une vidéo iphone',
        eyebrow: 'Sonneries',
        title: 'Faire une sonnerie à partir d’une vidéo sur iPhone (iOS 26)',
        description: 'Transformez une vidéo en sonnerie iPhone : coupez le son à 30 s, enregistrez-le dans Fichiers, puis Partager → « Utiliser comme sonnerie ». iOS 26, GarageBand.',
        h1: 'Comment faire une sonnerie à partir d’une vidéo sur iPhone',
        answer: `Pour faire une sonnerie à partir d’une vidéo, ouvrez-la dans ${APP}, coupez à 30 secondes maximum, extrayez en M4A ou MP3 et enregistrez dans Fichiers. Sous iOS 26, maintenez le fichier dans Fichiers, touchez Partager et choisissez « Utiliser comme sonnerie ». Sur les versions plus anciennes, importez le son dans GarageBand et exportez-le en sonnerie.`,
        intro: '<p>Un rire, une chanson de soirée, l’aboiement de votre chien : n’importe quel son de vos vidéos peut devenir votre sonnerie. Avec iOS 26, c’est très simple dès que vous avez un fichier audio.</p>',
        steps: [
            STEP.share,
            { name: 'Coupez à 30 secondes', text: 'Touchez « Couper la vidéo » et sélectionnez 30 secondes au maximum — la limite des sonneries.', image: 3 },
            { name: 'Extrayez et enregistrez dans Fichiers', text: 'Touchez « Extraire l’audio » (M4A ou MP3), puis Partager → Enregistrer dans Fichiers.', image: 4 },
            { name: 'Utiliser comme sonnerie', text: 'Dans Fichiers, maintenez le fichier audio, touchez Partager → « Utiliser comme sonnerie » (iOS 26). Vérifiez dans Réglages → Sons et vibrations → Sonnerie.', image: 4 }
        ],
        sections: [
            {
                h2: 'Sous iOS 18 : la méthode GarageBand',
                html: `<ol>
<li>Extrayez et coupez le son comme ci-dessus, puis enregistrez-le dans Fichiers.</li>
<li>Ouvrez GarageBand, créez un projet « Enregistreur audio » et passez en vue Pistes.</li>
<li>Ouvrez le navigateur de boucles → « Fichiers » → « Parcourir les éléments de l’app Fichiers » et glissez l’audio sur une piste.</li>
<li>Revenez à « Mes morceaux », maintenez le projet → Partager → Sonnerie → Exporter.</li>
</ol>`
            },
            {
                h2: 'Pourquoi « Utiliser comme sonnerie » n’apparaît pas',
                html: `<ul>
<li>Le fichier dure plus de 30 secondes — coupez-le à nouveau.</li>
<li>Le fichier n’est ni en MP3 ni en M4A.</li>
<li>Votre iPhone n’est pas encore sous iOS 26 — utilisez GarageBand.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Quelle durée pour une sonnerie iPhone ?', a: 'Jusqu’à 30 secondes pour les sonneries personnalisées créées à partir de fichiers audio.' },
            { q: 'Quel format faut-il pour une sonnerie iPhone ?', a: 'Sous iOS 26, les fichiers MP3 ou M4A de moins de 30 secondes peuvent être définis avec « Utiliser comme sonnerie ».' },
            { q: 'Peut-on utiliser directement une vidéo comme sonnerie ?', a: 'Non. Extrayez d’abord le son de la vidéo, puis définissez le fichier audio comme sonnerie.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-m4a-iphone', 'save-music-from-video-iphone'],
        card: { title: 'Sonnerie à partir d’une vidéo', text: '« Utiliser comme sonnerie » sous iOS 26, en 4 étapes.' }
    }
);
