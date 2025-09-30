// Optional tiny enhancer to assign icons and keep keyboard behavior consistent
(function () {
	function initNeoButtons() {
		document.querySelectorAll('button.neo-btn').forEach(function(btn){
			// Ensure role and type
			if (!btn.getAttribute('type')) btn.setAttribute('type','button');
			btn.setAttribute('role','button');
			// Space key should click
			btn.addEventListener('keydown', function(e){
				if (e.key === ' ') { e.preventDefault(); btn.click(); }
			});
		});
	}
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initNeoButtons);
	} else {
		initNeoButtons();
	}
	window.initNeoButtons = initNeoButtons;
})();


