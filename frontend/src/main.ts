import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app/router';
import { ToastrModule } from 'ngx-toastr';







bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(
      BrowserModule,
      CommonModule,
      BrowserAnimationsModule,
 
      ToastrModule.forRoot({
        closeButton: true,
        progressBar: true,
      }),

      RouterModule.forRoot(routes)
    ),
  ],
});
