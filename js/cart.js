    function changeQty(id, delta) {
      const el = document.getElementById(id);
      let current = parseInt(el.textContent);
      let next = current + delta;
      if (next < 1) next = 1;
      if (next > 10) next = 10;
      el.textContent = next;
    }