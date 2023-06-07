import { Component, OnInit } from '@angular/core';
import { AzureAdDemoService } from '../azure-ad-demo.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data:any;
  isUserLoggedIn:boolean=false;
  constructor(private azureAdDemoService:AzureAdDemoService) { }

  ngOnInit(): void {
    this.azureAdDemoService.isUserLoggedIn.subscribe(
      x=>{
        this.isUserLoggedIn=x;
      }
    )
  }

  token(){
    const data = {
      "subject": "Team Meeting",
      "start": {
        "dateTime": "2023-06-07T10:00:00",
        "timeZone": "Pacific Standard Time"
      },
      "end": {
        "dateTime": "2023-06-07T11:00:00",
        "timeZone": "Pacific Standard Time"
      },
      "attendees": [
        {
          "emailAddress": {
            "address": "kabin.m@diggibyte.com",
            "name": "kabin"
          },
          "type": "required"
        },
        {
          "emailAddress": {
            "address": "vikash.kumar@diggibyte.com",
            "name": "vikash kumar"
          },
          "type": "required"
        }
      ]
    }
    this.azureAdDemoService.schedulMeeting(data).subscribe((res:any)=>{ 
      console.log(res);
    })
  }

}
