const products = [
  { name: "Dune Apex", price: "₹ 6,299", badge: "NEW", tones: "from-[#d8c9bb] to-[#f2ebe2]" },
  { name: "Popstar X Lows", price: "₹ 4,299", badge: "NEW LAUNCH", tones: "from-[#ead4cc] to-[#f8efea]" },
  { name: "Nimbus Aeon V2", price: "₹ 4,499", badge: "NEW", tones: "from-[#dadadc] to-[#f5f5f6]" },
  { name: "Darkmatter Apex", price: "₹ 6,299", badge: "BESTSELLER", tones: "from-[#474646] to-[#8d8988]" },
  { name: "Dawn X Lows", price: "₹ 5,299", badge: "LIMITED", tones: "from-[#ddd0cb] to-[#f4ebe7]" },
  { name: "Snow X Lows", price: "₹ 4,299", badge: "BESTSELLER", tones: "from-[#e6e6e8] to-[#ffffff]" },
];

export default function Home() {
  return (
    <main className="bg-[#f6f0eb] text-[#1d1916]">
      <nav className="sticky top-0 z-30 border-b border-black/10 bg-[#f6f0eb]/90 backdrop-blur animate-fade-down"
      >
        <div className="mx-auto flex h-16 w-full max-w-[1260px] items-center justify-between px-5 md:h-20 md:px-10">
          <div className="flex items-center gap-7 text-[12px] uppercase tracking-[0.18em] md:text-[13px]">
            <span className="font-semibold tracking-[0.22em]">Comet</span>
            <div className="hidden items-center gap-6 md:flex">
              <a className="hover:opacity-70 transition-opacity" href="#">Men</a>
              <a className="hover:opacity-70 transition-opacity" href="#">Women</a>
              <a className="hover:opacity-70 transition-opacity" href="#">The Vault</a>
              <a className="hover:opacity-70 transition-opacity" href="#">New In</a>
            </div>
          </div>
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.16em] md:gap-6 md:text-[12px]">
            <a className="hidden md:block hover:opacity-70 transition-opacity" href="#">Search</a>
            <a className="hover:opacity-70 transition-opacity" href="#">Account</a>
            <a className="hover:opacity-70 transition-opacity" href="#">Cart (0)</a>
          </div>
        </div>
      </nav>

      <section className="mx-auto grid min-h-[70vh] w-full max-w-[1260px] gap-10 px-5 pb-14 pt-10 md:min-h-[76vh] md:grid-cols-[1.05fr_0.95fr] md:gap-14 md:px-10 md:pb-20 md:pt-14">
        <div className="flex flex-col justify-between gap-8 animate-fade-up">
          <div className="space-y-5 md:space-y-8">
            <p className="text-[11px] uppercase tracking-[0.23em] text-black/70 md:text-[12px]">Official Online Store</p>
            <h1 className="text-[2.45rem] font-semibold leading-[0.97] tracking-[-0.02em] md:text-[5.5rem]">Wear tested, city approved.</h1>
            <p className="max-w-xl text-[15px] leading-relaxed text-black/65 md:text-[18px]">
              Performance sneakers for long city days. Lightweight uppers, responsive midsoles, and silhouettes built for movement.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="rounded-full bg-black px-7 py-3 text-[11px] font-medium uppercase tracking-[0.17em] text-white transition-transform duration-300 hover:-translate-y-0.5">
              Shop Sneakers
            </button>
            <button className="rounded-full border border-black/20 bg-white px-7 py-3 text-[11px] font-medium uppercase tracking-[0.17em] transition-colors duration-300 hover:bg-black hover:text-white">
              Explore X Lows
            </button>
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="h-[340px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#e6d9cd] via-[#f5ede7] to-[#dbcbc0] shadow-[0_28px_55px_-35px_rgba(0,0,0,0.42)] md:h-full md:min-h-[550px]">
            <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-white/72 p-5 backdrop-blur md:inset-x-8 md:bottom-8 md:p-6">
              <p className="text-[10px] uppercase tracking-[0.2em] text-black/50">Featured Drop</p>
              <h2 className="mt-2 text-[26px] font-semibold leading-tight md:text-[38px]">Dune Apex</h2>
              <p className="mt-2 text-[14px] text-black/70">Made for all-day comfort and smooth transitions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1260px] px-5 pb-18 md:px-10 md:pb-24">
        <div className="mb-7 flex items-end justify-between md:mb-10">
          <h2 className="text-[24px] font-semibold uppercase tracking-[0.16em] md:text-[30px]">Featured Drops</h2>
          <a className="text-[11px] uppercase tracking-[0.18em] text-black/60 transition-colors hover:text-black" href="#">View all</a>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-5">
          {products.map((product) => (
            <article
              key={product.name}
              className="group flex flex-col gap-4 animate-fade-up rounded-[1.6rem] border border-black/10 bg-white p-4 shadow-[0_15px_28px_-24px_rgba(24,22,19,0.55)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_-22px_rgba(0,0,0,0.4)] md:p-5"
            >
              <div className={`aspect-[1/1.06] rounded-[1.2rem] bg-gradient-to-br ${product.tones}`} />
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-[0.2em] text-black/50">{product.badge}</p>
                <h3 className="text-[24px] font-medium leading-tight tracking-[-0.01em]">{product.name}</h3>
                <p className="text-[14px] text-black/72">Regular price {product.price} MRP</p>
              </div>
              <button className="mt-auto w-full rounded-full border border-black/20 bg-black px-5 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-[#24211f]">
                Quick Add
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
