/**
 * Mga gabay sa Filipino → /fil/guides/<slug>/
 * Pareho ang slug sa English (build/guides/en.js) para magkaugnay ang mga pahina sa hreflang.
 * Mga keyword — tingnan ang “Filipino (FIL)” sa /keywords.md. Istruktura ng field — gaya ng en.js.
 * Walang Filipino na interface ang iOS, kaya English ang mga pangalan ng button at menu (Share, Photos, Files…).
 * Screenshot: 1 cover · 2 extract screen · 3 trim · 4 Share menu · 5 library
 */

const APP = 'Extract Audio from Video⁺';

const STEP = {
    open: {
        name: 'Buksan ang app at pumili ng video',
        text: `Buksan ang ${APP} at pumili ng video mula sa Photos o Files. Mas mabilis: sa Photos, i-tap ang Share sa video at piliin ang “Extract Audio”.`,
        image: 2
    },
    share: {
        name: 'Ipadala ang video sa app',
        text: 'Buksan ang video sa Photos o Files, i-tap ang Share at piliin ang “Extract Audio”. Magbubukas ang app na naka-load na ang video.',
        image: 2
    },
    trim: {
        name: 'I-trim ang gustong bahagi (opsyonal)',
        text: 'I-tap ang “Trim Video”, i-drag ang mga dilaw na marker sa simula at dulo ng bahaging gusto mo, pakinggan, at i-tap ang “Save”.',
        image: 3
    },
    extract: {
        name: 'I-tap ang “Extract Audio”',
        text: 'I-tap ang “Extract Audio” – direktang kino-convert sa iPhone ang audio track sa ilang segundo, at walang ina-upload sa internet.',
        image: 2
    },
    save: {
        name: 'I-save o ipadala ang file',
        text: 'Lalabas sa library ang handang audio file. I-tap ang Share para i-save ito sa Files, ipadala gamit ang AirDrop o sa kahit anong app.',
        image: 4
    }
};

const guides = [];
module.exports = guides;

