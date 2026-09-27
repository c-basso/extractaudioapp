/**
 * Guías en español → /es/guides/<slug>/
 * Slugs idénticos a build/guides/en.js (enlazados con hreflang). Keywords: sección «Español (ES)» en /keywords.md.
 * Capturas: 1 portada · 2 extracción · 3 recorte · 4 menú Compartir · 5 biblioteca
 */

const APP = 'Extraer Audio de Video⁺';

const STEP = {
    open: {
        name: 'Abre la app y elige un vídeo',
        text: `Abre ${APP} y elige un vídeo de Fotos o de Archivos. Más rápido: en Fotos, toca «Compartir» en el vídeo y elige la app.`,
        image: 2
    },
    share: {
        name: 'Envía el vídeo a la app',
        text: 'Abre el vídeo en Fotos o Archivos, toca «Compartir» y elige la app. Se abrirá con el vídeo ya cargado.',
        image: 2
    },
    trim: {
        name: 'Recorta la parte que necesitas (opcional)',
        text: 'Toca «Recortar vídeo», arrastra los marcadores amarillos al inicio y al final de la parte que quieres, escúchala y toca «Guardar».',
        image: 3
    },
    extract: {
        name: 'Toca «Extraer audio»',
        text: 'Toca «Extraer audio». La pista de sonido se convierte en tu iPhone en segundos; no se sube nada.',
        image: 2
    },
    save: {
        name: 'Guarda o comparte el audio',
        text: 'El nuevo archivo de audio aparece en tu biblioteca. Toca «Compartir» para guardarlo en Archivos, enviarlo por AirDrop o a cualquier app.',
        image: 4
    }
};

const guides = [];
module.exports = guides;

