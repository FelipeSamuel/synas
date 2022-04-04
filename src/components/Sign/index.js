import React from 'react';

import Aries from '../../assets/Aries.svg';
import Taurus from '../../assets/Touro.svg';
import Gemini from '../../assets/Gemeos.svg';
import Cancer from '../../assets/Cancer.svg';
import Leo from '../../assets/Leao.svg';
import Virgo from '../../assets/Virgem.svg';
import Libra from '../../assets/Libra.svg';
import Scorpio from '../../assets/Escorpiao.svg';
import Sagittarius from '../../assets/Sagitario.svg';
import Capricorn from '../../assets/Capricornio.svg';
import Aquarius from '../../assets/Aquario.svg';
import Pisces from '../../assets/Peixes.svg';
import ColoredAries from '../../assets/Aries-color.svg';
import ColoredTaurus from '../../assets/Touro-color.svg';
import ColoredGemini from '../../assets/Gemeos-color.svg';
import ColoredCancer from '../../assets/Cancer-color.svg';
import ColoredLeo from '../../assets/Leao-color.svg';
import ColoredVirgo from '../../assets/Virgem-color.svg';
import ColoredLibra from '../../assets/Libra-color.svg';
import ColoredScorpio from '../../assets/Escorpiao-color.svg';
import ColoredSagittarius from '../../assets/Sagitario-color.svg';
import ColoredCapricorn from '../../assets/Capricornio-color.svg';
import ColoredAquarius from '../../assets/Aquario-color.svg';
import ColoredPisces from '../../assets/Peixes-color.svg';

const getSign = (sign, colored) => {
  switch (sign) {
    case 'Ari':
      if (colored) return ColoredAries;
      else return Aries;
    case 'Tau':
      if (colored) return ColoredTaurus;
      else return Taurus;
    case 'Gem':
      if (colored) return ColoredGemini;
      else return Gemini;
    case 'Can':
      if (colored) return ColoredCancer;
      else return Cancer;
    case 'Leo':
      if (colored) return ColoredLeo;
      else return Leo;
    case 'Vir':
      if (colored) return ColoredVirgo;
      else return Virgo;
    case 'Lib':
      if (colored) return ColoredLibra;
      else return Libra;
    case 'Sco':
      if (colored) return ColoredScorpio;
      else return Scorpio;
    case 'Sag':
      if (colored) return ColoredSagittarius;
      else return Sagittarius;
    case 'Cap':
      if (colored) return ColoredCapricorn;
      else return Capricorn;
    case 'Aqu':
      if (colored) return ColoredAquarius;
      else return Aquarius;
    case 'Pis':
      if (colored) return ColoredPisces;
      else return Pisces;
    default:
      if (colored) return ColoredAries;
      else return Aries;
  }
};

const Sign = (props) => <img src={getSign(props.sign, props.colored)} alt="" />;

export default Sign;
