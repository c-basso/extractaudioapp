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
