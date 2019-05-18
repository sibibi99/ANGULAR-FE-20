import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public TaiKhoan:string = "";
  public MatKhau:string = "123456";
  public status:boolean = false;
  public thongbao:string = "";
  isLogin:boolean = false;



  Login(taikhoan, matkhau ){
    if(matkhau === this.MatKhau)
    {
      console.log("Match");
      document.getElementById('btnClose').click();
      this.isLogin = true;
      this.TaiKhoan = taikhoan;
      localStorage.setItem('userLogin', taikhoan);

    }
    else {
      console.log("Sai Tai Khoan");
      this.thongbao = "Sai Tài khoản hoặc Mật khẩu";
    }
  }

  DangXuat (){
    this.TaiKhoan = '';
    this.isLogin = false;
    localStorage.removeItem('userLogin');
  }


  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('userLogin')){
      this.TaiKhoan = localStorage.getItem('userLogin');
      this.isLogin = true;
    }
  }

}
