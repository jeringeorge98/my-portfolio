import styled from 'styled-components';
import tw from 'twin.macro';
import { motion } from 'framer-motion';

export interface StyledProps {
  primary?: boolean;
  block?: boolean;
}

export const Button = styled(motion.button)<StyledProps>`
  outline: none !important;
  ${tw`py-2 px-8 rounded-full border border-primary-300 text-indigo-900`};

  ${({ primary }) => (primary ? tw`bg-primary-300 text-white` : tw`text-indigo-600`)};

  ${({ block }) => block && tw`w-full`};
`;
