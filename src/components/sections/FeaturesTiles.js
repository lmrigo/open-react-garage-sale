import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Livros',
    paragraph: 'Abaixo você pode encontrar livros de diferentes categorias: ficção, infantil, gravidez, etc.'
  };

  /* Items to be sold BEGIN */
  let books = []


  const sunTzu = {
    price: 'R$ 5',
    title: 'A Arte da Guerra',
    author: 'Sun Tzu',
    category: 'Clássico',
    image: require('./../../assets/images/books/sunTzu.jpg')
  }
  books.push(sunTzu);

  const nanaNene = {
    price: 'R$ 5',
    title: 'Nana Nenê',
    author: 'Gary Ezzo & Robert Buckman',
    category: 'Gravidez',
    image: require('./../../assets/images/books/nanaNene.jpg')
  }
  books.push(nanaNene);

  const casaisInteligentes = {
    price: 'R$ 5',
    title: 'Casais Inteligentes Enriquecem Juntos',
    author: 'Gustavo Cerbasi',
    category: 'Auto-Ajuda Financeira',
    image: require('./../../assets/images/books/casaisInteligentes.jpg')
  }
  books.push(casaisInteligentes);

  const terapiaFinanceira = {
    price: 'R$ 5',
    title: 'Terapia Financeira',
    author: 'Reinaldo Domingos',
    category: 'Auto-Ajuda Financeira',
    image: require('./../../assets/images/books/terapiaFinanceira.jpg')
  }
  books.push(terapiaFinanceira);

  const stefanini = {
    price: 'R$ 5',
    title: 'O Filho da Crise (Stefanini)',
    author: 'Rogério Godinho',
    category: 'Biografia',
    image: require('./../../assets/images/books/stefanini.jpg')
  }
  books.push(stefanini);

  const diegoCasagrande = {
    price: 'R$ 5',
    title: 'Que Delícia Ser de Esquerda!',
    author: 'Diego Casagrande',
    category: 'Política',
    image: require('./../../assets/images/books/diegoCasagrande.jpg')
  }
  books.push(diegoCasagrande);

  const zonaMorta = {
    price: 'R$ 5',
    title: 'A Zona Morta',
    author: 'Stephen King',
    category: 'Ficção',
    image: require('./../../assets/images/books/zonaMorta.jpg')
  }
  books.push(zonaMorta);

  const tudoEventual = {
    price: 'R$ 5',
    title: 'Tudo É Eventual',
    author: 'Stephen King',
    category: 'Ficção',
    image: require('./../../assets/images/books/tudoEventual.jpg')
  }
  books.push(tudoEventual);

  const gloriaPolo = {
    price: 'R$ 5',
    title: 'Da Ilusão à Verdade',
    author: 'Gloria Polo',
    category: 'Biografia',
    image: require('./../../assets/images/books/gloriaPolo.jpg')
  }
  books.push(gloriaPolo);

  const fred = {
    price: 'R$ 10',
    title: 'Fred, o Papa-Formiga',
    author: 'Manica K. Musil',
    category: 'Infantil',
    image: require('./../../assets/images/books/fred.jpg')
  }
  books.push(fred);

  const joca = {
    price: 'R$ 10',
    title: 'Joca e Dado, uma amizade diferente',
    author: 'Henri Zylberstajn',
    category: 'Infantil',
    image: require('./../../assets/images/books/joca.jpg')
  }
  books.push(joca);

  const pensamento = {
    price: 'R$ 10',
    title: 'O Pensamento que faz a Diferença',
    author: 'John C. Maxwell',
    category: 'Auto-Ajuda',
    image: require('./../../assets/images/books/pensamento.jpg')
  }
  books.push(pensamento);

  const a50aLei = {
    price: 'R$ 10',
    title: 'A 50ª Lei',
    author: 'Robert Greene & 50 Cent',
    category: 'Auto-Ajuda',
    image: require('./../../assets/images/books/a50aLei.jpg')
  }
  books.push(a50aLei);

  const criatividade = {
    price: 'R$ 10',
    title: 'Qualidade da Criatividade Vol.1',
    author: 'Victor Mirshawka Jr.',
    category: 'Auto-Ajuda',
    image: require('./../../assets/images/books/criatividade.jpg')
  }
  books.push(criatividade);

  const cabeca = {
    price: 'R$ 10',
    title: 'A Cabeça do Brasileiro',
    author: 'Alberto Calros Almeida',
    category: 'Geral',
    image: require('./../../assets/images/books/cabeca.jpg')
  }
  books.push(cabeca);

  const esperar = {
    price: 'R$ 10',
    title: 'O Que Esperar Quando Você Está Esperando',
    author: 'Murkoff, Einsberg e Hathaway',
    category: 'Gravidez',
    image: require('./../../assets/images/books/esperar.jpg')
  }
  books.push(esperar);

  /* Template */
  /*
  const bookName = {
    price: 'R$ 99',
    title: 'book',
    author: 'John',
    category: 'ficção',
    image: require('./../../assets/images/books/bookName.jpg')
  }
  books.push(bookName);
  */

  /* Books to be sold END */

  // render books element
  let booksDivs = []
  for (let i=0;i<books.length;i++) {
    const div =  <div className="tiles-item reveal-from-bottom">
        <div className="tiles-item-inner">
          <div className="features-tiles-item-header">
            <div className="features-tiles-item-image mb-16">
              <Image
                src={books[i].image !== undefined ? books[i].image : require('./../../assets/images/feature-tile-icon-02.svg')}
                alt="Features tile icon 02"
                width={64}
                height={64} />
            </div>
          </div>
          <div className="features-tiles-item-content">
            <h4 className="mt-0 mb-8">
              {books[i].title}
              </h4>
            <p className="m-0 text-sm">
              {books[i].author}<br/>
              <i>{books[i].category}</i><br/>
              <b>{books[i].price}</b>
            </p>
          </div>
        </div>
      </div>
    booksDivs.push(div)
  }

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            {booksDivs}

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;