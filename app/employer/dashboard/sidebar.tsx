import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Settings,
  LogOut,
  User,
  Bell,
  MessageSquareText,
  SlidersHorizontal,
  LayoutDashboardIcon,
  HelpCircle,
  ChevronLeft,
  Icon,
} from "lucide-react";
import Image from "next/image";
import logo from "@/public/mini logo.svg";
import { headers } from "next/headers";

const navItems = [
  { label: "Dashboard",        href: "/employer/dashboard", icon: LayoutDashboardIcon },
  { label: "Post a Job",       href: "/employer/dashboard/post-a-job", icon: User },
  { label: "Notification",     href: "/employer/dashboard/notification", icon: Bell },
  { label: "Messages",         href: "/employer/dashboard/messages", icon: MessageSquareText },
  { label: "Account Setting",  href: "/employer/dashboard/settings", icon: Settings },
  { label: "Activity",         href: "/employer/dashboard/activity", icon: SlidersHorizontal },
];

const Sidebar = async () => {
  const headersList = headers();
  const currentPath = (await headersList).get("x-next-url") || "";
  return (
    // <aside className="w-64 bg-white rounded-xl shadow-md flex flex-col justify-between">
    <aside className="w-64 bg-white rounded-xl flex flex-col p-4 justify-between">
      <div>
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8 px-2">
          <Image src={logo} alt="Joblin Logo" width={48} height={48} />
          <span className="text-xl font-bold text-gray-800">Joblin</span>
        </div>

        {/* Navigation */}
        <div className="flex items-center">
          <span className="flex-1 border-b" />
          <ChevronLeft size={18} />
        </div>

        <nav className="space-y-1">
          {navItems.map(({ label, href, icon: Icon }) => {
            const isActive =
              currentPath === href || currentPath.startsWith(href + "/");
            return (
              <Link key={label} href={href}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className="cursor-pointer w-full justify-start gap-2"
                >
                  {<Icon size={24} />}
                  {label}
                </Button>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom (Logout) */}
      <div>
        <Button
          variant="ghost"
          className="cursor-pointer w-full justify-start gap-2 text-red-600 mt-auto hover:text-red-600"
        >
          <LogOut size={24} />
          Logout
        </Button>
        <Button
          variant="ghost"
          className="cursor-pointer w-full justify-start gap-2"
        >
          <HelpCircle size={24} />
          Help
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;

//
//
//
// expandable sidebar
//
//
//
//

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import {
//   Settings,
//   LogOut,
//   User,
//   Bell,
//   MessageSquareText,
//   SlidersHorizontal,
//   LayoutDashboard,
//   HelpCircle,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";
// import Image from "next/image";
// import logo from "@/public/mini logo.svg";
// import { usePathname } from "next/navigation";

// const navItems = [
//   { label: "Dashboard", href: "/employer/dashboard", icon: LayoutDashboard },
//   { label: "Post a Job", href: "/employer/dashboard/post-job", icon: User },
//   {
//     label: "Notification",
//     href: "/employer/dashboard/notification",
//     icon: Bell,
//   },
//   {
//     label: "Messages",
//     href: "/employer/dashboard/messages",
//     icon: MessageSquareText,
//   },
//   {
//     label: "Account Setting",
//     href: "/employer/dashboard/settings",
//     icon: Settings,
//   },
//   {
//     label: "Activity",
//     href: "/employer/dashboard/activity",
//     icon: SlidersHorizontal,
//   },
// ];

// const Sidebar = () => {
//   const pathname = usePathname();
//   const [isExpanded, setIsExpanded] = useState(true);

//   return (
//     <aside
//       className={`transition-all duration-300 bg-white rounded-xl shadow-md flex flex-col p-4 justify-between ${
//         isExpanded ? "w-64" : "w-20"
//       }`}
//     >
//       <div>
//         {/* Logo and toggle button */}
//         <div className="flex items-center justify-center mb-8 px-2">
//           <div className="flex items-center gap-2">
//             <Image src={logo} alt="Joblin Logo" width={48} height={48} />
//             {isExpanded && (
//               <span className="text-xl font-bold text-gray-800">Joblin</span>
//             )}
//           </div>
//           {/* <button
//             onClick={() => setIsExpanded(!isExpanded)}
//             className="text-gray-500 hover:text-gray-800 transition"
//             >
//             {isExpanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
//             </button> */}
//         </div>
//         {/* Navigation */}
//         <div className="flex items-center">
//           {isExpanded && <span className="flex-1 border-b" />}
//           {isExpanded ? (
//             <ChevronLeft size={18} onClick={() => setIsExpanded(!isExpanded)} />
//           ) : (
//             <ChevronRight
//               onClick={() => setIsExpanded(!isExpanded)}
//               size={18}
//             />
//           )}
//         </div>

//         {/* Navigation */}
//         <nav className="space-y-1">
//           {navItems.map(({ label, href, icon: Icon }) => {
//             const isActive =
//               pathname === href || pathname.startsWith(href + "/");
//             return (
//               <Link key={label} href={href}>
//                 <Button
//                   variant="ghost"
//                   className={`w-full justify-start gap-2 px-3 ${isActive ? "bg-gray-100" : ""}`}
//                 >
//                   <Icon size={24} />
//                   {isExpanded && <span>{label}</span>}
//                 </Button>
//               </Link>
//             );
//           })}
//         </nav>
//       </div>

//       {/* Bottom (Logout & Help) */}
//       <div className="space-y-1 mt-4">
//         <Button
//           variant="ghost"
//           className="w-full justify-start gap-2 text-red-600 hover:text-red-600"
//         >
//           <LogOut size={24} />
//           {isExpanded && <span>Logout</span>}
//         </Button>
//         <Button variant="ghost" className="w-full justify-start gap-2">
//           <HelpCircle size={24} />
//           {isExpanded && <span>Help</span>}
//         </Button>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;
