import React, { PropsWithChildren } from 'react'
// Components
import Image from 'next/image'
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
                  <Image src={image} width={150} height={205} alt="" />
                </div>
                <div className={styles['house-image-container']}>
                  <Image
                    src={`/assets/images/${house}.png`}
                    width={200}
                    height={250}
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
                  <Image src={image} width={150} height={205} alt="" />
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
