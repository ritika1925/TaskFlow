const Navbar = () => {
  return (
    <header className="h-16 border-b bg-white px-6 flex items-center justify-between">
      <h2 className="font-semibold text-lg">
        Welcome Back 👋
      </h2>

      <div className="flex items-center gap-4">
        <button className="px-3 py-2 rounded-lg border">
          Dark Mode
        </button>

        <div className="w-10 h-10 rounded-full bg-indigo-500" />
      </div>
    </header>
  );
};

export default Navbar;