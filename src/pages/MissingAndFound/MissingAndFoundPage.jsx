/*
    writen by Josip Brljevic
    A component that displays the items from your fridge when you press the top right button on the Recipe page
*/

import { useNavigate } from "react-router-dom";
import "./MissingAndFoundPage.css";
import ShareModal from "../../components/SharePopup/ShareModal";

export default function MissingAndFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="page">
      <button className="cancel" onClick={() => navigate(-1)}>
        <p> &#60;</p>
        <p>Go back</p>
      </button>

      <div className="titleandshareicon">
        <p className="ingredientstitle">Ingredients</p>
        <div className="shareicon">
          <ShareModal />
        </div>
      </div>
    </div>
  );
}
