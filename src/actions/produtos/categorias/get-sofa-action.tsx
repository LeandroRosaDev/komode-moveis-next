"use server";

export async function getSofaAction() {
  const response = await fetch(
    "https://apikomode.altuori.com/wp-json/api/produto?categoria=sofa",
    {
      cache: "no-store",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaWtvbW9kZS5hbHR1b3JpLmNvbSIsImlhdCI6MTcxNTI5MTQwOSwibmJmIjoxNzE1MjkxNDA5LCJleHAiOjE3MTUzNzc4MDksImRhdGEiOnsidXNlciI6eyJpZCI6IjIifX19.t1HbLyICmPQISK03WALV5KvXPZKfR8-yd6KmrSkEr0Q",
      },
    }
  );
  const data = await response.json();
  return { data };
}
