export const metadata = {
  title: "Yer İşaretleri - Mehmet Bardakcı",
};
export default function page() {
  return (
    <div className="flex flex-col flex-1 justify-center items-center h-screen gap-4">
      <div class="flex space-x-2">
        <span class="sr-only">Loading...</span>
        <div class="h-8 w-8 bg-black rounded-full animate-bounce"></div>
        <div class="h-8 w-8 bg-black rounded-full animate-bounce"></div>
        <div class="h-8 w-8 bg-black rounded-full animate-bounce"></div>
      </div>

      <p className="text-2xl">Kodlanıyor, çok yakında yayında 👨🏻‍💻</p>
    </div>
  );
}
