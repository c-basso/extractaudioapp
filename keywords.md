# Keyword research — extractaudioapp.com (English / US)

> Updated 2026-09-27. Inputs: Google Trends exports in this repo (`queries.csv`, `relatedQueries.csv`, US, 12 months), the live Google SERP for each query, the App Store listing (see `app.md`), and competitor pages ranking today (CapCut, Filmora, FlexClip, HowToGeek, VideoCandy, Restream, FreeConvert).
> Numbers are **relative Google Trends interest (0–100)**, not absolute volumes — no paid keyword tool was used. Use Search Console impressions to calibrate once the pages are live.

## How we chose

A keyword makes the list only if the searcher is **on an iPhone (or will be)** and **wants to get audio out of a video now**. That is the person who installs. We skip desktop-only intent ("extract audio from video premiere"), downloading from streaming sites (policy risk, no install intent), and generic "audio" terms.

Scoring: **Intent** (how likely the searcher installs an iPhone app) × **Trend** (relative interest / growth) ÷ **Difficulty** (who ranks today). SERPs full of big-brand "4 ways" listicles are beatable with a focused, step-by-step page that shows real screenshots and answers the question in the first 40 words.

## Primary keywords (homepage)

| Keyword | Trends | Growth | Intent | Target |
|---|---|---|---|---|
| extract audio from video | 98–100 | steady | High (mixed device) | `/` H1 + title |
| extract audio from video on iphone / iphone extract audio from video | 14–16 | **+250%, Breakout** | **Very high** | `/` title, H1 |
| extract audio from video app / app to extract audio from video | 5–7 | +120% | **Very high** | `/` hero + download section |
| video to audio | 34 | +70% | Medium | `/` subtitle, how-it-works |
| extract sound from video | 7–8 | +100–300% | High | `/` + FAQ |
| extract audio from video free | 12 | +100% | High | `/` hero ("Free") |

## Long-tail keywords → guide pages (`/guides/…`)

| # | Target keyword (primary) | Supporting variants | Trends / signal | Intent | Page |
|---|---|---|---|---|---|
| 1 | how to extract audio from video on iphone | how to extract audio from video, how to extract audio from video on phone | 15–19, **Breakout** | Very high | `/guides/extract-audio-from-video-iphone/` |
| 2 | convert video to mp3 on iphone | video to mp3, video to mp3 converter, convert video to audio | 7 + **Breakout** | Very high | `/guides/convert-video-to-mp3-iphone/` |
| 3 | mp4 to mp3 on iphone | mp4 to mp3 converter iphone, mp4 to audio | **Breakout** | High | `/guides/mp4-to-mp3-iphone/` |
| 4 | convert mov to mp3 iphone | mov to mp3, mov to audio | long tail, low competition (iPhone records MOV/HEVC) | High | `/guides/mov-to-mp3-iphone/` |
| 5 | convert video to m4a iphone | video to m4a, mp4 to m4a iphone | long tail; app's unique subtitle keyword | High | `/guides/video-to-m4a-iphone/` |
| 6 | extract audio from video iphone without app (shortcuts) | iphone shortcut extract audio, encode media audio only | growing; top SERP result type | Medium → converts when Shortcuts disappoints | `/guides/extract-audio-without-app-iphone/` |
| 7 | extract audio from video online free | online audio extractor, extract audio from video online | 5–8, +80% | Medium (privacy/upload pain → app) | `/guides/extract-audio-online-vs-app/` |
| 8 | save music from video iphone | save song from video, get music from a video iphone | "saving songs" is #1 use case in listing | High | `/guides/save-music-from-video-iphone/` |
| 9 | extract part of audio from video iphone | trim audio from video iphone, cut audio from video | long tail; matches Trim feature/screenshot | High | `/guides/trim-audio-from-video-iphone/` |
| 10 | get audio from screen recording iphone | screen recording to mp3, save audio from screen recording | long tail, low competition | High | `/guides/screen-recording-to-audio-iphone/` |
| 11 | convert lecture video to audio | lecture video to mp3, listen to video as audio | long tail; student segment | High | `/guides/lecture-video-to-audio-iphone/` |
| 12 | make a ringtone from a video on iphone | video to ringtone iphone, turn video into ringtone | large evergreen query family | Medium–High | `/guides/video-to-ringtone-iphone/` |

## FAQ questions (each links to its guide)

Picked from Google "People also ask" patterns for these queries:

1. How do I extract audio from a video on iPhone? → guide 1
2. How do I convert a video to MP3 on iPhone? → guide 2
3. Can I convert MP4 to MP3 on iPhone for free? → guide 3
4. How do I turn a MOV video into audio? → guide 4
5. Can I save audio from a video as M4A? → guide 5
6. Can I extract audio from video on iPhone without an app? → guide 6
7. Is it safe to extract audio from video online? → guide 7
8. How do I save a song from a video on my iPhone? → guide 8
9. Can I extract only part of the audio from a video? → guide 9
10. How do I get the audio from a screen recording? → guide 10
11. How can I listen to a lecture video as audio? → guide 11
12. Can I make a ringtone from a video on iPhone? → guide 12

## On-page rules used on every page

- Keyword in `<title>` (50–60 chars), H1, first 100 words, URL slug, one H2, image `alt`, and meta description (150–160 chars).
- Answer-first: 40–60 word direct answer under the H1 (featured-snippet + AI Overview bait).
- Numbered steps with real screenshots → `HowTo` JSON-LD; page Q&A → `FAQPage`; `BreadcrumbList`; `SoftwareApplication` for the app.
- One primary CTA per screen (App Store badge), repeated after the steps and at the end.
- Internal links: every guide links to home, to 3 related guides, and back from the homepage guides grid and FAQ "Learn more".
- Honest alternatives (Shortcuts, online tools) are covered — this wins trust, featured snippets, and the reader who tried them and got stuck.
- Only suggest extracting audio from videos the user owns or has rights to.

## Next steps (not done here)

- Submit the new URLs to Search Console and run `npm run index:now`.
- Track per-guide clicks → App Store (the badge links can take `?pt=…&ct=guide-slug` campaign tokens from App Store Connect).
- Translate the top 3 guides into es/de/fr/pt once English pages rank.

---

# Русский (RU) — /ru/ и /ru/guides/

> Источники: `ru/relatedQueries.csv` (Google Trends, Россия, 12 мес.), выдача Google/Яндекс по запросам, RU-листинг App Store («Извлечь аудио из видео⁺», подзаголовок «В MP3 и M4A за секунды», 4.4★ / 94 оценки в RU-сторе).
> Цифры — относительный интерес Google Trends (0–100). Для точных объёмов проверьте Яндекс Wordstat.

## Главная (/ru/)

| Запрос | Trends | Куда |
|---|---|---|
| как извлечь аудио из видео | 100 | title, H1 (вариант «звук») |
| извлечь из видео звук / как извлечь звук из видео | 85 / 27 | H1 «Извлеките звук из любого видео на айфоне» |
| скачать аудио из видео | 71 | подзаголовок, блок «Скачать» (формулировка «сохранить аудио») |
| извлечь музыку из видео | 52 | FAQ + инструкция 8 |
| как извлечь аудио из видео на айфоне | 10 (растёт) | title, H1 |
| как из видео сделать аудио | 10 | FAQ, инструкция 2 |

