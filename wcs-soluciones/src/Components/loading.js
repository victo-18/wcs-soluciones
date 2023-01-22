import "../css/Loading.css";
export function Loading() {
  return (
    <div className="modal" id="modal-content">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body d-flex" id="modal-loading">
            <div
              className="spinner-border text-success"
              id="load-spinner"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
            <span id="load-status">Cargando...</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function showLoading() {
  let element = document.getElementById("modal-content");

  if (element != null)
    if (!element.classList.contains("d-flex")) element.classList.add("d-flex");
}

export function hideLoading(instant = false) {
  let element = document.getElementById("modal-content");

  setTimeout(() => {
    if (element != null)
      while (element.classList.contains("d-flex"))
        element.classList.remove("d-flex");
  }, instant ? 0 : 1000);
}
