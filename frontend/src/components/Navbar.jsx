import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav class="block w-full px-4 py-2 mx-auto bg-white bg-opacity-90 sticky top-3 shadow lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
      <div class="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
        <Link to="/"
          class="mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold">
          Logo
        </Link>
        <div class="hidden lg:block">
          <ul class="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
              <Link to="/" class="flex items-center">Home</Link>
            </li>
            <li class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
              <Link to="/dashboard/listEmployee" class="flex items-center">Employee List</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul class="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
              Name: <span className="text-black">Hukum</span>
            </li>
            <li class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
              <button class="flex items-cente">Logout</button>
            </li>
          </ul>
        </div>
        <button
          class="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
          type="button">
          <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar