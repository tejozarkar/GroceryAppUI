export async function addToCart(content) {
   const response = await fetch(`http://localhost:8080/cart`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("jwt-token")}` },
      body: JSON.stringify(content),
   });
   return await response.json();
}

export async function getCartItems() {
   const response = await fetch(`http://localhost:8080/cart`, {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("jwt-token")}` },
   });
   return await response.json();
}

let count = 0;
export function setCartCount(newCount) {
   count = newCount;
}

export function getCartCout() {
   return count;
}
