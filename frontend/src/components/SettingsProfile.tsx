import { JSX } from "react";

type IconTextProps = {
  icon: JSX.Element;
  text: string;
  subText: string;
  containerClass?: string;
  iconClass?: string;
  textClass?: string;
  subTextClass?: string;
};

export default function SettingsProfile({
  icon,
  text,
  subText,
  containerClass = "",
  iconClass = "",
  textClass = "",
  subTextClass = "",
}: IconTextProps) {
  return (
    <div
      className={`flex items-center justify-between gap-4 ${containerClass}`}
    >
      <div className="flex items-center gap-2">
        <span className={iconClass}>{icon}</span>
        <span className={textClass}>{text}</span>
      </div>
      <span className={subTextClass}>{subText}</span>
    </div>
  );
}
