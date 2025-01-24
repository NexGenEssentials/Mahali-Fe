import React from "react";
import ClientPageTemplates from "../clientPageTemplates";
import Title from "../components/header/title";

function ClientSettings() {
  return (
    <ClientPageTemplates>
      <div className="flex flex-col gap-8 h-[80vh]">
        <Title name="settings" icon="material-symbols:settings" />
        <div>
          <aside></aside>
          <section></section>
        </div>
      </div>
    </ClientPageTemplates>
  );
}

export default ClientSettings;
