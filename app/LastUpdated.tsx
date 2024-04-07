export default function LastUpdated() {
  return (
    <span className="absolute right-0 bottom-0 hidden lg:block mr-4 mb-2 italic text-sm text-gray-400">
      Last Updated: {new Date().toISOString().slice(2, 10).replaceAll("-", ".")}
    </span>
  );
}
