import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RouteModel } from 'src/models/routes/route.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  _project: string;
  _route: string;
  selectedRoute: RouteModel;
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this._route = params['routeId'];
      this.activatedRoute.parent.params.subscribe((pParams: Params) => {
        this._project = pParams['projectId'];
        this.getRouteDetails();
      });
    });
  }

  getRouteDetails() {
    this.http.get(`/api/projectRoutes/${this._project}/${this._route}`)
        .subscribe(
          (res: any) => { this.selectedRoute = res.data || undefined; }
        );
  }

  
  public get css_class_of_path_method(): string {
    switch (this.selectedRoute.Method) {
      case 'POST':
        return 'warning';
      case 'GET':
        return 'primary';
      case 'DELETE':
        return 'danger';
      case 'PUT':
        return 'success';
      default:
        return 'dark';
    }
  }
}
