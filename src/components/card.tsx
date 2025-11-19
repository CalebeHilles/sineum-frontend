export default function Card({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border rounded-lg p-3 h-36 flex flex-col hover:shadow-lg transition-shadow cursor-pointer">
      <div className="pb-2 mb-2 border-b flex-shrink-0">
        <h1 className="text-xl font-semibold line-clamp-2">{title}</h1>
      </div>
      <p className="text-sm text-muted-foreground line-clamp-6 flex-1">
        {description}
      </p>
    </div>
  );
}