guides.push(
    {
        slug: 'extract-audio-from-video-iphone',
        keyword: 'paano kunin ang audio sa video iphone',
        eyebrow: 'Basics',
        title: 'Paano kunin ang audio sa video sa iPhone – step by step',
        description: 'Kunin ang audio sa kahit anong video sa iPhone sa apat na tap: pumili ng video, i-trim, i-tap ang “Extract Audio” at i-save bilang MP3 o M4A. Libre.',
        h1: 'Paano kunin ang audio sa video sa iPhone',
        answer: `Para kunin ang audio sa video sa iPhone, buksan ang ${APP}, piliin ang video mula sa Photos, i-trim kung kailangan at i-tap ang “Extract Audio”. Sine-save ng app ang audio track bilang MP3 o M4A sa iPhone sa ilang segundo. Libre ito at gumagana kahit walang internet.`,
        intro: '<p>Walang button na “audio lang ang i-save” sa Photos ng iPhone. Puwede kang gumawa ng shortcut (tingnan ang <a href="/fil/guides/extract-audio-without-app-iphone/">paraang walang app</a>) o i-upload ang video sa website, pero mabagal pareho kung audio lang ang kailangan mo. Ito ang pinakamabilis na paraan: isang libreng app na gumagana direkta sa Share menu.</p>',
        steps: [STEP.open, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Ano ang kailangan mo',
                html: `<ul>
<li>iPhone na may iOS 18.6 o mas bago.</li>
<li>${APP} – libre sa App Store (mga 23 MB).</li>
<li>Video na may tunog: kuha ng camera (MOV), na-download na video (MP4), screen recording, video mula sa Messages o Messenger.</li>
</ul>`
            },
            {
                h2: 'Pinakamabilis na paraan – gamit ang Share',
                html: '<p>Hindi mo na kailangang buksan ang app. Sa <strong>Photos</strong> o <strong>Files</strong>, buksan ang video, i-tap ang <strong>Share</strong>, i-scroll ang hanay ng mga app at piliin ang <strong>“Extract Audio”</strong>. Kung hindi mo makita, i-tap ang “More” at idagdag ito sa Favorites – palagi na itong nandiyan.</p>'
            },
            {
                h2: 'MP3 o M4A – alin ang pipiliin?',
                html: '<p>Tumutugtog ang <strong>MP3</strong> kahit saan: Windows, Android, car stereo, website at video editor. Ang <strong>M4A</strong> (AAC) ay sariling format ng Apple: mas maliit sa parehong kalidad, bagay sa ringtone, GarageBand at iMovie. Kung hindi sigurado, MP3 ang piliin. Dagdag: <a href="/fil/guides/convert-video-to-mp3-iphone/">video to MP3</a> at <a href="/fil/guides/video-to-m4a-iphone/">video to M4A</a>.</p>'
            },
            {
                h2: 'Saan nase-save ang audio?',
                html: '<p>Lumalabas ang bawat na-extract na file sa library ng app kasama ang haba, laki at petsa. Doon, i-tap ang <strong>Share → Save to Files</strong> para ilagay sa iCloud Drive o “On My iPhone”, o ipadala sa Messenger, Viber, Notes, GarageBand o gamit ang AirDrop sa computer.</p>'
            },
            {
                h2: 'Kung may problema',
                html: `<ul>
<li><strong>Walang tunog ang file.</strong> Walang audio track ang video mismo – nangyayari ito sa screen recording na walang mikropono. Tingnan muna ang video sa Photos.</li>
<li><strong>Nasa iCloud ang video.</strong> Dina-download muna ng Photos ang original – hintaying matapos.</li>
<li><strong>20 segundo lang ang kailangan mo.</strong> I-trim bago i-extract – tingnan ang <a href="/fil/guides/trim-audio-from-video-iphone/">paano kunin ang bahagi lang ng audio</a>.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Libre bang kunin ang audio sa video sa iPhone?', a: `Oo. Libre i-download ang ${APP} at libre rin ang basic na pagkuha ng audio. May dagdag na features sa in-app purchase.` },
            { q: 'Bumababa ba ang kalidad kapag kinuha ang audio?', a: 'Sine-save ng app ang audio track ng video bilang de-kalidad na MP3 o M4A. Hindi ito gaganda kaysa original, pero kapareho ito ng tunog kapag pinapanood mo ang video.' },
            { q: 'Puwede bang kunin ang audio sa mahabang video?', a: 'Oo. Ganoon din ang proseso para sa lecture, concert at meeting, medyo mas matagal lang. Kung bahagi lang ang kailangan, i-trim muna.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'trim-audio-from-video-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Kunin ang audio sa video sa iPhone', text: 'Paraang apat na tap – mula sa Photos o Share.' }
    },
    {
        slug: 'convert-video-to-mp3-iphone',
        keyword: 'paano gawing mp3 ang video sa iphone',
        eyebrow: 'Video to MP3',
        title: 'Paano gawing MP3 ang video sa iPhone – mabilis at libre',
        description: 'Gawing MP3 ang kahit anong video sa iPhone sa ilang segundo. Gumagana mula sa Photos, nananatili sa device ang file, at puwedeng i-trim bago i-export.',
        h1: 'Paano gawing MP3 ang video sa iPhone',
        answer: `Buksan ang video sa Photos, i-tap ang Share at piliin ang “Extract Audio” (${APP}). I-trim kung kailangan, i-tap ang “Extract Audio” at i-save bilang MP3. Nananatili sa iPhone ang file – puwede mo itong ipadala sa Files, AirDrop o kahit anong app. Hindi kailangan ng computer o account.`,
        intro: '<p>Ang MP3 ang pinaka-compatible na audio format: tumutugtog ito sa kahit anong kotse, computer at editor. Ganito gawing MP3 ang video nang hindi binibitawan ang iPhone.</p>',
        steps: [STEP.share, STEP.trim, { name: 'I-extract bilang MP3', text: 'I-tap ang “Extract Audio” at piliin ang MP3. Direkta sa iPhone ang conversion ng video to MP3.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'Bakit app at hindi online converter?',
                html: '<p>Kailangan sa online converter na i-upload ang buong video, maghintay sa pila at i-download ulit ang MP3 – mabagal sa mobile data at delikado para sa personal na video. Gumagana offline ang app, nasa device lang ang file at puwede mong i-trim bago i-convert. Buong paghahambing: <a href="/fil/guides/extract-audio-online-vs-app/">online o app</a>.</p>'
            },
            {
                h2: 'Anong mga video ang puwedeng gawing MP3?',
                html: '<p>Lahat ng nape-play ng iPhone: kuha ng camera (<a href="/fil/guides/mov-to-mp3-iphone/">MOV</a>), na-download na video (<a href="/fil/guides/mp4-to-mp3-iphone/">MP4</a>), <a href="/fil/guides/screen-recording-to-audio-iphone/">screen recording</a>, at video mula sa Messages, Messenger, Viber at AirDrop.</p>'
            },
            {
                h2: 'Ano ang gagawin sa MP3',
                html: `<ul>
<li>I-save sa <strong>Files</strong> at pakinggan offline.</li>
<li>Ipadala sa computer gamit ang <strong>AirDrop</strong>.</li>
<li>Gawing <a href="/fil/guides/video-to-ringtone-iphone/">ringtone</a> ang 30 segundo.</li>
<li>Idagdag sa GarageBand, CapCut o podcast editor.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Kaya bang gawing MP3 ng iPhone ang video nang walang app?', a: 'Hindi direkta. Sa Shortcuts, M4A lang ang puwedeng i-save. Para sa MP3 sa iPhone, kailangan ng app o website.' },
            { q: 'Libre ba ang pag-convert sa MP3?', a: `Oo, libre ang basic na conversion sa ${APP}. Ang dagdag na features ay nasa in-app purchase.` },
            { q: 'Kailangan ba ng internet para gawing MP3 ang video?', a: 'Hindi. Sa iPhone ginagawa ang conversion at gumagana ito offline. Ang mga video lang na nasa iCloud ang kailangang i-download muna.' }
        ],
        related: ['mp4-to-mp3-iphone', 'mov-to-mp3-iphone', 'video-to-m4a-iphone'],
        card: { title: 'Video to MP3 sa iPhone', text: 'Kahit anong video sa universal na MP3.' }
    }
);

