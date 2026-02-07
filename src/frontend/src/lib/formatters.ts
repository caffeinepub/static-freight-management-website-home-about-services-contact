/**
 * Format a timestamp (bigint nanoseconds) to a human-readable date/time string
 */
export function formatTimestamp(timestamp: bigint): string {
  // Convert nanoseconds to milliseconds
  const milliseconds = Number(timestamp / 1_000_000n);
  const date = new Date(milliseconds);
  
  // Format: "Jan 15, 2026 at 2:30 PM"
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}
