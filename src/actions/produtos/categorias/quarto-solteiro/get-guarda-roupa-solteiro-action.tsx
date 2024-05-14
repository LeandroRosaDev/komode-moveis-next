"use server";

export async function getGuardaRoupaAction() {
  const token = process.env.ACCESS_TOKEN;
  const response = await fetch(
    "https://apikomode.altuori.com/wp-json/api/produto?categoria=guarda-roupa",
    {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  return { data };
}