guides.push(
    {
        slug: 'mp4-to-mp3-iphone',
        keyword: 'mp4 to mp3 iphone',
        eyebrow: 'MP4 to MP3',
        title: 'MP4 to MP3 sa iPhone: libreng converter, walang upload',
        description: 'I-convert nang libre ang MP4 to MP3 sa iPhone: buksan ang file sa Files o Photos at i-tap ang Share → “Extract Audio”. Gumagana offline, may trim.',
        h1: 'Paano i-convert ang MP4 to MP3 sa iPhone',
        answer: `Para i-convert ang MP4 to MP3 sa iPhone, buksan ang file sa Files o Photos, i-tap ang Share at piliin ang “Extract Audio”. Sa ${APP}, i-trim kung gusto, i-tap ang “Extract Audio”, piliin ang MP3 at i-save. Libre, sa device, walang internet.`,
        intro: '<p>Kadalasang dumarating ang MP4 bilang download, email attachment o sa AirDrop, kaya madalas itong nasa <strong>Files</strong> app sa halip na Photos. Gumagana ang app sa dalawa.</p>',
        steps: [
            { name: 'Hanapin ang MP4 file', text: 'Buksan ang Files (Downloads, iCloud Drive o “On My iPhone”) o Photos at hanapin ang MP4.', image: 2 },
            { name: 'Ipadala sa “Extract Audio”', text: 'I-long press ang file at piliin ang Share → “Extract Audio”. Magbubukas ang MP4 sa app.', image: 2 },
            STEP.trim,
            { name: 'I-save bilang MP3', text: 'I-tap ang “Extract Audio”, piliin ang MP3, tapos Share → Save to Files para nasa tabi ng original na MP4 ang MP3.', image: 4 }
        ],
        sections: [
            {
                h2: 'Pagkakaiba ng MP4 at MP3',
                html: '<p>Ang MP4 ay container na may larawan at tunog; tunog lang ang laman ng MP3. Kapag ginawang MP3 ang MP4, naiiwan ang audio track at inaalis ang video: mas maliit ang file at tumutugtog sa kahit anong player.</p>'
            },
            {
                h2: 'MP4 mula sa Messenger, Viber at email',
                html: '<p>I-save muna ang attachment: sa chat, buksan ang video → Share → “Save Video” (sa Photos) o “Save to Files”. Pagkatapos, sundin ang mga hakbang sa itaas. I-convert lang ang sarili mong video o mga video na may karapatan ka.</p>'
            },
            {
                h2: 'Kailangan mo ng M4A?',
                html: '<p>Para sa ringtone at mga app ng Apple, mas bagay ang M4A. Tingnan ang <a href="/fil/guides/video-to-m4a-iphone/">paano i-save ang video bilang M4A sa iPhone</a>.</p>'
            }
        ],
        faq: [
            { q: 'Puwede bang libreng i-convert ang MP4 to MP3 sa iPhone?', a: `Oo. Libreng kino-convert ng ${APP} ang MP4 to MP3 direkta sa device. May dagdag na features sa in-app purchase.` },
            { q: 'Mas maliit ba ang MP3 kaysa MP4?', a: 'Oo, kadalasan mas maliit nang husto: inaalis ang video track at audio na lang ang natitira.' },
            { q: 'Puwede bang mag-convert ng maraming MP4?', a: 'Oo. I-convert isa-isa – nase-save lahat ng MP3 sa library ng app.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'mov-to-mp3-iphone', 'extract-audio-online-vs-app'],
        card: { title: 'MP4 to MP3 sa iPhone', text: 'Mga MP4 mula sa Files at Photos – gawing MP3.' }
    },
    {
        slug: 'mov-to-mp3-iphone',
        keyword: 'mov to mp3 iphone',
        eyebrow: 'MOV to MP3',
        title: 'MOV to MP3 sa iPhone – audio mula sa video ng camera',
        description: 'MOV file ang mga video mula sa camera ng iPhone. I-convert ang MOV to MP3 sa phone mismo: pumili ng video, i-trim at i-tap ang “Extract Audio”. Libre.',
        h1: 'Paano i-convert ang MOV to MP3 sa iPhone',
        answer: `Sa MOV format sine-save ang lahat ng video mula sa camera ng iPhone. Para magkaroon ng MP3, buksan ang video sa Photos, i-tap ang Share → “Extract Audio”, i-trim kung kailangan at i-tap ang “Extract Audio” sa ${APP}. Mase-save ang MP3 sa iPhone – hindi kailangan ng computer.`,
        intro: '<p>Ang MOV ay video format ng Apple na ginagamit ng camera ng iPhone: concert, talumpati, kaibigang nag-gigitara, boses na gusto mong itago. Bilang MP3, mapapakinggan mo ang tunog kahit saan.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Kailan kapaki-pakinabang ang MOV to MP3',
                html: `<ul>
<li>Itago ang audio ng concert o performance na kinunan mo.</li>
<li>Gawing alaala ang toast o talumpati bilang audio.</li>
<li>Ipadala ang recording ng practice sa banda nang walang napakalaking video.</li>
<li>Pakinggan ang <a href="/fil/guides/lecture-video-to-audio-iphone/">na-record na lecture</a> habang bumibiyahe.</li>
</ul>`
            },
            {
                h2: 'HEVC, 4K at Cinematic mode',
                html: '<p>Parehong proseso para sa HEVC at 4K na video. Audio lang ang kino-convert, kaya kahit napakalaking MOV ay nagiging maliit na audio file.</p>'
            },
            {
                h2: 'Bakit hindi na kailangan ng computer',
                html: '<p>Mas matagal ilipat sa computer ang MOV na ilang gigabyte para lang sa audio kaysa i-convert ito sa phone. Ginagawa ito ng app kung nasaan na ang video.</p>'
            }
        ],
        faq: [
            { q: 'Anong format nagre-record ng video ang iPhone?', a: 'MOV file ang nire-record ng camera ng iPhone, kadalasan may HEVC o H.264 na video at AAC na audio.' },
            { q: 'Puwede bang i-convert ang MOV to MP3 nang walang bawas sa kalidad?', a: 'Pinapanatili ng app ang kalidad ng original na recording: kapareho ng tunog ng video ang MP3.' },
            { q: 'Puwede bang i-save ang MOV bilang M4A?', a: 'Oo, piliin ang M4A. Bagay ito sa ringtone at mga app ng Apple.' }
        ],
        related: ['mp4-to-mp3-iphone', 'convert-video-to-mp3-iphone', 'save-music-from-video-iphone'],
        card: { title: 'MOV to MP3', text: 'Audio mula sa video ng camera ng iPhone.' }
    },
    {
        slug: 'video-to-m4a-iphone',
        keyword: 'video to m4a iphone',
        eyebrow: 'Video to M4A',
        title: 'Video to M4A sa iPhone – MP4 at MOV to M4A nang libre',
        description: 'I-save bilang M4A ang audio ng video sa iPhone para sa ringtone, GarageBand at mga app ng Apple. Libre, sa device, may trim. MP4 o MOV to M4A sa apat na tap.',
        h1: 'Paano i-save bilang M4A ang audio ng video sa iPhone',
        answer: `Para gawing M4A ang video sa iPhone, ipadala ang video mula sa Photos o Files sa “Extract Audio”, i-trim kung gusto, i-tap ang “Extract Audio” at piliin ang M4A. Sine-save ng ${APP} ang M4A (AAC) file na bagay sa GarageBand, iMovie, music player at ringtone.`,
        intro: '<p>Ang M4A ay sariling audio format ng Apple. Sa halos parehong kalidad, mas maliit ito sa MP3, at ito mismo ang hinahanap ng iPhone para sa ringtone at GarageBand project.</p>',
        steps: [STEP.share, STEP.trim, { name: 'I-extract bilang M4A', text: 'I-tap ang “Extract Audio” at piliin ang M4A.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'M4A o MP3 – kailan pipiliin ang M4A',
                html: `<table class="guide-table"><thead><tr><th></th><th>M4A (AAC)</th><th>MP3</th></tr></thead><tbody>
<tr><td>Pinakabagay sa</td><td>iPhone, Mac, ringtone, GarageBand</td><td>Lahat ng iba – Windows, Android, kotse</td></tr>
<tr><td>Laki ng file</td><td>Mas maliit sa parehong kalidad</td><td>Medyo mas malaki</td></tr>
<tr><td>Compatibility</td><td>Napakahusay</td><td>Universal</td></tr>
</tbody></table>`
            },
            {
                h2: 'Gawing ringtone ang M4A',
                html: '<p>Sa iOS 26, puwedeng gawing ringtone direkta mula sa Files ang M4A na mas maikli sa 30 segundo. Detalye: <a href="/fil/guides/video-to-ringtone-iphone/">paano gumawa ng ringtone mula sa video</a>.</p>'
            },
            {
                h2: 'Buksan sa GarageBand o iMovie',
                html: '<p>I-save ang M4A sa Files, tapos i-import ito gamit ang file browser ng GarageBand o iMovie – bilang background music, voice-over o sound effect.</p>'
            }
        ],
        faq: [
            { q: 'Mas maganda ba ang M4A kaysa MP3?', a: 'Sa parehong bitrate, kadalasan kasing-ganda o mas maganda ang tunog ng M4A (AAC) at mas maliit ang file. Mas maraming device ang compatible sa MP3.' },
            { q: 'Puwede bang gumawa ng M4A gamit ang Shortcuts?', a: 'Oo, gumagawa ng M4A ang action na “Encode Media” na may “Audio Only”. Pero hindi mo ma-trim ang audio o ma-save bilang MP3 sa ganoong paraan – sa app, puwede.' },
            { q: 'Libre ba ang pag-save bilang M4A?', a: `Oo, libre ang basic na pagkuha sa ${APP}, kasama ang pag-export sa M4A.` }
        ],
        related: ['video-to-ringtone-iphone', 'convert-video-to-mp3-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Video to M4A', text: 'Format ng Apple para sa ringtone at GarageBand.' }
    }
);

