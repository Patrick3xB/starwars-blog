import { useId } from "react";

export default function Section({ title, icon, children, defaultOpen = true }) {
  const id = useId().replace(/:/g, ""); // id seguro
  const collapseId = `collapse-${id}`;

  return (
    <div className="accordion mb-4" id={`acc-${id}`}>
      <div className="accordion-item">
        <h2 className="accordion-header" id={`heading-${id}`}>
          <button
            className={`accordion-button ${defaultOpen ? "" : "collapsed"}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${collapseId}`}
            aria-expanded={defaultOpen}
            aria-controls={collapseId}
          >
            <span className="me-2 d-flex align-items-center">
              {icon}
            </span>
            <span className="fw-bold" style={{ letterSpacing: ".5px" }}>{title}</span>
          </button>
        </h2>
        <div
          id={collapseId}
          className={`accordion-collapse collapse ${defaultOpen ? "show" : ""}`}
          aria-labelledby={`heading-${id}`}
          data-bs-parent={`#acc-${id}`}
        >
          <div className="accordion-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
