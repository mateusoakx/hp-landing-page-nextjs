import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react'

import type { CharacterInfo } from 'src/typings/characterInfo'

interface HarryPotterCharactersProps {
  characters: CharacterInfo[]
  isLoading: boolean
}

const HarryPotterCharacters = createContext({} as HarryPotterCharactersProps)
const useHarryPotterCharacter = () => useContext(HarryPotterCharacters)

const HarryPotterCharacterProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [characters, setCharacters] = useState<CharacterInfo[]>([])

  const getCharacters = async () => {
    try {
      const characters = await fetch(
        `${process.env.NEXT_PUBLIC_BASEURL}/characters`
      )
      const charactersJSon = await characters.json()
      setCharacters(charactersJSon)
      setIsLoading(false)
    } catch (error) {
      throw new Error('Unexpected API error on getting characters')
    }
  }

  useEffect(() => {
    getCharacters()
  }, [])

  return (
    <HarryPotterCharacters.Provider value={{ characters, isLoading }}>
      {children}
    </HarryPotterCharacters.Provider>
  )
}

export { useHarryPotterCharacter }
export default HarryPotterCharacterProvider
