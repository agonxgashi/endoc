import { AppuserModel } from '../auth/AppUser.mode';

export class ProjectModel {
    _id: string;
    Title: string;
    Description: string;
    Members: any[] = [];
    DateCreated: Date;
    CreatedBy: string;
}
