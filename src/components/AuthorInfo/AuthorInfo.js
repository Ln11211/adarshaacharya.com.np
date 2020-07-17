import React from 'react';
import { FormattedIcon, ExternalLink } from '@portfolio-ui/';
import useAvatar from '@src/hooks/use-avatar';
import Resume from './Resume';

import {
  AuthorInfoWrapper,
  Avatar,
  AvatarName,
  Info,
  Bio,
  SocialIcons,
} from './AuthorInfo.style';
import TechStack from './TechStack';

export default function AuthorInfo() {
  const avatar = useAvatar();
  return (
    <>
      <AuthorInfoWrapper>
        <Avatar fixed={avatar} alt="adarsha" />
        <Info>
          <AvatarName> Aadarsha Acharya</AvatarName>

          <a href="mailto: adarshaofficial@gmail.com" className="email">
            ✉️ adarshaofficial@gmail.com
          </a>

          <SocialIcons>
            <ExternalLink
              href="https://github.com/adarshaacharya"
              aria-label="GitHub Link"
            >
              <FormattedIcon name="GitHub" />
            </ExternalLink>
            <ExternalLink
              href="https://twitter.com/adarshatweets"
              aria-label="Twitter Link"
            >
              <FormattedIcon name="Twitter" />
            </ExternalLink>
            <ExternalLink
              href="https://www.linkedin.com/in/adarshaacharya/"
              aria-label="Linkedin Link"
            >
              <FormattedIcon name="Linkedin" />
            </ExternalLink>
          </SocialIcons>
        </Info>
      </AuthorInfoWrapper>

      <Bio>
        Hello! I’m Aadarsha Acharya, aspiring web developer based in Kathmandu
        Nepal.
      </Bio>
      <Bio>
        I'm super passionate about exploring and building open source web apps
        and tools and try to keep up with the always evolving JavaScript
        development world. Currently I'm diving in the React ecosystem with
        backend in Node.js.
      </Bio>
      <Bio>
        I'm currently pursuing Bachelor Degree (class of 2018) in Computer
        Science at
        <ExternalLink href="http://www.tribhuvan-university.edu.np/">
          {' '}
          Tribuvan University.
        </ExternalLink>
      </Bio>

      <Resume />
      <hr />
      <TechStack />
    </>
  );
}
