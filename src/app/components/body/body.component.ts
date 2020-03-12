import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {

    constructor() {}

    mostrar = true;

    frase: any = {
        mensaje: 'Un gran poder conlleva una gran responsabilidad',
        autor: 'Ben Parker'
    };

    personajes: string[] = ['Hombre araña', 'Thanos', 'Dr. Octupus'];
}
