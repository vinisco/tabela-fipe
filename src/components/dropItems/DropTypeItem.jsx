import React from "react";

export default function DropTypeItem({ name }) {
  return (
    <option value={name.apiName} className="dropdown-item">
      {name.nome}
    </option>
  );
}
