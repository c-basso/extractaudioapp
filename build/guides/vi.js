/**
 * Hướng dẫn tiếng Việt → /vi/guides/<slug>/
 * Slug trùng với tiếng Anh (build/guides/en.js) để các trang liên kết qua hreflang.
 * Từ khóa — xem mục «Tiếng Việt (VI)» trong /keywords.md. Cấu trúc trường — như en.js.
 * Ảnh: 1 bìa · 2 màn hình tách · 3 cắt · 4 menu Chia sẻ · 5 thư viện
 */

const APP = 'Tách âm thanh từ video⁺';

const STEP = {
    open: {
        name: 'Mở ứng dụng và chọn video',
        text: `Mở ${APP} và chọn video từ Ảnh hoặc Tệp. Nhanh hơn: trong Ảnh, chạm Chia sẻ trên video và chọn “Tách âm thanh”.`,
        image: 2
    },
    share: {
        name: 'Gửi video vào ứng dụng',
        text: 'Mở video trong Ảnh hoặc Tệp, chạm Chia sẻ và chọn “Tách âm thanh”. Ứng dụng mở ra với video đã được nạp sẵn.',
        image: 2
    },
    trim: {
        name: 'Cắt đoạn cần lấy (tùy chọn)',
        text: 'Chạm “Cắt video”, kéo hai điểm đánh dấu màu vàng tới đầu và cuối đoạn cần lấy, nghe thử rồi chạm “Lưu”.',
        image: 3
    },
    extract: {
        name: 'Chạm “Tách âm thanh”',
        text: 'Chạm “Tách âm thanh” — rãnh âm thanh được chuyển đổi ngay trên iPhone trong vài giây, không có gì bị tải lên internet.',
        image: 2
    },
    save: {
        name: 'Lưu hoặc gửi tệp',
        text: 'Tệp âm thanh xuất hiện trong thư viện. Chạm Chia sẻ để lưu vào Tệp, gửi qua AirDrop hoặc sang ứng dụng bất kỳ.',
        image: 4
    }
};

const guides = [];
module.exports = guides;

