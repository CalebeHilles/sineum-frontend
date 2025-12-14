export default function Error({ errorMessage }: { errorMessage: string }) {
  return (
    <div className="flex justify-center">
      <h1 className="text-2xl">Error</h1>
      <p>{errorMessage}</p>
    </div>
  );
}
