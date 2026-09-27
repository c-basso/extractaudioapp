/**
 * English keyword guides → /guides/<slug>/
 * One guide per target keyword (see /keywords.md). Rendered by build/guides.js with build/guide-template.html.
 *
 * Fields:
 *  slug, keyword, title (50–60 chars), description (150–160 chars), h1, eyebrow,
 *  answer      – 40–60 word direct answer (featured snippet / AI overview)
 *  intro       – HTML
 *  steps       – [{ name, text, image }]  image = screenshot number 1–5 (HowTo JSON-LD)
 *  sections    – [{ h2, html }]
 *  faq         – [{ q, a }]  (plain text)
 *  related     – [slug, …]
 *  card        – { title, text } for the homepage / hub grid
 *
 * Screenshots: 1 cover · 2 Audio Extraction screen · 3 Trim · 4 Share sheet · 5 Library
 */

const APP = 'Extract Audio from Video⁺';

const STEP = {
    open: {
        name: 'Open the app and pick a video',
        text: `Launch ${APP} and choose a video from your Photos library or the Files app. Shortcut: in Photos, tap Share on the video and choose Extract Audio.`,
        image: 2
    },
    share: {
        name: 'Share the video to the app',
        text: 'Open the video in Photos or Files, tap the Share button and choose Extract Audio. The app opens with the video already loaded.',
        image: 2
    },
    trim: {
        name: 'Trim to the part you need (optional)',
        text: 'Tap Trim Video, drag the yellow handles to the start and end of the part you want, preview it, and tap Save.',
        image: 3
    },
    extract: {
        name: 'Tap Extract Audio',
        text: 'Tap Extract Audio. The soundtrack is converted on your iPhone in seconds — nothing is uploaded.',
        image: 2
    },
    save: {
        name: 'Save or share the audio file',
        text: 'The new audio file appears in your library. Tap Share to save it to Files, AirDrop it, or send it to any app.',
        image: 4
    }
};

const guides = [];
module.exports = guides;

