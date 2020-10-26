import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './partials/Logo';
import FooterNav from './partials/FooterNav';
import FooterSocial from './partials/FooterSocial';

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

const Footer = ({
  className,
  topOuterDivider,
  topDivider,
  ...props
}) => {

  const classes = classNames(
    'site-footer center-content-mobile',
    topOuterDivider && 'has-top-divider',
    className
  );

  return (
    <footer
      {...props}
      className={classes}
    >
      <div className="container">
        <div className={
          classNames(
            'site-footer-inner',
            topDivider && 'has-top-divider'
          )}>
          <div className="footer-top ">
            <h3>Contact info</h3>
            <p>Phone: 01303029065 (Shohedul)</p>
            <p>Phone: 01703943324 (Naser)</p>
            <p>Email: shohedul350@gmail.com</p>
            <p>Address: Dhaka,Bangladesh</p>


          </div>
          <div className="footer-bottom space-between text-xxs invert-order-desktop">
            <FooterNav />
            <div className="footer-copyright">Developed by Abdullah Naser & Shohedul Islam. All right reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;