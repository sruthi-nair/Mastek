import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BookAppointmentComponent } from './pages/book-appointment/book-appointment.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  // {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent,
  //  children:[{path:'book_appointment',component:BookAppointmentComponent}]
  },
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'book-appointment',component:BookAppointmentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
