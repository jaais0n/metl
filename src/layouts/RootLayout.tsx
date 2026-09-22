import { Outlet, ScrollRestoration } from 'react-router-dom';

export const RootLayout = () => {
  return (
    <div className="min-h-screen bg-[#F0F0F0] text-black selection:bg-black selection:text-white">
      <Outlet />
      <ScrollRestoration />
    </div>
  );
};

