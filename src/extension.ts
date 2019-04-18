"use strict";

import { ExtensionContext, window, commands, workspace } from "vscode";
import { copy } from "copy-paste";

export function activate(context: ExtensionContext) {
  context.subscriptions.push(
    commands.registerCommand("copy-relative-path.copy", () => {
      let name;
      const { hideNotification } = workspace.getConfiguration("cprel");

      copy(
        (name = workspace.asRelativePath(window.activeTextEditor.document.uri)),
        () =>
          !hideNotification &&
          window.showInformationMessage(`Copied ${name} to clipboard! 🎉`)
      );
    })
  );
}

export function deactivate() {}
