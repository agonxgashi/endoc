import { Component, OnInit } from '@angular/core';
import { ProjectModel } from 'src/models/project/project.model';
import { JwtManager } from 'src/services/authentication/jwt-manager.service';
import { ReturnObject } from 'src/models/returnObj.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectToCreate: ProjectModel = new ProjectModel();
  projectList: ProjectModel[] = [];
  isLoadingProjects = false;

  constructor(private http: HttpClient, private login: JwtManager) { }

  ngOnInit() {
    this.getProjectList();
  }

  getProjectList() {
    this.isLoadingProjects = true;
    const userId = this.login.getUser()._id;

    this.http.get<ReturnObject>('/api/projects/all/' + userId)
      .subscribe(
        (res: any) => {
          this.projectList = res.data || [];
          this.isLoadingProjects = false;
        }
      );
  }


  public get temp(): ProjectModel[] {
    return this.projectList;
  }

  saveProject() {
    const userId = this.login.getUser()._id;
    this.projectToCreate.Members.push(userId);
    this.projectToCreate.CreatedBy = userId;
    this.http.post<ReturnObject>('/api/projects', this.projectToCreate)
      .subscribe(
        (res) => {
          this.projectList = res.data || [];
          if (res.success) {
            this.projectToCreate = new ProjectModel();
          }
        }
      );
  }
}
