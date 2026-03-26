# Open Remote

Apre il file corrente nel Simple Browser di VS Code, 
mappando automaticamente il path locale all'URL del server remoto.

## Come funziona

Il path locale viene trasformato in URL remoto cercando il pattern
`nome.cognome/public/...` nel percorso del file:

| Path locale | URL remoto |
|---|---|
| `//ucs1/mario.rossi/public/progetto/index.php` | `https://studenti.marconicloud.it/webfiles/mario.rossi/progetto/index.php` |
| `/Users/mario/…/mario.rossi/public/progetto/index.php` | `https://studenti.marconicloud.it/webfiles/mario.rossi/progetto/index.php` |

Funziona sia su **Windows** (`//ucs1/...`) che su **macOS**.

## Uso

Con un file aperto nell'editor, clicca l'icona 🌐 in alto a destra
oppure apri la Command Palette (`Ctrl+Shift+P`) e cerca
**"Apri nel server remoto"**.

## Requisiti

- Il path del file deve contenere un segmento `nome.cognome/public/`
- Il server remoto deve essere raggiungibile