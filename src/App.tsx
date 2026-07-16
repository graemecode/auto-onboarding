type IconProps = {
  className?: string
}

type Restaurant = {
  name: string
  cuisine: string
  description: string
  eta: string
  accent: string
  artwork: 'ramen' | 'grill' | 'pasta'
}

const restaurants: Restaurant[] = [
  {
    name: 'Miso Moon',
    cuisine: 'Tokyo-inspired comfort',
    description: 'Silky ramen, crispy katsu, and bright seasonal sides.',
    eta: 'Ready in 25–35 min',
    accent: 'bg-[#f4b44c]',
    artwork: 'ramen',
  },
  {
    name: 'Citrus & Smoke',
    cuisine: 'California live-fire',
    description: 'Charred vegetables, citrusy grains, and slow-roasted mains.',
    eta: 'Ready in 30–40 min',
    accent: 'bg-[#ef765d]',
    artwork: 'grill',
  },
  {
    name: 'Nonna Nova',
    cuisine: 'Modern Italian',
    description: 'Hand-shaped pasta, market salads, and nostalgic desserts.',
    eta: 'Ready in 20–30 min',
    accent: 'bg-[#83a787]',
    artwork: 'pasta',
  },
]

function ArrowUpRight({ className = 'size-5' }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
      <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  )
}

function BagIcon({ className = 'size-6' }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
      <path d="M5.5 8.5h13l-1 11h-11l-1-11Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.6" />
      <path d="M9 9V6.5a3 3 0 0 1 6 0V9" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    </svg>
  )
}

function PinIcon({ className = 'size-6' }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
      <path d="M19 10c0 5-7 10-7 10S5 15 5 10a7 7 0 1 1 14 0Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.6" />
      <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function ClockIcon({ className = 'size-6' }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7.5V12l3.2 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
    </svg>
  )
}

function LogoMark() {
  return (
    <span aria-hidden="true" className="relative flex size-9 items-center justify-center rounded-full bg-[#ef765d] text-[#17362f]">
      <span className="absolute h-3.5 w-5 rounded-b-full border-b-2 border-l-2 border-r-2 border-current" />
      <span className="absolute top-2 h-2.5 w-px rotate-[-22deg] bg-current" />
      <span className="absolute top-2 h-2.5 w-px rotate-[22deg] bg-current" />
    </span>
  )
}

function FoodArtwork({ type, accent }: { type: Restaurant['artwork']; accent: string }) {
  if (type === 'ramen') {
    return (
      <div aria-hidden="true" className={`food-art ${accent}`}>
        <div className="absolute left-[15%] top-[12%] size-16 rounded-full bg-[#f8e7b2] shadow-lg sm:size-20" />
        <div className="absolute left-[20%] top-[17%] size-5 rounded-full bg-[#f4b44c] sm:size-6" />
        <div className="absolute right-[13%] top-[17%] h-20 w-8 rotate-12 rounded-full bg-[#d6cf95] sm:h-24 sm:w-10" />
        <div className="absolute bottom-[-12%] left-1/2 h-[70%] w-[74%] -translate-x-1/2 rounded-[50%] bg-[#f7f0df] shadow-[0_24px_50px_rgba(42,52,47,0.2)]" />
        <div className="absolute bottom-[16%] left-1/2 h-[38%] w-[58%] -translate-x-1/2 rounded-[50%] bg-[#c5763e]" />
        <div className="absolute bottom-[26%] left-[31%] h-2 w-[38%] rotate-6 rounded-full bg-[#f5cf73] shadow-[0_9px_0_#f5cf73,0_18px_0_#f5cf73]" />
        <div className="absolute bottom-[37%] left-[32%] size-7 rounded-full bg-[#f8e7b2] sm:size-9" />
        <div className="absolute bottom-[40%] right-[31%] size-7 rounded-full bg-[#6a865c] sm:size-9" />
      </div>
    )
  }

  if (type === 'grill') {
    return (
      <div aria-hidden="true" className={`food-art ${accent}`}>
        <div className="absolute -left-4 top-7 size-24 rounded-full bg-[#f4b44c] opacity-80 sm:size-28" />
        <div className="absolute -right-2 bottom-6 size-24 rounded-full bg-[#9dbb80] sm:size-32" />
        <div className="absolute left-1/2 top-1/2 h-[70%] w-[62%] -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] rounded-[48%] bg-[#f7f0df] shadow-[0_24px_50px_rgba(42,52,47,0.2)]" />
        <div className="absolute left-[30%] top-[26%] h-16 w-24 rotate-[-14deg] rounded-[40%] bg-[#824b37] sm:h-20 sm:w-28" />
        <div className="absolute left-[33%] top-[32%] h-px w-20 rotate-[-8deg] bg-[#d8945b] shadow-[0_10px_0_#d8945b,0_20px_0_#d8945b]" />
        <div className="absolute bottom-[23%] right-[27%] flex gap-1">
          <span className="size-7 rounded-full bg-[#edaa3e] sm:size-9" />
          <span className="size-7 rounded-full bg-[#6a865c] sm:size-9" />
        </div>
      </div>
    )
  }

  return (
    <div aria-hidden="true" className={`food-art ${accent}`}>
      <div className="absolute -right-5 -top-5 size-28 rounded-full border-[18px] border-[#f4b44c] opacity-90 sm:size-36" />
      <div className="absolute -bottom-8 -left-7 size-28 rounded-full bg-[#5f876e] sm:size-36" />
      <div className="absolute left-1/2 top-1/2 size-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f7f0df] shadow-[0_24px_50px_rgba(42,52,47,0.2)]" />
      <div className="absolute left-1/2 top-1/2 h-[46%] w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[10px] border-[#efc15f] sm:border-[14px]" />
      <div className="absolute left-[39%] top-[39%] size-5 rounded-full bg-[#d95d45] shadow-[24px_12px_0_#d95d45,-12px_24px_0_#d95d45] sm:size-6" />
      <div className="absolute bottom-[24%] right-[27%] h-10 w-3 rotate-45 rounded-full bg-[#547b58]" />
    </div>
  )
}