guides.push(
    {
        slug: 'extract-audio-from-video-iphone',
        keyword: 'cách tách âm thanh từ video trên iphone',
        eyebrow: 'Cơ bản',
        title: 'Cách tách âm thanh từ video trên iPhone — từng bước (2026)',
        description: 'Tách âm thanh từ mọi video trên iPhone với 4 lần chạm: chọn video, cắt, chạm “Tách âm thanh”, lưu thành MP3 hoặc M4A. Miễn phí, không cần đám mây.',
        h1: 'Cách tách âm thanh từ video trên iPhone',
        answer: `Để tách âm thanh từ video trên iPhone, mở ${APP}, chọn video từ Ảnh, cắt nếu cần rồi chạm “Tách âm thanh”. Ứng dụng lưu rãnh âm thanh thành MP3 hoặc M4A trên iPhone chỉ trong vài giây. Hoàn toàn miễn phí và hoạt động không cần internet.`,
        intro: '<p>Ứng dụng Ảnh trên iPhone không có nút “chỉ lưu âm thanh”. Bạn có thể tạo một phím tắt (xem <a href="/vi/guides/extract-audio-without-app-iphone/">cách không cần ứng dụng</a>) hoặc tải video lên một trang web, nhưng cả hai đều chậm khi bạn chỉ cần âm thanh. Dưới đây là cách nhanh nhất: một ứng dụng miễn phí hoạt động ngay từ menu Chia sẻ.</p>',
        steps: [STEP.open, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Bạn cần gì',
                html: `<ul>
<li>iPhone chạy iOS 18.6 trở lên.</li>
<li>${APP} — miễn phí trên App Store (khoảng 23 MB).</li>
<li>Video có tiếng: quay bằng camera (MOV), video tải về (MP4), bản ghi màn hình, video từ Tin nhắn.</li>
</ul>`
            },
            {
                h2: 'Cách nhanh nhất — qua nút Chia sẻ',
                html: '<p>Thậm chí không cần mở ứng dụng. Trong <strong>Ảnh</strong> hoặc <strong>Tệp</strong>, mở video, chạm <strong>Chia sẻ</strong>, vuốt hàng ứng dụng và chọn <strong>“Tách âm thanh”</strong>. Nếu không thấy, chạm “Thêm” và thêm vào mục yêu thích — từ đó nó luôn sẵn sàng.</p>'
            },
            {
                h2: 'MP3 hay M4A — chọn cái nào?',
                html: '<p><strong>MP3</strong> phát được ở mọi nơi: Windows, Android, đầu xe hơi, trang web và trình dựng video. <strong>M4A</strong> (AAC) là định dạng gốc của Apple: nhẹ hơn với cùng chất lượng, lý tưởng cho nhạc chuông, GarageBand và iMovie. Nếu phân vân, hãy chọn MP3. Xem thêm: <a href="/vi/guides/convert-video-to-mp3-iphone/">video sang MP3</a> và <a href="/vi/guides/video-to-m4a-iphone/">video sang M4A</a>.</p>'
            },
            {
                h2: 'Âm thanh được lưu ở đâu?',
                html: '<p>Mỗi tệp đã tách xuất hiện trong thư viện của ứng dụng kèm thời lượng, dung lượng và ngày tạo. Từ đó chạm <strong>Chia sẻ → Lưu vào Tệp</strong> để đưa vào iCloud Drive hoặc “Trên iPhone”, hoặc gửi sang Zalo, Messenger, Ghi chú, GarageBand hay qua AirDrop sang máy tính.</p>'
            },
            {
                h2: 'Nếu có sự cố',
                html: `<ul>
<li><strong>Tệp không có tiếng.</strong> Bản thân video không có rãnh âm thanh — thường gặp với bản ghi màn hình tắt micrô. Hãy kiểm tra video trong Ảnh trước.</li>
<li><strong>Video nằm trên iCloud.</strong> Ảnh sẽ tải bản gốc về trước — hãy đợi tải xong.</li>
<li><strong>Chỉ cần 20 giây.</strong> Cắt trước khi tách — xem <a href="/vi/guides/trim-audio-from-video-iphone/">cách cắt một phần âm thanh</a>.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Có thể tách âm thanh từ video trên iPhone miễn phí không?', a: `Có. ${APP} tải về miễn phí và tính năng tách âm thanh cơ bản cũng miễn phí. Tính năng bổ sung có qua mua trong ứng dụng.` },
            { q: 'Tách âm thanh có làm giảm chất lượng không?', a: 'Ứng dụng lưu rãnh âm thanh của video thành MP3 hoặc M4A chất lượng cao. Âm thanh không hay hơn bản gốc, nhưng sẽ giống như khi bạn phát video.' },
            { q: 'Có thể tách âm thanh từ video dài không?', a: 'Có. Bài giảng, buổi hòa nhạc và cuộc họp được xử lý như nhau, chỉ lâu hơn một chút. Nếu chỉ cần một phần — hãy cắt trước.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'trim-audio-from-video-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Cách tách âm thanh từ video trên iPhone', text: 'Cách 4 lần chạm — từ Ảnh hoặc qua Chia sẻ.' }
    },
    {
        slug: 'convert-video-to-mp3-iphone',
        keyword: 'chuyển video sang mp3 trên iphone',
        eyebrow: 'Video sang MP3',
        title: 'Cách chuyển video sang MP3 trên iPhone — nhanh và miễn phí',
        description: 'Chuyển mọi video trên iPhone sang MP3 trong vài giây. Dùng ngay từ Ảnh, tệp ở lại trên máy, có thể cắt trước khi xuất. Hướng dẫn từng bước kèm ảnh màn hình.',
        h1: 'Cách chuyển video sang MP3 trên iPhone',
        answer: `Mở video trong Ảnh, chạm Chia sẻ và chọn “Tách âm thanh” (${APP}). Cắt nếu cần, chạm “Tách âm thanh” và lưu thành MP3. Tệp ở lại trên iPhone — bạn có thể lưu vào Tệp, gửi qua AirDrop hoặc sang ứng dụng bất kỳ. Không cần máy tính hay đăng ký.`,
        intro: '<p>MP3 là định dạng âm thanh tương thích nhất: phát được trên mọi xe hơi, mọi máy tính và mọi trình chỉnh sửa. Đây là cách chuyển video sang MP3 mà không cần rời khỏi iPhone.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Tách sang MP3', text: 'Chạm “Tách âm thanh” và chọn định dạng MP3. Việc chuyển video sang MP3 diễn ra ngay trên iPhone.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'Vì sao dùng ứng dụng thay vì trang web chuyển đổi?',
                html: '<p>Công cụ chuyển đổi online bắt bạn tải lên toàn bộ video, chờ xếp hàng rồi tải MP3 về — chậm với mạng di động và rủi ro với video cá nhân. Ứng dụng hoạt động ngoại tuyến, giữ tệp trên máy và cho phép cắt trước khi chuyển. So sánh chi tiết: <a href="/vi/guides/extract-audio-online-vs-app/">online hay ứng dụng</a>.</p>'
            },
            {
                h2: 'Có thể chuyển những video nào sang MP3?',
                html: '<p>Mọi video iPhone phát được: video quay bằng camera (<a href="/vi/guides/mov-to-mp3-iphone/">MOV</a>), video tải về (<a href="/vi/guides/mp4-to-mp3-iphone/">MP4</a>), <a href="/vi/guides/screen-recording-to-audio-iphone/">bản ghi màn hình</a>, video từ Tin nhắn, Zalo, Messenger và AirDrop.</p>'
            },
            {
                h2: 'Làm gì với tệp MP3',
                html: `<ul>
<li>Lưu vào <strong>Tệp</strong> và nghe ngoại tuyến.</li>
<li>Gửi sang máy tính qua <strong>AirDrop</strong>.</li>
<li>Biến 30 giây thành <a href="/vi/guides/video-to-ringtone-iphone/">nhạc chuông</a>.</li>
<li>Thêm vào GarageBand, CapCut hoặc trình chỉnh sửa podcast.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'iPhone có chuyển video sang MP3 mà không cần ứng dụng không?', a: 'Không trực tiếp. Phím tắt chỉ lưu âm thanh dạng M4A. Để có MP3 trên iPhone, bạn cần ứng dụng chuyển đổi hoặc trang web.' },
            { q: 'Chuyển sang MP3 có miễn phí không?', a: `Có, chuyển đổi cơ bản trong ${APP} là miễn phí. Tính năng bổ sung có qua mua trong ứng dụng.` },
            { q: 'Có cần internet để chuyển video sang MP3 không?', a: 'Không. Việc chuyển đổi diễn ra trên iPhone và hoạt động ngoại tuyến. Chỉ cần tải trước những video đang lưu trên iCloud.' }
        ],
        related: ['mp4-to-mp3-iphone', 'mov-to-mp3-iphone', 'video-to-m4a-iphone'],
        card: { title: 'Video sang MP3 trên iPhone', text: 'Mọi video thành MP3 phổ biến nhất.' }
    }
);

