import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";

interface CustomNavProps {
  to: string;
  label: string;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
  scrollToId?: string;
  scrollOffset?: number;
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
  const location = useLocation();

  useEffect(() => {
    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        const topPosition =
          element.getBoundingClientRect().top + window.scrollY - scrollOffset;
        window.scrollTo({ top: topPosition, behavior: "smooth" });
      }
    }
  }, [location.pathname, scrollToId, scrollOffset]);

  const handleClick = (e: React.MouseEvent) => {
    if (scrollToId) {
      e.preventDefault(); // Prevent the default NavLink behavior
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
