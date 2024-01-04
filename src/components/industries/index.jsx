import BreadcrumbArea from "@/src/common/breadcrumb-area";
import React from "react";
import SingleCard from "./SingleCard";
function Industries() {
  return (
    <div style={{ "--tp-heading-primary": "var(--tp-theme-vogue)" }}>
      <BreadcrumbArea
        // acive_menu="Software Engineering"
        // slug={slug}
        title="Industries"
        backColor="#aeffd4"
        backImage="/assets/img/breadcrumb/bg_2.png"
        theme="greenTheme"
      />
      <SingleCard />
    </div>
  );
}

export default Industries;
