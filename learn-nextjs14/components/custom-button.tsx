export default function BrandedButton({ buttonColor, textColor, children }) {
  return (
    <button
      style={{
        "--bg-color": buttonColor,
        "--text-color": textColor,
      }}
      className="bg-(--bg-color) text-(--text-color) rounded-md px-3 py-1.5 font-medium"
    >
      {children}
    </button>
  );
}
