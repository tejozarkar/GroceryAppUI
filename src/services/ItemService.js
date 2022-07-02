export async function getItems(page, size) {
   const response = await fetch(`http://localhost:8080/item?page=${page}&size=${size}`, {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("jwt-token")}` },
   });
   return await response.json();
}
