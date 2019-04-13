import { Component, OnInit } from '@angular/core';
import { ProjectModel } from 'src/models/project/project.model';
import { RouteModel } from 'src/models/routes/route.model';
import { ReturnObject } from 'src/models/returnObj.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-approutesbase',
  templateUrl: './approutesbase.component.html',
  styleUrls: ['./approutesbase.component.css']
})
export class ApproutesBaseComponent implements OnInit{
  routeFilter: string;
  selectedProjectModel: ProjectModel;
  selectedProject: string;
  selectedRoute: string;
  routesList: RouteModel[] = [];
  isLoadingRoutes = false;
  isLoadingProject = false;

  // Add member on project variables
  memberToAddOnProject: string;
  isLoadingMember = false;
  addMemberOnBoardResponse: ReturnObject;

  constructor(private activatedRoute: ActivatedRoute, 
              private router: Router,
              private http: HttpClient,
              public deviceService: DeviceDetectorService) {
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.selectedProject = params['projectId'];
      this.getProjectData();
    });
  }

  selectRoute(routeId){
    this.router.navigate([routeId],  {
      relativeTo: this.activatedRoute.parent
    });
  }

  public get getSelectedRoute() : string {
    return this.activatedRoute.params['routeId'];
  }

  public get has_selected_route_on_mobile(): boolean {
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      const trigger = this.router.url,
        regexp = new RegExp('\/projects\/[[:alnum:]]{24}\/[[:alnum:]]{24}'),
        test = regexp.test(trigger);
      return test;
     }
     return false;
  }
  

  public get getRouteList(): RouteModel[] {
    return this.routeFilter ? this.routesList.filter(x => x.Path.toUpperCase().includes(this.routeFilter.toUpperCase())) : this.routesList;
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

  getProjectDetails() {
    this.isLoadingProject = true;
    this.http.get<ReturnObject>('/api/projects/' + this.selectedProject )
        .subscribe(
          (res) => { this.selectedProjectModel = res.data; this.isLoadingProject = false; },
          (err) => { this.isLoadingProject = false;  }
        );
  }

  getAllRoutes() {
    this.isLoadingRoutes = true;
    this.http.get('/api/projectRoutes/' + this.selectedProject )
        .subscribe(
          (res: any) => { this.routesList = res.data || []; this.isLoadingRoutes = false;  },
          (err) => { this.isLoadingRoutes = false;  }
        );
  }

  getProjectData() {
    this.getAllRoutes();
    this.getProjectDetails();
  }

  addMemberOnProject() {
    this.isLoadingMember = true;
    this.http.get<ReturnObject>(`/api/projects/add-member/${this.selectedProject}/${this.memberToAddOnProject}`)
        .subscribe(
          (res) => {
            this.addMemberOnBoardResponse = res;
            if (this.addMemberOnBoardResponse.success) {
              this.selectedProjectModel.Members = res.data;
              this.memberToAddOnProject = '';
            }
            this.isLoadingMember = false;
          },
          (err) => { this.isLoadingMember = false; }
        );
  }

  removeMemberFromBoard(memberId: string) {
    this.isLoadingMember = true;
    this.http.get<ReturnObject>(`/api/projects/remove-member/${this.selectedProject}/${memberId}`)
        .subscribe(
          (res) => {
            if (res.success) {
              this.selectedProjectModel.Members = res.data;
            }
            this.isLoadingMember = false;
          },
          (err) => { this.isLoadingMember = false; }
        );
  }

}
