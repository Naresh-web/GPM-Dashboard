// Open popup based on button's data-popup attribute
document.querySelectorAll('.openTooltipBtn').forEach(button => {
    button.addEventListener('click', (e) => {
      const popupId = button.getAttribute('data-popup');
      document.querySelectorAll('.tooltiptext').forEach(p => p.style.display = 'none'); // Hide others
      const popupTooltip = document.getElementById(popupId);
      if (popupTooltip) {
        popupTooltip.style.display = 'block';
        e.stopPropagation(); // Prevent it from immediately closing
      }
    });
  });
  
  // Hide popup when clicking outside popup-content
  document.addEventListener('click', () => {
    document.querySelectorAll('.tooltiptext').forEach(p => p.style.display = 'none');
  });
  
  // Prevent closing when clicking inside the content
  document.querySelectorAll('.tooltiptext').forEach(content => {
    content.addEventListener('click', (e) => e.stopPropagation());
  });