import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public imagePath;
  showSpinner = false
  title = 'frontend';
  url: any
  is_disabled = false

  serving_url = 'http://banner_generation.akaiketech.com/api/v1/generate_banner'
  downloadURL = null
  src = null
  show = false
  text = ''
  food_item = ''
  offer_value = ''
  coupon_code = ''
  restaurant_name = ''
  logo_link = ''
  copy_description = ''
 image_url='http://banner_generation.akaiketech.com'
 image=''
  type
  constructor(private httpClient: HttpClient) {

  }
  // clear() {
  //   this.show = false

  // }
  // on_file_select(event) {

  //   this.show = false

  //   this.selectedFile = <File>event.target.files[0]
  //   // console.log(event.target.value.split("."))

  //   this.file_meta = event.target.files[0]
  //   this.file_name = this.file_meta['name']
  //   this.type = this.file_meta['type'].split("/")[0]

  //   if (event.target.files && event.target.files[0]) {
  //     const file = event.target.files[0];

  //     const reader = new FileReader();
  //     reader.onload = e => this.url = reader.result;

  //     reader.readAsDataURL(file);
  //     this.is_disabled = false







  //   }

  // }

  validUpload() {
    if (this.food_item == '' || this.restaurant_name == '') {
      
      return false


    }
    else { return true }
  }
  upload() {

    if (this.validUpload()) {

      this.show=false
      this.is_disabled = true
      var data = {
        
        'food_item': this.food_item,
        'offer_value': this.offer_value,
        'coupon_code': this.coupon_code,
        'restaurant_name': this.restaurant_name,
        'logo_link': this.logo_link,
        'copy_description': this.copy_description
      }
      console.log(data)
      this.httpClient.post(this.serving_url, data)
        .subscribe(res => {
          console.log('response', res)
          
          this.show = true
          this.is_disabled = false
          this.src = res['banner']
          this.image=this.image_url+res['banner_url']
         


        })



    }
    else{
      alert("Food Item and Restaurant Name are required")
    }
  }
 

}
