import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeaderModel } from 'src/models/routes/header.model';
import { RouteModel } from 'src/models/routes/route.model';
import { ReturnObject } from 'src/models/returnObj.model';
import { ParameterModel } from 'src/models/routes/parameter.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  routeToEdit: RouteModel = new RouteModel();
  methods: string[];
  parameterTypes: string[];
  parameterDataTypes: string[];
  headersAutocomplete = [
    'Accept-Patch',
    'Accept-Ranges',
    'Age',
    'Allow',
    'Alt-Svc',
    'Authorization',
    'Cache-Control',
    'Connection',
    'Content-Disposition',
    'Content-Encoding',
    'Content-Language',
    'Content-Length',
    'Content-Location',
    'Content-Range',
    'Content-Type',
    'Date',
    'Delta-Base',
    'ETag',
    'Expires',
    'IM',
    'Last-Modified',
    'Link',
    'Location',
    'Pragma',
    'Proxy-Authenticate',
    'Public-Key-Pins',
    'Retry-After',
    'Server',
    'Set-Cookie',
    'Strict-Transport-Security',
    'Trailer',
    'Transfer-Encoding',
    'Tk',
    'Upgrade',
    'Vary',
    'Via',
    'Warning',
    'WWW-Authenticate',
  ];

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
    this.fill_methods();
    this.fill_parametertypes();
    this.fill_parameterDataTypes();
  }

    ngOnInit() {
      this.activatedRoute.params.subscribe((params: Params) => {
        this.routeToEdit._id = params['routeId'];
        this.activatedRoute.parent.params.subscribe((pParams: Params) => {
          this.routeToEdit.ProjectId = pParams['projectId'];
          this.getRouteDetails();
        });
      });
    }

    getRouteDetails() {
      this.http.get(`/api/projectRoutes/${this.routeToEdit.ProjectId}/${this.routeToEdit._id}`)
          .subscribe(
            (res: any) => { this.routeToEdit = res.data || undefined; }
          );
    }

    updateRoute() {
      this.http.post<ReturnObject>('/api/projectRoutes/update', this.routeToEdit)
        .subscribe(
          (res) => {
          },
          (err) => { console.log(err); }
        );
  }

// Helper methods
  addNewHeader() {
    this.routeToEdit.Headers.push(new HeaderModel());
  }

  removeHeader(index: number) {
    this.routeToEdit.Headers.splice(index, 1);
  }

  addNewParameter() {
    this.routeToEdit.Parameters.push(new ParameterModel());
  }

  removeParameter(index: number) {
    this.routeToEdit.Parameters.splice(index, 1);
  }

  private fill_methods() {
    // TODO: Fetch types from DB
    this.methods =  ['GET', 'POST', 'PUT', 'DELETE'];
  }

  private fill_parametertypes() {
    // TODO: Fetch types from DB
    this.parameterTypes = ['URL', 'BODY', 'QUERY'];
  }

  private fill_parameterDataTypes() {
    // TODO: Fetch types from DB
    this.parameterDataTypes =  ['String', 'Integer', 'Boolean', 'Float', 'Object', 'ObjectId', 'Array'];
  }

}
