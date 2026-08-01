type Row = {
  label: string;
  value: string;
};

/**
 * The datasheet-style key/value block used on the home and project pages.
 * Rows with an empty value are dropped automatically.
 */
export function SpecTable({ rows }: { rows: Row[] }) {
  const visible = rows.filter((row) => row.value);
  if (visible.length === 0) return null;

  return (
    <dl className="divide-y divide-line border-y border-line">
      {visible.map((row) => (
        <div
          key={row.label}
          className="flex flex-col gap-1 py-3 sm:flex-row sm:gap-6"
        >
          <dt className="label shrink-0 pt-0.5 sm:w-32">{row.label}</dt>
          <dd className="text-sm text-fg">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
