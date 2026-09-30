const canvas = document.getElementById('canvas');
      let draggedNode = null;
      let offsetX, offsetY;
      
      document.querySelectorAll('.node-card').forEach(node => {
        node.addEventListener('mousedown', (e) => {
          draggedNode = node;
          offsetX = e.clientX - node.getBoundingClientRect().left;
          offsetY = e.clientY - node.getBoundingClientRect().top;
          node.style.zIndex = 10;
        });
      });

      document.addEventListener('mousemove', (e) => {
        if (draggedNode) {
          const canvasRect = canvas.getBoundingClientRect();
          let x = e.clientX - canvasRect.left - offsetX;
          let y = e.clientY - canvasRect.top - offsetY;
          draggedNode.style.left = x + 'px';
          draggedNode.style.top = y + 'px';
        }
      });

      document.addEventListener('mouseup', () => {
        if (draggedNode) { draggedNode.style.zIndex = 2; draggedNode = null; }
      });