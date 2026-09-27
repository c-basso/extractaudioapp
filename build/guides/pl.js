/**
 * Polskie poradniki → /pl/guides/<slug>/
 * Slugi takie same jak w build/guides/en.js (połączone przez hreflang). Słowa kluczowe: sekcja „Polski (PL)” w /keywords.md.
 * W tekstach używaj tylko typograficznego apostrofu (’), np. iPhone’a.
 * Zrzuty: 1 okładka · 2 wyodrębnianie · 3 przycinanie · 4 menu Udostępnij · 5 biblioteka
 */

const APP = 'Extract Audio from Video⁺';

const STEP = {
    open: {
        name: 'Otwórz aplikację i wybierz film',
        text: `Uruchom ${APP} i wybierz film ze Zdjęć lub Plików. Szybciej: w Zdjęciach stuknij Udostępnij przy filmie i wybierz aplikację.`,
        image: 2
    },
    share: {
        name: 'Wyślij film do aplikacji',
        text: 'Otwórz film w Zdjęciach lub Plikach, stuknij Udostępnij i wybierz aplikację. Otworzy się z już wczytanym filmem.',
        image: 2
    },
    trim: {
        name: 'Przytnij potrzebny fragment (opcjonalnie)',
        text: 'Stuknij „Przytnij wideo”, przeciągnij żółte znaczniki na początek i koniec fragmentu, odsłuchaj i stuknij „Zachowaj”.',
        image: 3
    },
    extract: {
        name: 'Stuknij „Wyodrębnij audio”',
        text: 'Stuknij „Wyodrębnij audio”. Ścieżka dźwiękowa zostanie przekonwertowana na iPhonie w kilka sekund — nic nie jest wysyłane do sieci.',
        image: 2
    },
    save: {
        name: 'Zachowaj lub udostępnij plik audio',
        text: 'Nowy plik audio pojawi się w bibliotece. Stuknij Udostępnij, aby zachować go w Plikach, wysłać przez AirDrop lub do dowolnej aplikacji.',
        image: 4
    }
};

const guides = [];
module.exports = guides;

