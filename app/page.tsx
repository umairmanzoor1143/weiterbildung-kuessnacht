
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
      </main>
    </div>
  );
}
