import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../../models/book/book';

@Injectable({
  providedIn: 'root'
})

export class BooksDataService {

  constructor() { }

  getBooks():Observable<Book[]> {
    let bookArray:Array<Book> = [
      {
        id: '0',
        cover: '../../../../assets/images/books/0.jpg',
        title: 'A Teoria de Tudo',
        author: 'Hawking, Jane',
        price: 19.99,
        rating: 5,
        genre: 'biografia',
        description: 'A história de Stephen Hawking é contada pela luz da genialidade e do amor que não vê obstáculos...',
        year: 1999,
        dimensions: '23.8 x 16.8 x 3.2 cm',
        coverType: 'Comum',
        popular: true,
        new: false,
        promotion: false,
      },
      {
        id: '1',
        cover: '../../../../assets/images/books/1.jpg',
        title: 'Harry Potter e a Pedra Filosofal',
        author: 'Rowling, J. K.',
        price: 29.99,
        rating: 4.9,
        genre: 'fantasia',
        description: 'Harry Potter, um órfão criado pelos tios que descobre, em seu décimo primeiro aniversário, que é um bruxo...',
        year: 1997,
        dimensions: '23 x 16 x 1.8 cm',
        coverType: 'Dura',
        popular: true,
        new: false,
        promotion: false,
      },
      {
        id: '2',
        cover: '../../../../assets/images/books/2.jpg',
        title: 'Como Star Wars Conquistou o Universo',
        author: 'Taylor, Chris',
        price: 49.99,
        rating: 4.8,
        genre: 'biografia',
        description: 'O passado, presente e o futuro da franquia multibilionária...',
        year: 2014,
        dimensions: '23 x 16 x 3.5 cm',
        coverType: 'Comum',
        popular: true,
        new: false,
        promotion: false,
      },
      {
        id: '3',
        cover: '../../../../assets/images/books/3.jpg',
        title: '1984',
        author: 'Orwell, George',
        price: 39.99,
        rating: 4.8,
        genre: 'distopia',
        description: 'Winston Smith, vive numa sociedade sob regime totalitário, onde é funcionário público e atua no "Ministério da Verdade", cuja função é criar mentiras históricas a fim de trazer uma visão positiva para a liderança...',
        year: 1949,
        dimensions: '16 x 23 x 1.7 cm',
        coverType: 'Dura',
        popular: true,
        new: false,
        promotion: false,
      },
      {
        id: '4',
        cover: '../../../../assets/images/books/4.jpg',
        title: 'A Revolução dos Bichos',
        author: 'Orwell, George',
        price: 19.99,
        rating: 4.7,
        genre: 'distopia',
        description: 'Narra a insurreição dos animais de uma granja contra seus donos. Progressivamente, porém, a revolução degenera numa tirania ainda mais opressiva que a dos humanos...',
        year: 1945,
        dimensions: '13.7 x 21.0 x 1.3 cm',
        coverType: 'Comum',
        popular: true,
        new: false,
        promotion: false,
      },
      {
        id: '5',
        cover: '../../../../assets/images/books/5.jpg',
        title: 'A Garota do Lago',
        author: 'Donlea, Charlie',
        price: 19.99,
        rating: 4.6,
        genre: 'suspense',
        description: 'Summit Lake, uma pequena cidade entre montanhas, é esse tipo de lugar, bucólico e com encantadoras casas dispostas à beira de um longo trecho de água intocada...',
        year: 2016,
        dimensions: '22.4 x 15.6 x 2.8 cm',
        coverType: 'Comum',
        popular: true,
        new: false,
        promotion: false,
      },
      {
        id: '6',
        cover: '../../../../assets/images/books/6.jpg',
        title: 'Uma Mulher na Escuridão',
        author: 'Donlea, Charlie',
        price: 34.99,
        rating: 4.8,
        genre: 'suspense',
        description: 'Ao limpar o escritório de seu pai, falecido há uma semana, a investigadora forense Rory encontra pistas e documentos ocultados da justiça que a fazem mergulhar num caso sem solução ocorrido 40 anos atrás...',
        year: 2019,
        dimensions: '22.6 x 16 x 2.4 cm',
        coverType: 'Comum',
        popular: false,
        new: true,
        promotion: false,
      },
      {
        id: '7',
        cover: '../../../../assets/images/books/7.jpg',
        title: 'Procure nas Cinzas',
        author: 'Donlea, Charlie',
        price: 39.99,
        rating: 4.8,
        genre: 'suspense',
        description: 'O ataque terrorista às Torres Gêmeas do World Trade Center chocou o mundo vinte anos atrás, mas, para uma família, esse atentado teve um gosto mais amargo...',
        year: 2021,
        dimensions: '23 x 4 x 16 cm',
        coverType: 'Comum',
        popular: false,
        new: true,
        promotion: false,
      },
      {
        id: '8',
        cover: '../../../../assets/images/books/8.jpg',
        title: 'A Paciente Silenciosa',
        author: 'Michaelides, Alex',
        price: 29.99,
        rating: 4.8,
        genre: 'suspense',
        description: 'Alicia Berenson tinha uma vida perfeita. Ela era uma pintora famosa casada com um fotógrafo bem-sucedido e morava numa área nobre de Londres que dá para o parque de Hampstead Heath...',
        year: 2019,
        dimensions: '22.8 x 15.6 x 1.8 cm',
        coverType: 'Comum',
        popular: false,
        new: true,
        promotion: false,
      },
      {
        id: '9',
        cover: '../../../../assets/images/books/9.jpg',
        title: 'O Conto da Aia',
        author: 'Atwood, Margaret',
        price: 29.99,
        rating: 4.7,
        genre: 'distopia',
        description: 'Situado na Nova Inglaterra de um futuro próximo, que agora é parte de uma teonomia totalitária fundamentalista cristã que derrubou o governo dos Estados Unidos...',
        year: 1985,
        dimensions: '21 x 14 x 2 cm',
        coverType: 'Comum',
        popular: true,
        new: false,
        promotion: false,
      },
      {
        id: '10',
        cover: '../../../../assets/images/books/10.jpg',
        title: 'Os Testamentos',
        author: 'Atwood, Margaret',
        price: 35.99,
        rating: 4.9,
        genre: 'distopia',
        description: 'O romance é escrito 15 anos depois dos acontecimentos de The Handmaids Tale...',
        year: 2019,
        dimensions: '14 x 21 x 3 cm',
        coverType: 'Comum',
        popular: false,
        new: true,
        promotion: false,
      },
      {
        id: '11',
        cover: '../../../../assets/images/books/11.jpg',
        title: 'Orgulho e Preconceito',
        author: 'Austen, Jane',
        price: 19.99,
        rating: 4.8,
        genre: 'romance',
        description: 'Romance de Jane Austen que conta a história de Elizabeth Bennet, heroína irresistível e seu pretendente aristocrático, o sr. Darcy...',
        year: 1813,
        dimensions: '16 x 23 cm',
        coverType: 'Comum',
        popular: true,
        new: false,
        promotion: false,
      },
    ]
    return of(bookArray)
  }
}