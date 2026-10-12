# 2ONO Lab

Sito statico (in inglese) con i tutorial di 2ONO Films. Nessun framework, nessuna build: si pubblica così com'è su GitHub Pages.

## Pubblicare
1. Crea il repo (per esempio `lab` sotto `2onofilms`) e metti il contenuto di questa cartella nella radice.
2. Settings > Pages > Deploy from a branch > `main` / root.
3. Il sito sarà su `https://2onofilms.github.io/lab/`. Tutti i percorsi sono relativi, quindi funziona in qualsiasi sotto-percorso.

## Aggiungere un nuovo tutorial
1. Copia la cartella `t/_template/` in `t/<slug-del-tutorial>/` (slug breve, minuscolo, con i trattini).
2. Apri `t/<slug>/index.html` e sostituisci TITLE, DESCRIPTION (anche nei meta Open Graph), il testo, i blocchi `.code` (il pulsante Copy funziona da solo) e i `<video>`.
3. Metti i video in `assets/media/<slug>/` e correggi i percorsi `src` dei `<video>`. Formato consigliato 4:5, MP4 H.264, muto. Pesano molto: se serve, per il sito usa una versione più leggera.
4. In `index.html` copia il blocco `<a class="card">` dentro la griglia (tra i commenti `NEW TUTORIAL CARDS` e `END CARDS`), cambia link (`t/<slug>/`), titolo e testo. Puoi togliere la card "Next one is on its way" quando ne hai altre.
5. Non toccare i percorsi `../../assets/...` nei tutorial: dalla cartella `t/<slug>/` sono quelli giusti.

## Da completare (TODO)
- Newsletter: in `index.html` il form è un segnaposto che non invia nulla ("Coming soon"). Sostituiscilo con l'embed di Beehiiv (c'è un commento TODO).
- Video delle slide: i `<video>` del tutorial puntano a `assets/media/claude-code-carousel/01.mp4` e `03.mp4`, che ancora non esistono.
- Immagine Open Graph (1200x630): c'è un commento TODO nelle pagine.
- `404.html` ha un link assoluto a `https://2onofilms.github.io/lab/`: aggiornalo se l'URL cambia (la 404 è servita da qualsiasi percorso, quindi non può usare percorsi relativi).

## Font e licenze
- Self-hosted (OFL): Anton, Instrument Serif corsivo, JetBrains Mono, in `assets/fonts/` con `OFL.txt`.
- Switzer NON è nel repo (la licenza FFL non permette di ridistribuirlo in un repo pubblico): si carica dall'API di Fontshare, con `system-ui` come ripiego.

## Struttura
```
index.html            home del Lab
404.html  robots.txt  .nojekyll
assets/site.css  site.js  fonts/  media/
t/_template/          modello per un nuovo tutorial
t/claude-code-carousel/
```
