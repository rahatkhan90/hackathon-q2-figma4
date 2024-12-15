import Cart from "@/components/shoppingcart";

const ShoppingCartPage: React.FC = () => {
  return (
    <main className="bg-gray-50 min-h-screen flex justify-center items-center">
      <section className="w-full max-w-4xl p-4 sm:p-6 bg-white shadow-md rounded-md">
        <Cart />
      </section>
    </main>
  );
};

export default ShoppingCartPage;
