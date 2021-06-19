/* 
  defaultValue - базовое значение, которое всегда будет отображаться
  values - все значения, которые будут входить в состав отображаемого при клике 
  label - дополнительный тектовый элемент, позволяющий добавит текст вперёд и затем двуеточие
  onClick - функция при активировании которой меняется active и select открывается или закрывается
*/

export interface SelectInputProps {
  defaultValue?: string | number
  values?: Array<string | number> | null
  label?: string
  getValueByList?: (value: string | number) => void
  maxWidth?: number | string
  minWidth?: number | string
  margin?: string
}
