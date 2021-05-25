import React, { ReactElement } from "react";
import { SelectInput, SelectInputProps } from "../../../SelectInput";

interface ContentPanelGallerySelectProps extends SelectInputProps {
  title: string
}

export function ContentPanelGallerySelect({ title, onClick, defaultValue, values }: ContentPanelGallerySelectProps): ReactElement<ContentPanelGallerySelectProps> {
  return (
    <div className="content-panel-gallery-select">
      <h2 className="content-panel-gallery-select__title">{title}</h2>
      <SelectInput defaultValue={defaultValue} values={values} onClick={onClick} />
    </div>
  )
}