import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call:</LinkTitle>
      <LinkItem href='tel:+91-8871922851'>+91-8871922851</LinkItem>

      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email:</LinkTitle>
      <LinkItem href='mailto:gauravagrawal855@gmail.com'>gauravagrawal855@gmail.com</LinkItem>

      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>

      <CompanyContainer>
        <Slogan>We all are astronaut just our space is big and blue.</Slogan>
      </CompanyContainer>

<SocialContainer>
      <SocialIcons href='https://github.com/gauravzuse'>
          <AiFillGithub size='3rem'/>
        </SocialIcons>

        <SocialIcons href='https://linkedin.com/in/gaurav-agrawal-b9951010b/'>
          <AiFillLinkedin size='3rem'/>
        </SocialIcons>
        </SocialContainer>

      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
