type Gender = 'male' | 'female'

export type CharacterInfo = {
  name: string
  alternate_names: string[]
  house: string
  image: string
  alive: boolean
  dateOfBirth: string
  patronus: string
  actor: string
  gender: Gender
}
