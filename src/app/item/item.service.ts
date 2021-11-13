import { Injectable } from '@angular/core'

import { Item } from './item'

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private items = new Array<Item>(
    { id: 1, name: 'EDWIN ENRIQUE', lastname: 'BARRERA CASTILLO', email: 'ebarrerac1@miumg.edu.gt', role: 'Estudiante' },
    { id: 2, name: 'FERNANDO JOSÉ ', lastname: 'BARRERA LEÓN', email: 'fbarreral@miumg.edu.gt', role: 'Estudiante' },
    { id: 3, name: 'KEVIN JORDANO', lastname: 'BARRIOS CHIN', email: 'kbarriosc8@miumg.edu.gt', role: 'Estudiante' },
    { id: 4, name: 'LESLY MARIBEL', lastname: 'CASTILLO RAMÍREZ', email: 'lcastillor4@miumg.edu.gt', role: 'Estudiante' },
    { id: 5, name: 'EFRAIN ALEXANDER', lastname: 'DE LEÓN BENITEZ', email: 'edeleonb6@miumg.edu.gt', role: 'Estudiante' },
    { id: 6, name: 'PATRICK DANIEL', lastname: 'HERNÁNDEZ CARÍAS', email: 'phernandezc4@miumg.edu.gt', role: 'Estudiante' },
    { id: 7, name: 'PERLA RUBY', lastname: 'LOPEZ CHOJ ', email: 'plopezc1@miumg.edu.gt', role: 'Estudiante' },
    { id: 8, name: 'JUAN MANUEL ', lastname: 'LÓPEZ REYES', email: 'jlopezr50@miumg.edu.gt', role: 'Estudiante' },
    { id: 9, name: 'JONATHAN ALEXANDER', lastname: 'MARIN INTERIANO', email: ' jmarini@miumg.edu.gt', role: 'Estudiante' },
    { id: 10, name: 'ALLAN ESTUARDO', lastname: 'MENDEZ AGUILAR', email: 'amendeza9@miumg.edu.gt', role: 'Estudiante' },
    { id: 11, name: 'BRYAN ALEXANDER', lastname: 'MORENO SARMIENTO', email: 'bmorenos@miumg.edu.gt', role: 'Estudiante' },
    { id: 12, name: 'DORIAN ALDAIR', lastname: 'OLIVEROS BOTZOCK', email: 'doliverosb@miumg.edu.gt', role: 'Estudiante' },
    { id: 13, name: 'JUAN PABLO ', lastname: 'ESCOBAR', email: 'jescobarc11@miumg.edu.gt', role: 'Catedrático' },
  )

  getItems(): Array<Item> {
    return this.items
  }

  getItem(id: number): Item {
    return this.items.filter((item) => item.id === id)[0]
  }
}
