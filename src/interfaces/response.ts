export interface IResponseVoting {
  breeds: [
    {
      bred_for: string
      breed_group: string
      height: {
        imperial: string
        metric: string
      }
      id: number
      life_span: string
      name: string
      reference_image_id: string
      temperament: string
      weight: {
        imperial: string
        metric: string
      }
    }
  ]
  height: number
  id: string
  url: string
  width: number
}

export interface IResponseHistoryVoting {
  id: number
  image_id: string
  sub_id: null | string
  created_at: string
  value: number
  country_code: string
}

export interface IResponseBreed {
  bred_for: string
  breed_group: string
  height: {
    imperial: string
    metric: string
  }
  id: number
  image: {
    height: number
    id: string
    url: string
    width: number
  }
  life_span: string
  name: string
  origin: string
  reference_image_id: string
  temperament: string
  weight: {
    imperial: string
    metric: string
  }
}