export default function Error({ errorMessage }: { errorMessage: string }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl">Error</h1>
      <p>{errorMessage}</p>
    </div>
  );
}
