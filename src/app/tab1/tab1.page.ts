import { Component, OnInit } from '@angular/core';
import { CountryService } from '../api/country.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  paises: any[] = [];
  errorMessage = '';
  filtro: any [] = [];
  filteredProducts: any [] = [];
  constructor(private coutryService: CountryService) {}

  ngOnInit (){
    this.coutryService.obtenerPaises().subscribe(
      paises => {
        this.paises = paises;

      }, err => this.errorMessage = err as any
      );
      console.log(this.paises)
  }
}
