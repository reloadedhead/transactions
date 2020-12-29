import React from 'react';
import { IconProps } from '../../types';
import { CardIcon, DropboxIcon, FastFoodIcon, LeafIcon, MusicIcon, WalletIcon } from '../icons';

interface TransactionIconProps {
  type: string;
}

const TransactionIcon = ({ type, ...iconProps }: IconProps & TransactionIconProps) => {
  switch (type) {
    case 'dropbox':
      return <DropboxIcon {...iconProps} />;
    case 'music':
      return <MusicIcon {...iconProps} />;
    case 'atm':
      return <WalletIcon {...iconProps} />;
    case 'fastfood':
      return <FastFoodIcon {...iconProps} />;
    case 'interest':
      return <LeafIcon {...iconProps} />;
    default:
      return <CardIcon {...iconProps} />;
  }
};

export default TransactionIcon;
