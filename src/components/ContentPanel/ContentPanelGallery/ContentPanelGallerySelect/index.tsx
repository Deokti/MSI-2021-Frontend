import React, { ReactElement } from "react";
import { SelectInput, SelectInputProps } from "../../../SelectInput";

import './style.scss';

interface ContentPanelGallerySelectProps extends SelectInputProps {
  title: string
}

export function ContentPanelGallerySelect({ title, getValueByList, defaultValue, values, minWidth, maxWidth }: ContentPanelGallerySelectProps): ReactElement<ContentPanelGallerySelectProps> {
  return (
    <div className="content-panel-gallery-select">
      <h2 className="content-panel-gallery-select__title">{title}</h2>
      <SelectInput
        defaultValue={defaultValue}
        values={values}
        getValueByList={getValueByList}
        minWidth={minWidth}
        maxWidth={maxWidth}
      />
    </div>
  )
}