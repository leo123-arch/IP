    function changeQty(id, delta) {
      const el = document.getElementById(id);
      let current = parseInt(el.textContent);
      let next = current + delta;
      if (next < 0) next = 0;
      if (next > 10) next = 10;
      el.textContent = next;
    }

  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  let total = parseInt(localStorage.getItem("cartTotal")) || 0;

  function changeQty(id, delta) {
    const qtyEl = document.getElementById(id);
    let quantity = parseInt(qtyEl.textContent);
    quantity = Math.max(0, quantity + delta);
    qtyEl.textContent = quantity;

    // Get item details
    const itemEl = qtyEl.closest(".menu-item");
    const name = itemEl.querySelector(".item-title").textContent.trim();
    const price = parseInt(itemEl.querySelector(".price").textContent.replace("₹", ""));

    // Remove existing item if it exists
    const index = cartItems.findIndex(i => i.name === name);
    if (index !== -1) {
      total -= cartItems[index].price * cartItems[index].quantity;
      cartItems.splice(index, 1);
    }

    // Add again if quantity > 0
    if (quantity > 0) {
      cartItems.push({ name, price, quantity });
      total += price * quantity;
    }

    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(cartItems));
    localStorage.setItem("cartTotal", total);

    // Update badge (cart icon)
    const cartCount = document.getElementById("cart-count");
    if (cartCount) {
      cartCount.textContent = cartItems.length;
    }
  }

  const cartList = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");

  cartItems.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} x ${item.quantity} = ₹${item.price * item.quantity}`;
    cartList.appendChild(li);
  });

  totalEl.textContent = total;

localStorage.removeItem("cart");
localStorage.removeItem("cartTotal");
