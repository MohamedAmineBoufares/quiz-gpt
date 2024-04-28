function DotsLoader() {
  return (
    <div className="flex gap-2 justify-center items-center p-1">
      <span className="sr-only">Loading...</span>
      <div className="h-3 w-3 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-3 w-3 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-3 w-3 bg-gray-300 rounded-full animate-bounce"></div>
    </div>
  );
}

export default DotsLoader;
