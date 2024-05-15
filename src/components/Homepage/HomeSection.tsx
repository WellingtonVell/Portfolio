'use client';
import Image from 'next/image';
import * as S from './styles';
import MySelf from '../../../public/myself.png';

const HomeSection = () => {
  return (
    <div className='h-[100vh]' id='home'>
      <S.HomeContainer>
        <S.HomeContent>
          <S.Name className='text-center'>Wellington C. Velloso</S.Name>
          <S.Work>Full Stack Developer</S.Work>
        </S.HomeContent>
        <S.Myself>
          <Image src={MySelf} alt='Hero' width={200} />
        </S.Myself>
      </S.HomeContainer>
    </div>
  );
};

export default HomeSection;