guides.push(
    {
        slug: 'mp4-to-mp3-iphone',
        keyword: 'chuyển mp4 sang mp3 trên iphone',
        eyebrow: 'MP4 sang MP3',
        title: 'Chuyển MP4 sang MP3 trên iPhone: miễn phí, không tải lên',
        description: 'Chuyển MP4 sang MP3 trên iPhone miễn phí: mở tệp trong Tệp hoặc Ảnh, chạm Chia sẻ → “Tách âm thanh”. Ngoại tuyến, có cắt đoạn. Chỉ 4 bước đơn giản.',
        h1: 'Cách chuyển MP4 sang MP3 trên iPhone',
        answer: `Để chuyển MP4 sang MP3 trên iPhone, mở tệp trong Tệp hoặc Ảnh, chạm Chia sẻ và chọn “Tách âm thanh”. Trong ${APP}, cắt nếu muốn, chạm “Tách âm thanh”, chọn MP3 và lưu. Miễn phí, trên máy, không cần internet.`,
        intro: '<p>Tệp MP4 thường đến từ tải về, tệp đính kèm email hoặc AirDrop, nên hay nằm trong ứng dụng <strong>Tệp</strong> thay vì Ảnh. Ứng dụng làm việc được với cả hai.</p>',
        steps: [
            { name: 'Tìm tệp MP4', text: 'Mở Tệp (Tải về, iCloud Drive hoặc “Trên iPhone”) hoặc Ảnh và tìm tệp MP4.', image: 2 },
            { name: 'Gửi vào “Tách âm thanh”', text: 'Chạm và giữ tệp, chọn Chia sẻ → “Tách âm thanh”. Tệp MP4 mở ra trong ứng dụng.', image: 2 },
            STEP.trim,
            { name: 'Lưu thành MP3', text: 'Chạm “Tách âm thanh”, chọn MP3, rồi Chia sẻ → Lưu vào Tệp để đặt MP3 cạnh tệp MP4 gốc.', image: 4 }
        ],
        sections: [
            {
                h2: 'MP4 và MP3 khác nhau thế nào',
                html: '<p>MP4 là định dạng chứa cả hình và tiếng; MP3 chỉ có tiếng. Khi chuyển MP4 sang MP3, rãnh âm thanh được giữ lại và phần hình bị bỏ đi: tệp nhẹ hơn nhiều và phát được trên mọi trình phát.</p>'
            },
            {
                h2: 'MP4 từ Zalo, Messenger và email',
                html: '<p>Trước tiên hãy lưu tệp đính kèm: trong đoạn chat, mở video → Chia sẻ → “Lưu video” (vào Ảnh) hoặc “Lưu vào Tệp”. Sau đó làm theo các bước trên. Chỉ chuyển đổi video của bạn hoặc video bạn có quyền sử dụng.</p>'
            },
            {
                h2: 'Cần M4A?',
                html: '<p>Với nhạc chuông và ứng dụng của Apple, M4A phù hợp hơn. Xem <a href="/vi/guides/video-to-m4a-iphone/">cách lưu video thành M4A trên iPhone</a>.</p>'
            }
        ],
        faq: [
            { q: 'Có thể chuyển MP4 sang MP3 miễn phí trên iPhone không?', a: `Có. ${APP} chuyển MP4 sang MP3 miễn phí ngay trên máy. Mua trong ứng dụng mở thêm tính năng bổ sung.` },
            { q: 'MP3 có nhẹ hơn MP4 không?', a: 'Có, thường nhẹ hơn rất nhiều: phần hình bị loại bỏ, chỉ còn lại âm thanh.' },
            { q: 'Có thể chuyển nhiều tệp MP4 không?', a: 'Có. Chuyển lần lượt từng tệp — mọi MP3 đều được lưu trong thư viện của ứng dụng.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'mov-to-mp3-iphone', 'extract-audio-online-vs-app'],
        card: { title: 'MP4 sang MP3 trên iPhone', text: 'MP4 tải về từ Tệp và Ảnh — thành MP3.' }
    },
    {
        slug: 'mov-to-mp3-iphone',
        keyword: 'chuyển mov sang mp3 trên iphone',
        eyebrow: 'MOV sang MP3',
        title: 'Chuyển MOV sang MP3 trên iPhone — tiếng từ video camera',
        description: 'Video quay bằng camera iPhone là tệp MOV. Chuyển MOV sang MP3 ngay trên điện thoại: chọn video, cắt, chạm “Tách âm thanh”. Miễn phí và hoạt động ngoại tuyến.',
        h1: 'Cách chuyển MOV sang MP3 trên iPhone',
        answer: `Mọi video quay bằng camera iPhone đều được lưu ở định dạng MOV. Để có MP3, mở video trong Ảnh, chạm Chia sẻ → “Tách âm thanh”, cắt nếu cần rồi chạm “Tách âm thanh” trong ${APP}. MP3 được lưu trên iPhone — không cần máy tính.`,
        intro: '<p>MOV là định dạng video của Apple, định dạng mà camera iPhone dùng để quay: buổi hòa nhạc, bài phát biểu, bạn bè chơi guitar, giọng nói bạn muốn giữ lại. Ở dạng MP3, bạn có thể nghe âm thanh đó ở bất cứ đâu.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Khi nào cần chuyển MOV sang MP3',
                html: `<ul>
<li>Giữ lại âm thanh buổi hòa nhạc hay buổi biểu diễn bạn đã quay.</li>
<li>Biến lời chúc hay bài phát biểu thành âm thanh làm kỷ niệm.</li>
<li>Gửi bản thu buổi tập cho cả nhóm mà không cần video nặng.</li>
<li>Nghe <a href="/vi/guides/lecture-video-to-audio-iphone/">bài giảng đã quay</a> khi di chuyển.</li>
</ul>`
            },
            {
                h2: 'HEVC, 4K và chế độ Điện ảnh',
                html: '<p>Video HEVC và 4K được xử lý như nhau. Chỉ phần âm thanh được chuyển đổi, nên cả những tệp MOV rất lớn cũng cho ra tệp âm thanh gọn nhẹ.</p>'
            },
            {
                h2: 'Vì sao không cần máy tính',
                html: '<p>Chép một tệp MOV vài gigabyte sang máy tính chỉ để lấy tiếng còn lâu hơn chuyển đổi ngay trên điện thoại. Ứng dụng làm việc đó ngay nơi video đang nằm.</p>'
            }
        ],
        faq: [
            { q: 'iPhone quay video ở định dạng nào?', a: 'Camera iPhone ghi tệp MOV, thường có video HEVC hoặc H.264 và âm thanh AAC.' },
            { q: 'Có thể chuyển MOV sang MP3 mà không giảm chất lượng không?', a: 'Ứng dụng giữ nguyên chất lượng của bản ghi gốc: MP3 nghe giống như khi bạn phát video.' },
            { q: 'Có thể lưu MOV thành M4A không?', a: 'Có, chọn định dạng M4A. Định dạng này tiện cho nhạc chuông và ứng dụng của Apple.' }
        ],
        related: ['mp4-to-mp3-iphone', 'convert-video-to-mp3-iphone', 'save-music-from-video-iphone'],
        card: { title: 'MOV sang MP3', text: 'Âm thanh từ video quay bằng iPhone.' }
    },
    {
        slug: 'video-to-m4a-iphone',
        keyword: 'chuyển video sang m4a trên iphone',
        eyebrow: 'Video sang M4A',
        title: 'Chuyển video sang M4A trên iPhone — MP4 và MOV miễn phí',
        description: 'Lưu âm thanh từ video thành M4A trên iPhone cho nhạc chuông, GarageBand và ứng dụng Apple. Miễn phí, trên máy, có cắt đoạn. MP4 hoặc MOV sang M4A trong 4 chạm.',
        h1: 'Cách lưu âm thanh từ video thành M4A trên iPhone',
        answer: `Để chuyển video sang M4A trên iPhone, gửi video từ Ảnh hoặc Tệp vào “Tách âm thanh”, cắt nếu muốn, chạm “Tách âm thanh” và chọn M4A. ${APP} lưu tệp M4A (AAC) dùng được cho GarageBand, iMovie, trình phát nhạc và nhạc chuông.`,
        intro: '<p>M4A là định dạng âm thanh gốc của Apple. Với chất lượng tương đương, nó nhẹ hơn MP3, và đó chính là định dạng iPhone cần cho nhạc chuông và dự án GarageBand.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Tách sang M4A', text: 'Chạm “Tách âm thanh” và chọn định dạng M4A.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'M4A hay MP3 — khi nào chọn M4A',
                html: `<table class="guide-table"><thead><tr><th></th><th>M4A (AAC)</th><th>MP3</th></tr></thead><tbody>
<tr><td>Phù hợp nhất cho</td><td>iPhone, Mac, nhạc chuông, GarageBand</td><td>Mọi thứ còn lại — Windows, Android, xe hơi</td></tr>
<tr><td>Dung lượng tệp</td><td>Nhẹ hơn với cùng chất lượng</td><td>Nặng hơn một chút</td></tr>
<tr><td>Tương thích</td><td>Rất tốt</td><td>Phổ biến nhất</td></tr>
</tbody></table>`
            },
            {
                h2: 'Đặt M4A làm nhạc chuông',
                html: '<p>Trên iOS 26, tệp M4A ngắn hơn 30 giây có thể đặt làm nhạc chuông ngay từ Tệp. Chi tiết: <a href="/vi/guides/video-to-ringtone-iphone/">cách làm nhạc chuông từ video</a>.</p>'
            },
            {
                h2: 'Mở trong GarageBand hoặc iMovie',
                html: '<p>Lưu M4A vào Tệp, sau đó nhập qua trình duyệt tệp trong GarageBand hoặc iMovie — làm nhạc nền, lời thuyết minh hoặc hiệu ứng âm thanh.</p>'
            }
        ],
        faq: [
            { q: 'M4A có tốt hơn MP3 không?', a: 'Ở cùng bitrate, M4A (AAC) thường nghe bằng hoặc hay hơn và nhẹ hơn. MP3 tương thích với nhiều thiết bị hơn.' },
            { q: 'Có thể tạo M4A bằng Phím tắt không?', a: 'Có, tác vụ “Mã hóa phương tiện” với tùy chọn “Chỉ âm thanh” tạo ra M4A. Nhưng không cắt được âm thanh hay lưu thành MP3 — ứng dụng thì làm được.' },
            { q: 'Lưu thành M4A có miễn phí không?', a: `Có, tính năng tách cơ bản trong ${APP} là miễn phí, bao gồm xuất M4A.` }
        ],
        related: ['video-to-ringtone-iphone', 'convert-video-to-mp3-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Video sang M4A', text: 'Định dạng Apple cho nhạc chuông và GarageBand.' }
    }
);

