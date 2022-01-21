import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import ImageSlider from '../elements/ImageSlider'

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Vende-se',
    paragraph: 'Todos itens abaixo estão à venda e o site está sempre atualizado. Combinar a retirada ou entrega por mensagem.'
  };

  let items = []

  /* Items to be sold BEGIN */
  const mesaFlipFlop = {
    price: 'R$ 400',
    name: 'Mesa dobrável Flip Flop',
    description: <p>
      Dimensões:<br />
      Comprimento: 160cm<br />
      Altura: 77cm<br />
      Largura: 42cm dobrada e 85cm aberta<br />
      <br />
      <b>2</b> unidades disponíveis<br />
      Referência: <a href="https://www.tokstok.com.br/flop-mesa-dobravel-160x80-branco-flip/p"
        target="_blank"
        rel="noopener noreferrer">
      Loja da TokStok</a>
      </p>
    ,
    images: [
      require('./../../assets/images/items/mesa flip flop (1).jpg'),
      require('./../../assets/images/items/mesa flip flop (2).jpg'),
      require('./../../assets/images/items/mesa flip flop (3).jpg'),
      require('./../../assets/images/items/mesa flip flop (4).jpg')
    ]
  };
  items.push(mesaFlipFlop)

  const paintZoom = {
    price: 'R$ 80',
    name: 'Paint Zoom',
    description: 'Borrifa a tinta como spray para uma pintura homogênea.',
    images: [
    require('./../../assets/images/items/paint zoom (1).jpg'),
    require('./../../assets/images/items/paint zoom (2).jpg')
    ]
  }
  items.push(paintZoom);

  const oculosVR = {
    price: 'R$ 20',
    name: 'Óculos de Realidade Virtual',
    description: <p>
    É um suporte para o celular, compatível com as aplicações Android para o Google Cardboard.
    Referência: <a href="https://www.americanas.com.br/produto/1961677643"
        target="_blank"
        rel="noopener noreferrer">
      Site da Americanas</a>
    </p>,
    images: [
      require('./../../assets/images/items/oculos vr.jpg')
    ]
  }
  items.push(oculosVR);

  /* Template */
  /*
  const itemName = {
    price: 'R$ 99',
    name: 'Item',
    description: 'Does something',
    images: [
    require('./../../assets/images/items/image (1).jpg'),
    require('./../../assets/images/items/image (2).jpg')
    ]
  }
  items.push(itemName);
  */


  /* Items to be sold END */

  // render items element
  let itemsDivs = []
  for (let i=0;i<items.length;i++) {
    const div = <div className="split-item">
        <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
          <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
            {items[i].price}
            </div>
          <h3 className="mt-0 mb-12">
            {items[i].name}
            </h3>
          <p className="m-0">
            {items[i].description}
            </p>
        </div>
        <div className={
          classNames(
            'carousel split-item-image center-content-mobile reveal-from-bottom',
            imageFill && 'split-item-image-fill'
          )}
          data-reveal-container=".split-item">
          <ImageSlider slides={items[i].images} />
        </div>
      </div>
    itemsDivs.push(div)
  }
  //TODO: recortar imagens para a resolução: width={528} height={396}

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            {itemsDivs}
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;