export async function login(content) {
   const response = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
   });
   return await response.json();
}

export async function signup(content) {
   const response = await fetch("http://localhost:8080/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
   });
   return await response.json();
}
