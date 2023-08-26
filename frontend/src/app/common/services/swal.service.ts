import { Injectable } from '@angular/core';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SwalService {
  constructor() {}
  callSwal(text: string, title: string, btnName: string, callBack: () => void) {
   Swal.fire({
  title: title,
  text: text,
  icon: 'warning',
  showConfirmButton:true,
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonText:"Vazgeç",
  cancelButtonColor: '#d33',
  confirmButtonText: btnName
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      'Silindi!',
      'Kategori Silindi',
      'success'
    );
    callBack();
  }
})
  }
}
