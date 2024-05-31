import CountryLookup from "./CountryLookup";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 text-sm text-gray-500 bg-zinc-900 w-full">
      <div className="border-b border-zinc-600 px-8 py-3">
        <CountryLookup />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0">
        <div className="flex items-center space-x-6">
          <a href="https://x.com/xanmoy">Twitter</a>
          <a href="https://linkedin.com/in/xanmoy">LinkedIn</a>
          <a href="https://github.com/xanmoy">Github</a>
         
        </div>

        <p className="text-gray-400 text-xs text-center p-3">
          Developed by <a className="text-blue-600" href="https://github.com/xanmoy">Xanmoy</a>
          

        </p>
      </div>
    </footer>
  );
}
