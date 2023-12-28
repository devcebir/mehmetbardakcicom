export const metadata = {
  title: "Projeler - Mehmet Bardakcı",
};
export default function page() {
  return (
    <div className="flex flex-col flex-1 ml-72 max-[768px]:ml-0 justify-center items-center h-screen gap-4">
      <div class="flex space-x-2">
        <span class="sr-only">Loading...</span>
        <div class="h-8 w-8 bg-black dark:bg-white rounded-full animate-bounce"></div>
        <div class="h-8 w-8 bg-black dark:bg-white rounded-full animate-bounce"></div>
        <div class="h-8 w-8 bg-black dark:bg-white rounded-full animate-bounce"></div>
      </div>

      <p className="text-lg text-center">Kodlanıyor, çok yakında yayında 👨🏻‍💻</p>
    </div>
  );
}
