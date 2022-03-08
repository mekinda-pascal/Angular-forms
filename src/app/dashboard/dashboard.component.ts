import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { IArticle } from './article.modele';
import { DashboardService } from '../dashboard.service';
import { LoaderService } from '../loader/loader.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public id:number = 0;

  public showBadge: boolean = false;

  public title: string = "Liste d'articles";

  private _articleFilter = '';

  public articles: any;

  public res: any;

  public filteredArticles: IArticle[] = [];

  public article: any;

  hotelListService: any;

  loading: boolean = false;

  public toggleIsNewBadge(): void{
    this.showBadge = !this.showBadge;
  }

  public errMsg: string | undefined;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  opened: boolean = false;

  constructor(
    private articleService: DashboardService,
    private toastr: ToastrService,
    private router: Router,
    private observer: BreakpointObserver,
    public loaderService: LoaderService,
  ) { }

  ngOnInit(): void {
    this.loading = true;
    // this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
    //   console.log('E1 =',res.matches);

    //    if (res.matches) {
    //      console.log('E2 = ',res.matches);
    //      this.sidenav.mode = 'side'
    //      this.sidenav.close()
    //    } else {
    //      console.log('E3 = ',res.matches);
    //      this.sidenav.mode = 'side'
    //      this.sidenav.open();
    //    }
    // });

    this.articleService.getAllArticle().subscribe(
      (data: any) => {
        console.log('Succes');
        console.log('data: ', data);
        this.articles = data;
        console.log('articles: ', this.articles);
      },
      (error: any) => {
        console.log(error);
        //alert(" Erreur lors du chargement des données verifier votre connexion internet ");
      }
    );

    this.res = this.articleService.getAllArticle().subscribe({
      next: (articles: any) => {
        this.articles = articles;
        this.filteredArticles = this.articles;
      },
      error: (err: string) => (
        this.errMsg = err
      ),
    });


    this.articleFilter = '';

  }

  Next()
  {
    this.router.navigate(['/menu']);
      //pour les tost, il y'en a 4 principalement: toastr.succes, .error, .info, .warning
    this.toastr.success("Connexion effectuée avec succes");
  }
  Nt()
  {
    this.router.navigate(['/home']);
      //pour les tost, il y'en a 4 principalement: toastr.succes, .error, .info, .warning
   // this.toastr.success("Connexion effectuée avec succes");
  }

  public get articleFilter(): string {
    return this._articleFilter;
  }

  public set articleFilter(filter: string) {
    this._articleFilter = filter;

    this.filteredArticles = this.articleFilter
      ? this.filterArticles(this.articleFilter)
      : this.articles;
  }

  private filterArticles(critere: string): IArticle[] {
    critere = critere.toLocaleLowerCase();
    const res = this.articles.filter(
      (article: IArticle) =>
        article.title.toLocaleLowerCase().indexOf(critere) != -1
    );

    return res;
  }

  public getOneArticle(): void {
    this.hotelListService.getAllArticle().subscribe((articles: IArticle[]) => {
      this.article = articles.find((article) => article.id === this.id);
      console.log('id: ', this.id);
    });
  }

  public detailService(id: number): any {
    const param: NavigationExtras = {
      queryParams: {
        id: id,
      },
    };
    this.router.navigate(['/hotel-detail'], param);
  }






}
