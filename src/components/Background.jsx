import { Link, useLocation } from "react-router-dom";

function Background() {
  const location = useLocation();
  return (
    <div>
      <h2>Create programmatically navigable modal</h2>
      <Link to="/contact" state={{ background: location }}>
        Open Modal
      </Link>
    </div>
  );
}

export default Background;