## Инструкции (слаги совпадают с EN → hreflang en/ru)

| # | Основной запрос | Страница |
|---|---|---|
| 1 | как извлечь звук из видео на айфоне | `/ru/guides/extract-audio-from-video-iphone/` |
| 2 | как перевести видео в mp3 на айфоне / как из видео сделать аудио | `/ru/guides/convert-video-to-mp3-iphone/` |
| 3 | mp4 в mp3 на айфоне | `/ru/guides/mp4-to-mp3-iphone/` |
| 4 | mov в mp3 на айфоне | `/ru/guides/mov-to-mp3-iphone/` |
| 5 | видео в m4a на айфоне | `/ru/guides/video-to-m4a-iphone/` |
| 6 | как извлечь звук из видео на айфоне без приложений («Команды») | `/ru/guides/extract-audio-without-app-iphone/` |
| 7 | извлечь звук из видео онлайн (30) / извлечь музыку из видео онлайн (29) | `/ru/guides/extract-audio-online-vs-app/` |
| 8 | как извлечь музыку из видео на айфоне (52) | `/ru/guides/save-music-from-video-iphone/` |
| 9 | обрезать аудио (32) / как вырезать часть звука из видео | `/ru/guides/trim-audio-from-video-iphone/` |
| 10 | как сохранить звук из записи экрана на айфоне | `/ru/guides/screen-recording-to-audio-iphone/` |
| 11 | как из видео лекции сделать аудио | `/ru/guides/lecture-video-to-audio-iphone/` |
| 12 | как сделать рингтон из видео на айфоне | `/ru/guides/video-to-ringtone-iphone/` |

Правила те же, что и для EN. В тексте используем термины интерфейса iOS на русском: «Поделиться», «Фото», «Файлы», «Команды», «Кодировать медиа», «Использовать как рингтон».

---

# Deutsch (DE) — /de/ und /de/guides/

> Quellen: `de/relatedQueries.csv` (Google Trends, Deutschland, 12 Monate, Seed „Video in MP3 umwandeln“), aktuelle Google-SERPs, DE-App-Store-Eintrag („Audio aus Video – MP3 & M4A“, Untertitel „Musik & Stimme speichern“, 4,5★ / 13 Bewertungen im DE-Store).
> Werte = relatives Google-Trends-Interesse (0–100). Im deutschen Markt wird überwiegend „umwandeln“ gesucht, nicht „extrahieren“ — daher steht „Video in MP3 umwandeln“ im Title/H1 der Startseite.

## Startseite (/de/)

| Suchbegriff | Trends | Platzierung |
|---|---|---|
| mp4 in mp3 umwandeln / mp4 in mp3 | 61 | Untertitel, FAQ, Anleitung 3 |
| video in mp3 umwandeln iphone | 36 | **Title, H1** („Video in MP3 umwandeln auf dem iPhone“) |
| video in mp3 umwandeln online | 33 | FAQ, Anleitung 7 |
| video in audio umwandeln | 28 | How-it-works, Schritte |
| video zu mp3 / video to mp3 converter | 18 / 11 | Meta-Keywords, Fließtext |
| mp4 in mp3 umwandeln kostenlos | 10 | Anleitung 3 (Title „kostenlos“) |
| audio aus video extrahieren | Ergänzung | Meta-Description, Anleitung 1 |

Nicht bedient: „video in mp4 umwandeln“ (59) — anderer Intent (Videoformat), passt nicht zur App.

## Anleitungen (Slugs = EN → hreflang en/ru/de)

| # | Haupt-Keyword | Seite |
|---|---|---|
| 1 | audio aus video extrahieren iphone | `/de/guides/extract-audio-from-video-iphone/` |
| 2 | video in mp3 umwandeln iphone | `/de/guides/convert-video-to-mp3-iphone/` |
| 3 | mp4 in mp3 umwandeln (iphone, kostenlos) | `/de/guides/mp4-to-mp3-iphone/` |
| 4 | mov in mp3 umwandeln iphone | `/de/guides/mov-to-mp3-iphone/` |
| 5 | video in m4a umwandeln iphone | `/de/guides/video-to-m4a-iphone/` |
| 6 | audio aus video extrahieren iphone ohne app (Kurzbefehle) | `/de/guides/extract-audio-without-app-iphone/` |
| 7 | video in mp3 umwandeln online | `/de/guides/extract-audio-online-vs-app/` |
| 8 | musik aus video extrahieren iphone | `/de/guides/save-music-from-video-iphone/` |
| 9 | audio aus video ausschneiden iphone | `/de/guides/trim-audio-from-video-iphone/` |
| 10 | ton aus bildschirmaufnahme speichern iphone | `/de/guides/screen-recording-to-audio-iphone/` |
| 11 | vorlesung video in audio umwandeln | `/de/guides/lecture-video-to-audio-iphone/` |
| 12 | klingelton aus video iphone | `/de/guides/video-to-ringtone-iphone/` |

iOS-Begriffe im Text auf Deutsch: „Teilen“, „Fotos“, „Dateien“, „In Dateien sichern“, „Kurzbefehle“, „Medien codieren“, „Nur Audio“, „Als Klingelton verwenden“, „Kontrollzentrum“.

---

# Español (ES) — /es/ y /es/guides/

> Fuentes: `es/relatedQueries.csv` (Google Trends, España, 12 meses, semilla «extraer audio»), SERP actuales, ficha del App Store ES («Extraer Audio de Video», subtítulo «Convertir a MP3 y M4A», 5,0★ / 5 valoraciones en ES).
> Valores = interés relativo de Google Trends (0–100). La gente busca «video» sin tilde; Google trata «video» y «vídeo» como equivalentes, así que el texto usa «vídeo» (español de España) y las keywords sin tilde.

## Inicio (/es/)

| Búsqueda | Trends | Ubicación |
|---|---|---|
| extraer audio video / extraer audio de video | 100 / 94 | **title, H1** («Extraer audio de vídeo en iPhone») |
| extraer audio de un video / como extraer audio de un video | 35 / 16 | H2 «Cómo funciona», FAQ 1, guía 1 |
| descargar audio de video | 16 | meta keywords, texto de descarga |
| extraer audio de video online | 14 | FAQ, guía 7 |
| extraer audio de mp4 / de video mp4 | 10 / 8 | FAQ, guía 3 |
| separar audio de video | 2 (también nombre de compra in-app) | meta keywords |

## Guías (slugs = EN → hreflang en/ru/de/es)

