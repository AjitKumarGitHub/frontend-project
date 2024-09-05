const OverlaySidebar = ({ open, setOpen }) => {
  return (
    <>
      {/* sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-40`}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-3xl focus:outline-none"
          onClick={() => setOpen((e) => !e)}
        >
          &times; {/* Unicode for close (X) icon */}
        </button>

        {/* Sidebar content */}
        <div className="p-4 mt-10">
          <h2 className="text-2xl font-bold mb-4">Sidebar</h2>
          <p>This is the content of the sidebar.</p>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setOpen((e) => !e)}
        ></div>
      )}
    </>
  );
};

export default OverlaySidebar;
