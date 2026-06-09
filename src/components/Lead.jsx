/** A list item with a bold steel lead-in term: "Term: description". */
export default function Lead({ term, children }) {
  return (
    <li>
      <span className="font-semibold text-steel">{term}:</span>{" "}
      <span className="text-gray-700">{children}</span>
    </li>
  );
}
