// Hooks
import AppProvider from 'src/hooks'
import CharactersProvider, {
  useHarryPotterCharacter,
} from 'src/hooks/harryPotterCharacters'
import { breakpoints } from 'src/styles/breakpoints'
// Components
import CharacterCard from 'src/components/CharacterCard'
import { Swiper, SwiperSlide } from 'swiper/react'
// Dependencies
import { Navigation, A11y } from 'swiper'
// Styles
import styles from 'src/styles/pages/index/styles.module.scss'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/scrollbar'

const Home = () => {
  const { characters, isLoading } = useHarryPotterCharacter()

  return (
    <>
      <main className={styles['main-content']}>
        {isLoading ? (
          <h2>Carregando...</h2>
        ) : (
          <div>
            <h1>Harry Potter Characters</h1>
            <Swiper
              modules={[Navigation, A11y]}
              centeredSlides
              loop
              navigation
              slideNextClass={styles['swiper-custom-next']}
              slidePrevClass={styles['swiper-custom-prev']}
              breakpoints={{
                // when window width is >= 320px
                [breakpoints.values.xs]: {
                  slidesPerView: 1,
                },
                [breakpoints.values.lg]: {
                  slidesPerView: 1.65,
                },
              }}
            >
              {characters.map((character) => (
                <SwiperSlide
                  key={`${character.name}`}
                  className={styles['swiper-slider-custom']}
                >
                  <CharacterCard
                    name={character.name}
                    image={character.image}
                    house={character.house}
                    alive={character.alive}
                    alternate_names={character.alternate_names}
                    actor={character.actor}
                    dateOfBirth={character.dateOfBirth}
                    patronus={character.patronus}
                    gender={character.gender}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </main>
    </>
  )
}

const PageWithProvider = () => {
  return (
    <AppProvider>
      <CharactersProvider>
        <Home />
      </CharactersProvider>
    </AppProvider>
  )
}

export default PageWithProvider
