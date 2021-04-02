import Title from 'components/Title'
import Pokemon from 'components/Pokemon'
import ButtonsSection from 'components/ButtonsSection'
import axios from 'axios'
import { GetStaticProps } from 'next'
import { PokemonPageProps } from 'types/api'

export default function Home({ results }: PokemonPageProps) {
  return (
    <>
      <Title>{`${results.name} chose you!`}</Title>
      <Pokemon title={results.name} img={results.img} />
      <ButtonsSection />
    </>
  )
}

function getRandomPokemonNumber(max: number) {
  return Math.floor(Math.random() * max)
}
function handleFirstLetterUppercase(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
function formatPokemonNumber(number: number) {
  let formattedNumber = ''
  if (number < 10) formattedNumber = '00' + number.toString()
  else if (number < 100) formattedNumber = '0' + number.toString()
  else formattedNumber = number.toString()

  console.log('formatted number result: ' + formattedNumber)
  return formattedNumber
}

export const getStaticProps: GetStaticProps = async () => {
  const pokemonNumber = getRandomPokemonNumber(386)
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`
  const { data } = await axios.get(pokemonUrl)
  const name = handleFirstLetterUppercase(data.name)
  const img =
    'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' +
    formatPokemonNumber(pokemonNumber) +
    '.png'

  const results = {
    name,
    img
  }

  console.log(results)

  return {
    props: {
      results
    }
  }
}
