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
        description: '在iPhone上轻点四下就能从任意视频提取音频：选择视频、裁剪、轻点“提取音频”，存储为MP3或M4A。免费，本地处理，无需上传云端。',
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
        title: '苹果手机怎么把视频转成MP3？免费又快速的方法',
        description: '几秒内把iPhone上的任意视频转成MP3。可直接从“照片”使用，文件留在设备上，导出前还能裁剪。附截图的分步教程。',
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
        description: '在iPhone上免费把MP4转成MP3：在“文件”或“照片”中打开视频，轻点共享 →“提取音频”。离线可用，支持裁剪，只需四步。',
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
        description: 'iPhone相机拍的视频都是MOV格式。直接在手机上把MOV转成MP3：选择视频、裁剪、轻点“提取音频”。免费且离线可用。',
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
        description: '在iPhone上把视频的声音存储为M4A，用于铃声、库乐队和Apple应用。免费、本地处理、支持裁剪，轻点四下把MP4或MOV转成M4A。',
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
