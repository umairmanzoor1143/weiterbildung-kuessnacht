
export default function Home() {
  return (
    <div className="max-w-[1800px] mx-auto border-x border-zinc-100 min-h-screen flex flex-col relative">
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 min-h-[600px] border-zinc-100 border-b">
          {/* Hero Text */}
          <div className="md:col-span-7 md:p-20 flex flex-col md:border-b-0 border-zinc-100 border-b pt-12 pr-12 pb-12 pl-12 relative justify-center">
            <div>
              <h1 className="text-6xl md:text-[5.5rem] lg:text-[6.5rem] font-extrabold text-primary leading-[1] tracking-[-0.03em] mb-6">
                Samira, 26<br />
                lernt jetzt<br />
                Kunstmalen
              </h1>
            </div>
            <div className="max-w-lg">
              <p className="text-zinc-500 text-[15px] leading-relaxed mb-8">
                <span className="font-bold text-zinc-900">Für jede*n etwas:</span>{" "}
                Entdecke das vielfältige Weiterbildungs-{" "}
                angebot im Bezirk Küssnacht.
              </p>

              <div className="flex items-center w-fit text-xs font-semibold uppercase tracking-wider text-zinc-600">
                <div className="border border-zinc-200 px-8 py-3 flex items-center justify-center hover:bg-zinc-50 transition-colors cursor-pointer">
                  FEBRUAR
                </div>
                <div className="border border-zinc-200 border-l-0 px-8 py-3 flex items-center justify-center hover:bg-zinc-50 transition-colors cursor-pointer">
                  MÄRZ
                </div>
              </div>
            </div>
          </div>
          {/* Hero Image */}
          <div className="md:col-span-5 relative md:border-l border-zinc-100 bg-zinc-100 h-full w-full">
            <img
              src="https://static.wixstatic.com/media/770a6f_ad9883d6495e4a35b9496a7e1bfaf226~mv2.jpg/v1/crop/x_190,y_0,w_4345,h_4724/fill/w_527,h_573,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/vwb_keyuvisual_11.jpg"
              alt="Architectural Interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full border-t border-zinc-100/20 bg-white/10 backdrop-blur-md p-6 flex justify-between items-center text-white">
              <span className="text-xs uppercase tracking-widest font-medium">
                Samira
              </span>
              <span className="text-xs font-mono">26</span>
            </div>
          </div>
        </section>

        {/* Ticker / Info Bar */}
        <div className="border-b border-zinc-100 py-4 px-6 md:px-0 flex flex-col md:flex-row md:divide-x divide-zinc-100">
          <div className="flex-1 md:px-6 flex items-center gap-3 py-2 md:py-0">
            <svg
              className="text-zinc-400"
              width={18}
              height={18}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 22C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M7 2L17 22"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-xs font-medium uppercase tracking-wide text-zinc-600">
              Global Shipping
            </span>
          </div>
          <div className="flex-1 md:px-6 flex items-center gap-3 py-2 md:py-0">
            <svg
              className="text-zinc-400"
              width={18}
              height={18}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M12 22C12 18 12 16 15 13C18 10 21 11 22 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M12 18V13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-xs font-medium uppercase tracking-wide text-zinc-600">
              Carbon Neutral
            </span>
          </div>
          <div className="flex-1 md:px-6 flex items-center gap-3 py-2 md:py-0">
            <svg
              className="text-zinc-400"
              width={18}
              height={18}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xs font-medium uppercase tracking-wide text-zinc-600">
              5 Year Warranty
            </span>
          </div>
        </div>

        {/* Content Grid with Vertical Lines */}
        <section className="flex-1 grid grid-cols-1 lg:grid-cols-4 md:divide-x divide-zinc-100">
          {/* Filter Sidebar */}
          <div className="p-6 md:p-8 space-y-8 border-b lg:border-b-0 border-zinc-100">
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 mb-6 uppercase tracking-wider flex items-center gap-2">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 7H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M6 12H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M10 17H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                Category
              </h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-4 h-4 rounded-full border border-zinc-300 group-hover:border-zinc-900 flex items-center justify-center transition-colors">
                    <div className="w-2 h-2 rounded-full bg-zinc-900" />
                  </div>
                  <span className="text-sm text-zinc-900">Seating</span>
                  <span className="text-xs text-zinc-400 ml-auto tabular-nums">12</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-4 h-4 rounded-full border border-zinc-300 group-hover:border-zinc-900 flex items-center justify-center transition-colors" />
                  <span className="text-sm text-zinc-500 group-hover:text-zinc-900">Lighting</span>
                  <span className="text-xs text-zinc-400 ml-auto tabular-nums">08</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-4 h-4 rounded-full border border-zinc-300 group-hover:border-zinc-900 flex items-center justify-center transition-colors" />
                  <span className="text-sm text-zinc-500 group-hover:text-zinc-900">Tables</span>
                  <span className="text-xs text-zinc-400 ml-auto tabular-nums">04</span>
                </label>
              </div>
            </div>
            <div className="h-px w-full bg-zinc-100" />
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 mb-6 uppercase tracking-wider flex items-center gap-2">
                Material
              </h3>
              <div className="flex flex-wrap gap-2">
                <button className="px-3 py-1.5 border border-zinc-200 text-xs font-medium text-zinc-600 rounded-sm hover:border-zinc-900 hover:text-zinc-900 transition-colors">
                  Oak
                </button>
                <button className="px-3 py-1.5 border border-zinc-200 text-xs font-medium text-zinc-600 rounded-sm hover:border-zinc-900 hover:text-zinc-900 transition-colors">
                  Steel
                </button>
                <button className="px-3 py-1.5 border border-zinc-200 text-xs font-medium text-zinc-600 rounded-sm hover:border-zinc-900 hover:text-zinc-900 transition-colors">
                  Concrete
                </button>
                <button className="px-3 py-1.5 border border-zinc-200 text-xs font-medium text-zinc-600 rounded-sm hover:border-zinc-900 hover:text-zinc-900 transition-colors">
                  Linen
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid (Spans 3 Columns) */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-100">
            {/* Product 1 */}
            <div className="group flex flex-col border-b border-zinc-100 lg:border-b-0 hover:bg-zinc-50 transition-colors">
              <div className="aspect-square w-full relative flex items-center justify-center p-8 border-b border-zinc-100 overflow-hidden bg-white">
                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d4c1977f-e69e-4828-b2ab-1bfc6c81f6e2_1600w.jpg"
                  className="transition-transform duration-500 group-hover:scale-105 mix-blend-multiply w-full h-full object-contain"
                  alt="Chair"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-900">Plywood Lounge</h4>
                    <p className="text-xs text-zinc-500 mt-1">Molded Ash</p>
                  </div>
                  <span className="text-sm font-medium">€2,400</span>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group flex flex-col border-b border-zinc-100 lg:border-b-0 hover:bg-zinc-50 transition-colors">
              <div className="aspect-square w-full relative flex items-center justify-center p-8 border-b border-zinc-100 overflow-hidden bg-white">
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-2 py-0.5 border border-zinc-900 text-[10px] font-bold uppercase tracking-wide text-zinc-900 bg-white">
                    Sold Out
                  </span>
                </div>
                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ac4748af-4667-40b5-8efa-25ae0fc56901_1600w.jpg"
                  className="transition-transform duration-500 group-hover:scale-105 opacity-70 mix-blend-multiply w-full h-full object-contain grayscale"
                  alt="Lamp"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-900">Arc Lamp 02</h4>
                    <p className="text-xs text-zinc-500 mt-1">Brushed Nickel</p>
                  </div>
                  <span className="text-sm font-medium text-zinc-400 line-through">€850</span>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group flex flex-col border-b border-zinc-100 lg:border-b-0 hover:bg-zinc-50 transition-colors">
              <div className="aspect-square w-full relative flex items-center justify-center p-8 border-b border-zinc-100 overflow-hidden bg-white">
                <div className="absolute top-4 left-4 z-10">
                  <svg
                    className="text-zinc-900"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L14.4 7.2L20 8.5L16 13.5L17.5 19L12 16.5L6.5 19L8 13.5L4 8.5L9.6 7.2L12 2Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d1b27a57-7b1c-41e9-b8f9-377802f7ce0c_1600w.jpg"
                  className="transition-transform duration-500 group-hover:scale-105 mix-blend-multiply w-full h-full object-contain"
                  alt="Chair"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-900">Bauhaus 90</h4>
                    <p className="text-xs text-zinc-500 mt-1">Canvas &amp; Steel</p>
                  </div>
                  <span className="text-sm font-medium">€1,100</span>
                </div>
              </div>
            </div>

            {/* Product 4 */}
            <div className="group flex flex-col border-b md:border-b-0 border-zinc-100 hover:bg-zinc-50 transition-colors">
              <div className="aspect-square w-full relative flex items-center justify-center p-8 border-b border-zinc-100 overflow-hidden bg-white">
                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a16d45dd-b6ca-4600-bee0-7cefba0c965c_1600w.jpg"
                  className="transition-transform duration-500 group-hover:scale-105 mix-blend-multiply w-full h-full object-contain"
                  alt="Table"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-900">Low Plinth</h4>
                    <p className="text-xs text-zinc-500 mt-1">Carrara Marble</p>
                  </div>
                  <span className="text-sm font-medium">€3,200</span>
                </div>
              </div>
            </div>

            {/* Product 5 */}
            <div className="group flex flex-col border-b md:border-b-0 border-zinc-100 hover:bg-zinc-50 transition-colors">
              <div className="aspect-square w-full relative flex items-center justify-center p-8 border-b border-zinc-100 overflow-hidden bg-white">
                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/adb40faa-c523-44f7-9f91-cdc8f6182daf_1600w.webp"
                  className="transition-transform duration-500 group-hover:scale-105 mix-blend-multiply w-full h-full object-contain"
                  alt="Vase"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-900">Vase &apos;Echo&apos;</h4>
                    <p className="text-xs text-zinc-500 mt-1">Hand-blown Glass</p>
                  </div>
                  <span className="text-sm font-medium">€320</span>
                </div>
              </div>
            </div>

            {/* Product 6: Join Club Card */}
            <div className="group bg-zinc-900 text-white flex flex-col justify-center p-8 relative overflow-hidden h-full min-h-[400px]">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <svg
                    className="text-zinc-500 mb-4"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M7 10L12 14L17 10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h4 className="text-xl font-medium tracking-tight mb-2">The Archive</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                    Join our newsletter for early access to limited material studies.
                  </p>
                </div>
                <form className="flex border-b border-zinc-700 pb-2">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="bg-transparent text-sm w-full outline-none placeholder:text-zinc-600"
                  />
                  <button
                    type="submit"
                    className="text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
                  >
                    Join
                  </button>
                </form>
              </div>
              <div className="absolute -right-10 -bottom-10 opacity-10">
                <svg
                  width={200}
                  height={200}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.269 3.09062L5.45037 4.16781C3.59379 4.58288 2.6655 4.79042 2.15286 5.56585C1.64023 6.34127 1.83921 7.23126 2.23719 9.01124L2.83406 11.6811C3.12513 12.9831 3.27067 13.634 3.65586 14.1292C4.04106 14.6244 4.63435 14.9084 5.82092 15.4764C7.00749 16.0443 8.16335 16.5976 10.4751 17.7042L11.7766 18.3272C15.8239 20.2645 17.8475 21.2332 19.3444 20.2541C20.8413 19.2751 21.0543 16.8407 21.4802 11.972L21.5796 10.8361C21.7511 8.87522 21.8369 7.89476 21.2828 7.18247C20.7287 6.47018 19.824 6.11586 18.0147 5.40723L16.2942 4.73339C13.8863 3.79038 12.6823 3.31888 11.5544 3.09139C11.1302 3.00583 10.7001 3.00557 10.276 3.09062H10.269Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>


      </main>
    </div>
  );
}
