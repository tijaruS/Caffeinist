import Modal from "./Modal";
import Auth from "./Auth";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Layout(props) {
  const { children } = props;
  const [showModal, setShowModal] = useState(false);
  const { globalUser, logout } = useAuth();
  const header = (
    <header>
      <div>
        <h1 className="text-gradient">CAFFEINIST</h1>
        <p>For coffee Insatiates</p>
      </div>
      {globalUser ? (
        <button onClick={logout}>
          <p>Logout</p>
        </button>
      ) : (
        <button
          onClick={() => {
            setShowModal(true);
          }}
        >
          <p>Sign up Now</p>
          <i className="fa-solid fa-mug-hot"></i>
        </button>
      )}
    </header>
  );
  const footer = (
    <footer>
      <p>
        <span className="text-gradient">CAFFEINIST</span> was made by
        Surajit{" "}
      </p>
    </footer>
  );
  function handleCloseModal() {
    setShowModal(false);
  }
  return (
    <>
      {showModal && (
        <Modal handleCloseModal={handleCloseModal}>
          {" "}
          <Auth handleCloseModal={handleCloseModal} />{" "}
        </Modal>
      )}
      {header}
      <main>{children}</main>
      {footer}
    </>
  );
}
