import { Car } from './interface';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const models = [
    {
      model: 'e-tron',
      name: 'Audi e-tron',
      buyPrice: 69100,
      leasingPrice: 514,
      imageUrl: [
        'https://sx-content-labs.sixt.io/audi-e-tron-5d-silber-2019.png',
        'https://cdn.prod.www.spiegel.de/images/77a42f92-0001-0004-0000-000001339594_w996_r1.77_fpx28.67_fpy54.99.jpg',
        'https://www.automobil-produktion.de/files/upload/post/apr/2018/07/193273/id-01-audi-etron-interieur-.jpg'
      ],
      id: 1,
      priceRange: 85000,
      extras: 691,
      motor: [
        {
          name: '50 quattro',
          price: 69100,
          leasing: 514,
          fuel1: 'Elekto',
          fuel2: '/',
          lineType: 'Basis'
        },
        {
          name: 'advanced 50 quattro',
          price: 70500,
          leasing: 540,
          fuel1: 'Elekto',
          fuel2: '/',
          lineType: 'advanced'
        },
        {
          name: 'S line 50 quattro',
          price: 72000,
          leasing: 560,
          fuel1: 'Elekto',
          fuel2: '/',
          lineType: 'sLine'
        },
        {
          name: '55 quattro',
          price: 81000,
          leasing: 600,
          fuel1: 'Elekto',
          fuel2: '/',
          lineType: 'Basis'
        },
        {
          name: 'advanced 55 quattro',
          price: 82200,
          leasing: 610,
          fuel1: 'Elekto',
          fuel2: '/',
          lineType: 'advanced'
        },
        {
          name: 'advanced 55 quattro',
          price: 83700,
          leasing: 620,
          fuel1: 'Elekto',
          fuel2: '/',
          lineType: 'advanced'
        },
      ]
    },
    {
      model: 'e-tron',
      name: 'Audi e-tron Sportback',
      buyPrice: 71350,
      leasingPrice: 531,
      imageUrl: [
        'https://cdn.motor1.com/images/mgl/b22Br/s1/audi-e-tron-sportback.jpg'
      ],
      id: 2,
      priceRange: 85000,
      extras: 713,
      motor: [
        {
          name: '50 quattro',
          price: 71350,
          leasing: 531,
          fuel1: 'Elekto',
          fuel2: '/',
          lineType: 'Basis'
        },
        {
          name: 'advanced 50 quattro',
          price: 72750,
          leasing: 545,
          fuel1: 'Elekto',
          fuel2: '/',
          lineType: 'advanced'
        },
        {
          name: 'S line 50 quattro',
          price: 74350,
          leasing: 565,
          fuel1: 'Elekto',
          fuel2: '/',
          lineType: 'sLine'
        },
        {
          name: '55 quattro',
          price: 83550,
          leasing: 630,
          fuel1: 'Elekto',
          fuel2: '/',
          lineType: 'Basis'
        },
        {
          name: 'advanced 55 quattro',
          price: 85055,
          leasing: 650,
          fuel1: 'Elekto',
          fuel2: '/',
          lineType: 'advanced'
        },
        {
          name: 'advanced 55 quattro',
          price: 86700,
          leasing: 660,
          fuel1: 'Elekto',
          fuel2: '/',
          lineType: 'advanced'
        },
      ]
    },
    {
      model: 'A1',
      name: 'Sportback',
      buyPrice: 20300,
      leasingPrice: 161,
      imageUrl: [''],
      id: 3,
      priceRange: 25000,
      extras: 500,
      motor: [
        {
          name: '25 TFSI Schaltgetriebe',
          price: 20300,
          leasing: 161,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: 'advanced 25 TFSI Schaltgetriebe',
          price: 21201,
          leasing: 170,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: '30 TFSI Schaltgetriebe',
          price: 21250,
          leasing: 172,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: '25 TFSI S tronic',
          price: 21689,
          leasing: 175,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: 'S line 25 TFSI Schaltgetriebe',
          price: 22273,
          leasing: 180,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'advanced 30 TFSI Schaltgetriebe',
          price: 22420,
          leasing: 181,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: 'advanced 25 TFSI S tronic',
          price: 22858,
          leasing: 184,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: '30 TFSI S tronic',
          price: 22907,
          leasing: 186,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: 'S line 30 TFSI Schaltgetriebe',
          price: 23492,
          leasing: 188,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'S line 25 TFSI S tronic',
          price: 23931,
          leasing: 190,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'advanced 30 TFSI S tronic',
          price: 24077,
          leasing: 193,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: '35 TFSI S tronic',
          price: 25100,
          leasing: 196,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: 'S line 30 TFSI S tronic',
          price: 25149,
          leasing: 198,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'advanced 35 TFSI S tronic',
          price: 26270,
          leasing: 225,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: 'S line 35 TFSI S tronic',
          price: 27342,
          leasing: 230,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'edition one 30 TFSI Schaltgetriebe',
          price: 27869,
          leasing: 240,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'editionOne'
        },
        {
          name: 'S line 40 TFSI S tronic',
          price: 29048,
          leasing: 255,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'edition one 30 TFSI S tronic',
          price: 29526,
          leasing: 260,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'editionOne'
        },
        {
          name: 'edition one 35 TFSI S tronic',
          price: 30744,
          leasing: 270,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'editionOne'
        },
        {
          name: 'edition one 40 TFSI S tronic',
          price: 31768,
          leasing: 284,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'editionOne'
        },
      ]
    },
    {
      model: 'A1',
      name: 'citycarver',
      buyPrice: 22100,
      leasingPrice: 169,
      imageUrl: [''],
      id: 4,
      priceRange: 25000,
      extras: 500,
      motor: [
        {
          name: '25 TFSI Schaltgetriebe',
          price: 20300,
          leasing: 161,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: 'advanced 25 TFSI Schaltgetriebe',
          price: 21201,
          leasing: 170,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: '30 TFSI Schaltgetriebe',
          price: 21250,
          leasing: 172,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: '25 TFSI S tronic',
          price: 21689,
          leasing: 175,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: 'S line 25 TFSI Schaltgetriebe',
          price: 22273,
          leasing: 180,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'advanced 30 TFSI Schaltgetriebe',
          price: 22420,
          leasing: 181,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: 'advanced 25 TFSI S tronic',
          price: 22858,
          leasing: 184,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: '30 TFSI S tronic',
          price: 22907,
          leasing: 186,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: 'S line 30 TFSI Schaltgetriebe',
          price: 23492,
          leasing: 188,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'S line 25 TFSI S tronic',
          price: 23931,
          leasing: 190,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'advanced 30 TFSI S tronic',
          price: 24077,
          leasing: 193,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: '35 TFSI S tronic',
          price: 25100,
          leasing: 196,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: 'S line 30 TFSI S tronic',
          price: 25149,
          leasing: 198,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'advanced 35 TFSI S tronic',
          price: 26270,
          leasing: 225,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: 'S line 35 TFSI S tronic',
          price: 27342,
          leasing: 230,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'edition one 30 TFSI Schaltgetriebe',
          price: 27869,
          leasing: 240,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'editionOne'
        },
        {
          name: 'S line 40 TFSI S tronic',
          price: 29048,
          leasing: 255,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'edition one 30 TFSI S tronic',
          price: 29526,
          leasing: 260,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'editionOne'
        },
        {
          name: 'edition one 35 TFSI S tronic',
          price: 30744,
          leasing: 270,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'editionOne'
        },
        {
          name: 'edition one 40 TFSI S tronic',
          price: 31768,
          leasing: 284,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'editionOne'
        },
      ]
    },
    {
      model: 'A3',
      name: 'Sportback',
      buyPrice: 26800,
      leasingPrice: 205,
      imageUrl: [''],
      id: 5,
      priceRange: 55000,
      extras: 500,
      motor: [
        {
          name: '25 TFSI Schaltgetriebe',
          price: 20300,
          leasing: 161,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: 'advanced 25 TFSI Schaltgetriebe',
          price: 21201,
          leasing: 170,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: '30 TFSI Schaltgetriebe',
          price: 21250,
          leasing: 172,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: '25 TFSI S tronic',
          price: 21689,
          leasing: 175,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: 'S line 25 TFSI Schaltgetriebe',
          price: 22273,
          leasing: 180,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'advanced 30 TFSI Schaltgetriebe',
          price: 22420,
          leasing: 181,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: 'advanced 25 TFSI S tronic',
          price: 22858,
          leasing: 184,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: '30 TFSI S tronic',
          price: 22907,
          leasing: 186,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: 'S line 30 TFSI Schaltgetriebe',
          price: 23492,
          leasing: 188,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'S line 25 TFSI S tronic',
          price: 23931,
          leasing: 190,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'advanced 30 TFSI S tronic',
          price: 24077,
          leasing: 193,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: '35 TFSI S tronic',
          price: 25100,
          leasing: 196,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: 'S line 30 TFSI S tronic',
          price: 25149,
          leasing: 198,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'advanced 35 TFSI S tronic',
          price: 26270,
          leasing: 225,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: 'S line 35 TFSI S tronic',
          price: 27342,
          leasing: 230,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'edition one 30 TFSI Schaltgetriebe',
          price: 27869,
          leasing: 240,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'editionOne'
        },
        {
          name: 'S line 40 TFSI S tronic',
          price: 29048,
          leasing: 255,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'edition one 30 TFSI S tronic',
          price: 29526,
          leasing: 260,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'editionOne'
        },
        {
          name: 'edition one 35 TFSI S tronic',
          price: 30744,
          leasing: 270,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'editionOne'
        },
        {
          name: 'edition one 40 TFSI S tronic',
          price: 31768,
          leasing: 284,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'editionOne'
        },
      ]
    },
    /// motor pricing is applied till here
    {
      model: 'A3',
      name: 'Sportback e-tron',
      buyPrice: 37900,
      leasingPrice: 269,
      imageUrl: [''],
      id: 6,
      priceRange: 55000,
      extras: 500,
    },
    {
      model: 'A3',
      name: 'Limousine',
      buyPrice: 27700,
      leasingPrice: 212,
      imageUrl: [''],
      id: 7,
      priceRange: 55000,
      extras: 500,
      motor: [
        {
          name: '25 TFSI Schaltgetriebe',
          price: 20300,
          leasing: 161,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: 'advanced 25 TFSI Schaltgetriebe',
          price: 21201,
          leasing: 170,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: '30 TFSI Schaltgetriebe',
          price: 21250,
          leasing: 172,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: '25 TFSI S tronic',
          price: 21689,
          leasing: 175,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: 'S line 25 TFSI Schaltgetriebe',
          price: 22273,
          leasing: 180,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'advanced 30 TFSI Schaltgetriebe',
          price: 22420,
          leasing: 181,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: 'advanced 25 TFSI S tronic',
          price: 22858,
          leasing: 184,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: '30 TFSI S tronic',
          price: 22907,
          leasing: 186,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: 'S line 30 TFSI Schaltgetriebe',
          price: 23492,
          leasing: 188,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'S line 25 TFSI S tronic',
          price: 23931,
          leasing: 190,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'advanced 30 TFSI S tronic',
          price: 24077,
          leasing: 193,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: '35 TFSI S tronic',
          price: 25100,
          leasing: 196,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: 'S line 30 TFSI S tronic',
          price: 25149,
          leasing: 198,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'advanced 35 TFSI S tronic',
          price: 26270,
          leasing: 225,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: 'S line 35 TFSI S tronic',
          price: 27342,
          leasing: 230,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'edition one 30 TFSI Schaltgetriebe',
          price: 27869,
          leasing: 240,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'editionOne'
        },
        {
          name: 'S line 40 TFSI S tronic',
          price: 29048,
          leasing: 255,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'edition one 30 TFSI S tronic',
          price: 29526,
          leasing: 260,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'editionOne'
        },
        {
          name: 'edition one 35 TFSI S tronic',
          price: 30744,
          leasing: 270,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'editionOne'
        },
        {
          name: 'edition one 40 TFSI S tronic',
          price: 31768,
          leasing: 284,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'editionOne'
        },
      ]
    },
    {
      model: 'A3',
      name: 'Cabriolet',
      buyPrice: 34600,
      leasingPrice: 239,
      imageUrl: [''],
      id: 8,
      priceRange: 55000,
      extras: 500,
      motor: [
        {
          name: '25 TFSI Schaltgetriebe',
          price: 20300,
          leasing: 161,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: 'advanced 25 TFSI Schaltgetriebe',
          price: 21201,
          leasing: 170,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: '30 TFSI Schaltgetriebe',
          price: 21250,
          leasing: 172,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: '25 TFSI S tronic',
          price: 21689,
          leasing: 175,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: 'S line 25 TFSI Schaltgetriebe',
          price: 22273,
          leasing: 180,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'advanced 30 TFSI Schaltgetriebe',
          price: 22420,
          leasing: 181,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: 'advanced 25 TFSI S tronic',
          price: 22858,
          leasing: 184,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: '30 TFSI S tronic',
          price: 22907,
          leasing: 186,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: 'S line 30 TFSI Schaltgetriebe',
          price: 23492,
          leasing: 188,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'S line 25 TFSI S tronic',
          price: 23931,
          leasing: 190,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'advanced 30 TFSI S tronic',
          price: 24077,
          leasing: 193,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: '35 TFSI S tronic',
          price: 25100,
          leasing: 196,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: 'S line 30 TFSI S tronic',
          price: 25149,
          leasing: 198,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'advanced 35 TFSI S tronic',
          price: 26270,
          leasing: 225,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: 'S line 35 TFSI S tronic',
          price: 27342,
          leasing: 230,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'edition one 30 TFSI Schaltgetriebe',
          price: 27869,
          leasing: 240,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'editionOne'
        },
        {
          name: 'S line 40 TFSI S tronic',
          price: 29048,
          leasing: 255,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'edition one 30 TFSI S tronic',
          price: 29526,
          leasing: 260,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'editionOne'
        },
        {
          name: 'edition one 35 TFSI S tronic',
          price: 30744,
          leasing: 270,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'editionOne'
        },
        {
          name: 'edition one 40 TFSI S tronic',
          price: 31768,
          leasing: 284,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'editionOne'
        },
      ]
    },
    {
      model: 'S3',
      name: 'Cabriolet TSFI',
      buyPrice: 52300,
      leasingPrice: 404,
      imageUrl: [''],
      id: 9,
      priceRange: 55000,
      extras: 500
    },
    {
      model: 'RS 3',
      name: 'Sportback',
      buyPrice: 56000,
      leasingPrice: 444,
      imageUrl: [''],
      id: 10,
      priceRange: 85000,
      extras: 500
    },
    {
      model: 'RS 3',
      name: 'Limousine',
      buyPrice: 58000,
      leasingPrice: 465,
      imageUrl: [''],
      id: 11,
      priceRange: 85000,
      extras: 500
    },
    {
      model: 'A4',
      name: 'Limousine',
      buyPrice: 33600,
      leasingPrice: 267,
      imageUrl: [''],
      id: 12,
      priceRange:
      55000,
      extras: 500,
      motor: [
        {
          name: '25 TFSI Schaltgetriebe',
          price: 20300,
          leasing: 161,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: 'advanced 25 TFSI Schaltgetriebe',
          price: 21201,
          leasing: 170,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: '30 TFSI Schaltgetriebe',
          price: 21250,
          leasing: 172,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: '25 TFSI S tronic',
          price: 21689,
          leasing: 175,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: 'S line 25 TFSI Schaltgetriebe',
          price: 22273,
          leasing: 180,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'advanced 30 TFSI Schaltgetriebe',
          price: 22420,
          leasing: 181,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: 'advanced 25 TFSI S tronic',
          price: 22858,
          leasing: 184,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: '30 TFSI S tronic',
          price: 22907,
          leasing: 186,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: 'S line 30 TFSI Schaltgetriebe',
          price: 23492,
          leasing: 188,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'S line 25 TFSI S tronic',
          price: 23931,
          leasing: 190,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'advanced 30 TFSI S tronic',
          price: 24077,
          leasing: 193,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: '35 TFSI S tronic',
          price: 25100,
          leasing: 196,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: 'S line 30 TFSI S tronic',
          price: 25149,
          leasing: 198,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'advanced 35 TFSI S tronic',
          price: 26270,
          leasing: 225,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: 'S line 35 TFSI S tronic',
          price: 27342,
          leasing: 230,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'edition one 30 TFSI Schaltgetriebe',
          price: 27869,
          leasing: 240,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'editionOne'
        },
        {
          name: 'S line 40 TFSI S tronic',
          price: 29048,
          leasing: 255,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'edition one 30 TFSI S tronic',
          price: 29526,
          leasing: 260,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'editionOne'
        },
        {
          name: 'edition one 35 TFSI S tronic',
          price: 30744,
          leasing: 270,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'editionOne'
        },
        {
          name: 'edition one 40 TFSI S tronic',
          price: 31768,
          leasing: 284,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'editionOne'
        },
      ]
    },
    {
      model: 'A4',
      name: 'Avant',
      buyPrice: 35250,
      leasingPrice: 271,
      imageUrl: [''],
      id: 13,
      priceRange: 55000,
      extras: 500,
      motor: [
        {
          name: '25 TFSI Schaltgetriebe',
          price: 20300,
          leasing: 161,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: 'advanced 25 TFSI Schaltgetriebe',
          price: 21201,
          leasing: 170,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: '30 TFSI Schaltgetriebe',
          price: 21250,
          leasing: 172,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: '25 TFSI S tronic',
          price: 21689,
          leasing: 175,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: 'S line 25 TFSI Schaltgetriebe',
          price: 22273,
          leasing: 180,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'advanced 30 TFSI Schaltgetriebe',
          price: 22420,
          leasing: 181,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: 'advanced 25 TFSI S tronic',
          price: 22858,
          leasing: 184,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: '30 TFSI S tronic',
          price: 22907,
          leasing: 186,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: 'S line 30 TFSI Schaltgetriebe',
          price: 23492,
          leasing: 188,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'S line 25 TFSI S tronic',
          price: 23931,
          leasing: 190,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'advanced 30 TFSI S tronic',
          price: 24077,
          leasing: 193,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: '35 TFSI S tronic',
          price: 25100,
          leasing: 196,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: 'S line 30 TFSI S tronic',
          price: 25149,
          leasing: 198,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'advanced 35 TFSI S tronic',
          price: 26270,
          leasing: 225,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: 'S line 35 TFSI S tronic',
          price: 27342,
          leasing: 230,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'edition one 30 TFSI Schaltgetriebe',
          price: 27869,
          leasing: 240,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'editionOne'
        },
        {
          name: 'S line 40 TFSI S tronic',
          price: 29048,
          leasing: 255,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'edition one 30 TFSI S tronic',
          price: 29526,
          leasing: 260,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'editionOne'
        },
        {
          name: 'edition one 35 TFSI S tronic',
          price: 30744,
          leasing: 270,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'editionOne'
        },
        {
          name: 'edition one 40 TFSI S tronic',
          price: 31768,
          leasing: 284,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'editionOne'
        },
      ]
    },
    {
      model: 'A4',
      name: 'Avant g-tron',
      buyPrice: 43200,
      leasingPrice: 333,
      imageUrl: [''],
      id: 14,
      priceRange: 55000,
      extras: 500,
      motor: [
        {
          name: '25 TFSI Schaltgetriebe',
          price: 20300,
          leasing: 161,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: 'advanced 25 TFSI Schaltgetriebe',
          price: 21201,
          leasing: 170,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: '30 TFSI Schaltgetriebe',
          price: 21250,
          leasing: 172,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
      ]
    },
    {
      model: 'A4',
      name: 'allroad quattro',
      buyPrice: 50100,
      leasingPrice: 399,
      imageUrl: [''],
      id: 15,
      priceRange: 55000,
      extras: 500,
    },
    {
      model: 'S4',
      name: 'Limousine TDI',
      buyPrice: 62600,
      leasingPrice: 552,
      imageUrl: [''],
      id: 16,
      priceRange: 85000,
      extras: 626
    },
    {
      model: 'S4',
      name: 'Avant TDI',
      buyPrice: 64250,
      leasingPrice: 531,
      imageUrl: [''],
      id: 17,
      priceRange: 85000,
      extras: 642
    },
    {
      model: 'RS 4',
      name: 'Avant',
      buyPrice: 81400,
      leasingPrice: 718,
      imageUrl: [''],
      id: 18,
      priceRange: 85000,
      extras: 814
    },
    {
      model: 'A5',
      name: 'Coupe',
      buyPrice: 42900,
      leasingPrice: 319,
      imageUrl: [''],
      id: 19,
      priceRange: 55000,
      extras: 500,
      motor: [
        {
          name: '25 TFSI Schaltgetriebe',
          price: 20300,
          leasing: 161,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: 'advanced 25 TFSI Schaltgetriebe',
          price: 21201,
          leasing: 170,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: '30 TFSI Schaltgetriebe',
          price: 21250,
          leasing: 172,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: '25 TFSI S tronic',
          price: 21689,
          leasing: 175,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: 'S line 25 TFSI Schaltgetriebe',
          price: 22273,
          leasing: 180,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'advanced 30 TFSI Schaltgetriebe',
          price: 22420,
          leasing: 181,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: 'advanced 25 TFSI S tronic',
          price: 22858,
          leasing: 184,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: '30 TFSI S tronic',
          price: 22907,
          leasing: 186,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: 'S line 30 TFSI Schaltgetriebe',
          price: 23492,
          leasing: 188,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'S line 25 TFSI S tronic',
          price: 23931,
          leasing: 190,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'advanced 30 TFSI S tronic',
          price: 24077,
          leasing: 193,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: '35 TFSI S tronic',
          price: 25100,
          leasing: 196,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: 'S line 30 TFSI S tronic',
          price: 25149,
          leasing: 198,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'advanced 35 TFSI S tronic',
          price: 26270,
          leasing: 225,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: 'S line 35 TFSI S tronic',
          price: 27342,
          leasing: 230,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'edition one 30 TFSI Schaltgetriebe',
          price: 27869,
          leasing: 240,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'editionOne'
        },
        {
          name: 'S line 40 TFSI S tronic',
          price: 29048,
          leasing: 255,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'edition one 30 TFSI S tronic',
          price: 29526,
          leasing: 260,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'editionOne'
        },
        {
          name: 'edition one 35 TFSI S tronic',
          price: 30744,
          leasing: 270,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'editionOne'
        },
        {
          name: 'edition one 40 TFSI S tronic',
          price: 31768,
          leasing: 284,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'editionOne'
        },
      ]
    },
    {
      model: 'A5',
      name: 'Sportback',
      buyPrice: 42900,
      leasingPrice: 325,
      imageUrl: [''],
      id: 20,
      priceRange: 55000,
      extras: 500,
      motor: [
        {
          name: '25 TFSI Schaltgetriebe',
          price: 20300,
          leasing: 161,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: 'advanced 25 TFSI Schaltgetriebe',
          price: 21201,
          leasing: 170,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: '30 TFSI Schaltgetriebe',
          price: 21250,
          leasing: 172,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: '25 TFSI S tronic',
          price: 21689,
          leasing: 175,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: 'S line 25 TFSI Schaltgetriebe',
          price: 22273,
          leasing: 180,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'advanced 30 TFSI Schaltgetriebe',
          price: 22420,
          leasing: 181,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: 'advanced 25 TFSI S tronic',
          price: 22858,
          leasing: 184,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: '30 TFSI S tronic',
          price: 22907,
          leasing: 186,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: 'S line 30 TFSI Schaltgetriebe',
          price: 23492,
          leasing: 188,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'S line 25 TFSI S tronic',
          price: 23931,
          leasing: 190,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'advanced 30 TFSI S tronic',
          price: 24077,
          leasing: 193,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: '35 TFSI S tronic',
          price: 25100,
          leasing: 196,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'Basis'
        },
        {
          name: 'S line 30 TFSI S tronic',
          price: 25149,
          leasing: 198,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'advanced 35 TFSI S tronic',
          price: 26270,
          leasing: 225,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'advanced'
        },
        {
          name: 'S line 35 TFSI S tronic',
          price: 27342,
          leasing: 230,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'edition one 30 TFSI Schaltgetriebe',
          price: 27869,
          leasing: 240,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'editionOne'
        },
        {
          name: 'S line 40 TFSI S tronic',
          price: 29048,
          leasing: 255,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'sLine'
        },
        {
          name: 'edition one 30 TFSI S tronic',
          price: 29526,
          leasing: 260,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'editionOne'
        },
        {
          name: 'edition one 35 TFSI S tronic',
          price: 30744,
          leasing: 270,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'editionOne'
        },
        {
          name: 'edition one 40 TFSI S tronic',
          price: 31768,
          leasing: 284,
          fuel1: 'Bezin',
          fuel2: 'Diesel',
          lineType: 'editionOne'
        },
      ]
    },
    {
      model: 'A5',
      name: 'Sportback g-tron',
      buyPrice: 45100,
      leasingPrice: 342,
      imageUrl: [''],
      id: 21,
      priceRange: 55000,
      extras: 500
    },
    {
      model: 'A5',
      name: 'Cabriolet',
      buyPrice: 49100,
      leasingPrice: 365,
      imageUrl: [''],
      id: 22,
      priceRange: 55000,
      extras: 500
    },
    {
      model: 'S5',
      name: 'Spotback TDI',
      buyPrice: 66500,
      leasingPrice: 539,
      imageUrl: [''],
      id: 23,
      priceRange: 85000,
      extras: 665
    },
    {
      model: 'S5',
      name: 'Cabriolet TSFI',
      buyPrice: 69800,
      leasingPrice: 557,
      imageUrl: [''],
      id: 24,
      priceRange: 85000,
      extras: 698
    },
    {
      model: 'RS 5',
      name: 'Coupe',
      buyPrice: 83500,
      leasingPrice: 737,
      imageUrl: [''],
      id: 25,
      priceRange: 85000,
      extras: 835
    },
    {
      model: 'RS 5',
      name: 'Sportback',
      buyPrice: 83500,
      leasingPrice: 747,
      imageUrl: [''],
      id: 26,
      priceRange: 85000,
      extras: 835
    },
    {
      model: 'A6',
      name: 'Limousine',
      buyPrice: 48090,
      leasingPrice: 383,
      imageUrl: [''],
      id: 27,
      priceRange: 55000,
      extras: 500
    },
    {
      model: 'A6',
      name: 'Limousine TSFI e',
      buyPrice: 58700,
      leasingPrice: 502,
      imageUrl: [''],
      id: 28,
      priceRange: 85000,
      extras: 587
    },
    {
      model: 'A6',
      name: 'Avant',
      buyPrice: 50590,
      leasingPrice: 403,
      imageUrl: [''],
      id: 29,
      priceRange: 55000,
      extras: 500
    },
    {
      model: 'A6',
      name: 'Avant TSFI e',
      buyPrice: 71940,
      leasingPrice: 615,
      imageUrl: [''],
      id: 30,
      priceRange: 85000,
      extras: 719
    },
    {
      model: 'A6',
      name: 'allroad quattro',
      buyPrice: 62090,
      leasingPrice: 495,
      imageUrl: [''],
      id: 31,
      priceRange: 85000,
      extras: 620
    },
    {
      model: 'S6',
      name: 'Limousine TDI',
      buyPrice: 77090,
      leasingPrice: 635,
      imageUrl: [''],
      id: 32,
      priceRange: 85000,
      extras: 770
    },
    {
      model: 'S6',
      name: 'Avant TDI',
      buyPrice: 79590,
      leasingPrice: 656,
      imageUrl: [''],
      id: 33,
      priceRange: 85000,
      extras: 795
    },
    {
      model: 'RS 6',
      name: 'Avant',
      buyPrice: 117500,
      leasingPrice: 1098,
      imageUrl: [''],
      id: 34,
      priceRange: 145000,
      extras: 1175
    },
    {
      model: 'A7',
      name: 'Sportback',
      buyPrice: 58940,
      leasingPrice: 501,
      imageUrl: [''],
      id: 35,
      priceRange: 85000,
      extras: 589
    },
    {
      model: 'A7',
      name: 'Sportback TSFI e',
      buyPrice: 67900,
      leasingPrice: 599,
      imageUrl: [''],
      id: 36,
      priceRange: 85000,
      extras: 639
    },
    {
      model: 'S7',
      name: 'Sportback TDI',
      buyPrice: 83340,
      leasingPrice: 709,
      imageUrl: [''],
      id: 37,
      priceRange: 85000,
      extras: 833
    },
    {
      model: 'RS 7',
      name: 'Sportback',
      buyPrice: 121000,
      leasingPrice: 1196,
      imageUrl: [''],
      id: 38,
      priceRange: 145000,
      extras: 1210
    },
    {
      model: 'A8',
      name: '',
      buyPrice: 94150,
      leasingPrice: 770,
      imageUrl: [''],
      id: 39,
      priceRange: 115000,
      extras: 941
    },
    {
      model: 'A8',
      name: 'L',
      buyPrice: 97650,
      leasingPrice: 799,
      imageUrl: [''],
      id: 40,
      priceRange: 115000
    },
    {
      model: 'A8',
      name: 'TSFI e',
      buyPrice: 106700,
      leasingPrice: 992,
      imageUrl: [''],
      id: 41,
      priceRange: 145000,
      extras: 1067
    },
    {
      model: 'A8',
      name: 'L TSFI e',
      buyPrice: 110200,
      leasingPrice: 1024,
      imageUrl: [''],
      id: 42,
      priceRange: 145000,
      extras: 1102
    },
    {
      model: 'S8',
      name: 'TSFI',
      buyPrice: 140600,
      leasingPrice: 1226,
      imageUrl: [''],
      id: 43,
      priceRange: 145000,
      extras: 1406
    },
    {
      model: 'Q2',
      name: '',
      buyPrice: 24400,
      leasingPrice: 182,
      imageUrl: [''],
      id: 44,
      priceRange: 25000,
      extras: 500
    },
    {
      model: 'SQ2',
      name: 'TSFI',
      buyPrice: 44800,
      leasingPrice: 357,
      imageUrl: [''],
      id: 45,
      priceRange: 55000,
      extras: 500
    },
    {
      model: 'Q3',
      name: '',
      buyPrice: 34400,
      leasingPrice: 254,
      imageUrl: [''],
      id: 46,
      priceRange: 55000,
      extras: 500
    },
    {
      model: 'Q3',
      name: 'Sportback',
      buyPrice: 36000,
      leasingPrice: 256,
      imageUrl: [''],
      id: 47,
      priceRange: 55000,
      extras: 500
    },
    {
      model: 'RS Q3',
      name: '',
      buyPrice: 63500,
      leasingPrice: 557,
      imageUrl: [''],
      id: 48,
      priceRange: 85000,
      extras: 635
    },
    {
      model: 'RS Q3',
      name: 'Sportback',
      buyPrice: 65000,
      leasingPrice: 570,
      imageUrl: [''],
      id: 49,
      priceRange: 85000,
      extras: 650
    },
    {
      model: 'Q5',
      name: '',
      buyPrice: 44700,
      leasingPrice: 332,
      imageUrl: [''],
      id: 50,
      priceRange: 55000,
      extras: 500
    },
    {
      model: 'Q5',
      name: 'TSFI e',
      buyPrice: 53800,
      leasingPrice: 450,
      imageUrl: [''],
      id: 51,
      priceRange: 55000,
      extras: 500
    },
    {
      model: 'SQ5',
      name: 'TDI',
      buyPrice: 68900,
      leasingPrice: 481,
      imageUrl: [''],
      id: 52,
      priceRange: 85000,
      extras: 689
    },
    {
      model: 'Q7',
      name: '',
      buyPrice: 71900,
      leasingPrice: 531,
      imageUrl: [''],
      id: 53,
      priceRange: 85000,
      extras: 719
    },
    {
      model: 'Q7',
      name: 'TSFI e',
      buyPrice: 75700,
      leasingPrice: 623,
      imageUrl: [''],
      id: 54,
      priceRange: 85000,
      extras: 757
    },
    {
      model: 'SQ7',
      name: 'TDI',
      buyPrice: 95700,
      leasingPrice: 706,
      imageUrl: [''],
      id: 55,
      priceRange: 115000,
      extras: 957
    },
    {
      model: 'Q8',
      name: '',
      buyPrice: 77900,
      leasingPrice: 662,
      imageUrl: [''],
      id: 56,
      priceRange: 85000,
      extras: 779
    },
    {
      model: 'Q8',
      name: 'TDI',
      buyPrice: 103700,
      leasingPrice: 743,
      imageUrl: [''],
      id: 57,
      priceRange: 115000,
      extras: 1037
    },
    {
      model: 'RS',
      name: 'Q8',
      buyPrice: 129500,
      leasingPrice: 1107,
      imageUrl: [''],
      id: 58,
      priceRange: 145000,
      extras: 1295
    },
    {
      model: 'TT',
      name: 'Coupe',
      buyPrice: 37050,
      leasingPrice: 251,
      imageUrl: [''],
      id: 59,
      priceRange: 55000,
      extras: 500
    },
    {
      model: 'TT',
      name: 'Roadster',
      buyPrice: 39450,
      leasingPrice: 267,
      imageUrl: [''],
      id: 60,
      priceRange: 55000,
      extras: 500
    },
    {
      model: 'TTS',
      name: 'Coupe TSFI',
      buyPrice: 55550,
      leasingPrice: 467,
      imageUrl: [''],
      id: 61,
      priceRange: 85000,
      extras: 555
    },
    {
      model: 'TTS',
      name: 'Roadster TSFI',
      buyPrice: 58350,
      leasingPrice: 491,
      imageUrl: [''],
      id: 62,
      priceRange: 85000,
      extras: 583
    },
    {
      model: 'TT RS',
      name: 'Coupe',
      buyPrice: 68250,
      leasingPrice: 666,
      imageUrl: [''],
      id: 63,
      priceRange: 85000,
      extras: 682
    },
    {
      model: 'TT RS',
      name: 'Roadster',
      buyPrice: 71050,
      leasingPrice: 693,
      imageUrl: [''],
      id: 64,
      priceRange: 85000,
      extras: 710
    },
    {
      model: 'R8',
      name: 'Coupe V10 RWD',
      buyPrice: 37050,
      leasingPrice: 251,
      imageUrl: [''],
      id: 65,
      priceRange: 55000,
      extras: 500
    },
    {
      model: 'R8',
      name: 'Coupe V10',
      buyPrice: 39450,
      leasingPrice: 267,
      imageUrl: [''],
      id: 66,
      priceRange: 55000,
      extras: 500
    },
    {
      model: 'R8',
      name: 'Coupe V10 performance',
      buyPrice: 55550,
      leasingPrice: 467,
      imageUrl: [''],
      id: 67,
      priceRange: 85000,
      extras: 555
    },
    {
      model: 'R8',
      name: 'Spyder V10 RWD',
      buyPrice: 58350,
      leasingPrice: 491,
      imageUrl: [''],
      id: 68,
      priceRange: 85000,
      extras: 583
    },
    {
      model: 'R8',
      name: 'Spyder V10',
      buyPrice: 68250,
      leasingPrice: 666,
      imageUrl: [''],
      id: 69,
      priceRange: 85000,
      extras: 682
    },
    {
      model: 'R8',
      name: 'Spyder V10 performance',
      buyPrice: 71050,
      leasingPrice: 693,
      imageUrl: [''],
      id: 70,
      priceRange: 85000,
      extras: 710
    },
    ];
    return {models};
  }

  genId(models: Car[]): number {
    return models.length > 0 ? Math.max(...models.map(model => model.id)) + 1 : 1;
  }
}
