export default function SymbolReader({ symbol, size = 48 }) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={symbol.viewBox}
        width={size}
        height={size}
        aria-label={symbol.name}
        role="img"
        dangerouslySetInnerHTML={{ __html: symbol.body }}
      />
    </>
  );
}
