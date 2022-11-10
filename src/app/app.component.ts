import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';
import {allModel} from './components/all-common/allModels';
import {ServicesService} from './components/all-common/allServices';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
declare let $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class AppComponent implements OnInit {
    location: any;
    public user = new allModel();
    routerSubscription: any;
    loginForm: FormGroup;
    submitted = false;
    returnUrl: string;
    loading: boolean;

    constructor(private router: Router,private route: ActivatedRoute, private formBuilder: FormBuilder,
        private userService: ServicesService,) {
    }

    ngOnInit(){
        this.recallJsFuntions();
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
        //this.userService.logout();
        // get return url from route parameters or default to '/'
       this.returnUrl = this.route.snapshot.queryParams['/checkout'] || '/checkout';
          //this.getLogin();
          this.onSubmit();
    }


    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;
  
        // reset alerts on submit
    
  
        // stop here if form is invalid
        // if (this.loginForm.invalid) {
        //     return;
        // }
  
        this.loading = true;
       // this.f.email.value='lioevadmin_temp@gmail.com';
        this.userService.login('admin@lioev.com', 'G4Growth710')
            .pipe(first())
            .subscribe(
                data => {
                     console.log(data);
                  // if(data.status===false){
                  //   this.ErrorMsg = true;
                  //   return false;
                  // }else{
                  //  localStorage.getItem('currentUser');
  
                  //  //this.router.navigate([this.returnUrl])
                  //  .then(() => {
                  //   window.location.reload();
                  // });
               
                  // }
                },
                error => {
                //   this.loading = false;
                //   this.ErrorMsg = true;
                });
    }



    recallJsFuntions() {
        this.router.events
        .subscribe((event) => {
            if ( event instanceof NavigationStart ) {
                $('.preloader').fadeIn('slow');
            }
        });
        this.routerSubscription = this.router.events
        .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
        .subscribe(event => {
            $.getScript('../assets/js/custom.js');
            $('.preloader').fadeOut('slow');
            this.location = this.router.url;
            if (!(event instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
}