export function formatPrice(price: number): string {
    return price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
}
export const calculateTotalPrice = (
  products: { id: number; price: number; quantity: number }[]
) => {
  return products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
};
