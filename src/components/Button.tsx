export default function Button(props: any) {
  const {
    buttonName,
    onClick,
    isLoading,
  } = props;

  return (
    <button
      className="px-2 py-1.5 border bg-red-400 text-white w-20"
      onClick={onClick}
    >
      {isLoading ? 'Loading...' : buttonName}
    </button>
  );
}