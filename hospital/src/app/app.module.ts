import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './sharepages/footer/footer.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { NavbarComponent } from './sharepages/navbar/navbar.component';
import { BookAppointmentComponent } from './pages/book-appointment/book-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    GalleryComponent,
    NavbarComponent,
    BookAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
