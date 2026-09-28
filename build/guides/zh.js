/**
 * 简体中文教程 → /zh/guides/<slug>/
 * slug 与英文版（build/guides/en.js）一致，便于通过 hreflang 互相关联。
 * 关键词见 /keywords.md 的「简体中文（ZH）」部分。字段结构同 en.js。
 * 截图：1 封面 · 2 提取界面 · 3 裁剪 · 4 共享菜单 · 5 资料库
 */

const APP = '从视频提取音频⁺';

const STEP = {
    open: {
        name: '打开应用并选择视频',
        text: `打开${APP}，从“照片”或“文件”中选择视频。更快的方法：在“照片”中打开视频，轻点共享按钮，然后选择“提取音频”。`,
        image: 2
    },
    share: {
        name: '把视频发送到应用',
        text: '在“照片”或“文件”中打开视频，轻点共享按钮并选择“提取音频”。应用会打开，视频已自动载入。',
        image: 2
    },
    trim: {
        name: '裁剪需要的片段（可选）',
        text: '轻点“裁剪视频”，把黄色标记拖到需要部分的开头和结尾，试听后轻点“存储”。',
        image: 3
    },
    extract: {
        name: '轻点“提取音频”',
        text: '轻点“提取音频”，音轨会在iPhone上几秒内完成转换，不会上传到网络。',
        image: 2
    },
    save: {
        name: '存储或分享文件',
        text: '完成的音频文件会出现在资料库中。轻点共享按钮，即可存储到“文件”、通过隔空投送发送，或分享到任意应用。',
        image: 4
    }
};

const guides = [];
module.exports = guides;