guides.push(
    {
        slug: 'extract-audio-from-video-iphone',
        keyword: 'how to extract audio from video on iphone',
        eyebrow: 'Core guide',
        title: 'How to Extract Audio from Video on iPhone (2026 Guide)',
        description: 'Extract audio from any video on iPhone in 4 taps: pick a video, trim, tap Extract Audio, save as MP3 or M4A. Free, on-device, no upload. Steps with screenshots.',
        h1: 'How to Extract Audio from Video on iPhone',
        answer: `To extract audio from a video on iPhone, open ${APP}, pick the video from Photos, optionally trim it, and tap Extract Audio. The app saves the soundtrack as an MP3 or M4A file on your iPhone in seconds. It is free to start and works offline — nothing is uploaded.`,
        intro: `<p>iPhone has no built-in “save audio only” button in Photos. You can build a Shortcut (see <a href="/guides/extract-audio-without-app-iphone/">the no-app method</a>) or upload the clip to a website, but both are slow when you just want the sound. This guide shows the fastest way: a free audio extractor app that works straight from the Share button.</p>`,
        steps: [STEP.open, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'What you need',
                html: `<ul>
<li>An iPhone on iOS 18.6 or later.</li>
<li>${APP} — free on the App Store (about 23 MB).</li>
<li>A video with sound: camera clips (MOV), downloads (MP4), screen recordings, or videos saved from Messages.</li>
</ul>`
            },
            {
                h2: 'Fastest way: start from the Share button',
                html: `<p>You don’t even need to open the app first. In <strong>Photos</strong> or <strong>Files</strong>, open the video, tap <strong>Share</strong>, scroll the app row and tap <strong>Extract Audio</strong>. If you don’t see it, tap <em>More</em> and add it to your favorites once — after that it is always one tap away.</p>`
            },
            {
                h2: 'MP3 or M4A — which should I pick?',
                html: `<p><strong>MP3</strong> plays everywhere: Windows, Android, car stereos, web uploads and editing apps. <strong>M4A</strong> (AAC audio) is Apple’s native format — smaller at the same quality and ideal for iPhone ringtones, GarageBand and iMovie. Not sure? Choose MP3. More in <a href="/guides/convert-video-to-mp3-iphone/">convert video to MP3</a> and <a href="/guides/video-to-m4a-iphone/">video to M4A</a>.</p>`
            },
            {
                h2: 'Where does the audio file go?',
                html: `<p>Every extracted file is listed in the app’s library with its duration, size and date. From there tap <strong>Share</strong> → <strong>Save to Files</strong> to keep it in iCloud Drive or <em>On My iPhone</em>, or send it to WhatsApp, Mail, Notes, GarageBand, or your computer with AirDrop.</p>`
            },
            {
                h2: 'Troubleshooting',
                html: `<ul>
<li><strong>The audio file is silent.</strong> The video itself has no sound — common with screen recordings made with the microphone off. Play the video in Photos first to check.</li>
<li><strong>The video is in iCloud.</strong> Photos downloads the original first; wait for the progress circle to finish.</li>
<li><strong>I only need 20 seconds.</strong> Trim before extracting — see <a href="/guides/trim-audio-from-video-iphone/">extract part of the audio</a>.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Is it free to extract audio from video on iPhone?', a: `Yes. ${APP} is free to download and core audio extraction is free. Optional in-app purchases unlock extra features.` },
            { q: 'Does extracting audio reduce quality?', a: 'The app converts the existing soundtrack of your video into a high-quality MP3 or M4A file. The result cannot sound better than the original video, but it keeps the quality you hear when you play the clip.' },
            { q: 'Can I extract audio from a long video?', a: 'Yes. Long lectures, concerts and meetings work the same way; conversion time grows with the length of the clip. Trim first if you only need part of it.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'trim-audio-from-video-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Extract audio from video on iPhone', text: 'The 4-tap method, from Photos or the Share button.' }
    },
    {
        slug: 'convert-video-to-mp3-iphone',
        keyword: 'convert video to mp3 on iphone',
        eyebrow: 'Video to MP3',
        title: 'How to Convert Video to MP3 on iPhone — Free & Fast',
        description: 'Convert any iPhone video to MP3 in seconds with a free video to MP3 converter. Works from Photos, keeps files on your device, trims before export. See steps.',
        h1: 'How to Convert Video to MP3 on iPhone',
        answer: `Open the video in Photos, tap Share and choose Extract Audio (${APP}). Trim if needed, tap Extract Audio and export as MP3. The MP3 is saved on your iPhone and can be shared to Files, AirDrop or any app. No computer, upload or account is needed.`,
        intro: '<p>MP3 is the most compatible audio format there is — it plays in every car, on every computer and in every editing app. Here is how to turn any iPhone video into an MP3 without leaving your phone.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Extract as MP3', text: 'Tap Extract Audio and choose MP3 as the format. The video to MP3 conversion runs on your iPhone.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'Why use a video to MP3 converter app instead of a website?',
                html: `<p>Online converters make you upload the whole video, wait in a queue, then download the MP3 again — slow on mobile data and risky for private videos. A converter app works offline, keeps the file on your device, and lets you trim before converting. Full comparison: <a href="/guides/extract-audio-online-vs-app/">online converter vs app</a>.</p>`
            },
            {
                h2: 'Which videos can I convert to MP3?',
                html: `<p>Anything your iPhone can play: camera recordings (<a href="/guides/mov-to-mp3-iphone/">MOV</a>), downloaded clips (<a href="/guides/mp4-to-mp3-iphone/">MP4</a>), <a href="/guides/screen-recording-to-audio-iphone/">screen recordings</a>, and videos saved from Messages, WhatsApp or AirDrop.</p>`
            },
            {
                h2: 'What to do with the MP3',
                html: `<ul>
<li>Save it to <strong>Files</strong> to listen offline.</li>
<li>Send it to your computer with <strong>AirDrop</strong>.</li>
<li>Turn a 30-second part into a <a href="/guides/video-to-ringtone-iphone/">ringtone</a>.</li>
<li>Drop it into GarageBand, CapCut or a podcast editor.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Can iPhone convert video to MP3 without an app?', a: 'Not directly. Apple Shortcuts can export audio only as M4A, not MP3. To get an MP3 on iPhone you need a converter app or a website.' },
            { q: 'Is the MP3 conversion free?', a: `Yes, core conversion in ${APP} is free. Optional in-app purchases add extra features.` },
            { q: 'Do I need Wi-Fi to convert video to MP3?', a: 'No. Conversion happens on the iPhone, so it works offline. Only videos stored in iCloud need to download first.' }
        ],
        related: ['mp4-to-mp3-iphone', 'mov-to-mp3-iphone', 'video-to-m4a-iphone'],
        card: { title: 'Convert video to MP3', text: 'Turn any iPhone video into a universal MP3 file.' }
    },
    {
        slug: 'mp4-to-mp3-iphone',
        keyword: 'mp4 to mp3 iphone',
        eyebrow: 'MP4 to MP3',
        title: 'MP4 to MP3 on iPhone: Free Converter, No Upload Needed',
        description: 'Convert MP4 to MP3 on iPhone for free. Open the MP4 from Files or Photos, tap Share, then Extract Audio. On-device, offline, with trimming. Four quick steps.',
        h1: 'How to Convert MP4 to MP3 on iPhone',
        answer: `To convert MP4 to MP3 on iPhone, open the MP4 in Files or Photos, tap Share and choose Extract Audio. In ${APP}, trim if you want, tap Extract Audio, pick MP3 and save. The conversion is free, runs on the device and needs no internet connection.`,
        intro: '<p>MP4 files usually arrive as downloads, email attachments or AirDrops, so they often live in the <strong>Files</strong> app rather than Photos. The app handles both.</p>',
        steps: [
            { name: 'Find the MP4 file', text: 'Open the Files app (Downloads, iCloud Drive or On My iPhone) or Photos and locate the MP4.', image: 2 },
            { name: 'Share it to Extract Audio', text: 'Long-press the file, tap Share and choose Extract Audio. The MP4 opens in the app.', image: 2 },
            STEP.trim,
            { name: 'Export as MP3 and save', text: 'Tap Extract Audio, choose MP3, then Share → Save to Files to keep the MP3 next to the original MP4.', image: 4 }
        ],
        sections: [
            {
                h2: 'MP4 vs MP3 in one sentence',
                html: '<p>MP4 is a container that holds video <em>and</em> audio; MP3 is audio only. Converting MP4 to MP3 keeps the soundtrack and drops the picture, so the file becomes much smaller and plays in any music player.</p>'
            },
            {
                h2: 'MP4 files from WhatsApp, Telegram and email',
                html: '<p>Save the attachment first: in the chat tap the video → Share → <em>Save Video</em> (goes to Photos) or <em>Save to Files</em>. Then follow the steps above. Only convert videos you own or have permission to use.</p>'
            },
            {
                h2: 'Need M4A instead?',
                html: '<p>For ringtones or Apple apps, M4A is a better choice. See <a href="/guides/video-to-m4a-iphone/">how to convert video to M4A on iPhone</a>.</p>'
            }
        ],
        faq: [
            { q: 'Can I convert MP4 to MP3 on iPhone for free?', a: `Yes. ${APP} converts MP4 to MP3 for free on the device. Optional in-app purchases unlock extras.` },
            { q: 'Will the MP3 be smaller than the MP4?', a: 'Yes, usually far smaller, because the video track is removed and only the sound is kept.' },
            { q: 'Can I convert several MP4 files?', a: 'Yes. Convert them one after another; every MP3 is kept in the app library so you can share them all later.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'mov-to-mp3-iphone', 'extract-audio-online-vs-app'],
        card: { title: 'MP4 to MP3 on iPhone', text: 'Convert downloaded MP4 files from Files or Photos.' }
    },
    {
        slug: 'mov-to-mp3-iphone',
        keyword: 'convert mov to mp3 iphone',
        eyebrow: 'MOV to MP3',
        title: 'Convert MOV to MP3 on iPhone — Camera Videos to Audio',
        description: 'iPhone camera videos are MOV files. Convert MOV to MP3 right on your iPhone: pick the clip, trim, tap Extract Audio. Free, private, offline. Step-by-step.',
        h1: 'How to Convert MOV to MP3 on iPhone',
        answer: `Every video you record with the iPhone camera is a MOV file. To convert MOV to MP3, open the clip in Photos, tap Share → Extract Audio, trim if needed and tap Extract Audio in ${APP}. You get an MP3 of the recording saved on your iPhone — no computer needed.`,
        intro: '<p>MOV is Apple’s video container. It is what your camera records — concerts, speeches, a friend playing guitar, a voice you want to keep. Turning it into MP3 gives you an audio file you can play anywhere.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Great uses for MOV to MP3',
                html: `<ul>
<li>Keep the audio of a live concert or recital you filmed.</li>
<li>Turn a filmed speech or toast into a keepsake audio file.</li>
<li>Send a band rehearsal to bandmates without a huge video file.</li>
<li>Pull a <a href="/guides/lecture-video-to-audio-iphone/">lecture</a> you recorded into audio for your commute.</li>
</ul>`
            },
            {
                h2: 'HEVC, 4K and Cinematic videos',
                html: '<p>High-efficiency (HEVC) and 4K recordings are converted the same way. Only the sound is processed, so even very large MOV files produce small audio files.</p>'
            },
            {
                h2: 'Why not use a computer?',
                html: '<p>Moving a multi-gigabyte MOV to a computer just to strip the audio takes longer than converting it on the phone. The app does it where the video already is.</p>'
            }
        ],
        faq: [
            { q: 'What format are iPhone videos?', a: 'The iPhone camera records MOV files, usually with HEVC or H.264 video and AAC audio.' },
            { q: 'Can I convert MOV to MP3 without losing quality?', a: 'The app keeps the quality of the original recording. The MP3 will sound like the video does when you play it.' },
            { q: 'Can I convert a MOV to M4A instead?', a: 'Yes. Choose M4A as the output format. It is a good choice for ringtones and Apple apps.' }
        ],
        related: ['mp4-to-mp3-iphone', 'convert-video-to-mp3-iphone', 'save-music-from-video-iphone'],
        card: { title: 'MOV to MP3', text: 'Turn camera recordings into audio files.' }
    }
);

