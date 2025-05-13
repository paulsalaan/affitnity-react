import { NavLink } from "react-router-dom";

interface CustomNavProps {
  to: string;
  label: string;
  className?: string; // ang base style sa nav
  activeClassName?: string; // active style sa nav
  inactiveClassName?: string; // inactive style sa nav
  scrollToId?: string; // id sa section nga gusto i-scroll
  scrollOffset?: number; // offset sa scroll
}

export default function CustomNavLink({
  to,
  label,
  className = "",
  activeClassName = "text-gray-600",
  inactiveClassName = "text-moss-black hover:text-yellow-300",
  scrollToId,
  scrollOffset = 0,
}: CustomNavProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (scrollToId) {
      e.preventDefault(); // e prevent niya ang link behaviour
      const element = document.getElementById(scrollToId);

      if (element) {
        const topPosition =
          element.getBoundingClientRect().top + window.scrollY - scrollOffset;
        window.scrollTo({ top: topPosition, behavior: "smooth" });
      }
    }
  };

  return (
    <NavLink
      to={to}
      onClick={handleClick}
      className={({ isActive }: { isActive: boolean }) =>
        `${className} ${isActive ? activeClassName : inactiveClassName}`
      }
    >
      {label}
    </NavLink>
  );
}

// export default function CustomNavLink({
//   to,
//   label,
//   className = "",
//   activeClassName = "text-gray-600",
//   inactiveClassName = "text-moss-black hover:text-yellow-300",
//   scrollToId,
//   scrollOffset = 0,
// }: CustomNavProps) {
//   const handleClick = (e: React.MouseEvent) => {
//     if (scrollToId) {
//       e.preventDefault(); // prevent default link behavior
//       const element = document.getElementById(scrollToId);
//       if (element) {
//         const topPosition = element.getBoundingClientRect().top + window.scrollY - scrollOffset;
//         window.scrollTo({ top: topPosition, behavior: "smooth" });
//       }
//     }
//   };

//   return (
//     <NavLink
//       to={to}
//       onClick={handleClick}
//       className={({ isActive }: { isActive: boolean }) =>
//         `${className} ${isActive ? activeClassName : inactiveClassName}`
//       }
//     >
//       {label}
//     </NavLink>
//   );
// }
