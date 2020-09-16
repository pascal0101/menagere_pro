import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Quartier } from 'app/model_classe/Quartier';

@Injectable({
  providedIn: 'root'
})
export class QuartierService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  liste() {
    var data = {
      filter: {
      }
    };

    var param = {
      data: JSON.stringify(data),
      is_json: '0'
    };

    return new Promise((resolve, reject) => {
      this.http.get<{data: Quartier[]}>(`${window.localStorage.getItem('url')}Quartier`, {params: param}).subscribe(
        function (response) {
          resolve(response.data);
        },
        (error) => {
          console.log('error', error);
          resolve([]);
        },
        () => {
          console.log('Complete :>');
        }
      );
    });

  }
}