| # | Keyword principal | Página |
|---|---|---|
| 1 | como extraer el audio de un video en iphone | `/es/guides/extract-audio-from-video-iphone/` |
| 2 | convertir video a mp3 iphone | `/es/guides/convert-video-to-mp3-iphone/` |
| 3 | extraer audio de mp4 (iphone) | `/es/guides/mp4-to-mp3-iphone/` |
| 4 | mov a mp3 iphone | `/es/guides/mov-to-mp3-iphone/` |
| 5 | pasar video a m4a iphone | `/es/guides/video-to-m4a-iphone/` |
| 6 | extraer audio de video iphone sin app (Atajos) | `/es/guides/extract-audio-without-app-iphone/` |
| 7 | extraer audio de video online | `/es/guides/extract-audio-online-vs-app/` |
| 8 | extraer musica de un video iphone | `/es/guides/save-music-from-video-iphone/` |
| 9 | recortar audio de un video iphone | `/es/guides/trim-audio-from-video-iphone/` |
| 10 | sacar audio de grabacion de pantalla iphone | `/es/guides/screen-recording-to-audio-iphone/` |
| 11 | pasar video de clase a audio | `/es/guides/lecture-video-to-audio-iphone/` |
| 12 | poner un video de tono de llamada iphone | `/es/guides/video-to-ringtone-iphone/` |

Términos de iOS en español: «Compartir», «Fotos», «Archivos», «Guardar en Archivos», «Atajos», «Codificar contenido multimedia», «Solo audio», «Usar como tono de llamada», «Centro de control».

---

# Français (FR) — /fr/ et /fr/guides/

> Sources : `fr/relatedQueries.csv` (Google Trends, France, 12 mois, requête « vidéo en mp3 »), SERP actuelles, fiche App Store FR (« Extraire Audio de Vidéo », sous-titre « Sauvegarder en MP3 et M4A », 4,1★ / 34 notes en FR).
> Valeurs = intérêt relatif Google Trends (0–100).

## Accueil (/fr/)

| Requête | Trends | Emplacement |
|---|---|---|
| extraire le son d’une vidéo | 100 | **title, H1** (« Extraire le son d’une vidéo sur iPhone ») |
| convertir vidéo en mp3 / convertir en mp3 | 73 | meta description, FAQ, guide 2 |
| convertisseur vidéo (en) mp3 | 43 | meta keywords, guide 2 |
| comment extraire le son d’une vidéo | 39 | H2 « Comment ça marche », FAQ 1, guide 1 |
| mp4 en mp3 / transformer mp4 en mp3 | 38 / +80 % | FAQ, guide 3 |
| extraire son d’une vidéo en ligne | 13 | FAQ, guide 7 |

Non ciblé : « télécharger vidéo » (34) — autre intention.

## Guides (slugs = EN → hreflang en/ru/de/es/fr)

| # | Mot-clé principal | Page |
|---|---|---|
| 1 | comment extraire le son d’une vidéo sur iphone | `/fr/guides/extract-audio-from-video-iphone/` |
| 2 | convertir une vidéo en mp3 sur iphone | `/fr/guides/convert-video-to-mp3-iphone/` |
| 3 | transformer mp4 en mp3 (iphone) | `/fr/guides/mp4-to-mp3-iphone/` |
| 4 | convertir mov en mp3 iphone | `/fr/guides/mov-to-mp3-iphone/` |
| 5 | convertir vidéo en m4a iphone | `/fr/guides/video-to-m4a-iphone/` |
| 6 | extraire le son d’une vidéo iphone sans application (Raccourcis) | `/fr/guides/extract-audio-without-app-iphone/` |
| 7 | extraire son d’une vidéo en ligne | `/fr/guides/extract-audio-online-vs-app/` |
| 8 | extraire la musique d’une vidéo iphone | `/fr/guides/save-music-from-video-iphone/` |
| 9 | extraire une partie du son d’une vidéo iphone | `/fr/guides/trim-audio-from-video-iphone/` |
| 10 | récupérer le son d’un enregistrement d’écran iphone | `/fr/guides/screen-recording-to-audio-iphone/` |
| 11 | convertir un cours vidéo en audio | `/fr/guides/lecture-video-to-audio-iphone/` |
| 12 | faire une sonnerie avec une vidéo iphone | `/fr/guides/video-to-ringtone-iphone/` |

Termes iOS en français : « Partager », « Photos », « Fichiers », « Enregistrer dans Fichiers », « Raccourcis », « Encoder le contenu multimédia », « Audio uniquement », « Utiliser comme sonnerie », « Centre de contrôle ».

---

# Italiano (IT) — /it/ e /it/guides/

> Fonti: `it/relatedQueries.csv` (Google Trends, Italia, 12 mesi, query «estrarre audio da video»), SERP attuali, scheda App Store IT («Estrarre Audio da Video», sottotitolo «Salva musica in MP3 e M4A», 4,6★ / 11 valutazioni in IT).
> Valori = interesse relativo Google Trends (0–100).

## Home (/it/)

| Query | Trends | Posizione |
|---|---|---|
| come estrarre audio da video / da un video | 92 / 38 | **title, H1** («Estrarre audio da video su iPhone»), H2 «Come funziona», FAQ 1 |
| estrarre audio da video online (gratis) | 62 / 32 | FAQ, guida 7 |
| estrarre audio da video iphone | 48 | title, meta description, guida 1 |
| estrarre audio da mp4 | 29 (+70 %) | FAQ, guida 3 |
| estrai audio da video | 12 | meta keywords |

## Guide (slug = EN → hreflang en/ru/de/es/fr/it)

| # | Keyword principale | Pagina |
|---|---|---|
| 1 | come estrarre audio da un video su iphone | `/it/guides/extract-audio-from-video-iphone/` |
| 2 | convertire video in mp3 iphone | `/it/guides/convert-video-to-mp3-iphone/` |
| 3 | estrarre audio da mp4 (iphone) | `/it/guides/mp4-to-mp3-iphone/` |
| 4 | mov in mp3 iphone | `/it/guides/mov-to-mp3-iphone/` |
| 5 | convertire video in m4a iphone | `/it/guides/video-to-m4a-iphone/` |
| 6 | estrarre audio da video iphone senza app (Comandi) | `/it/guides/extract-audio-without-app-iphone/` |
| 7 | estrarre audio da video online gratis | `/it/guides/extract-audio-online-vs-app/` |
| 8 | estrarre musica da un video iphone | `/it/guides/save-music-from-video-iphone/` |
| 9 | tagliare audio di un video iphone | `/it/guides/trim-audio-from-video-iphone/` |
| 10 | audio registrazione schermo iphone | `/it/guides/screen-recording-to-audio-iphone/` |
| 11 | convertire video lezione in audio | `/it/guides/lecture-video-to-audio-iphone/` |
| 12 | suoneria da video iphone | `/it/guides/video-to-ringtone-iphone/` |

Termini iOS in italiano: «Condividi», «Foto», «File», «Salva su File», «Comandi», «Codifica contenuto multimediale», «Solo audio», «Usa come suoneria», «Centro di Controllo».

---

# Português do Brasil (PT-BR) — /pt/ e /pt/guides/

