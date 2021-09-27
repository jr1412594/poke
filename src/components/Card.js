import React from 'react'

import { IoIosWater } from 'react-icons/io'
import { AiFillFire } from 'react-icons/ai'
import { GiHighGrass } from 'react-icons/gi'
import { GiPoisonBottle } from 'react-icons/gi'
import { AiFillBug } from 'react-icons/ai'
import { GiElectric } from 'react-icons/gi'
import { GiStarSwirl } from 'react-icons/gi'
import { GiPunchBlast } from 'react-icons/gi'
import { GiStoneBlock } from 'react-icons/gi'
import { GiGhost } from 'react-icons/gi'
import { GiFrozenOrb } from 'react-icons/gi'
import { FaDragon } from 'react-icons/fa'
import { GiSevenPointedStar } from 'react-icons/gi'
import { GiGroundbreaker } from 'react-icons/gi'

export default function Card({ pokemon }) {
    // console.log('pokemon: ', pokemon)
    const typeSpect = pokemon.types[0].type.name

    const icon = () => {
        switch(typeSpect) {
            case 'water':  return <IoIosWater fontSize='1.2em'/> 
            case 'fire': return <AiFillFire fontSize='1.2em'/>
            case 'grass': return <GiHighGrass fontSize='1.2em'/>
            case 'poison': return <GiPoisonBottle fontSize='1.2em'/>
            case 'bug': return <AiFillBug fontSize='1.2em'/>
            case 'electric': return <GiElectric fontSize='1.2em'/>
            case 'psychic': return <GiStarSwirl fontSize='1.2em'/>
            case 'fighting': return <GiPunchBlast fontSize='1.2em'/>
            case 'rock': return <GiStoneBlock fontSize='1.2em'/>
            case 'ghost': return <GiGhost fontSize='1.2em'/>
            case 'ice': return <GiFrozenOrb fontSize='1.2em'/>
            case 'dragon': return <FaDragon fontSize='1.2em'/>
            case 'normal': return <GiSevenPointedStar fontSize='1.2em'/>
            case 'ground': return <GiGroundbreaker fontSize='1.2em'/>
            default: return typeSpect
        }
    }

    return (
        <div className={typeSpect !== '' ? `pokemon-card-${ typeSpect }` : 'pokemon-card'}>
            <div className='card-head'>
                <h3 className='pokemon-name'>{ pokemon.name }</h3>
                <h3 className='pokemon-type'>{ icon() }</h3>
            </div>
            <div className='image-div'>
                <img
                    src={ pokemon.sprites.front_default}
                    alt={ pokemon.id }
                    />
            </div>
            <div className='specs'>
                <h4 className='height'>Height: { pokemon.height }</h4>
                <h4 className='weight'>Weight: { pokemon.weight }</h4>
                {/* <h4 className='weight'>id: { pokemon.id }</h4> */}
            </div>
                <h4 className='experience'>Xp: { pokemon.base_experience }</h4>
        </div>
    )
}
