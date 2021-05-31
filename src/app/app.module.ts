import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatIconModule,
    MatButtonModule,
    SlickCarouselModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  declarations: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private registry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.registry.addSvgIcon(
      'costar',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/CoStar.svg')
    );
  }
}