guides.push(
    {
        slug: 'extract-audio-without-app-iphone',
        keyword: 'kunin ang audio sa video iphone nang walang app',
        eyebrow: 'Shortcuts o app',
        title: 'Paano kunin ang audio sa video sa iPhone nang walang app',
        description: 'Makukuha ang audio ng video sa iPhone kahit walang app – gamit ang Shortcuts at action na “Encode Media”. Setup, limitasyon at mas mabilis na paraan.',
        h1: 'Paano kunin ang audio sa video sa iPhone nang walang app',
        answer: 'Kahit walang third-party app, makukuha ang audio gamit ang Shortcuts: idagdag ang action na “Encode Media”, i-on ang “Audio Only”, idagdag ang “Save File” at i-on ang pagpapakita sa Share menu. Pagkatapos, ipadala ang video sa shortcut. M4A lang ang resulta at walang trim; para sa MP3 at maiikling clip, mas mabilis ang app.',
        intro: '<p>Kayang ihiwalay ng libreng Shortcuts app ng Apple ang audio mula sa video. Ilang minuto lang ang setup. Ito ang eksaktong recipe – at ang mga limitasyon nito.</p>',
        steps: [
            { name: 'Gumawa ng bagong shortcut', text: 'Buksan ang Shortcuts, i-tap ang + at pangalanan ang shortcut na “Audio mula sa video”.', image: 2 },
            { name: 'Idagdag ang “Encode Media”', text: 'I-tap ang “Add Action”, hanapin ang “Encode Media”, idagdag ito, buksan ang options gamit ang arrow at i-on ang “Audio Only”.', image: 2 },
            { name: 'Idagdag ang “Save File”', text: 'Idagdag ang action na “Save File” para mapunta sa Files ang resulta.', image: 4 },
            { name: 'Ipakita sa Share menu', text: 'Buksan ang details ng shortcut (i icon), i-on ang “Show in Share Sheet” at payagan ang type na “Media”. Ngayon, ipadala ang video mula sa Photos at piliin ang shortcut.', image: 4 }
        ],
        sections: [
            {
                h2: 'Mga limitasyon ng paraang Shortcuts',
                html: `<ul>
<li><strong>M4A lang</strong> – walang MP3.</li>
<li><strong>Walang trim</strong> – laging buong audio track ang nase-save.</li>
<li><strong>Walang library</strong> – napupunta sa Files ang mga file at kailangan mong hanapin at palitan ang pangalan nang mano-mano.</li>
<li>Sa mahahabang video, puwedeng tumigil ang shortcut nang walang malinaw na error.</li>
</ul>`
            },
            {
                h2: 'Ang opsyong isang tap',
                html: `<p>Ganoon din ang ginagawa ng ${APP}, pero may trim, pagpili ng MP3 o M4A at library ng lahat ng na-extract na file. Nasa Share menu rin ang app, kaya hindi ito mas mabagal – at wala kang kailangang buuin.</p>`
            },
            {
                h2: 'Iba pang paraan na walang app',
                html: '<p>Puwede ring ihiwalay ang audio sa iMovie o GarageBand, pero mas maraming hakbang at limitado ang export format. Gumagana rin ang mga website, pero kailangang i-upload ang video sa internet – tingnan ang <a href="/fil/guides/extract-audio-online-vs-app/">online o app</a>.</p>'
            }
        ],
        faq: [
            { q: 'May built-in bang paraan ang iPhone para kunin ang audio?', a: 'Walang hiwalay na button sa Photos. Ang pinakamalapit na built-in na opsyon ay ang action na “Encode Media” na may “Audio Only” sa Shortcuts app.' },
            { q: 'Anong format sine-save ng shortcut ang audio?', a: 'M4A. Hindi puwedeng mag-save ng MP3 gamit ang Shortcuts.' },
            { q: 'Puwede bang i-trim ang audio gamit ang shortcut?', a: `Hindi nang madali. Para mag-trim, gumamit ng app na may timeline, gaya ng ${APP}.` }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-online-vs-app', 'video-to-m4a-iphone'],
        card: { title: 'Walang app (Shortcuts)', text: 'Ang libreng recipe at mga limitasyon nito.' }
    },
    {
        slug: 'extract-audio-online-vs-app',
        keyword: 'extract audio from video online',
        eyebrow: 'Online o app',
        title: 'Kunin ang audio sa video: online o app sa iPhone?',
        description: 'Online o app ba ang mas mainam para kunin ang audio sa video? Paghahambing ng privacy, bilis, limitasyon at trim sa iPhone – at ano ang pipiliin.',
        h1: 'Kunin ang audio sa video online o gamit ang app: alin sa iPhone',
        answer: `Gumagana ang online services sa kahit anong device, pero kailangang i-upload ang buong video, maghintay sa processing at i-download ang resulta – mabagal sa mobile data at hindi ligtas para sa personal na recording. Sa iPhone, mas mabilis ang app gaya ng ${APP}, gumagana offline, nasa device lang ang video at may trim.`,
        intro: '<p>Kapag hinanap mo ang “extract audio from video online”, dose-dosenang libreng website ang lalabas. Maginhawa sila sa laptop na may mabilis na internet. Iba ang sitwasyon sa iPhone.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Paghahambing',
                html: `<table class="guide-table"><thead><tr><th></th><th>Online service</th><th>${APP}</th></tr></thead><tbody>
<tr><td>Privacy</td><td>Ina-upload ang video sa server ng iba</td><td>Nananatili sa iPhone</td></tr>
<tr><td>Bilis</td><td>Upload + pila + download</td><td>Segundo, sa device</td></tr>
<tr><td>Walang internet</td><td>Hindi</td><td>Oo</td></tr>
<tr><td>Limit sa laki</td><td>Madalas sa libreng plan</td><td>Storage lang ng iPhone</td></tr>
<tr><td>Trim</td><td>Minsan</td><td>May built-in na timeline</td></tr>
<tr><td>Ads at pop-up</td><td>Madalas</td><td>Walang web ads</td></tr>
<tr><td>Presyo</td><td>Libre pero may limitasyon</td><td>Libre ang basic features</td></tr>
</tbody></table>`
            },
            {
                h2: 'Kailan sulit ang online service',
                html: '<p>Kung nasa Windows computer ka at nandoon na ang video, puwede na ang maaasahang online converter. Huwag mag-upload ng personal: family video, work meeting o materyales ng kliyente.</p>'
            },
            {
                h2: 'Kailan mas mainam ang app',
                html: '<p>Kung nasa iPhone ang video, panalo ang app: hindi mo na kailangang i-upload sa mobile network, maghintay at mag-download ng resulta, at eksakto mong mapuputol ang bahaging kailangan.</p>'
            }
        ],
        faq: [
            { q: 'Ligtas bang kunin ang audio sa video online?', a: 'Depende sa website. Ina-upload ang video sa third-party server, kaya iwasan ito sa personal na recording. Walang ina-upload ang mga app na gumagana sa device.' },
            { q: 'Puwede bang libreng kunin ang audio sa iPhone nang walang upload?', a: `Oo. Libreng kino-convert ng ${APP} ang video direkta sa device, at hindi ipinapadala kahit saan ang video.` },
            { q: 'Bakit ang bagal ng online conversion sa phone?', a: 'Kailangan munang i-upload ang buong video. Malalaki ang video mula sa phone, at kadalasang mas mabagal ang upload speed sa mobile network kaysa sa download speed.' }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-without-app-iphone', 'mp4-to-mp3-iphone'],
        card: { title: 'Online o app', text: 'Privacy, bilis at limitasyon – paghahambing.' }
    },
    {
        slug: 'save-music-from-video-iphone',
        keyword: 'paano kunin ang music sa video iphone',
        eyebrow: 'Music',
        title: 'Paano kunin ang music sa video sa iPhone (MP3 o M4A)',
        description: 'I-save ang kanta o background music mula sa video sa iPhone bilang MP3 o M4A. I-trim nang eksakto sa kanta, makinig offline, i-share. Maikling gabay.',
        h1: 'Paano kunin ang music sa video sa iPhone',
        answer: `Para kunin ang music sa video sa iPhone, buksan ang video sa Photos, i-tap ang Share → “Extract Audio”, piliin ang kanta gamit ang mga marker at i-tap ang “Extract Audio” sa ${APP}. Mase-save ang music bilang MP3 o M4A – pakinggan offline sa Files o ipadala sa kahit anong app.`,
        intro: '<p>Kanta sa kasal, cover ng kaibigan, music mula sa sarili mong edit – minsan ang tunog ang pinakamahalagang bahagi ng video. Ganito ito i-save bilang hiwalay na music file.</p>',
        steps: [STEP.share, { name: 'Piliin ang kanta', text: 'I-tap ang “Trim Video” at i-drag ang mga dilaw na marker para kanta na lang ang matira. Pakinggan ang simula at dulo.', image: 3 }, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Para sa pinakamagandang tunog',
                html: `<ul>
<li>Putulin ang usapan at palakpakan sa simula at dulo.</li>
<li>MP3 para sa kotse at lumang player, M4A para sa Apple devices.</li>
<li>Palitan ang pangalan ng file sa Files (long press → “Rename”) para madaling mahanap.</li>
</ul>`
            },
            {
                h2: 'Tungkol sa copyright',
                html: '<p>Mag-save ng music mula sa sarili mong video o mga video na may karapatan ka. Protektado ng copyright ang commercial na kanta: okay ang personal na kopya ng sarili mong recording, pero hindi ang pag-publish ng music ng iba.</p>'
            },
            {
                h2: 'Gawing ringtone',
                html: '<p>Nahanap mo na ang paborito mong 30 segundo? <a href="/fil/guides/video-to-ringtone-iphone/">Gawin itong ringtone</a>.</p>'
            }
        ],
        faq: [
            { q: 'Paano kunin ang kanta sa video sa iPhone?', a: `Ipadala ang video sa ${APP}, piliin ang kanta habang nagti-trim at i-tap ang “Extract Audio”. Mase-save ang kanta bilang audio file.` },
            { q: 'Puwede bang idagdag sa Apple Music ang nakuhang kanta?', a: 'Hindi direktang nag-i-import ng local file ang Music app sa iPhone. Itago ang file sa Files o mag-sync gamit ang Mac o PC.' },
            { q: 'Puwede bang kunin ang music sa video mula sa Messenger o Messages?', a: 'Oo. I-save muna ang video sa Photos o Files, tapos kunin ang audio.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-ringtone-iphone', 'mov-to-mp3-iphone'],
        card: { title: 'Kunin ang music sa video', text: 'Itago ang kanta, iwan ang video.' }
    }
);

