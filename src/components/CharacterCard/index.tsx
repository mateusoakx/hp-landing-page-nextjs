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
}: PropsWithChildren<CharacterInfo>) => {
  const { isMobile } = useDeviceInfo()
  return (
    <>
      <div className={styles['character-card-container']}>
        <div>
          <h2>{name}</h2>
          <div className={styles['character-card-content']}>
            <div className={styles['character-info-container']}>
              <Image
                src={image}
                width={isMobile ? 150 : 200}
                height={isMobile ? 205 : 275}
                alt=""
              />
            </div>
            <div className={styles['character-house-container']}>
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
    </>
  )
}

export default CharacterCard
