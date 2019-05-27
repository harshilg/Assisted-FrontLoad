import { Headers, RequestOptions, Http } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class GetHeaders {
constructor(private http: Http) { }
private headers: Headers = new Headers(
{
"Access-Control-Allow-Origin": "*",
"Content-Type": "application/json",
"Access-Control-Allow-Methods": "*",
"Access-Control-Allow-Headers": "Content-Type"
});
get() {
var options = new RequestOptions({ headers: this.headers, withCredentials:false});
return options;
}
}