guides.push(
    {
        slug: 'extract-audio-without-app-iphone',
        keyword: 'tách âm thanh từ video trên iphone không cần ứng dụng',
        eyebrow: 'Phím tắt hay ứng dụng',
        title: 'Cách tách âm thanh từ video trên iPhone không cần ứng dụng',
        description: 'Có thể lấy âm thanh từ video trên iPhone không cần ứng dụng — bằng Phím tắt và tác vụ “Mã hóa phương tiện”. Cách thiết lập đầy đủ, giới hạn và cách nhanh hơn.',
        h1: 'Cách tách âm thanh từ video trên iPhone không cần ứng dụng',
        answer: 'Không cần ứng dụng bên thứ ba, bạn có thể tách âm thanh bằng Phím tắt: thêm tác vụ “Mã hóa phương tiện”, bật “Chỉ âm thanh”, thêm “Lưu tệp” và bật hiển thị trong menu Chia sẻ. Sau đó gửi video vào phím tắt này. Kết quả chỉ là M4A và không cắt được; với MP3 và đoạn ngắn, ứng dụng nhanh hơn.',
        intro: '<p>Ứng dụng Phím tắt miễn phí của Apple có thể tách âm thanh khỏi video. Thiết lập mất vài phút. Đây là công thức chính xác — và các giới hạn của nó.</p>',
        steps: [
            { name: 'Tạo phím tắt mới', text: 'Mở Phím tắt, chạm + và đặt tên phím tắt là “Âm thanh từ video”.', image: 2 },
            { name: 'Thêm “Mã hóa phương tiện”', text: 'Chạm “Thêm tác vụ”, tìm “Mã hóa phương tiện”, thêm vào, mở rộng tùy chọn bằng mũi tên và bật “Chỉ âm thanh”.', image: 2 },
            { name: 'Thêm “Lưu tệp”', text: 'Thêm tác vụ “Lưu tệp” để kết quả được lưu vào Tệp.', image: 4 },
            { name: 'Bật hiển thị trong Chia sẻ', text: 'Mở chi tiết phím tắt (biểu tượng i), bật “Hiển thị trong Bảng chia sẻ” và cho phép loại “Phương tiện”. Giờ hãy gửi video từ Ảnh và chọn phím tắt.', image: 4 }
        ],
        sections: [
            {
                h2: 'Giới hạn của cách dùng Phím tắt',
                html: `<ul>
<li><strong>Chỉ M4A</strong> — không có MP3.</li>
<li><strong>Không cắt được</strong> — luôn lưu toàn bộ rãnh âm thanh.</li>
<li><strong>Không có thư viện</strong> — tệp nằm trong Tệp, bạn phải tự tìm và đổi tên.</li>
<li>Với video dài, phím tắt có thể dừng mà không báo lỗi rõ ràng.</li>
</ul>`
            },
            {
                h2: 'Lựa chọn chỉ một lần chạm',
                html: `<p>${APP} làm điều tương tự, nhưng có cắt đoạn, chọn MP3 hoặc M4A và thư viện chứa mọi tệp đã tách. Ứng dụng cũng nằm sẵn trong menu Chia sẻ, nên không chậm hơn — và không cần tự tạo gì cả.</p>`
            },
            {
                h2: 'Các cách khác không cần ứng dụng',
                html: '<p>Bạn cũng có thể tách âm thanh trong iMovie hoặc GarageBand, nhưng nhiều bước hơn và định dạng xuất bị giới hạn. Trang web cũng dùng được, nhưng phải tải video lên internet — xem <a href="/vi/guides/extract-audio-online-vs-app/">online hay ứng dụng</a>.</p>'
            }
        ],
        faq: [
            { q: 'iPhone có cách tích hợp sẵn để tách âm thanh không?', a: 'Ảnh không có nút riêng. Cách tích hợp gần nhất là tác vụ “Mã hóa phương tiện” với tùy chọn “Chỉ âm thanh” trong ứng dụng Phím tắt.' },
            { q: 'Phím tắt lưu âm thanh ở định dạng nào?', a: 'M4A. Không thể lưu MP3 bằng Phím tắt.' },
            { q: 'Có thể cắt âm thanh bằng phím tắt không?', a: `Không có cách tiện lợi. Để cắt, hãy dùng ứng dụng có dòng thời gian như ${APP}.` }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-online-vs-app', 'video-to-m4a-iphone'],
        card: { title: 'Không cần ứng dụng (Phím tắt)', text: 'Công thức miễn phí và các giới hạn.' }
    },
    {
        slug: 'extract-audio-online-vs-app',
        keyword: 'tách âm thanh từ video online',
        eyebrow: 'Online hay ứng dụng',
        title: 'Tách âm thanh từ video online hay bằng ứng dụng iPhone?',
        description: 'Tách âm thanh từ video online hay bằng ứng dụng? So sánh quyền riêng tư, tốc độ, giới hạn và khả năng cắt trên iPhone — và nên chọn gì khi video ở trên máy.',
        h1: 'Tách âm thanh từ video online hay bằng ứng dụng: chọn gì trên iPhone',
        answer: `Dịch vụ online chạy trên mọi thiết bị, nhưng bắt bạn tải lên toàn bộ video, chờ xử lý và tải kết quả về — chậm trên mạng di động và không an toàn cho video cá nhân. Trên iPhone, một ứng dụng như ${APP} nhanh hơn, hoạt động ngoại tuyến, giữ video trên máy và cho phép cắt âm thanh.`,
        intro: '<p>Tìm “tách âm thanh từ video online” sẽ ra hàng chục trang web miễn phí. Trên laptop có mạng nhanh, chúng khá tiện. Trên iPhone thì khác.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'So sánh',
                html: `<table class="guide-table"><thead><tr><th></th><th>Dịch vụ online</th><th>${APP}</th></tr></thead><tbody>
<tr><td>Quyền riêng tư</td><td>Video bị tải lên máy chủ của người khác</td><td>Ở lại trên iPhone</td></tr>
<tr><td>Tốc độ</td><td>Tải lên + xếp hàng + tải về</td><td>Vài giây, trên máy</td></tr>
<tr><td>Không cần internet</td><td>Không</td><td>Có</td></tr>
<tr><td>Giới hạn dung lượng</td><td>Thường có ở gói miễn phí</td><td>Chỉ bộ nhớ iPhone</td></tr>
<tr><td>Cắt đoạn</td><td>Đôi khi</td><td>Dòng thời gian tích hợp</td></tr>
<tr><td>Quảng cáo và cửa sổ bật lên</td><td>Thường xuyên</td><td>Không có quảng cáo web</td></tr>
<tr><td>Giá</td><td>Miễn phí có giới hạn</td><td>Tính năng cơ bản miễn phí</td></tr>
</tbody></table>`
            },
            {
                h2: 'Khi nào nên dùng dịch vụ online',
                html: '<p>Nếu bạn đang dùng máy tính Windows và video đã ở đó, một trang chuyển đổi đáng tin cậy là đủ. Đừng tải lên nội dung riêng tư: video gia đình, cuộc họp công việc, tài liệu của khách hàng.</p>'
            },
            {
                h2: 'Khi nào ứng dụng tốt hơn',
                html: '<p>Nếu video ở trên iPhone, ứng dụng thắng: không phải tải video lên qua mạng di động, không phải chờ rồi tải kết quả về, và có thể cắt chính xác đoạn cần.</p>'
            }
        ],
        faq: [
            { q: 'Tách âm thanh từ video online có an toàn không?', a: 'Tùy trang web. Video bị tải lên máy chủ bên thứ ba, nên với bản ghi cá nhân tốt nhất nên tránh. Ứng dụng xử lý trên máy không tải gì lên.' },
            { q: 'Có thể tách âm thanh miễn phí trên iPhone mà không tải lên internet không?', a: `Có. ${APP} chuyển đổi video miễn phí ngay trên máy, video không được gửi đi đâu cả.` },
            { q: 'Vì sao chuyển đổi online trên điện thoại chậm như vậy?', a: 'Trước tiên phải tải lên toàn bộ video. Video từ điện thoại rất nặng, và tốc độ tải lên của mạng di động thường thấp hơn nhiều so với tốc độ tải xuống.' }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-without-app-iphone', 'mp4-to-mp3-iphone'],
        card: { title: 'Online hay ứng dụng', text: 'So sánh quyền riêng tư, tốc độ và giới hạn.' }
    },
    {
        slug: 'save-music-from-video-iphone',
        keyword: 'cách tách nhạc từ video trên iphone',
        eyebrow: 'Âm nhạc',
        title: 'Cách tách nhạc từ video trên iPhone (MP3 hoặc M4A)',
        description: 'Lưu bài hát hoặc nhạc nền từ video trên iPhone thành MP3 hoặc M4A. Cắt đúng theo bài, nghe ngoại tuyến, chia sẻ dễ dàng. Hướng dẫn ngắn kèm ảnh màn hình.',
        h1: 'Cách tách nhạc từ video trên iPhone',
        answer: `Để tách nhạc từ video trên iPhone, mở video trong Ảnh, chạm Chia sẻ → “Tách âm thanh”, kéo điểm đánh dấu quanh bài hát rồi chạm “Tách âm thanh” trong ${APP}. Nhạc được lưu thành MP3 hoặc M4A — nghe ngoại tuyến trong Tệp hoặc gửi sang ứng dụng bất kỳ.`,
        intro: '<p>Bài hát trong đám cưới, bản cover của bạn bè, nhạc trong video bạn dựng — đôi khi thứ quý nhất trong video là âm thanh. Đây là cách lưu nó thành một tệp nhạc riêng.</p>',
        steps: [STEP.share, { name: 'Chọn đoạn bài hát', text: 'Chạm “Cắt video” và kéo các điểm đánh dấu màu vàng để chỉ còn lại bài hát. Nghe thử phần đầu và phần cuối.', image: 3 }, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Để có âm thanh tốt nhất',
                html: `<ul>
<li>Cắt bỏ tiếng nói chuyện và vỗ tay ở đầu và cuối.</li>
<li>MP3 cho xe hơi và máy nghe nhạc cũ, M4A cho thiết bị Apple.</li>
<li>Đổi tên tệp trong Tệp (chạm và giữ → “Đổi tên”) để dễ tìm sau này.</li>
</ul>`
            },
            {
                h2: 'Về bản quyền',
                html: '<p>Chỉ lưu nhạc từ video của bạn hoặc video bạn có quyền sử dụng. Bài hát thương mại được bảo vệ bản quyền: giữ bản sao cá nhân từ bản ghi của bạn thì được, đăng tải nhạc của người khác thì không.</p>'
            },
            {
                h2: 'Đặt làm nhạc chuông',
                html: '<p>Tìm được 30 giây yêu thích? <a href="/vi/guides/video-to-ringtone-iphone/">Biến chúng thành nhạc chuông</a>.</p>'
            }
        ],
        faq: [
            { q: 'Làm sao lấy bài hát từ video trên iPhone?', a: `Gửi video vào ${APP}, chọn đoạn bài hát khi cắt và chạm “Tách âm thanh”. Bài hát được lưu thành tệp âm thanh.` },
            { q: 'Có thể thêm bài hát đã tách vào Apple Music không?', a: 'Ứng dụng Nhạc trên iPhone không nhập trực tiếp tệp cục bộ. Hãy giữ tệp trong Tệp hoặc đồng bộ qua Mac hay PC.' },
            { q: 'Có thể tách nhạc từ video trong Zalo hoặc Tin nhắn không?', a: 'Có. Trước tiên lưu video vào Ảnh hoặc Tệp, sau đó tách âm thanh.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-ringtone-iphone', 'mov-to-mp3-iphone'],
        card: { title: 'Tách nhạc từ video', text: 'Giữ bài hát, bỏ phần hình.' }
    }
);

