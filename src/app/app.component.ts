import { Component } from '@angular/core';
import { Horario } from './interfaces/hora.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-1';

  horario: Horario[] = [{ horaInicio: '6:00 a.m.', horaFin: '6:50 a.m.', seleccionado: false, reservado: false }, { horaInicio: '7:00 a.m.', horaFin: '7:50 a.m.', seleccionado: false, reservado: false }, { horaInicio: '8:00 a.m.', horaFin: '8:50 a.m.', seleccionado: false, reservado: false }, { horaInicio: '9:00 a.m.', horaFin: '9:50 a.m.', seleccionado: false, reservado: false }, { horaInicio: '10:00 a.m.', horaFin: '10:50 a.m.', seleccionado: false, reservado: false }, { horaInicio: '11:00 a.m.', horaFin: '11:50 a.m.', seleccionado: false, reservado: false }, { horaInicio: '12:00 p.m.', horaFin: '12:50 p.m.', seleccionado: false, reservado: false }, { horaInicio: '1:00 p.m.', horaFin: '1:50 p.m.', seleccionado: false, reservado: false },
  { horaInicio: '2:00 p.m.', horaFin: '2:50 p.m.', seleccionado: false, reservado: false }, { horaInicio: '3:00 p.m.', horaFin: '3:50 p.m.', seleccionado: false, reservado: false }, { horaInicio: '4:00 p.m.', horaFin: '4:50 p.m.', seleccionado: false, reservado: false }, { horaInicio: '5:00 p.m.', horaFin: '5:50 p.m.', seleccionado: false, reservado: false }, { horaInicio: '6:00 p.m.', horaFin: '6:50 p.m.', seleccionado: false, reservado: false }, { horaInicio: '7:00 p.m.', horaFin: '7:50 p.m.', seleccionado: false, reservado: false }, { horaInicio: '8:00 p.m.', horaFin: '8:50 p.m.', seleccionado: false, reservado: false }, { horaInicio: '9:00 p.m.', horaFin: '9:50 p.m.', seleccionado: false, reservado: false }
  ]

  canchasSeleccionadas: number = 0;

  marcar(indice: number) {
    const existe = this.horario.find((c, index) => {
      if (index === indice) {
        console.log(c);
      }
    });
    console.log(existe)
    this.horario[indice].seleccionado = !this.horario[indice].seleccionado;
    this.canchasSeleccionadas++;
    console.log(this.canchasSeleccionadas);

  }
}