guides.push(
    {
        slug: 'extract-audio-from-video-iphone',
        keyword: 'como extraer el audio de un video en iphone',
        eyebrow: 'Guía básica',
        title: 'Cómo extraer el audio de un vídeo en iPhone (guía 2026)',
        description: 'Extrae el audio de cualquier vídeo en iPhone en 4 toques: elige el vídeo, recorta, toca «Extraer audio» y guárdalo en MP3 o M4A. Gratis y sin subir nada.',
        h1: 'Cómo extraer el audio de un vídeo en iPhone',
        answer: `Para extraer el audio de un vídeo en iPhone, abre ${APP}, elige el vídeo en Fotos, recórtalo si quieres y toca «Extraer audio». La app guarda la pista de sonido en MP3 o M4A en tu iPhone en segundos. Es gratis para empezar y funciona sin conexión: no se sube nada.`,
        intro: '<p>La app Fotos no tiene un botón de «guardar solo el sonido». Puedes crear un atajo (ver <a href="/es/guides/extract-audio-without-app-iphone/">el método sin app</a>) o subir el vídeo a una web, pero ambas opciones son lentas cuando solo quieres el audio. Aquí tienes la vía más rápida: una app gratis que funciona directamente desde «Compartir».</p>',
        steps: [STEP.open, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Qué necesitas',
                html: `<ul>
<li>Un iPhone con iOS 18.6 o posterior.</li>
<li>${APP}, gratis en el App Store (unos 23 MB).</li>
<li>Un vídeo con sonido: grabaciones de la cámara (MOV), descargas (MP4), grabaciones de pantalla o vídeos de Mensajes.</li>
</ul>`
            },
            {
                h2: 'Lo más rápido: desde «Compartir»',
                html: '<p>Ni siquiera tienes que abrir la app. En <strong>Fotos</strong> o <strong>Archivos</strong>, abre el vídeo, toca <strong>«Compartir»</strong>, desliza la fila de apps y elige la app. Si no aparece, toca «Más» y añádela a favoritos una vez; a partir de ahí estará siempre a mano.</p>'
            },
            {
                h2: '¿MP3 o M4A?',
                html: '<p><strong>MP3</strong> se reproduce en todas partes: Windows, Android, el coche, webs y editores. <strong>M4A</strong> (AAC) es el formato propio de Apple: ocupa menos con la misma calidad y es ideal para tonos de llamada, GarageBand e iMovie. Si dudas, elige MP3. Más en <a href="/es/guides/convert-video-to-mp3-iphone/">vídeo a MP3</a> y <a href="/es/guides/video-to-m4a-iphone/">vídeo a M4A</a>.</p>'
            },
            {
                h2: '¿Dónde se guarda el audio?',
                html: '<p>Cada archivo extraído aparece en la biblioteca de la app con su duración, tamaño y fecha. Desde ahí toca <strong>«Compartir» → «Guardar en Archivos»</strong> para guardarlo en iCloud Drive o «En mi iPhone», o envíalo a WhatsApp, Mail, Notas, GarageBand o a tu Mac por AirDrop.</p>'
            },
            {
                h2: 'Si algo falla',
                html: `<ul>
<li><strong>El audio sale en silencio.</strong> El vídeo no tiene pista de sonido; pasa con grabaciones de pantalla sin micrófono. Reprodúcelo antes en Fotos.</li>
<li><strong>El vídeo está en iCloud.</strong> Fotos descarga primero el original: espera a que termine el círculo de progreso.</li>
<li><strong>Solo necesito 20 segundos.</strong> Recorta antes de extraer; ver <a href="/es/guides/trim-audio-from-video-iphone/">extraer solo una parte del audio</a>.</li>
</ul>`
            }
        ],
        faq: [
            { q: '¿Es gratis extraer el audio de un vídeo en iPhone?', a: `Sí. ${APP} se descarga gratis y la extracción básica es gratuita. Las compras dentro de la app desbloquean funciones extra.` },
            { q: '¿Se pierde calidad al extraer el audio?', a: 'La app convierte la pista de sonido del vídeo en un MP3 o M4A de alta calidad. No sonará mejor que el original, pero sí igual que al reproducir el vídeo.' },
            { q: '¿Puedo extraer el audio de un vídeo largo?', a: 'Sí. Clases, conciertos y reuniones funcionan igual, solo tardan un poco más. Si necesitas una parte, recorta primero.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'trim-audio-from-video-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Extraer audio de un vídeo en iPhone', text: 'El método en 4 toques, desde Fotos o «Compartir».' }
    },
    {
        slug: 'convert-video-to-mp3-iphone',
        keyword: 'convertir video a mp3 iphone',
        eyebrow: 'Vídeo a MP3',
        title: 'Cómo convertir un vídeo a MP3 en iPhone — rápido y gratis',
        description: 'Convierte cualquier vídeo del iPhone a MP3 en segundos con un conversor gratis. Desde Fotos, sin subir archivos y con recorte antes de exportar. Paso a paso.',
        h1: 'Cómo convertir un vídeo a MP3 en iPhone',
        answer: `Abre el vídeo en Fotos, toca «Compartir» y elige ${APP}. Recorta si hace falta, toca «Extraer audio» y exporta en MP3. El MP3 se queda en tu iPhone y puedes guardarlo en Archivos, enviarlo por AirDrop o a cualquier app. Sin ordenador, sin subidas y sin cuenta.`,
        intro: '<p>El MP3 es el formato de audio más compatible: suena en cualquier coche, ordenador y editor. Así conviertes cualquier vídeo del iPhone a MP3 sin soltar el móvil.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Extrae en MP3', text: 'Toca «Extraer audio» y elige MP3. La conversión se hace en tu iPhone.', image: 2 }, STEP.save],
        sections: [
            {
                h2: '¿Por qué una app y no un conversor web?',
                html: '<p>Los conversores online te obligan a subir el vídeo entero, esperar y volver a descargar el MP3: lento con datos móviles y arriesgado para vídeos privados. La app funciona sin conexión, deja el archivo en tu dispositivo y recorta antes de convertir. Comparativa: <a href="/es/guides/extract-audio-online-vs-app/">online o app</a>.</p>'
            },
            {
                h2: '¿Qué vídeos puedo pasar a MP3?',
                html: '<p>Todo lo que reproduce tu iPhone: grabaciones de la cámara (<a href="/es/guides/mov-to-mp3-iphone/">MOV</a>), clips descargados (<a href="/es/guides/mp4-to-mp3-iphone/">MP4</a>), <a href="/es/guides/screen-recording-to-audio-iphone/">grabaciones de pantalla</a> y vídeos de Mensajes, WhatsApp o AirDrop.</p>'
            },
            {
                h2: 'Qué hacer con el MP3',
                html: `<ul>
<li>Guardarlo en <strong>Archivos</strong> y escucharlo sin conexión.</li>
<li>Enviarlo a tu Mac por <strong>AirDrop</strong>.</li>
<li>Convertir 30 segundos en un <a href="/es/guides/video-to-ringtone-iphone/">tono de llamada</a>.</li>
<li>Llevarlo a GarageBand, CapCut o un editor de pódcast.</li>
</ul>`
            }
        ],
        faq: [
            { q: '¿El iPhone puede pasar un vídeo a MP3 sin app?', a: 'No directamente. Atajos solo guarda el audio en M4A, no en MP3. Para MP3 en iPhone necesitas una app conversora o una web.' },
            { q: '¿Convertir a MP3 es gratis?', a: `Sí, la conversión básica en ${APP} es gratis. Las compras dentro de la app añaden extras.` },
            { q: '¿Necesito wifi para pasar un vídeo a MP3?', a: 'No. La conversión se hace en el iPhone y funciona sin conexión. Solo los vídeos guardados en iCloud necesitan descargarse antes.' }
        ],
        related: ['mp4-to-mp3-iphone', 'mov-to-mp3-iphone', 'video-to-m4a-iphone'],
        card: { title: 'Convertir vídeo a MP3', text: 'Cualquier vídeo del iPhone en un MP3 universal.' }
    },
    {
        slug: 'mp4-to-mp3-iphone',
        keyword: 'extraer audio de mp4 iphone',
        eyebrow: 'MP4 a MP3',
        title: 'Extraer audio de un MP4 en iPhone: MP4 a MP3 gratis',
        description: 'Extrae el audio de un MP4 en iPhone gratis: abre el archivo en Archivos o Fotos, toca «Compartir» y elige la app. Sin conexión y con recorte. En 4 pasos.',
        h1: 'Cómo extraer el audio de un MP4 en iPhone (MP4 a MP3)',
        answer: `Para extraer el audio de un MP4 en iPhone, abre el archivo en Archivos o Fotos, toca «Compartir» y elige ${APP}. Recorta si quieres, toca «Extraer audio», elige MP3 y guárdalo. Gratis, en el dispositivo y sin internet.`,
        intro: '<p>Los MP4 suelen llegar como descargas, adjuntos de correo o por AirDrop, así que muchas veces están en la app <strong>Archivos</strong> y no en Fotos. La app funciona con ambos.</p>',
        steps: [
            { name: 'Busca el MP4', text: 'Abre Archivos (Descargas, iCloud Drive o «En mi iPhone») o Fotos y localiza el MP4.', image: 2 },
            { name: 'Envíalo a la app', text: 'Mantén pulsado el archivo, toca «Compartir» y elige la app. El MP4 se abrirá en ella.', image: 2 },
            STEP.trim,
            { name: 'Guárdalo como MP3', text: 'Toca «Extraer audio», elige MP3 y luego «Compartir» → «Guardar en Archivos» para dejar el MP3 junto al MP4 original.', image: 4 }
        ],
        sections: [
            {
                h2: 'MP4 frente a MP3, en una frase',
                html: '<p>El MP4 es un contenedor con imagen <em>y</em> sonido; el MP3 es solo sonido. Al convertir, se conserva la pista de audio y se elimina la imagen: el archivo ocupa mucho menos y suena en cualquier reproductor.</p>'
            },
            {
                h2: 'MP4 de WhatsApp, Telegram y correo',
                html: '<p>Guarda primero el adjunto: en el chat abre el vídeo → «Compartir» → «Guardar vídeo» (va a Fotos) o «Guardar en Archivos». Después sigue los pasos de arriba. Convierte solo vídeos tuyos o sobre los que tengas derechos.</p>'
            },
            {
                h2: '¿Prefieres M4A?',
                html: '<p>Para tonos de llamada y apps de Apple, M4A es mejor opción. Consulta <a href="/es/guides/video-to-m4a-iphone/">cómo pasar un vídeo a M4A en iPhone</a>.</p>'
            }
        ],
        faq: [
            { q: '¿Puedo pasar MP4 a MP3 gratis en iPhone?', a: `Sí. ${APP} convierte MP4 a MP3 gratis en el propio dispositivo. Las compras dentro de la app desbloquean extras.` },
            { q: '¿El MP3 ocupará menos que el MP4?', a: 'Sí, normalmente muchísimo menos, porque se elimina la pista de vídeo y solo queda el sonido.' },
            { q: '¿Puedo convertir varios MP4?', a: 'Sí. Conviértelos uno tras otro; cada MP3 queda guardado en la biblioteca de la app.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'mov-to-mp3-iphone', 'extract-audio-online-vs-app'],
        card: { title: 'Extraer audio de MP4', text: 'MP4 descargados de Archivos o Fotos a MP3.' }
    },
    {
        slug: 'mov-to-mp3-iphone',
        keyword: 'mov a mp3 iphone',
        eyebrow: 'MOV a MP3',
        title: 'MOV a MP3 en iPhone: pasa a audio los vídeos de la cámara',
        description: 'Los vídeos de la cámara del iPhone son MOV. Pásalos a MP3 en el propio iPhone: elige el clip, recorta y toca «Extraer audio». Gratis y sin conexión.',
        h1: 'Cómo pasar un vídeo MOV a MP3 en iPhone',
        answer: `Todos los vídeos de la cámara del iPhone son archivos MOV. Para pasar un MOV a MP3, abre el clip en Fotos, toca «Compartir», elige ${APP}, recorta si quieres y toca «Extraer audio». Tendrás el MP3 en tu iPhone sin necesidad de ordenador.`,
        intro: '<p>MOV es el formato de vídeo de Apple y el que usa tu cámara: conciertos, discursos, un amigo con la guitarra, una voz que quieres conservar. En MP3 puedes escucharlo en cualquier sitio.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Para qué sirve pasar MOV a MP3',
                html: `<ul>
<li>Guardar el sonido de un concierto o actuación que grabaste.</li>
<li>Conservar un discurso o un brindis como recuerdo en audio.</li>
<li>Mandar un ensayo al grupo sin un vídeo enorme.</li>
<li>Escuchar una <a href="/es/guides/lecture-video-to-audio-iphone/">clase grabada</a> en el transporte.</li>
</ul>`
            },
            {
                h2: 'HEVC, 4K y modo Cine',
                html: '<p>Los vídeos HEVC y 4K se convierten igual. Solo se procesa el sonido, así que incluso los MOV enormes dan archivos de audio pequeños.</p>'
            },
            {
                h2: '¿Por qué no en el ordenador?',
                html: '<p>Pasar un MOV de varios gigas al ordenador solo para quitarle el sonido lleva más tiempo que convertirlo en el iPhone. La app lo hace donde ya está el vídeo.</p>'
            }
        ],
        faq: [
            { q: '¿En qué formato graba vídeo el iPhone?', a: 'La cámara del iPhone graba archivos MOV, normalmente con vídeo HEVC o H.264 y audio AAC.' },
            { q: '¿Se pierde calidad al pasar MOV a MP3?', a: 'La app mantiene la calidad de la grabación original: el MP3 suena igual que el vídeo al reproducirlo.' },
            { q: '¿Puedo pasar un MOV a M4A?', a: 'Sí, elige M4A como formato. Es buena opción para tonos de llamada y apps de Apple.' }
        ],
        related: ['mp4-to-mp3-iphone', 'convert-video-to-mp3-iphone', 'save-music-from-video-iphone'],
        card: { title: 'MOV a MP3', text: 'Vídeos de la cámara convertidos en audio.' }
    }
);