guides.push(
    {
        slug: 'extract-audio-from-video-iphone',
        keyword: 'jak wyciągnąć dźwięk z filmu na iphonie',
        eyebrow: 'Podstawy',
        title: 'Jak wyciągnąć dźwięk z filmu na iPhonie (poradnik 2026)',
        description: 'Wyciągnij dźwięk z dowolnego filmu na iPhonie w 4 stuknięciach: wybierz film, przytnij, stuknij „Wyodrębnij audio” i zachowaj jako MP3 lub M4A. Za darmo.',
        h1: 'Jak wyciągnąć dźwięk z filmu na iPhonie',
        answer: `Aby wyciągnąć dźwięk z filmu na iPhonie, otwórz ${APP}, wybierz film ze Zdjęć, w razie potrzeby go przytnij i stuknij „Wyodrębnij audio”. Aplikacja w kilka sekund zapisze ścieżkę dźwiękową jako MP3 lub M4A na iPhonie. Na start za darmo, działa offline i niczego nie wysyła.`,
        intro: '<p>W aplikacji Zdjęcia nie ma przycisku „zapisz tylko dźwięk”. Możesz zbudować skrót (zobacz <a href="/pl/guides/extract-audio-without-app-iphone/">metodę bez aplikacji</a>) albo wysłać film na stronę internetową, ale oba sposoby są uciążliwe, gdy potrzebujesz tylko dźwięku. Oto najszybsza droga: darmowa aplikacja działająca prosto z menu Udostępnij.</p>',
        steps: [STEP.open, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Czego potrzebujesz',
                html: `<ul>
<li>iPhone’a z iOS 18.6 lub nowszym.</li>
<li>${APP} — za darmo w App Store (ok. 23 MB).</li>
<li>Film z dźwiękiem: nagrania z aparatu (MOV), pobrane pliki (MP4), nagrania ekranu lub filmy z Wiadomości.</li>
</ul>`
            },
            {
                h2: 'Najszybciej: z menu Udostępnij',
                html: '<p>Nie musisz nawet otwierać aplikacji. W <strong>Zdjęciach</strong> lub <strong>Plikach</strong> otwórz film, stuknij <strong>Udostępnij</strong>, przewiń rząd aplikacji i wybierz aplikację. Jeśli jej nie widać, stuknij „Więcej” i raz dodaj ją do ulubionych — od tej pory będzie zawsze pod ręką.</p>'
            },
            {
                h2: 'MP3 czy M4A?',
                html: '<p><strong>MP3</strong> odtworzysz wszędzie: Windows, Android, radio w aucie, strony internetowe i programy do montażu. <strong>M4A</strong> (AAC) to format Apple — mniejszy przy tej samej jakości, idealny na dzwonki, do GarageBand i iMovie. W razie wątpliwości wybierz MP3. Więcej w poradnikach <a href="/pl/guides/convert-video-to-mp3-iphone/">film na MP3</a> i <a href="/pl/guides/video-to-m4a-iphone/">film na M4A</a>.</p>'
            },
            {
                h2: 'Gdzie trafia plik audio?',
                html: '<p>Każdy wyodrębniony plik pojawia się w bibliotece aplikacji z długością, rozmiarem i datą. Stamtąd stuknij <strong>Udostępnij → Zachowaj w Plikach</strong>, aby zapisać go na iCloud Drive lub „Na moim iPhonie”, albo wyślij do WhatsAppa, Messengera, Notatek, GarageBand czy przez AirDrop na Maca.</p>'
            },
            {
                h2: 'Rozwiązywanie problemów',
                html: `<ul>
<li><strong>Plik jest cichy.</strong> Film nie ma ścieżki dźwiękowej — typowe dla nagrań ekranu bez mikrofonu. Najpierw odtwórz film w Zdjęciach.</li>
<li><strong>Film jest w iCloud.</strong> Zdjęcia najpierw pobierają oryginał — poczekaj, aż kółko postępu się zapełni.</li>
<li><strong>Potrzebuję tylko 20 sekund.</strong> Przytnij przed wyodrębnieniem — zobacz <a href="/pl/guides/trim-audio-from-video-iphone/">jak wyciągnąć tylko fragment dźwięku</a>.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Czy wyciąganie dźwięku z filmu na iPhonie jest darmowe?', a: `Tak. ${APP} można pobrać za darmo, a podstawowe wyodrębnianie jest bezpłatne. Opcjonalne zakupy w aplikacji odblokowują dodatki.` },
            { q: 'Czy jakość dźwięku spada?', a: 'Aplikacja konwertuje ścieżkę dźwiękową filmu do wysokiej jakości MP3 lub M4A. Nie zabrzmi lepiej niż oryginał, ale tak samo jak podczas odtwarzania filmu.' },
            { q: 'Czy to działa z długimi filmami?', a: 'Tak. Wykłady, koncerty i spotkania działają tak samo, trwa to tylko trochę dłużej. Jeśli potrzebujesz fragmentu, najpierw przytnij.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'trim-audio-from-video-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Dźwięk z filmu na iPhonie', text: 'Metoda w 4 stuknięciach — ze Zdjęć lub Udostępnij.' }
    },
    {
        slug: 'convert-video-to-mp3-iphone',
        keyword: 'film na mp3 iphone',
        eyebrow: 'Film na MP3',
        title: 'Jak zamienić film na MP3 na iPhonie — szybko i za darmo',
        description: 'Zamień dowolny film z iPhone’a na MP3 w kilka sekund darmowym konwerterem. Prosto ze Zdjęć, bez wysyłania, z przycinaniem przed eksportem. Zobacz jak.',
        h1: 'Jak zamienić film na MP3 na iPhonie',
        answer: `Otwórz film w Zdjęciach, stuknij Udostępnij i wybierz ${APP}. W razie potrzeby przytnij, stuknij „Wyodrębnij audio” i wyeksportuj jako MP3. MP3 zostaje na iPhonie — możesz go zachować w Plikach, wysłać przez AirDrop lub do dowolnej aplikacji. Bez komputera, wysyłania i konta.`,
        intro: '<p>MP3 to najbardziej uniwersalny format audio — zagra w każdym aucie, na każdym komputerze i w każdym programie. Oto jak zamienić dowolny film z iPhone’a na MP3 bez odkładania telefonu.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Wyodrębnij jako MP3', text: 'Stuknij „Wyodrębnij audio” i wybierz MP3. Konwersja odbywa się na iPhonie.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'Dlaczego aplikacja, a nie konwerter online?',
                html: '<p>Konwertery online każą wysłać cały film, czekać, a potem ponownie pobrać MP3 — wolno na danych komórkowych i ryzykownie przy prywatnych nagraniach. Aplikacja działa offline, zostawia plik na urządzeniu i przycina przed konwersją. Porównanie: <a href="/pl/guides/extract-audio-online-vs-app/">online czy aplikacja</a>.</p>'
            },
            {
                h2: 'Jakie filmy można zamienić na MP3?',
                html: '<p>Wszystko, co odtwarza iPhone: nagrania z aparatu (<a href="/pl/guides/mov-to-mp3-iphone/">MOV</a>), pobrane klipy (<a href="/pl/guides/mp4-to-mp3-iphone/">MP4</a>), <a href="/pl/guides/screen-recording-to-audio-iphone/">nagrania ekranu</a> i filmy z Wiadomości, WhatsAppa czy AirDrop.</p>'
            },
            {
                h2: 'Co zrobić z MP3',
                html: `<ul>
<li>Zachować w <strong>Plikach</strong> i słuchać offline.</li>
<li>Wysłać na Maca przez <strong>AirDrop</strong>.</li>
<li>Zrobić z 30 sekund <a href="/pl/guides/video-to-ringtone-iphone/">dzwonek</a>.</li>
<li>Zaimportować do GarageBand, CapCut lub edytora podcastów.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Czy iPhone zamieni film na MP3 bez aplikacji?', a: 'Nie bezpośrednio. Skróty zapisują dźwięk tylko jako M4A, nie MP3. Do MP3 na iPhonie potrzebujesz aplikacji-konwertera lub strony internetowej.' },
            { q: 'Czy konwersja na MP3 jest darmowa?', a: `Tak, podstawowa konwersja w ${APP} jest darmowa. Zakupy w aplikacji dodają dodatkowe funkcje.` },
            { q: 'Czy potrzebuję Wi-Fi, żeby zamienić film na MP3?', a: 'Nie. Konwersja odbywa się na iPhonie i działa offline. Tylko filmy zapisane w iCloud trzeba najpierw pobrać.' }
        ],
        related: ['mp4-to-mp3-iphone', 'mov-to-mp3-iphone', 'video-to-m4a-iphone'],
        card: { title: 'Film na MP3', text: 'Dowolny film z iPhone’a jako uniwersalne MP3.' }
    },
    {
        slug: 'mp4-to-mp3-iphone',
        keyword: 'mp4 na mp3 iphone',
        eyebrow: 'MP4 na MP3',
        title: 'MP4 na MP3 na iPhonie — za darmo i bez wysyłania',
        description: 'Zamień MP4 na MP3 na iPhonie za darmo: otwórz plik w Plikach lub Zdjęciach, stuknij Udostępnij i wybierz aplikację. Offline, z przycinaniem, w 4 krokach.',
        h1: 'Jak zamienić MP4 na MP3 na iPhonie',
        answer: `Aby zamienić MP4 na MP3 na iPhonie, otwórz plik w Plikach lub Zdjęciach, stuknij Udostępnij i wybierz ${APP}. Przytnij, jeśli chcesz, stuknij „Wyodrębnij audio”, wybierz MP3 i zachowaj. Za darmo, na urządzeniu i bez internetu.`,
        intro: '<p>Pliki MP4 zwykle przychodzą jako pobrania, załączniki e-mail lub przez AirDrop, więc częściej są w aplikacji <strong>Pliki</strong> niż w Zdjęciach. Aplikacja obsługuje oba miejsca.</p>',
        steps: [
            { name: 'Znajdź plik MP4', text: 'Otwórz Pliki (Pobrane, iCloud Drive lub „Na moim iPhonie”) albo Zdjęcia i znajdź MP4.', image: 2 },
            { name: 'Wyślij go do aplikacji', text: 'Przytrzymaj plik, stuknij Udostępnij i wybierz aplikację. MP4 otworzy się w niej.', image: 2 },
            STEP.trim,
            { name: 'Zachowaj jako MP3', text: 'Stuknij „Wyodrębnij audio”, wybierz MP3, a potem Udostępnij → Zachowaj w Plikach, aby MP3 leżało obok oryginalnego MP4.', image: 4 }
        ],
        sections: [
            {
                h2: 'MP4 a MP3 w jednym zdaniu',
                html: '<p>MP4 to kontener z obrazem <em>i</em> dźwiękiem; MP3 to sam dźwięk. Przy konwersji zostaje ścieżka audio, a obraz znika — plik robi się dużo mniejszy i zagra w każdym odtwarzaczu.</p>'
            },
            {
                h2: 'MP4 z WhatsAppa, Messengera i e-maila',
                html: '<p>Najpierw zapisz załącznik: w czacie otwórz film → Udostępnij → „Zachowaj wideo” (do Zdjęć) lub „Zachowaj w Plikach”. Potem postępuj według kroków powyżej. Konwertuj tylko własne filmy lub takie, do których masz prawa.</p>'
            },
            {
                h2: 'Wolisz M4A?',
                html: '<p>Na dzwonki i do aplikacji Apple lepszy jest M4A. Zobacz <a href="/pl/guides/video-to-m4a-iphone/">jak zamienić film na M4A na iPhonie</a>.</p>'
            }
        ],
        faq: [
            { q: 'Czy mogę za darmo zamienić MP4 na MP3 na iPhonie?', a: `Tak. ${APP} za darmo konwertuje MP4 na MP3 bezpośrednio na urządzeniu. Zakupy w aplikacji odblokowują dodatki.` },
            { q: 'Czy MP3 będzie mniejsze niż MP4?', a: 'Tak, zwykle dużo mniejsze, bo usuwana jest ścieżka wideo i zostaje tylko dźwięk.' },
            { q: 'Czy mogę przekonwertować kilka plików MP4?', a: 'Tak. Konwertuj je po kolei — każde MP3 zostaje w bibliotece aplikacji.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'mov-to-mp3-iphone', 'extract-audio-online-vs-app'],
        card: { title: 'MP4 na MP3', text: 'Pobrane MP4 z Plików lub Zdjęć na MP3.' }
    },
    {
        slug: 'mov-to-mp3-iphone',
        keyword: 'mov na mp3 iphone',
        eyebrow: 'MOV na MP3',
        title: 'MOV na MP3 na iPhonie — dźwięk z nagrań z aparatu',
        description: 'Filmy nagrane iPhone’em to pliki MOV. Zamień MOV na MP3 bezpośrednio na telefonie: wybierz klip, przytnij i stuknij „Wyodrębnij audio”. Za darmo i offline.',
        h1: 'Jak zamienić MOV na MP3 na iPhonie',
        answer: `Każdy film nagrany aparatem iPhone’a to plik MOV. Aby zamienić MOV na MP3, otwórz klip w Zdjęciach, stuknij Udostępnij, wybierz ${APP}, w razie potrzeby przytnij i stuknij „Wyodrębnij audio”. MP3 zostanie zapisane na iPhonie — bez komputera.`,
        intro: '<p>MOV to format wideo Apple i to w nim nagrywa Twój aparat: koncerty, przemówienia, znajomego z gitarą, głos, który chcesz zachować. Jako MP3 posłuchasz tego wszędzie.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Do czego przydaje się MOV na MP3',
                html: `<ul>
<li>Zachowanie dźwięku z nagranego koncertu lub występu.</li>
<li>Zapisanie przemówienia albo toastu jako pamiątki audio.</li>
<li>Wysłanie próby zespołu bez ogromnego pliku wideo.</li>
<li>Słuchanie nagranego <a href="/pl/guides/lecture-video-to-audio-iphone/">wykładu</a> w drodze.</li>
</ul>`
            },
            {
                h2: 'HEVC, 4K i tryb Kinowy',
                html: '<p>Nagrania HEVC i 4K konwertuje się tak samo. Przetwarzany jest tylko dźwięk, więc nawet ogromne pliki MOV dają małe pliki audio.</p>'
            },
            {
                h2: 'Dlaczego nie na komputerze?',
                html: '<p>Przenoszenie kilkugigabajtowego MOV na komputer tylko po to, by odzyskać dźwięk, trwa dłużej niż konwersja na iPhonie. Aplikacja robi to tam, gdzie film już jest.</p>'
            }
        ],
        faq: [
            { q: 'W jakim formacie iPhone nagrywa filmy?', a: 'Aparat iPhone’a zapisuje pliki MOV, zwykle z wideo HEVC lub H.264 i dźwiękiem AAC.' },
            { q: 'Czy MOV na MP3 traci jakość?', a: 'Aplikacja zachowuje jakość oryginalnego nagrania — MP3 brzmi tak jak film podczas odtwarzania.' },
            { q: 'Czy mogę zamienić MOV na M4A?', a: 'Tak, wybierz format M4A. Dobrze sprawdza się na dzwonki i w aplikacjach Apple.' }
        ],
        related: ['mp4-to-mp3-iphone', 'convert-video-to-mp3-iphone', 'save-music-from-video-iphone'],
        card: { title: 'MOV na MP3', text: 'Nagrania z aparatu jako pliki audio.' }
    }
);

