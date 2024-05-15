'use client';
import { Github, Gmail, LinkedIn } from '@/icons';
import * as S from './styles';
import Link from 'next/link';

const Text =
  'Hey there, don`t hesitate to reach out! I`m always open to connecting with fellow enthusiasts, collaborators, or anyone who shares a passion for technology.';

const Contact = () => {
  return (
    <section id='contact'>
      <S.ContactContainer>
        <S.Header>
          <S.Title>Contact</S.Title>
          <S.Text>{Text}</S.Text>

          <S.Socials>
            <Link href='mailto:wellingtonvell@gmail.com'>
              <Gmail color='#ff4242' />
            </Link>
            <S.Social>Email:</S.Social>
            <S.Link>
              <Link href='mailto:wellingtonvell@gmail.com'>wellingtonvell@gmail.com</Link>
            </S.Link>
          </S.Socials>

          <S.Socials>
            <Link href='https://www.linkedin.com/in/wellington-costavell' target='_blank'>
              <LinkedIn color='#0077B5' />
            </Link>
            <S.Social>Linkedin:</S.Social>
            <S.Link>
              <Link href='https://www.linkedin.com/in/wellington-costavell' target='_blank'>
                Wellington Costa
              </Link>
            </S.Link>
          </S.Socials>

          <S.Socials>
            <Link href='https://github.com/WellingtonVell' target='_blank'>
              <Github color='#646464' />
            </Link>
            <S.Social>Github:</S.Social>
            <S.Link>
              <Link href='https://github.com/WellingtonVell' target='_blank'>
                WellingtonVell
              </Link>
            </S.Link>
          </S.Socials>
        </S.Header>
      </S.ContactContainer>
    </section>
  );
};

export default Contact;