guides.push(
    {
        slug: 'video-to-m4a-iphone',
        keyword: 'convert video to m4a iphone',
        eyebrow: 'Video to M4A',
        title: 'Convert Video to M4A on iPhone — MP4 & MOV to M4A Free',
        description: 'Convert video to M4A on iPhone for ringtones, GarageBand and Apple apps. Free, on-device, with trimming. MP4 or MOV to M4A in four taps — here is exactly how.',
        h1: 'How to Convert Video to M4A on iPhone',
        answer: `To convert a video to M4A on iPhone, share the video from Photos or Files to Extract Audio, trim if you want, tap Extract Audio and choose M4A. ${APP} saves an M4A (AAC) file on your iPhone that works in GarageBand, iMovie, audio players and as a ringtone.`,
        intro: '<p>M4A is Apple’s native audio format. It is smaller than MP3 at similar quality and it is what iPhone expects for ringtones and GarageBand projects.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Extract as M4A', text: 'Tap Extract Audio and choose M4A as the format.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'M4A vs MP3 — when to choose M4A',
                html: `<table class="guide-table"><thead><tr><th></th><th>M4A (AAC)</th><th>MP3</th></tr></thead><tbody>
<tr><td>Best for</td><td>iPhone, Mac, ringtones, GarageBand</td><td>Everything else — Windows, Android, cars</td></tr>
<tr><td>File size</td><td>Smaller at the same quality</td><td>Slightly larger</td></tr>
<tr><td>Compatibility</td><td>Very good</td><td>Universal</td></tr>
</tbody></table>`
            },
            {
                h2: 'Use the M4A as a ringtone',
                html: '<p>On iOS 26 an M4A under 30 seconds can be set as a ringtone straight from the Files app. Full walkthrough: <a href="/guides/video-to-ringtone-iphone/">make a ringtone from a video</a>.</p>'
            },
            {
                h2: 'Open it in GarageBand or iMovie',
                html: '<p>Save the M4A to Files, then import it from the Files browser inside GarageBand or iMovie to use it as a backing track, voice-over or sound effect.</p>'
            }
        ],
        faq: [
            { q: 'Is M4A better than MP3?', a: 'At the same bitrate M4A (AAC) usually sounds as good or better and is smaller. MP3 is more universally compatible.' },
            { q: 'Can Shortcuts convert video to M4A?', a: 'Yes, the Encode Media action with Audio Only produces an M4A. It cannot trim or export MP3, which the app can.' },
            { q: 'Is converting to M4A free?', a: `Yes, core extraction in ${APP} is free, including M4A export.` }
        ],
        related: ['video-to-ringtone-iphone', 'convert-video-to-mp3-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Video to M4A', text: 'Apple-native audio for ringtones and GarageBand.' }
    },
    {
        slug: 'extract-audio-without-app-iphone',
        keyword: 'extract audio from video iphone without app',
        eyebrow: 'Shortcuts vs app',
        title: 'Extract Audio on iPhone Without an App (Shortcuts Method)',
        description: 'Yes, you can extract audio on iPhone without an app using the Shortcuts Encode Media action. Full setup, its limits (M4A only, no trim), a faster option.',
        h1: 'How to Extract Audio from Video on iPhone Without an App',
        answer: 'You can extract audio without an app by building an Apple Shortcut: add the Encode Media action, turn on Audio Only, add Save File, and enable Show in Share Sheet. Then share a video to the shortcut. It exports M4A only and cannot trim — an audio extractor app is faster for MP3 or short clips.',
        intro: '<p>Apple’s free Shortcuts app can strip the audio from a video. It takes about two minutes to set up. Here is the exact recipe — and where it falls short.</p>',
        steps: [
            { name: 'Create a new shortcut', text: 'Open the Shortcuts app, tap +, and name it Extract Audio.', image: 2 },
            { name: 'Add Encode Media with Audio Only', text: 'Tap Add Action, search for Encode Media, add it, tap the arrow on the action and switch on Audio Only.', image: 2 },
            { name: 'Add Save File', text: 'Add the Save File action so the result is saved to the Files app.', image: 4 },
            { name: 'Show it in the Share Sheet', text: 'Open the shortcut settings (the i icon), turn on Show in Share Sheet and accept Media as input. Now share a video from Photos and pick the shortcut.', image: 4 }
        ],
        sections: [
            {
                h2: 'Limits of the Shortcuts method',
                html: `<ul>
<li><strong>M4A only</strong> — no MP3 output.</li>
<li><strong>No trimming</strong> — you always get the full soundtrack.</li>
<li><strong>No library</strong> — files land in Files; you have to find and rename them yourself.</li>
<li>Long videos can make the shortcut stop without a clear error.</li>
</ul>`
            },
            {
                h2: 'The one-tap alternative',
                html: `<p>${APP} does the same job with trimming, MP3 or M4A output, and a library of every file you extracted. It also lives in the Share Sheet, so it is just as fast — and there is nothing to build.</p>`
            },
            {
                h2: 'Other no-app options',
                html: '<p>iMovie and GarageBand can both separate audio, but they take several more steps and still export in limited formats. Websites work too, but you have to upload your video — see <a href="/guides/extract-audio-online-vs-app/">online vs app</a>.</p>'
            }
        ],
        faq: [
            { q: 'Does iPhone have a built-in audio extractor?', a: 'Not as a button in Photos. The closest built-in option is the Encode Media action in the Shortcuts app with Audio Only enabled.' },
            { q: 'What format does the Shortcuts method create?', a: 'An M4A audio file. Shortcuts cannot export MP3.' },
            { q: 'Can the shortcut trim the audio?', a: `Not easily. For trimming, use an app with a timeline trimmer such as ${APP}.` }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-online-vs-app', 'video-to-m4a-iphone'],
        card: { title: 'Without an app (Shortcuts)', text: 'The free Shortcuts recipe — and its limits.' }
    },
    {
        slug: 'extract-audio-online-vs-app',
        keyword: 'extract audio from video online free',
        eyebrow: 'Online vs app',
        title: 'Extract Audio from Video Online Free vs an iPhone App',
        description: 'Should you extract audio online or with an app? Compare privacy, speed, file limits and trimming on iPhone, and see why on-device conversion wins on mobile.',
        h1: 'Extract Audio from Video Online (Free) vs an iPhone App',
        answer: `Online audio extractors work on any device but require uploading your whole video, waiting, and downloading the result — slow on mobile data and not private. On iPhone, an on-device app like ${APP} is faster, works offline, keeps videos private, and lets you trim before exporting MP3 or M4A.`,
        intro: '<p>Search for “extract audio from video online” and you get dozens of free web tools. They are great on a laptop with a fast connection. On an iPhone, the trade-offs look different.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Side-by-side comparison',
                html: `<table class="guide-table"><thead><tr><th></th><th>Online converter</th><th>${APP}</th></tr></thead><tbody>
<tr><td>Privacy</td><td>Video uploaded to someone else’s server</td><td>Stays on your iPhone</td></tr>
<tr><td>Speed</td><td>Upload + queue + download</td><td>Seconds, on device</td></tr>
<tr><td>Works offline</td><td>No</td><td>Yes</td></tr>
<tr><td>File size limits</td><td>Common on free tiers</td><td>Limited only by storage</td></tr>
<tr><td>Trimming</td><td>Sometimes</td><td>Built-in timeline trimmer</td></tr>
<tr><td>Ads / pop-ups</td><td>Frequent</td><td>No web pop-ups</td></tr>
<tr><td>Cost</td><td>Free with limits</td><td>Free core features, optional upgrades</td></tr>
</tbody></table>`
            },
            {
                h2: 'When an online tool makes sense',
                html: '<p>If you are on a Windows or Chromebook computer and the video is already there, a reputable web converter is fine. Avoid uploading anything personal — family videos, meetings or client work.</p>'
            },
            {
                h2: 'When the app is the better choice',
                html: '<p>If the video is on your iPhone, the app wins: no upload over mobile data, no waiting, no download step, and you can trim to the exact part you need.</p>'
            }
        ],
        faq: [
            { q: 'Is it safe to extract audio from video online?', a: 'It depends on the site. You upload your video to a third-party server, so avoid it for private content. On-device apps avoid uploading entirely.' },
            { q: 'Is there a free way to extract audio on iPhone without uploading?', a: `Yes. ${APP} is free to start and converts on the device, so your video is never uploaded.` },
            { q: 'Why is online conversion slow on my phone?', a: 'Because the whole video has to upload first. Phone videos are large, and mobile upload speeds are usually much slower than download speeds.' }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-without-app-iphone', 'mp4-to-mp3-iphone'],
        card: { title: 'Online vs app', text: 'Privacy, speed and limits compared.' }
    },
    {
        slug: 'save-music-from-video-iphone',
        keyword: 'save music from video iphone',
        eyebrow: 'Music',
        title: 'How to Save Music from a Video on iPhone (MP3 or M4A)',
        description: 'Save the song or background music from a video on your iPhone as MP3 or M4A. Trim to the exact part, listen offline, share anywhere. Quick guide + screenshots.',
        h1: 'How to Save Music from a Video on iPhone',
        answer: `To save music from a video on iPhone, open the video in Photos, tap Share → Extract Audio, drag the trim handles around the song, then tap Extract Audio in ${APP}. The music is saved as an MP3 or M4A you can play offline in Files or share to any app.`,
        intro: '<p>A song at a wedding, a friend’s cover, the music from your own edit — sometimes the sound is the part you want to keep. Here is how to save it as a standalone music file.</p>',
        steps: [STEP.share, { name: 'Trim around the song', text: 'Tap Trim Video and drag the yellow handles so only the song is selected. Play it to check the start and end.', image: 3 }, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Tips for the best sound',
                html: `<ul>
<li>Trim off talking and applause at the start and end.</li>
<li>Choose MP3 for car stereos and older players, M4A for Apple devices.</li>
<li>Rename the file in Files (long-press → Rename) so you can find it later.</li>
</ul>`
            },
            {
                h2: 'A note on copyright',
                html: '<p>Save music from videos you recorded yourself or have the rights to. Commercial songs are protected by copyright — personal copies of your own recordings are fine; re-publishing someone else’s music is not.</p>'
            },
            {
                h2: 'Make it your ringtone',
                html: '<p>Found a 30-second part you love? <a href="/guides/video-to-ringtone-iphone/">Turn it into a ringtone</a>.</p>'
            }
        ],
        faq: [
            { q: 'How do I get the song from a video on my iPhone?', a: `Share the video to ${APP}, trim around the song and tap Extract Audio. The song is saved as an audio file.` },
            { q: 'Can I add the extracted song to Apple Music?', a: 'The Music app on iPhone cannot import local files directly. Keep the file in Files, or sync it from a Mac or PC.' },
            { q: 'Can I save music from a video I got in Messages?', a: 'Yes. Save the video to Photos first, then extract the audio.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-ringtone-iphone', 'mov-to-mp3-iphone'],
        card: { title: 'Save music from a video', text: 'Keep the song, drop the picture.' }
    }
);

