import { Link } from "react-router";

function TextWithLink({ text, linkText, url }) {
  return (
    <p className="text-sm text-gray-500">
      {text} 
      <Link className="text-sky-500" to={url}>{linkText}</Link>
    </p>
  )
}

export default TextWithLink;