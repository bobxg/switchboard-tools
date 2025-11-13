window.addEventListener('DOMContentLoaded', function() {
  const useBoardBtn = document.getElementById('useBoardBtn');
  if (useBoardBtn) {
    useBoardBtn.onclick = function() {
      try {
        const dims = localStorage.getItem('switchboardDims');
        if (dims) {
          const match = dims.match(/Total Board Size: (\d+)mm/);
          if (match) {
            document.getElementById('msbWidth').value = match[1];
            if (typeof renderRoom === 'function') renderRoom();
            return;
          }
        }
        alert("No saved board dimensions found from Switchboard Sizer.");
      } catch(e) {
        alert("No saved board dimensions found from Switchboard Sizer.");
      }
    };
  }
});
