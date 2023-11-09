import "./Empty.css";
function Empty() {
  return (
    <div className="Empty">
      <h3 className="Empty__h3">No hay tareas para mostrar</h3>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-mood-empty"
          width={60}
          height={60}
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="rgba(255, 255, 255, 0.5)"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
          <path d="M9 10l.01 0"></path>
          <path d="M15 10l.01 0"></path>
          <path d="M9 15l6 0"></path>
        </svg>
      </span>
    </div>
  );
}
export { Empty };
