import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { CabeceraComponent } from './components/cabecera/cabecera.component'
import { FooterComponent } from './components/footer/footer.component'
import { AsideComponent } from './components/aside/aside.component'
import { RouterModule, Routes } from '@angular/router'
import { InicioComponent } from './components/inicio/inicio.component'
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component'
import { ServiciosComponent } from './components/servicios/servicios.component'
import { TestimoniosComponent } from './components/testimonios/testimonios.component'
import { ContactenosComponent } from './components/contactenos/contactenos.component'

import { GoogleMapsModule } from '@angular/google-maps'
import { YouTubePlayerModule } from '@angular/youtube-player'

const appRoutes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'quienes_somos', component: QuienesSomosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'testimonios', component: TestimoniosComponent },
  { path: 'contactenos', component: ContactenosComponent },
]

@NgModule({
  declarations: [
    CabeceraComponent,
    FooterComponent,
    InicioComponent,
    QuienesSomosComponent,
    ServiciosComponent,
    AsideComponent,
    TestimoniosComponent,
    ContactenosComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    YouTubePlayerModule,
    GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [CabeceraComponent, FooterComponent],
})
export class AppModule {}
