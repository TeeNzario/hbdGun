# The Forest Remembers

An original, mobile-first interactive birthday story set in a rain-soaked
moonlit forest. The experience includes five collectible memories, a changing
forest, layered Web Audio ambience, a cinematic finale, and an optional vertical
birthday video.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Make it personal

You only need to edit one file:

`src/data/memories.ts`

Change:

- `recipientName` to your partner's name.
- The opening and finale copy.
- Each chapter's `title`, `date`, and `story`.
- `objectPosition` when a face needs a different crop, for example
  `"center 30%"` or `"65% center"`.
- The closing lines if desired.

Replace the five photos without changing their filenames:

```text
public/images/chapter-01.jpg
public/images/chapter-02.jpg
public/images/chapter-03.jpg
public/images/chapter-04.jpg
public/images/chapter-05.jpg
```

Portrait photographs work best. Compress them to roughly 1200–1800 px on the
long edge and use JPG, WebP, or AVIF. If you change an extension, also change the
matching `image` path in `src/data/memories.ts`.

Replace the video poster:

```text
public/images/video-poster.jpg
```

Add the final video:

```text
public/media/birthday-message.mp4
```

Recommended export settings are H.264 video, AAC audio, 1080×1920 portrait,
30 FPS. The player uses `playsInline`, metadata-only preloading, controls, and
does not force fullscreen. Edit `public/media/birthday-message-th.vtt` to add
captions.

Optional recorded audio can be placed in `public/audio`. The site already uses a
quiet Web Audio fallback, so the experience remains playable without those
files.

## Build

```bash
npm run build
```

For a pure GitHub Pages export:

```bash
npm run build:github
```

The static files will be written to `out`.

## Deploy to GitHub Pages

1. Create a GitHub repository and push this project to the `main` branch.
2. In the repository, open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push a new commit or run the workflow manually.

The included workflow automatically detects the repository name and configures
the correct `basePath` and `assetPrefix`, so the site works at an address such
as `https://username.github.io/birthday-forest/`.

## Controls and accessibility

- Tap and swipe are the primary controls; mouse and keyboard work on desktop.
- Escape closes an open memory chapter.
- Progress is stored in `sessionStorage`.
- The sound toggle is available throughout the story.
- Reduced-motion preferences are respected.
- A portrait-orientation message appears on short landscape screens.
- All controls have accessible names, memory images have alt text, and the
  chapter overlay manages focus.

## Original assets

The forest artwork was generated specifically for this project. No movie,
character, actor, logo, poster, screenshot, dialogue, or other protected asset
is used.
