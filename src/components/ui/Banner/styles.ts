import styled from 'styled-components';
import tw from 'twin.macro';

export const Banner = styled.section`
  ${tw`bg-primary-100 border-b border-indigo-100`};
  ${tw`p-4`};
  ${tw`text-gray-800`};
`;

export const Content = styled.p`
  ${tw`mb-8 whitespace-pre-wrap`};
  ${tw`text-lg`};
  ${tw`leading-relaxed`};
`;