guides.push(
    {
        slug: 'trim-audio-from-video-iphone',
        keyword: 'extract part of audio from video iphone',
        eyebrow: 'Trim',
        title: 'Extract Part of the Audio from a Video on iPhone (Trim)',
        description: 'Need only 10 seconds of sound? Trim a video on iPhone and extract just that part as MP3 or M4A. Drag the handles, preview, export. Free on-device cutter.',
        h1: 'How to Extract Only Part of the Audio from a Video on iPhone',
        answer: `To extract part of the audio from a video on iPhone, open it in ${APP}, tap Trim Video, drag the yellow start and end handles around the part you want, tap Save, then tap Extract Audio. Only the selected section is exported as MP3 or M4A.`,
        intro: '<p>Most of the time you don’t need the whole soundtrack — just a quote, a chorus or a sound effect. Trimming first gives you a small, clean clip.</p>',
        steps: [
            STEP.open,
            { name: 'Tap Trim Video', text: 'On the Audio Extraction screen tap Trim Video to open the timeline.', image: 2 },
            { name: 'Drag the handles', text: 'Drag the yellow left handle to the start and the right handle to the end. The time labels show the exact selection. Tap play to preview, then Save.', image: 3 },
            { name: 'Extract and save the clip', text: 'Tap Extract Audio. Only the trimmed part is exported. Share it or save it to Files.', image: 4 }
        ],
        sections: [
            {
                h2: 'Precision tips',
                html: `<ul>
<li>Leave half a second before and after speech so words are not cut.</li>
<li>For ringtones keep the selection under 30 seconds.</li>
<li>Need several clips from one video? Repeat the trim for each part — every export is stored in your library.</li>
</ul>`
            },
            {
                h2: 'Good things to trim out',
                html: '<p>A single line from a speech, the chorus of a song, a sound effect for an edit, your child’s first words, or the one important minute of a long meeting recording.</p>'
            }
        ],
        faq: [
            { q: 'Can I cut the audio from a video on iPhone?', a: `Yes. Trim the video to the section you need in ${APP}, then extract; only that section is saved as audio.` },
            { q: 'Does trimming change my original video?', a: 'No. The original video in Photos stays untouched; only the exported audio is trimmed.' },
            { q: 'Can I extract several parts from one video?', a: 'Yes. Trim and extract again for each part you need.' }
        ],
        related: ['video-to-ringtone-iphone', 'save-music-from-video-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Extract only part of the audio', text: 'Trim to the exact seconds you need.' }
    },
    {
        slug: 'screen-recording-to-audio-iphone',
        keyword: 'get audio from screen recording iphone',
        eyebrow: 'Screen recordings',
        title: 'How to Get Audio from a Screen Recording on iPhone',
        description: 'Turn an iPhone screen recording into an MP3 or M4A audio file. Fix silent recordings, trim the part you need, and save the sound. Simple steps with screenshots.',
        h1: 'How to Get the Audio from a Screen Recording on iPhone',
        answer: `iPhone screen recordings are saved as videos in Photos. To get the audio, open the recording, tap Share → Extract Audio, trim if needed and tap Extract Audio in ${APP}. If the file is silent, the recording itself captured no sound — turn the microphone on before recording.`,
        intro: '<p>Screen recordings are a common way to capture a voice message, a call on speaker, or a clip from an app. Here is how to keep just the audio.</p>',
        steps: [
            { name: 'Find the recording in Photos', text: 'Screen recordings appear in Photos → Media Types → Screen Recordings.', image: 2 },
            { name: 'Share to Extract Audio', text: 'Open the recording, tap Share and choose Extract Audio.', image: 2 },
            STEP.trim,
            { name: 'Extract and save', text: 'Tap Extract Audio and save the MP3 or M4A to Files.', image: 4 }
        ],
        sections: [
            {
                h2: 'Why is my screen recording silent?',
                html: `<ul>
<li><strong>Microphone off:</strong> in Control Center, long-press the Screen Recording button and tap <em>Microphone</em> to record your voice.</li>
<li><strong>Silent mode:</strong> some app sounds are muted when the phone is in silent mode.</li>
<li><strong>Protected content:</strong> many streaming apps block audio in screen recordings — that is by design and cannot be bypassed.</li>
</ul>`
            },
            {
                h2: 'Respect privacy',
                html: '<p>Only record and save calls or conversations with the consent of everyone involved, and follow the recording laws where you live.</p>'
            }
        ],
        faq: [
            { q: 'Can I convert a screen recording to MP3?', a: 'Yes. Screen recordings are regular videos, so you can extract their audio as MP3 or M4A.' },
            { q: 'Where are screen recordings saved on iPhone?', a: 'In the Photos app, under Media Types → Screen Recordings.' },
            { q: 'Why can I not hear audio in my screen recording?', a: 'The microphone was off or the app you recorded blocks audio capture. Check that the recording plays with sound before extracting.' }
        ],
        related: ['extract-audio-from-video-iphone', 'trim-audio-from-video-iphone', 'lecture-video-to-audio-iphone'],
        card: { title: 'Screen recording to audio', text: 'Keep the sound, fix silent recordings.' }
    },
    {
        slug: 'lecture-video-to-audio-iphone',
        keyword: 'convert lecture video to audio',
        eyebrow: 'Study',
        title: 'Convert a Lecture Video to Audio on iPhone (MP3 Guide)',
        description: 'Turn recorded lectures, webinars and talks into MP3 audio on iPhone so you can study on the go. Smaller files, offline listening, easy sharing. Full guide.',
        h1: 'How to Convert a Lecture Video to Audio on iPhone',
        answer: `To turn a lecture video into audio, open the recording in Photos or Files, tap Share → Extract Audio, and tap Extract Audio in ${APP}. Save the MP3 to Files and listen offline on your commute, at the gym or with the screen off — using a fraction of the storage.`,
        intro: '<p>Most lectures are about what is said, not what is shown. Converting a lecture video to audio turns it into a podcast you can replay anywhere.</p>',
        steps: [
            STEP.share,
            { name: 'Trim the intro and breaks (optional)', text: 'Tap Trim Video to cut the waiting time before the lecture starts and any Q&A you don’t need.', image: 3 },
            STEP.extract,
            { name: 'Save to a Lectures folder', text: 'Tap Share → Save to Files and keep a folder per course so every lecture is easy to find.', image: 4 }
        ],
        sections: [
            {
                h2: 'Why study with audio',
                html: `<ul>
<li><strong>Tiny files:</strong> an hour of audio takes a fraction of the space of an hour of video.</li>
<li><strong>Screen off:</strong> listen with the phone locked, saving battery.</li>
<li><strong>Anywhere:</strong> commute, walk, gym — no Wi-Fi needed.</li>
</ul>`
            },
            {
                h2: 'Turn it into notes',
                html: '<p>Want text? Import the audio into the transcription app you already use and search the transcript later.</p>'
            },
            {
                h2: 'Check the rules first',
                html: '<p>Many universities allow personal recordings but not sharing them. Check your course policy before recording or distributing a lecture.</p>'
            }
        ],
        faq: [
            { q: 'Can I listen to a video with the screen off on iPhone?', a: 'Most video players pause when the screen locks. Converting the video to MP3 lets you listen with the screen off in Files or any audio player.' },
            { q: 'Does an hour-long lecture work?', a: 'Yes. Long recordings work the same way; they just take a little longer to convert.' },
            { q: 'Can I convert Zoom or webinar recordings?', a: 'Yes, once the MP4 recording is in Photos or Files on your iPhone.' }
        ],
        related: ['screen-recording-to-audio-iphone', 'mp4-to-mp3-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Lecture video to audio', text: 'Study on the go with small MP3 files.' }
    },
    {
        slug: 'video-to-ringtone-iphone',
        keyword: 'make a ringtone from a video on iphone',
        eyebrow: 'Ringtones',
        title: 'How to Make a Ringtone from a Video on iPhone (iOS 26)',
        description: 'Turn any video into an iPhone ringtone: trim the audio to 30 seconds, save to Files, tap Share → Use as Ringtone. Works on iOS 26, with a GarageBand fallback.',
        h1: 'How to Make a Ringtone from a Video on iPhone',
        answer: `To make a ringtone from a video, open it in ${APP}, trim to 30 seconds or less, extract as M4A or MP3 and save to Files. On iOS 26, long-press the file in Files, tap Share and choose Use as Ringtone. On older iOS versions, import the audio into GarageBand and export it as a ringtone.`,
        intro: '<p>A laugh, a song from a party, a pet’s bark — any sound from your videos can become your ringtone. iOS 26 made this easy once you have an audio file.</p>',
        steps: [
            STEP.share,
            { name: 'Trim to 30 seconds or less', text: 'Tap Trim Video and select up to 30 seconds — the ringtone limit.', image: 3 },
            { name: 'Extract and save to Files', text: 'Tap Extract Audio (M4A or MP3), then Share → Save to Files.', image: 4 },
            { name: 'Use as Ringtone', text: 'In the Files app, long-press the audio file, tap Share and choose Use as Ringtone (iOS 26). Confirm in Settings → Sounds & Haptics → Ringtone.', image: 4 }
        ],
        sections: [
            {
                h2: 'On iOS 18: the GarageBand method',
                html: `<ol>
<li>Extract and trim the audio as above and save it to Files.</li>
<li>Open GarageBand, start an Audio Recorder project and switch to Tracks view.</li>
<li>Tap the Loop Browser → Files → Browse items from the Files app, and drag your audio into a track.</li>
<li>Go back to My Songs, long-press the project → Share → Ringtone → Export.</li>
</ol>`
            },
            {
                h2: 'Why Use as Ringtone is missing',
                html: `<ul>
<li>The file is longer than 30 seconds — trim it again.</li>
<li>The file is not MP3 or M4A.</li>
<li>Your iPhone is not on iOS 26 yet — use the GarageBand method.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'How long can an iPhone ringtone be?', a: 'Up to 30 seconds for custom ringtones set from audio files.' },
            { q: 'Which format do I need for an iPhone ringtone?', a: 'On iOS 26, MP3 or M4A files under 30 seconds can be set with Use as Ringtone.' },
            { q: 'Can I set a video as a ringtone directly?', a: 'No. Extract the audio from the video first, then set the audio file as the ringtone.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-m4a-iphone', 'save-music-from-video-iphone'],
        card: { title: 'Video to ringtone', text: 'iOS 26 Use as Ringtone — in 4 steps.' }
    }
);