guides.push(
    {
        slug: 'video-to-m4a-iphone',
        keyword: 'pasar video a m4a iphone',
        eyebrow: 'Vídeo a M4A',
        title: 'Pasar un vídeo a M4A en iPhone — MP4 y MOV a M4A gratis',
        description: 'Guarda el audio de tus vídeos en M4A para tonos, GarageBand y apps de Apple. Gratis, en el dispositivo y con recorte. De MP4 o MOV a M4A en 4 toques.',
        h1: 'Cómo pasar un vídeo a M4A en iPhone',
        answer: `Para pasar un vídeo a M4A en iPhone, envíalo desde Fotos o Archivos con «Compartir» a ${APP}, recorta si quieres, toca «Extraer audio» y elige M4A. Obtendrás un archivo M4A (AAC) que funciona en GarageBand, iMovie, reproductores de audio y como tono de llamada.`,
        intro: '<p>M4A es el formato de audio propio de Apple. Con una calidad parecida ocupa menos que el MP3, y es justo lo que el iPhone espera para tonos de llamada y proyectos de GarageBand.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Extrae en M4A', text: 'Toca «Extraer audio» y elige M4A.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'M4A o MP3: cuándo elegir M4A',
                html: `<table class="guide-table"><thead><tr><th></th><th>M4A (AAC)</th><th>MP3</th></tr></thead><tbody>
<tr><td>Ideal para</td><td>iPhone, Mac, tonos, GarageBand</td><td>Todo lo demás: Windows, Android, coche</td></tr>
<tr><td>Tamaño</td><td>Menor con la misma calidad</td><td>Algo mayor</td></tr>
<tr><td>Compatibilidad</td><td>Muy buena</td><td>Universal</td></tr>
</tbody></table>`
            },
            {
                h2: 'Usa el M4A como tono de llamada',
                html: '<p>En iOS 26, un M4A de menos de 30 segundos se puede poner como tono directamente desde Archivos. Guía completa: <a href="/es/guides/video-to-ringtone-iphone/">crear un tono de llamada con un vídeo</a>.</p>'
            },
            {
                h2: 'Ábrelo en GarageBand o iMovie',
                html: '<p>Guarda el M4A en Archivos e impórtalo desde el explorador de archivos de GarageBand o iMovie como música de fondo, voz en off o efecto de sonido.</p>'
            }
        ],
        faq: [
            { q: '¿El M4A es mejor que el MP3?', a: 'Con el mismo bitrate, el M4A (AAC) suele sonar igual o mejor y ocupa menos. El MP3 es compatible con más dispositivos.' },
            { q: '¿Puedo sacar un M4A con Atajos?', a: 'Sí, la acción «Codificar contenido multimedia» con «Solo audio» genera un M4A. Pero no permite recortar ni exportar en MP3; la app sí.' },
            { q: '¿Pasar a M4A es gratis?', a: `Sí, la extracción básica de ${APP} es gratis, incluida la exportación a M4A.` }
        ],
        related: ['video-to-ringtone-iphone', 'convert-video-to-mp3-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Vídeo a M4A', text: 'El formato de Apple para tonos y GarageBand.' }
    },
    {
        slug: 'extract-audio-without-app-iphone',
        keyword: 'extraer audio de video iphone sin app',
        eyebrow: 'Atajos o app',
        title: 'Extraer el audio de un vídeo en iPhone sin app (con Atajos)',
        description: 'Puedes extraer el audio en iPhone sin instalar nada: con Atajos y «Codificar contenido multimedia». Configuración, límites (solo M4A) y una vía más rápida.',
        h1: 'Cómo extraer el audio de un vídeo en iPhone sin app',
        answer: 'Sin apps adicionales se hace con un atajo: añade la acción «Codificar contenido multimedia», activa «Solo audio», añade «Guardar archivo» y activa «Mostrar en la hoja de compartir». Luego comparte el vídeo con el atajo. Solo exporta M4A y no recorta; para MP3 o fragmentos cortos, una app es más rápida.',
        intro: '<p>La app gratuita Atajos de Apple puede separar el audio de un vídeo. Configurarlo lleva unos dos minutos. Esta es la receta exacta y sus límites.</p>',
        steps: [
            { name: 'Crea un atajo nuevo', text: 'Abre Atajos, toca + y llámalo «Audio del vídeo».', image: 2 },
            { name: 'Añade «Codificar contenido multimedia»', text: 'Toca «Añadir acción», busca «Codificar contenido multimedia», añádela, despliega sus opciones y activa «Solo audio».', image: 2 },
            { name: 'Añade «Guardar archivo»', text: 'Añade la acción «Guardar archivo» para que el resultado vaya a Archivos.', image: 4 },
            { name: 'Muéstralo en «Compartir»', text: 'Abre los ajustes del atajo (icono i), activa «Mostrar en la hoja de compartir» y permite «Contenido multimedia». Ahora comparte un vídeo desde Fotos y elige el atajo.', image: 4 }
        ],
        sections: [
            {
                h2: 'Límites del método con Atajos',
                html: `<ul>
<li><strong>Solo M4A</strong>: no hay MP3.</li>
<li><strong>Sin recorte</strong>: siempre se guarda la pista completa.</li>
<li><strong>Sin biblioteca</strong>: los archivos van a Archivos y tienes que buscarlos y renombrarlos a mano.</li>
<li>Con vídeos largos, el atajo puede detenerse sin un error claro.</li>
</ul>`
            },
            {
                h2: 'La alternativa de un toque',
                html: `<p>${APP} hace lo mismo con recorte, MP3 o M4A y una biblioteca con todo lo que extraes. También está en el menú «Compartir», así que es igual de rápida y no hay nada que configurar.</p>`
            },
            {
                h2: 'Otras opciones sin app',
                html: '<p>iMovie y GarageBand también pueden separar el sonido, pero requieren más pasos y exportan en formatos limitados. Las webs funcionan, aunque tienes que subir el vídeo; ver <a href="/es/guides/extract-audio-online-vs-app/">online o app</a>.</p>'
            }
        ],
        faq: [
            { q: '¿El iPhone tiene un extractor de audio integrado?', a: 'No como botón en Fotos. Lo más parecido es la acción «Codificar contenido multimedia» con «Solo audio» en la app Atajos.' },
            { q: '¿En qué formato guarda el atajo?', a: 'En M4A. Con Atajos no se puede guardar en MP3.' },
            { q: '¿El atajo puede recortar el audio?', a: `No de forma cómoda. Para recortar, usa una app con línea de tiempo como ${APP}.` }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-online-vs-app', 'video-to-m4a-iphone'],
        card: { title: 'Sin app (Atajos)', text: 'La receta gratis de Atajos y sus límites.' }
    },
    {
        slug: 'extract-audio-online-vs-app',
        keyword: 'extraer audio de video online',
        eyebrow: 'Online o app',
        title: 'Extraer audio de vídeo online gratis o con app en iPhone',
        description: '¿Extraer audio de vídeo online o con una app? Comparamos privacidad, velocidad, límites y recorte en iPhone, y por qué en el móvil gana la conversión local.',
        h1: 'Extraer audio de vídeo online (gratis) o con una app de iPhone',
        answer: `Las webs para extraer audio funcionan en cualquier dispositivo, pero te obligan a subir el vídeo entero, esperar y descargar el resultado: lento con datos móviles y poco privado. En iPhone, una app como ${APP} es más rápida, funciona sin conexión, deja los vídeos en tu dispositivo y recorta antes de exportar.`,
        intro: '<p>Si buscas «extraer audio de video online» encontrarás decenas de webs gratis. En un portátil con buena conexión son prácticas. En el iPhone, la cuenta es otra.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Comparativa',
                html: `<table class="guide-table"><thead><tr><th></th><th>Web online</th><th>${APP}</th></tr></thead><tbody>
<tr><td>Privacidad</td><td>El vídeo se sube a un servidor ajeno</td><td>Se queda en tu iPhone</td></tr>
<tr><td>Velocidad</td><td>Subida + cola + descarga</td><td>Segundos, en el dispositivo</td></tr>
<tr><td>Sin conexión</td><td>No</td><td>Sí</td></tr>
<tr><td>Límite de tamaño</td><td>Habitual en planes gratis</td><td>Solo el almacenamiento</td></tr>
<tr><td>Recorte</td><td>A veces</td><td>Línea de tiempo integrada</td></tr>
<tr><td>Anuncios y ventanas</td><td>Frecuentes</td><td>Sin ventanas web</td></tr>
<tr><td>Precio</td><td>Gratis con límites</td><td>Funciones básicas gratis</td></tr>
</tbody></table>`
            },
            {
                h2: 'Cuándo tiene sentido una web',
                html: '<p>Si estás en un PC con Windows y el vídeo ya está allí, una web fiable está bien. Pero no subas nada personal: vídeos familiares, reuniones o material de clientes.</p>'
            },
            {
                h2: 'Cuándo es mejor la app',
                html: '<p>Si el vídeo está en tu iPhone, gana la app: nada de subir el vídeo con datos móviles, sin esperas ni descargas, y puedes recortar justo la parte que necesitas.</p>'
            }
        ],
        faq: [
            { q: '¿Es seguro extraer audio de un vídeo online?', a: 'Depende de la web. El vídeo acaba en un servidor de terceros, así que mejor evitarlo con contenido privado. Las apps que trabajan en el dispositivo no suben nada.' },
            { q: '¿Hay una forma gratis de hacerlo en iPhone sin subir el vídeo?', a: `Sí. ${APP} es gratis para empezar y convierte en el dispositivo; tu vídeo nunca se sube.` },
            { q: '¿Por qué convertir online es tan lento en el móvil?', a: 'Porque primero hay que subir el vídeo completo. Los vídeos del móvil pesan mucho y la subida con datos móviles suele ser mucho más lenta que la descarga.' }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-without-app-iphone', 'mp4-to-mp3-iphone'],
        card: { title: 'Online o app', text: 'Privacidad, velocidad y límites comparados.' }
    },
    {
        slug: 'save-music-from-video-iphone',
        keyword: 'extraer musica de un video iphone',
        eyebrow: 'Música',
        title: 'Cómo extraer la música de un vídeo en iPhone (MP3 o M4A)',
        description: 'Guarda la canción o la música de fondo de un vídeo en tu iPhone en MP3 o M4A. Recorta justo la canción, escúchala sin conexión y compártela. Guía rápida.',
        h1: 'Cómo extraer la música de un vídeo en iPhone',
        answer: `Para extraer la música de un vídeo en iPhone, ábrelo en Fotos, toca «Compartir», elige ${APP}, coloca los marcadores de recorte alrededor de la canción y toca «Extraer audio». La música se guarda en MP3 o M4A para escucharla sin conexión en Archivos o compartirla con cualquier app.`,
        intro: '<p>La canción de una boda, la versión de un amigo, la música de tu propio montaje: a veces lo importante del vídeo es el sonido. Así lo guardas como archivo de música independiente.</p>',
        steps: [STEP.share, { name: 'Recorta alrededor de la canción', text: 'Toca «Recortar vídeo» y arrastra los marcadores amarillos para dejar solo la canción. Escucha el inicio y el final.', image: 3 }, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Trucos para el mejor sonido',
                html: `<ul>
<li>Quita las conversaciones y los aplausos del principio y del final.</li>
<li>MP3 para el coche y reproductores antiguos; M4A para dispositivos Apple.</li>
<li>Renombra el archivo en Archivos (mantén pulsado → «Renombrar») para encontrarlo luego.</li>
</ul>`
            },
            {
                h2: 'Sobre los derechos de autor',
                html: '<p>Guarda música de tus propios vídeos o de aquellos sobre los que tengas derechos. Las canciones comerciales están protegidas: una copia personal de tu grabación está bien; publicar música ajena, no.</p>'
            },
            {
                h2: 'Ponla como tono',
                html: '<p>¿Has encontrado tus 30 segundos favoritos? <a href="/es/guides/video-to-ringtone-iphone/">Conviértelos en tono de llamada</a>.</p>'
            }
        ],
        faq: [
            { q: '¿Cómo saco la canción de un vídeo en mi iPhone?', a: `Envía el vídeo a ${APP}, recorta alrededor de la canción y toca «Extraer audio». La canción se guarda como archivo de audio.` },
            { q: '¿Puedo añadir la canción a Apple Music?', a: 'La app Música del iPhone no importa archivos locales directamente. Guárdala en Archivos o sincronízala desde un Mac o PC.' },
            { q: '¿Funciona con vídeos de WhatsApp o Mensajes?', a: 'Sí. Guarda primero el vídeo en Fotos o Archivos y luego extrae el audio.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-ringtone-iphone', 'mov-to-mp3-iphone'],
        card: { title: 'Extraer música de un vídeo', text: 'Quédate con la canción, sin la imagen.' }
    }
);