guides.push(
    {
        slug: 'extract-audio-from-video-iphone',
        keyword: 'iphone视频提取音频',
        eyebrow: '基础',
        title: 'iPhone怎么从视频中提取音频？详细步骤（2026年版）',
        description: '在iPhone上轻点四下就能从任意视频提取音频：选择视频、裁剪、轻点“提取音频”，存储为MP3或M4A。免费使用，全程在设备本地处理，无需上传云端，也无需注册账号。',
        h1: 'iPhone怎么从视频中提取音频',
        answer: `要在iPhone上从视频提取音频，打开${APP}，从“照片”中选择视频，按需裁剪后轻点“提取音频”。应用会在几秒内把音轨存储为MP3或M4A，保存在iPhone上。完全免费，离线也能使用。`,
        intro: '<p>iPhone的“照片”没有“只保存声音”的按钮。你可以自己创建一个快捷指令（见<a href="/zh/guides/extract-audio-without-app-iphone/">不用App的方法</a>），或者把视频上传到网站，但只想要声音时，这两种方法都比较慢。下面是最快的方式：一款可直接从共享菜单使用的免费应用。</p>',
        steps: [STEP.open, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: '需要准备什么',
                html: `<ul>
<li>运行iOS 18.6或更高版本的iPhone。</li>
<li>${APP}——App Store免费下载（约23 MB）。</li>
<li>有声音的视频：相机拍摄的视频（MOV）、下载的视频（MP4）、屏幕录制、“信息”中的视频。</li>
</ul>`
            },
            {
                h2: '最快的方法：通过共享菜单',
                html: '<p>甚至不用打开应用。在<strong>“照片”</strong>或<strong>“文件”</strong>中打开视频，轻点<strong>共享</strong>按钮，滑动应用列表并选择<strong>“提取音频”</strong>。如果看不到，轻点“更多”把它添加到个人收藏，以后随时可用。</p>'
            },
            {
                h2: 'MP3还是M4A？',
                html: '<p><strong>MP3</strong>几乎在任何地方都能播放：Windows、安卓、车载音响、网站和视频剪辑软件。<strong>M4A</strong>（AAC）是Apple原生格式：同等音质下文件更小，非常适合做铃声，以及在库乐队和iMovie中使用。拿不准就选MP3。详见：<a href="/zh/guides/convert-video-to-mp3-iphone/">视频转MP3</a>和<a href="/zh/guides/video-to-m4a-iphone/">视频转M4A</a>。</p>'
            },
            {
                h2: '音频保存在哪里？',
                html: '<p>每个提取的文件都会出现在应用的资料库中，并显示时长、大小和日期。在那里轻点<strong>共享 → 存储到“文件”</strong>，即可保存到iCloud云盘或“我的iPhone”；也可以发送到微信、QQ、“备忘录”、库乐队，或通过隔空投送传到电脑。</p>'
            },
            {
                h2: '遇到问题时',
                html: `<ul>
<li><strong>文件没有声音。</strong>视频本身没有音轨——关闭麦克风的屏幕录制常见这种情况。请先在“照片”中检查视频。</li>
<li><strong>视频在iCloud中。</strong>“照片”会先下载原片，请等待下载完成。</li>
<li><strong>只需要20秒。</strong>提取前先裁剪——见<a href="/zh/guides/trim-audio-from-video-iphone/">如何截取一段声音</a>。</li>
</ul>`
            }
        ],
        faq: [
            { q: '在iPhone上从视频提取音频是免费的吗？', a: `是的。${APP}可免费下载，基础的音频提取功能也免费。更多功能可通过App内购买获得。` },
            { q: '提取音频会损失音质吗？', a: '应用会把视频的音轨存储为高品质MP3或M4A。声音不会比原片更好，但会和播放视频时一样。' },
            { q: '可以从很长的视频中提取音频吗？', a: '可以。讲座、演唱会和会议录像的处理方式相同，只是稍微久一点。如果只需要一部分，建议先裁剪。' }
        ],
        related: ['convert-video-to-mp3-iphone', 'trim-audio-from-video-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'iPhone从视频提取音频', text: '轻点四下——从“照片”或共享菜单开始。' }
    },
    {
        slug: 'convert-video-to-mp3-iphone',
        keyword: '苹果手机视频转mp3',
        eyebrow: '视频转MP3',
        title: '苹果手机怎么把视频转成MP3？免费又快速的转换方法',
        description: '几秒内把iPhone上的任意视频转成MP3。可直接从“照片”使用，文件留在设备上，导出前还能裁剪需要的片段。适合保存音乐、网课和语音。附截图的分步教程。',
        h1: '苹果手机怎么把视频转成MP3',
        answer: `在“照片”中打开视频，轻点共享按钮并选择“提取音频”（${APP}）。按需裁剪，轻点“提取音频”并存储为MP3。文件保存在iPhone上，可以存储到“文件”、通过隔空投送发送，或分享到任意应用。不需要电脑，也不用注册。`,
        intro: '<p>MP3是兼容性最好的音频格式：任何车载音响、电脑和剪辑软件都能播放。下面教你不离开iPhone就把视频转成MP3。</p>',
        steps: [STEP.share, STEP.trim, { name: '提取为MP3', text: '轻点“提取音频”并选择MP3格式。视频转MP3直接在iPhone上完成。', image: 2 }, STEP.save],
        sections: [
            {
                h2: '为什么用应用而不是在线转换网站？',
                html: '<p>在线转换器需要上传整个视频、排队等待，再下载MP3——用手机流量很慢，私人视频也有风险。应用可离线使用，文件保留在设备上，还能在转换前裁剪。详细对比：<a href="/zh/guides/extract-audio-online-vs-app/">在线工具还是应用</a>。</p>'
            },
            {
                h2: '哪些视频可以转成MP3？',
                html: '<p>iPhone能播放的视频都可以：相机拍摄的视频（<a href="/zh/guides/mov-to-mp3-iphone/">MOV</a>）、下载的视频（<a href="/zh/guides/mp4-to-mp3-iphone/">MP4</a>）、<a href="/zh/guides/screen-recording-to-audio-iphone/">屏幕录制</a>，以及来自“信息”、微信、QQ和隔空投送的视频。</p>'
            },
            {
                h2: '转成MP3之后可以做什么',
                html: `<ul>
<li>存储到<strong>“文件”</strong>，离线收听。</li>
<li>通过<strong>隔空投送</strong>发送到电脑。</li>
<li>把30秒片段做成<a href="/zh/guides/video-to-ringtone-iphone/">铃声</a>。</li>
<li>导入库乐队、剪映或播客剪辑应用。</li>
</ul>`
            }
        ],
        faq: [
            { q: 'iPhone不用App能把视频转成MP3吗？', a: '不能直接转换。“快捷指令”只能把声音存储为M4A。要在iPhone上得到MP3，需要转换应用或网站。' },
            { q: '转成MP3是免费的吗？', a: `是的，${APP}的基础转换免费。更多功能可通过App内购买获得。` },
            { q: '视频转MP3需要联网吗？', a: '不需要。转换在iPhone上完成，离线也能使用。只有存储在iCloud中的视频需要先下载。' }
        ],
        related: ['mp4-to-mp3-iphone', 'mov-to-mp3-iphone', 'video-to-m4a-iphone'],
        card: { title: '苹果手机视频转MP3', text: '任意视频转成通用的MP3。' }
    }
);

