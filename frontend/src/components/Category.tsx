type categoryprops = {
  text: string;
  containerClass?: string;
  textClass?: string;
};

export default function Category({
  text,
  containerClass = "",
  textClass = "",
}: categoryprops) {
  return (
    // category conatiner
    <div className={containerClass}>
      <span className={textClass}>{text}</span>
    </div>
  );
}
