import { Outlet } from 'react-router-dom'

function AuthLayout() {
  return (
    <div className="min-h-screen flex">
      <aside
  className="hidden lg:flex lg:w-5/12 flex-col justify-between p-10 xl:p-14"
  style={{
    background:
      'linear-gradient(160deg, #2D5A53 0%, #1a3530 45%, #000000 100%)',
  }}
>
    <div>
  <span className="text-lg font-bold tracking-tight text-white">
    FlexPass
  </span>
</div>

<div className="space-y-6">
  <h1 className="text-4xl xl:text-5xl font-extrabold leading-tight text-white">
    Train anywhere
    <br />
    with
    <br />
    <span className="text-[#4ECDC4]">one membership.</span>
  </h1>

  <p className="max-w-xs text-sm leading-relaxed text-white/60">
    Join FlexPass and access partner gyms with one membership.
    No contracts, just freedom.
  </p>

  <ul className="space-y-4">
  <li className="flex items-center gap-4">
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
      ✓
    </span>

    <span className="text-sm font-medium text-white/80">
      Access multiple partner gyms
    </span>
  </li>

  <li className="flex items-center gap-4">
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
      ✓
    </span>

    <span className="text-sm font-medium text-white/80">
      One membership, multiple locations
    </span>
  </li>

  <li className="flex items-center gap-4">
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
      ✓
    </span>

    <span className="text-sm font-medium text-white/80">
      Flexible fitness access
    </span>
  </li>
</ul>

</div>
  {/* Hero content */}

  <p className="text-xs text-white/30">
  © 2026 FlexPass. All rights reserved.
</p>
</aside>

      <main className="flex flex-1 items-center justify-center bg-gray-50 px-4 py-12 sm:px-8">
  <Outlet />
</main>
    </div>
  )
}

export default AuthLayout