guides.push(
    {
        slug: 'trim-audio-from-video-iphone',
        keyword: 'cách cắt một phần âm thanh từ video trên iphone',
        eyebrow: 'Cắt đoạn',
        title: 'Cách cắt một phần âm thanh từ video trên iPhone',
        description: 'Chỉ cần 10 giây âm thanh? Cắt video trên iPhone và chỉ lưu đoạn đó thành MP3 hoặc M4A. Điểm đánh dấu, nghe thử, xuất tệp — tất cả đều miễn phí và ngay trên máy.',
        h1: 'Cách chỉ tách một phần âm thanh từ video trên iPhone',
        answer: `Để cắt một phần âm thanh từ video trên iPhone, mở video trong ${APP}, chạm “Cắt video”, kéo điểm đánh dấu đầu và cuối màu vàng quanh đoạn cần, chạm “Lưu”, rồi chạm “Tách âm thanh”. Chỉ đoạn đã chọn được lưu thành MP3 hoặc M4A.`,
        intro: '<p>Thường thì bạn không cần cả rãnh âm thanh, mà chỉ một câu nói, một đoạn điệp khúc hay một hiệu ứng âm thanh. Cắt trước sẽ cho ra một đoạn nhỏ và gọn.</p>',
        steps: [
            STEP.open,
            { name: 'Chạm “Cắt video”', text: 'Trên màn hình tách, chạm “Cắt video” để mở dòng thời gian.', image: 2 },
            { name: 'Kéo điểm đánh dấu', text: 'Kéo điểm đánh dấu vàng bên trái tới điểm bắt đầu, bên phải tới điểm kết thúc. Thời gian của đoạn chọn hiển thị bên cạnh. Nghe thử rồi chạm “Lưu”.', image: 3 },
            { name: 'Tách và lưu', text: 'Chạm “Tách âm thanh” — chỉ phần đã cắt được xuất ra. Gửi đi hoặc lưu vào Tệp.', image: 4 }
        ],
        sections: [
            {
                h2: 'Mẹo để cắt chính xác',
                html: `<ul>
<li>Chừa nửa giây trước và sau lời nói để không bị mất chữ.</li>
<li>Với nhạc chuông, chọn tối đa 30 giây.</li>
<li>Cần nhiều đoạn từ một video? Lặp lại việc cắt cho từng đoạn — mọi tệp đều nằm trong thư viện.</li>
</ul>`
            },
            {
                h2: 'Người ta thường cắt gì',
                html: '<p>Một câu trong bài phát biểu, điệp khúc của bài hát, hiệu ứng âm thanh để dựng video, những tiếng nói đầu tiên của con hoặc đúng một phút quan trọng trong bản ghi cuộc họp dài.</p>'
            }
        ],
        faq: [
            { q: 'Có thể cắt âm thanh từ video trên iPhone không?', a: `Có. Cắt video tới đoạn cần trong ${APP} rồi tách âm thanh — chỉ đoạn đó được lưu.` },
            { q: 'Việc cắt có thay đổi video gốc không?', a: 'Không. Video gốc trong Ảnh giữ nguyên, chỉ tệp âm thanh xuất ra bị cắt.' },
            { q: 'Có thể cắt nhiều đoạn từ một video không?', a: 'Có. Cắt và tách âm thanh lại cho từng đoạn bạn cần.' }
        ],
        related: ['video-to-ringtone-iphone', 'save-music-from-video-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Cắt một phần âm thanh', text: 'Cắt chính xác tới từng giây.' }
    },
    {
        slug: 'screen-recording-to-audio-iphone',
        keyword: 'cách lấy âm thanh từ bản ghi màn hình iphone',
        eyebrow: 'Ghi màn hình',
        title: 'Cách lấy âm thanh từ bản ghi màn hình iPhone (MP3, M4A)',
        description: 'Biến bản ghi màn hình iPhone thành tệp MP3 hoặc M4A. Tìm hiểu vì sao bản ghi không có tiếng, cách cắt đúng phần cần và lưu âm thanh. Các bước đơn giản.',
        h1: 'Cách lấy âm thanh từ bản ghi màn hình trên iPhone',
        answer: `Bản ghi màn hình iPhone được lưu trong Ảnh dưới dạng video. Để lấy âm thanh, mở bản ghi, chạm Chia sẻ → “Tách âm thanh”, cắt nếu cần rồi chạm “Tách âm thanh” trong ${APP}. Nếu tệp không có tiếng, âm thanh đã không được ghi từ đầu — hãy bật micrô trước khi ghi.`,
        intro: '<p>Ghi màn hình là cách phổ biến để giữ lại tin nhắn thoại, cuộc gọi bật loa ngoài hay một đoạn trong ứng dụng. Đây là cách chỉ giữ lại phần âm thanh.</p>',
        steps: [
            { name: 'Tìm bản ghi trong Ảnh', text: 'Bản ghi màn hình nằm trong Ảnh → Loại phương tiện → Bản ghi màn hình.', image: 2 },
            { name: 'Gửi vào “Tách âm thanh”', text: 'Mở bản ghi, chạm Chia sẻ và chọn “Tách âm thanh”.', image: 2 },
            STEP.trim,
            { name: 'Tách và lưu', text: 'Chạm “Tách âm thanh” và lưu MP3 hoặc M4A vào Tệp.', image: 4 }
        ],
        sections: [
            {
                h2: 'Vì sao bản ghi màn hình không có tiếng?',
                html: `<ul>
<li><strong>Micrô đang tắt:</strong> trong Trung tâm điều khiển, chạm và giữ nút Ghi màn hình rồi bật “Micrô” để ghi giọng nói của bạn.</li>
<li><strong>Chế độ im lặng:</strong> âm thanh của một số ứng dụng bị tắt khi ở chế độ im lặng.</li>
<li><strong>Nội dung được bảo vệ:</strong> nhiều dịch vụ phát trực tuyến chặn âm thanh khi ghi màn hình — đây là giới hạn và không thể vượt qua.</li>
</ul>`
            },
            {
                h2: 'Tôn trọng quyền riêng tư',
                html: '<p>Chỉ ghi và lưu cuộc gọi, cuộc trò chuyện khi tất cả người tham gia đồng ý và theo đúng luật pháp nơi bạn sống.</p>'
            }
        ],
        faq: [
            { q: 'Có thể chuyển bản ghi màn hình sang MP3 không?', a: 'Có. Bản ghi màn hình là video bình thường, nên âm thanh có thể lưu thành MP3 hoặc M4A.' },
            { q: 'Bản ghi màn hình trên iPhone nằm ở đâu?', a: 'Trong ứng dụng Ảnh, mục Loại phương tiện → Bản ghi màn hình.' },
            { q: 'Vì sao bản ghi màn hình không có tiếng?', a: 'Micrô đã tắt hoặc ứng dụng chặn ghi âm thanh. Trước khi tách, hãy kiểm tra bản ghi phát ra có tiếng.' }
        ],
        related: ['extract-audio-from-video-iphone', 'trim-audio-from-video-iphone', 'lecture-video-to-audio-iphone'],
        card: { title: 'Âm thanh từ bản ghi màn hình', text: 'Lưu âm thanh và biết vì sao bị mất tiếng.' }
    }
);

