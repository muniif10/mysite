export default function ErrorPage() {
  return (
    <div className="flex-col text-center m-5 align-bottom" id="error-page">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <button
        onClick={() => {
          // @ts-ignore
          window.location = "/";
        }}
      >
        Go back to <span className="underline">home</span>
      </button>
    </div>
  );
}
