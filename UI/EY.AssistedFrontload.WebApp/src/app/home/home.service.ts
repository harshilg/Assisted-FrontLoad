import{Injectable} from '@angular/core'
import{Headers, Http, RequestOptions} from '@angular/http';
import { GetHeaders } from './getheader.service';
@Injectable()
export class Homeservice{

    constructor(private http:Http, private getheader:GetHeaders){}
    getAssigneeList()
    {
        let requestOptions = new RequestOptions();
        requestOptions = this.getheader.get();
        return this.http.get('http://localhost:51549/api/case/GetCases');
    }
}
