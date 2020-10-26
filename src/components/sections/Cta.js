import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import FooterSocial from '../layout/partials/FooterSocial';
import NasersocialLink from '../layout/partials/NasersocialLink'
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
    title: 'About Developer',
    paragraph: 'We develop solutions that make everything work perfectly in industry.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image  mb-16">
                    <Image
                    style={{borderRadius:"50%"}}
                    className="rounded-circle"
                      src="https://avatars3.githubusercontent.com/u/52525487?s=460&u=2cd18248d2efceecea869263a8fe90877d8b012e&v=4"
                      alt="Features tile icon 01"
                      width={150}
                      height={150} 
  
                      />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                <p className="mt-0 mb-8">
                  Md Shohedul Islam
                    </p>
                  <h6 className="mt-0 ">
                  Full Stack web application developer(MERN).
                    </h6>
                  <p className="m-0 text-sm">
                  <FooterSocial/>
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                       style={{borderRadius:"50%"}}
                      src="https://avatars1.githubusercontent.com/u/35170851?s=460&u=46f345829c076aa74976b2e516f063a86b728a27&v=4"
                      alt="Features tile icon 02"
                      width={150}
                      height={150} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                <p className="mt-0 ">
                  Abdullah Naser
                    </p>
                  <h6 className="mt-0 mb-8">
                  Full Stack web application developer(MERN).
                    </h6>
                  <p className="m-0 text-sm">
                 <NasersocialLink/>
                    </p>
                </div>
              </div>
            </div>

          

      



          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;