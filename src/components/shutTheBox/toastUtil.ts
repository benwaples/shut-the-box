import { toast } from 'react-toastify';

function invalidPlayToast() {
  toast('Invalid PLay', {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

export default invalidPlayToast;
