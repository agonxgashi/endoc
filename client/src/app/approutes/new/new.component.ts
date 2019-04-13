import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeaderModel } from 'src/models/routes/header.model';
import { RouteModel } from 'src/models/routes/route.model';
import { ReturnObject } from 'src/models/returnObj.model';
import { ParameterModel } from 'src/models/routes/parameter.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  routeToCreate: RouteModel = new RouteModel();
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
    this.activatedRoute.parent.params.subscribe((pParams: Params) => {
      this.routeToCreate.ProjectId  = pParams['projectId'];
    });
  }

  saveRoute() {
    this.http.post<ReturnObject>('/api/projectRoutes', this.routeToCreate)
        .subscribe(
          (res) => {
            window.location.reload();
          },
          (err) => { window.location.reload(); }
        );
  }

// Helper methods
  addNewHeader() {
    this.routeToCreate.Headers.push(new HeaderModel());
  }

  removeHeader(index: number) {
    this.routeToCreate.Headers.splice(index, 1);
  }

  addNewParameter() {
    this.routeToCreate.Parameters.push(new ParameterModel());
  }

  removeParameter(index: number) {
    this.routeToCreate.Parameters.splice(index, 1);
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