guides.push(
    {
        slug: 'lecture-video-to-audio-iphone',
        keyword: 'chuyển video bài giảng sang âm thanh',
        eyebrow: 'Học tập',
        title: 'Cách chuyển video bài giảng sang âm thanh MP3 trên iPhone',
        description: 'Biến bài giảng, webinar và bài nói đã ghi thành MP3 trên iPhone để học khi di chuyển. Tệp nhẹ, nghe ngoại tuyến, dễ chia sẻ. Hướng dẫn từng bước.',
        h1: 'Cách chuyển video bài giảng sang âm thanh trên iPhone',
        answer: `Để chuyển video bài giảng sang âm thanh, mở bản ghi trong Ảnh hoặc Tệp, chạm Chia sẻ → “Tách âm thanh”, rồi chạm “Tách âm thanh” trong ${APP}. Lưu MP3 vào Tệp và nghe ngoại tuyến — khi di chuyển, ở phòng tập hay khi tắt màn hình, tốn ít dung lượng hơn nhiều lần.`,
        intro: '<p>Với bài giảng, điều quan trọng là lời giảng chứ không phải hình ảnh. Chuyển video bài giảng sang âm thanh, bạn có một podcast để nghe lại ở bất cứ đâu.</p>',
        steps: [
            STEP.share,
            { name: 'Bỏ phần mở đầu và giờ nghỉ (tùy chọn)', text: 'Chạm “Cắt video” để bỏ phần chờ trước khi bắt đầu và phần hỏi đáp không cần thiết.', image: 3 },
            STEP.extract,
            { name: 'Lưu vào thư mục “Bài giảng”', text: 'Chạm Chia sẻ → Lưu vào Tệp và tạo một thư mục cho mỗi môn để tìm lại nhanh.', image: 4 }
        ],
        sections: [
            {
                h2: 'Vì sao học bằng âm thanh tiện lợi',
                html: `<ul>
<li><strong>Tệp nhẹ:</strong> một giờ âm thanh nhẹ hơn một giờ video nhiều lần.</li>
<li><strong>Tắt màn hình:</strong> nghe khi khóa điện thoại và tiết kiệm pin.</li>
<li><strong>Ở bất cứ đâu:</strong> trên xe buýt, khi đi dạo, ở phòng tập — không cần Wi‑Fi.</li>
</ul>`
            },
            {
                h2: 'Biến thành ghi chú',
                html: '<p>Cần văn bản? Nhập tệp âm thanh vào ứng dụng chuyển giọng nói thành văn bản bạn đang dùng và tìm kiếm trong nội dung.</p>'
            },
            {
                h2: 'Kiểm tra quy định',
                html: '<p>Nhiều trường cho phép ghi bài giảng để dùng cá nhân nhưng không cho phát tán. Hãy kiểm tra quy định của môn học trước khi ghi hay chia sẻ bài giảng.</p>'
            }
        ],
        faq: [
            { q: 'Có thể nghe video trên iPhone khi tắt màn hình không?', a: 'Hầu hết trình phát video tạm dừng khi khóa máy. Nếu chuyển video sang MP3, bạn có thể nghe khi tắt màn hình trong Tệp hoặc trình phát nhạc bất kỳ.' },
            { q: 'Bài giảng dài một giờ có được không?', a: 'Có. Bản ghi dài được xử lý như nhau, chỉ lâu hơn một chút.' },
            { q: 'Có thể chuyển bản ghi Zoom và webinar không?', a: 'Có, miễn là bản ghi MP4 đã nằm trong Ảnh hoặc Tệp trên iPhone.' }
        ],
        related: ['screen-recording-to-audio-iphone', 'mp4-to-mp3-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Video bài giảng sang âm thanh', text: 'Học khi di chuyển với MP3 gọn nhẹ.' }
    },
    {
        slug: 'video-to-ringtone-iphone',
        keyword: 'cách làm nhạc chuông từ video trên iphone',
        eyebrow: 'Nhạc chuông',
        title: 'Cách làm nhạc chuông từ video trên iPhone (iOS 26 và 18)',
        description: 'Biến mọi video thành nhạc chuông iPhone: cắt âm thanh còn 30 giây, lưu vào Tệp rồi chạm Chia sẻ → “Dùng làm nhạc chuông”. Cách cho iOS 26 và GarageBand.',
        h1: 'Cách làm nhạc chuông từ video trên iPhone',
        answer: `Để làm nhạc chuông từ video, mở video trong ${APP}, cắt còn tối đa 30 giây, tách âm thanh thành M4A hoặc MP3 và lưu vào Tệp. Trên iOS 26, chạm và giữ tệp trong Tệp, chạm Chia sẻ → “Dùng làm nhạc chuông”. Trên iOS cũ hơn, nhập âm thanh vào GarageBand và xuất dưới dạng nhạc chuông.`,
        intro: '<p>Tiếng cười, bài hát trong bữa tiệc, tiếng chó sủa — mọi âm thanh trong video của bạn đều có thể thành nhạc chuông. Trên iOS 26 việc này rất đơn giản nếu bạn có tệp âm thanh.</p>',
        steps: [
            STEP.share,
            { name: 'Cắt còn 30 giây', text: 'Chạm “Cắt video” và chọn tối đa 30 giây — đây là giới hạn cho nhạc chuông.', image: 3 },
            { name: 'Tách và lưu vào Tệp', text: 'Chạm “Tách âm thanh” (M4A hoặc MP3), rồi Chia sẻ → Lưu vào Tệp.', image: 4 },
            { name: 'Dùng làm nhạc chuông', text: 'Trong Tệp, chạm và giữ tệp âm thanh, chạm Chia sẻ → “Dùng làm nhạc chuông” (iOS 26). Kiểm tra trong Cài đặt → Âm thanh & cảm ứng → Nhạc chuông.', image: 4 }
        ],
        sections: [
            {
                h2: 'Trên iOS 18: dùng GarageBand',
                html: `<ol>
<li>Tách và cắt âm thanh như hướng dẫn trên, rồi lưu vào Tệp.</li>
<li>Mở GarageBand, tạo dự án “Máy ghi âm” và chuyển sang chế độ xem rãnh.</li>
<li>Mở trình duyệt loop → Tệp → “Duyệt các mục từ ứng dụng Tệp” và kéo âm thanh vào rãnh.</li>
<li>Quay lại “Bài hát của tôi”, chạm và giữ dự án → Chia sẻ → Nhạc chuông → Xuất.</li>
</ol>`
            },
            {
                h2: 'Vì sao không thấy “Dùng làm nhạc chuông”',
                html: `<ul>
<li>Tệp dài hơn 30 giây — hãy cắt lại.</li>
<li>Tệp không ở định dạng MP3 hoặc M4A.</li>
<li>iPhone chưa lên iOS 26 — hãy dùng GarageBand.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Nhạc chuông iPhone dài tối đa bao lâu?', a: 'Tối đa 30 giây cho nhạc chuông tự tạo từ tệp âm thanh.' },
            { q: 'Nhạc chuông iPhone cần định dạng nào?', a: 'Trên iOS 26, “Dùng làm nhạc chuông” nhận tệp MP3 hoặc M4A ngắn hơn 30 giây.' },
            { q: 'Có thể đặt video làm nhạc chuông trực tiếp không?', a: 'Không. Trước tiên hãy tách âm thanh từ video, sau đó đặt tệp âm thanh làm nhạc chuông.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-m4a-iphone', 'save-music-from-video-iphone'],
        card: { title: 'Nhạc chuông từ video', text: '“Dùng làm nhạc chuông” trên iOS 26 — 4 bước.' }
    }
);
