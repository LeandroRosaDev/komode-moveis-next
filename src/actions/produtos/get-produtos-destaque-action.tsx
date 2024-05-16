"use server";

export async function getProductsDestaqueAction() {
  const token = process.env.ACCESS_TOKEN;
  const response = await fetch(
    "https://apikomode.altuori.com/wp-json/api/produto?_limit=8&situacao=destaque",
    {
      cache: "no-store",
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const data = await response.json();
  return { data };
}
