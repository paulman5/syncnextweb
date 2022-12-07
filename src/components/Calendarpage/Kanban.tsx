import React from "react";
import { useState } from "react";
import { extend } from "@syncfusion/ej2-base";
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { kanbanData, kanbanGrid } from "../../lib/KanbanData/kanbanData";
import PropertyPane from "./PropertyPane";

export default function Kanban() {
  function columnTemplate(props: { [key: string]: string }) {
    return (
      <div className="header-template-wrap">
        <div className={"header-icon e-icons " + props.keyField}></div>
        <div className="header-text">{props.headerText}</div>
      </div>
    );
  }
  return (
    <div>
      <div>
        <KanbanComponent
          id="kanban"
          keyField="Status"
          dataSource={kanbanData}
          cardSettings={{ contentField: "Summary", headerField: "Id" }}
        >
          <ColumnsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {kanbanGrid.map((item, index) => (
              <ColumnDirective
                key={index}
                {...item}
                template={columnTemplate.bind(this)}
              />
            ))}
          </ColumnsDirective>
        </KanbanComponent>
      </div>
      <div className="col-lg-3 property-section">
        <PropertyPane title="Properties">
          <table id="property" title="Properties">
            <tr>
              <td>
                <ButtonComponent
                  id="addNew"
                  className="e-btn e-dialog-add"
                  onClick={this.addClick.bind(this)}
                >
                  Add New Card
                </ButtonComponent>
              </td>
            </tr>
          </table>
        </PropertyPane>
      </div>
    </div>
  );
}