guides.push(
    {
        slug: 'trim-audio-from-video-iphone',
        keyword: 'paano i-trim ang audio ng video sa iphone',
        eyebrow: 'Trim',
        title: 'Paano kunin ang bahagi lang ng audio ng video sa iPhone',
        description: '10 segundo lang ng audio ang kailangan? I-trim ang video sa iPhone at iyon lang ang i-save bilang MP3 o M4A. Mga marker, preview at export – libre.',
        h1: 'Paano kunin ang bahagi lang ng audio ng video sa iPhone',
        answer: `Para kunin ang bahagi lang ng audio ng video sa iPhone, buksan ito sa ${APP}, i-tap ang “Trim Video”, i-drag ang mga dilaw na marker ng simula at dulo sa paligid ng gustong bahagi, i-tap ang “Save” at saka ang “Extract Audio”. Ang napiling bahagi lang ang mase-save bilang MP3 o M4A.`,
        intro: '<p>Kadalasan hindi mo kailangan ang buong audio track kundi isang quote, chorus o sound effect. Kapag nag-trim ka muna, maliit at malinis na clip ang makukuha mo.</p>',
        steps: [
            STEP.open,
            { name: 'I-tap ang “Trim Video”', text: 'Sa extract screen, i-tap ang “Trim Video” para buksan ang timeline.', image: 2 },
            { name: 'I-drag ang mga marker', text: 'I-drag ang kaliwang dilaw na marker sa simula at ang kanan sa dulo. Nakikita sa tabi ang oras ng napili. Pakinggan at i-tap ang “Save”.', image: 3 },
            { name: 'I-extract at i-save', text: 'I-tap ang “Extract Audio” – ang na-trim na bahagi lang ang mae-export. Ipadala ito o i-save sa Files.', image: 4 }
        ],
        sections: [
            {
                h2: 'Mga tip para sa eksaktong trim',
                html: `<ul>
<li>Mag-iwan ng kalahating segundo bago at pagkatapos magsalita para hindi maputol ang mga salita.</li>
<li>Para sa ringtone, hanggang 30 segundo lang ang piliin.</li>
<li>Maraming bahagi mula sa iisang video? Ulitin ang trim sa bawat isa – nase-save lahat sa library.</li>
</ul>`
            },
            {
                h2: 'Ano ang karaniwang pinuputol',
                html: '<p>Isang linya mula sa talumpati, chorus ng kanta, sound effect para sa edit, unang salita ng bata, o ang pinakamahalagang minuto ng mahabang meeting recording.</p>'
            }
        ],
        faq: [
            { q: 'Puwede bang i-trim ang audio ng video sa iPhone?', a: `Oo. I-trim ang video sa gustong bahagi sa ${APP} at i-extract ang audio – iyon lang ang mase-save.` },
            { q: 'Nababago ba ng trim ang original na video?', a: 'Hindi. Hindi nagbabago ang original sa Photos; ang audio file lang na ie-export ang tina-trim.' },
            { q: 'Puwede bang kumuha ng maraming bahagi mula sa isang video?', a: 'Oo. Mag-trim at mag-extract ulit para sa bawat bahaging kailangan.' }
        ],
        related: ['video-to-ringtone-iphone', 'save-music-from-video-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Bahagi lang ng audio', text: 'Trim na eksakto hanggang segundo.' }
    },
    {
        slug: 'screen-recording-to-audio-iphone',
        keyword: 'audio ng screen recording iphone',
        eyebrow: 'Screen recording',
        title: 'Paano i-save ang audio ng screen recording sa iPhone',
        description: 'Gawing MP3 o M4A ang screen recording ng iPhone. Alamin kung bakit walang tunog ang recording, paano putulin ang tamang bahagi at i-save ang audio.',
        h1: 'Paano i-save ang audio ng screen recording sa iPhone',
        answer: `Sa Photos nase-save bilang video ang screen recording ng iPhone. Para makuha ang audio, buksan ang recording, i-tap ang Share → “Extract Audio”, i-trim kung kailangan at i-tap ang “Extract Audio” sa ${APP}. Kung walang tunog ang file, hindi talaga na-record ang tunog – i-on ang mikropono bago mag-record.`,
        intro: '<p>Karaniwang paraan ang screen recording para itago ang voice message, tawag na naka-speaker o clip mula sa app. Ganito itago ang audio lang.</p>',
        steps: [
            { name: 'Hanapin ang recording sa Photos', text: 'Nasa Photos → Media Types → Screen Recordings ang mga screen recording.', image: 2 },
            { name: 'Ipadala sa “Extract Audio”', text: 'Buksan ang recording, i-tap ang Share at piliin ang “Extract Audio”.', image: 2 },
            STEP.trim,
            { name: 'I-extract at i-save', text: 'I-tap ang “Extract Audio” at i-save ang MP3 o M4A sa Files.', image: 4 }
        ],
        sections: [
            {
                h2: 'Bakit walang tunog ang screen recording?',
                html: `<ul>
<li><strong>Naka-off ang mikropono:</strong> sa Control Center, i-long press ang Screen Recording button at i-on ang “Microphone” para ma-record ang boses mo.</li>
<li><strong>Silent mode:</strong> may mga app na nagmu-mute ng tunog kapag naka-silent.</li>
<li><strong>Protektadong content:</strong> maraming streaming service ang nagba-block ng tunog sa screen recording – limitasyon ito at hindi malulusutan.</li>
</ul>`
            },
            {
                h2: 'Igalang ang privacy',
                html: '<p>Mag-record at mag-save lang ng tawag at usapan kung pumayag ang lahat ng kasali at ayon sa batas sa inyong lugar.</p>'
            }
        ],
        faq: [
            { q: 'Puwede bang gawing MP3 ang screen recording?', a: 'Oo. Ordinaryong video ang screen recording, kaya puwedeng i-save ang audio nito bilang MP3 o M4A.' },
            { q: 'Nasaan ang mga screen recording sa iPhone?', a: 'Sa Photos app, sa Media Types → Screen Recordings.' },
            { q: 'Bakit walang tunog ang screen recording?', a: 'Naka-off ang mikropono o bina-block ng app ang pag-record ng tunog. Bago mag-extract, tiyaking may tunog ang recording kapag pinapatugtog.' }
        ],
        related: ['extract-audio-from-video-iphone', 'trim-audio-from-video-iphone', 'lecture-video-to-audio-iphone'],
        card: { title: 'Audio ng screen recording', text: 'I-save ang audio at alamin kung bakit nawawala.' }
    }
);