guides.push(
    {
        slug: 'video-to-m4a-iphone',
        keyword: 'film na m4a iphone',
        eyebrow: 'Film na M4A',
        title: 'Jak zamienić film na M4A na iPhonie — MP4 i MOV na M4A',
        description: 'Zapisz dźwięk z filmów jako M4A na dzwonki, do GarageBand i aplikacji Apple. Za darmo, na urządzeniu, z przycinaniem. Z MP4 lub MOV na M4A w 4 stuknięciach.',
        h1: 'Jak zamienić film na M4A na iPhonie',
        answer: `Aby zamienić film na M4A na iPhonie, wyślij go ze Zdjęć lub Plików przez Udostępnij do ${APP}, w razie potrzeby przytnij, stuknij „Wyodrębnij audio” i wybierz M4A. Otrzymasz plik M4A (AAC), który działa w GarageBand, iMovie, odtwarzaczach audio i jako dzwonek.`,
        intro: '<p>M4A to format audio Apple. Przy podobnej jakości jest mniejszy niż MP3 — i właśnie takiego formatu iPhone oczekuje przy dzwonkach i projektach GarageBand.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Wyodrębnij jako M4A', text: 'Stuknij „Wyodrębnij audio” i wybierz M4A.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'M4A czy MP3 — kiedy wybrać M4A',
                html: `<table class="guide-table"><thead><tr><th></th><th>M4A (AAC)</th><th>MP3</th></tr></thead><tbody>
<tr><td>Najlepszy do</td><td>iPhone, Mac, dzwonki, GarageBand</td><td>Wszystkiego innego: Windows, Android, auto</td></tr>
<tr><td>Rozmiar pliku</td><td>Mniejszy przy tej samej jakości</td><td>Nieco większy</td></tr>
<tr><td>Zgodność</td><td>Bardzo dobra</td><td>Uniwersalna</td></tr>
</tbody></table>`
            },
            {
                h2: 'Ustaw M4A jako dzwonek',
                html: '<p>W iOS 26 plik M4A krótszy niż 30 sekund można ustawić jako dzwonek prosto z Plików. Pełny poradnik: <a href="/pl/guides/video-to-ringtone-iphone/">dzwonek z filmu</a>.</p>'
            },
            {
                h2: 'Otwórz w GarageBand lub iMovie',
                html: '<p>Zachowaj M4A w Plikach i zaimportuj go przez przeglądarkę plików w GarageBand lub iMovie jako podkład, lektora albo efekt dźwiękowy.</p>'
            }
        ],
        faq: [
            { q: 'Czy M4A jest lepszy niż MP3?', a: 'Przy tym samym bitrate M4A (AAC) zwykle brzmi tak samo lub lepiej i zajmuje mniej miejsca. MP3 obsługuje więcej urządzeń.' },
            { q: 'Czy mogę zrobić M4A w Skrótach?', a: 'Tak, akcja „Koduj multimedia” z opcją „Tylko audio” tworzy M4A. Nie przytnie jednak dźwięku i nie zapisze MP3 — aplikacja to potrafi.' },
            { q: 'Czy konwersja na M4A jest darmowa?', a: `Tak, podstawowe wyodrębnianie w ${APP} jest darmowe, łącznie z eksportem do M4A.` }
        ],
        related: ['video-to-ringtone-iphone', 'convert-video-to-mp3-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Film na M4A', text: 'Format Apple na dzwonki i do GarageBand.' }
    },
    {
        slug: 'extract-audio-without-app-iphone',
        keyword: 'wyciągnąć dźwięk z filmu iphone bez aplikacji',
        eyebrow: 'Skróty czy aplikacja',
        title: 'Jak wyciągnąć dźwięk z filmu na iPhonie bez aplikacji',
        description: 'Dźwięk z filmu na iPhonie wyciągniesz bez instalowania czegokolwiek — przez Skróty i „Koduj multimedia”. Konfiguracja, limity (tylko M4A) i szybsza metoda.',
        h1: 'Jak wyciągnąć dźwięk z filmu na iPhonie bez aplikacji',
        answer: 'Bez dodatkowej aplikacji użyj skrótu: dodaj akcję „Koduj multimedia”, włącz „Tylko audio”, dodaj „Zachowaj plik” i włącz „Pokaż w arkuszu udostępniania”. Potem udostępnij film temu skrótowi. Działa tylko do M4A i bez przycinania — do MP3 lub krótkich fragmentów aplikacja jest szybsza.',
        intro: '<p>Darmowa aplikacja Skróty od Apple potrafi oddzielić dźwięk od filmu. Konfiguracja zajmuje około dwóch minut. Oto dokładny przepis — i jego ograniczenia.</p>',
        steps: [
            { name: 'Utwórz nowy skrót', text: 'Otwórz Skróty, stuknij + i nazwij skrót „Dźwięk z filmu”.', image: 2 },
            { name: 'Dodaj „Koduj multimedia”', text: 'Stuknij „Dodaj czynność”, wyszukaj „Koduj multimedia”, dodaj ją, rozwiń opcje i włącz „Tylko audio”.', image: 2 },
            { name: 'Dodaj „Zachowaj plik”', text: 'Dodaj akcję „Zachowaj plik”, aby wynik trafiał do Plików.', image: 4 },
            { name: 'Pokaż w Udostępnij', text: 'Otwórz ustawienia skrótu (ikona i), włącz „Pokaż w arkuszu udostępniania” i zezwól na „Multimedia”. Teraz udostępnij film ze Zdjęć i wybierz skrót.', image: 4 }
        ],
        sections: [
            {
                h2: 'Ograniczenia metody ze Skrótami',
                html: `<ul>
<li><strong>Tylko M4A</strong> — bez MP3.</li>
<li><strong>Bez przycinania</strong> — zawsze zapisuje się cała ścieżka.</li>
<li><strong>Bez biblioteki</strong> — pliki trafiają do Plików i trzeba je samemu znaleźć i nazwać.</li>
<li>Przy długich filmach skrót potrafi się zatrzymać bez jasnego komunikatu.</li>
</ul>`
            },
            {
                h2: 'Alternatywa na jedno stuknięcie',
                html: `<p>${APP} robi to samo, ale z przycinaniem, wyborem MP3 lub M4A i biblioteką wszystkich wyodrębnionych plików. Aplikacja też jest w menu Udostępnij, więc jest równie szybka — i niczego nie trzeba konfigurować.</p>`
            },
            {
                h2: 'Inne sposoby bez aplikacji',
                html: '<p>iMovie i GarageBand też oddzielą dźwięk, ale wymagają więcej kroków i mają ograniczone formaty eksportu. Strony internetowe działają, ale trzeba wysłać film — zobacz <a href="/pl/guides/extract-audio-online-vs-app/">online czy aplikacja</a>.</p>'
            }
        ],
        faq: [
            { q: 'Czy iPhone ma wbudowane wyciąganie dźwięku?', a: 'Nie jako przycisk w Zdjęciach. Najbliżej jest akcja „Koduj multimedia” z opcją „Tylko audio” w aplikacji Skróty.' },
            { q: 'W jakim formacie zapisuje skrót?', a: 'W M4A. Skróty nie zapiszą MP3.' },
            { q: 'Czy skrót może przyciąć dźwięk?', a: `Nie w wygodny sposób. Do przycinania użyj aplikacji z osią czasu, np. ${APP}.` }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-online-vs-app', 'video-to-m4a-iphone'],
        card: { title: 'Bez aplikacji (Skróty)', text: 'Darmowy przepis ze Skrótami i jego ograniczenia.' }
    },
    {
        slug: 'extract-audio-online-vs-app',
        keyword: 'wyciągnąć dźwięk z filmu online',
        eyebrow: 'Online czy aplikacja',
        title: 'Dźwięk z filmu online za darmo czy aplikacja na iPhone’a?',
        description: 'Wyciągać dźwięk z filmu online czy aplikacją? Porównujemy prywatność, szybkość, limity i przycinanie na iPhonie — i co wygrywa na telefonie.',
        h1: 'Dźwięk z filmu online (za darmo) czy aplikacja na iPhone’a',
        answer: `Serwisy online działają na każdym urządzeniu, ale wymagają wysłania całego filmu, czekania i pobrania wyniku — wolno na danych komórkowych i mało prywatnie. Na iPhonie aplikacja taka jak ${APP} jest szybsza, działa offline, zostawia filmy na urządzeniu i przycina przed eksportem.`,
        intro: '<p>Kto wpisze „wyciągnąć dźwięk z filmu online”, znajdzie dziesiątki darmowych stron. Na laptopie z szybkim internetem są wygodne. Na iPhonie rachunek wygląda inaczej.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Porównanie',
                html: `<table class="guide-table"><thead><tr><th></th><th>Serwis online</th><th>${APP}</th></tr></thead><tbody>
<tr><td>Prywatność</td><td>Film trafia na cudzy serwer</td><td>Zostaje na iPhonie</td></tr>
<tr><td>Szybkość</td><td>Wysyłanie + kolejka + pobieranie</td><td>Sekundy, na urządzeniu</td></tr>
<tr><td>Offline</td><td>Nie</td><td>Tak</td></tr>
<tr><td>Limit rozmiaru</td><td>Częsty w darmowych planach</td><td>Tylko pamięć telefonu</td></tr>
<tr><td>Przycinanie</td><td>Czasem</td><td>Wbudowana oś czasu</td></tr>
<tr><td>Reklamy i wyskakujące okna</td><td>Częste</td><td>Brak okien z sieci</td></tr>
<tr><td>Cena</td><td>Za darmo z limitami</td><td>Podstawowe funkcje za darmo</td></tr>
</tbody></table>`
            },
            {
                h2: 'Kiedy serwis online ma sens',
                html: '<p>Jeśli siedzisz przy komputerze z Windows, a film już tam jest, wiarygodna strona wystarczy. Nie wysyłaj jednak niczego prywatnego: filmów rodzinnych, spotkań czy materiałów klientów.</p>'
            },
            {
                h2: 'Kiedy lepsza jest aplikacja',
                html: '<p>Jeśli film jest na iPhonie, wygrywa aplikacja: bez wysyłania przez dane komórkowe, bez czekania i pobierania — a do tego przytniesz dokładnie potrzebny fragment.</p>'
            }
        ],
        faq: [
            { q: 'Czy wyciąganie dźwięku z filmu online jest bezpieczne?', a: 'To zależy od strony. Film trafia na serwer firmy trzeciej, więc przy prywatnych nagraniach lepiej tego unikać. Aplikacje działające na urządzeniu niczego nie wysyłają.' },
            { q: 'Czy jest darmowy sposób na iPhonie bez wysyłania filmu?', a: `Tak. ${APP} jest darmowy na start i konwertuje na urządzeniu — Twój film nigdy nie jest wysyłany.` },
            { q: 'Dlaczego konwersja online na telefonie jest taka wolna?', a: 'Bo najpierw trzeba wysłać cały film. Filmy z telefonu są duże, a wysyłanie przez dane komórkowe jest zwykle dużo wolniejsze niż pobieranie.' }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-without-app-iphone', 'mp4-to-mp3-iphone'],
        card: { title: 'Online czy aplikacja', text: 'Prywatność, szybkość i limity w porównaniu.' }
    },
    {
        slug: 'save-music-from-video-iphone',
        keyword: 'muzyka z filmu iphone',
        eyebrow: 'Muzyka',
        title: 'Jak wyciągnąć muzykę z filmu na iPhonie (MP3 lub M4A)',
        description: 'Zapisz piosenkę lub muzykę w tle z filmu na iPhonie jako MP3 lub M4A. Przytnij dokładnie utwór, słuchaj offline i udostępniaj gdzie chcesz. Krótki poradnik.',
        h1: 'Jak wyciągnąć muzykę z filmu na iPhonie',
        answer: `Aby wyciągnąć muzykę z filmu na iPhonie, otwórz film w Zdjęciach, stuknij Udostępnij, wybierz ${APP}, ustaw znaczniki przycinania wokół utworu i stuknij „Wyodrębnij audio”. Muzyka zapisze się jako MP3 lub M4A — do słuchania offline w Plikach lub udostępnienia dowolnej aplikacji.`,
        intro: '<p>Piosenka z wesela, cover znajomego, muzyka z Twojego montażu — czasem najważniejszy w filmie jest dźwięk. Oto jak zapisać go jako osobny plik muzyczny.</p>',
        steps: [STEP.share, { name: 'Przytnij wokół utworu', text: 'Stuknij „Przytnij wideo” i przeciągnij żółte znaczniki tak, by została tylko piosenka. Odsłuchaj początek i koniec.', image: 3 }, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Wskazówki dla najlepszego dźwięku',
                html: `<ul>
<li>Wytnij rozmowy i oklaski na początku i na końcu.</li>
<li>MP3 do radia w aucie i starszych odtwarzaczy, M4A do urządzeń Apple.</li>
<li>Zmień nazwę pliku w Plikach (przytrzymaj → Zmień nazwę), żeby łatwo go znaleźć.</li>
</ul>`
            },
            {
                h2: 'Uwaga o prawach autorskich',
                html: '<p>Zapisuj muzykę tylko z własnych filmów lub takich, do których masz prawa. Utwory komercyjne są chronione prawem autorskim: prywatna kopia własnego nagrania jest w porządku, ponowne publikowanie cudzej muzyki — nie.</p>'
            },
            {
                h2: 'Zrób z niej dzwonek',
                html: '<p>Masz swoje ulubione 30 sekund? <a href="/pl/guides/video-to-ringtone-iphone/">Zrób z nich dzwonek</a>.</p>'
            }
        ],
        faq: [
            { q: 'Jak wyciągnąć piosenkę z filmu na moim iPhonie?', a: `Wyślij film do ${APP}, przytnij wokół piosenki i stuknij „Wyodrębnij audio”. Piosenka zapisze się jako plik audio.` },
            { q: 'Czy mogę dodać piosenkę do Apple Music?', a: 'Aplikacja Muzyka na iPhonie nie importuje bezpośrednio plików lokalnych. Trzymaj plik w Plikach albo zsynchronizuj go z Maca lub PC.' },
            { q: 'Czy to działa z filmami z WhatsAppa lub Wiadomości?', a: 'Tak. Najpierw zapisz film w Zdjęciach lub Plikach, a potem wyciągnij dźwięk.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-ringtone-iphone', 'mov-to-mp3-iphone'],
        card: { title: 'Muzyka z filmu', text: 'Zostaw piosenkę, pomiń obraz.' }
    }
);

