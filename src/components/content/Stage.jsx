import { useEffect, useRef, useState } from "react";

import "./Stage.css";

const DROP_SIZE = 64;

export default function Stage({
  items = [],
  selectedId = null,
  onDropSymbol,
  onSelect,
}) {
  const [isOver, setIsOver] = useState(false);
  const [setTarget] = useState(null);
  const moveableRef = useRef(null);

  const selected = items.find((item) => item.id === selectedId) ?? null;

  useEffect(() => {
    moveableRef.current?.updateRect();
  }, [selected]);

  function handleDragOver(e) {
    console.log("handleDragOver");
    if (!e.dataTransfer.types.includes("application/x-symbol")) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
    setIsOver(true);
  }

  function handleDragLeave(e) {
    console.log("handleDragLeave");
    if (!e.currentTarget.contains(e.relatedTarget)) setIsOver(false);
  }

  function handleDrop(e) {
    console.log("handleDrop");
    e.preventDefault();
    setIsOver(false);

    const raw = e.dataTransfer.getData("application/x-symbol");
    if (!raw) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x =
      e.clientX - rect.left + e.currentTarget.scrollLeft - DROP_SIZE / 2;
    const y = e.clientY - rect.top + e.currentTarget.scrollTop - DROP_SIZE / 2;

    onDropSymbol({
      id: crypto.randomUUID(),
      symbol: JSON.parse(raw),
      x: Math.max(0, x),
      y: Math.max(0, y),
      width: DROP_SIZE,
      height: DROP_SIZE,
      rotation: 0,
    });
  }

  function handleStagePointerDown(e) {
    console.log("handleStagePointerDown");
    if (e.target === e.currentTarget) onSelect(null);
  }

  return (
    <>
      <main
        id="stage"
        className={`stage ${isOver ? "stage-over" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onPointerDown={handleStagePointerDown}
      >
        {items.map((item) => {
          <div
            key={item.id}
            ref={item.id === selectedId ? setTarget : undefined}
            className="placed"
            onPointerDown={() => onSelect(item.id)}
            style={{
              width: item.width,
              height: item.height,
              transform: `translate(${item.x}px, ${item.y}px) rotate(${item.rotation}deg)]`,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000.svg"
              viewBox={item.symbol.viewBox}
              width="100%"
              height="100%"
              aria-label={item.symbol.name}
              role="img"
              dangerouslySetInnerHTML={{ __html: item.symbol.body }}
            ></svg>
          </div>;
        })}
        <div id="info">Nothing selected</div>
      </main>
    </>
  );
}
