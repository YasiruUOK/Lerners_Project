import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  errorMessage: any;
  
  constructor() { }

  ngOnInit(): void {
  }

  imgCollection: Array<object> = [
    {
      image: 'https://scontent.fcmb11-1.fna.fbcdn.net/v/t39.30808-6/262367993_208645738116810_4212318449159631503_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=uZLoPljWrN4AX9N2r3r&_nc_ht=scontent.fcmb11-1.fna&oh=d34f245b5cc455f48e22aa8e6944edfb&oe=61B504FB',
      thumbImage: 'https://scontent.fcmb11-1.fna.fbcdn.net/v/t39.30808-6/262502656_208645694783481_8450447450318196982_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=JRqWego4nMcAX_De3Z7&tn=4SnruiAaiCZSjXom&_nc_ht=scontent.fcmb11-1.fna&oh=7f416a2b37dd9032433c6febbf5dc10d&oe=61B43788',
      alt: 'Image 1',
      title: 'Image 1',
      imageSize : {width: 205, height: 200, space: 3}
    }, {
      image: 'https://loremflickr.com/600/400/brazil,rio',
      thumbImage: 'https://scontent.fcmb11-1.fna.fbcdn.net/v/t39.30808-6/248581182_647830153290985_1088562353363752247_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=t9URhdriMfQAX8Jfuma&_nc_ht=scontent.fcmb11-1.fna&oh=6b1f5a8efa64a8c842ed9c4666721ea3&oe=61B4985A',
      title: 'Image 2',
      alt: 'Image 2'
    }, {
      image: 'https://loremflickr.com/600/400/paris,girl/all',
      thumbImage: 'https://scontent.fcmb11-1.fna.fbcdn.net/v/t39.30808-6/240654232_611241370283197_2448691527157069319_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=PZhzYeV6kzsAX-4YBOL&_nc_ht=scontent.fcmb11-1.fna&oh=ab0a03b8775ab3822b8e32a5175c7bf0&oe=61B42D2C',
      title: 'Image 3',
      alt: 'Image 3'
    }, {
      image: 'https://loremflickr.com/600/400/brazil,rio',
      thumbImage: 'https://scontent.fcmb11-1.fna.fbcdn.net/v/t1.6435-9/199056301_553447372729264_309077472353321807_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=rYjsyw0hfpAAX8BDkRJ&_nc_ht=scontent.fcmb11-1.fna&oh=238e449955bd394299f37cc8e8c237a3&oe=61D39A4E',
      title: 'Image 4',
      alt: 'Image 4'
    }, {
      image: 'https://loremflickr.com/600/400/paris,girl/all',
      thumbImage: 'https://scontent.fcmb11-1.fna.fbcdn.net/v/t39.30808-6/252279419_648445889896078_8061031639091409640_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=0debeb&_nc_ohc=ewrNlui3XyUAX9Tda4m&_nc_ht=scontent.fcmb11-1.fna&oh=7defadd0ca545ed5401e05917f0bc25c&oe=61B3BEDA',
      title: 'Image 5',
      alt: 'Image 5'
    }, {
      image: 'https://loremflickr.com/600/400/brazil,rio',
      thumbImage: 'https://scontent.fcmb11-1.fna.fbcdn.net/v/t39.30808-6/257500657_442081914259933_984401993157168179_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=b9115d&_nc_ohc=Bb_UTzQFCrwAX_7IF4R&_nc_ht=scontent.fcmb11-1.fna&oh=337993c6143c0b580430a6fac90978b0&oe=61B420B3',
      title: 'Image 6',
      alt: 'Image 6'
    }
  ];

}
