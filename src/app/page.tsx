export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <h1 className="text-3xl font-semibold">
        Welcome to <span className="font-bold">Sineum</span>
      </h1>
      <code className="text-muted-foreground mt-2">{`Share your thoughts here`}</code>
    </div>
  );
}
