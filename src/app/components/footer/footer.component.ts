import { Component } from '@angular/core'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  TituloNavegacion = 'Pagina de navegación'
  ContenidoIzquierda =
    'Proyecto creado con Angular y Boostrap, diseño de una pagina sencilla que habla sobre twitter'
  ContenidoDerecha = `@Actividad semillero`
}