guides.push(
    {
        slug: 'lecture-video-to-audio-iphone',
        keyword: 'gawing audio ang video lecture',
        eyebrow: 'Pag-aaral',
        title: 'Paano gawing audio (MP3) ang video lecture sa iPhone',
        description: 'Gawing MP3 ang na-record na lecture, webinar at talk sa iPhone at mag-aral habang bumibiyahe. Maliit na file, pakikinig offline, madaling i-share.',
        h1: 'Paano gawing audio ang video lecture sa iPhone',
        answer: `Para gawing audio ang video lecture, buksan ang recording sa Photos o Files, i-tap ang Share → “Extract Audio”, tapos “Extract Audio” sa ${APP}. I-save ang MP3 sa Files at makinig offline – sa biyahe, sa gym o naka-off ang screen, at mas maliit pa ang file.`,
        intro: '<p>Sa lecture, mas mahalaga ang sinasabi kaysa ipinapakita. Kapag ginawa mong audio ang video lecture, may podcast ka na mapapakinggan ulit kahit saan.</p>',
        steps: [
            STEP.share,
            { name: 'Alisin ang intro at break (opsyonal)', text: 'I-tap ang “Trim Video” para alisin ang paghihintay bago magsimula at ang Q&A na hindi mo kailangan.', image: 3 },
            STEP.extract,
            { name: 'I-save sa folder na “Lectures”', text: 'I-tap ang Share → Save to Files at gumawa ng folder para sa bawat subject para mabilis mahanap ang mga recording.', image: 4 }
        ],
        sections: [
            {
                h2: 'Bakit maginhawa ang mag-aral gamit ang audio',
                html: `<ul>
<li><strong>Maliit na file:</strong> mas maliit nang ilang beses ang isang oras na audio kaysa isang oras na video.</li>
<li><strong>Naka-off ang screen:</strong> makinig kahit naka-lock ang phone at makatipid ng battery.</li>
<li><strong>Kahit saan:</strong> sa jeep, MRT, habang naglalakad o sa gym – hindi kailangan ng Wi‑Fi.</li>
</ul>`
            },
            {
                h2: 'Gawing notes',
                html: '<p>Kailangan mo ng text? I-import ang audio sa transcription app na ginagamit mo na at maghanap sa text.</p>'
            },
            {
                h2: 'Alamin ang mga patakaran',
                html: '<p>Maraming paaralan ang pumapayag na i-record ang lecture para sa sariling gamit pero hindi para ipamahagi. Alamin ang patakaran ng klase bago mag-record o mag-share ng lecture.</p>'
            }
        ],
        faq: [
            { q: 'Puwede bang pakinggan ang video sa iPhone kahit naka-off ang screen?', a: 'Karamihan ng video player ay humihinto kapag na-lock ang phone. Kapag ginawa mong MP3 ang video, mapapakinggan mo ito kahit naka-off ang screen sa Files o kahit anong audio player.' },
            { q: 'Kaya ba ng isang oras na lecture?', a: 'Oo. Ganoon din ang proseso para sa mahahabang recording, medyo mas matagal lang.' },
            { q: 'Puwede bang i-convert ang recording ng Zoom at webinar?', a: 'Oo, basta nasa Photos o Files na ng iPhone ang MP4 recording.' }
        ],
        related: ['screen-recording-to-audio-iphone', 'mp4-to-mp3-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Video lecture to audio', text: 'Mag-aral habang bumibiyahe gamit ang maliit na MP3.' }
    },
    {
        slug: 'video-to-ringtone-iphone',
        keyword: 'paano gumawa ng ringtone mula sa video iphone',
        eyebrow: 'Ringtone',
        title: 'Paano gumawa ng ringtone mula sa video sa iPhone (iOS 26)',
        description: 'Gawing ringtone ng iPhone ang kahit anong video: i-trim ang audio sa 30 segundo, i-save sa Files at i-tap ang Share → “Use as Ringtone”. iOS 26 at GarageBand.',
        h1: 'Paano gumawa ng ringtone mula sa video sa iPhone',
        answer: `Para gumawa ng ringtone mula sa video, buksan ito sa ${APP}, i-trim hanggang 30 segundo, i-extract ang audio bilang M4A o MP3 at i-save sa Files. Sa iOS 26, i-long press ang file sa Files at i-tap ang Share → “Use as Ringtone”. Sa mas lumang iOS, i-import ang audio sa GarageBand at i-export bilang ringtone.`,
        intro: '<p>Tawa, kanta sa party, tahol ng aso – puwedeng maging ringtone ang kahit anong tunog sa mga video mo. Madali ito sa iOS 26 kung may audio file ka.</p>',
        steps: [
            STEP.share,
            { name: 'I-trim sa 30 segundo', text: 'I-tap ang “Trim Video” at pumili ng hanggang 30 segundo – iyon ang limit para sa ringtone.', image: 3 },
            { name: 'I-extract at i-save sa Files', text: 'I-tap ang “Extract Audio” (M4A o MP3), tapos Share → Save to Files.', image: 4 },
            { name: 'Use as Ringtone', text: 'Sa Files, i-long press ang audio file at i-tap ang Share → “Use as Ringtone” (iOS 26). Tingnan sa Settings → Sounds & Haptics → Ringtone.', image: 4 }
        ],
        sections: [
            {
                h2: 'Sa iOS 18: gamit ang GarageBand',
                html: `<ol>
<li>I-extract at i-trim ang audio gaya ng nasa itaas, at i-save ito sa Files.</li>
<li>Buksan ang GarageBand, gumawa ng “Audio Recorder” project at lumipat sa tracks view.</li>
<li>Buksan ang loop browser → Files → “Browse items from the Files app” at i-drag ang audio sa track.</li>
<li>Bumalik sa “My Songs”, i-long press ang project → Share → Ringtone → Export.</li>
</ol>`
            },
            {
                h2: 'Bakit wala ang “Use as Ringtone”',
                html: `<ul>
<li>Mas mahaba sa 30 segundo ang file – i-trim ulit.</li>
<li>Hindi MP3 o M4A ang format ng file.</li>
<li>Wala pang iOS 26 ang iPhone – gamitin ang GarageBand.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Gaano kahaba ang puwedeng ringtone sa iPhone?', a: 'Hanggang 30 segundo ang custom na ringtone mula sa audio file.' },
            { q: 'Anong format ang kailangan ng ringtone sa iPhone?', a: 'Sa iOS 26, puwedeng gawing ringtone gamit ang “Use as Ringtone” ang MP3 o M4A na mas maikli sa 30 segundo.' },
            { q: 'Puwede bang gawing ringtone agad ang video?', a: 'Hindi. Kunin muna ang audio sa video, tapos gawing ringtone ang audio file.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-m4a-iphone', 'save-music-from-video-iphone'],
        card: { title: 'Ringtone mula sa video', text: '“Use as Ringtone” sa iOS 26 – apat na hakbang.' }
    }
);
