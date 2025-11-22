export default function Card({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border rounded-lg p-4 h-36 flex flex-col hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer overflow-hidden hover:h-auto group">
      <div className="pb-3 mb-3 border-b flex-shrink-0">
        <h1 className="text-xl font-semibold leading-tight">{title}</h1>
      </div>
      <p className="text-sm text-muted-foreground flex-1 leading-relaxed line-clamp-3 group-hover:line-clamp-none">
        {description}
      </p>
    </div>
  );
}