> Decisão: /pt/ passou a mirar o **Brasil** (maior volume; os dados de keywords já eram do Brasil). `og:locale` = pt_BR, `<html lang="pt-BR">`, preço no schema em BRL. O hreflang continua `pt`, então buscas de Portugal também caem aqui.
> Fontes: `pt/relatedQueries.csv` (Google Trends, Brasil, 12 meses, termo «Extrair Áudio de Vídeo»), SERP atuais, ficha da App Store («Extrair Áudio de Vídeo», subtítulo «Converter para MP3 e M4A»).
> Valores = interesse relativo do Google Trends (0–100).

## Início (/pt/)

| Busca | Trends | Posição |
|---|---|---|
| extrair audio / extrair audio de video | 100 / 83 | **title, H1** («Extrair áudio de vídeo no iPhone») |
| extrair áudio de vídeo online (grátis) | 80 / 48 | FAQ, guia 7 |
| baixar áudio de vídeo / baixar audio do video | 54 / 15 | CTA «Baixar», meta keywords |
| tirar audio de video | 20 | meta keywords, guias 8 e 10 («tirar música», «tirar o áudio») |
| como extrair audio de video | 17 | H2 «Como funciona», FAQ 1, guia 1 |
| extrair áudio de vídeo mp4 | 13 | FAQ, guia 3 |

## Guias (slugs = EN → hreflang en/ru/de/es/fr/it/pt)

| # | Keyword principal | Página |
|---|---|---|
| 1 | como extrair áudio de vídeo no iphone | `/pt/guides/extract-audio-from-video-iphone/` |
| 2 | converter vídeo em mp3 no iphone | `/pt/guides/convert-video-to-mp3-iphone/` |
| 3 | extrair áudio de vídeo mp4 (iphone) | `/pt/guides/mp4-to-mp3-iphone/` |
| 4 | mov para mp3 iphone | `/pt/guides/mov-to-mp3-iphone/` |
| 5 | converter vídeo em m4a iphone | `/pt/guides/video-to-m4a-iphone/` |
| 6 | extrair áudio de vídeo no iphone sem app (Atalhos) | `/pt/guides/extract-audio-without-app-iphone/` |
| 7 | extrair áudio de vídeo online grátis | `/pt/guides/extract-audio-online-vs-app/` |
| 8 | tirar música de um vídeo no iphone | `/pt/guides/save-music-from-video-iphone/` |
| 9 | cortar áudio de vídeo no iphone | `/pt/guides/trim-audio-from-video-iphone/` |
| 10 | tirar áudio de gravação de tela iphone | `/pt/guides/screen-recording-to-audio-iphone/` |
| 11 | transformar videoaula em áudio | `/pt/guides/lecture-video-to-audio-iphone/` |
| 12 | como fazer toque com vídeo no iphone | `/pt/guides/video-to-ringtone-iphone/` |

Termos do iOS em pt-BR: «Compartilhar», «Fotos», «Arquivos», «Salvar em Arquivos», «Atalhos», «Codificar Mídia», «Somente Áudio», «Usar como Toque», «Central de Controle».

---

# 日本語 (JA) — /ja/ と /ja/guides/

> 出典：現在のGoogle検索結果（CapCut、Yahoo!知恵袋、Portal 21、すっぴんぶろぐ等の上位記事）、日本のApp Store掲載情報（「動画から音声抽出」、サブタイトル「MP3・M4Aに簡単変換」、5.0★／1件）。**ja 用の Google Trends CSV はリポジトリにないため**、下表の優先度は検索結果と既存 `ja.json` のキーワードからの推定です。Search Console で要検証。
> タイトルは全角30〜40字、説明文は約80〜120字（日本語SERPの表示幅に合わせる）。

## ホーム（/ja/）

| 検索語 | 優先度 | 配置 |
|---|---|---|
| 動画から音声を抽出 / iPhone 動画 音声 抽出 | 最優先 | **title・H1**（「iPhoneで動画から音声を抽出」） |
| 動画 音声だけ 保存 | 高 | meta description、ヒーロー文 |
| 動画をMP3に変換 / MP4 MP3 変換 | 高 | FAQ、ガイド2・3 |
| 動画から音楽を取り出す | 中 | FAQ、ガイド8 |
| 音声抽出 アプリ 無料 | 中 | ダウンロードセクション |
| ショートカット 音声抽出 | 中（知恵袋・ブログで需要あり） | FAQ、ガイド6 |

## ガイド（スラッグ = EN → hreflang en/ru/de/es/fr/it/pt/ja）

| # | メインキーワード | ページ |
|---|---|---|
| 1 | iPhone 動画から音声を抽出 方法 | `/ja/guides/extract-audio-from-video-iphone/` |
| 2 | iPhone 動画 MP3 変換 | `/ja/guides/convert-video-to-mp3-iphone/` |
| 3 | MP4 MP3 変換 iPhone | `/ja/guides/mp4-to-mp3-iphone/` |
| 4 | MOV MP3 変換 iPhone | `/ja/guides/mov-to-mp3-iphone/` |
| 5 | 動画 M4A 変換 iPhone | `/ja/guides/video-to-m4a-iphone/` |
| 6 | iPhone 動画 音声抽出 ショートカット | `/ja/guides/extract-audio-without-app-iphone/` |
| 7 | 動画 音声 抽出 オンライン | `/ja/guides/extract-audio-online-vs-app/` |
| 8 | 動画から音楽を取り出す iPhone | `/ja/guides/save-music-from-video-iphone/` |
| 9 | 動画 音声 一部だけ 抽出 iPhone | `/ja/guides/trim-audio-from-video-iphone/` |
| 10 | 画面収録 音声だけ 保存 iPhone | `/ja/guides/screen-recording-to-audio-iphone/` |
| 11 | 講義 動画 音声 変換 | `/ja/guides/lecture-video-to-audio-iphone/` |
| 12 | 動画 着信音 iPhone | `/ja/guides/video-to-ringtone-iphone/` |

iOSの日本語表記：「共有」「写真」「ファイル」「“ファイル”に保存」「ショートカット」「メディアをエンコード」「オーディオのみ」「着信音として使用」「コントロールセンター」「画面収録」。

---

# 한국어 (KO) — /ko/ 및 /ko/guides/

> 출처: 현재 Google 검색 결과(CapCut, 익스트림 매뉴얼, korea-iphone.com, 더쿠 등 상위 글), 한국 App Store 정보(「영상 오디오 추출 ⁺」, 부제 「음악 MP3·M4A 저장」, 5.0★/1건). **ko용 Google Trends CSV가 저장소에 없어** 아래 우선순위는 검색 결과와 기존 `ko.json` 키워드를 바탕으로 한 추정입니다. 네이버 키워드 도구·Search Console로 검증 권장.
> 제목은 25~35자, 설명은 약 80~140자(한국어 SERP 표시 폭 기준).

## 홈 (/ko/)

