export default function App() {
	const handleCloseWebView = () => {
		try {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.closeWebView) {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				window.webkit.messageHandlers.closeWebView.postMessage("closeWebView");
			} else {
				console.log("No native listeners found");
			}
		} catch (e) {
			console.log("Error calling native handler:", e);
		}
	};

	return (
		<div className="min-h-screen bg-black text-white grid place-items-center">
			<div className="px-6 py-4 flex flex-col gap-2 justify-center items-center bg-gray-900 rounded-md">
				<h4 className="text-lg font-medium">Damir Chert</h4>
				<h4 className="text-lg font-medium">Nurzhan Lox</h4>
				<button
					className="bg-white text-black font-bold tracking-wide uppercase px-4 py-2 rounded-md hover:bg-slate-200"
					onClick={handleCloseWebView}
				>
					Click me
				</button>
			</div>
		</div>
	);
}