guides.push(
    {
        slug: 'trim-audio-from-video-iphone',
        keyword: 'fragment dźwięku z filmu iphone',
        eyebrow: 'Przycinanie',
        title: 'Jak wyciągnąć tylko fragment dźwięku z filmu na iPhonie',
        description: 'Potrzebujesz tylko 10 sekund dźwięku? Przytnij film na iPhonie i wyodrębnij tylko ten fragment jako MP3 lub M4A. Przeciągnij znaczniki i eksportuj.',
        h1: 'Jak wyciągnąć tylko fragment dźwięku z filmu na iPhonie',
        answer: `Aby wyciągnąć tylko fragment dźwięku z filmu, otwórz go w ${APP}, stuknij „Przytnij wideo”, przeciągnij żółte znaczniki początku i końca wokół potrzebnego fragmentu, stuknij „Zachowaj”, a potem „Wyodrębnij audio”. Wyeksportowana zostanie tylko zaznaczona część, jako MP3 lub M4A.`,
        intro: '<p>Zwykle nie potrzebujesz całej ścieżki — tylko cytatu, refrenu albo efektu dźwiękowego. Przycinając najpierw, dostajesz mały i czysty plik.</p>',
        steps: [
            STEP.open,
            { name: 'Stuknij „Przytnij wideo”', text: 'Na ekranie wyodrębniania stuknij „Przytnij wideo”, aby otworzyć oś czasu.', image: 2 },
            { name: 'Przeciągnij znaczniki', text: 'Przesuń lewy żółty znacznik na początek, a prawy na koniec. Czasy pokazują dokładny zakres. Odsłuchaj i stuknij „Zachowaj”.', image: 3 },
            { name: 'Wyodrębnij i zachowaj fragment', text: 'Stuknij „Wyodrębnij audio”. Wyeksportowana zostanie tylko przycięta część — udostępnij ją lub zachowaj w Plikach.', image: 4 }
        ],
        sections: [
            {
                h2: 'Wskazówki do precyzyjnego przycinania',
                html: `<ul>
<li>Zostaw pół sekundy przed i po mowie, żeby nie uciąć słów.</li>
<li>Na dzwonek zaznacz maksymalnie 30 sekund.</li>
<li>Kilka fragmentów z jednego filmu? Powtórz przycinanie dla każdego — wszystko zostaje w bibliotece.</li>
</ul>`
            },
            {
                h2: 'Co najczęściej się wycina',
                html: '<p>Jedno zdanie z przemówienia, refren piosenki, efekt dźwiękowy do montażu, pierwsze słowa dziecka albo ta jedna ważna minuta z długiego spotkania.</p>'
            }
        ],
        faq: [
            { q: 'Czy mogę wyciąć dźwięk z filmu na iPhonie?', a: `Tak. Przytnij film w ${APP} do potrzebnego fragmentu i wyodrębnij — jako audio zapisze się tylko ta część.` },
            { q: 'Czy przycinanie zmienia oryginalny film?', a: 'Nie. Oryginał w Zdjęciach pozostaje nietknięty, przycinany jest tylko eksportowany plik audio.' },
            { q: 'Czy mogę wyciągnąć kilka fragmentów z jednego filmu?', a: 'Tak. Przytnij i wyodrębnij ponownie dla każdego fragmentu.' }
        ],
        related: ['video-to-ringtone-iphone', 'save-music-from-video-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Tylko fragment dźwięku', text: 'Przycinanie co do sekundy.' }
    },
    {
        slug: 'screen-recording-to-audio-iphone',
        keyword: 'dźwięk z nagrania ekranu iphone',
        eyebrow: 'Nagrywanie ekranu',
        title: 'Jak wyciągnąć dźwięk z nagrania ekranu na iPhonie',
        description: 'Zamień nagranie ekranu z iPhone’a na plik MP3 lub M4A. Sprawdź, dlaczego nagranie jest ciche, przytnij właściwy fragment i zachowaj dźwięk. Proste kroki.',
        h1: 'Jak wyciągnąć dźwięk z nagrania ekranu na iPhonie',
        answer: `Nagrania ekranu z iPhone’a zapisują się jako filmy w Zdjęciach. Aby wyciągnąć dźwięk, otwórz nagranie, stuknij Udostępnij, wybierz ${APP}, w razie potrzeby przytnij i stuknij „Wyodrębnij audio”. Jeśli plik jest cichy, nagranie nie zarejestrowało dźwięku — włącz mikrofon przed nagrywaniem.`,
        intro: '<p>Nagrywanie ekranu to popularny sposób na zapisanie wiadomości głosowej, rozmowy na głośniku czy fragmentu z aplikacji. Oto jak zostawić sam dźwięk.</p>',
        steps: [
            { name: 'Znajdź nagranie w Zdjęciach', text: 'Nagrania ekranu są w Zdjęciach → „Typy multimediów” → „Nagrania ekranu”.', image: 2 },
            { name: 'Wyślij je do aplikacji', text: 'Otwórz nagranie, stuknij Udostępnij i wybierz aplikację.', image: 2 },
            STEP.trim,
            { name: 'Wyodrębnij i zachowaj', text: 'Stuknij „Wyodrębnij audio” i zachowaj MP3 lub M4A w Plikach.', image: 4 }
        ],
        sections: [
            {
                h2: 'Dlaczego moje nagranie ekranu jest ciche?',
                html: `<ul>
<li><strong>Wyłączony mikrofon:</strong> w Centrum sterowania przytrzymaj przycisk nagrywania ekranu i włącz „Mikrofon”, aby nagrać swój głos.</li>
<li><strong>Tryb cichy:</strong> niektóre aplikacje nie wydają dźwięku w trybie cichym.</li>
<li><strong>Chronione treści:</strong> wiele aplikacji streamingowych blokuje dźwięk w nagraniach ekranu — to celowe i nie da się tego obejść.</li>
</ul>`
            },
            {
                h2: 'Szanuj prywatność',
                html: '<p>Nagrywaj i zachowuj rozmowy wyłącznie za zgodą wszystkich uczestników i zgodnie z prawem obowiązującym w Twoim kraju.</p>'
            }
        ],
        faq: [
            { q: 'Czy mogę zamienić nagranie ekranu na MP3?', a: 'Tak. Nagrania ekranu to zwykłe filmy, więc ich dźwięk można zapisać jako MP3 lub M4A.' },
            { q: 'Gdzie iPhone zapisuje nagrania ekranu?', a: 'W aplikacji Zdjęcia, w „Typy multimediów” → „Nagrania ekranu”.' },
            { q: 'Dlaczego w moim nagraniu ekranu nic nie słychać?', a: 'Mikrofon był wyłączony albo nagrywana aplikacja blokuje dźwięk. Przed wyodrębnieniem sprawdź, czy nagranie odtwarza się z dźwiękiem.' }
        ],
        related: ['extract-audio-from-video-iphone', 'trim-audio-from-video-iphone', 'lecture-video-to-audio-iphone'],
        card: { title: 'Dźwięk z nagrania ekranu', text: 'Zachowaj dźwięk i sprawdź, czemu go brak.' }
    },
    {
        slug: 'lecture-video-to-audio-iphone',
        keyword: 'wykład wideo na audio',
        eyebrow: 'Nauka',
        title: 'Jak zamienić nagrany wykład na audio na iPhonie (MP3)',
        description: 'Zamień nagrane wykłady, webinary i prelekcje na MP3 na iPhonie i ucz się wszędzie. Małe pliki, słuchanie offline, łatwe udostępnianie. Poradnik krok po kroku.',
        h1: 'Jak zamienić nagrany wykład na audio na iPhonie',
        answer: `Aby zamienić wykład w wideo na audio, otwórz nagranie w Zdjęciach lub Plikach, stuknij Udostępnij, wybierz ${APP} i stuknij „Wyodrębnij audio”. Zachowaj MP3 w Plikach i słuchaj offline — w tramwaju, na siłowni lub przy wyłączonym ekranie — zajmując ułamek miejsca.`,
        intro: '<p>Na wykładzie liczy się to, co zostało powiedziane, a nie to, co widać. Jako audio wykład staje się podcastem, do którego wrócisz w każdej chwili.</p>',
        steps: [
            STEP.share,
            { name: 'Wytnij czekanie i przerwy (opcjonalnie)', text: 'Stuknij „Przytnij wideo”, aby usunąć czekanie przed startem i niepotrzebne pytania.', image: 3 },
            STEP.extract,
            { name: 'Zachowaj w folderze Wykłady', text: 'Stuknij Udostępnij → Zachowaj w Plikach i utwórz folder na każdy przedmiot, żeby szybko wszystko znaleźć.', image: 4 }
        ],
        sections: [
            {
                h2: 'Dlaczego warto uczyć się z audio',
                html: `<ul>
<li><strong>Małe pliki:</strong> godzina audio zajmuje ułamek godziny wideo.</li>
<li><strong>Wyłączony ekran:</strong> słuchaj przy zablokowanym telefonie i oszczędzaj baterię.</li>
<li><strong>Wszędzie:</strong> dojazd, spacer, siłownia — bez Wi-Fi.</li>
</ul>`
            },
            {
                h2: 'Zamień na notatki',
                html: '<p>Potrzebujesz tekstu? Zaimportuj audio do aplikacji do transkrypcji, której już używasz, i przeszukuj transkrypcję później.</p>'
            },
            {
                h2: 'Sprawdź zasady',
                html: '<p>Wiele uczelni pozwala nagrywać na własny użytek, ale nie rozpowszechniać nagrań. Sprawdź zasady zajęć, zanim nagrasz lub udostępnisz wykład.</p>'
            }
        ],
        faq: [
            { q: 'Czy mogę słuchać filmu na iPhonie przy wyłączonym ekranie?', a: 'Większość odtwarzaczy wideo zatrzymuje się po zablokowaniu. Po zamianie na MP3 posłuchasz przy wyłączonym ekranie w Plikach lub dowolnym odtwarzaczu audio.' },
            { q: 'Czy to działa z godzinnym wykładem?', a: 'Tak. Długie nagrania działają tak samo, trwa to tylko trochę dłużej.' },
            { q: 'Czy mogę przekonwertować nagrania z Zoom lub webinarów?', a: 'Tak, gdy tylko nagranie MP4 znajdzie się w Zdjęciach lub Plikach na iPhonie.' }
        ],
        related: ['screen-recording-to-audio-iphone', 'mp4-to-mp3-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Wykład na audio', text: 'Ucz się wszędzie z małymi plikami MP3.' }
    },
    {
        slug: 'video-to-ringtone-iphone',
        keyword: 'dzwonek z filmu iphone',
        eyebrow: 'Dzwonki',
        title: 'Jak zrobić dzwonek z filmu na iPhonie (iOS 26)',
        description: 'Zrób z dowolnego filmu dzwonek na iPhone’a: przytnij dźwięk do 30 s, zachowaj w Plikach i stuknij Udostępnij → „Użyj jako dzwonka”. iOS 26 i GarageBand.',
        h1: 'Jak zrobić dzwonek z filmu na iPhonie',
        answer: `Aby zrobić dzwonek z filmu, otwórz go w ${APP}, przytnij do maksymalnie 30 sekund, wyodrębnij jako M4A lub MP3 i zachowaj w Plikach. W iOS 26 przytrzymaj plik w Plikach, stuknij Udostępnij i wybierz „Użyj jako dzwonka”. W starszych wersjach iOS zaimportuj dźwięk do GarageBand i wyeksportuj jako dzwonek.`,
        intro: '<p>Śmiech, piosenka z imprezy, szczekanie psa — każdy dźwięk z Twoich filmów może zostać dzwonkiem. W iOS 26 to proste, gdy tylko masz plik audio.</p>',
        steps: [
            STEP.share,
            { name: 'Przytnij do 30 sekund', text: 'Stuknij „Przytnij wideo” i zaznacz maksymalnie 30 sekund — to limit dla dzwonków.', image: 3 },
            { name: 'Wyodrębnij i zachowaj w Plikach', text: 'Stuknij „Wyodrębnij audio” (M4A lub MP3), a potem Udostępnij → Zachowaj w Plikach.', image: 4 },
            { name: 'Użyj jako dzwonka', text: 'W Plikach przytrzymaj plik audio, stuknij Udostępnij → „Użyj jako dzwonka” (iOS 26). Sprawdź w Ustawienia → Dźwięki i haptyka → Dzwonek.', image: 4 }
        ],
        sections: [
            {
                h2: 'W iOS 18: sposób z GarageBand',
                html: `<ol>
<li>Wyodrębnij i przytnij dźwięk jak wyżej, a potem zachowaj w Plikach.</li>
<li>Otwórz GarageBand, utwórz projekt „Rejestrator audio” i przełącz na widok ścieżek.</li>
<li>Otwórz przeglądarkę pętli → „Pliki” → „Przeglądaj rzeczy z aplikacji Pliki” i przeciągnij audio na ścieżkę.</li>
<li>Wróć do „Moje utwory”, przytrzymaj projekt → Udostępnij → Dzwonek → Eksportuj.</li>
</ol>`
            },
            {
                h2: 'Dlaczego nie ma „Użyj jako dzwonka”',
                html: `<ul>
<li>Plik jest dłuższy niż 30 sekund — przytnij go ponownie.</li>
<li>Plik nie jest w formacie MP3 ani M4A.</li>
<li>Twój iPhone nie ma jeszcze iOS 26 — użyj GarageBand.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Jak długi może być dzwonek na iPhonie?', a: 'Własne dzwonki z plików audio mogą mieć do 30 sekund.' },
            { q: 'Jakiego formatu potrzebuje dzwonek na iPhone’a?', a: 'W iOS 26 pliki MP3 lub M4A krótsze niż 30 sekund można ustawić przez „Użyj jako dzwonka”.' },
            { q: 'Czy mogę użyć filmu bezpośrednio jako dzwonka?', a: 'Nie. Najpierw wyciągnij dźwięk z filmu, a potem ustaw plik audio jako dzwonek.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-m4a-iphone', 'save-music-from-video-iphone'],
        card: { title: 'Dzwonek z filmu', text: '„Użyj jako dzwonka” w iOS 26 w 4 krokach.' }
    }
);
