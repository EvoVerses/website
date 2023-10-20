import {
  getLevelOfEvo,
  getNumberAvailableBreeds,
  getRarityGemHeight,
  getRarityGemWidth,
  getTypeImage,
  getGenderImage,
  getIDColor,
  getNameColor,
  getTypes
} from '@/components/helpers';
import { IEvo, Nature, Rarity, Species, Type } from '@/components/evo-card/types';

import { GenItem } from "./GenItem";

import nature from '@/assets/evo/nature_bg.svg';
import breed from '@/assets/evo/breed_bg.svg';

export interface EvoCardProps {
  multiplier?: number;
  evo: IEvo;
  useVideo?: boolean;
  baseUrl?: string;
}

export const EvoCardPng = ({ multiplier = 2, evo, useVideo = false, baseUrl = "http://localhost:3000" }: EvoCardProps) => {
  const isEvoVideo = useVideo
  const imageCDN = 'https://images.evoverses.com/card';
  return (
    <div
      style={{
        width: 236 * multiplier,
        height: 342 * multiplier,
        borderRadius: 10 * multiplier,
        position: 'relative',
        display: 'flex',
      }}
    >
      <img
        src={`${imageCDN}/background/${Type.toString(evo.attributes.primaryType)}`}
        style={{ borderRadius: 10 * multiplier, position: 'absolute', top: 0, left: 0, width: '100%', height: "100%" }}
        alt="background"
      />
      {isEvoVideo ? (
        <video
          autoPlay={true}
          src={`${imageCDN}/evo/${evo?.species}/${evo.attributes.rarity}`}
          loop
          muted={true}
          style={{
            position: 'absolute',
            width: `${236 * multiplier}px`,
            height: `${334 * multiplier}px`,
            top: `${4 * multiplier}px`,
            left: `${0}px`
          }}
        />
      ) : (
        <img
          src={`${imageCDN}/evo/${Species.toString(evo.species)}/${Rarity.toString(evo.attributes.rarity)}`}
          style={{
            position: 'absolute',
            width: `${236 * multiplier}px`,
            height: `${334 * multiplier}px`,
            top: `${4 * multiplier}px`,
            left: '0px'
          }}
        />
      )}
      <img
        style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }}
        src={`${imageCDN}/border/${Rarity.toString(evo.attributes.rarity)}`}
        alt="border"
      />
      <div
        style={{
          width: 236 * multiplier,
          height: 334 * multiplier,
          borderRadius: 10 * multiplier,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: 8 * multiplier,
          left: 0,
        }}
      >
        <div
          style={{
            fontFamily: 'Nunito',
            color: getNameColor(evo.attributes.rarity),
            textAlign: 'left',
            fontWeight: '900',
            fontSize: `${8 * multiplier}px`,
            position: 'absolute',
            top: `${30 * multiplier}px`,
            left: `${10 * multiplier}px`,
          }}
        >
          {Species.toString(evo.species)}
        </div>
        <div
          style={{
            fontFamily: 'Nunito',
            color: getNameColor(evo.attributes.rarity),
            textAlign: 'left',
            fontWeight: '900',
            fontSize: `${6 * multiplier}px`,
            position: 'absolute',
            top: `${46.6 * multiplier}px`,
            left: `${10 * multiplier}px`,
            display: 'flex'
          }}
        >
          Level {getLevelOfEvo(evo)}
        </div>
        {getTypes(evo.species).map((t, i) => Number(t) > 0 && (
          <img
            key={`type-${t}`}
            id={`type-${t}`}
            src={`${baseUrl}${getTypeImage(t).src}`} alt="Species"
            style={{
              position: 'absolute',
              width: `${9 * multiplier}px`,
              height: `${9 * multiplier}px`,
              top: `${31.5 * multiplier}px`,
              left: `${(
                74 * multiplier
              ) + (
                i * (
                  5 * multiplier
                )
              )}px`,
              display: 'flex'
            }}
          />
        ))}
        <img
          src={`${baseUrl}${getGenderImage(evo.attributes.gender)}`}
          alt="gender"
          style={{
            position: 'absolute',
            width: `${8 * multiplier}px`,
            height: `${8 * multiplier}px`,
            top: `${32 * multiplier}px`,
            left: `${63 * multiplier}px`
          }}
        />
        <div
          style={{
            fontFamily: 'Nunito',
            color: getIDColor(evo.attributes.rarity),
            textAlign: 'left',
            fontWeight: '400',
            fontSize: `${6 * multiplier}px`,
            position: 'absolute',
            top: `${325 * multiplier}px`,
            left: `${10 * multiplier}px`,
            display: "flex",
          }}
        >
          #{evo.tokenId}
        </div>
        <div
          style={{
            fontFamily: 'Nunito',
            color: '#ffffff',
            textAlign: 'right',
            fontWeight: '900',
            fontSize: `${8 * multiplier}px`,
            position: 'absolute',
            top: `${306 * multiplier}px`,
            right: `${32 * multiplier}px`,
            display: "flex",
          }}
        >
          Generation {evo.generation}
        </div>
        <img
          src={`${baseUrl}${getTypeImage(evo?.attributes.primaryType).src}`}
          style={{
            position: 'absolute',
            width: `${11 * multiplier}px`,
            height: `${11 * multiplier}px`,
            top: `${316.81 * multiplier}px`,
            left: `${220 * multiplier}px`,
            display: "flex",
          }}
          alt="Primary Type"
        />
        <div
          style={{
            width: `${178 * multiplier}px`,
            height: `${32 * multiplier}px`,
            position: 'absolute',
            backgroundColor: 'rgba(0,0,0,0.3)',
            borderRadius: `${9 * multiplier}px`,
            filter: `drop-shadow(0px ${4}px ${4}px rgba(0, 0, 0, 0.5)) drop-shadow(0px ${0}px ${15}px rgba(0, 0, 0, 0.69))`,
            top: `${253 * multiplier}px`,
            left: `${29 * multiplier}px`,
            display: 'flex',
            justifyItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <GenItem multiplier={multiplier} genName="Hp" genValue={evo.stats.health} />
          <GenItem multiplier={multiplier} genName="Def" genValue={evo.stats.defense} />
          <GenItem multiplier={multiplier} genName="Sp. Def" genValue={evo.stats.resistance} />
          <GenItem multiplier={multiplier} genName="Atk" genValue={evo.stats.attack} />
          <GenItem multiplier={multiplier} genName="Sp. Atk" genValue={evo.stats.special} />
          <GenItem multiplier={multiplier} genName="Speed" genValue={evo.stats.speed} />
        </div>
        <div
          style={{
            width: `${84 * multiplier}px`,
            height: `${16 * multiplier}px`,
            position: 'absolute',
            filter: `drop-shadow(0px ${4}px ${4}px rgba(0, 0, 0, 0.5)) drop-shadow(0px ${0}px ${15}px rgba(0, 0, 0, 0.69))`,
            top: `${237.5 * multiplier}px`,
            left: `${76 * multiplier}px`,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <img src={`${baseUrl}${nature.src}`} alt="Nature BG" />
          <p
            style={{
              textAlign: 'center',
              fontFamily: 'Nunito',
              fontWeight: 400,
              fontSize: `${6 * multiplier}px`,
              color: 'rgba(255,255,255,1)',
              position: "absolute"
            }}
          >
            Nature: {Nature.toString(evo.attributes.nature)}
          </p>
        </div>
        <div
          style={{
            width: `${84 * multiplier}px`,
            height: `${16 * multiplier}px`,
            position: 'absolute',
            filter: `drop-shadow(0px ${4}px ${4}px rgba(0, 0, 0, 0.5)) drop-shadow(0px ${0}px ${15}px rgba(0, 0, 0, 0.69))`,
            top: `${284.8 * multiplier}px`,
            left: `${76 * multiplier}px`,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <img src={`${baseUrl}${breed.src}`} alt="breed-bg" style={{ position: "absolute" }} />
          <p
            style={{
              textAlign: 'center',
              fontFamily: 'Nunito',
              fontWeight: 400,
              fontSize: `${6 * multiplier}px`,
              color: 'rgba(255,255,255,1)',
              left: `${15 * multiplier}px`,

            }}
          >
            Available Breeds: {getNumberAvailableBreeds(evo)}
          </p>
        </div>
      </div>
      {evo.attributes.rarity !== Rarity.Normal && (
        <img
          src={`${imageCDN}/rarity/${evo.attributes.rarity}`}
          alt="Rarity"
          style={{
            position: 'absolute',
            width: `${getRarityGemWidth(evo.attributes.rarity) * multiplier}px`,
            height: `${getRarityGemHeight(evo.attributes.rarity) * multiplier}px`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            top: `${getRarityGemHeight(evo.attributes.rarity) * multiplier * -0.3 + 8 * multiplier}px`,
            left: `${(
              236 * multiplier / 2
            ) - (
              getRarityGemWidth(evo.attributes.rarity) * multiplier / 2
            )}px`
          }}
        />
      )}
    </div>
  )
};
