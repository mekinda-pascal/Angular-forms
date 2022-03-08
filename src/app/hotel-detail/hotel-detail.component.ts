import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';
import { IArticle } from '../dashboard/article.modele';



@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.scss']
})
export class HotelDetailComponent implements OnInit {

  public article: IArticle = <IArticle><unknown>[];

  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private hotelService: DashboardService
  ) {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.id = params['id'];
      console.log('NewId: ',this.id);

    })
   }

  ngOnInit(): void {
    //En initialisant la valeur de id a 1 c'est toujours le premier hotel qui s'affiche
    const id = this.id;
     console.log('NewId02: ',this.id);

    this.hotelService.getAllArticle().subscribe((articles: any) => {

      this.article = articles.find((article: { id: number; }) => article.id == id);
      console.log('article: ',this.article);

    });


    }
    public backToList(): void {
    this.router.navigate(['/dashboard']);
  }

  }