| 검색어 | 우선순위 | 위치 |
|---|---|---|
| 동영상 음원 추출 / 아이폰 동영상 음원 추출 | 최우선 | **title, H1** |
| 영상 mp3 변환 / 아이폰 동영상 mp3 변환 | 높음 | meta description, FAQ, 가이드 2 |
| 동영상 소리 추출 / 영상 소리만 저장 | 높음 | 히어로, meta keywords |
| 음원 추출 사이트 | 높음(사이트 검색이 많음) | FAQ, 가이드 7 |
| 단축어 음원 추출 | 중간(블로그 수요 많음) | FAQ, 가이드 6 |
| 영상에서 음악 추출 | 중간 | FAQ, 가이드 8 |

## 가이드 (슬러그 = EN → hreflang en/ru/de/es/fr/it/pt/ja/ko)

| # | 메인 키워드 | 페이지 |
|---|---|---|
| 1 | 아이폰 동영상 음원 추출 방법 | `/ko/guides/extract-audio-from-video-iphone/` |
| 2 | 아이폰 동영상 mp3 변환 | `/ko/guides/convert-video-to-mp3-iphone/` |
| 3 | 아이폰 mp4 mp3 변환 | `/ko/guides/mp4-to-mp3-iphone/` |
| 4 | mov mp3 변환 아이폰 | `/ko/guides/mov-to-mp3-iphone/` |
| 5 | 동영상 m4a 변환 아이폰 | `/ko/guides/video-to-m4a-iphone/` |
| 6 | 아이폰 단축어 음원 추출 | `/ko/guides/extract-audio-without-app-iphone/` |
| 7 | 음원 추출 사이트 | `/ko/guides/extract-audio-online-vs-app/` |
| 8 | 영상에서 음악 추출 아이폰 | `/ko/guides/save-music-from-video-iphone/` |
| 9 | 동영상 소리 일부만 추출 아이폰 | `/ko/guides/trim-audio-from-video-iphone/` |
| 10 | 화면 기록 소리 추출 아이폰 | `/ko/guides/screen-recording-to-audio-iphone/` |
| 11 | 강의 영상 음성 변환 | `/ko/guides/lecture-video-to-audio-iphone/` |
| 12 | 동영상 벨소리 만들기 아이폰 | `/ko/guides/video-to-ringtone-iphone/` |

iOS 한국어 표기: ‘공유’, ‘사진’, ‘파일’, ‘파일에 저장’, ‘단축어’, ‘미디어 인코딩’, ‘오디오만’, ‘벨소리로 사용’, ‘제어 센터’, ‘화면 기록’.

---

# Nederlands (NL) — /nl/ en /nl/guides/

> Bronnen: huidige Google-zoekresultaten, bestaande `nl.json`-zoekwoorden, Nederlandse App Store-vermelding («Audio uit Video naar MP3⁺», ondertitel «Muziek bewaren als M4A», nog te weinig beoordelingen in NL). **Er staat geen Google Trends-CSV voor nl in de repo** — de prioriteiten hieronder zijn een inschatting; controleer met Search Console of Google Trends (Nederland + België).

## Home (/nl/)

| Zoekterm | Prioriteit | Plaats |
|---|---|---|
| audio uit video halen / geluid uit video halen (iphone) | hoogst | **title, H1** («Audio uit video halen op je iPhone») |
| video naar mp3 (iphone) / video naar mp3 converter | hoog | meta description, FAQ, handleiding 2 |
| mp4 naar mp3 | hoog | FAQ, handleiding 3 |
| video omzetten naar audio | midden | ‘Hoe het werkt’, meta keywords |
| audio uit video halen online | midden | FAQ, handleiding 7 |
| muziek uit video halen | midden | FAQ, handleiding 8 |

## Handleidingen (slugs = EN → hreflang en/ru/de/es/fr/it/pt/ja/ko/nl)

| # | Hoofdzoekwoord | Pagina |
|---|---|---|
| 1 | audio uit video halen iphone | `/nl/guides/extract-audio-from-video-iphone/` |
| 2 | video naar mp3 iphone | `/nl/guides/convert-video-to-mp3-iphone/` |
| 3 | mp4 naar mp3 iphone | `/nl/guides/mp4-to-mp3-iphone/` |
| 4 | mov naar mp3 iphone | `/nl/guides/mov-to-mp3-iphone/` |
| 5 | video naar m4a iphone | `/nl/guides/video-to-m4a-iphone/` |
| 6 | audio uit video halen iphone zonder app (Opdrachten) | `/nl/guides/extract-audio-without-app-iphone/` |
| 7 | audio uit video halen online | `/nl/guides/extract-audio-online-vs-app/` |
| 8 | muziek uit video halen iphone | `/nl/guides/save-music-from-video-iphone/` |
| 9 | deel van geluid uit video halen iphone | `/nl/guides/trim-audio-from-video-iphone/` |
| 10 | geluid uit schermopname halen iphone | `/nl/guides/screen-recording-to-audio-iphone/` |
| 11 | college video omzetten naar audio | `/nl/guides/lecture-video-to-audio-iphone/` |
| 12 | beltoon van video maken iphone | `/nl/guides/video-to-ringtone-iphone/` |

iOS-termen in het Nederlands: ‘Deel’, ‘Foto’s’, ‘Bestanden’, ‘Bewaar in Bestanden’, ‘Opdrachten’, ‘Codeer media’, ‘Alleen audio’, ‘Gebruik als beltoon’, ‘Bedieningspaneel’, ‘Schermopname’.

---

# Polski (PL) — /pl/ i /pl/guides/

> Źródła: aktualne wyniki Google, dotychczasowe słowa kluczowe z `pl.json`, polska strona App Store (4,2★ / 5 ocen). **Uwaga: polska karta w App Store jest po angielsku** (tytuł «Extract Audio from Video⁺», podtytuł «Save Music as MP3 & M4A») — warto ją zlokalizować (np. «Dźwięk z filmu – MP3 i M4A»), bo tytuł i podtytuł są indeksowane w wyszukiwarce App Store. Brak CSV z Google Trends dla pl — priorytety to ocena szacunkowa; zweryfikuj w Search Console.
> W Polsce częściej mówi się „film” niż „wideo”, dlatego H1/title używają „dźwięk z filmu”.

## Strona główna (/pl/)

| Fraza | Priorytet | Miejsce |
|---|---|---|
| wyciągnąć dźwięk z filmu / jak wyciągnąć dźwięk z filmu iphone | najwyższy | **title, H1** |
| audio z wideo / dźwięk z filmu iphone | wysoki | meta description, meta keywords |
| film na mp3 / wideo na mp3 / konwerter wideo na mp3 | wysoki | FAQ, poradnik 2 |
| mp4 na mp3 | wysoki | FAQ, poradnik 3 |
| wyciągnąć dźwięk z filmu online | średni | FAQ, poradnik 7 |
| muzyka z filmu | średni | FAQ, poradnik 8 |

## Poradniki (slugi = EN → hreflang en/ru/de/es/fr/it/pt/ja/ko/nl/pl)

