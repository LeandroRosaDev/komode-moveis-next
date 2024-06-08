"use server";
import { token } from "@/app/api/api";

export async function getProductsDestaqueAction() {
  const response = await fetch(
    "https://apikomode.altuori.com/wp-json/api/produto?_limit=8",
    {
      cache: "no-store",
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const data = await response.json();
  return { data };
}
