import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

const Wrapper = styled.div`
  ${tw`flex justify-center flex-col md:mb-10 md:flex-row`}
`;

const ImgWrapper = tw.div`w-full h-full block flex justify-center md:w-5/12 lg:w-1/3 lg:pl-16 xl:w-2/5 `;

const CardBase = styled.div`
  ${tw`flex flex-col justify-center items-center text-2xl md:w-7/12 md:ml-8 lg:w-2/3 lg:pl-10 xl:w-3/5 md:flex md:flex-row xl:ml-4 `}
`;

const PokemonWrapper = tw.div`md:w-1/2 md:flex md:flex-col lg:w-2/5 xl:w-1/4`;

const Name = styled.div`
  ${tw`flex justify-center`};
  p {
    ${tw`mx-1 font-semibold`}
  }
`;

const PTWrapper = tw.div`md:px-4 lg:px-0`;

const PokemonType = styled.p`
  ${tw`flex justify-center text-white p-4 rounded-full`}
`;

const PokemonMeta = styled.div`
  ${tw` lg:w-3/5 xl:w-3/4 lg:pl-16 xl:pl-32`}
  p {
    ${tw`-mt-2`}
  }
`;

const PMTitle = tw.div`flex justify-center -mt-4`;

export function Pokemon({ pokemon }) {
  const Colors = {
    Bug: "#38A169",
    Dark: "#1A202C",
    Dragon: "#805AD5",
    Electric: "#F6E05E",
    Fighting: "#C53030",
    Fairy: "#F687B3",
    Fire: "#ED8936",
    Flying: "#63B3ED",
    Ghost: "#434190",
    Grass: `#22543D`,
    Ground: "#B7791F",
    Ice: "#90CDF4",
    Normal: "#a8a878",
    Poison: "#a040a0",
    Psychic: "#ED64A6",
    Rock: "#744210",
    Steel: "#A0AEC0",
    Water: "#3182CE",
  };

  console.log(pokemon.types);

  return (
    <Wrapper>
      <ImgWrapper>
        <img src={pokemon.image} alt={pokemon.name} />
      </ImgWrapper>
      <CardBase>
        <PokemonWrapper>
          <Name>
            <p>{pokemon.number}</p>
            <p>{pokemon.name}</p>
          </Name>
          <PTWrapper>
            <PokemonType style={{ backgroundColor: Colors[pokemon.types[0]] }}>
              {pokemon.types[0]}
            </PokemonType>
            <PokemonType style={{ backgroundColor: Colors[pokemon.types[1]] }}>
              {pokemon.types[1]}
            </PokemonType>
          </PTWrapper>
        </PokemonWrapper>
        <PokemonMeta>
          <PMTitle>
            <h4>Weight</h4>
          </PMTitle>
          <PMTitle>
            {pokemon.weight.minimum} - {pokemon.weight.maximum}
          </PMTitle>
          <PMTitle>
            <h4>Height</h4>
          </PMTitle>
          <PMTitle>
            {pokemon.height.minimum} - {pokemon.height.maximum}
          </PMTitle>
        </PokemonMeta>
      </CardBase>
    </Wrapper>
  );
}

export default Pokemon;
