import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrl: './hub.component.css'
})
export class HubComponent implements OnInit {
  key = 'bb0840e7407e95b1a40f98e94bc212f0';
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  cityInput: HTMLInputElement | null = null;
  tempElement: HTMLElement | null = null;
  descElement: HTMLElement | null = null;
  countryElement: any;
  searchBtn: HTMLButtonElement | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cityInput = document.querySelector("#city");
    this.tempElement = document.querySelector("#temperature span");
    this.descElement = document.querySelector("#description span");
    this.countryElement = document.querySelector("#country span");
    this.searchBtn = document.querySelector("#searchBtn");

    if (this.searchBtn) {
      this.searchBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (this.cityInput) {
          const city = this.cityInput.value;
          this.showWeather(city);
        }
      });
    }
  }

  showWeather(city: string) {
    const url = `${this.apiUrl}?q=${city}&APPID=${this.key}&units=metric&lang=pt_br`;
    this.http.get(url).subscribe((data: any) => {
      const temperature = data.main.temp;
      const description = data.weather[0].description;

      if (this.tempElement && this.descElement) {
        this.tempElement.textContent = `${temperature} °C`;
        this.descElement.textContent = description;
        this.countryElement.textContent = city;
      }
    }, error => {
      console.error('Erro ao buscar dados da API', error);
    });
  }
}
