import { Component, OnInit } from '@angular/core';
import { ProjectModel } from 'src/models/project/project.model';
import { RouteModel } from 'src/models/routes/route.model';
import { ReturnObject } from 'src/models/returnObj.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ApiService } from 'src/services/authentication/api.service';

@Component({
  selector: 'app-approutesbase',
  templateUrl: './approutesbase.component.html',
  styleUrls: ['./approutesbase.component.css']
})
export class ApproutesBaseComponent implements OnInit {
  route_filter: string;
  selected_project_model: ProjectModel;
  selected_project: string;
  selected_route: string;
  routes_list: RouteModel[] = [];
  is_loading_routes = false;
  is_loading_project = false;

  // Add member on project variables
  member_to_add_on_project: string;
  is_loading_member = false;
  add_member_on_board_response: ReturnObject;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    public deviceService: DeviceDetectorService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.selected_project = params['projectId'];
      this.get_project_data();
    });
  }

  select_route(routeId) {
    this.router.navigate([routeId], {
      relativeTo: this.activatedRoute.parent
    });
  }

  public get get_selected_route(): string {
    return this.activatedRoute.params['routeId'];
  }

  public get has_selected_route_on_mobile(): boolean {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      const trigger = this.router.url,
        regexp = new RegExp('\/projects\/[[:alnum:]]{24}\/[[:alnum:]]{24}'),
        test = regexp.test(trigger);
      return test;
    }
    return false;
  }


  public get get_route_list(): RouteModel[] {
    return this.route_filter ? this.routes_list.filter(x => x.Path.toUpperCase().includes(this.route_filter.toUpperCase())) : this.routes_list;
  }

  public css_class_of_path_method(method: string): string {
    switch (method) {
      case 'POST':
        return 'warning text-dark';
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

  async get_project_details() {
    this.is_loading_project = true;
    this.selected_project_model = await this.api.get(`/api/projects/${this.selected_project}`);
    this.is_loading_project = false;

    // this.http.get<ReturnObject>('/api/projects/' + this.selected_project)
    //   .subscribe(
    //     (res) => { this.selected_project_model = res.data; this.is_loading_project = false; },
    //     (err) => { this.is_loading_project = false; }
    //   );
  }

  async get_all_routes() {
    this.is_loading_routes = true;
    this.routes_list = await this.api.get(`/api/projectRoutes/${this.selected_project}`);
    this.is_loading_routes = false;

    // this.http.get('/api/projectRoutes/' + this.selected_project)
    //   .subscribe(
    //     (res: any) => { this.routes_list = res.data || []; this.is_loading_routes = false; },
    //     (err) => { this.is_loading_routes = false; }
    //   );
  }

  get_project_data() {
    this.get_all_routes();
    this.get_project_details();
  }

  async add_member_on_project() {
    this.is_loading_member = true;
    this.add_member_on_board_response = await this.api.get(`/api/projects/add-member/${this.selected_project}/${this.member_to_add_on_project}`, true);
    if (this.add_member_on_board_response.success) {
      this.selected_project_model.Members = this.add_member_on_board_response.data;
      this.member_to_add_on_project = '';
    }
    this.is_loading_member = false;

    // this.http.get<ReturnObject>(`/api/projects/add-member/${this.selected_project}/${this.member_to_add_on_project}`)
    //   .subscribe(
    //     (res) => {
    //       this.add_member_on_board_response = res;
    //       if (this.add_member_on_board_response.success) {
    //         this.selected_project_model.Members = res.data;
    //         this.member_to_add_on_project = '';
    //       }
    //       this.is_loading_member = false;
    //     },
    //     (err) => { this.is_loading_member = false; }
    //   );
  }

  async remove_member_from_project(memberId: string) {
    this.is_loading_member = true;
    const res: ReturnObject = await this.api.delete(`/api/projects/remove-member/${this.selected_project}/${memberId}`, true);
    if (res.success) {
      this.selected_project_model.Members = res.data;
    }
    this.is_loading_member = false;

    // this.http.get<ReturnObject>(`/api/projects/remove-member/${this.selected_project}/${memberId}`)
    //   .subscribe(
    //     (res) => {
    //       if (res.success) {
    //         this.selected_project_model.Members = res.data;
    //       }
    //       this.is_loading_member = false;
    //     },
    //     (err) => { this.is_loading_member = false; }
    //   );
  }

}
