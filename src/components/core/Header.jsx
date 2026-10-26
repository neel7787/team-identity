import "./Header.css";

export default function Header() {
  return (
    <>
      <header>
        <button data-add="pump" className="btn btn-primary">
          + Pump
        </button>
        <button data-add="star" className="btn btn-primary">
          + Star
        </button>
        <button data-add="leaf" className="btn btn-primary">
          + Leaf
        </button>
        <button id="del" className="btn btn-primary">
          Delete
        </button>
        <span class="hint">
          Drag to move · edges/corners to scale · top dot to rotate · Shift =
          keep ratio / snap 15°
        </span>
      </header>
    </>
  );
}
