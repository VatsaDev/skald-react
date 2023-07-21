import { Remarkable } from 'remarkable';

const md = new Remarkable();

export default function MarkdownPreview({ markdown }) {
  const renderedHTML = md.render(markdown);
  return (
    <div
      dangerouslySetInnerHTML={{ __html: renderedHTML }}
      className="bg-slate-100 block w-5/6 h-96 mx-auto drop-shadow-2xl rounded-lg p-8 m-2 overflow-auto"
    />
  );
}
