export async function getItems(page, size, search) {
   const response = await fetch(`http://localhost:8080/item?page=${page}&size=${size}&search=${search}`, {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("jwt-token")}` },
   });
   return await response.json();
}
