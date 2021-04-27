import React from "react";
import { Link } from "react-router-dom";
import { StyledNotFound } from "./NotFound.Styled";
import { useTranslation } from "react-i18next";

function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <StyledNotFound>
      <h1>{t("lost")}</h1>
      <Link to="/" className="home-link">
        <button type="button">{t("backtoHome")}</button>
      </Link>
      <img src="404.png" alt="page not found" />
    </StyledNotFound>
  );
}

export default NotFoundPage;
