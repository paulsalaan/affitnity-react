type ExerciseCardProp = {
  id: string;
  imageUrl: string;
  titleText: string;
  categoryText: string;
  onClick: (id: string) => void;
  categoryColorClass: string;
};

export default function ExerciseCard({
  id,
  imageUrl,
  titleText,
  categoryText,
  onClick,
  categoryColorClass,
}: ExerciseCardProp) {
  return (
    <div
      onClick={() => onClick(id)}
      className="rounded-xl p-4 cursor-pointer transition"
    >
      <div
        className="relative w-full h-48 bg-cover bg-center rounded-lg overflow-hidden"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div></div>

        <div className="absolute inset-0 bg-black bg-opacity-40 p-3 text-white flex flex-col justify-between">
          <h1 className="text-xl font-bold">{titleText}</h1>
          <div
            className={`${categoryColorClass} inline-block px-2 py-1 rounded text-black text-sm font-medium bg-white`}
          >
            {categoryText}
          </div>
        </div>
      </div>
    </div>
  );
}
