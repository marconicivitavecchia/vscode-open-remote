const vscode = require('vscode');

function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand('open-remote.open', () => {
      const file = vscode.window.activeTextEditor?.document.fileName;
      if (!file) return;

      // const match = file.match(/\/\/ucs1\/([^/]+)\/public\/(.+)/);
      const match = file.match(/\/([^/]+\.[^/]+)\/[Pp]ublic\/(.+)/) ||
                    file.match(/\\\\ucs1\\([^/]+\.[^/]+)\\[Pp]ublic\\(.+)/);

      if (!match) return vscode.window.showWarningMessage(`Path non riconosciuto: ${file}`);

      const url = `https://studenti.marconicloud.it/webfiles/${match[1]}/${match[2]}`;
      vscode.commands.executeCommand('simpleBrowser.show', url);
    })
  );
}

module.exports = { activate, deactivate: () => { } };

///Users/claudio/Documents/Scuola/Scuola-2025-2026/classi/5Cinf/claudio.capobianco