// Data
export interface IDataState {
  VOTING: Array<object>
  BREEDS: Array<object>
  GALLERY: Array<object>
  darkTheme: boolean
}

// Management
export interface IManagementState {
  active: string | null
  controls: Array<{
    id: string,
    text: string
    backgroundColor: string
    image: string
  }>
}