| # | Główna fraza | Strona |
|---|---|---|
| 1 | jak wyciągnąć dźwięk z filmu na iphonie | `/pl/guides/extract-audio-from-video-iphone/` |
| 2 | film na mp3 iphone | `/pl/guides/convert-video-to-mp3-iphone/` |
| 3 | mp4 na mp3 iphone | `/pl/guides/mp4-to-mp3-iphone/` |
| 4 | mov na mp3 iphone | `/pl/guides/mov-to-mp3-iphone/` |
| 5 | film na m4a iphone | `/pl/guides/video-to-m4a-iphone/` |
| 6 | wyciągnąć dźwięk z filmu iphone bez aplikacji (Skróty) | `/pl/guides/extract-audio-without-app-iphone/` |
| 7 | wyciągnąć dźwięk z filmu online | `/pl/guides/extract-audio-online-vs-app/` |
| 8 | muzyka z filmu iphone | `/pl/guides/save-music-from-video-iphone/` |
| 9 | fragment dźwięku z filmu iphone | `/pl/guides/trim-audio-from-video-iphone/` |
| 10 | dźwięk z nagrania ekranu iphone | `/pl/guides/screen-recording-to-audio-iphone/` |
| 11 | wykład wideo na audio | `/pl/guides/lecture-video-to-audio-iphone/` |
| 12 | dzwonek z filmu iphone | `/pl/guides/video-to-ringtone-iphone/` |

Terminy iOS po polsku: „Udostępnij”, „Zdjęcia”, „Pliki”, „Zachowaj w Plikach”, „Skróty”, „Koduj multimedia”, „Tylko audio”, „Użyj jako dzwonka”, „Centrum sterowania”, „Nagrywanie ekranu”.

---

# Română (RO) — /ro/ și /ro/guides/

> Surse: rezultatele Google actuale, cuvintele-cheie existente din `ro.json`, pagina App Store din România (5,0★ / 1 evaluare). **Atenție: fișa din App Store RO este în engleză** («Extract Audio from Video⁺» / «Save Music as MP3 & M4A») — merită localizată (ex. «Extrage audio din video – MP3, M4A»), pentru că titlul și subtitlul sunt indexate în căutarea App Store. Nu există CSV Google Trends pentru ro — prioritățile sunt estimate; verifică în Search Console.

## Acasă (/ro/)

| Căutare | Prioritate | Poziție |
|---|---|---|
| extrage audio din video / extragere audio din video | cea mai mare | **title, H1** |
| cum extragi sunetul dintr-un video iphone / sunet din video iphone | mare | H2 „Cum funcționează”, FAQ 1, ghid 1 |
| video în mp3 / convertor video mp3 | mare | meta description, FAQ, ghid 2 |
| mp4 în mp3 | mare | FAQ, ghid 3 |
| extrage audio din video online | medie | FAQ, ghid 7 |
| muzică din video | medie | FAQ, ghid 8 |

## Ghiduri (slug-uri = EN → hreflang en/ru/de/es/fr/it/pt/ja/ko/nl/pl/ro)

| # | Cuvânt-cheie principal | Pagină |
|---|---|---|
| 1 | cum extragi audio din video pe iphone | `/ro/guides/extract-audio-from-video-iphone/` |
| 2 | video în mp3 iphone | `/ro/guides/convert-video-to-mp3-iphone/` |
| 3 | mp4 în mp3 iphone | `/ro/guides/mp4-to-mp3-iphone/` |
| 4 | mov în mp3 iphone | `/ro/guides/mov-to-mp3-iphone/` |
| 5 | video în m4a iphone | `/ro/guides/video-to-m4a-iphone/` |
| 6 | extrage audio din video iphone fără aplicație (Scurtături) | `/ro/guides/extract-audio-without-app-iphone/` |
| 7 | extrage audio din video online | `/ro/guides/extract-audio-online-vs-app/` |
| 8 | extrage muzica din video iphone | `/ro/guides/save-music-from-video-iphone/` |
| 9 | extrage doar o parte din sunetul unui video iphone | `/ro/guides/trim-audio-from-video-iphone/` |
| 10 | sunet din înregistrare ecran iphone | `/ro/guides/screen-recording-to-audio-iphone/` |
| 11 | curs video în audio | `/ro/guides/lecture-video-to-audio-iphone/` |
| 12 | ton de apel din video iphone | `/ro/guides/video-to-ringtone-iphone/` |

Termeni iOS în română: „Partajează”, „Poze”, „Fișiere”, „Salvează în Fișiere”, „Scurtături”, „Codifică media”, „Doar audio”, „Folosește ca ton de apel”, „Centrul de control”, „Înregistrare ecran”.

---

# ภาษาไทย (TH) — /th/ และ /th/guides/

> แหล่งข้อมูล: ผลการค้นหา Google ปัจจุบัน, คีย์เวิร์ดเดิมใน `th.json`, หน้า App Store ไทย (5.0★ / 11 คะแนน) **หมายเหตุ: หน้า App Store ไทยยังเป็นภาษาอังกฤษ** («Extract Audio from Video⁺» / «Save Music as MP3 & M4A») ควรแปลชื่อและคำโปรยเป็นภาษาไทย (เช่น «แยกเสียงจากวิดีโอ – MP3, M4A») เพราะถูกใช้ในการค้นหาของ App Store ไม่มี CSV ของ Google Trends สำหรับ th — ลำดับความสำคัญด้านล่างเป็นการประเมิน ควรตรวจสอบกับ Search Console

## หน้าแรก (/th/)

| คำค้นหา | ความสำคัญ | ตำแหน่ง |
|---|---|---|
| แยกเสียงจากวิดีโอ / ดึงเสียงจากวิดีโอ iphone | สูงสุด | **title, H1** |
| แปลงวิดีโอเป็น mp3 (iphone) | สูง | meta description, FAQ, คู่มือ 2 |
| mp4 เป็น mp3 | สูง | FAQ, คู่มือ 3 |
| แยกเสียงจากวิดีโอ ออนไลน์ | กลาง | FAQ, คู่มือ 7 |
| แยกเสียงเพลงจากวิดีโอ | กลาง | FAQ, คู่มือ 8 |
| ทำริงโทนจากวิดีโอ iphone | กลาง | FAQ, คู่มือ 12 |

## คู่มือ (slug = EN → hreflang en/ru/de/es/fr/it/pt/ja/ko/nl/pl/ro/th)

