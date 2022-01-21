import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {


  //TODO: gambiarra. I haven't found out how to use react's ref to scroll to the component
  const scrollToFeaturesSplit = (e) => {
    const fse = document.getElementsByClassName('features-split')[0];
    const offsetTop = fse.offsetTop;
    window.scroll({
      top: offsetTop,
      behavior: "smooth"
    });
  }

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Garage <span className="text-color-primary">Sale</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Estamos fazendo a limpa aqui em casa então colocamos diversos itens à venda a preços baratos.<br/>
                Na compra de múltiplos itens fazemos desconto.<br/>
                São móveis, eletrodomésticos, livros, etc.
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="button" color="primary" wideMobile onClick={scrollToFeaturesSplit}>
                    Ver itens disponíveis
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <Image
              className="has-shadow"
              src={require('./../../assets/images/garage-sale-hero.jpg')}
              alt="Hero"
              width={626}
              height={361} />
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;