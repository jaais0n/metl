import { Outlet, ScrollRestoration } from 'react-router-dom';

export const RootLayout = () => {
  return (
    <div className="min-h-screen bg-[#F6F6F6] text-[#090909] selection:bg-black selection:text-white">
      <Outlet />
      <ScrollRestoration />
    </div>
  );
};

