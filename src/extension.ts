import * as vscode from 'vscode';

const goType = vscode.window.createTextEditorDecorationType({
	gutterIconPath: vscode.Uri.parse(`./icons/svg/mo_file_go.svg`) // 指定图标路径
});

const goTestType = vscode.window.createTextEditorDecorationType({
	gutterIconPath: vscode.Uri.parse(`./icons/svg/mo_file_go_test.svg`) // 指定图标路径
});

export function activate(context: vscode.ExtensionContext) {
	// 注册事件监听器，当文件打开或编辑时触发
	let disposable = vscode.workspace.onDidOpenTextDocument((document) => {
		updateIconForDocument(document);
	});

	context.subscriptions.push(disposable);

	// 更新所有已打开文件的图标
	vscode.workspace.textDocuments.forEach(updateIconForDocument);
}

function updateIconForDocument(document: vscode.TextDocument) {
	const fileName = document.fileName;
	let icon = "file_icon"; // 默认图标

	// 根据文件名关键字设置不同的图标
	if (fileName.includes('_test.go')) {
		icon = "./icons/svg/mo_file_go_test.svg";
		// 设置文件图标（示例，实际上不能这样设置）
	}
}

// 当插件停用时调用的方法
export function deactivate() { }