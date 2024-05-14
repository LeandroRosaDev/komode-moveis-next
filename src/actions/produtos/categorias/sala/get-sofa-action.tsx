"use server";

export async function getSofaAction() {
  const token = process.env.ACCESS_TOKEN;
  const response = await fetch(
    "https://apikomode.altuori.com/wp-json/api/produto?categoria=sofa",
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