guides.push(
    {
        slug: 'mp4-to-mp3-iphone',
        keyword: 'iphone mp4转mp3',
        eyebrow: 'MP4转MP3',
        title: 'iPhone上MP4转MP3：免费转换，无需上传到网络',
        description: '在iPhone上免费把MP4转成MP3：在“文件”或“照片”中打开视频，轻点共享 →“提取音频”。离线可用，支持先裁剪再导出，只需四步。不用电脑，也不用注册账号。',
        h1: '如何在iPhone上把MP4转成MP3',
        answer: `要在iPhone上把MP4转成MP3，在“文件”或“照片”中打开文件，轻点共享按钮并选择“提取音频”。在${APP}中按需裁剪，轻点“提取音频”，选择MP3并存储。免费、本地处理、无需联网。`,
        intro: '<p>MP4文件通常来自下载、邮件附件或隔空投送，所以经常存放在<strong>“文件”</strong>应用里，而不在“照片”中。本应用两者都支持。</p>',
        steps: [
            { name: '找到MP4文件', text: '打开“文件”（下载项、iCloud云盘或“我的iPhone”）或“照片”，找到MP4。', image: 2 },
            { name: '发送到“提取音频”', text: '长按文件，选择共享 →“提取音频”。MP4会在应用中打开。', image: 2 },
            STEP.trim,
            { name: '存储为MP3', text: '轻点“提取音频”，选择MP3，然后共享 → 存储到“文件”，把MP3放在原来的MP4旁边。', image: 4 }
        ],
        sections: [
            {
                h2: 'MP4和MP3有什么区别',
                html: '<p>MP4是同时包含画面和声音的容器格式；MP3只有声音。把MP4转成MP3时会保留音轨、去掉画面：文件小得多，任何播放器都能播放。</p>'
            },
            {
                h2: '微信、QQ和邮件里的MP4',
                html: '<p>先保存附件：在聊天中打开视频 → 共享或“保存视频”（存到“照片”），或者存储到“文件”。然后按上面的步骤操作。请只转换你自己的视频或有权使用的视频。</p>'
            },
            {
                h2: '需要M4A？',
                html: '<p>做铃声或在Apple应用中使用时，M4A更合适。见<a href="/zh/guides/video-to-m4a-iphone/">如何在iPhone上把视频存储为M4A</a>。</p>'
            }
        ],
        faq: [
            { q: 'iPhone上可以免费把MP4转成MP3吗？', a: `可以。${APP}在设备上免费把MP4转成MP3。App内购买可解锁更多功能。` },
            { q: '转换后的MP3会比MP4小吗？', a: '会，通常小很多：视频画面被去掉，只保留声音。' },
            { q: '可以转换多个MP4吗？', a: '可以。逐个转换即可——所有MP3都会保存在应用的资料库中。' }
        ],
        related: ['convert-video-to-mp3-iphone', 'mov-to-mp3-iphone', 'extract-audio-online-vs-app'],
        card: { title: 'iPhone上MP4转MP3', text: '把“文件”和“照片”里的MP4转成MP3。' }
    },
    {
        slug: 'mov-to-mp3-iphone',
        keyword: 'iphone mov转mp3',
        eyebrow: 'MOV转MP3',
        title: 'iPhone上MOV转MP3：提取相机拍摄视频里的声音',
        description: 'iPhone相机拍的视频都是MOV格式。直接在手机上把MOV转成MP3：选择视频、裁剪、轻点“提取音频”。免费且离线可用，不需要电脑，视频也不会上传到任何服务器。',
        h1: '如何在iPhone上把MOV转成MP3',
        answer: `iPhone相机拍摄的视频都以MOV格式保存。要得到MP3，在“照片”中打开视频，轻点共享 →“提取音频”，按需裁剪后在${APP}中轻点“提取音频”。MP3会保存在iPhone上，不需要电脑。`,
        intro: '<p>MOV是Apple的视频格式，iPhone相机就用它录制：演唱会、演讲、朋友弹吉他、想留住的声音。转成MP3后，随时随地都能听。</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: '什么时候需要MOV转MP3',
                html: `<ul>
<li>保存你拍摄的演唱会或演出的声音。</li>
<li>把祝酒词或演讲变成留作纪念的音频。</li>
<li>把排练录音发给乐队，不用发送超大的视频。</li>
<li>在路上收听<a href="/zh/guides/lecture-video-to-audio-iphone/">录下的讲座</a>。</li>
</ul>`
            },
            {
                h2: 'HEVC、4K和电影效果模式',
                html: '<p>HEVC和4K视频的处理方式相同。只转换声音，所以即使是非常大的MOV文件，也能得到小巧的音频文件。</p>'
            },
            {
                h2: '为什么不必用电脑',
                html: '<p>为了声音把几个GB的MOV传到电脑上，比直接在手机上转换还慢。应用会在视频所在的地方完成转换。</p>'
            }
        ],
        faq: [
            { q: 'iPhone拍摄的视频是什么格式？', a: 'iPhone相机录制MOV文件，通常为HEVC或H.264视频编码，搭配AAC音频。' },
            { q: 'MOV转MP3会损失音质吗？', a: '应用会保留原始录音的音质：MP3听起来和播放视频时一样。' },
            { q: '可以把MOV存储为M4A吗？', a: '可以，选择M4A格式即可。它适合做铃声和在Apple应用中使用。' }
        ],
        related: ['mp4-to-mp3-iphone', 'convert-video-to-mp3-iphone', 'save-music-from-video-iphone'],
        card: { title: 'MOV转MP3', text: '提取iPhone相机视频里的声音。' }
    },
    {
        slug: 'video-to-m4a-iphone',
        keyword: 'iphone视频转m4a',
        eyebrow: '视频转M4A',
        title: 'iPhone视频转M4A：免费把MP4和MOV转成M4A',
        description: '在iPhone上把视频的声音存储为M4A，用于铃声、库乐队和Apple应用。免费、本地处理、支持裁剪，轻点四下把MP4或MOV转成M4A，文件直接保存在iPhone上。',
        h1: '如何在iPhone上把视频的声音存储为M4A',
        answer: `要在iPhone上把视频转成M4A，从“照片”或“文件”把视频发送到“提取音频”，按需裁剪，轻点“提取音频”并选择M4A。${APP}会存储M4A（AAC）文件，可用于库乐队、iMovie、音乐播放器和铃声。`,
        intro: '<p>M4A是Apple原生的音频格式。在音质相近的情况下，它比MP3更小，也是iPhone制作铃声和库乐队项目所需要的格式。</p>',
        steps: [STEP.share, STEP.trim, { name: '提取为M4A', text: '轻点“提取音频”并选择M4A格式。', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'M4A还是MP3：什么时候选M4A',
                html: `<table class="guide-table"><thead><tr><th></th><th>M4A（AAC）</th><th>MP3</th></tr></thead><tbody>
<tr><td>最适合</td><td>iPhone、Mac、铃声、库乐队</td><td>其他所有场景——Windows、安卓、车载</td></tr>
<tr><td>文件大小</td><td>同等音质下更小</td><td>稍大一些</td></tr>
<tr><td>兼容性</td><td>很好</td><td>几乎通用</td></tr>
</tbody></table>`
            },
            {
                h2: '把M4A设为铃声',
                html: '<p>在iOS 26中，短于30秒的M4A文件可以直接从“文件”设为铃声。详见：<a href="/zh/guides/video-to-ringtone-iphone/">如何用视频做铃声</a>。</p>'
            },
            {
                h2: '在库乐队或iMovie中打开',
                html: '<p>把M4A存储到“文件”，然后在库乐队或iMovie中通过文件浏览器导入——用作背景音乐、旁白或音效。</p>'
            }
        ],
        faq: [
            { q: 'M4A比MP3好吗？', a: '在相同比特率下，M4A（AAC）通常音质不差甚至更好，而且体积更小。MP3兼容的设备更多。' },
            { q: '可以用“快捷指令”得到M4A吗？', a: '可以，“编码媒体”操作开启“仅音频”后会生成M4A。但这样无法裁剪声音，也不能存储为MP3——应用可以做到。' },
            { q: '存储为M4A是免费的吗？', a: `是的，${APP}的基础提取功能免费，包括导出M4A。` }
        ],
        related: ['video-to-ringtone-iphone', 'convert-video-to-mp3-iphone', 'extract-audio-without-app-iphone'],
        card: { title: '视频转M4A', text: '适合铃声和库乐队的Apple格式。' }
    }
);

