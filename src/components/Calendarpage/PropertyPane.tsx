import * as React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function PropertyPane(props: Props) {
  return (
    <div className="property-panel-section">
      <div className="property-panel-header">{props.title}</div>
      <div className="property-panel-content">{props.children}</div>
    </div>
  );
}