function RestaurantCard({ restaurant, index }: { restaurant: Restaurant; index: number }) {
  return (
    <li className="group overflow-hidden rounded-[1.75rem] border border-[#17362f]/10 bg-[#fffdf7] shadow-[0_20px_60px_rgba(42,52,47,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(42,52,47,0.13)]">
      <FoodArtwork accent={restaurant.accent} type={restaurant.artwork} />
      <div className="p-6 sm:p-7">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="rounded-full bg-[#17362f]/7 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-[#17362f]/70">
            Kitchen {String(index + 1).padStart(2, '0')}
          </span>
          <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <h3 className="font-display text-3xl leading-none text-[#17362f]">{restaurant.name}</h3>
        <p className="mt-2 text-sm font-bold uppercase tracking-[0.13em] text-[#d45842]">{restaurant.cuisine}</p>
        <p className="mt-4 leading-7 text-[#39554d]">{restaurant.description}</p>
        <div className="mt-5 flex items-center gap-2 border-t border-[#17362f]/10 pt-4 text-sm font-semibold text-[#39554d]">
          <ClockIcon className="size-4" />
          {restaurant.eta}
        </div>
      </div>
    </li>
  )
}

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f2e8] text-[#17362f]">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="relative z-20 border-b border-[#17362f]/10">
        <div className="page-shell flex h-20 items-center justify-between">
          <a className="focus-ring flex items-center gap-3 rounded-full" href="#top" aria-label="Gather SF home">
            <LogoMark />
            <span className="font-display text-2xl tracking-[-0.04em]">Gather SF</span>
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-7 text-sm font-semibold sm:flex">
            <a className="nav-link" href="#restaurants">Restaurants</a>
            <a className="nav-link" href="#how-it-works">How it works</a>
          </nav>
          <a className="focus-ring inline-flex items-center gap-2 rounded-full bg-[#17362f] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#254a41]" href="#restaurants">
            Browse meals
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </header>

      <main id="main-content">
        <section id="top" className="relative isolate">
          <div aria-hidden="true" className="hero-glow" />
          <div className="page-shell grid min-h-[calc(100svh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-20">
            <div className="relative z-10 max-w-3xl">
              <div className="eyebrow">
                <span className="size-2 rounded-full bg-[#ef765d]" />
                A new way to take dinner home
              </div>
              <h1 className="font-display mt-7 text-[clamp(3.6rem,8vw,7.5rem)] leading-[0.83] tracking-[-0.065em] text-[#17362f]">
                Three kitchens.<br />
                One pickup.<br />
                <span className="text-[#d45842]">Zero cross-town scramble.</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-[#39554d] sm:text-xl">
                Choose meals from a curated group of restaurant partners, then collect everything together at one central San Francisco pickup.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a className="focus-ring button-primary" href="#restaurants">
                  Explore the menu
                  <ArrowUpRight />
                </a>
                <a className="focus-ring button-secondary" href="#how-it-works">
                  <PinIcon className="size-5" />
                  How pickup works
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-[#39554d]">
                <span className="check-item">One combined pickup</span>
                <span className="check-item">No delivery fees</span>
                <span className="check-item">Dinner, simplified</span>
              </div>
            </div>

            <div aria-label="Illustration of three restaurant meals gathered into one pickup" className="relative mx-auto h-[480px] w-full max-w-[590px] sm:h-[590px] lg:translate-x-8">
              <div className="absolute left-[8%] top-[12%] z-10 w-[56%] -rotate-6 rounded-[2rem] bg-[#fffdf7] p-3 shadow-[0_30px_90px_rgba(42,52,47,0.18)] sm:p-4">
                <FoodArtwork accent="bg-[#f4b44c]" type="ramen" />
                <div className="flex items-center justify-between px-2 pb-2 pt-4">
                  <div>
                    <p className="font-display text-xl sm:text-2xl">Miso Moon</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#39554d]">Spicy sesame ramen</p>
                  </div>
                  <span className="rounded-full bg-[#17362f] px-3 py-2 text-xs font-bold text-white">$16</span>
                </div>
              </div>
              <div className="absolute bottom-[5%] right-[2%] w-[57%] rotate-6 rounded-[2rem] bg-[#fffdf7] p-3 shadow-[0_30px_90px_rgba(42,52,47,0.18)] sm:p-4">
                <FoodArtwork accent="bg-[#83a787]" type="pasta" />
                <div className="flex items-center justify-between px-2 pb-2 pt-4">
                  <div>
                    <p className="font-display text-xl sm:text-2xl">Nonna Nova</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#39554d]">Market pesto pasta</p>
                  </div>
                  <span className="rounded-full bg-[#17362f] px-3 py-2 text-xs font-bold text-white">$18</span>
                </div>
              </div>
              <div className="absolute right-[4%] top-[8%] z-20 flex items-center gap-3 rounded-2xl bg-[#17362f] px-4 py-3 text-white shadow-xl sm:right-0 sm:px-5 sm:py-4">
                <span className="flex size-9 items-center justify-center rounded-full bg-[#ef765d] text-[#17362f]"><BagIcon className="size-5" /></span>
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-white/60">Your pickup</span>
                  <span className="mt-0.5 block text-sm font-bold">3 meals · 1 stop</span>
                </span>
              </div>
              <div aria-hidden="true" className="absolute bottom-[15%] left-[2%] size-24 rounded-full border border-[#17362f]/20 sm:size-32" />
              <div aria-hidden="true" className="absolute bottom-[18%] left-[8%] size-24 rounded-full border border-[#17362f]/20 sm:size-32" />
            </div>
          </div>
        </section>

        <section id="restaurants" className="scroll-mt-8 bg-[#17362f] py-20 text-white sm:py-28">
          <div className="page-shell">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <p className="eyebrow border-white/15 bg-white/8 text-[#f7f2e8]">
                  <span className="size-2 rounded-full bg-[#f4b44c]" />
                  Launch collection
                </p>
                <h2 className="font-display mt-6 text-5xl leading-[0.95] tracking-[-0.05em] sm:text-7xl">Something for every appetite.</h2>
              </div>
              <div className="max-w-xl lg:justify-self-end">
                <p className="text-lg leading-8 text-[#d7e0dc]">Mix and match from three distinct menus without mapping three different stops. Everyone gets what they want; you get one easy handoff.</p>
                <p className="mt-4 text-sm text-[#aabdb6]">Miso Moon, Citrus & Smoke, and Nonna Nova are fictional restaurants created for this prototype. No real-world partnerships are implied.</p>
              </div>
            </div>

            <ul aria-label="Launch restaurant partners" className="mt-12 grid gap-5 text-[#17362f] md:grid-cols-3 sm:mt-16">
              {restaurants.map((restaurant, index) => (
                <RestaurantCard index={index} key={restaurant.name} restaurant={restaurant} />
              ))}
            </ul>
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-8 py-20 sm:py-28">
          <div className="page-shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow mx-auto w-fit">
                <span className="size-2 rounded-full bg-[#83a787]" />
                One smooth handoff
              </p>
              <h2 className="font-display mt-6 text-5xl leading-[0.95] tracking-[-0.05em] sm:text-7xl">Your dinner, gathered.</h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#506860]">We coordinate the kitchens so every meal meets you at the same place, at the same time.</p>
            </div>

            <ol className="mt-14 grid gap-6 lg:grid-cols-3">
              <li className="step-card">
                <span className="step-number">01</span>
                <div className="step-icon bg-[#f4b44c]"><BagIcon /></div>
                <h3 className="font-display mt-7 text-3xl">Choose your mix</h3>
                <p className="mt-3 leading-7 text-[#506860]">Browse all three restaurant menus and build the right dinner for your table.</p>
              </li>
              <li className="step-card">
                <span className="step-number">02</span>
                <div className="step-icon bg-[#ef765d]"><ClockIcon /></div>
                <h3 className="font-display mt-7 text-3xl">Pick a window</h3>
                <p className="mt-3 leading-7 text-[#506860]">Choose a convenient collection time while the kitchens prepare your order.</p>
              </li>
              <li className="step-card">
                <span className="step-number">03</span>
                <div className="step-icon bg-[#83a787]"><PinIcon /></div>
                <h3 className="font-display mt-7 text-3xl">Grab and go</h3>
                <p className="mt-3 leading-7 text-[#506860]">Collect every meal together from one staffed, central San Francisco pickup point.</p>
              </li>
            </ol>

            <div className="relative mt-12 overflow-hidden rounded-[2rem] bg-[#e8d9c3] px-6 py-10 sm:px-10 lg:grid lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-14 lg:py-14">
              <div aria-hidden="true" className="absolute -right-16 -top-20 size-64 rounded-full border-[50px] border-[#f4b44c]/50" />
              <div className="relative z-10 max-w-xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#fffdf7] px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] shadow-sm">
                  <PinIcon className="size-4 text-[#d45842]" />
                  Prototype pickup hub
                </span>
                <h3 className="font-display mt-6 text-4xl leading-none tracking-[-0.04em] sm:text-5xl">Central SF location, details to come.</h3>
                <p className="mt-5 text-lg leading-8 text-[#39554d]">The concept is designed around one convenient, transit-friendly collection point in central San Francisco. The exact location is being finalized—no confirmed address yet.</p>
              </div>
              <div className="relative z-10 mt-10 rounded-[1.5rem] bg-[#fffdf7] p-5 shadow-[0_20px_50px_rgba(42,52,47,0.12)] lg:mt-0 lg:ml-10">
                <div className="map-grid relative flex min-h-56 items-center justify-center overflow-hidden rounded-xl bg-[#d9e1d6]">
                  <div className="absolute h-[160%] w-8 rotate-[34deg] bg-[#f7f2e8]" />
                  <div className="absolute h-7 w-[160%] -rotate-[12deg] bg-[#f7f2e8]" />
                  <div className="absolute left-[15%] top-[14%] size-14 rounded-full bg-[#b9caa9]" />
                  <div className="absolute bottom-[8%] right-[8%] h-20 w-28 rounded-full bg-[#b7d2d2]" />
                  <span className="relative flex size-16 items-center justify-center rounded-full bg-[#d45842] text-white shadow-[0_12px_30px_rgba(212,88,66,0.35)] ring-8 ring-white/70"><PinIcon className="size-8" /></span>
                </div>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-bold">Central San Francisco</p>
                    <p className="mt-1 text-sm text-[#506860]">Exact location · TBD</p>
                  </div>
                  <span className="rounded-full bg-[#f4b44c]/25 px-3 py-2 text-xs font-bold uppercase tracking-wider">Concept</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-4 sm:px-6 sm:pb-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#d45842] px-6 py-16 text-center text-white sm:px-10 sm:py-20">
            <div aria-hidden="true" className="absolute -left-12 -top-12 size-48 rounded-full border-[36px] border-[#f4b44c]/40" />
            <div aria-hidden="true" className="absolute -bottom-14 -right-10 size-52 rounded-full bg-[#17362f]/15" />
            <div className="relative z-10 mx-auto max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ffe3d9]">Dinner can be easier</p>
              <h2 className="font-display mt-5 text-5xl leading-[0.9] tracking-[-0.05em] sm:text-7xl">One stop. Everyone’s favorite.</h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#fff4ef]">Explore the prototype launch menus and imagine a simpler way to bring dinner home.</p>
              <a className="focus-ring mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#fffdf7] px-7 py-4 font-bold text-[#17362f] shadow-lg transition hover:bg-white" href="#restaurants">
                Browse the kitchens
                <ArrowUpRight />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#17362f] py-10 text-[#d7e0dc]">
        <div className="page-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-white">
            <LogoMark />
            <span className="font-display text-2xl">Gather SF</span>
          </div>
          <p className="max-w-md text-sm leading-6">An independently shippable concept prototype. Restaurants and pickup details shown here are fictional.</p>
          <a className="focus-ring rounded-md text-sm font-bold text-white underline decoration-white/30 underline-offset-4 hover:decoration-white" href="#top">Back to top</a>
        </div>
      </footer>
    </div>
  )
}

export default App
