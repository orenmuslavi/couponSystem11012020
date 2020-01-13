import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  private _urlGetAll = "http://localhost:8080/admin/companies"
  public companies = [];
  //companySearch: CompanyComponent[] = [];
  name: string;
  private data;


  constructor(private http: HttpClient) { }

  ngOnInit() {

    let resp = this.http.get(this._urlGetAll);
    resp.subscribe((data) => console.log(data));
    //Get All Companies 
    this.http.get(this._urlGetAll).subscribe((data: any[]) => {
      this.companies = data;     
    });
  }

  Search() {

    if (this.name != "") {
      this.companies = this.companies.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLowerCase())
      });
    }
    else {
      this.ngOnInit();
    }
  }

}
