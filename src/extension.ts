'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "real-extension" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let helloDisposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World!');
		const panel = vscode.window.createWebviewPanel(
			'catCoding',
			'Cat Coding',
			vscode.ViewColumn.One,
			{enableScripts: true
			}
		  );
	
		  // And set its HTML content
		  panel.webview.html = getWebviewContent();
	});

	context.subscriptions.push(helloDisposable);
    let fileDisposable = vscode.commands.registerCommand('extension.insertLink',()=>{
		vscode.window.showInformationMessage('welcome file disposable');

	});

	context.subscriptions.push(fileDisposable);

	let figDisposable = vscode.commands.registerCommand('extension.insertFig',()=>{
	
		vscode.window.showInformationMessage('welcome figure disposable');

	});
context.subscriptions.push(figDisposable);
     
    
  
function getWebviewContent() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Cat Coding</title>

</head>
<body>
<svg>
  <circle style="fill: #69b3a2" stroke="black" cx=50 cy=50 r=40></circle>
</svg>

<object type="text/html" data="http://localhost:4200/" width="1920px" height="1080px" style="overflow:auto;border:5px">
</object>
 
</body>
</html>`;
}
}

// this method is called when your extension is deactivated
export function deactivate() {}
