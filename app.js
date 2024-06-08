document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.item');
    const container = document.querySelector('.container');
  
    items.forEach(item => {
      const moreBtn = item.querySelector('.more');
      const closeBtn = item.querySelector('.close-btn');
  
      moreBtn.addEventListener('click', function () {
        items.forEach(i => {
          if (i !== item) {
            i.style.display = 'none';
          }
        });
        item.style.width = '50%';
        item.style.height = '150%';
        item.style.left='50%';
        item.style.top='50%';
        item.style.transform='translate(-50%, -50%)';
        item.classList.add('expanded', 'no-hover');
      });
  
      closeBtn.addEventListener('click', function () {
        items.forEach(i => {
          i.style.display = 'block';
        });
        item.style.width = '';
        item.style.height = '';
        item.style.left='';
        item.style.top='';
        item.style.transform='';
        item.classList.remove('expanded', 'no-hover');
      });
    });
  });
  