guides.push(
    {
        slug: 'extract-audio-without-app-iphone',
        keyword: 'iphone不用app提取视频音频',
        eyebrow: '快捷指令还是应用',
        title: '不用App在iPhone上提取视频音频（快捷指令教程）',
        description: '不装App也能在iPhone上提取视频的声音——使用“快捷指令”的“编码媒体”操作。完整设置步骤、这种方法的限制（只能M4A、无法裁剪），以及更快的替代方案。',
        h1: '不用App，怎么在iPhone上提取视频音频',
        answer: '不用第三方应用，可以用“快捷指令”提取声音：添加“编码媒体”操作并开启“仅音频”，再添加“存储文件”，并开启“在共享表单中显示”。然后把视频发送给这个快捷指令。结果只能是M4A，而且无法裁剪；需要MP3或短片段时，应用更快。',
        intro: '<p>Apple免费的“快捷指令”应用可以把声音从视频中分离出来。设置只需几分钟。下面是准确的做法——以及它的限制。</p>',
        steps: [
            { name: '新建快捷指令', text: '打开“快捷指令”，轻点“+”，把快捷指令命名为“视频提取声音”。', image: 2 },
            { name: '添加“编码媒体”', text: '轻点“添加操作”，搜索“编码媒体”并添加，点开箭头展开选项，开启“仅音频”。', image: 2 },
            { name: '添加“存储文件”', text: '添加“存储文件”操作，让结果保存到“文件”中。', image: 4 },
            { name: '在共享表单中显示', text: '打开快捷指令详细信息（i图标），开启“在共享表单中显示”，并允许“媒体”类型。现在从“照片”共享视频并选择这个快捷指令即可。', image: 4 }
        ],
        sections: [
            {
                h2: '快捷指令方法的限制',
                html: `<ul>
<li><strong>只能得到M4A</strong>——无法生成MP3。</li>
<li><strong>无法裁剪</strong>——总是保存完整音轨。</li>
<li><strong>没有资料库</strong>——文件保存在“文件”中，需要手动查找和重命名。</li>
<li>处理长视频时，快捷指令可能会中途停止且没有清楚的报错。</li>
</ul>`
            },
            {
                h2: '一键完成的方案',
                html: `<p>${APP}能做同样的事，还支持裁剪、选择MP3或M4A，并提供所有已提取文件的资料库。应用同样集成在共享菜单中，所以一点也不慢——而且什么都不用自己搭建。</p>`
            },
            {
                h2: '其他不用App的方法',
                html: '<p>也可以在iMovie或库乐队里分离声音，但步骤更多，导出格式也有限。在线网站同样可行，但需要把视频上传到网络——见<a href="/zh/guides/extract-audio-online-vs-app/">在线工具还是应用</a>。</p>'
            }
        ],
        faq: [
            { q: 'iPhone有自带的提取音频方法吗？', a: '“照片”里没有专门的按钮。最接近的内置方式是“快捷指令”应用中的“编码媒体”操作，并开启“仅音频”。' },
            { q: '快捷指令会把声音存成什么格式？', a: 'M4A。无法通过“快捷指令”存储为MP3。' },
            { q: '能用快捷指令裁剪声音吗？', a: `没有方便的办法。要裁剪，请使用带时间轴的应用，比如${APP}。` }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-online-vs-app', 'video-to-m4a-iphone'],
        card: { title: '不用App（快捷指令）', text: '免费做法及其限制。' }
    },
    {
        slug: 'extract-audio-online-vs-app',
        keyword: '视频提取音频在线',
        eyebrow: '在线还是应用',
        title: '视频提取音频：用在线工具好还是用iPhone应用更好？',
        description: '在线提取视频音频还是用应用？从隐私、速度、文件大小限制和裁剪功能对比——以及视频就在手机上时该怎么选。看完再决定用哪种方法提取声音。',
        h1: '视频提取音频：在线工具还是应用，iPhone上怎么选',
        answer: `在线工具在任何设备上都能用，但需要上传整个视频、等待处理再下载结果——用手机流量很慢，私人录像也不安全。在iPhone上，像${APP}这样的应用更快，可离线使用，视频不会离开设备，还能裁剪声音。`,
        intro: '<p>搜索“视频提取音频在线”，会找到几十个免费网站。在网速快的电脑上它们很方便，但在iPhone上情况就不一样了。</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: '对比',
                html: `<table class="guide-table"><thead><tr><th></th><th>在线工具</th><th>${APP}</th></tr></thead><tbody>
<tr><td>隐私</td><td>视频上传到别人的服务器</td><td>留在iPhone上</td></tr>
<tr><td>速度</td><td>上传 + 排队 + 下载</td><td>几秒，本地完成</td></tr>
<tr><td>离线使用</td><td>不行</td><td>可以</td></tr>
<tr><td>大小限制</td><td>免费版常有限制</td><td>只受iPhone存储空间限制</td></tr>
<tr><td>裁剪</td><td>有时支持</td><td>内置时间轴</td></tr>
<tr><td>广告和弹窗</td><td>常见</td><td>没有网页广告</td></tr>
<tr><td>价格</td><td>免费但有限制</td><td>基础功能免费</td></tr>
</tbody></table>`
            },
            {
                h2: '什么时候适合用在线工具',
                html: '<p>如果你在用Windows电脑，视频也已经在电脑上，可靠的在线转换网站就够用了。不要上传私人内容：家庭视频、工作会议、客户资料。</p>'
            },
            {
                h2: '什么时候应用更好',
                html: '<p>如果视频在iPhone上，应用更胜一筹：不用通过手机网络上传视频、不用等待和下载结果，还能精确截取需要的片段。</p>'
            }
        ],
        faq: [
            { q: '在线提取视频音频安全吗？', a: '取决于网站。视频会上传到第三方服务器，所以私人录像最好避免。在设备上处理的应用不会上传任何内容。' },
            { q: 'iPhone上能免费提取音频又不上传到网络吗？', a: `可以。${APP}在设备上免费转换视频，视频不会发送到任何地方。` },
            { q: '为什么在手机上在线转换这么慢？', a: '必须先上传整个视频。手机拍的视频很大，而移动网络的上传速度通常远低于下载速度。' }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-without-app-iphone', 'mp4-to-mp3-iphone'],
        card: { title: '在线还是应用', text: '隐私、速度和限制对比。' }
    },
    {
        slug: 'save-music-from-video-iphone',
        keyword: 'iphone提取视频中的音乐',
        eyebrow: '音乐',
        title: 'iPhone怎么提取视频中的音乐？（MP3或M4A）',
        description: '在iPhone上把视频里的歌曲或背景音乐存储为MP3或M4A。按歌曲精确裁剪，离线收听，随时分享。适合婚礼、演出和翻唱视频。附截图的简短教程。',
        h1: 'iPhone怎么提取视频中的音乐',
        answer: `要在iPhone上提取视频中的音乐，在“照片”中打开视频，轻点共享 →“提取音频”，用标记选中歌曲，然后在${APP}中轻点“提取音频”。音乐会存储为MP3或M4A——可以在“文件”中离线收听，或分享到任意应用。`,
        intro: '<p>婚礼上的歌、朋友的翻唱、你剪辑视频里的配乐——有时视频里最珍贵的是声音。下面教你把它存成单独的音乐文件。</p>',
        steps: [STEP.share, { name: '选中歌曲', text: '轻点“裁剪视频”，拖动黄色标记，只保留歌曲部分。试听开头和结尾。', image: 3 }, STEP.extract, STEP.save],
        sections: [
            {
                h2: '怎样得到最好的声音',
                html: `<ul>
<li>剪掉开头和结尾的说话声与掌声。</li>
<li>车载和旧播放器用MP3，Apple设备用M4A。</li>
<li>在“文件”中给文件重命名（长按 →“重新命名”），方便以后查找。</li>
</ul>`
            },
            {
                h2: '关于版权',
                html: '<p>请只保存你自己拍摄或有权使用的视频中的音乐。商业歌曲受版权保护：为自己的录像保留个人副本没问题，公开发布别人的音乐则不行。</p>'
            },
            {
                h2: '设为铃声',
                html: '<p>找到了最喜欢的30秒？<a href="/zh/guides/video-to-ringtone-iphone/">把它做成铃声</a>。</p>'
            }
        ],
        faq: [
            { q: '怎么把视频里的歌单独提取出来？', a: `把视频发送到${APP}，裁剪时选中歌曲，轻点“提取音频”。歌曲会存储为音频文件。` },
            { q: '提取的歌曲能加入Apple Music吗？', a: 'iPhone上的“音乐”应用不能直接导入本地文件。可以把文件保存在“文件”中，或通过Mac或PC同步。' },
            { q: '能提取微信或“信息”里视频的音乐吗？', a: '可以。先把视频存储到“照片”或“文件”，再提取声音。' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-ringtone-iphone', 'mov-to-mp3-iphone'],
        card: { title: '提取视频中的音乐', text: '保留歌曲，去掉画面。' }
    }
);

guides.push(
    {
        slug: 'trim-audio-from-video-iphone',
        keyword: 'iphone截取视频中的一段声音',
        eyebrow: '裁剪',
        title: 'iPhone怎么只截取视频中的一段声音？（裁剪教程）',
        description: '只需要10秒声音？在iPhone上裁剪视频，只把这一段存储为MP3或M4A。拖动标记、试听、导出——免费，直接在手机上完成，原视频不会被改动。',
        h1: 'iPhone怎么只提取视频中的一段声音',
        answer: `要在iPhone上截取视频中的一段声音，在${APP}中打开视频，轻点“裁剪视频”，把黄色的开始和结束标记拖到需要的片段两端，轻点“存储”，再轻点“提取音频”。只有选中的片段会存储为MP3或M4A。`,
        intro: '<p>大多数时候你需要的不是整条音轨，而是一句话、一段副歌或一个音效。先裁剪，就能得到小巧干净的片段。</p>',
        steps: [
            STEP.open,
            { name: '轻点“裁剪视频”', text: '在提取界面轻点“裁剪视频”，打开时间轴。', image: 2 },
            { name: '拖动标记', text: '把左侧黄色标记拖到开始位置，右侧拖到结束位置。选区时间会显示在旁边。试听后轻点“存储”。', image: 3 },
            { name: '提取并存储', text: '轻点“提取音频”——只导出裁剪后的部分。分享出去或存储到“文件”。', image: 4 }
        ],
        sections: [
            {
                h2: '精确裁剪的小技巧',
                html: `<ul>
<li>在说话前后各留半秒，避免把字剪掉。</li>
<li>做铃声时最多选30秒。</li>
<li>一个视频需要多个片段？每段重复裁剪一次——所有文件都会保存在资料库中。</li>
</ul>`
            },
            {
                h2: '常见的截取内容',
                html: '<p>演讲中的一句话、歌曲的副歌、剪辑用的音效、孩子说的第一句话，或者长会议录像中最关键的那一分钟。</p>'
            }
        ],
        faq: [
            { q: 'iPhone能裁剪视频里的声音吗？', a: `可以。在${APP}中把视频裁剪到需要的片段再提取声音——只会保存这一段。` },
            { q: '裁剪会改动原视频吗？', a: '不会。“照片”中的原视频保持不变，只裁剪导出的音频文件。' },
            { q: '能从同一个视频截取多段吗？', a: '可以。对每个需要的片段重新裁剪并提取即可。' }
        ],
        related: ['video-to-ringtone-iphone', 'save-music-from-video-iphone', 'extract-audio-from-video-iphone'],
        card: { title: '截取一段声音', text: '精确裁剪到秒。' }
    },
    {
        slug: 'screen-recording-to-audio-iphone',
        keyword: 'iphone屏幕录制提取声音',
        eyebrow: '屏幕录制',
        title: 'iPhone怎么保存屏幕录制里的声音？（MP3或M4A）',
        description: '把iPhone屏幕录制转成MP3或M4A音频文件。了解录屏为什么没有声音、如何截取需要的部分并保存声音。步骤简单，几秒完成，无需上传。',
        h1: 'iPhone怎么保存屏幕录制里的声音',
        answer: `iPhone的屏幕录制会作为视频保存在“照片”中。要得到声音，打开录屏，轻点共享 →“提取音频”，按需裁剪后在${APP}中轻点“提取音频”。如果文件没有声音，说明录制时根本没录上——录制前请打开麦克风。`,
        intro: '<p>屏幕录制常被用来保存语音消息、免提通话或应用里的某段内容。下面教你只保留其中的声音。</p>',
        steps: [
            { name: '在“照片”中找到录屏', text: '屏幕录制位于“照片”→“媒体类型”→“屏幕录制”。', image: 2 },
            { name: '发送到“提取音频”', text: '打开录屏，轻点共享按钮并选择“提取音频”。', image: 2 },
            STEP.trim,
            { name: '提取并存储', text: '轻点“提取音频”，把MP3或M4A存储到“文件”。', image: 4 }
        ],
        sections: [
            {
                h2: '录屏为什么没有声音？',
                html: `<ul>
<li><strong>麦克风关闭：</strong>在“控制中心”长按屏幕录制按钮，打开“麦克风”，才能录下你的声音。</li>
<li><strong>静音模式：</strong>部分应用的声音在静音模式下会被关闭。</li>
<li><strong>受保护内容：</strong>很多流媒体服务在录屏时会屏蔽声音——这是限制，无法绕过。</li>
</ul>`
            },
            {
                h2: '尊重隐私',
                html: '<p>录制和保存通话或对话，须征得所有参与者同意，并遵守你所在地区的法律。</p>'
            }
        ],
        faq: [
            { q: '屏幕录制能转成MP3吗？', a: '可以。屏幕录制就是普通视频，其中的声音可以存储为MP3或M4A。' },
            { q: 'iPhone的屏幕录制保存在哪里？', a: '在“照片”应用的“媒体类型”→“屏幕录制”中。' },
            { q: '为什么屏幕录制没有声音？', a: '麦克风被关闭了，或者应用禁止录制声音。提取前请先确认录屏播放时有声音。' }
        ],
        related: ['extract-audio-from-video-iphone', 'trim-audio-from-video-iphone', 'lecture-video-to-audio-iphone'],
        card: { title: '屏幕录制提取声音', text: '保存声音，并找出没声音的原因。' }
    }
);

guides.push(
    {
        slug: 'lecture-video-to-audio-iphone',
        keyword: '网课视频转音频',
        eyebrow: '学习',
        title: 'iPhone怎么把网课和讲座视频转成音频（MP3）',
        description: '在iPhone上把录好的网课、讲座、线上会议转成MP3，通勤路上也能学习。文件小、离线收听、锁屏也能听、方便分享。附截图的分步教程。',
        h1: 'iPhone怎么把讲座视频转成音频',
        answer: `要把讲座视频转成音频，在“照片”或“文件”中打开录像，轻点共享 →“提取音频”，再在${APP}中轻点“提取音频”。把MP3存储到“文件”，就能离线收听——通勤、健身或锁屏时都能听，占用空间也小得多。`,
        intro: '<p>听课重要的是讲了什么，而不是画面。把讲座视频转成音频，就得到一档随时随地都能反复听的播客。</p>',
        steps: [
            STEP.share,
            { name: '去掉开场和休息（可选）', text: '轻点“裁剪视频”，去掉开始前的等待和不需要的问答部分。', image: 3 },
            STEP.extract,
            { name: '存储到“课程”文件夹', text: '轻点共享 → 存储到“文件”，为每门课建一个文件夹，方便快速找到录音。', image: 4 }
        ],
        sections: [
            {
                h2: '为什么用音频学习更方便',
                html: `<ul>
<li><strong>文件小：</strong>一小时音频比一小时视频小很多。</li>
<li><strong>锁屏收听：</strong>手机锁屏也能听，更省电。</li>
<li><strong>随时随地：</strong>地铁上、散步时、健身房——不需要Wi‑Fi。</li>
</ul>`
            },
            {
                h2: '转成笔记',
                html: '<p>需要文字？把音频导入你常用的语音转文字应用，就能在文字中搜索内容。</p>'
            },
            {
                h2: '注意相关规定',
                html: '<p>很多学校允许录制课程供个人使用，但不允许传播。录制或分享课程前，请先了解课程规定。</p>'
            }
        ],
        faq: [
            { q: 'iPhone锁屏后能继续听视频吗？', a: '大多数视频播放器锁屏后会暂停。把视频转成MP3后，就能在“文件”或任意音频播放器中锁屏收听。' },
            { q: '一小时的讲座也可以吗？', a: '可以。长录像的处理方式相同，只是稍微久一点。' },
            { q: '能转换腾讯会议、Zoom的录像吗？', a: '可以，只要MP4录像已经在iPhone的“照片”或“文件”中。' }
        ],
        related: ['screen-recording-to-audio-iphone', 'mp4-to-mp3-iphone', 'extract-audio-from-video-iphone'],
        card: { title: '讲座视频转音频', text: '用小巧的MP3随时学习。' }
    },
    {
        slug: 'video-to-ringtone-iphone',
        keyword: '苹果手机视频做铃声',
        eyebrow: '铃声',
        title: '苹果手机怎么用视频做铃声？（iOS 26和iOS 18）',
        description: '把任意视频做成iPhone铃声：把声音裁剪到30秒以内，存储到“文件”，再轻点共享 →“用作铃声”。iOS 26和库乐队两种方法。',
        h1: '苹果手机怎么用视频做铃声',
        answer: `要用视频做铃声，在${APP}中打开视频，裁剪到30秒以内，把声音提取为M4A或MP3并存储到“文件”。在iOS 26中，在“文件”里长按该文件，轻点共享 →“用作铃声”。较旧的iOS版本可以把声音导入库乐队，再导出为铃声。`,
        intro: '<p>笑声、派对上的歌、狗叫声——你视频里的任何声音都可以变成铃声。在iOS 26中，只要有音频文件，这件事就很简单。</p>',
        steps: [
            STEP.share,
            { name: '裁剪到30秒以内', text: '轻点“裁剪视频”，最多选择30秒——这是铃声的长度上限。', image: 3 },
            { name: '提取并存储到“文件”', text: '轻点“提取音频”（M4A或MP3），然后共享 → 存储到“文件”。', image: 4 },
            { name: '用作铃声', text: '在“文件”中长按音频文件，轻点共享 →“用作铃声”（iOS 26）。可以在“设置”→“声音与触感”→“电话铃声”中确认。', image: 4 }
        ],
        sections: [
            {
                h2: 'iOS 18：用库乐队设置',
                html: `<ol>
<li>按上面的方法提取并裁剪声音，存储到“文件”。</li>
<li>打开库乐队，新建“录音机”项目，切换到音轨视图。</li>
<li>打开循环乐段浏览器 →“文件”→“浏览‘文件’App中的项目”，把音频拖到音轨上。</li>
<li>返回“我的乐曲”，长按项目 → 共享 →“电话铃声”→“导出”。</li>
</ol>`
            },
            {
                h2: '为什么看不到“用作铃声”',
                html: `<ul>
<li>文件超过30秒——请再裁剪一次。</li>
<li>文件不是MP3或M4A格式。</li>
<li>iPhone还没有升级到iOS 26——请使用库乐队。</li>
</ul>`
            }
        ],
        faq: [
            { q: 'iPhone铃声最长可以多久？', a: '用音频文件自制的铃声最长30秒。' },
            { q: 'iPhone铃声需要什么格式？', a: '在iOS 26中，通过“用作铃声”可以设置短于30秒的MP3或M4A文件。' },
            { q: '能直接把视频设为铃声吗？', a: '不能。先从视频中提取声音，再把音频文件设为铃声。' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-m4a-iphone', 'save-music-from-video-iphone'],
        card: { title: '用视频做铃声', text: 'iOS 26的“用作铃声”——四步完成。' }
    }
);
