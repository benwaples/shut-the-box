import { toast } from 'react-toastify';

export function invalidPlayToast(): void {
  toast('Invalid Play', {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

export function playedBlocksToast(playedNumbers: number[]): void {
  const customMessage = `you just played ${playedNumbers}`;
  toast(customMessage, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
