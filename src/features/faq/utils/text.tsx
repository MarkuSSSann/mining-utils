import type { RangeTuple } from "fuse.js";

export function highlightMatches(
  text: string,
  regions: readonly RangeTuple[] | undefined = [],
) {
  if (!regions.length) return text;

  const chunks = [];
  let lastIndex = 0;

  // Keep whitespace outside the mark so words never appear joined visually.
  for (const [regionStart, regionEnd] of regions) {
    let start = Math.max(lastIndex, regionStart);
    let end = Math.min(text.length - 1, regionEnd);

    if (start > lastIndex) {
      chunks.push(
        <span key={`text-${lastIndex}`}>{text.slice(lastIndex, start)}</span>,
      );
    }

    if (start <= end) {
      chunks.push(
        <mark key={`mark-${start}`}>{text.slice(start, end + 1)}</mark>,
      );
      lastIndex = end + 1;
    }
  }

  if (lastIndex < text.length) {
    chunks.push(<span key={lastIndex}>{text.slice(lastIndex)}</span>);
  }

  return chunks;
}
