"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const goType = vscode.window.createTextEditorDecorationType({
    gutterIconPath: vscode.Uri.parse(`./icons/svg/mo_file_go.svg`) // 指定图标路径
});
const goTestType = vscode.window.createTextEditorDecorationType({
    gutterIconPath: vscode.Uri.parse(`./icons/svg/mo_file_go_test.svg`) // 指定图标路径
});
function activate(context) {
    // const disposable = vscode.workspace.onDidChangeTextDocument(async (event) => {
    // 	const document = event.document;
    // 	const fileExtension = document.uri.fsPath.split('.').pop();
    // 	vscode.window.showInformationMessage(`Go file detected.`, document.uri.fsPath);
    // 	if (document.uri.fsPath.indexOf(".go") > 0) {
    // 		const iconPath = vscode.Uri.file(context.asAbsolutePath(`./icons/svg/mo_file_g.svg`));
    // 		await vscode.window.showInformationMessage(`Go file detected. Icon set to Go icon.`, { modal: true });
    // 		vscode.workspace.fs.writeFile(document.uri, new Uint8Array());
    // 	} else if (document.uri.fsPath.indexOf("_test.go") > 0) {
    // 		const iconPath = vscode.Uri.file(context.asAbsolutePath(`./icons/svg/mo_file_go_test.svg`));
    // 		await vscode.window.showInformationMessage(`Go test file detected. Icon set to Go test icon.`, { modal: true });
    // 		vscode.workspace.fs.writeFile(document.uri, new Uint8Array());
    // 	}
    // });
    // context.subscriptions.push(disposable);
}
exports.activate = activate;
class FileIconProvider {
    constructor(iconPath) {
        this.iconPath = iconPath;
        this._onDidChangeTreeData = new vscode.EventEmitter();
        this.onDidChangeTreeData = this._onDidChangeTreeData.event;
    }
    getTreeItem(element) {
        return element;
    }
    getChildren(element) {
        if (!element) {
            // 根据需要返回文件列表
            // 这里只是一个示例，实际实现需要根据文件系统来获取文件列表
            return Promise.resolve([]);
        }
        return Promise.resolve([]);
    }
}
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map