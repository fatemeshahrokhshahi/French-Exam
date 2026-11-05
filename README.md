# FrançaisExam — French A1 → B2

A study platform for French exams that runs as a **website**, an **installable app (PWA)**, and a **native iOS/Android app** (Capacitor).

| Level | Follows the topic order of | Units | Mock exam |
|---|---|---|---|
| **A1** | *Le Nouveau Taxi! 1* (Hachette) | 6 | DELF A1 style, 45 min |
| **A2** | *Le Nouveau Taxi! 2* (Hachette) | 6 | DELF A2 style, 60 min |
| **B1** | *Édito B1* (Didier) | 7 | DELF B1 style, 75 min |
| **B2** | *Édito B2* (Didier) | 7 | DELF B2 style, 90 min |

> FrançaisExam is an independent study tool and is not affiliated with Hachette or Didier. All lessons, texts and exercises are original. They follow each book's level and grammar order so students can use the app alongside their textbook.

## Features

- **Lessons**: grammar explained in Turkish and English, with French examples you can listen to.
- **Vocabulary with audio**: French text-to-speech, adjustable speed and a slow mode.
- **Five exercise types**: multiple choice, fill in the blank, listening, dictation and sentence ordering. Each answer gets instant feedback and an explanation.
- **DELF-style mock exams**: a timer, listening (two plays max), reading, grammar, and writing with a word counter, checklist and model answer.
- **Flashcards with spaced repetition** (Leitner boxes), filled automatically from the units you study.
- **Mistake tracker**: re-practise the questions you got wrong. Each one is cleared when you answer it correctly.
- **Progress**: streak, accuracy, unit completion and exam history.
- **Guest mode**: everything works without an account and progress is saved on the device. Optional Supabase accounts sync progress across devices and can be deleted from inside the app.
- Turkish/English interface, light and dark mode, works offline, fits phone screens and iPhone notches.

## Project structure

```
index.html              app shell
css/style.css           styles (light + dark)
js/app.js               router, exercises, exams, flashcards, sync
js/i18n.js              interface text (TR / EN)
js/content/a1.js … b2.js   course content: units, vocabulary, quizzes, exams
js/vendor/              supabase-js (bundled so the app also works offline)
manifest.webmanifest, sw.js, icons/   PWA / installable app
capacitor.config.json, scripts/, resources/   native iOS/Android packaging
supabase/schema.sql     database tables + row-level security + delete_user()
legacy/                 the previous single-file version
```

### Adding content

Each level file contains `units` and `exams`. Question formats:

```js
{ t: 'mcq',    q: 'Nous ___ étudiants.', o: ['sommes','êtes','sont'], a: 0, x: { en: '…', tr: '…' } }
{ t: 'fill',   q: 'Ils ___ à Paris.', h: '(habiter)', a: ['habitent'], x: {…} }
{ t: 'listen', say: 'Phrase lue à voix haute', o: ['…','…'], a: 0 }
{ t: 'dict',   say: 'Phrase à écrire' }
{ t: 'order',  w: 'Phrase dans le bon ordre' }
```

## Run the website

The site is static, so no build step is needed:

```bash
npx http-server . -p 8080
```

Then open http://localhost:8080. On GitHub Pages, the site is served from `index.html` at the repository root. The old `francaisexam.html` address forwards to the new app, so earlier sign-up confirmation links still work.

## Mobile apps

### 1. Instant install (no store needed)

- **Android (Chrome):** open the website and tap **Install** on the home screen, or use the browser menu and choose *Install app*.
- **iPhone/iPad (Safari):** open the website, tap **Share**, then **Add to Home Screen**.

The installed app opens full-screen and works offline.

### 2. Native Android app (APK / Google Play)

Every push builds an APK with GitHub Actions (`.github/workflows/android.yml`):

- From **any branch**: open *Actions → Android app → latest run → Artifacts → FrancaisExam-android*.
- From **`main`**: the APK is also attached to the **`android-latest`** release, so you can download it straight onto a phone.

To build it yourself, you need Node 22+, JDK 21 and Android Studio:

```bash
npm install
```

```bash
npx cap add android
```

```bash
npx capacitor-assets generate --android
```

```bash
npm run android
```

To publish on Google Play, build a signed **App Bundle (.aab)** in Android Studio (*Build → Generate Signed Bundle*) and upload it in the Play Console. This needs a $25 one-time developer account.

### 3. Native iOS app (App Store / TestFlight)

iOS apps can only be built on a **Mac with Xcode**:

```bash
npm install
```

```bash
npx cap add ios
```

```bash
npx capacitor-assets generate --ios
```

```bash
npm run ios
```

In Xcode, pick your Team under *Signing & Capabilities*, then use *Product → Archive* and upload to App Store Connect / TestFlight. This needs an Apple Developer account ($99/year).

After changing any web file, run `npm run cap:sync` to copy it into the native projects.

## Accounts (Supabase, optional)

Supabase credentials are **not stored in the repository**. Without them, the app runs in guest mode: everything works, and only account sync is turned off. To turn accounts on:

- **Locally / your own hosting:** copy `js/config.example.js` to `js/config.js` and fill in your project URL and anon key. `js/config.js` is git-ignored.
- **Android build (GitHub Actions):** add repository secrets `SUPABASE_URL` and `SUPABASE_ANON_KEY` (*Settings → Secrets and variables → Actions*). The workflow writes `js/config.js` at build time.

Note that any key shipped inside a website or app can be read by its users. Data is protected by the row-level security rules below, not by hiding the key.

 To make sure the tables, security rules and the in-app **Delete account** feature exist, run `supabase/schema.sql` once in *Supabase → SQL editor*. In *Authentication → URL configuration*, add `https://fatemeshahrokhshahi.github.io/French-Exam/` to the redirect URLs.

## License

MIT. See `LICENSE`.
