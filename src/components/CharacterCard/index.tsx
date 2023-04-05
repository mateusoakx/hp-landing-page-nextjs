import React, { PropsWithChildren } from 'react'
// Components
import Image from 'next/image'
// Hooks
import { useDeviceInfo } from 'src/hooks/deviceInfo'
//Typings
import type { CharacterInfo } from 'src/typings/characterInfo'
// Styles
import styles from './styles.module.scss'
const CharacterCard = ({
  image,
  name,
  house,
  actor,
  alive,
  dateOfBirth,
  patronus,
  gender,
}: PropsWithChildren<CharacterInfo>) => {
  const { isMobile } = useDeviceInfo()
  return (
    <>
      <div className={`${styles['flip-container']} common-flip-container`}>
        <div className={`${styles['flipper']} common-flipper`}>
          <div className={styles['flip-front']}>
            <div>
              <h2>{name}</h2>
              <div className={styles['character-card-content']}>
                <div
                  className={`${styles['character-image-container']} ${
                    !alive ? styles['character-dead'] : ''
                  }`}
                >
                  <Image
                    src={image}
                    width={isMobile ? 150 : 200}
                    height={isMobile ? 205 : 275}
                    alt=""
                  />
                </div>
                <div className={styles['house-image-container']}>
                  <Image
                    src={`/assets/images/${house}.png`}
                    width={isMobile ? 200 : 275}
                    height={isMobile ? 250 : 345}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles['flip-back']}>
            <div>
              <h2>{name}</h2>
              <div className={styles['character-card-content']}>
                <div
                  className={`${styles['character-image-container']} ${
                    !alive ? styles['character-dead'] : ''
                  }`}
                >
                  <Image
                    src={image}
                    width={isMobile ? 150 : 200}
                    height={isMobile ? 205 : 275}
                    alt=""
                  />
                </div>
                <div className={styles['character-info-container']}>
                  <p>
                    Data de Nascimento:{' '}
                    <span>{dateOfBirth?.replace(/-/g, '/')}</span>
                  </p>
                  <p>
                    Casa: <span>{house}</span>
                  </p>
                  <p>
                    Patrono: <span>{patronus}</span>
                  </p>
                  <p>
                    {gender === 'male' ? 'Ator' : 'Atriz'}: <span>{actor}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CharacterCard
