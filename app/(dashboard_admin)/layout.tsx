// import Sidebar from "@/components/Sidebar";

import Navdash from "@/components/Navdash";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <main>
        <Navdash/>
        {/* <Sidebar/> */}
        {children}
      </main>
  );
}
