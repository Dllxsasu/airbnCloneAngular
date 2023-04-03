import { AfterViewInit, Component, ElementRef, Input,OnInit, ViewChild } from '@angular/core';
import { AlertController, IonContent, PopoverController } from '@ionic/angular';
import {FormGroup,FormBuilder, FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import  '@doubletrade/lit-datepicker';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild("searchBar", {static:true,read:ElementRef}) searchBar!:ElementRef<HTMLIonRowElement>;  
  @Input() public ionContent!:IonContent;
  @Input() public places:any[]=[];
  public segmentVisible:string| undefined="";
  public form!:FormGroup;

  constructor(private builder:FormBuilder,private router:Router,
    private  alertCtrl:AlertController,
    private ref:ElementRef<HTMLElement>){

  }
  ngAfterViewInit(): void {
   if(!this.ionContent.scrollEvents) {
    this.ref.nativeElement.classList.add("scrolled");
    this.ref.nativeElement.classList.add("static");
    return;
   }
   this.ionContent.scrollEvents = true;
   this.ionContent.ionScroll.subscribe( (evt) =>{
    this.scrolling(evt);
   })
  }

  ngOnInit(): void {
    const require =
    this.form = new FormGroup({
      where: new FormControl('',[Validators.required]),
      arrivalDate: new FormControl('',[Validators.required]),
      departureDate: new FormControl('',[Validators.required]),
      who: new FormGroup({
        adultCount: new FormControl(0), //seteamose el vlaor inicial y no requerir
        childrenCount: new FormControl(0), //seteamose el vlaor inicial y no requerir
        babyCount: new FormControl(0), //seteamose el vlaor inicial y no requerir
      }),
    })
  }

  scrolling(event:any){
    const {detail: {scrollTop = 0} ={}} = event;
    if(!this.ref.nativeElement){
      return;
    }
    if(scrollTop > 5 ){
      this.ref.nativeElement.classList.add("scrolled");
      this.segmentVisible=undefined;
        if(this.searchBar){
            this.searchBar.nativeElement.classList.remove("active");
        }else{
          this.ref.nativeElement.classList.remove("scrolled");
        }
    }else{
      this.ref.nativeElement.classList.remove("scrolled");
    }
  }

  async activate(segmentName:string){
    this.segmentVisible = segmentName;
  }  
  setWhere(value:any){
    if(!this.form){
      return;
    }
    this.form.patchValue({where:value});
    this.segmentVisible = "arrivalDate";
  }

  setDates(event:any,inputEl:any,){
    const {detail:{value}}= event;
    if(!value){
      return;
    }
    if(inputEl=="from"){
      this.form.patchValue({
        arrivalDate:value
      });
    }else{
      this.form.patchValue({
        departureDate:value
      });
    }


  }
//BackHome function ( )

async backHome(){
  this.router.navigate(["./"])
}
  //search QUERY
  async search(){
    alert(!this.form!.valid)
    if(!this.form!.valid){
        const alert =await this.alertCtrl.create({
          header:"error",
          message:"debe rellenar los datos correctamente <i>Adresses</i>",
          buttons: [{text: 'ok'}]
        });
        alert.present();
        return;
    }

    const queryParmsx = this.form? {
       ...this.form.value,
       ...this.form.value.who
    }:{};
    console.log(queryParmsx)
    this.router.navigate(["/s"],{queryParams: queryParmsx});
  }


}
