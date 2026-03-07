import { SHOP_PHONE } from '../data/constants';

export const sendWhatsApp = (msg: string): void => {
  window.open(`https://wa.me/${SHOP_PHONE}?text=${encodeURIComponent(msg)}`, '_blank');
};