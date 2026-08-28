# Mizu Dojo website

Een snelle, toegankelijke statische website voor Mizu Dojo, gericht op jongvolwassenen en volwassenen. De site gebruikt echte trainingsfoto's en kan zonder bouwstap via GitHub Pages worden gepubliceerd.

## Voor publicatie invullen

Zoek in `index.html` naar `Vul` en `VUL-HIER` en vervang:

- e-mailadres voor proeflessen;
- adres en plaats;
- telefoonnummer;
- actuele lestijden;
- karatestijl, dangraad, opleiding en ervaring van Jos Hoekendijk.

Controleer ook of alle afgebeelde personen toestemming hebben gegeven voor openbare publicatie.

## Lokaal bekijken

Open `index.html` rechtstreeks in een browser, of start in deze map:

```bash
python3 -m http.server 8000
```

Open daarna `http://localhost:8000`.

## Publiceren via persoonlijk GitHub-account

1. Maak op GitHub een nieuw repository, bijvoorbeeld `mizu-dojo`.
2. Pak het ZIP-bestand uit en plaats alle bestanden in het repository.
3. Commit en push naar de branch `main`.
4. Open op GitHub: **Settings → Pages**.
5. Kies bij **Source** voor **GitHub Actions**.
6. De meegeleverde workflow publiceert de site automatisch.

GitHub beschrijft deze werkwijze in de documentatie over [GitHub Pages publishing sources](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) en [custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Beeldmappen

- `assets/images/real-life/`: originele en web-geoptimaliseerde echte foto's.
- `assets/images/clean-edits/`: cleane, natuurlijk nabewerkte versies zonder gegenereerde omgeving of tekst.

De live pagina gebruikt bewust de real-life beelden. De cleane versies zijn bijgevoegd als alternatief met iets warmere kleur, rustiger contrast en behoud van de echte locatie.

## Techniek

- Semantische HTML5
- Responsive CSS zonder framework
- Minimale JavaScript voor mobiel menu en jaartal
- Geen tracking, cookies of externe lettertypen
- GitHub Pages workflow inbegrepen

## Onderhoud

- Teksten: pas `index.html` aan.
- Kleuren en opmaak: pas de variabelen bovenaan `styles.css` aan.
- Foto vervangen: behoud de bestandsnaam of wijzig het pad in `index.html`.
- Test na iedere wijziging op mobiel en desktop.