| # | คีย์เวิร์ดหลัก | หน้า |
|---|---|---|
| 1 | วิธีแยกเสียงจากวิดีโอ iphone | `/th/guides/extract-audio-from-video-iphone/` |
| 2 | แปลงวิดีโอเป็น mp3 iphone | `/th/guides/convert-video-to-mp3-iphone/` |
| 3 | แปลง mp4 เป็น mp3 iphone | `/th/guides/mp4-to-mp3-iphone/` |
| 4 | แปลง mov เป็น mp3 iphone | `/th/guides/mov-to-mp3-iphone/` |
| 5 | แปลงวิดีโอเป็น m4a iphone | `/th/guides/video-to-m4a-iphone/` |
| 6 | แยกเสียงจากวิดีโอ iphone ไม่ใช้แอป (คำสั่งลัด) | `/th/guides/extract-audio-without-app-iphone/` |
| 7 | แยกเสียงจากวิดีโอ ออนไลน์ | `/th/guides/extract-audio-online-vs-app/` |
| 8 | แยกเสียงเพลงจากวิดีโอ iphone | `/th/guides/save-music-from-video-iphone/` |
| 9 | ตัดเสียงจากวิดีโอบางช่วง iphone | `/th/guides/trim-audio-from-video-iphone/` |
| 10 | ดึงเสียงจากการบันทึกหน้าจอ iphone | `/th/guides/screen-recording-to-audio-iphone/` |
| 11 | แปลงวิดีโอบรรยายเป็นเสียง | `/th/guides/lecture-video-to-audio-iphone/` |
| 12 | ทำริงโทนจากวิดีโอ iphone | `/th/guides/video-to-ringtone-iphone/` |

คำศัพท์ iOS ภาษาไทย: “แชร์”, “รูปภาพ”, “ไฟล์”, “บันทึกไปยังไฟล์”, “คำสั่งลัด”, “เข้ารหัสสื่อ”, “เสียงเท่านั้น”, “ใช้เป็นเสียงเรียกเข้า”, “ศูนย์ควบคุม”, “การบันทึกหน้าจอ”

---

# Türkçe (TR) — /tr/ ve /tr/guides/

> Kaynaklar: güncel Google sonuçları, `tr.json` içindeki mevcut anahtar kelimeler, Türkiye App Store sayfası (1,0★ / 1 değerlendirme). **Not: TR App Store sayfası İngilizce** («Extract Audio from Video⁺» / «Save Music as MP3 & M4A») — başlık ve alt başlık App Store aramasında dizine alındığı için Türkçeleştirilmesi önerilir (ör. «Videodan Ses Çıkarma – MP3, M4A»). tr için Google Trends CSV’si yok — öncelikler tahminidir; Search Console ile doğrulayın.

## Ana sayfa (/tr/)

| Arama | Öncelik | Konum |
|---|---|---|
| videodan ses çıkarma (iphone) | en yüksek | **title, H1** |
| videodan ses ayırma | yüksek | meta keywords, ana metin |
| video mp3 çevirme / videoyu mp3 yapma | yüksek | meta description, SSS, rehber 2 |
| mp4 mp3 dönüştürme | yüksek | SSS, rehber 3 |
| videodan ses çıkarma online | orta | SSS, rehber 7 |
| videodan müzik çıkarma | orta | SSS, rehber 8 |
| iphone zil sesi yapma video | orta | SSS, rehber 12 |

## Rehberler (slug’lar = EN → hreflang en/ru/de/es/fr/it/pt/ja/ko/nl/pl/ro/th/tr)

| # | Ana anahtar kelime | Sayfa |
|---|---|---|
| 1 | iphone videodan ses çıkarma | `/tr/guides/extract-audio-from-video-iphone/` |
| 2 | iphone video mp3 çevirme | `/tr/guides/convert-video-to-mp3-iphone/` |
| 3 | mp4 mp3 dönüştürme iphone | `/tr/guides/mp4-to-mp3-iphone/` |
| 4 | mov mp3 çevirme iphone | `/tr/guides/mov-to-mp3-iphone/` |
| 5 | video m4a çevirme iphone | `/tr/guides/video-to-m4a-iphone/` |
| 6 | iphone uygulamasız videodan ses çıkarma (Kestirmeler) | `/tr/guides/extract-audio-without-app-iphone/` |
| 7 | videodan ses çıkarma online | `/tr/guides/extract-audio-online-vs-app/` |
| 8 | videodan müzik çıkarma iphone | `/tr/guides/save-music-from-video-iphone/` |
| 9 | videonun bir kısmının sesini çıkarma iphone | `/tr/guides/trim-audio-from-video-iphone/` |
| 10 | ekran kaydı ses çıkarma iphone | `/tr/guides/screen-recording-to-audio-iphone/` |
| 11 | ders videosunu sese çevirme | `/tr/guides/lecture-video-to-audio-iphone/` |
| 12 | iphone videodan zil sesi yapma | `/tr/guides/video-to-ringtone-iphone/` |

Türkçe iOS terimleri: “Paylaş”, “Fotoğraflar”, “Dosyalar”, “Dosyalar’a Kaydet”, “Kestirmeler”, “Ortamı Kodla”, “Yalnızca Ses”, “Zil Sesi Olarak Kullan”, “Denetim Merkezi”, “Ekran Kaydı”.

---

# Українська (UK) — /uk/ та /uk/guides/

> Джерела: поточна видача Google, наявні ключові слова в `uk.json`, сторінка App Store України (4,67★ / 15 оцінок). **Примітка: сторінка UA App Store англійською** («Extract Audio from Video⁺») — назву й підзаголовок варто локалізувати (напр. «Витягти аудіо з відео – MP3, M4A»), бо вони індексуються в пошуку App Store. CSV Google Trends для uk немає — пріоритети оцінкові; перевірте в Search Console. Частина української аудиторії шукає російською — ці запити покриває /ru/.

## Головна (/uk/)

| Запит | Пріоритет | Де |
|---|---|---|
| як витягнути звук з відео на айфоні | найвищий | **title, H1** |
| витягнути аудіо з відео / звук з відео | високий | meta keywords, основний текст |
| відео в mp3 / конвертер відео в mp3 | високий | meta description, FAQ, інструкція 2 |
| mp4 в mp3 | високий | FAQ, інструкція 3 |
| витягнути звук з відео онлайн | середній | FAQ, інструкція 7 |
| витягнути музику з відео | середній | FAQ, інструкція 8 |
| рингтон з відео на айфон | середній | FAQ, інструкція 12 |

## Інструкції (слаги = EN → hreflang en/ru/de/es/fr/it/pt/ja/ko/nl/pl/ro/th/tr/uk)

| # | Основний запит | Сторінка |
|---|---|---|
| 1 | як витягнути звук з відео на айфоні | `/uk/guides/extract-audio-from-video-iphone/` |
| 2 | як перетворити відео в mp3 на айфоні | `/uk/guides/convert-video-to-mp3-iphone/` |
| 3 | mp4 в mp3 на айфоні | `/uk/guides/mp4-to-mp3-iphone/` |
| 4 | mov в mp3 на айфоні | `/uk/guides/mov-to-mp3-iphone/` |
| 5 | відео в m4a на айфоні | `/uk/guides/video-to-m4a-iphone/` |
| 6 | витягнути звук з відео без додатків («Команди») | `/uk/guides/extract-audio-without-app-iphone/` |
| 7 | витягнути звук з відео онлайн | `/uk/guides/extract-audio-online-vs-app/` |
| 8 | як витягнути музику з відео на айфоні | `/uk/guides/save-music-from-video-iphone/` |
| 9 | як вирізати частину звуку з відео | `/uk/guides/trim-audio-from-video-iphone/` |
| 10 | звук із запису екрана на айфоні | `/uk/guides/screen-recording-to-audio-iphone/` |
| 11 | як з відео лекції зробити аудіо | `/uk/guides/lecture-video-to-audio-iphone/` |
| 12 | як зробити рингтон з відео на айфон | `/uk/guides/video-to-ringtone-iphone/` |

