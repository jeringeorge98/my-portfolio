import styled from 'styled-components';
import tw from 'twin.macro';

export interface StyledProps {
  section?: boolean;
}

export const Container = styled.div<StyledProps>`
  ${tw`flex flex-wrap max-w-screen-lg w-full mx-auto p-4`};
  ${({ section }) => section && tw`py-8 sm:py-16`};
`;