guides.push(
    {
        slug: 'trim-audio-from-video-iphone',
        keyword: 'recortar audio de un video iphone',
        eyebrow: 'Recorte',
        title: 'Extraer solo una parte del audio de un vídeo en iPhone',
        description: '¿Solo necesitas 10 segundos de sonido? Recorta el vídeo en iPhone y extrae solo esa parte en MP3 o M4A. Arrastra los marcadores, escucha y exporta. Gratis.',
        h1: 'Cómo extraer solo una parte del audio de un vídeo en iPhone',
        answer: `Para extraer solo una parte del audio de un vídeo en iPhone, ábrelo en ${APP}, toca «Recortar vídeo», arrastra los marcadores amarillos de inicio y fin alrededor del fragmento, toca «Guardar» y después «Extraer audio». Solo se exporta la parte seleccionada, en MP3 o M4A.`,
        intro: '<p>Casi nunca necesitas la pista entera: solo una frase, un estribillo o un efecto de sonido. Si recortas antes, obtienes un archivo pequeño y limpio.</p>',
        steps: [
            STEP.open,
            { name: 'Toca «Recortar vídeo»', text: 'En la pantalla de extracción, toca «Recortar vídeo» para abrir la línea de tiempo.', image: 2 },
            { name: 'Arrastra los marcadores', text: 'Lleva el marcador amarillo izquierdo al inicio y el derecho al final. Los tiempos muestran la selección exacta. Escucha y toca «Guardar».', image: 3 },
            { name: 'Extrae y guarda el fragmento', text: 'Toca «Extraer audio». Solo se exporta la parte recortada; compártela o guárdala en Archivos.', image: 4 }
        ],
        sections: [
            {
                h2: 'Consejos para un recorte preciso',
                html: `<ul>
<li>Deja medio segundo antes y después de la voz para no cortar palabras.</li>
<li>Para un tono de llamada, selecciona 30 segundos como máximo.</li>
<li>¿Varios fragmentos del mismo vídeo? Repite el recorte para cada uno; todo queda en tu biblioteca.</li>
</ul>`
            },
            {
                h2: 'Lo que más se suele recortar',
                html: '<p>Una frase de un discurso, el estribillo de una canción, un efecto para un montaje, las primeras palabras de tu hijo o el minuto importante de una reunión larga.</p>'
            }
        ],
        faq: [
            { q: '¿Se puede cortar el audio de un vídeo en iPhone?', a: `Sí. Recorta el vídeo al fragmento que necesitas en ${APP} y extrae; solo se guarda esa parte como audio.` },
            { q: '¿Recortar cambia el vídeo original?', a: 'No. El original en Fotos no se modifica; solo se recorta el audio que exportas.' },
            { q: '¿Puedo sacar varias partes del mismo vídeo?', a: 'Sí. Recorta y extrae de nuevo para cada parte.' }
        ],
        related: ['video-to-ringtone-iphone', 'save-music-from-video-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Extraer solo una parte', text: 'Recorta al segundo exacto.' }
    },
    {
        slug: 'screen-recording-to-audio-iphone',
        keyword: 'sacar audio de grabacion de pantalla iphone',
        eyebrow: 'Grabación de pantalla',
        title: 'Cómo sacar el audio de una grabación de pantalla en iPhone',
        description: 'Convierte una grabación de pantalla del iPhone en un archivo MP3 o M4A. Descubre por qué sale sin sonido, recorta lo que necesitas y guarda el audio.',
        h1: 'Cómo sacar el audio de una grabación de pantalla en iPhone',
        answer: `Las grabaciones de pantalla del iPhone se guardan como vídeos en Fotos. Para sacar el audio, abre la grabación, toca «Compartir», elige ${APP}, recorta si quieres y toca «Extraer audio». Si el archivo sale en silencio, la grabación no captó sonido: activa el micrófono antes de grabar.`,
        intro: '<p>Grabar la pantalla es una forma habitual de guardar un mensaje de voz, una llamada en altavoz o un clip de una app. Así te quedas solo con el sonido.</p>',
        steps: [
            { name: 'Busca la grabación en Fotos', text: 'Las grabaciones de pantalla están en Fotos → «Tipos de contenido» → «Grabaciones de pantalla».', image: 2 },
            { name: 'Envíala a la app', text: 'Abre la grabación, toca «Compartir» y elige la app.', image: 2 },
            STEP.trim,
            { name: 'Extrae y guarda', text: 'Toca «Extraer audio» y guarda el MP3 o M4A en Archivos.', image: 4 }
        ],
        sections: [
            {
                h2: '¿Por qué mi grabación de pantalla no tiene sonido?',
                html: `<ul>
<li><strong>Micrófono apagado:</strong> en el Centro de control, mantén pulsado el botón de grabación de pantalla y activa «Micrófono» para grabar tu voz.</li>
<li><strong>Modo silencio:</strong> algunas apps no suenan con el modo silencio activado.</li>
<li><strong>Contenido protegido:</strong> muchas apps de streaming bloquean el sonido en las grabaciones de pantalla; es intencionado y no se puede evitar.</li>
</ul>`
            },
            {
                h2: 'Respeta la privacidad',
                html: '<p>Graba y guarda llamadas o conversaciones solo con el consentimiento de todos los participantes y respetando la ley de tu país.</p>'
            }
        ],
        faq: [
            { q: '¿Puedo pasar una grabación de pantalla a MP3?', a: 'Sí. Las grabaciones de pantalla son vídeos normales, así que su audio se puede guardar en MP3 o M4A.' },
            { q: '¿Dónde guarda el iPhone las grabaciones de pantalla?', a: 'En la app Fotos, en «Tipos de contenido» → «Grabaciones de pantalla».' },
            { q: '¿Por qué no se oye nada en mi grabación de pantalla?', a: 'El micrófono estaba apagado o la app grabada bloquea el sonido. Comprueba que la grabación suena antes de extraer.' }
        ],
        related: ['extract-audio-from-video-iphone', 'trim-audio-from-video-iphone', 'lecture-video-to-audio-iphone'],
        card: { title: 'Audio de una grabación de pantalla', text: 'Guarda el sonido y entiende por qué falta.' }
    },
    {
        slug: 'lecture-video-to-audio-iphone',
        keyword: 'pasar video de clase a audio',
        eyebrow: 'Estudios',
        title: 'Pasar el vídeo de una clase a audio en iPhone (MP3)',
        description: 'Convierte clases grabadas, webinars y charlas en MP3 en tu iPhone y estudia en cualquier sitio. Archivos pequeños, escucha sin conexión y fácil de compartir.',
        h1: 'Cómo pasar el vídeo de una clase a audio en iPhone',
        answer: `Para convertir una clase en vídeo a audio, abre la grabación en Fotos o Archivos, toca «Compartir», elige ${APP} y toca «Extraer audio». Guarda el MP3 en Archivos y escúchalo sin conexión en el transporte, en el gimnasio o con la pantalla apagada, ocupando una fracción del espacio.`,
        intro: '<p>En una clase importa lo que se dice, no lo que se ve. En audio, la clase se convierte en un pódcast que puedes repasar donde quieras.</p>',
        steps: [
            STEP.share,
            { name: 'Quita la espera y las pausas (opcional)', text: 'Toca «Recortar vídeo» para quitar la espera antes de empezar y el turno de preguntas que no necesites.', image: 3 },
            STEP.extract,
            { name: 'Guárdala en una carpeta de clases', text: 'Toca «Compartir» → «Guardar en Archivos» y crea una carpeta por asignatura para encontrarlo todo rápido.', image: 4 }
        ],
        sections: [
            {
                h2: 'Por qué estudiar con audio',
                html: `<ul>
<li><strong>Archivos pequeños:</strong> una hora de audio ocupa una fracción de una hora de vídeo.</li>
<li><strong>Pantalla apagada:</strong> escucha con el móvil bloqueado y ahorra batería.</li>
<li><strong>En cualquier sitio:</strong> transporte, paseo, gimnasio; sin wifi.</li>
</ul>`
            },
            {
                h2: 'Conviértelo en apuntes',
                html: '<p>¿Quieres texto? Importa el audio en la app de transcripción que ya uses y busca en la transcripción más tarde.</p>'
            },
            {
                h2: 'Revisa las normas',
                html: '<p>Muchas universidades permiten grabar para uso personal, pero no compartir las grabaciones. Consulta las normas de tu asignatura antes de grabar o compartir una clase.</p>'
            }
        ],
        faq: [
            { q: '¿Puedo escuchar un vídeo en iPhone con la pantalla apagada?', a: 'La mayoría de reproductores de vídeo se pausan al bloquear. Pasado a MP3, puedes escucharlo con la pantalla apagada en Archivos o en cualquier reproductor de audio.' },
            { q: '¿Funciona con una clase de una hora?', a: 'Sí. Las grabaciones largas funcionan igual; solo tardan un poco más.' },
            { q: '¿Puedo convertir grabaciones de Zoom o webinars?', a: 'Sí, en cuanto la grabación MP4 esté en Fotos o Archivos en tu iPhone.' }
        ],
        related: ['screen-recording-to-audio-iphone', 'mp4-to-mp3-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Clase en vídeo a audio', text: 'Estudia en cualquier sitio con MP3 ligeros.' }
    },
    {
        slug: 'video-to-ringtone-iphone',
        keyword: 'poner un video de tono de llamada iphone',
        eyebrow: 'Tonos',
        title: 'Crear un tono de llamada con un vídeo en iPhone (iOS 26)',
        description: 'Convierte un vídeo en tono de iPhone: recorta a 30 s, guárdalo en Archivos y toca «Compartir» → «Usar como tono de llamada». iOS 26 y GarageBand.',
        h1: 'Cómo crear un tono de llamada con un vídeo en iPhone',
        answer: `Para crear un tono con un vídeo, ábrelo en ${APP}, recórtalo a 30 segundos como máximo, extrae el audio en M4A o MP3 y guárdalo en Archivos. En iOS 26, mantén pulsado el archivo en Archivos, toca «Compartir» y elige «Usar como tono de llamada». En versiones anteriores de iOS, impórtalo en GarageBand y expórtalo como tono.`,
        intro: '<p>Una risa, una canción de una fiesta, el ladrido de tu perro: cualquier sonido de tus vídeos puede ser tu tono de llamada. Con iOS 26 es muy sencillo en cuanto tienes el archivo de audio.</p>',
        steps: [
            STEP.share,
            { name: 'Recorta a 30 segundos', text: 'Toca «Recortar vídeo» y selecciona 30 segundos como máximo: es el límite para tonos.', image: 3 },
            { name: 'Extrae y guarda en Archivos', text: 'Toca «Extraer audio» (M4A o MP3) y luego «Compartir» → «Guardar en Archivos».', image: 4 },
            { name: 'Usar como tono de llamada', text: 'En Archivos, mantén pulsado el audio, toca «Compartir» → «Usar como tono de llamada» (iOS 26). Compruébalo en Ajustes → Sonidos y vibraciones → Tono de llamada.', image: 4 }
        ],
        sections: [
            {
                h2: 'En iOS 18: el método con GarageBand',
                html: `<ol>
<li>Extrae y recorta el audio como arriba y guárdalo en Archivos.</li>
<li>Abre GarageBand, crea un proyecto con «Grabadora de audio» y pasa a la vista de pistas.</li>
<li>Abre el explorador de loops → «Archivos» → «Explorar ítems de la app Archivos» y arrastra el audio a una pista.</li>
<li>Vuelve a «Mis canciones», mantén pulsado el proyecto → «Compartir» → «Tono» → «Exportar».</li>
</ol>`
            },
            {
                h2: 'Por qué no aparece «Usar como tono de llamada»',
                html: `<ul>
<li>El archivo dura más de 30 segundos: recórtalo otra vez.</li>
<li>El archivo no es MP3 ni M4A.</li>
<li>Tu iPhone todavía no tiene iOS 26: usa GarageBand.</li>
</ul>`
            }
        ],
        faq: [
            { q: '¿Cuánto puede durar un tono de iPhone?', a: 'Hasta 30 segundos para tonos personalizados creados a partir de archivos de audio.' },
            { q: '¿Qué formato necesita un tono de iPhone?', a: 'En iOS 26 se pueden poner archivos MP3 o M4A de menos de 30 segundos con «Usar como tono de llamada».' },
            { q: '¿Puedo poner un vídeo directamente como tono?', a: 'No. Primero extrae el audio del vídeo y luego pon el archivo de audio como tono.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-m4a-iphone', 'save-music-from-video-iphone'],
        card: { title: 'Tono de llamada con un vídeo', text: '«Usar como tono de llamada» en iOS 26, en 4 pasos.' }
    }
);
