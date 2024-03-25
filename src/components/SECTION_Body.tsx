export function SECTION_Body({
  children,
  additionalClasses,
}: {
  children?: React.ReactNode;
  additionalClasses?: string;
}) {
  return (
    <section className={`relative z-0  w-full ${additionalClasses}`}>
      {children}
    </section>
  );
}
