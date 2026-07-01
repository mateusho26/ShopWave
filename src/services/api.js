const API_URL = "https://fakestoreapi.com/products";

export async function getProducts() {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data;
}