Терміни iOS українською: «Поділитися», «Фото», «Файли», «Зберегти у Файли», «Команди», «Кодувати медіа», «Лише аудіо», «Використати як рингтон», «Пункт керування», «Запис екрана».

---

# Tiếng Việt (VI) — /vi/ và /vi/guides/

> Nguồn: kết quả Google hiện tại, từ khóa có sẵn trong `vi.json`, trang App Store Việt Nam (5★ / 2 đánh giá). **Lưu ý: trang App Store VN đang bằng tiếng Anh** («Extract Audio from Video⁺») — nên bản địa hóa tên và phụ đề (vd. «Tách âm thanh từ video – MP3, M4A») vì chúng được lập chỉ mục trong tìm kiếm App Store. Không có CSV Google Trends cho vi — mức ưu tiên là ước tính; hãy kiểm chứng bằng Search Console.

## Trang chủ (/vi/)

| Truy vấn | Ưu tiên | Vị trí |
|---|---|---|
| cách tách âm thanh từ video trên iphone | cao nhất | **title, H1** |
| tách âm thanh từ video / tách tiếng từ video | cao | meta keywords, nội dung chính |
| chuyển video sang mp3 | cao | meta description, FAQ, hướng dẫn 2 |
| chuyển mp4 sang mp3 | cao | FAQ, hướng dẫn 3 |
| tách âm thanh từ video online | trung bình | FAQ, hướng dẫn 7 |
| tách nhạc từ video | trung bình | FAQ, hướng dẫn 8 |
| làm nhạc chuông từ video iphone | trung bình | FAQ, hướng dẫn 12 |

## Hướng dẫn (slug = EN → hreflang en/ru/de/es/fr/it/pt/ja/ko/nl/pl/ro/th/tr/uk/vi)

| # | Từ khóa chính | Trang |
|---|---|---|
| 1 | cách tách âm thanh từ video trên iphone | `/vi/guides/extract-audio-from-video-iphone/` |
| 2 | chuyển video sang mp3 trên iphone | `/vi/guides/convert-video-to-mp3-iphone/` |
| 3 | chuyển mp4 sang mp3 trên iphone | `/vi/guides/mp4-to-mp3-iphone/` |
| 4 | chuyển mov sang mp3 trên iphone | `/vi/guides/mov-to-mp3-iphone/` |
| 5 | chuyển video sang m4a trên iphone | `/vi/guides/video-to-m4a-iphone/` |
| 6 | tách âm thanh từ video không cần ứng dụng (Phím tắt) | `/vi/guides/extract-audio-without-app-iphone/` |
| 7 | tách âm thanh từ video online | `/vi/guides/extract-audio-online-vs-app/` |
| 8 | cách tách nhạc từ video trên iphone | `/vi/guides/save-music-from-video-iphone/` |
| 9 | cắt một phần âm thanh từ video | `/vi/guides/trim-audio-from-video-iphone/` |
| 10 | lấy âm thanh từ bản ghi màn hình iphone | `/vi/guides/screen-recording-to-audio-iphone/` |
| 11 | chuyển video bài giảng sang âm thanh | `/vi/guides/lecture-video-to-audio-iphone/` |
| 12 | cách làm nhạc chuông từ video trên iphone | `/vi/guides/video-to-ringtone-iphone/` |

Thuật ngữ iOS tiếng Việt: “Chia sẻ”, “Ảnh”, “Tệp”, “Lưu vào Tệp”, “Phím tắt”, “Mã hóa phương tiện”, “Chỉ âm thanh”, “Dùng làm nhạc chuông”, “Trung tâm điều khiển”, “Ghi màn hình”.

---

# Čeština (CS) — /cs/ a /cs/guides/

> Zdroje: aktuální výsledky Google, stávající klíčová slova v `cs.json`, stránka českého App Storu (5★ / 1 hodnocení). **Pozor: stránka CZ App Storu je anglicky** («Extract Audio from Video⁺») — název a podtitul se indexují ve vyhledávání App Storu, doporučujeme lokalizovat (např. «Extrahovat zvuk z videa – MP3, M4A»). CSV Google Trends pro cs chybí — priority jsou odhadem; ověřte v Search Console.

## Domů (/cs/)

| Dotaz | Priorita | Umístění |
|---|---|---|
| jak extrahovat zvuk z videa na iphonu | nejvyšší | **title, H1** |
| extrahovat zvuk z videa / zvuk z videa / vyjmout zvuk z videa | vysoká | meta keywords, hlavní text |
| video na mp3 / převod videa na mp3 | vysoká | meta description, FAQ, návod 2 |
| mp4 na mp3 | vysoká | FAQ, návod 3 |
| extrahovat zvuk z videa online | střední | FAQ, návod 7 |
| vyjmout hudbu z videa | střední | FAQ, návod 8 |
| vyzvánění z videa iphone | střední | FAQ, návod 12 |

## Návody (slugy = EN → hreflang en/ru/de/es/fr/it/pt/ja/ko/nl/pl/ro/th/tr/uk/vi/cs)

| # | Hlavní klíčové slovo | Stránka |
|---|---|---|
| 1 | jak extrahovat zvuk z videa na iphonu | `/cs/guides/extract-audio-from-video-iphone/` |
| 2 | jak převést video na mp3 na iphonu | `/cs/guides/convert-video-to-mp3-iphone/` |
| 3 | mp4 na mp3 na iphonu | `/cs/guides/mp4-to-mp3-iphone/` |
| 4 | mov na mp3 na iphonu | `/cs/guides/mov-to-mp3-iphone/` |
| 5 | video na m4a na iphonu | `/cs/guides/video-to-m4a-iphone/` |
| 6 | vyjmout zvuk z videa bez aplikace (Zkratky) | `/cs/guides/extract-audio-without-app-iphone/` |
| 7 | extrahovat zvuk z videa online | `/cs/guides/extract-audio-online-vs-app/` |
| 8 | jak vyjmout hudbu z videa na iphonu | `/cs/guides/save-music-from-video-iphone/` |
| 9 | vystřihnout část zvuku z videa | `/cs/guides/trim-audio-from-video-iphone/` |
| 10 | zvuk ze záznamu obrazovky iphone | `/cs/guides/screen-recording-to-audio-iphone/` |
| 11 | převést videopřednášku na zvuk | `/cs/guides/lecture-video-to-audio-iphone/` |
| 12 | jak udělat vyzvánění z videa na iphonu | `/cs/guides/video-to-ringtone-iphone/` |

České termíny iOS: „Sdílet“, „Fotky“, „Soubory“, „Uložit do Souborů“, „Zkratky“, „Kódovat média“, „Pouze zvuk“, „Použít jako vyzvánění“, „Ovládací centrum“, „Nahrávání obrazovky“.
