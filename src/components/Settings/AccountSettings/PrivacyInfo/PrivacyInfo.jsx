import "./styles.css";
import { Link } from "react-router-dom";

const PrivacyInfo = ({ documentName, documentLink }) => {
  return (
    <>
      <div className="privacy-document">
        {documentName}
        <Link to={documentLink} className="document-link">
          Узнать больше
        </Link>
      </div>
    </>
  );
};

export default PrivacyInfo;
