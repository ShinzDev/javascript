let quantities = {
    1: 1,
    2: 2
  };
  
  let likes = {
    1: false,
    2: false
  };
  
  const itemPrices = {
    1: 10,
    2: 20
  };
  
  function updateTotal() {
    let total = 0;
    for (const itemId in quantities) {
      total += quantities[itemId] * itemPrices[itemId];
    }
    document.getElementById("total-price").textContent = total;
  }
  
  function changeQuantity(itemId, change) {
    if (quantities[itemId] + change >= 0) {
      quantities[itemId] += change;
      document.getElementById("quantity-" + itemId).textContent = quantities[itemId];
      updateTotal();
    }
  }
  
  function deleteItem(itemId) {
    delete quantities[itemId];
    document.querySelector(".item[data-id='" + itemId + "']").remove();
    updateTotal();
  }
  
  function toggleLike(itemId) {
    likes[itemId] = !likes[itemId];
    const likeBtn = document.querySelector(".like-btn[data-id='" + itemId + "']");
    likeBtn.style.color = likes[itemId] ? "red" : "black";
  }
  
  updateTotal();
  