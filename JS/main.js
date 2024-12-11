document.addEventListener('DOMContentLoaded', function () {
    let listElements = document.querySelectorAll('.list_item--click');

    listElements.forEach(item => {
      item.addEventListener('click', () => {
        let subMenu = item.querySelector('.list_show');
        let arrow = item.querySelector('.list_arrow');

        // Cerrar otros submenús abiertos
        document.querySelectorAll('.list_show').forEach(menu => {
          if (menu !== subMenu) {
            menu.style.display = 'none';
          }
        });
        document.querySelectorAll('.list_arrow').forEach(arr => {
          if (arr !== arrow) {
            arr.style.transform = 'rotate(0deg)';
          }
        });

        // Toggle el submenú actual
        if (subMenu.style.display === 'flex') {
          subMenu.style.display = 'none';
          arrow.style.transform = 'rotate(0deg)';
        } else {
          subMenu.style.display = 'flex';
          arrow.style.transform = 'rotate(90deg)';
        }
      });
    });
  });