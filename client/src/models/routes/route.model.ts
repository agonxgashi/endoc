import { HeaderModel } from './header.model';
import { ParameterModel } from './parameter.model';

export class RouteModel {
    _id: string;
    ProjectId: string;
    IsProtected = false;
    Method: string;
    Path: string;
    Description: string;
    Headers: HeaderModel[] = [];
    Parameters: ParameterModel[] = [];
    ResponseExample: string;
}
