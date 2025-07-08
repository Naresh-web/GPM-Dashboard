
function addNewItemsPopUp(){
    const openBtn = document.getElementById('openPopupBtn');
    const openBtn1 = document.getElementById('openPopupBtn1');
    const closeBtn = document.getElementById('closePopupBtn');
    const closeBtn1 = document.getElementById('closePopupBtn1');
    const overlay = document.getElementById('pop-overlay');
    const popup = document.getElementById('popup');
    const popupNewCost = document.getElementById('popupNewCost');
  
    openBtn.addEventListener('click', () => {
      popup.style.display = 'block';
      overlay.style.display = 'block';
    });
    openBtn1.addEventListener('click', () => {
        popupNewCost.style.display = 'block';
        overlay.style.display = 'block';
      });
      closeBtn1.addEventListener('click', () => {
        popupNewCost.style.display = 'none';
        overlay.style.display = 'none';
      });
  
    closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
      overlay.style.display = 'none';
    });
    // Optional: close popup when clicking outside
    overlay.addEventListener('click', () => {
      overlay.style.display = 'none';
      popup.style.display = 'none';
      popupNewCost.style.display = 'none';
    });

    const cancel = document.getElementById('cancel')
    cancel.addEventListener('click', () => {
      popupNewCost.style.display = 'none';
      overlay.style.display = 'none';
    });
  }
  addNewItemsPopUp()
